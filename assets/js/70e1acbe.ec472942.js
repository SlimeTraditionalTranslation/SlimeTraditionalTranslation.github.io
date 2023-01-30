"use strict";(self.webpackChunkslime_traditional_translation=self.webpackChunkslime_traditional_translation||[]).push([[138],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,f=p["".concat(l,".").concat(y)]||p[y]||g[y]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={title:"Energy Regulator",sidebar_position:1},o=void 0,c={unversionedId:"Slimefun/Electric-Machines/Energy-Management/Energy-Regulator",id:"Slimefun/Electric-Machines/Energy-Management/Energy-Regulator",title:"Energy Regulator",description:"An Energy Regulator is the core part of an Energy Network which allows energy to be transferred.",source:"@site/docs/Slimefun/Electric-Machines/Energy-Management/Energy-Regulator.md",sourceDirName:"Slimefun/Electric-Machines/Energy-Management",slug:"/Slimefun/Electric-Machines/Energy-Management/Energy-Regulator",permalink:"/docs/Slimefun/Electric-Machines/Energy-Management/Energy-Regulator",draft:!1,tags:[],version:"current",lastUpdatedAt:1675098939,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:1,frontMatter:{title:"Energy Regulator",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Electric Machines Overview",permalink:"/docs/Slimefun/Electric-Machines/"},next:{title:"Energy Connector",permalink:"/docs/Slimefun/Electric-Machines/Energy-Management/Energy-Connector"}},l={},s=[{value:"\u53d6\u5f97",id:"\u53d6\u5f97",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}],u={toc:s};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An Energy Regulator is the core part of an ",(0,a.kt)("a",{parentName:"p",href:"/docs/Slimefun/Electric-Machines/"},"Energy Network")," which allows energy to be transferred.",(0,a.kt)("br",{parentName:"p"}),"\n","It is essential to a working energy network."),(0,a.kt)("h2",{id:"\u53d6\u5f97"},"\u53d6\u5f97"),(0,a.kt)("p",null,"An Energy Regulator can be crafted in an ",(0,a.kt)("a",{parentName:"p",href:"/docs/Slimefun/Basic-Machines/Enhanced-Crafting-Table"},"Enhanced Crafting Table"),"."),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"An Energy Regulator must be placed within 7 blocks of an ",(0,a.kt)("a",{parentName:"p",href:"/docs/Slimefun/Electric-Machines/#Energy-generation"},"Energy Generator"),", ",(0,a.kt)("a",{parentName:"p",href:"../Electric-Machines.mb#Machines"},"machine")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/Slimefun/Electric-Machines/Energy-Management/Energy-Capacitors"},"capacitor")," (in a straight line; no diagonals). It will transfer energy between anything in that range, if there is any."),(0,a.kt)("p",null,"There can only be one energy regulator per energy network, and it does not store excess energy. To extend the range of your network and store energy, you need to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/Slimefun/Electric-Machines/Energy-Management/Energy-Capacitors"},"Energy Connectors")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/Slimefun/Electric-Machines/Energy-Management/Energy-Connector"},"Energy Capacitors"),"."),(0,a.kt)("p",null,"An energy regulator displays the total amount of energy in its network above it, but you can measure the amount of energy in an individual block by using a ",(0,a.kt)("a",{parentName:"p",href:"/docs/Slimefun/Technical-Gadgets/#multimeter"},"Multimeter"),"."))}g.isMDXComponent=!0}}]);