# 📖 Portfolio 網站維護指南

> 此文件包含您日常維護網站所需的全部資訊。請收藏好這份文件，未來修改網站時可隨時查閱。

---

## 📑 目錄

### 第一部分：基本介紹
- [1. 認識您的網站](#1-認識您的網站)
- [2. 修改前的安全準備](#2-修改前的安全準備)
- [3. 推薦工具：VS Code](#3-推薦工具vs-code)

### 第二部分：自己修改網站
- [4. 修改一般文字（中英雙語）](#4-修改一般文字中英雙語)
- [5. 新增 / 刪除 / 修改作品](#5-新增--刪除--修改作品)
- [6. 修改工作經歷時間軸](#6-修改工作經歷時間軸)
- [7. 修改技能與軟體圖示](#7-修改技能與軟體圖示)
- [8. 修改社群連結](#8-修改社群連結)
- [9. 修改聯絡資訊](#9-修改聯絡資訊)
- [10. 修改網站主色與字體](#10-修改網站主色與字體)
- [11. 替換圖片](#11-替換圖片)
- [12. 啟用聯絡表單寄信功能](#12-啟用聯絡表單寄信功能)

### 第三部分：部署上線
- [13. 部署到 GitHub Pages](#13-部署到-github-pages)
- [14. 部署到 Netlify（更簡單）](#14-部署到-netlify更簡單)

### 第四部分：給 AI 助理的資料模板
- [15. 如何提供資料給 AI](#15-如何提供資料給-ai)
- [16. 資料填寫模板](#16-資料填寫模板)

### 第五部分：常見問題
- [17. 常見問題排除](#17-常見問題排除)

---

# 第一部分：基本介紹

## 1. 認識您的網站

### 網站架構

```
首頁 (index.html)               ← 整個網站的入口
├─ 關於我 (about.html)          ← 個人介紹、社群、技能、經歷、作品清單
├─ 設計 (portfolio.html)        ← 設計作品列表（品牌、活動、UI/UX）
│   └─ 作品詳情 (work-detail.html?id=xxx)
├─ 攝影 (photography.html)      ← 攝影作品列表
│   └─ 作品詳情 (work-detail.html?id=xxx)
├─ 插畫 (illustration.html)     ← 插畫作品列表
│   └─ 作品詳情 (work-detail.html?id=xxx)
└─ 聯繫方式 (contact.html)      ← 聯絡表單與資訊
```

### 檔案結構

```
portfolio/
├── index.html                  首頁
├── about.html                  關於我
├── portfolio.html              設計列表頁
├── photography.html            攝影列表頁
├── illustration.html           插畫列表頁
├── work-detail.html            作品詳情頁（共用模板）
├── contact.html                聯繫方式
│
├── css/                        樣式檔（控制視覺）
│   ├── reset.css              基礎重置
│   ├── common.css             共用樣式（導覽列、頁尾）
│   ├── pages.css              通用頁面樣式
│   ├── about.css              關於我頁專屬
│   ├── portfolio.css          設計/攝影/插畫列表頁專屬
│   ├── work-detail.css        作品詳情頁專屬
│   └── contact.css            聯繫頁專屬
│
├── js/                         功能檔（控制互動）
│   ├── common.js              共用功能（導覽列、語言切換、自訂游標）
│   ├── particles.js           全站粒子效果
│   ├── hero.js                首頁英雄區動畫
│   ├── about.js               關於我頁互動
│   ├── portfolio.js           列表頁篩選器
│   ├── work-detail.js         ⭐ 作品資料庫（最重要）
│   └── contact.js             聯絡表單
│
└── images/                     圖片資料夾（放您的作品圖）
```

### 三個最重要的檔案（您 90% 修改都在這裡）

| 檔案 | 用途 |
|------|------|
| **`js/common.js`** | 所有可雙語切換的文字（導覽列、按鈕、標題等） |
| **`js/work-detail.js`** | 所有作品的詳細資料（標題、客戶、年份、圖片等） |
| **`*.html`** 各頁面 | 列表頁的卡片、區塊結構 |

---

## 2. 修改前的安全準備

### ⚠️ 每次修改前必做：備份

1. 找到您的 `portfolio` 資料夾
2. 整個資料夾**複製一份**
3. 重新命名為 `portfolio-backup-YYYY-MM-DD`（例如 `portfolio-backup-2026-05-09`）
4. 確認沒問題再開始修改原本的資料夾

### 修改時的好習慣

- ✅ **一次只改一個地方** → 改完馬上測試
- ✅ **改完先存檔** → 重新整理瀏覽器看效果
- ✅ **如果改壞了** → 刪掉壞掉的版本、複製備份重來
- ❌ **不要改 css/js/ 之外的檔案**（如非必要）

---

## 3. 推薦工具：VS Code

由於您是設計師而非工程師，我推薦使用 **VS Code** 編輯網站：

### 下載安裝

1. 前往 https://code.visualstudio.com/
2. 下載對應您作業系統的版本
3. 安裝後開啟

⚠️ 須查證提示：VS Code 是業界最廣泛使用的程式編輯器（[Stack Overflow 2024 開發者調查](https://survey.stackoverflow.co/2024/)）。

### 安裝 Live Server 外掛（強烈推薦）

這個外掛讓您**邊改邊看效果**，不用每次手動重新整理：

1. 點 VS Code 左側方塊圖示（Extensions）
2. 搜尋「**Live Server**」（作者：Ritwick Dey）
3. 點 **Install**
4. 在 HTML 檔案上**按右鍵** → **Open with Live Server**
5. 瀏覽器自動開啟，每次儲存檔案會自動重新整理

### VS Code 必學三招

| 操作 | Mac 快捷鍵 | Windows 快捷鍵 |
|------|----------|--------------|
| 找尋文字 | `Cmd + F` | `Ctrl + F` |
| 找尋並取代 | `Cmd + Option + F` | `Ctrl + H` |
| 在所有檔案中找 | `Cmd + Shift + F` | `Ctrl + Shift + F` |
| 儲存 | `Cmd + S` | `Ctrl + S` |
| 復原（撤銷修改）| `Cmd + Z` | `Ctrl + Z` |

---


# 第二部分：自己修改網站

## 4. 修改一般文字（中英雙語）

### 在哪裡改？

打開 **`js/common.js`**，最上方有這段：

```javascript
const translations = {
  'zh-TW': {              // 中文
    'nav.home': '首頁',
    'nav.about': '關於我',
    'about.story.p1': '從小對藝術充滿熱情的我...',
    // ...所有中文文案
  },
  'en': {                 // 英文
    'nav.home': 'Home',
    'nav.about': 'About',
    'about.story.p1': 'Passionate about art...',
    // ...所有英文文案
  }
};
```

### 修改步驟

1. 用 VS Code 開啟 `js/common.js`
2. 按 `Cmd/Ctrl + F` 搜尋您要改的文字
3. 找到對應的 key（例如 `'about.story.p1'`）
4. 改右邊的文字內容
5. **務必同時修改中文版（`zh-TW`）和英文版（`en`）兩個區塊**
6. 儲存檔案

### 範例：把英雄區標題從「以設計驅動創新」改為「設計改變生活」

```javascript
// 修改前
'zh-TW': {
  'hero.title2': '驅動<em>創新</em>',
}

// 修改後
'zh-TW': {
  'hero.title2': '改變<em>生活</em>',
}
```

⚠️ 重要：
- `<em>` 標籤裡的文字會變成**綠色義大利體**（強調效果），可以保留
- `<br>` 是換行
- 引號要對齊：開頭 `'` 與結尾 `'` 必須是同一種

### 找不到文字怎麼辦？

如果文字寫在 HTML 檔案裡（不在 common.js），用 VS Code 的 **「在所有檔案中找」**（`Cmd/Ctrl + Shift + F`），輸入您要改的文字，它會列出所有出現位置。

---

## 5. 新增 / 刪除 / 修改作品

這是您最常做的操作。**新增作品需要修改兩個檔案**：

1. **列表頁的 HTML**（讓觀者看到作品縮圖）
2. **`js/work-detail.js`**（讓點進去後有完整資料）

### 5.1 新增作品（完整流程）

#### 步驟 1：準備圖片

把作品圖放到 `images/` 資料夾，建議命名：

```
images/
  abc-cover.jpg          ← 封面圖（800×1000，給列表頁用）
  abc-feature.jpg        ← 主視覺（1600×900，給詳情頁頂部）
  abc-1.jpg              ← 內頁圖 1（1600×900）
  abc-2.jpg              ← 內頁圖 2
  abc-3.jpg              ← 內頁圖 3
```

⚠️ **圖片建議先用 [TinyPNG](https://tinypng.com/) 壓縮**，可大幅減少檔案大小、加快網站載入速度。

#### 步驟 2：在列表頁加入卡片

依照作品類型，打開對應的列表頁：

| 作品類型 | 修改的檔案 |
|---------|-----------|
| 設計類（品牌、活動、UI/UX）| `portfolio.html` |
| 攝影類（活動、人像、商品、影片）| `photography.html` |
| 插畫類（商業、原創、私人）| `illustration.html` |

找到任一個現有作品（如 `<a href="..." class="work-card" ...>`），**整段複製貼到下方**，改 5 個地方：

```html
<!-- 範本：複製這段、改下面 5 個地方 -->
<a href="work-detail.html?id=【1.這裡填 id】" class="work-card" data-category="【2.分類】">
  <div class="work-card-image" style="background-image: url('【3.封面圖路徑】');"></div>
  <div class="work-card-overlay"></div>
  <span class="work-card-number">【4.編號】</span>
  <div class="work-card-content">
    <div class="work-card-meta">
      <span class="work-card-category">【分類顯示文字】</span>
      <span class="work-card-year">【年份】</span>
    </div>
    <h3 class="work-card-title">【5.作品標題】</h3>
    <p class="work-card-description">【簡短描述】</p>
  </div>
</a>
```

⚠️ 注意：
- **id 必須是英文小寫 + 短橫線**（如 `abc-branding`），不可有空格、中文、特殊符號
- **id 必須唯一**，不能跟其他作品重複

最後記得修改頂部的 `count-num` 數字（顯示作品總數）：

```html
<span class="count-num">10</span>  <!-- 從 09 改 10 -->
```

#### 步驟 3：在資料庫加入作品內容

打開 `js/work-detail.js`，找到 `WORKS_DATA = { ... }` 物件最後一個作品（例如 `'yexun-logo'`），在它的結尾 `}` 後**加上逗號**，新增一筆：

```javascript
'abc-branding': {                // ← id（與步驟 2 的 id 一致）
  id: 'abc-branding',
  category: 'branding',          // ← 分類
  categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
  title: { 'zh-TW': 'ABC 公司品牌設計', 'en': 'ABC Branding' },
  tagline: {
    'zh-TW': '為 ABC 公司打造完整的品牌識別系統。',
    'en': 'Building a complete brand identity for ABC Corp.'
  },
  featureImage: 'images/abc-feature.jpg',  // ← 主視覺路徑

  // ⚠️ 重點：依作品類型決定要不要加這行
  // 設計類 → 不寫 galleryStyle（預設滿版無間距）
  // 攝影類 → 加 galleryStyle: 'spaced',
  // 插畫類 → 加 galleryStyle: 'spaced',

  info: {
    client: { 'zh-TW': 'ABC 公司', 'en': 'ABC Corp.' },
    year: '2025',
    role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
    tools: 'Illustrator, Photoshop'
  },
  description: {
    heading: {
      'zh-TW': '從零開始打造<em>品牌靈魂</em>',
      'en': 'Building the <em>brand soul</em> from scratch'
    },
    paragraphs: {
      'zh-TW': [
        '第一段內容...',
        '第二段內容...',
        '第三段內容...'
      ],
      'en': [
        'First paragraph...',
        'Second paragraph...',
        'Third paragraph...'
      ]
    }
  },
  gallery: [
    { src: 'images/abc-1.jpg', caption: { 'zh-TW': 'LOGO 設計', 'en': 'LOGO Design' } },
    { src: 'images/abc-2.jpg', caption: { 'zh-TW': '應用素材', 'en': 'Applications' } },
    { src: 'images/abc-3.jpg', caption: { 'zh-TW': '視覺規範', 'en': 'Guidelines' } }
  ],
  next: 'eggpop-nft'              // ← 點「下個作品」要連到的 id
}
```

儲存後重新整理瀏覽器即可看到新作品。

### 5.2 三種作品類型的差異速查

| 類型 | 列表頁要改 | category 寫什麼 | galleryStyle |
|------|----------|----------------|--------------|
| **設計類** | `portfolio.html` | `branding` / `event` / `uiux` | ❌ 不寫（預設滿版無間距） |
| **攝影類** | `photography.html` | `event-photo` / `portrait-photo` / `product-photo` / `video` | ✅ 寫 `galleryStyle: 'spaced'` |
| **插畫類** | `illustration.html` | `commercial-illust` / `original-illust` / `private-illust` | ✅ 寫 `galleryStyle: 'spaced'` |

### 5.3 刪除作品

需要刪兩個地方：

1. **列表頁的 HTML**：刪掉整個 `<a class="work-card">...</a>` 區塊
2. **`js/work-detail.js`**：刪掉整個 `'作品id': { ... }` 物件（記得處理逗號）
3. **記得修改 count-num 數字**

⚠️ 如果其他作品的 `next: '被刪掉的id'` 指向被刪除的作品，要記得改成存在的 id。

### 5.4 修改現有作品

只改文字 → 找到對應 `'作品id': {}` 區塊，修改裡面的內容即可
換圖片 → 把新圖放進 `images/` 並修改路徑（`featureImage`、`gallery` 中的 `src`）

---

## 6. 修改工作經歷時間軸

打開 `about.html`，找到「**經歷時間軸**」區塊（搜尋 `class="timeline"`）。

每一個經歷項目格式如下：

```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-period" data-i18n="about.exp.1.period">2024 — 現在</div>
  <h3 class="timeline-role" data-i18n="about.exp.1.role">資深 UI/UX 設計師</h3>
  <div class="timeline-company">
    <span class="dot"></span>
    <span data-i18n="about.exp.1.company">Tech Studio Inc.</span>
  </div>
  <p class="timeline-description" data-i18n="about.exp.1.desc">
    主導 SaaS 產品設計團隊...
  </p>
  <div class="timeline-tags">
    <span class="timeline-tag">Design System</span>
    <span class="timeline-tag">SaaS</span>
  </div>
</div>
```

### 修改文字

兩種改法：
- **快速改法**：直接改 HTML 中的文字（單語版）
- **完整改法**：找到 `js/common.js` 中 `'about.exp.1.role'` 的 key，改中英雙語

### 新增 / 刪除經歷

直接複製整個 `<div class="timeline-item">...</div>` 區塊貼到下方，修改內容。

⚠️ 注意：
- **時間軸有「動態強度遞減」設計**，第 1 個是最強動畫、最後一個最弱
- 順序要維持「**最資深在最上面**」（時間倒序）
- 如果新增經歷後 i18n key 對應錯誤，記得在 `common.js` 加入新的 `about.exp.X.xxx` 翻譯

---

## 7. 修改技能與軟體圖示

打開 `about.html`，找到「**軟體圖示子區塊**」（搜尋 `class="skill-card"`）。

### 修改現有軟體

每張卡片格式：

```html
<div class="skill-card reveal">
  <span class="skill-level">Expert</span>          <!-- 熟練度 -->
  <div class="skill-icon">
    <svg viewBox="0 0 64 64">...</svg>             <!-- SVG 圖示 -->
  </div>
  <span class="skill-name">Figma</span>             <!-- 軟體名稱 -->
</div>
```

修改：
- **熟練度**：改 `Expert` / `Advanced` / `Intermediate` / `Beginner`
- **名稱**：改 `Figma` 為其他軟體名

### 新增軟體圖示

1. 到 [Simple Icons](https://simpleicons.org/) 搜尋軟體名稱
2. 點下載按鈕，複製 SVG 程式碼
3. 把整個 `<div class="skill-card">...</div>` 區塊複製貼到下方
4. 把新 SVG 貼到 `<div class="skill-icon">` 內
5. 修改 `skill-name` 與 `skill-level`

⚠️ **注意 SVG 顏色**：Simple Icons 預設是黑色，您可能需要在 SVG 標籤上加 `fill="#FFFFFF"` 或保留原本品牌色。

---

## 8. 修改社群連結

社群連結在 **`about.html`** 的「社群連結區」（搜尋 `class="social-section"`）。

每個社群連結格式：

```html
<a href="https://instagram.com/【您的帳號】" target="_blank" rel="noopener" class="social-item reveal">
  <div class="social-icon">
    <svg viewBox="0 0 24 24">...</svg>
  </div>
  <div class="social-info">
    <div class="social-name">Instagram</div>
    <div class="social-handle">@designer_name</div>      <!-- 顯示的帳號 -->
  </div>
  <span class="social-arrow">↗</span>
</a>
```

修改：
- `href` → 改成您的真實連結
- `social-handle` → 顯示在頁面上的帳號名稱

### 新增其他社群（如 Twitter、YouTube）

複製整個 `<a class="social-item">...</a>` 區塊，修改 `href`、SVG 圖示、社群名稱、帳號。

⚠️ 圖示可從 [Simple Icons](https://simpleicons.org/) 取得。

---

## 9. 修改聯絡資訊

打開 `js/common.js`，搜尋以下 key：

```javascript
'contact.info.email.value': 'hello@example.com',         // ← 改 Email
'contact.info.phone.value': '+886 912 345 678',          // ← 改電話
'contact.info.location.value': '台北，台灣',              // ← 改地點
'contact.info.hours.value': '週一至週五 10:00 — 19:00',  // ← 改工作時間
```

⚠️ 中英文都要改（在 `'zh-TW'` 與 `'en'` 兩個區塊）。

### 也要改 contact.html 中的 mailto / tel 連結

```html
<a href="mailto:hello@example.com" class="contact-info-value">...</a>
<a href="tel:+886912345678" class="contact-info-value">...</a>
```

把 `hello@example.com` 與 `+886912345678` 改成您的真實資料。

### 也要改頁尾的 Email

頁尾在每個頁面都有，搜尋 `mailto:hello@example.com` 改成您的 Email。建議用 VS Code 的「**在所有檔案中取代**」（`Cmd/Ctrl + Shift + H`）一次取代全部。

---

## 10. 修改網站主色與字體

### 修改主色（綠色 → 其他色）

打開 `css/common.css`，最上方找到：

```css
:root {
  --color-accent: #00d4a3;                          /* 主色（綠色）*/
  --color-accent-soft: rgba(0, 212, 163, 0.15);    /* 主色透明版 */
}
```

把 `#00d4a3` 改成您要的顏色代碼（如 `#FF5A5F` 為紅色）。

⚠️ 重要：`--color-accent-soft` 的 RGB 值（0, 212, 163）也要對應改成新顏色的 RGB。可用 [RGB 轉換器](https://www.rapidtables.com/convert/color/hex-to-rgb.html)。

### 修改字體

```css
:root {
  --font-display: 'Playfair Display', 'Noto Serif TC', serif;   /* 標題字體 */
  --font-body: 'Inter', 'Noto Sans TC', sans-serif;             /* 內文字體 */
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;      /* 等寬字體 */
}
```

如果換字體，要：
1. 改這裡的字體名稱
2. 修改所有 HTML 檔案 `<head>` 中的 Google Fonts 引入連結

---

## 11. 替換圖片

### 替換首頁英雄區背景圖

打開 `css/pages.css`，搜尋 `.hero-bg`：

```css
.hero-bg {
  background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80');
}
```

改成您自己的圖片路徑（例如 `url('images/my-hero.jpg')`）。

### 替換關於我頁的個人照

打開 `about.html`，搜尋：

```html
<img class="story-image" src="https://picsum.photos/seed/about-portrait/800/1000" ...>
```

改 `src` 路徑。

### 替換作品圖片

依照「**5. 新增 / 刪除 / 修改作品**」的方式，修改 `js/work-detail.js` 中的 `featureImage` 與 `gallery` 路徑，以及列表頁卡片的 `background-image: url(...)`。

⚠️ **目前所有圖片都用 picsum.photos 占位圖**，正式上線前請務必替換為您自己的作品圖。

---

## 12. 啟用聯絡表單寄信功能

目前表單為**示意模式**（送出後只顯示成功訊息，不實際寄信）。要啟用真實寄信：

### 步驟 1：註冊 Formspree

1. 到 https://formspree.io 註冊免費帳號
2. 建立新表單（New Form）
3. 取得您的 endpoint URL，格式為：`https://formspree.io/f/XXXXXXXX`

### 步驟 2：修改 `js/contact.js`

打開 `js/contact.js`，找到第 13 行：

```javascript
this.formspreeEndpoint = null;
```

改成：

```javascript
this.formspreeEndpoint = 'https://formspree.io/f/XXXXXXXX';
```

⚠️ **記得保留引號**，把 XXXXXXXX 換成您 Formspree 給的 ID。

### 步驟 3：測試

打開聯繫頁，填表單送出，應該會收到 Formspree 寄到您 Email 的訊息。

⚠️ 須查證提示：Formspree 免費版每月 50 封，超過需付費。詳細請查看 [Formspree 官方定價頁](https://formspree.io/plans)（資訊可能變動）。

---


# 第三部分：部署上線

## 13. 部署到 GitHub Pages

GitHub Pages 是免費的靜態網站託管服務。

### 步驟 1：註冊 GitHub 帳號

前往 https://github.com 註冊免費帳號。記住您的使用者名稱（會出現在網址中）。

### 步驟 2：安裝 GitHub Desktop

不用打指令的圖形化工具：

1. 下載 https://desktop.github.com/
2. 安裝後用 GitHub 帳號登入

### 步驟 3：建立倉庫（Repository）

1. GitHub 網站點右上角「+」→ **New repository**
2. 倉庫名稱建議：`您的使用者名稱.github.io`（網址會是 `https://您的使用者名稱.github.io`）
3. 選 **Public**（公開）
4. 勾選 **Add a README file**
5. 點 **Create repository**

### 步驟 4：上傳檔案

1. 開啟 GitHub Desktop → **File** → **Clone Repository** → 選您剛建立的倉庫 → 選一個本機資料夾
2. 把您 `portfolio` 資料夾**內所有檔案**複製到該資料夾
3. 回到 GitHub Desktop → 左下方填寫 commit 訊息（如「初次上傳」）
4. 點 **Commit to main**
5. 點上方 **Push origin** 上傳

### 步驟 5：啟用 GitHub Pages

1. 到您的 GitHub 倉庫頁面 → **Settings** → 左側選單 **Pages**
2. **Source** 選 **Deploy from a branch**
3. **Branch** 選 **main**、資料夾選 **/ (root)** → **Save**
4. 等 1-2 分鐘，頁面會顯示「Your site is live at https://您的使用者名稱.github.io」

⚠️ 須查證提示：以上步驟基於 [GitHub Pages 官方文件](https://docs.github.com/en/pages/getting-started-with-github-pages)。

---

## 14. 部署到 Netlify（更簡單）

如果您完全不想學 Git，**Netlify 是最簡單的方案**：

### 步驟

1. 到 https://www.netlify.com 註冊免費帳號
2. 點 **Add new site** → **Deploy manually**
3. **把您的 `portfolio` 資料夾直接拖曳到網頁**
4. 等待約 30 秒部署完成
5. Netlify 會給您一個免費網址（如 `https://designer-portfolio-12345.netlify.app`）

### 自訂網域（選用）

如果您買了自己的網域（如 `mydesigner.com`）：

1. Netlify 後台 → **Domain settings** → **Add custom domain**
2. 依照指示在您的網域註冊商設定 DNS

⚠️ 須查證提示：以上資訊基於 [Netlify 官方文件](https://docs.netlify.com/)，可能隨時更新。

### Netlify 進階：自動部署

若您有用 GitHub：

1. Netlify 後台 → **Sites** → **Import from Git**
2. 連接您的 GitHub 倉庫
3. 之後每次您 push 到 GitHub，Netlify 會**自動更新網站**

---

# 第四部分：給 AI 助理的資料模板

## 15. 如何提供資料給 AI

如果您不想自己改程式碼，可以把資料整理好交給 AI 助理（如 Claude）幫您處理。

### 提供方式總覽

#### 方式 A：純文字描述（適合小修改）

在對話中直接說明需求：

> 「幫我新增一個設計作品：
> - 名稱：ABC 公司品牌設計
> - 分類：品牌設計
> - 年份：2025
> - 客戶：ABC 公司
> - 我會把圖放在 images/abc-cover.jpg 等位置」

#### 方式 B：填寫模板（推薦，適合大量資料）

複製下方第 16 章的模板，填好後貼回對話框，或上傳成檔案。

#### 方式 C：上傳圖片（讓 AI 看內容）

可以把作品圖片上傳給 AI 看內容（用來寫描述、判斷主色等），但 **AI 無法把圖片實際存到您的網站資料夾**。

---

### ⚠️ 圖片提供的重要原則

**AI 能做的**：
- 在程式碼中寫圖片路徑（如 `images/abc-1.jpg`）
- 看到您上傳的圖片內容並描述

**AI 無法做的**：
- 把您的圖片實際存到您的網站 `images/` 資料夾（檔案系統權限）

**正確的圖片提供流程**：

1. 您**先在電腦上整理好圖片**，命名清楚（如 `abc-cover.jpg`、`abc-1.jpg`）
2. 告訴 AI：「圖片我會自己放在 `images/abc-cover.jpg` 等路徑」
3. AI 在程式碼中寫好對應路徑
4. 您拿到修改後的檔案後，**手動把圖片複製到 `images/` 資料夾**

---

## 16. 資料填寫模板

### 16.1 新增設計作品模板

複製以下模板，填好後給 AI：

```
============================================
【新增設計作品】
============================================

# 基本資料
作品 id（英文短代號，如 abc-branding）：
分類（選一）：品牌設計 / 活動設計 / UI/UX
年份：

# 標題與簡介
標題（中文）：
標題（英文）：
簡介一句話（中文）：
簡介一句話（英文）：

# 專案資訊
客戶名稱（中文）：
客戶名稱（英文）：
我的角色（中文）：
我的角色（英文）：
使用工具：（如 Illustrator, Photoshop）

# 專案敘述
大標題（中文，可用 <em>強調文字</em>）：
大標題（英文）：

第一段內容（中文）：
第一段內容（英文）：

第二段內容（中文）：
第二段內容（英文）：

第三段內容（中文）：
第三段內容（英文）：

# 圖片清單
封面圖檔名：（如 abc-cover.jpg，給列表頁用）
主視覺圖檔名：（如 abc-feature.jpg）

內頁圖 1 檔名：
內頁圖 1 標題（中文）：
內頁圖 1 標題（英文）：

內頁圖 2 檔名：
內頁圖 2 標題（中文）：
內頁圖 2 標題（英文）：

內頁圖 3 檔名：
內頁圖 3 標題（中文）：
內頁圖 3 標題（英文）：
（可繼續加更多圖）

# 下個作品
下個作品 id：（指定觀者看完後跳轉到哪個作品，例如 eggpop-nft）
```

### 16.2 新增攝影作品模板

```
============================================
【新增攝影作品】
============================================

# 基本資料
作品 id：
分類（選一）：活動攝影 / 人像攝影 / 商品攝影 / 影片
年份：

# 標題與簡介
標題（中文）：
標題（英文）：
簡介一句話（中文）：
簡介一句話（英文）：

# 專案資訊
客戶名稱（中文）：
客戶名稱（英文）：
我的角色（中文）：（如 攝影師、剪輯）
我的角色（英文）：
使用器材：（如 Sony α7 IV、DaVinci Resolve）

# 專案敘述
大標題（中文）：
大標題（英文）：

第一段（中文）：
第一段（英文）：

第二段（中文）：
第二段（英文）：

第三段（中文）：
第三段（英文）：

# 圖片清單
封面圖檔名：
主視覺圖檔名：

照片 1 檔名：
照片 1 標題（中/英）：

照片 2 檔名：
照片 2 標題（中/英）：

照片 3 檔名：
照片 3 標題（中/英）：

# 下個作品
下個作品 id：
```

### 16.3 新增插畫作品模板

```
============================================
【新增插畫作品】
============================================

# 基本資料
作品 id：
分類（選一）：商業委託 / 原創插畫 / 私人委託
年份：

# 標題與簡介
標題（中文）：
標題（英文）：
簡介一句話（中文）：
簡介一句話（英文）：

# 專案資訊
客戶 / 委託人（中文）：
客戶 / 委託人（英文）：
我的角色（中文）：（如 插畫師、角色設計）
我的角色（英文）：
使用工具：（如 Clip Studio Paint、Photoshop）

# 專案敘述
大標題（中文）：
大標題（英文）：

第一段（中文）：
第一段（英文）：

第二段（中文）：
第二段（英文）：

第三段（中文）：
第三段（英文）：

# 圖片清單
封面圖檔名：
主視覺圖檔名：

插畫 1 檔名：
插畫 1 標題（中/英）：

插畫 2 檔名：
插畫 2 標題（中/英）：

插畫 3 檔名：
插畫 3 標題（中/英）：

# 下個作品
下個作品 id：
```

### 16.4 修改個人資訊模板

```
============================================
【修改個人資訊】
============================================

# 基本資料
設計師姓名（中文）：
設計師姓名（英文）：
標語 / Tagline（中文）：
標語 / Tagline（英文）：

# 聯絡資訊
Email：
電話：
工作地點（中文）：
工作地點（英文）：
工作時間（中文）：
工作時間（英文）：

# 社群連結
Instagram 帳號 + 連結：
Behance 帳號 + 連結：
LinkedIn 帳號 + 連結：

# 個人故事段落（中文）
段落 1：
段落 2：
段落 3：

# 個人故事段落（英文）
Para 1：
Para 2：
Para 3：

# 個人引用名言（中文）：
個人引用名言（英文）：
```

### 16.5 修改工作經歷模板

```
============================================
【修改工作經歷時間軸】
============================================

⚠️ 請依「最近的經歷在最上面」排序

# 經歷 1（最資深）
時間（中/英）：（例：2024 — 現在 / 2024 — Present）
職位（中文）：
職位（英文）：
公司（中/英）：
描述（中文）：
描述（英文）：
技能標籤（最多 3-4 個英文標籤）：

# 經歷 2
（同上格式）

# 經歷 3
（同上格式）

# 經歷 4（學歷或最早經歷）
（同上格式）
```

### 16.6 修改服務項目模板

```
============================================
【修改聯繫頁的服務項目】
============================================

# 服務 1
標題（中文）：
標題（英文）：
描述（中文）：
描述（英文）：

# 服務 2
（同上）

# 服務 3
（同上）

（最多 6 項）
```

### 16.7 完整作品集匯入模板（一次給多個作品）

如果您要一次提供多個作品，可使用這個簡化版：

```
============================================
【一次匯入多個作品】
============================================

⚠️ 通用資訊（請先填寫）
- 圖片我已放在：images/ 資料夾
- 命名規則：作品id-cover.jpg, 作品id-1.jpg, 作品id-2.jpg...

============================================
作品 #1
============================================
類型：[ 設計 / 攝影 / 插畫 ]
id：
分類：
標題（中/英）：
簡介（中/英）：
年份：
客戶（中/英）：
角色（中/英）：
工具：
段落（中文，3 段）：
段落（英文，3 段）：
圖片數量：（如 3 張）

============================================
作品 #2
============================================
（同上格式）

...（依此類推）
```

---


# 第五部分：常見問題

## 17. 常見問題排除

### Q1：改完後網頁打不開 / 顯示空白

**最可能原因**：JavaScript 語法錯誤（如少逗號、引號不對等）

**解決方法**：
1. 在瀏覽器按 `F12` 打開開發者工具
2. 切到 **Console** 分頁
3. 看紅色錯誤訊息（會告訴您哪個檔案、哪一行出錯）
4. 回去檢查那一行附近

**最常見錯誤**：
```javascript
'abc-branding': {
  ...
}                       ← 這裡少了逗號
'next-work': {          ← 下一個物件
```

### Q2：圖片顯示不出來（破圖）

**可能原因**：
- 圖片路徑錯誤
- 圖片檔名大小寫不一致（如程式碼寫 `abc-cover.jpg`，實際檔名是 `ABC-cover.jpg`）
- 圖片沒放進 `images/` 資料夾

**解決方法**：
1. 檢查程式碼中的路徑（如 `images/abc-cover.jpg`）
2. 確認 `images/` 資料夾中**真的有這個檔名的圖片**
3. **檔名大小寫必須完全一致**

### Q3：篩選器計數錯誤（顯示舊數字）

**原因**：忘記更新列表頁的 `count-num`

**解決方法**：在列表頁找到 `<span class="count-num">09</span>`，改成正確數字。

### Q4：點擊作品出現「404 / 作品不存在」

**原因**：
- 列表頁的 `href="work-detail.html?id=xxx"` 中的 id 與 `js/work-detail.js` 中的 id 不一致
- `js/work-detail.js` 中該作品根本不存在

**解決方法**：
1. 檢查列表頁卡片的 `href` 中的 id
2. 確認 `js/work-detail.js` 中有對應的 `'id': { ... }`
3. **id 必須完全一致**（含大小寫、短橫線）

### Q5：中英文切換時某些文字沒翻譯

**原因**：在 HTML 中使用 `data-i18n="某個key"`，但 `js/common.js` 中沒有定義這個 key

**解決方法**：
1. 找到 `data-i18n` 對應的 key
2. 在 `js/common.js` 的 `'zh-TW'` 與 `'en'` 兩個區塊都加入翻譯

### Q6：自訂游標 / 粒子效果不見

**可能原因**：
- 您正在使用觸控裝置（手機平板）→ **這是正常的，刻意關閉**
- HTML 中漏掉 `<div class="cursor-dot"></div>` 和 `<div class="cursor-ring"></div>`
- 漏掉引入 `js/particles.js` 或 `js/common.js`

### Q7：滾動很卡 / 動畫不順暢

**可能原因**：
- 圖片檔案太大（建議單張壓縮到 500KB 以下）
- 同時開太多分頁
- 電腦效能較舊

**解決方法**：
1. 用 [TinyPNG](https://tinypng.com/) 壓縮所有圖片
2. 圖片寬度建議不超過 1920px
3. 改用 `.webp` 格式可進一步減少 30-50% 檔案大小

### Q8：手機版顯示異常

**原因**：CSS 響應式有錯誤

**解決方法**：在電腦瀏覽器按 `F12` → 點手機圖示（裝置模擬器）→ 選不同手機尺寸測試。如果發現問題，告知 AI 助理具體在哪個尺寸出錯。

### Q9：Lenis 平滑滾動失效（捲動變回原生）

**可能原因**：
- HTML 中漏掉 Lenis CDN 引入：`<script src="https://unpkg.com/lenis@1.3.21/dist/lenis.min.js"></script>`
- 您離線測試（沒有網路）

**解決方法**：確保網路正常、HTML 中的 Lenis 引入正確。如果想離線使用，需下載 lenis.min.js 改為本地路徑。

### Q10：Formspree 表單寄不出去

**可能原因**：
- `formspreeEndpoint` 沒填或填錯
- 超過免費額度（每月 50 封）

**解決方法**：
1. 檢查 `js/contact.js` 中的 `formspreeEndpoint` 是否為您的真實 URL（含引號）
2. 登入 Formspree 後台檢查使用量

---

## 📞 還是有問題？

如果以上方法都無法解決，請：

1. **先備份目前版本**
2. **截圖錯誤畫面**（含 F12 Console 訊息）
3. **詳細描述操作步驟**：
   - 您改了什麼
   - 預期看到什麼
   - 實際看到什麼

提供這些資訊給 AI 助理或工程師，能更快獲得解決方案。

---

## 📝 附錄：開發資訊

| 項目 | 內容 |
|------|------|
| 主要技術 | HTML5, CSS3, JavaScript (ES6+) |
| 字體 | Playfair Display, Inter, Noto Serif/Sans TC, JetBrains Mono |
| 平滑滾動函式庫 | Lenis v1.3.21（CDN 引入） |
| 圖示參考來源 | Simple Icons（建議使用） |
| 圖片占位符服務 | Picsum Photos, Unsplash（開發用，正式上線需替換） |
| 表單服務 | Formspree（可選） |
| 部署平台建議 | GitHub Pages 或 Netlify |
| 瀏覽器相容性 | 現代瀏覽器（Chrome、Safari、Firefox、Edge 最新版） |

---

**文件版本**：1.0
**最後更新**：2026-05
**維護者**：您（網站擁有者）

---

> 💡 提示：建議將此文件存成 PDF 或列印一份放在身邊，未來修改網站時隨時可參考。
