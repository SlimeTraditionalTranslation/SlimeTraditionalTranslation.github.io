"use strict";(self.webpackChunkslime_traditional_translation=self.webpackChunkslime_traditional_translation||[]).push([[7116],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2592:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],o={title:"Developer Guide (5 Researches)",sidebar_position:6},l=void 0,c={unversionedId:"Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(5-Researches)",id:"Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(5-Researches)",title:"Developer Guide (5 Researches)",description:"This is the fifth Part of our Developer Guide, you can find a full overview on our main page.",source:"@site/docs/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(5-Researches).md",sourceDirName:"Slimefun/Other-Plugins/Developer-Guide",slug:"/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(5-Researches)",permalink:"/docs/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(5-Researches)",tags:[],version:"current",lastUpdatedAt:1649961136,formattedLastUpdatedAt:"4/14/2022",sidebarPosition:6,frontMatter:{title:"Developer Guide (5 Researches)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Developer Guide (4b Radioactive and WitherProof)",permalink:"/docs/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(4b-Radioactive-and-WitherProof)"},next:{title:"Developer Guide (6 Custom Heads)",permalink:"/docs/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(6-Custom-Heads)"}},u={},p=[{value:"1. A little recap",id:"1-a-little-recap",level:2},{value:"2. Creating a Research",id:"2-creating-a-research",level:2},{value:"3. Adding items to our Research",id:"3-adding-items-to-our-research",level:2},{value:"4. We added a Research",id:"4-we-added-a-research",level:2}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the ",(0,i.kt)("strong",{parentName:"p"},"fifth Part")," of our Developer Guide, you can find a full overview on our ",(0,i.kt)("a",{parentName:"p",href:"/docs/Slimefun/Other-Plugins/Developer-Guide/"},"main page"),"."),(0,i.kt)("p",null,"If you haven't checked out the previous parts, then please do that now."),(0,i.kt)("h2",{id:"1-a-little-recap"},"1. A little recap"),(0,i.kt)("p",null,"The last three parts were all about creating our Slimefun items."),(0,i.kt)("p",null,"We covered a lot of concept that can be quite overwhelming at first. So let's step down a bit again."),(0,i.kt)("p",null,"Today we cover Researches."),(0,i.kt)("p",null,"For this we will head back to your main class, inside your ",(0,i.kt)("inlineCode",{parentName:"p"},"onEnable()")," method."),(0,i.kt)("p",null,"After adding all your items, it should look a little bit like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey categoryId = new NamespacedKey(this, "cool_category");\nCustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");\nItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);\n\n// The custom item for our SlimefunItem\nSlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);\n\n// A 3x3 shape representing our recipe\nItemStack[] recipe = {\n    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER),\n    null,                                    new ItemStack(Material.CAKE),       null,\n    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER)\n};\n\n// We are now using our own custom class for this\nFireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);\ncake.register(this);\n')),(0,i.kt)("p",null,"Maybe you will even have multiple items like that."),(0,i.kt)("h2",{id:"2-creating-a-research"},"2. Creating a Research"),(0,i.kt)("p",null,"Creating the Research itself is easy as creating any object in Java."),(0,i.kt)("p",null,"We will start by creating a new Research object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Research research = new Research(...);\n")),(0,i.kt)("p",null,"The constructor for a Research takes in 4 arguments, a ",(0,i.kt)("inlineCode",{parentName:"p"},"NamespacedKey")," as the id, an integer id, a name and a default cost value."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NamespacedKey"),' should be quite familiar to you at this point, so we start by creating that. We will use a reference to our plugin using "this" and a lowercase id.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");\nResearch research = new Research(researchKey, ?, ?, ?);\n')),(0,i.kt)("p",null,"Next up is the integer id."),(0,i.kt)("p",null,"This id is a bit of a... complicated matter. It was replaced by the NamespacedKey, however we still require it at the moment."),(0,i.kt)("p",null,"Just keep in mind that this will be removed at some point, as it is a really bad way of identifying researches."),(0,i.kt)("p",null,"That being said, your integer id ",(0,i.kt)("strong",{parentName:"p"},"must be unique"),". And it must be unique across all addons."),(0,i.kt)("p",null,"Try to come up with a random number that noone else has picked yet. This is really not a good way of doing this and stems from a time before Addons existed."),(0,i.kt)("p",null,"We are working hard on removing this but for the time being... You will need that id. And it is important that you do not change it at anytime."),(0,i.kt)("p",null,"For this example we will simply choose 123 as our id. (Note that 123 is already taken by Slimefun, so don't use that. Pick a very large number instead.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");\nResearch research = new Research(researchKey, 123, ?, ?);\n')),(0,i.kt)("p",null,"Now onto the name. The name of your research is the text that is displayed to the Player when they unlock it."),(0,i.kt)("p",null,"It should reflect the items it represents but it does not have to be a literal correlation."),(0,i.kt)("p",null,"Feel free to come up with puns or funny splash texts that convey a message about your items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");\nResearch research = new Research(researchKey, 123, "This is an example message", ?);\n')),(0,i.kt)("p",null,"Now lastly we need to define a default cost for this Research."),(0,i.kt)("p",null,'Note that this is only the "default", Server Owners can always adjust this cost in their config files.'),(0,i.kt)("p",null,"We will simply specify a cost of 10 xp levels for this example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");\nResearch research = new Research(researchKey, 123, "This is an example message", 10);\n')),(0,i.kt)("p",null,"Our Research is almost done now."),(0,i.kt)("p",null,"All that is left to do is to add our items to that Research."),(0,i.kt)("h2",{id:"3-adding-items-to-our-research"},"3. Adding items to our Research"),(0,i.kt)("p",null,"Now we still need to add our items to this Research."),(0,i.kt)("p",null,"We can do that by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Research#addItems(...)"),"."),(0,i.kt)("p",null,"This method has a variable amount of parameters, you can add as many Slimefun items as you want."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");\nResearch research = new Research(researchKey, 123, "This is an example message", 10);\n\n// Slimefun items are seperated via a comma\nresearch.addItems(item1, item2, item3, ...);\n')),(0,i.kt)("p",null,"In our example above, we only got our fire cake."),(0,i.kt)("p",null,"So let's add that to the Research."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// ...\nFireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);\ncake.register(this);\n\nNamespacedKey researchKey = new NamespacedKey(this, "fire_cake");\nResearch research = new Research(researchKey, 123, "You don\'t wanna eat this", 10);\nresearch.addItems(cake);\n')),(0,i.kt)("p",null,"Now the only thing left: Registering the Research."),(0,i.kt)("p",null,"For this we simply call .register() on our Research object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// ...\nFireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);\ncake.register(this);\n\nNamespacedKey researchKey = new NamespacedKey(this, "fire_cake");\nResearch research = new Research(researchKey, 123, "You don\'t wanna eat this", 10);\nresearch.addItems(cake);\n\nresearch.register();\n')),(0,i.kt)("p",null,"And we are done!"),(0,i.kt)("h2",{id:"4-we-added-a-research"},"4. We added a Research"),(0,i.kt)("p",null,"Now that we are finished, here is our code so far:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey categoryId = new NamespacedKey(this, "cool_category");\nCustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");\nItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);\n\n// The custom item for our SlimefunItem\nSlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);\n\n// A 3x3 shape representing our recipe\nItemStack[] recipe = {\n    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER),\n    null,                                    new ItemStack(Material.CAKE),       null,\n    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER)\n};\n\n// We are now using our own custom class for this\nFireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);\ncake.register(this);\n\nNamespacedKey researchKey = new NamespacedKey(this, "fire_cake");\nResearch research = new Research(researchKey, 123, "You don\'t wanna eat this", 10);\nresearch.addItems(cake);\n\nresearch.register();\n')),(0,i.kt)("p",null,"We now have an awesome fire cake and a Research to go with it."),(0,i.kt)("p",null,"Players will now be required to unlock this cake before they can access it."),(0,i.kt)("p",null,"If you have any questions, feel free to hop on discord and ask them in ",(0,i.kt)("inlineCode",{parentName:"p"},"#programming-help"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"Developer-Guide-(6-Custom-Heads).md"},(0,i.kt)("strong",{parentName:"a"},"> Continue with Part 6"))))}d.isMDXComponent=!0}}]);