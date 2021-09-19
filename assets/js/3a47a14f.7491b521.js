"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9847],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Hydra 1.1",author:"Omry Yadan",author_title:"Creator of Hydra",author_url:"https://github.com/omry",author_image_url:"https://graph.facebook.com/733244046/picture/?height=200&width=200",tags:["Hydra","Release"],image:"/img/Hydra-Readme-logo2.svg"},s=void 0,p={permalink:"/blog/2021/06/13/Hydra_1.1",source:"@site/blog/2021-06-13-Hydra_1.1.md",title:"Hydra 1.1",description:"After many months and a lot of hard work by many people, Hydra 1.1 is finally out!",date:"2021-06-13T00:00:00.000Z",formattedDate:"June 13, 2021",tags:[{label:"Hydra",permalink:"/blog/tags/hydra"},{label:"Release",permalink:"/blog/tags/release"}],readingTime:3.73,truncated:!0,authors:[{name:"Omry Yadan",title:"Creator of Hydra",url:"https://github.com/omry",imageURL:"https://graph.facebook.com/733244046/picture/?height=200&width=200"}],nextItem:{title:"Hydra Ray Launcher",permalink:"/blog/2020/12/22/Hydra_Ray_Launcher"}},c={authorsImageUrls:[void 0]},u=[{value:"Major new features in Hydra 1.1",id:"major-new-features-in-hydra-11",children:[]},{value:"More powerful config composition",id:"more-powerful-config-composition",children:[]},{value:"Object instantiation enhancements",id:"object-instantiation-enhancements",children:[]},{value:"Hydra callbacks",id:"hydra-callbacks",children:[]},{value:"OmegaConf 2.1 highlights",id:"omegaconf-21-highlights",children:[]},{value:"Other notable improvements",id:"other-notable-improvements",children:[]},{value:"Migrating from 1.0",id:"migrating-from-10",children:[]}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/Hydra-Readme-logo2.svg",alt:"logo",width:"70%"})),(0,o.kt)("p",null,"After many months and a lot of hard work by many people, Hydra 1.1 is finally out!",(0,o.kt)("br",{parentName:"p"}),"\n","Hydra 1.1 comes with OmegaConf 2.1, which has its own share of awesome new features."),(0,o.kt)("p",null,"This blog post highlights some of the most prominent features, check the release notes for a complete list of changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hydra 1.1 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/releases/tag/v1.1.0"},"release notes")),(0,o.kt)("li",{parentName:"ul"},"OmegaConf 2.1 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/omry/omegaconf/releases/tag/v2.1.0"},"release notes"))),(0,o.kt)("h3",{id:"major-new-features-in-hydra-11"},"Major new features in Hydra 1.1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"More powerful config composition",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Every config can now have a Defaults List"),(0,o.kt)("li",{parentName:"ul"},"Composition order of current config can be controlled via the ",(0,o.kt)("inlineCode",{parentName:"li"},"_self_")," keyword in the Defaults List"),(0,o.kt)("li",{parentName:"ul"},"Support for composing multiple configs from the same config group"),(0,o.kt)("li",{parentName:"ul"},"Support for configuring the config search path from the primary config"))),(0,o.kt)("li",{parentName:"ul"},"Recursive instantiation"),(0,o.kt)("li",{parentName:"ul"},"Experimental callbacks support"),(0,o.kt)("li",{parentName:"ul"},"OmegaConf 2.1:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Relative interpolations"),(0,o.kt)("li",{parentName:"ul"},"New OmegaConf interpolation grammar supporting nested interpolations and much more"),(0,o.kt)("li",{parentName:"ul"},"More powerful custom resolvers")))),(0,o.kt)("h3",{id:"more-powerful-config-composition"},"More powerful config composition"),(0,o.kt)("p",null,"Config composition is the key area of improvement in Hydra 1.1.",(0,o.kt)("br",{parentName:"p"}),"\n","The biggest change is support for a Defaults List in any config, and not just the primary config."),(0,o.kt)("p",null,"This enables many new capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Any config can now "extend" other configs. This enables config files to be associated with a Structured Config schema and to extend other config files'),(0,o.kt)("li",{parentName:"ul"},'A top level "experiment config" can now override the Defaults List as well as config values'),(0,o.kt)("li",{parentName:"ul"},"Complex frameworks can now have their own Defaults List, reducing boilerplate")),(0,o.kt)("p",null,"Other related changes include the ability to change the order a config is composed relative to config in its Defaults List by\nadding ",(0,o.kt)("inlineCode",{parentName:"p"},"_self_")," to the Defaults List and the ability to use multiple configs from the same config group."),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/advanced/defaults_list"},"The Defaults List")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/patterns/extending_configs"},"Extending configs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/structured_config/schema"},"Structured Configs Schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/patterns/configuring_experiments"},"Configuring Experiments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/patterns/select_multiple_configs_from_config_group"},"Select multiple configs from config group"))),(0,o.kt)("h3",{id:"object-instantiation-enhancements"},"Object instantiation enhancements"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()")," now instantiates nested objects recursively."),(0,o.kt)("p",null,"Other enhancements include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for positional arguments via the ",(0,o.kt)("inlineCode",{parentName:"li"},"_args_")," config key"),(0,o.kt)("li",{parentName:"ul"},"Support for parameter conversion strategy was added via the ",(0,o.kt)("inlineCode",{parentName:"li"},"_convert_")," config key")),(0,o.kt)("p",null,"Learn more ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/instantiate_objects/overview"},"here"),"."),(0,o.kt)("h3",{id:"hydra-callbacks"},"Hydra callbacks"),(0,o.kt)("p",null,"A new experimental mechanism for user defined callbacks was added.\nCallbacks enable user code to be executed automatically at various points in the lifecycle of your application.\nThere are many potential use cases for this, for example automatic registration with your\nfavorite experiment-tracking service."),(0,o.kt)("p",null,"Learn more ",(0,o.kt)("a",{parentName:"p",href:"/docs/experimental/callbacks"},"here"),"."),(0,o.kt)("h3",{id:"omegaconf-21-highlights"},"OmegaConf 2.1 highlights"),(0,o.kt)("p",null,"OmegaConf 2.1 includes many enhancements, bug fixes, and performance improvements."),(0,o.kt)("h4",{id:"relative-interpolations"},"Relative interpolations"),(0,o.kt)("p",null,"Relative interpolations enable accessing a config node relative to the node defining the interpolation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"x: 10\nb:\n  y: 20\n  a: {x}    # 10, absolute interpolation\n  b: ${.y}  # 20, relative interpolation\n  c: ${..x} # 10, relative interpolation\n")),(0,o.kt)("h4",{id:"nested-interpolations"},"Nested interpolations"),(0,o.kt)("p",null,"OmegaConf 2.1 adds a new interpolation grammar supporting more sophisticated usage of interpolations.",(0,o.kt)("br",{parentName:"p"}),"\n","In the following example, the default value to use if the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DB_USER")," does not exist is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"default_user")," config node:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"default_user: root\ndb_user: ${oc.env:DB_USER,${default_user}}\n")),(0,o.kt)("h4",{id:"more-powerful-custom-resolvers"},"More powerful custom resolvers"),(0,o.kt)("p",null,"OmegaConf custom resolvers can now access parent config node or the config root by defining\nkeyword parameters named ",(0,o.kt)("inlineCode",{parentName:"p"},"_parent_")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_root_"),"."),(0,o.kt)("p",null,"In the example below, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"_parent_")," to implement a sum function that defaults to 0 if the node does not exist:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def sum(a, b, *, _parent_):\n  return _parent_.get(a, 0) + _parent_.get(b, 0)\n\nOmegaConf.register_new_resolver("sum", sum)\ncfg = OmegaConf.create({\n  "node": {\n    "a": 1,\n    "b": 2,\n    "a_plus_b": "${sum:a,b}",\n    "a_plus_z": "${sum:a,z}",\n  },\n})\nprint(cfg.node.a_plus_b)  # 3\nprint(cfg.node.a_plus_z)  # 1\n')),(0,o.kt)("h3",{id:"other-notable-improvements"},"Other notable improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Config composition, especially for large configs - is significantly faster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OmegaConf.resolve(cfg)")," can be used for in-place interpolation resolution on a config object"),(0,o.kt)("li",{parentName:"ul"},"Improved compatibility of OmegaConf config objects with plain dict and list"),(0,o.kt)("li",{parentName:"ul"},"Support for bracketed style (",(0,o.kt)("inlineCode",{parentName:"li"},"foo.bar")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"li"},"foo[bar]"),"), this covers interpolations and ",(0,o.kt)("inlineCode",{parentName:"li"},"OmegaConf.{update, select}")," usage"),(0,o.kt)("li",{parentName:"ul"},"PyDev.Debugger integration for easier debugging of config objects in PyCharm and VSCode")),(0,o.kt)("h3",{id:"migrating-from-10"},"Migrating from 1.0"),(0,o.kt)("p",null,"Hydra 1.1 is a major release. For most people, migrating from 1.0 to 1.1 will be smooth.\nHowever, there are some breaking changes listed in the release notes of OmegaConf 2.1 and Hydra 1.1.\nMost changes come with a deprecation warning pointing to a specific migration guide page.\nPlease feel free to reach out for ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro#community"},"help")," if you see a change in behavior that is not mentioned in the release notes."),(0,o.kt)("p",null,"That's it for now, take Hydra 1.1 for a spin!"))}f.isMDXComponent=!0}}]);