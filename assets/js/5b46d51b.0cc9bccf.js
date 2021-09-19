"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1051],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),f=o,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2045:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"jupyter_notebooks",title:"Hydra in Jupyter Notebooks"},p=void 0,s={unversionedId:"advanced/jupyter_notebooks",id:"advanced/jupyter_notebooks",isDocsHomePage:!1,title:"Hydra in Jupyter Notebooks",description:"Hydra supports config composition inside Jupyter notebooks via the Compose API.",source:"@site/docs/advanced/jupyter_notebooks.md",sourceDirName:"advanced",slug:"/advanced/jupyter_notebooks",permalink:"/docs/next/advanced/jupyter_notebooks",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/jupyter_notebooks.md",tags:[],version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1632092526,formattedLastUpdatedAt:"9/19/2021",frontMatter:{id:"jupyter_notebooks",title:"Hydra in Jupyter Notebooks"},sidebar:"docs",previous:{title:"Application packaging",permalink:"/docs/next/advanced/app_packaging"},next:{title:"Hydra in Unit Tests",permalink:"/docs/next/advanced/unit_testing"}},u=[],d={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hydra supports config composition inside Jupyter notebooks via the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/advanced/compose_api"},"Compose API"),".  "),(0,a.kt)("p",null,"Run the Notebook in a the Binder to see a live demo, or open the Notebook source on GitHub."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/facebookresearch/hydra/main?filepath=examples%252jupyter_notebooks"},(0,a.kt)("img",{parentName:"a",src:"https://mybinder.org/badge_logo.svg",alt:"Binder"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra//tree/main/examples/jupyter_notebooks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Notebooks%20source-informational",alt:"Notebook source"}))))}l.isMDXComponent=!0}}]);