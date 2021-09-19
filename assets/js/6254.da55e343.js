"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6254],{830:function(e,t,n){n.d(t,{W:function(){return r}});var a=n(7294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},8617:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return a.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},6254:function(e,t,n){n.d(t,{Z:function(){return Se}});var a=n(7294),r=n(6010),o=n(5977),l=n(4973),c=n(941),i="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,a.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(7462),d=n(3366),f=["width","height","className"];function v(e){var t=e.width,n=void 0===t?20:t,r=e.height,o=void 0===r?20:r,l=e.className,c=(0,d.Z)(e,f);return a.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 24 24",width:n,height:o,fill:"currentColor"},c),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var h="announcementBar_3WsW",b="announcementBarPlaceholder_2m9F",g="announcementBarClose_38nx",E="announcementBarContent_3EUC";var p=function(){var e=(0,c.nT)(),t=e.isClosed,n=e.close,o=(0,c.LU)().announcementBar;if(!o)return null;var i=o.content,s=o.backgroundColor,u=o.textColor,m=o.isCloseable;return!i||m&&t?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&a.createElement("div",{className:b}),a.createElement("div",{className:E,dangerouslySetInnerHTML:{__html:i}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",g),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(v,{width:14,height:14})):null)},k=n(1036),Z=n(2389),w={toggle:"toggle_71bT"},_=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(w.toggle,w.dark),style:n},t)},y=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(w.toggle,w.light),style:n},t)},N=(0,a.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,a.useState)(o),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function C(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,i=(0,Z.Z)();return a.createElement(N,(0,m.Z)({disabled:!i,icons:{checked:a.createElement(_,{icon:n,style:r}),unchecked:a.createElement(y,{icon:o,style:l})}},e))}var S=n(5350),L=n(7898),I=function(e){var t=(0,o.TH)(),n=(0,a.useState)(e),r=n[0],l=n[1],i=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,L.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)l(!0);else{if(i.current)return i.current=!1,void l(!1);r&&0===a&&l(!0);var o=document.documentElement.scrollHeight-u,c=window.innerHeight;r&&a>=r?l(!1):a+c<o&&l(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};var D=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},B=n(3783),T=n(907),P=n(7819),x=n(5537),M=["width","height","className"],A=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,o=void 0===r?30:r,l=e.className,c=(0,d.Z)(e,M);return a.createElement("svg",(0,m.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},R=["width","height","className"];function U(e){var t=e.width,n=void 0===t?20:t,r=e.height,o=void 0===r?20:r,l=e.className,c=(0,d.Z)(e,R);return a.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 413.348 413.348",width:n,height:o,fill:"currentColor"},c),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var O="toggle_3Zt9",V="navbarHideable_2qcr",H="navbarHidden_3yey",W="navbarSidebarToggle_wkoY",z="navbarSidebarCloseSvg_2XuS",j="right";function F(){return(0,c.LU)().navbar.items}function K(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,S.Z)(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?o():r()}),[r,o]),disabled:e}}function q(e){var t=e.sidebarShown,n=e.toggleSidebar;D(t);var o=F(),i=K(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),l=(0,c.D9)(o),i=(0,a.useState)((function(){return!1})),s=i[0],u=i[1];(0,a.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&a.createElement(C,{className:W,checked:i.isDarkTheme,onChange:i.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(U,{width:20,height:20,className:z}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return a.createElement(P.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var Y=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,o=t.style,l=function(){var e=(0,B.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],o=n[1];(0,c.Rb)((function(){r&&o(!1)}));var l=(0,a.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:r}}(),i=K(),s=(0,T.gA)(),u=I(n),d=u.navbarRef,f=u.isNavbarVisible,v=F(),h=v.some((function(e){return"search"===e.type})),b=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:j)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:j)}))}}(v),g=b.leftItems,E=b.rightItems;return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":l.shown},e[V]=n,e[H]=n&&!f,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:l.toggle,onKeyDown:l.toggle},a.createElement(A,null)),a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),g.map((function(e,t){return a.createElement(P.Z,(0,m.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return a.createElement(P.Z,(0,m.Z)({},e,{key:t}))})),!i.disabled&&a.createElement(C,{className:O,checked:i.isDarkTheme,onChange:i.toggle}),!h&&a.createElement(k.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:l.toggle}),l.shouldRender&&a.createElement(q,{sidebarShown:l.shown,toggleSidebar:l.toggle}))},G=n(6742),X=n(4996),Q=n(3919),J="footerLogoLink_MyFc",$=n(8465),ee=n(8617),te=["to","href","label","prependBaseUrlToHref"];function ne(e){var t=e.to,n=e.href,r=e.label,o=e.prependBaseUrlToHref,l=(0,d.Z)(e,te),c=(0,X.Z)(t),i=(0,X.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(G.Z,(0,m.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),n&&!(0,Q.Z)(n)?a.createElement("span",null,r,a.createElement(ee.Z,null)):r)}var ae=function(e){var t=e.sources,n=e.alt;return a.createElement($.Z,{className:"footer__logo",alt:n,sources:t})};var re=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,X.Z)(s.src),dark:(0,X.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},l&&l.length>0&&a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(ne,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(G.Z,{href:s.href,className:J},a.createElement(ae,{alt:s.alt,sources:u})):a.createElement(ae,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},oe=n(412),le=(0,c.WA)("theme"),ce="light",ie="dark",se=function(e){return e===ie?ie:ce},ue=function(e){(0,c.WA)("theme").set(se(e))},me=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,o=(0,a.useState)(function(e){return oe.default.canUseDOM?se(document.documentElement.getAttribute("data-theme")):se(e)}(t)),l=o[0],i=o[1],s=(0,a.useCallback)((function(){i(ce),ue(ce)}),[]),u=(0,a.useCallback)((function(){i(ie),ue(ie)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",se(l))}),[l]),(0,a.useEffect)((function(){if(!n)try{var e=le.get();null!==e&&i(se(e))}catch(t){console.error(t)}}),[i]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?ie:ce)}))}),[]),{isDarkTheme:l===ie,setLightTheme:s,setDarkTheme:u}},de=n(2924);var fe=function(e){var t=me(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return a.createElement(de.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:o}},e.children)},ve="docusaurus.tab.",he=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ve)){var n=t.substring(ve.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},be=(0,a.createContext)(void 0);var ge=function(e){var t=he(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(be.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function Ee(e){var t=e.children;return a.createElement(fe,null,a.createElement(c.pl,null,a.createElement(ge,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var pe=n(9105),ke=n(2263);function Ze(e){var t=e.locale,n=e.version,r=e.tag,o=t;return a.createElement(pe.Z,null,o&&a.createElement("meta",{name:"docsearch:language",content:o}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var we=n(1217);function _e(){var e=(0,ke.default)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(pe.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ye(e){var t=e.permalink,n=(0,ke.default)().siteConfig.url,r=function(){var e=(0,ke.default)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,X.Z)(t)}(),l=t?""+n+t:r;return a.createElement(pe.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function Ne(e){var t=(0,ke.default)(),n=t.siteConfig.favicon,r=t.i18n,o=r.currentLocale,l=r.localeConfigs,i=(0,c.LU)(),s=i.metadatas,u=i.image,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,g=(0,X.Z)(n),E=(0,c.pe)(d),p=o,k=l[o].direction;return a.createElement(a.Fragment,null,a.createElement(pe.Z,null,a.createElement("html",{lang:p,dir:k}),n&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,E),a.createElement("meta",{property:"og:title",content:E}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&a.createElement(we.Z,{image:u}),v&&a.createElement(we.Z,{image:v}),a.createElement(we.Z,{description:f,keywords:h}),a.createElement(ye,null),a.createElement(_e,null),a.createElement(Ze,(0,m.Z)({tag:c.HX,locale:o},b)),a.createElement(pe.Z,null,s.map((function(e,t){return a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var Ce=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Se=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return Ce(),a.createElement(Ee,null,a.createElement(Ne,e),a.createElement(u,null),a.createElement(p,null),a.createElement(Y,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,o,l)},t),!n&&a.createElement(re,null))}},5537:function(e,t,n){var a=n(7462),r=n(3366),o=n(7294),l=n(6742),c=n(8465),i=n(4996),s=n(2263),u=n(941),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.default)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,g=(0,r.Z)(e,m),E=(0,i.Z)(v.href||"/"),p={light:(0,i.Z)(v.src),dark:(0,i.Z)(v.srcDark||v.src)};return o.createElement(l.Z,(0,a.Z)({to:E},g,v.target&&{target:v.target}),v.src&&o.createElement(c.Z,{className:h,sources:p,alt:v.alt||d||t}),null!=d&&o.createElement("b",{className:b},d))}},5525:function(e,t,n){n.d(t,{O:function(){return b}});var a=n(7462),r=n(3366),o=n(7294),l=n(6010),c=n(6742),i=n(4996),s=n(8617),u=n(3919),m=n(7819),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function b(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,b=void 0===h?"":h,g=e.prependBaseUrlToHref,E=(0,r.Z)(e,d),p=(0,i.Z)(m),k=(0,i.Z)(n),Z=(0,i.Z)(f,{forcePrependBaseUrl:!0}),w=v&&f&&!(0,u.Z)(f),_="dropdown__link--active"===b;return o.createElement(c.Z,(0,a.Z)({},f?{href:g?Z:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=E.className)&&t.includes(b)?"":b,to:p},n||l?{isActive:function(e,t){return l?new RegExp(l).test(t.pathname):t.pathname.startsWith(k)}}:null),E),w?o.createElement("span",null,v,o.createElement(s.Z,_&&{width:12,height:12})):v)}function g(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,r.Z)(e,f),s=o.createElement(b,(0,a.Z)({className:(0,l.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?o.createElement("li",null,s):s}function E(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,v));return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,l=void 0!==n&&n,c=(e.position,(0,r.Z)(e,h)),i=l?E:g;return o.createElement(i,(0,a.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,m.E)(l)}))}},6400:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),o=n(7294),l=n(5525),c=n(907),i=n(6010),s=n(7819),u=n(941),m=n(8780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,d),b=(0,c.Iw)(v),g=b.activeVersion,E=b.activeDoc,p=(0,u.J)(v).preferredVersion,k=(0,c.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([g,p,k].filter(Boolean)),n),w=(0,s.E)(h.mobile);return o.createElement(l.Z,(0,a.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[w]=(null==E?void 0:E.sidebar)&&E.sidebar===Z.sidebar,t)),activeClassName:w,label:null!=f?f:Z.id,to:Z.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),o=n(7294),l=n(5525),c=n(3154),i=n(907),s=n(941),u=n(4973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,E=(0,r.Z)(e,m),p=(0,i.Iw)(v),k=(0,i.gB)(v),Z=(0,i.yW)(v),w=(0,s.J)(v),_=w.preferredVersion,y=w.savePreferredVersionName;var N,C=(N=k.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(b,N,g)),S=null!=(t=null!=(n=p.activeVersion)?n:_)?t:Z,L=f&&C?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):S.label,I=f&&C?void 0:d(S).path;return C.length<=1?o.createElement(l.Z,(0,a.Z)({},E,{mobile:f,label:L,to:I,isActive:h?function(){return!1}:void 0})):o.createElement(c.Z,(0,a.Z)({},E,{mobile:f,label:L,to:I,items:C,isActive:h?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),o=n(7294),l=n(5525),c=n(907),i=n(941),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,c.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.createElement(l.Z,(0,a.Z)({},d,{label:g,to:E}))}},3154:function(e,t,n){var a=n(7462),r=n(3366),o=n(7294),l=n(6010),c=n(941),i=n(5525),s=n(7819),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,c=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),b=h[0],g=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":b})},o.createElement(i.O,(0,a.Z)({className:(0,l.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,c.be)(),h=f(n,v),b=(0,c.uR)({initialState:function(){return!h}}),g=b.collapsed,E=b.toggleCollapsed,p=b.setCollapsed;return(0,o.useEffect)((function(){h&&p(!h)}),[v,h]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(i.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),E()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),l=n?h:v;return o.createElement(l,a)}},7819:function(e,t,n){n.d(t,{Z:function(){return k},E:function(){return p}});var a=n(3366),r=n(7294),o=n(5525),l=n(3154),c=n(7462),i=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,s=(0,a.Z)(e,i);return r.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},s),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(2263),m=n(941),d="iconLanguage_3vod",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,i=(0,a.Z)(e,f),v=(0,u.default)().i18n,h=v.currentLocale,b=v.locales,g=v.localeConfigs,E=(0,m.l5)();function p(e){return g[e].label}var k=b.map((function(e){var t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,k,o),w=t?"Languages":p(h);return r.createElement(l.Z,(0,c.Z)({},i,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s,{className:d}),r.createElement("span",null,w)),items:Z}))}var h=n(1036);function b(e){return e.mobile?null:r.createElement(h.Z,null)}var g=["type"],E={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return b},dropdown:function(){return l.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};var p=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,a.Z)(e,g),o=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=function(e){var t=E[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(o);return r.createElement(l,n)}},2924:function(e,t,n){var a=n(7294).createContext(void 0);t.Z=a},8465:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),o=n(7294),l=n(6010),c=n(2389),i=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,c.Z)(),n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,b.map((function(e){return o.createElement("img",(0,a.Z)({key:e,src:m[e],alt:v,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},7898:function(e,t,n){var a=n(7294),r=n(412),o=function(){return r.default.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(o()),r=function(){var t=o();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},1036:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(7462),r=n(3366),o=n(7294),l=n(3935),c=n(2263),i=n(5977),s=n(4996),u=n(6742),m=n(9105),d=n(6397);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(830);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g="Ctrl";var E=o.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,r=b(e,["translations"]),l=a.buttonText,c=void 0===l?"Search":l,i=a.buttonAriaLabel,s=void 0===i?"Search":i,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":g:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},r,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===g?o.createElement(f,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),p=n(907),k=n(941);function Z(){var e=function(){var e=(0,c.default)().i18n,t=(0,p._r)(),n=(0,p.WS)(),a=(0,k.Oh)(),r=[k.HX].concat(Object.keys(t).map((function(e){var r,o,l=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,c=a[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:c)?o:i;return(0,k.os)(e,s.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var w=n(4973),_="searchBox_1Doo",y=["contextualSearch"],N=null;function C(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function S(e){var t=e.state,n=e.onClose,a=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function L(e){var t,u,d=e.contextualSearch,f=(0,r.Z)(e,y),v=(0,c.default)().siteMetadata,h=Z(),b=null!=(t=null==(u=f.searchParameters)?void 0:u.facetFilters)?t:[],g=d?[].concat(h,b):b,p=Object.assign({},f.searchParameters,{facetFilters:g}),k=(0,s.C)().withBaseUrl,L=(0,i.k6)(),I=(0,o.useRef)(null),D=(0,o.useRef)(null),B=(0,o.useState)(!1),T=B[0],P=B[1],x=(0,o.useState)(null),M=x[0],A=x[1],R=(0,o.useCallback)((function(){return N?Promise.resolve():Promise.all([n.e(4300).then(n.bind(n,4300)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(5256)]).then(n.bind(n,5256))]).then((function(e){var t=e[0].DocSearchModal;N=t}))}),[]),U=(0,o.useCallback)((function(){R().then((function(){I.current=document.createElement("div"),document.body.insertBefore(I.current,document.body.firstChild),P(!0)}))}),[R,P]),O=(0,o.useCallback)((function(){P(!1),I.current.remove()}),[P]),V=(0,o.useCallback)((function(e){R().then((function(){P(!0),A(e.key)}))}),[R,P,A]),H=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;L.push(t)}}).current,W=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,z=(0,o.useMemo)((function(){return function(e){return o.createElement(S,(0,a.Z)({},e,{onClose:O}))}}),[O]),j=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,l])}({isOpen:T,onOpen:U,onClose:O,onInput:V,searchButtonRef:D});var F=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:_},o.createElement(E,{onTouchStart:R,onFocus:R,onMouseOver:R,onClick:U,ref:D,translations:{buttonText:F,buttonAriaLabel:F}})),T&&(0,l.createPortal)(o.createElement(N,(0,a.Z)({onClose:O,initialScrollY:window.scrollY,initialQuery:M,navigator:H,transformItems:W,hitComponent:C,resultsFooterComponent:z,transformSearchClient:j},f,{searchParameters:p})),I.current))}var I=function(){var e=(0,c.default)().siteConfig;return o.createElement(L,e.themeConfig.algolia)}},6397:function(e,t,n){var a=n(5977),r=n(412),o=n(2263);t.Z=function(){var e=(0,a.k6)(),t=(0,a.TH)(),n=(0,o.default)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.default.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}}}]);