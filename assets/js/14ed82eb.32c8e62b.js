"use strict";(self.webpackChunkslime_traditional_translation=self.webpackChunkslime_traditional_translation||[]).push([[9981],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1097:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"How to report bugs",sidebar_position:5},l=void 0,u={unversionedId:"Slimefun/Overview/How-to-report-bugs",id:"Slimefun/Overview/How-to-report-bugs",title:"How to report bugs",description:"Reporting bugs is crucial to this open-source project.",source:"@site/docs/Slimefun/Overview/How-to-report-bugs.md",sourceDirName:"Slimefun/Overview",slug:"/Slimefun/Overview/How-to-report-bugs",permalink:"/docs/Slimefun/Overview/How-to-report-bugs",tags:[],version:"current",lastUpdatedAt:1649961136,formattedLastUpdatedAt:"4/14/2022",sidebarPosition:5,frontMatter:{title:"How to report bugs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5165\u9580\u6307\u5357",permalink:"/docs/Slimefun/Overview/Getting-Started"},next:{title:"\u6b0a\u9650",permalink:"/docs/Slimefun/Overview/Permissions"}},p={},h=[{value:"Troubleshooting Guide",id:"troubleshooting-guide",level:2},{value:"1. Checking your versions",id:"1-checking-your-versions",level:3},{value:"2. Checking for updates",id:"2-checking-for-updates",level:3},{value:"3. Try restarting your Server",id:"3-try-restarting-your-server",level:3},{value:"4. See if it is a known issue",id:"4-see-if-it-is-a-known-issue",level:3},{value:"5. Search for error-reports and stacktraces",id:"5-search-for-error-reports-and-stacktraces",level:3},{value:"6. Make sure it is Slimefun!",id:"6-make-sure-it-is-slimefun",level:3},{value:"7. Gather as much information as possible",id:"7-gather-as-much-information-as-possible",level:3},{value:"8. Posting the Issue via GitHub",id:"8-posting-the-issue-via-github",level:3}],c={toc:h};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Reporting bugs is crucial to this open-source project."),(0,a.kt)("p",null,"So please consider reporting bugs on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Slimefun/Slimefun4/issues"},"Issue Tracker")),(0,a.kt)("p",null,"But before reporting a bug, you should read through the following Troubleshooting Guide."),(0,a.kt)("p",null,"Many issues you come across can be solved on your side and save us a lot of time and effort."),(0,a.kt)("h2",{id:"troubleshooting-guide"},"Troubleshooting Guide"),(0,a.kt)("p",null,"This guide aims to help you at identifying issues and informing you on what ",(0,a.kt)("strong",{parentName:"p"},"you")," can do to prevent these issues."),(0,a.kt)("p",null,"If everything fails, we will also help you how to make detailed and efficient bug reports, so that we can give you the best help possible."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Also see: ",(0,a.kt)("a",{parentName:"em",href:"/docs/Slimefun/Overview/Common-Issues"},"Common Issues"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"But first off:")),(0,a.kt)("p",null,"Always remember that Slimefun4 is open-source and community-developed."),(0,a.kt)("p",null,"But most importantly: It is free..."),(0,a.kt)("p",null,"So do ",(0,a.kt)("strong",{parentName:"p"},"not")," expect us to magically fix everything for you and be available 24/7."),(0,a.kt)("p",null,"If you really enjoy this plugin, then please follow this guide, it'd make our lives a lot easier and would help us focus on important issues."),(0,a.kt)("p",null,"It's the least you can do to relieve our shoulders."),(0,a.kt)("h3",{id:"1-checking-your-versions"},"1. Checking your versions"),(0,a.kt)("p",null,"It is absolutely ",(0,a.kt)("strong",{parentName:"p"},"crucial")," that you check your versions, 90% of issues can already be solved in this step alone."),(0,a.kt)("p",null,"Gather the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Your Server Software")," ",(0,a.kt)("em",{parentName:"li"},"(Are you running Bukkit, Spigot, Paper or something else?)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Your Minecraft Version")," ",(0,a.kt)("em",{parentName:"li"},"(Is it 1.8, is it 1.14, 1.9001? You should know that.)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Your Slimefun Version")," ",(0,a.kt)("em",{parentName:"li"},'(What version have you installed? Is it a DEV build or a "stable" version?)'))),(0,a.kt)("p",null,"You can quickly gather all this info at once by running the command ",(0,a.kt)("inlineCode",{parentName:"p"},"/sf versions"),"."),(0,a.kt)("p",null,"If your Server Owner has not given you access to this command, then Shift and Right-Click your Slimefun Guide, there should be a Book and Quill there that will at least tell you your Minecraft and Slimefun Version. That is already very helpful!"),(0,a.kt)("p",null,"If you are reporting a bug on us, then we will need this info, otherwise we have absolutely no chance to figure out what we're dealing with."),(0,a.kt)("p",null,"It's like finding a nail in a pile of hay, but the pile is on fire and on an entirely different planet than the nail."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'So please, please, PLEEEAASEE tell us the exact versions you are running, "latest" is NOT HELPING'),"."),(0,a.kt)("h3",{id:"2-checking-for-updates"},"2. Checking for updates"),(0,a.kt)("p",null,"The next step is to compare the versions you acquired in step 1 to the most recent versions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is your Server Software up to date?")," ",(0,a.kt)("em",{parentName:"li"},"(Check if there has been an update to Spigot, Paper, Bukkit or whatever you are using)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is Slimefun up to date?")," ",(0,a.kt)("em",{parentName:"li"},"(You can check whether there are newer versions than yours ",(0,a.kt)("a",{parentName:"em",href:"https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/master/"},"on the download page"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Are you using a DEV build?")," ",(0,a.kt)("em",{parentName:"li"},'(Stable builds are, well "stable" but far from bug-free)'))),(0,a.kt)("p",null,'To add on to the last point: We will not be accepting bug reports from "stable" versions, switch to a much later development version and see if your issue persists first.'),(0,a.kt)("p",null,"If you don't have file access to the server, then contact one of your admins, explain them your issue and link them to this guide."),(0,a.kt)("h3",{id:"3-try-restarting-your-server"},"3. Try restarting your Server"),(0,a.kt)("p",null,"This is not a joke. Try turning it off and on again, often times it can work and fix your problem."),(0,a.kt)("h3",{id:"4-see-if-it-is-a-known-issue"},"4. See if it is a known issue"),(0,a.kt)("p",null,"Take a look at our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Slimefun/Slimefun4/issues"},"Issue Tracker"),"."),(0,a.kt)("p",null,"Maybe your issue has already been reported, please don't post it again in that case. But you are encouraged to comment on that issue and give some information on how you were able to reproduce the problem."),(0,a.kt)("h3",{id:"5-search-for-error-reports-and-stacktraces"},"5. Search for error-reports and stacktraces"),(0,a.kt)("p",null,"Before you venture off and hunt down those error-reports and stacktraces, keep in mind that those things should always be posted via ",(0,a.kt)("a",{parentName:"p",href:"https://pastebin.com/"},"pastebin")," when reporting via our Issue Tracker."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/plugins/Slimefun/error-reports/")," and check if any error-reports have been generated there."),(0,a.kt)("p",{parentName:"li"},"Please post them along with your issue if they correlate with the problem.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your server's console and check if you can see any stacktraces."))),(0,a.kt)("p",null,'(Stacktraces are those things that look really scary and you cannot wrap your mind around how to read them) See if the phrase "slimefun" comes up in it. Attach it to your bug report then.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It is very important to always post the FULL stacktrace, snip off one single word and it all becomes useless, so please make sure to include everything you see.")),(0,a.kt)("p",null,'Note that stacktraces that contain "slimefun" in them or even outright say they are caused by Slimefun, they maybe aren\'t.'),(0,a.kt)("p",null,"If the name of one of your installed addons comes up in that stacktrace, post it on that addon's bug tracker instead."),(0,a.kt)("p",null,"If you don't have file access to the server, then contact one of your admins, explain them your issue and link them to this guide."),(0,a.kt)("h3",{id:"6-make-sure-it-is-slimefun"},"6. Make sure it is Slimefun!"),(0,a.kt)("p",null,"When you encounter problems with content in Slimefun, then please make sure that the Item/Block/Machine is actually from Slimefun and not from an addon."),(0,a.kt)("p",null,"If your problem revolves around items from ExoticGarden or any other Slimefun addons, then report them on their bug tracker and not here."),(0,a.kt)("h3",{id:"7-gather-as-much-information-as-possible"},"7. Gather as much information as possible"),(0,a.kt)("p",null,"When we say you should be detailed, we mean it."),(0,a.kt)("p",null,"Try to experiment out some things before reporting."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Is only that item affected or are other (similar) items broken as well?"),(0,a.kt)("li",{parentName:"ul"},"Does the bug only happen if you hold a certain item?"),(0,a.kt)("li",{parentName:"ul"},"Have you tried jumping, left- or right-clicking or dancing around?"),(0,a.kt)("li",{parentName:"ul"},"Does the issue require a creeper to be watching behind your back?"),(0,a.kt)("li",{parentName:"ul"},"Does it only happen on your server? ",(0,a.kt)("strong",{parentName:"li"},"Have you tried talking to others on our discord server about it?"))),(0,a.kt)("p",null,"These are just some more or less serious examples. Every bit of information helps."),(0,a.kt)("p",null,"The narrower and detailed you can get, the better."),(0,a.kt)("h3",{id:"8-posting-the-issue-via-github"},"8. Posting the Issue via GitHub"),(0,a.kt)("p",null,"If updating or restarting did not help, then please report your issue via our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Slimefun/Slimefun4/issues/"},"Issue Tracker"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We will need all the version information you gathered in Step 1."),(0,a.kt)("li",{parentName:"ul"},"Please give a detailed description of the issue"),(0,a.kt)("li",{parentName:"ul"},"Give us very specific information on what you did when that issue occurred"),(0,a.kt)("li",{parentName:"ul"},"Explain what you ",(0,a.kt)("strong",{parentName:"li"},"expected")," to happen, a misunderstanding of what is supposed to happen could also be the root cause of the problem")),(0,a.kt)("p",null,"We hope this little guide helps you make helpful and precise bug reports."),(0,a.kt)("p",null,"Thanks for making it this far!"))}m.isMDXComponent=!0}}]);