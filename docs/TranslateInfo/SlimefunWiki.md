---
title: "黏液維基- 翻譯"
sidebar_position: 2
---

## 使用 Crowdin 進行翻譯

我們使用 Crowdin 來進行所有黏液科技維基翻譯

<https://crowdin.com/project/stct-slimefun-wiki>

總體黏液主體維基翻譯進度

[![Crowdin](https://badges.crowdin.net/stct-slimefun-wiki/localized.svg)](https://crowdin.com/project/stct-slimefun-wiki)

## 翻譯必須遵照現有的繁體翻譯物品名

對於想要貢獻黏液維基翻譯的人

請一定要對物品名稱進行與遊戲內物品核對

這樣也能方便正在看維基的人 避免同時出現兩種不同的翻譯

例如: 斬首巨劍 在維基內寫 斬首刃

如果你懶得從遊戲中查詢這些物品名稱,

你也可以直接從以下連結進行查找, _通常_情況下都能直接匹配到物品ID

<https://github.com/xMikux/Slimefun4/blob/master/src/main/java/io/github/thebusybiscuit/slimefun4/implementation/SlimefunItems.java>

## 為甚麼我看到一些String沒有辦法被翻譯?

Crowdin 會自動去標記重複性String,

你只需要到主要的String那邊進行翻譯

之後Crowdin就會自動將其推送到所有重複性String上

這樣能夠大幅度降低翻譯重複名稱時間, 並加快翻譯進度

還有減少一些翻譯名稱不統一性.

(之後再補Crowdin圖片介紹)
