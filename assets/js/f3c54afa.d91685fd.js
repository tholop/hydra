"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3305],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6081:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"intro",title:"Introduction",sidebar_label:"Introduction"},l=void 0,p={unversionedId:"upgrades/intro",id:"version-1.1/upgrades/intro",isDocsHomePage:!1,title:"Introduction",description:"Upgrading to a new Hydra version is usually an easy process.",source:"@site/versioned_docs/version-1.1/upgrades/intro.md",sourceDirName:"upgrades",slug:"/upgrades/intro",permalink:"/docs/upgrades/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/intro.md",tags:[],version:"1.1",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1632092526,formattedLastUpdatedAt:"9/19/2021",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction"},sidebar:"version-1.1/docs",previous:{title:"Release process",permalink:"/docs/development/release"},next:{title:"Changes to @hydra.main() and hydra.initialize()",permalink:"/docs/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path"}},d=[{value:"Major version upgrades",id:"major-version-upgrades",children:[]},{value:"Patch version upgrades",id:"patch-version-upgrades",children:[]},{value:"Dev release upgrades",id:"dev-release-upgrades",children:[]}],u={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Upgrading to a new Hydra version is usually an easy process."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hydra versioning has only major versions and patch versions. A bump of the first two version digits is considered a major release.\nA major release may have multiple followup patch releases that will fix bugs without introducing new functionality."))),(0,o.kt)("h2",{id:"major-version-upgrades"},"Major version upgrades"),(0,o.kt)("p",null,"Hydra will typically provide helpful warnings about required changes, sometimes pointing to an upgrade page that provides more details about the required changes."),(0,o.kt)("p",null,"For a smooth upgrade experience, please follow these simple rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Upgrade to the latest patch version first"),".\ne.g: If you are upgrading from 1.0 to 1.1, be sure to upgrade to the latest 1.0 version first (1.0.6)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Address ALL runtime warnings issued by Hydra."),(0,o.kt)("br",{parentName:"li"}),"A warning in one version is likely to become a far less friendly error in the next major version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Do not skip major versions"),".",(0,o.kt)("br",{parentName:"li"}),"e.g: If you are upgrading from Hydra 1.0 to Hydra 1.2 - Do it by",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Upgrading from 1.0 to 1.1, addressing all the warnings."),(0,o.kt)("li",{parentName:"ul"},"Upgrading from 1.1 to 1.2, addressing all the warnings.")))),(0,o.kt)("h2",{id:"patch-version-upgrades"},"Patch version upgrades"),(0,o.kt)("p",null,"Patch releases normally contains only bug fixes and are thus safe and easy to upgrade (e.g. ",(0,o.kt)("strong",{parentName:"p"},"1.0.3")," to ",(0,o.kt)("strong",{parentName:"p"},"1.0.6"),").",(0,o.kt)("br",{parentName:"p"}),"\n","In rare cases, patch releases will introduce new warnings. Be sure to address them before upgrading to the next major version."),(0,o.kt)("h2",{id:"dev-release-upgrades"},"Dev release upgrades"),(0,o.kt)("p",null,"Development releases are subject to breaking changes without notice. Please be aware that upgrading to a new development release\nis more likely to introduce some breakage. No attempt will be made to make upgrading between development releases easy."))}c.isMDXComponent=!0}}]);