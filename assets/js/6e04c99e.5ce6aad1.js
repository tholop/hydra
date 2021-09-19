"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2608],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=a,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3899:function(e,n,t){t.d(n,{Z:function(){return c},T:function(){return s}});var r=t(7462),a=t(7294),i=t(6742),o=t(2263),l=t(907);function c(e){return a.createElement(i.Z,(0,r.Z)({},e,{to:(n=e.to,c=(0,l.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function s(e){var n,t=null!=(n=e.text)?n:"Example";return a.createElement(c,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}},37:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(3899),l=["components"],c={id:"overview",title:"Plugins Overview",sidebar_label:"Plugins Overview"},s=void 0,u={unversionedId:"advanced/plugins/overview",id:"version-1.1/advanced/plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"Hydra can be extended via plugins.",source:"@site/versioned_docs/version-1.1/advanced/plugins/intro.md",sourceDirName:"advanced/plugins",slug:"/advanced/plugins/overview",permalink:"/docs/advanced/plugins/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/plugins/intro.md",tags:[],version:"1.1",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1632092526,formattedLastUpdatedAt:"9/19/2021",frontMatter:{id:"overview",title:"Plugins Overview",sidebar_label:"Plugins Overview"},sidebar:"version-1.1/docs",previous:{title:"Config Search Path",permalink:"/docs/advanced/search_path"},next:{title:"Plugin development",permalink:"/docs/advanced/plugins/develop"}},p=[{value:"Plugin types",id:"plugin-types",children:[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]},{value:"SearchPathPlugin",id:"searchpathplugin",children:[]},{value:"ConfigSource",id:"configsource",children:[]}]}],d={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra can be extended via plugins.\nThe example plugins ",(0,i.kt)(o.Z,{to:"examples/plugins",mdxType:"GithubLink"},"here")," can help you get started with plugin development."),(0,i.kt)("h2",{id:"plugin-types"},"Plugin types"),(0,i.kt)("p",null,"Hydra has several plugin types:"),(0,i.kt)("h3",{id:"sweeper"},"Sweeper"),(0,i.kt)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),(0,i.kt)("p",null,"And creates 4 jobs with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),(0,i.kt)("h3",{id:"launcher"},"Launcher"),(0,i.kt)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher takes a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),(0,i.kt)("h3",{id:"searchpathplugin"},"SearchPathPlugin"),(0,i.kt)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),(0,i.kt)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),(0,i.kt)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed. "),(0,i.kt)("h3",{id:"configsource"},"ConfigSource"),(0,i.kt)("p",null,"ConfigSource plugins can be used to allow Hydra to access configuration in non-standard locations when composing the config.\nThis can be used to enable access to an in-house private config store, or as a way to access configs from public sources like GitHub or S3."))}h.isMDXComponent=!0}}]);