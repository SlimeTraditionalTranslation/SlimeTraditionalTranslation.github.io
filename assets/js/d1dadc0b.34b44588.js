"use strict";(self.webpackChunkslime_traditional_translation=self.webpackChunkslime_traditional_translation||[]).push([[5156],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||g[f]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9647:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return g}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={title:"Cargo Manager",sidebar_position:2},l=void 0,u={unversionedId:"Slimefun/Cargo-Management/Cargo-Manager",id:"Slimefun/Cargo-Management/Cargo-Manager",title:"Cargo Manager",description:"A Cargo Manager is the core part of a cargo management system. It allows items to be moved within a cargo network.",source:"@site/docs/Slimefun/Cargo-Management/Cargo-Manager.md",sourceDirName:"Slimefun/Cargo-Management",slug:"/Slimefun/Cargo-Management/Cargo-Manager",permalink:"/docs/Slimefun/Cargo-Management/Cargo-Manager",tags:[],version:"current",lastUpdatedAt:1649261646,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:2,frontMatter:{title:"Cargo Manager",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cargo Motor",permalink:"/docs/Slimefun/Cargo-Management/Cargo-Motor"},next:{title:"Connector Node",permalink:"/docs/Slimefun/Cargo-Management/Connector-Node"}},s={},g=[{value:"Obtaining",id:"obtaining",level:2},{value:"Usage",id:"usage",level:2}],p={toc:g};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Cargo Manager is the core part of a ",(0,o.kt)("a",{parentName:"p",href:"Cargo-Management"},"cargo management system"),". It allows items to be moved within a cargo network."),(0,o.kt)("h2",{id:"obtaining"},"Obtaining"),(0,o.kt)("p",null,"A cargo manager can be crafted in an ",(0,o.kt)("a",{parentName:"p",href:"Enhanced-Crafting-Table"},"Enhanced Crafting Table"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"A cargo manager is a requirement of every cargo network, as it allows the transfer of items between the nodes in its range. It does not move items by itself: instead, it must be ",(0,o.kt)("a",{parentName:"p",href:"Connector-Node"},"connected")," to ",(0,o.kt)("a",{parentName:"p",href:"Input-Node"},"input")," and ",(0,o.kt)("a",{parentName:"p",href:"Output-Node"},"output nodes")," (or ",(0,o.kt)("a",{parentName:"p",href:"Advanced-Output-Node"},"advanced output nodes"),")."),(0,o.kt)("p",null,"To be connected, a cargo manager must be aligned within 6 blocks of a cargo node, in a straight line (no diagonals)."),(0,o.kt)("p",null,"There can only be one cargo manager per cargo network. Only ",(0,o.kt)("a",{parentName:"p",href:"Connector-Node"},"connector nodes")," can be used to extend its range."),(0,o.kt)("p",null,"By default, a cargo manager will emit red particles throughout its range, as well as through any connected connector nodes. This visual effect can be turned on or off by right-clicking the cargo manager."))}f.isMDXComponent=!0}}]);