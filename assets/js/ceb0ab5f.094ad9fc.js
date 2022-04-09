"use strict";(self.webpackChunkslime_traditional_translation=self.webpackChunkslime_traditional_translation||[]).push([[597],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3310:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Developer Guide (6 Custom Heads)",sidebar_position:7},u=void 0,s={unversionedId:"Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(6-Custom-Heads)",id:"Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(6-Custom-Heads)",title:"Developer Guide (6 Custom Heads)",description:"This is the sixth Part of our Developer Guide, you can find a full overview on our main page.",source:"@site/docs/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(6-Custom-Heads).md",sourceDirName:"Slimefun/Other-Plugins/Developer-Guide",slug:"/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(6-Custom-Heads)",permalink:"/docs/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(6-Custom-Heads)",tags:[],version:"current",lastUpdatedAt:1649528779,formattedLastUpdatedAt:"4/9/2022",sidebarPosition:7,frontMatter:{title:"Developer Guide (6 Custom Heads)",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Developer Guide (5 Researches)",permalink:"/docs/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(5-Researches)"},next:{title:"Developer Guide (7 GEO Resources)",permalink:"/docs/Slimefun/Other-Plugins/Developer-Guide/Developer-Guide-(7-GEO-Resources)"}},c={},m=[{value:"1. Our usual recap",id:"1-our-usual-recap",level:2},{value:"2. Introduction",id:"2-introduction",level:2},{value:"3. Getting the texture",id:"3-getting-the-texture",level:2},{value:"3.1. Creating a head yourself",id:"31-creating-a-head-yourself",level:3},{value:"3.2 Using a head from minecraft-heads.com",id:"32-using-a-head-from-minecraft-headscom",level:3},{value:"4. Using your texture for an Item Group",id:"4-using-your-texture-for-an-item-group",level:2},{value:"5. Using your texture for items",id:"5-using-your-texture-for-items",level:2}],p={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the ",(0,o.kt)("strong",{parentName:"p"},"sixth Part")," of our Developer Guide, you can find a full overview on our ",(0,o.kt)("a",{parentName:"p",href:"/docs/Slimefun/Other-Plugins/Developer-Guide/"},"main page"),"."),(0,o.kt)("p",null,"If you haven't checked out the ",(0,o.kt)("a",{parentName:"p",href:"Developer-Guide-(5-Researches).md"},"fifth Part of this Guide"),", then please do that."),(0,o.kt)("h2",{id:"1-our-usual-recap"},"1. Our usual recap"),(0,o.kt)("p",null,"In the last part we covered how to create Researches."),(0,o.kt)("p",null,"This is the full code we created last time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey categoryId = new NamespacedKey(this, "cool_category");\nCustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");\nItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);\n\n// The custom item for our SlimefunItem\nSlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);\n\n// A 3x3 shape representing our recipe\nItemStack[] recipe = {\n    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER),\n    null,                                    new ItemStack(Material.CAKE),       null,\n    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER)\n};\n\n// We are now using our own custom class for this\nFireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);\ncake.register(this);\n\nNamespacedKey researchKey = new NamespacedKey(this, "fire_cake");\nResearch research = new Research(researchKey, 123, "You don\'t wanna eat this", 10);\nresearch.addItems(cake);\n\nresearch.register();\n')),(0,o.kt)("p",null,"Today we want to use custom heads for our item group and items."),(0,o.kt)("h2",{id:"2-introduction"},"2. Introduction"),(0,o.kt)("p",null,"As all of you know: Minecraft supports using any Player's head as an item or block."),(0,o.kt)("p",null,"This even includes Heads from Skins that are no longer in use."),(0,o.kt)("p",null,"There are a lot of databases out there which collect or curate lists of cool heads to use."),(0,o.kt)("p",null,"In this guide we will be using ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft-heads.com/"},"https://minecraft-heads.com/")," as it is pretty handy and large."),(0,o.kt)("p",null,"Any tool or website that curates or generates heads will work though."),(0,o.kt)("p",null,"Note that we are not affiliated with this website, this is just an example and our personal recommendation."),(0,o.kt)("p",null,"If you know a better tool or website, feel free to use that instead."),(0,o.kt)("h2",{id:"3-getting-the-texture"},"3. Getting the texture"),(0,o.kt)("p",null,"To use a head ingame you will need to point to the skin it should be using."),(0,o.kt)("p",null,"Minecraft uses an URL to the ",(0,o.kt)("a",{parentName:"p",href:"https://textures.minecraft.net/texture/"},"https://textures.minecraft.net/texture/")," server to accomplish this. This URL is not stored as plain text though, it is part of a JSON-String which is then encoded in Base64."),(0,o.kt)("p",null,"Don't worry you don't need to understand any of that really, all you need to know is that each skin can be represented by a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Base64"},"Base64")," String."),(0,o.kt)("p",null,"Now we just need the Base64 String of our skin..."),(0,o.kt)("h3",{id:"31-creating-a-head-yourself"},"3.1. Creating a head yourself"),(0,o.kt)("p",null,"If you want to create your own texture it will be as simple as creating a skin for your character."),(0,o.kt)("p",null,"We will just link you to the ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft.gamepedia.com/Skin#Creating_a_skin"},"Minecraft Wiki")," for that but I am sure you are already familiar with this."),(0,o.kt)("p",null,"Since we will only be using the head, the body, arms and legs are unimportant to us."),(0,o.kt)("p",null,"It is only important that you texturize the head part to your liking."),(0,o.kt)("p",null,"Have you made your texture? Good, alright!"),(0,o.kt)("p",null,"You can then use ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft-heads.com/custom-heads/heads-generator"},"Minecraft-Heads' Custom heads generator")," (as an example) to generate a give-command for your head."),(0,o.kt)("p",null,"It should look a little like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'/give @p skull 1 3 {display:{Name:"Test"},SkullOwner:{Id:"6e094b8b-8c7c-4ee4-b039-bd99a95a7666",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="}]}}}')),(0,o.kt)("p",null,'Now pay attention to the data in this command. There is a field called "Properties" followed by a "textures" object.'),(0,o.kt)("p",null,'This is what we are looking for. More precisely: It is actually the "Value" that we are looking for.'),(0,o.kt)("p",null,"So with everything else removed we are left with this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=")),(0,o.kt)("p",null,"This is the Base64 String we were looking for."),(0,o.kt)("p",null,"We will cover how to use it in the next section."),(0,o.kt)("h3",{id:"32-using-a-head-from-minecraft-headscom"},"3.2 Using a head from minecraft-heads.com"),(0,o.kt)("p",null,"You can of course extract any texture from a give-command as seen above."),(0,o.kt)("p",null,"But minecraft-heads.com already gives us the Base64 String we need for every head in their collection."),(0,o.kt)("p",null,"Just browse through the ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft-heads.com/custom-heads"},"Custom heads")," section and find a head you want to use."),(0,o.kt)("p",null,'When you click on it and scroll down you should see a "Value" field at the bottom which contains a String that may look like this:'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=")),(0,o.kt)("p",null,"This is the Base64 String we needed."),(0,o.kt)("p",null,"We can now use this String for our needs in the next step."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Disclaimer: Grabbing a skin from the website is very easy but remember: Credit where credit's due. It is always best advice to credit the sources or even creators who's content you used. This is not any legal advice but a little credit note on your project page for where you got those skins from is always a good idea.")),(0,o.kt)("h2",{id:"4-using-your-texture-for-an-item-group"},"4. Using your texture for an Item Group"),(0,o.kt)("p",null,"From our code we created earlier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey categoryId = new NamespacedKey(this, "cool_category");\nCustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");\nItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);\n\n// ...\n')),(0,o.kt)("p",null,"We want to modify this to use our texture now instead of a diamond."),(0,o.kt)("p",null,"Slimefun provides a quick and easy method for this: ",(0,o.kt)("inlineCode",{parentName:"p"},"SkullItem.fromBase64(...)"),"."),(0,o.kt)("p",null,"Note that you will need to ",(0,o.kt)("strong",{parentName:"p"},"import")," SkullItem from ",(0,o.kt)("inlineCode",{parentName:"p"},"me.mrCookieSlime.slimefun.cscorelib2.skull.SkullItem")," first."),(0,o.kt)("p",null,"This method takes in a Base64 String and gives us an ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemStack")," version of that head."),(0,o.kt)("p",null,"The constructor for ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomItem")," also allows us to specify an ItemStack which we want to rename instead of a Material."),(0,o.kt)("p",null,"So let's do that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey categoryId = new NamespacedKey(this, "cool_category");\nCustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64(...), "&4Our very cool Category");\nItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);\n\n// ...\n')),(0,o.kt)("p",null,"Now we still need to give that method our Base64 String from earlier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey categoryId = new NamespacedKey(this, "cool_category");\nCustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4Our very cool Category");\nItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);\n\n// ...\n')),(0,o.kt)("p",null,"Our ItemGroup is now displayed as our head."),(0,o.kt)("h2",{id:"5-using-your-texture-for-items"},"5. Using your texture for items"),(0,o.kt)("p",null,"The next part is to modify our ",(0,o.kt)("inlineCode",{parentName:"p"},"SlimefunItemStack")," to have our custom head texture."),(0,o.kt)("p",null,"This is our code from earlier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// ...\nSlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);\n// ...\n')),(0,o.kt)("p",null,"Wouldn't it be awesome for our Fire Cake to actually look like a dangerous piece of cake?"),(0,o.kt)("p",null,"With SlimefunItemStack this is even easier. We can simply replace our Material (",(0,o.kt)("inlineCode",{parentName:"p"},"Material.CAKE"),") with the Base64 String of our texture."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// ...\nSlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);\n// ...\n')),(0,o.kt)("p",null,"And we are done!"),(0,o.kt)("p",null,"Now here is the full code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'NamespacedKey categoryId = new NamespacedKey(this, "cool_category");\nCustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4Our very cool Category");\nItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);\n\n// The custom item for our SlimefunItem\nSlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);\n\n// A 3x3 shape representing our recipe\nItemStack[] recipe = {\n    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER),\n    null,                                    new ItemStack(Material.CAKE),       null,\n    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER)\n};\n\n// We are now using our own custom class for this\nFireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);\ncake.register(this);\n\nNamespacedKey researchKey = new NamespacedKey(this, "fire_cake");\nResearch research = new Research(researchKey, 123, "You don\'t wanna eat this", 10);\nresearch.addItems(cake);\n\nresearch.register();\n')),(0,o.kt)("p",null,"If you have any questions, feel free to hop on discord and ask them in ",(0,o.kt)("inlineCode",{parentName:"p"},"#programming-help"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"Developer-Guide-(7-GEO-Resources).md"},(0,o.kt)("strong",{parentName:"a"},"> Continue with Part 7"))))}d.isMDXComponent=!0}}]);