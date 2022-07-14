---
title: 高級物流節點 (輸出)
sidebar_position: 6
---

高級物流節點 (輸出) 是 [物流網路](Cargo-Management.md) 的一個組件，它可以接收由 [物流節點 (輸入)](Input-Node.md) 發送的物品。

它是比 [物流節點 (輸出)](Output-Node.md) 更複雜的類型，允許設置過濾物品。

## 取得

高級物流節點 (輸出) 可以在[進階合成台](../Basic-Machines/Enhanced-Crafting-Table.md)中製作。

## 使用方法

高級物流節點 (輸出) 將網絡中與其設置匹配的物品移動到放置它們的儲存單元中。

### 放置

高級物流節點 (輸出) 必須放置（蹲下右鍵）到一個容器或 [機器](../Electric-Machines/Electric-Machines.md)上，並在 [物流核心](Cargo-Manager.md) 或 [物流節點 (中繼)](Connector-Node.md) 的 6 個方塊內對齊，範圍為 1格（無對角線）。

### 設定

右鍵點擊高級物流節點 (輸出)會顯示配置以下設置的界面，從左到右：

* **3x3 格子界面** - 放置在那裡的物品會被包含/排除。
* **類型：白名單 / 黑名單** - 控製界面中的物品是列入白名單（包括）還是列入黑名單（排除）。
* **包括子 ID/耐久性** - 如果啟用，只有與界面中的物品具有相同耐久性的物品才會被列入白名單/黑名單。
* **包括敘述** - 如果啟用，只有與界面中的物品具有相同敘述的物品才會被列入白名單/黑名單。
* **通道** - 從中獲取物品的頻道。