(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(266)),o={id:"strict_mode_flag_deprecated",title:"strict flag mode deprecation",hide_title:!0},c={unversionedId:"upgrades/0.11_to_1.0/strict_mode_flag_deprecated",id:"upgrades/0.11_to_1.0/strict_mode_flag_deprecated",isDocsHomePage:!1,title:"strict flag mode deprecation",description:"strict flag mode deprecation",source:"@site/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated.md",slug:"/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",permalink:"/docs/next/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1619571889,formattedLastUpdatedAt:"4/28/2021",sidebar:"docs",previous:{title:"Adding an @package directive",permalink:"/docs/next/upgrades/0.11_to_1.0/adding_a_package_directive"},next:{title:"Object instantiation changes",permalink:"/docs/next/upgrades/0.11_to_1.0/object_instantiation_changes"}},d=[{value:"strict flag mode deprecation",id:"strict-flag-mode-deprecation",children:[]},{value:"Alternatives to <code>strict=False</code>",id:"alternatives-to-strictfalse",children:[{value:"Adding config fields through the command line",id:"adding-config-fields-through-the-command-line",children:[]},{value:"Adding fields at runtime",id:"adding-fields-at-runtime",children:[]},{value:"Field existence check",id:"field-existence-check",children:[]}]}],l={toc:d};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"strict-flag-mode-deprecation"},"strict flag mode deprecation"),Object(a.b)("p",null,"The strict mode is a flag added to ",Object(a.b)("inlineCode",{parentName:"p"},"@hydra.main()")," to enable two features:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Command line error detection (overriding a field not in the config)"),Object(a.b)("li",{parentName:"ul"},"Runtime config access error detection (accessing/setting a field not in the config)")),Object(a.b)("p",null,"This flag is now deprecated, and the ability to turn it off will be removed in Hydra 1.1."),Object(a.b)("h2",{id:"alternatives-to-strictfalse"},"Alternatives to ",Object(a.b)("inlineCode",{parentName:"h2"},"strict=False")),Object(a.b)("p",null,"Below are a few common reasons for people disabling strict mode along with recommended alternatives."),Object(a.b)("h3",{id:"adding-config-fields-through-the-command-line"},"Adding config fields through the command line"),Object(a.b)("p",null,"With strict mode disabled; you can add fields not specified in config file through the command line.\nHydra 1.0 introduces the + prefix to command line overrides, enabling the addition of fields not in the config file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db:\n  driver: mysql\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:"{1,6}","{1,6}":!0},"$ python my_app.py +db.host=localhost\ndb:\n  driver: mysql\n  host: localhost\n")),Object(a.b)("h3",{id:"adding-fields-at-runtime"},"Adding fields at runtime"),Object(a.b)("p",null,"When strict mode is disabled, you can add fields to your config at runtime.\nStrict mode is implemented by setting the OmegaConf ",Object(a.b)("inlineCode",{parentName:"p"},"struct")," flag to True on the root of the config."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can disable the struct flag a specific context using ",Object(a.b)("inlineCode",{parentName:"li"},"open_dict"),"."),Object(a.b)("li",{parentName:"ul"},"You can disable the struct flag permanently for your config using ",Object(a.b)("inlineCode",{parentName:"li"},"OmegaConf.set_struct(cfg, False)"),".")),Object(a.b)("p",null,"Learn more about OmegaConf struct flag ",Object(a.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#struct-flag",target:"_blank"},"here"),"."),Object(a.b)("h3",{id:"field-existence-check"},"Field existence check"),Object(a.b)("p",null,"With strict mode disabled, you can check if a field is in the config by comparing it to None:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"if cfg.host is None:\n    # host is not in the config\n")),Object(a.b)("p",null,"This will no longer work because an exception will be thrown when the ",Object(a.b)("inlineCode",{parentName:"p"},"host")," field is accessed.",Object(a.b)("br",{parentName:"p"}),"\n","Use ",Object(a.b)("inlineCode",{parentName:"p"},"in")," or ",Object(a.b)("inlineCode",{parentName:"p"},"hasattr")," instead:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'if "host" not in cfg:\n    # host is not in the config\n\nif not hasattr(cfg, "host"):\n    # host is not in the config\n')))}s.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(o,".").concat(f)]||p[f]||u[f]||a;return n?i.a.createElement(b,c(c({ref:t},l),{},{components:n})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);