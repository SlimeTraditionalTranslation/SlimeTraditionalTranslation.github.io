"use strict";(self.webpackChunkslime_traditional_translation=self.webpackChunkslime_traditional_translation||[]).push([[9331],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2502:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Teleporter",sidebar_position:13},p=void 0,c={unversionedId:"Slimefun/GPS/Teleporter",id:"Slimefun/GPS/Teleporter",title:"Teleporter",description:"Teleporter",source:"@site/docs/Slimefun/GPS/Teleporter.md",sourceDirName:"Slimefun/GPS",slug:"/Slimefun/GPS/Teleporter",permalink:"/docs/Slimefun/GPS/Teleporter",tags:[],version:"current",lastUpdatedAt:1649261646,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:13,frontMatter:{title:"Teleporter",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Elevator Plate",permalink:"/docs/Slimefun/GPS/Elevator-Plate"},next:{title:"Technical Gadgets Overview",permalink:"/docs/Slimefun/Technical-Gadgets/"}},u={},s=[{value:"Obtaining",id:"obtaining",level:2},{value:"Usage",id:"usage",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/Teleporter.png",alt:"Teleporter"})),(0,a.kt)("p",null,"The Teleporter is a Multiblock GPS-based device."),(0,a.kt)("h2",{id:"obtaining"},"Obtaining"),(0,a.kt)("p",null,"A Teleporter is created by placing a ",(0,a.kt)("a",{parentName:"p",href:"GPS-Teleporter-Matrix"},"GPS Teleporter Matrix")," encircled by eight ",(0,a.kt)("a",{parentName:"p",href:"GPS-Teleporter-Pylon"},"GPS Teleporter Pylons"),", and placing a ",(0,a.kt)("a",{parentName:"p",href:"GPS-Activation-Device"},"GPS Activation Device")," on the GPS Teleporter Matrix."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Teleporters are used to teleport to waypoints created using a ",(0,a.kt)("a",{parentName:"p",href:"GPS-Marker-Tool"},"GPS Marker Tool")," or a ",(0,a.kt)("a",{parentName:"p",href:"GPS-Emergency-Transmitter"},"GPS Emergency Transmitter"),"."),(0,a.kt)("p",null,"Teleporting speed is determined by the distance of the given waypoint and the ",(0,a.kt)("a",{parentName:"p",href:"GPS-Transmitter"},"GPS network complexity"),"."),(0,a.kt)("p",null,"If the network complexity is lower than 100, it will always take 50 seconds to teleport. If the network complexity is above 100, the speed is given by the following equation: ",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/TeleportEquation.png",alt:"Teleporting Speed Equation"})," seconds, where DistanceSquared cannot be greater than 100 000 000, and the whole expression cannot be greater than 20.5 seconds."))}m.isMDXComponent=!0}}]);