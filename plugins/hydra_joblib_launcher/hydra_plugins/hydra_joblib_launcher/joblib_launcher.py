# Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

from joblib import Parallel, delayed  # type: ignore
from omegaconf import DictConfig, open_dict

from hydra.core.config_loader import ConfigLoader
from hydra.core.config_search_path import ConfigSearchPath
from hydra.core.hydra_config import HydraConfig
from hydra.core.singleton import Singleton
from hydra.core.utils import (
    JobReturn,
    configure_log,
    filter_overrides,
    run_job,
    setup_globals,
)
from hydra.plugins.launcher import Launcher
from hydra.plugins.search_path_plugin import SearchPathPlugin
from hydra.types import TaskFunction

log = logging.getLogger(__name__)


class JoblibLauncherSearchPathPlugin(SearchPathPlugin):
    """
    This plugin is allowing configuration files provided by the JoblibLauncher plugin to be
    discovered and used once the plugin is installed
    """

    def manipulate_search_path(self, search_path: ConfigSearchPath) -> None:
        # Appends the search path for this plugin to the end of the search path
        search_path.append(
            "hydra-joblib-launcher", "pkg://hydra_plugins.hydra_joblib_launcher.conf",
        )


class JoblibLauncher(Launcher):
    def __init__(self, joblib: Dict[str, Any] = {},) -> None:
        """Joblib Launcher

        Launches parallel jobs using Joblib.Parallel. For details, refer to:
        https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html

        This plugin is based on the idea and inital implementation of @emilemathieutmp:
        https://github.com/facebookresearch/hydra/issues/357
        """
        self.config: Optional[DictConfig] = None
        self.config_loader: Optional[ConfigLoader] = None
        self.task_function: Optional[TaskFunction] = None

        self.joblib = joblib

    def setup(
        self,
        config: DictConfig,
        config_loader: ConfigLoader,
        task_function: TaskFunction,
    ) -> None:
        self.config = config
        self.config_loader = config_loader
        self.task_function = task_function

    def launch(self, job_overrides: Sequence[Sequence[str]]) -> Sequence[JobReturn]:
        """
        :param job_overrides: a List of List<String>, where each inner list is the arguments for one job run.
        :return: an array of return values from run_job with indexes corresponding to the input list indexes.
        """
        setup_globals()
        assert self.config is not None
        assert self.config_loader is not None
        assert self.task_function is not None

        configure_log(self.config.hydra.hydra_logging, self.config.hydra.verbose)
        sweep_dir = Path(str(self.config.hydra.sweep.dir))
        sweep_dir.mkdir(parents=True, exist_ok=True)
        log.info(
            "Joblib.Parallel({}) is launching {} jobs".format(
                ",".join([f"{k}={v}" for k, v in self.joblib.items()]),
                len(job_overrides),
            )
        )
        log.info("Sweep output dir : {}".format(sweep_dir))

        singleton_state = Singleton.get_state()

        runs = Parallel(**self.joblib)(
            delayed(dispatch_job)(
                idx,
                overrides,
                self.config_loader,
                self.config,
                self.task_function,
                singleton_state,
            )
            for idx, overrides in enumerate(job_overrides)
        )

        assert isinstance(runs, List)
        for run in runs:
            assert isinstance(run, JobReturn)
        # reconfigure the logging subsystem for Hydra as the run_job call configured it for the Job.
        configure_log(self.config.hydra.hydra_logging, self.config.hydra.verbose)
        return runs


def dispatch_job(
    idx: int,
    overrides: Sequence[str],
    config_loader: ConfigLoader,
    config: DictConfig,
    task_function: TaskFunction,
    singleton_state: Dict[Any, Any],
) -> JobReturn:
    """Calls `run_job` in parallel

    Note that Joblib's default backend runs isolated Python processes, see
    https://joblib.readthedocs.io/en/latest/parallel.html#shared-memory-semantics
    """
    setup_globals()
    Singleton.set_state(singleton_state)

    log.info("\t#{} : {}".format(idx, " ".join(filter_overrides(overrides))))
    sweep_config = config_loader.load_sweep_config(config, list(overrides))
    with open_dict(sweep_config):
        sweep_config.hydra.job.id = "{}_{}".format(sweep_config.hydra.job.name, idx)
        sweep_config.hydra.job.num = idx
    HydraConfig.instance().set_config(sweep_config)

    ret = run_job(
        config=sweep_config,
        task_function=task_function,
        job_dir_key="hydra.sweep.dir",
        job_subdir_key="hydra.sweep.subdir",
    )

    return ret