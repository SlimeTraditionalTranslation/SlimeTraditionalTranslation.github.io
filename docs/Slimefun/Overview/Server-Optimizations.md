---
title: 伺服器優化指南
sidebar_position: 3
---

黏液科技是一個非常大的插件, 因此總是對其性能產生疑問.

此插件自2013年以來就一直存在, 並多年來進行許多更改與優化. 但根據你使用此插件的方式, 效能可能會有所不同.

本文章幫助你發現瓶頸和局限性, 並指導你優化伺服器和黏液科技設定, 以使其盡可能順暢的運行.

以下是有關於如何優化伺服器或黏液科技設定的一些最重要提示:

## 1. 時刻關注效能狀態

伺服器優化最重要的是資訊.

你需要知道要尋找甚麼才能提高性能, 因此這裡是你應該熟悉的一些非常重要的工具:

### a) 伺服器分析 (/timings)

Spigot 和 Paper 都已經帶有自己的分析. 你可以透過聊天室執行 `/timings` 來訪問此分析. 這些事件分析器可以深入瞭解你的伺服器所面臨的問題, 甚至可以將其分解為你所使用的各個插件, 和這些插件的特定執行任務.

**注意:** 理解 timings-report 可能是一項艱難的任務. 請參閱此 [Spigotmc.org上的維基文章](https://www.spigotmc.org/wiki/timings/) 以獲得有關於timings的工作原理.

但請記住, 並非這些報告中的每個數字都很重要, 特別是"startup-tasks"在不影響性能的狀況下可能會顯示為紅色, 因為它們僅在伺服器啟動過程中運行.

### b) 黏液科技分析 (/sf timings)

黏液科技也提供了自己的分析工具, 讓你找到卡頓來源.

通過運行 `/sf timings` 你可以大致了解哪些區塊, 哪些機器或附加對性能有很大的影響. 試試看吧, 讓自己熟悉一下! 你肯定會看到黏液科技和附加的不同內容之間的一些差異.

### c) 基於插件的伺服器分析

除了標準的timings工具外, 還有一些第三方工具可以幫助你和開發者追蹤代碼中的卡頓問題. 我們個人推薦 [:zap: Spark by @Luck](https://www.spigotmc.org/resources/spark.57242/). Spark的報告已經幫助我們解決了一些優化問題並確定了瓶頸, 所以它似乎是一個非常有用的插件, 對伺服器擁有者和開發者都是如此.

## 2. 選擇合適的伺服器軟體

選擇合適的伺服器軟體在伺服器優化中起著重要的作用.

自從CraftBukkit停產以來, [Spigot](https://www.spigotmc.org/) 已經成為標準的伺服器軟體. 但有無數的替代品和分叉可以選擇. [Paper](https://papermc.io/) 是 Spigot 的一個分叉, 事實證明它的性能比 Spigot 略好, 而且還提供了更好 更詳細的timings報告.

黏液科技的 **物流網路** 已被優化, 可在使用 [Paper](https://papermc.io/) 時發揮最佳效果.

但是還是有無數 Bukkit/Spigot 的其他分叉, 聲稱也能提高效能. 我們建議你自己研究一下並做出自己的選擇.

如果你能控制你的伺服器Java版本, 盡量選擇可能的最新Java版本.

一旦你選擇了一個你認為合適你的伺服器軟體, 你可能要花些時間來設定該軟體.

關於如何做到這一點, 已經有許多外部指南, 所以我們只在這裡連結其中的一些 (*他們在這方面比我們做的好*):

* [減少Lag - 一個基礎指南](https://www.spigotmc.org/wiki/reducing-lag/) (SpigotMC 維基)
* [伺服器優化指南](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/) (由 @Celbrimbor 在 SpigotMC 論壇上發表)
* [優化 Java 垃圾收集](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/) (@aikar 的個人部落格)

## 3. 避免 /reload

**永遠不要使用 `/reload`. 永遠.**

每當你添加了新的插件或編輯的設定文件時, 請重新啟動伺服器. 使用 `/reload` 將會導致巨大的 [記憶體洩漏](https://en.wikipedia.org/wiki/Memory_leak) 對伺服器的性能產生負面影響. `/reload` 也並不是能安全使用的, 應不惜一切代價避免使用.

許多插件並不意味著要處理重新加載, 黏液科技是其中之一, 你應該始終重啟你的伺服器.

## 4. 關閉向後兼容

黏液科技已經存在很長時間了, 有許多伺服器從多年前就在使用它.

任何在 **2019年夏季之前** 使用過黏液科技的伺服器都會有一堆舊的黏液物品. 這些物品可能仍在使用舊的物品格式, 這種格式速度慢且效率低下. 舊格式依賴於冗長的物品比較與查找. 每次玩家用手上的物品點擊時, 黏液科技都必須將該物品與所有存在於黏液物品進行較, 包括附加的任何物品. 這是一個相對較快的操作, 但時間會隨著附加數量與玩家數量而增加.

新的物品格式給任何黏液科技物品分配了NBT標籤, 並告訴插件玩家手上實際上持有甚麼物品. 這明顯更快, 並將所有比較減少到只有一個簡單的查找操作.

然而, 由於我們不想破壞任何沒有這些NBT標籤的舊物品, 系統仍然會退回到舊的標籤, 以保持與舊物品的兼容性.

如果你確定沒有在2019夏季之前製作的物品, 你可以停用此退回, 並完全使用新系統.

這將大幅改善你的伺服器效能.

但要注意, 任何在2019夏季前製作的物品在這樣做時可能會壞掉.

你可以通過在 `plugins/Slimefun/config.yml` 中設定 `backwards-compatibility` 為 `false` 來優化你的伺服器.

```yaml
options:
  backwards-compatibility: false
```

## 5. 較慢的 Tick-rates

許多黏液科技的方塊在定期執行代碼, 這個設置默認值是每隔 12 刻 (tick) 來運行一次這些任務 (20刻 = 1秒).

你可以增加這個延遲來減慢運行速度, 這*可能*有助於你的伺服器性能. 但是你不應該把它設置的太高, 否則你的玩家可能會抱怨他們的機器運行得太慢.

你可以在 `plugins/Slimefun/config.yml` 中設定這個設置. 我們建議只在必要時對默認的12刻做小的改動.

```yaml
URID:
  custom-ticker-delay: 12
```

與此設定類似, 黏液科技會定期檢查玩家的裝備, 以應用穿戴時特定裝備的效果. 這個任務的默認設置是10刻 (tick) (20刻 = 秒).

你也可以在必要時改變這個值.

```yaml
options:
  armor-update-interval: 10
```

## 6. 處理物流網路

眾所周知, 物流網路會導致一些性能下降, 這取決於它們是如何設置的.

多年來, 它們經歷了許多優化, 但它們仍然時不時會造成一些麻煩.

隨著 [合併請求 #2106](https://github.com/Slimefun/Slimefun4/pull/2106) 的合併, 物流網路已被大幅優化, 以便在使用 [Paper](https://papermc.io/) 時運行最佳效能. 你可以在[2. 選擇合適的伺服器軟體](#2-choosing-the-right-server-software) 中找到更多有關伺服器軟體的資訊.

這裡有兩種方法可以限制物流網路, 以防止你的玩家製造大型網路, 以損害你的伺服器效能.

### a) 設置最大的網路大小

你可以在 `plugins/Slimefun/config.yml` 中設定你的物流網路和能源網路的最大網路大小.

默認的 200 可能對使用物流網路的玩家非常慷慨, 降低這個門檻將提高性能.

請注意, 這個限制相當於尋路算法所查找可能的步驟數量, 它並不對應於網路中實際的節點數量!

```yaml
networks:
  max-size: 200
```

### b) 設置物流延遲

通常情況下, 物流網路的處理方式與其它ticking方塊一樣 (參見 [步驟 4](#4-slower-tick-rates)).

但你也可以讓物流核心比其他方塊運行的更慢. 這個延遲將使物流網路跳過指定的刻(tick), 延遲為0將使物流網路在每刻運行. 延遲為1將使網路只在第二次運行時運行. 延遲為2將使它再次運行前跳過2次運行, 所以它在第三次運行時運行. 以此類推...

由於這個設置會與前面提到的tick-rate相乘, 設置的太高會對玩家的體驗造成很大的影響.

我們建議將其設置為1, 只有在絕對需要時才增加.

```yaml
networks:
  cargo-ticker-delay: 1
```

## 7. 啟用自動更新

最後, 最能優化效能的方法是始終保持啟用黏液科技的自動更新!

我們會定期發布補丁, 修復與小的性能優化, 並且每個新發布版本都會使插件變得更好 (內容與性能方面). 因此我們強烈建議你在 `plugins/Slimefun/config.yml` 內啟用 `auto-updates`. 不過 因為**非官方**繁體版沒有自動更新, 所以必須手動更新! 還是強烈建議定期手動更新至最新版.

```yaml
options:
  auto-update: true
```
