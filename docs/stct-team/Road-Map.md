---
title: "🚀 黏液科技官方路線圖"
sidebar_position: 1
---

## 📔 簡介

在過去的幾個月和幾年中, 你們經常要求我們對即將到來的變化更加開放.
所以我們決定是時候發布一個適當的路線圖了.
**請注意**, 這個路線圖將不會是完整和最終的, 我們可能會不時增加或改變一些目標, 並且在絕對確定之前我們決不會為事情設定一個發布日期.

這只是一個粗略指南, 讓你了解哪些變化會讓你感到興奮.
雖然這些變化中有許多可能是技術性的, 所以它們一開始可能那麼令人興奮或感到興趣.

另外, 除非有明確的請求, 否則我們不會主動尋找針對這些目標的合併請求.
如果你想提出合併請求, 請選擇任何問題追蹤內的問題或以認可的建議, 我們非常歡迎你 ❤️
然而這些變化主要是針對核心團隊的.

⭐ 即將發生的變化
其中一些的里程碑將有指定日期.
但是大多數的里程碑仍然很遙遠, 甚至在這裡都沒有準備好日期.
這些被標記為TBD (待定).

| 符號 | 變化類型 |
| ---- | ---- |
| 🔧 | 技術變更 / API |
| 🎈 | 新功能 |
| 💡| 性能改進 |

<details>
  <summary>較舊的變化</summary>

## 🔧 ~~(2021年 9月 3號 - 6號) API 搬遷~~ - 完成

第一個即將到來的變化是對我們的一些類別(classes)的重新定位, 以統一一些套件(packages), 擺脫舊的類別路徑並遵循一般慣例. 你可以在這裡讀到更多關於這個的訊息: [#3139](https://github.com/Slimefun/Slimefun4/pull/3139)

</details>

## 🔧 (Q1 2022) 物品欄系統重寫

接下來是重寫我們的物品欄系統. 這個API已經非常的老舊了. 我們還沒有確定的時間表, 也許會在上述的API搬遷之後或同時進行.
新系統將更加靈活且易於開發者使用.

## 🎈(Q1 2022) 新的音效系統

很快我們將允許伺服器所有者在此插件中完全配置任何聲音.
這也適用於材質包的自定義聲音. 此外, 你也可以更改任何聲音的音調和音量, 甚至將其靜音.
你可以在這裡看到進度: [#2844](https://github.com/Slimefun/Slimefun4/pull/2844)

## 🎈 (Q1 2022) 輻射系統的變化

感謝 @Semisol , 你很快就能享受到一種新的輻射系統, 該系統通過計算所謂的放射性物質的 "暴露水平" 來工作. 在達到一定的暴露水平之前, 你不會出現輻射症狀.
這也將使不同的輻射水平彼此更加分明, 且這些功能也伴隨著好看的界面變化! 你可以在這裡追蹤這方面的進度: [#3189](https://github.com/Slimefun/Slimefun4/pull/3189)

## 🎈 (Q2 2022) SQL資料庫支持和研究系統重寫

研究系統將重寫為API.
我們會刪除研究的數字ID, 並完全依賴命名鍵.
除此之外, 我們還增加對SQL資料庫的支持, 以便在多個伺服器上同步研究結果.
另外, 也可以使用於本地文件的資料庫.

## 🔧 (Q2 2022) 配方系統重寫

我們的配方系統急需重寫, 它需要減少基於物品的比較, 我們應該通過使用材料標籤或slimefun物品類別(classes)等來允許替代的成分.
我將會親自進行這項重寫工作, 一些基礎架構已經建立起來了, 但還沒有甚麼可展示的, 離我們達到目的還有一段時間.

## 🎈 (Q3 2022) 可編輯的機器人重寫

可編輯的機器人很棒.
但他們還可以做得更好! 我們將把機器人的資料從方塊中區分出來, 並給它一個獨特的身分.
介面將會完全重做, 它將具有更好的性能. 哦, 你將能夠讓其他玩家訪問機器人並配置它們的權限.

## 🔧 (2022) 更新至Java 16

Slimefun 最終會在未來更新到Java 16.
不過我們會適當地宣布這將會發生的時間.
不用著急, 因為我們會等到大部分伺服器都已經升級完畢.

## 🔧 (TBD) Ticker重寫

感謝 @LinoxGH 和 @md5sha256 , 我們的ticker系統將會被重寫並變的更加可靠.
這也包括一些未加入的API變化, 你可以在這裡追蹤進度: [#2996](https://github.com/Slimefun/Slimefun4/pull/2996)

## 🔧 (TBD) BlockStorage系統重寫

"方塊儲存" 系統將會被重寫, API將會發生巨大的變化, 我們將為更有效的儲存方法而開放, 這將會對長期的穩定性和性能有很大的幫助.
你可以在這裡追蹤進度: [#2792](https://github.com/Slimefun/Slimefun4/pull/2792)

## 🔧 (TBD) 對config系統更改和也許有一個reload指令

我們還沒完全決定這個, 但你可以在這裡關注進度: [#2822](https://github.com/Slimefun/Slimefun4/pull/2822)

## 💡 (TBD) 物流網路重寫

我們從哪裡開始... 它需要重寫, (nuff said)不用多說了.

## 🎉 反饋

我們一直在尋找反饋!
如果你有甚麼建議, 請查看我們的discord伺服器 @ <https://discord.gg/slimefun> 並查看 #suggestions.
我們總是渴望看到社區想要甚麼或不想要甚麼.
如果你是開發人員且對一些更技術性的更改有疑問或疑慮, 只需要在 #programming-help 中發出你的問題, 我們將會給你回覆!
**請注意** 請使用英文溝通 並遵守官方的規定.

上述可能將不會是最新的.
一切都將以 <https://github.com/Slimefun/Slimefun4/issues/3170> 內為準!