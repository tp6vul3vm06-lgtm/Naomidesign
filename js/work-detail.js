/* ============================================
   作品詳情頁：資料庫 + 動態渲染
   ============================================ */

/* === 作品資料庫 ===
 * 每個作品的完整資訊集中在這裡，方便您未來新增、修改、刪除。
 * 新增作品：複製一個物件、修改 id 與內容
 */
const WORKS_DATA = {
  'eggpop-nft': {
    id: 'eggpop-nft',
    category: 'uiux',
    categoryLabel: { 'zh-TW': 'UI / UX', 'en': 'UI / UX' },
    title: { 'zh-TW': 'EGGPOP NFT', 'en': 'EGGPOP NFT' },
    tagline: {
      'zh-TW': 'NFT 設計與插畫整合的完整視覺系統，建立品牌識別與互動體驗',
      'en': 'Integrated NFT design and illustration, building a complete visual system and brand identity.'
    },
    featureImage: 'https://picsum.photos/seed/portfolio1/1600/900',
    info: {
      client: { 'zh-TW': 'EGGPOP', 'en': 'EGGPOP' },
      year: '2024',
      role: { 'zh-TW': 'UI/UX 設計、插畫', 'en': 'UI/UX Design, Illustration' },
      tools: 'Figma, Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '為新興 NFT 平台打造令人<em>難忘的視覺語言</em>',
        'en': 'Crafting a <em>memorable visual language</em> for an emerging NFT platform'
      },
      paragraphs: {
        'zh-TW': [
          '本專案為 EGGPOP 建立完整的品牌視覺系統，從 LOGO、色彩、字型到 NFT 角色插畫，皆需呈現品牌的活潑與獨特性',
          '設計過程中我們深入研究目標客群的審美偏好，並透過多次迭代測試，最終確立以鮮明對比色與手繪質感結合的視覺風格',
          '專案成果包含 12 個 NFT 角色設計、完整的 UIUX 流程、以及數位行銷素材，協助客戶在競爭激烈的 NFT 市場中建立辨識度'
        ],
        'en': [
          'This project established a comprehensive brand visual system for EGGPOP, covering LOGO, colors, typography, and NFT character illustrations to showcase the brand\'s vibrant and unique personality.',
          'Through extensive research on target audience preferences and multiple iteration cycles, we finalized a visual style combining bold contrasting colors with hand-drawn textures.',
          'Deliverables include 12 NFT character designs, complete UIUX workflow, and digital marketing materials, helping the client establish recognition in the competitive NFT market.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/work1-1/1600/900', size: 'wide', caption: { 'zh-TW': '主視覺設計', 'en': 'Key Visual Design' } },
      { src: 'https://picsum.photos/seed/work1-2/1600/900', size: 'wide', caption: { 'zh-TW': '品牌色彩系統', 'en': 'Brand Color System' } },
      { src: 'https://picsum.photos/seed/work1-3/1200/1200', size: 'square', caption: { 'zh-TW': 'NFT 角色設計', 'en': 'NFT Character Design' } },
      { src: 'https://picsum.photos/seed/work1-4/1600/900', size: 'wide', caption: { 'zh-TW': 'UI 介面展示', 'en': 'UI Interface Showcase' } },
      { src: 'https://picsum.photos/seed/work1-5/1600/900', size: 'narrow', caption: { 'zh-TW': '行銷素材', 'en': 'Marketing Materials' } }
    ],
    next: 'tamsui-pumpkin'
  },

  'tamsui-pumpkin': {
    id: 'tamsui-pumpkin',
    category: 'event',
    categoryLabel: { 'zh-TW': '活動設計', 'en': 'Event Design' },
    title: { 'zh-TW': '108 年淡水南瓜節', 'en': 'Tamsui Pumpkin Festival 2019' },
    tagline: {
      'zh-TW': '結合在地文化的節慶造景，從主視覺到實體製作，打造令人難忘的活動體驗',
      'en': 'Festival scene design integrated with local culture, from key visual to physical production.'
    },
    featureImage: 'https://picsum.photos/seed/portfolio2/1600/900',
    info: {
      client: { 'zh-TW': '淡水區公所', 'en': 'Tamsui District Office' },
      year: '2019',
      role: { 'zh-TW': '主視覺設計、造景製作', 'en': 'Key Visual, Scene Production' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '將節慶氛圍轉化為<em>實體視覺體驗</em>',
        'en': 'Transforming festive atmosphere into <em>physical visual experience</em>'
      },
      paragraphs: {
        'zh-TW': [
          '這是為淡水區公所設計的 108 年南瓜節活動視覺，從主視覺概念到造景實作均由團隊負責',
          '設計概念以「秋日豐收」為主軸，結合淡水的海洋意象與南瓜元素，創造出獨特的視覺氛圍',
          '活動期間吸引超過 5 萬人次參與，造景也成為民眾打卡熱點，為地方創造亮點'
        ],
        'en': [
          'Visual design for the 2019 Pumpkin Festival commissioned by Tamsui District Office, covering everything from key visual concept to physical scene production.',
          'The design concept centered on "Autumn Harvest", combining Tamsui\'s coastal imagery with pumpkin elements to create a unique visual atmosphere.',
          'The event attracted over 50,000 visitors and the scenes became popular photo spots, creating local highlights.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/work2-1/1600/900', size: 'wide', caption: { 'zh-TW': '活動主視覺', 'en': 'Event Key Visual' } },
      { src: 'https://picsum.photos/seed/work2-2/1600/900', size: 'wide', caption: { 'zh-TW': '造景設計', 'en': 'Scene Design' } },
      { src: 'https://picsum.photos/seed/work2-3/1600/900', size: 'wide', caption: { 'zh-TW': '現場照片', 'en': 'On-site Photography' } }
    ],
    next: 'cryptoldyou'
  },

  'cryptoldyou': {
    id: 'cryptoldyou',
    category: 'uiux',
    categoryLabel: { 'zh-TW': 'UI / UX', 'en': 'UI / UX' },
    title: { 'zh-TW': 'Cryptoldyou Website', 'en': 'Cryptoldyou Website' },
    tagline: {
      'zh-TW': '完整的 UIUX 設計與網站建置流程，打造專業的加密貨幣資訊平台',
      'en': 'Complete UIUX design and website development for a professional cryptocurrency information platform.'
    },
    featureImage: 'https://picsum.photos/seed/portfolio3/1600/900',
    info: {
      client: { 'zh-TW': 'Cryptoldyou', 'en': 'Cryptoldyou' },
      year: '2024',
      role: { 'zh-TW': 'UI/UX 設計、網站建置', 'en': 'UI/UX Design, Web Development' },
      tools: 'Figma, HTML/CSS/JS'
    },
    description: {
      heading: {
        'zh-TW': '讓複雜的金融資訊變得<em>清晰易懂</em>',
        'en': 'Making complex financial information <em>clear and accessible</em>'
      },
      paragraphs: {
        'zh-TW': [
          'Cryptoldyou 是一個專為新手投資者設計的加密貨幣資訊平台，目標是降低進入門檻',
          '設計上採用清晰的資訊架構與漸進式揭露策略，避免新手被龐雜資訊淹沒',
          '上線後三個月使用者留存率達 68%，遠高於業界平均'
        ],
        'en': [
          'Cryptoldyou is a cryptocurrency information platform designed for novice investors, aiming to lower the barrier to entry.',
          'The design adopts clear information architecture and progressive disclosure to prevent beginners from being overwhelmed.',
          'Three months after launch, user retention reached 68%, far exceeding industry average.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/work3-1/1600/900', size: 'wide', caption: { 'zh-TW': '首頁設計', 'en': 'Homepage Design' } },
      { src: 'https://picsum.photos/seed/work3-2/1600/900', size: 'wide', caption: { 'zh-TW': '資訊頁面', 'en': 'Information Page' } },
      { src: 'https://picsum.photos/seed/work3-3/1600/900', size: 'narrow', caption: { 'zh-TW': '行動版設計', 'en': 'Mobile Design' } }
    ],
    next: 'eggpop-nft'
  },

  /* ============ 攝影類作品（galleryStyle: 'masonry'）============ */

  'photo-rotary-2324': {
    id: 'photo-rotary-2324',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '板橋群英扶輪社 23-24 授證', 'en': 'Banqiao Rotary 23-24 Charter' },
    tagline: {
      'zh-TW': '紀錄板橋群英扶輪社 23-24 年度授證典禮',
      'en': 'Documentary photography of the Banqiao Rotary Club 23-24 charter ceremony'
    },
    featureImage: 'images/rot-00.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '板橋群英扶輪社', 'en': 'Banqiao Rotary Club' },
      year: '2024',
      role: { 'zh-TW': '攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '紀錄一個社團的<em>傳承時刻</em>',
        'en': 'Documenting a club\'s <em>moment of legacy</em>'
      },
      paragraphs: {
        'zh-TW': [
          '紀錄板橋群英扶輪社 23-24 年度授證典禮'
        ],
        'en': [
          'Documentary photography of the Banqiao Rotary Club 23-24 annual charter ceremony'
        ]
      }
    },
    gallery: [
      { src: 'images/rot-00.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/rot-01.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-02.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-03.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-04.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-05.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-06.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-07.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-08.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-09.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-10.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-11.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-12.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-13.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-14.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-15.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-16.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-17.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-18.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } }
    ],
    next: 'photo-couple'
  },

  'photo-couple': {
    id: 'photo-couple',
    category: 'portrait-photo',
    categoryLabel: { 'zh-TW': '人像攝影', 'en': 'Portrait Photo' },
    title: { 'zh-TW': '情侶攝影', 'en': 'Couple Photography' },
    tagline: {
      'zh-TW': '透過光影氛圍，捕捉情侶間最真實的互動瞬間',
      'en': 'Through light and atmosphere, capturing the most genuine moments between couples'
    },
    featureImage: 'images/couple-feature.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '私人委託', 'en': 'Private Commission' },
      year: '2024',
      role: { 'zh-TW': '攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '以自然互動為主軸，呈現<em>最真實的樣貌</em>',
        'en': 'Natural interaction as the core — <em>authentic moments</em>'
      },
      paragraphs: {
        'zh-TW': [
          '以自然互動為主軸，呈現最真實的樣貌'
        ],
        'en': [
          'Centered on natural interaction, revealing the couple at their most authentic.'
        ]
      }
    },
    gallery: [
      { src: 'images/couple-feature.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/couple-cover.jpg',   caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-01.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-02.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-03.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-04.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-05.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-06.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-07.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-08.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-09.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-10.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-11.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-12.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } }
    ],
    next: 'photo-street'
  },

  'photo-product': {
    id: 'photo-product',
    category: 'product-photo',
    categoryLabel: { 'zh-TW': '商品攝影', 'en': 'Product Photo' },
    title: { 'zh-TW': '商品形象攝影', 'en': 'Product Branding Photography' },
    tagline: {
      'zh-TW': '為品牌商品打造視覺一致的形象照，呈現產品質感與品牌調性',
      'en': 'Crafting visually consistent product imagery that showcases quality and brand tone.'
    },
    featureImage: 'https://picsum.photos/seed/photo3-feature/1600/900',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '永佳捷', 'en': 'YongJiaJie' },
      year: '2024',
      role: { 'zh-TW': '商品攝影師', 'en': 'Product Photographer' },
      tools: 'Sony α7 IV, 棚拍燈組'
    },
    description: {
      heading: {
        'zh-TW': '讓商品<em>說自己的故事</em>',
        'en': 'Letting products <em>tell their own story</em>'
      },
      paragraphs: {
        'zh-TW': [
          '商品攝影講求精準的色彩與光影掌握。本次為永佳捷品牌進行商品形象拍攝',
          '採用棚拍方式，搭配多角度補光與反光板，強調商品材質細節',
          '完整交付 30 張高解析度商品照，可用於電商平台、廣告與社群媒體'
        ],
        'en': [
          'Product photography demands precise control over color and lighting. This shoot was for YongJiaJie brand product imagery.',
          'Studio photography with multi-angle fill lighting and reflectors emphasized product material details.',
          'Delivered 30 high-resolution product photos for e-commerce, advertising, and social media.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/photo3-1/1600/900', caption: { 'zh-TW': '商品主視覺', 'en': 'Product Hero Shot' } },
      { src: 'https://picsum.photos/seed/photo3-2/1600/900', caption: { 'zh-TW': '細節特寫', 'en': 'Detail Closeup' } },
      { src: 'https://picsum.photos/seed/photo3-3/1600/900', caption: { 'zh-TW': '情境照', 'en': 'Lifestyle Shot' } }
    ],
    next: 'video-luncheon'
  },

  'video-luncheon': {
    id: 'video-luncheon',
    category: 'video',
    categoryLabel: { 'zh-TW': '影片', 'en': 'Video' },
    title: { 'zh-TW': '午宴動態攝影', 'en': 'Luncheon Motion Photography' },
    tagline: {
      'zh-TW': '結合動態攝影與快剪，記錄商務午宴的精彩瞬間與氛圍',
      'en': 'Combining motion photography and fast cuts to document the highlights and atmosphere of a business luncheon.'
    },
    featureImage: 'https://picsum.photos/seed/photo4-feature/1600/900',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '私人活動', 'en': 'Private Event' },
      year: '2024',
      role: { 'zh-TW': '攝影、剪輯', 'en': 'Photography, Editing' },
      tools: 'Sony α7 IV, DaVinci Resolve'
    },
    description: {
      heading: {
        'zh-TW': '用畫面<em>述說一場午宴</em>',
        'en': 'Telling the story of a luncheon <em>through visuals</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此次任務以動態攝影為主，捕捉午宴中的人物互動、餐點細節與整體氛圍',
          '後製階段採用快剪手法，搭配節奏明快的配樂，呈現活力感',
          '最終交付 90 秒成片以及 30 張現場精修照片'
        ],
        'en': [
          'This project focused on motion photography, capturing personal interactions, food details, and overall atmosphere.',
          'Post-production used fast-cut techniques with upbeat music to convey energy.',
          'Delivered a 90-second finished video and 30 polished on-site photos.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/photo4-1/1600/900', caption: { 'zh-TW': '午宴開場', 'en': 'Opening' } },
      { src: 'https://picsum.photos/seed/photo4-2/1600/900', caption: { 'zh-TW': '餐點特寫', 'en': 'Food Closeup' } },
      { src: 'https://picsum.photos/seed/photo4-3/1600/900', caption: { 'zh-TW': '賓客互動', 'en': 'Guest Interaction' } }
    ],
    next: 'photo-rotary-2324'
  },

  'photo-street': {
    id: 'photo-street',
    category: 'portrait-photo',
    categoryLabel: { 'zh-TW': '人像攝影', 'en': 'Portrait Photo' },
    title: { 'zh-TW': '街拍攝影', 'en': 'Street Portrait' },
    tagline: {
      'zh-TW': '與 MD.陳婉琳 合作，拍攝於華江整宅',
      'en': 'Collaboration with MD. Wan-Leng Chen, shot at Huajiang Housing Complex'
    },
    featureImage: 'images/street-feature.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '陳婉琳', 'en': 'Wan-Leng Chen' },
      year: '2024',
      role: { 'zh-TW': '平面攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '城市角落裡的<em>光與人</em>',
        'en': '<em>Light and people</em> in the city\'s hidden corners'
      },
      paragraphs: {
        'zh-TW': [
          ''
        ],
        'en': [
          ''
        ]
      }
    },
    gallery: [
      { src: 'images/street-feature.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/street-cover.jpg',   caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-01.jpg',      caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-02.jpg',      caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-03.jpg',      caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-04.jpg',      caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-05.jpg',      caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } }
    ],
    next: 'photo-rotary15'
  },

  'photo-rotary15': {
    id: 'photo-rotary15',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '板橋群英扶輪社第十五週年授證典禮', 'en': 'Banqiao Elite Rotary 15th Charter Ceremony' },
    tagline: {
      'zh-TW': '板橋群英扶輪社第十五週年授證典禮攝影紀錄',
      'en': 'Photography documentation of the Banqiao Elite Rotary Club 15th anniversary charter ceremony'
    },
    featureImage: 'images/rotary15-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '板橋群英扶輪社', 'en': 'Banqiao Elite Rotary Club' },
      year: '2026',
      role: { 'zh-TW': '平面攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV, α6400'
    },
    description: {
      heading: {
        'zh-TW': '紀錄一個社團的<em>傳承時刻</em>',
        'en': 'Documenting a club\'s <em>moment of legacy</em>'
      },
      paragraphs: {
        'zh-TW': [
          '紀錄一個社團的傳承時刻',
          '以復古為主題的十五週年授證典禮攝影紀錄'
        ],
        'en': [
          'Documenting the legacy of a club.',
          'A retro-themed photography record of the 15th anniversary charter ceremony.'
        ]
      }
    },
    gallery: [
      { src: 'images/rotary15-cover.jpg',  caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/rotary15-01.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-02.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-03.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-04.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-05.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-06.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-07.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-08.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-09.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-10.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-11.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-12.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-13.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-14.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-15.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-16.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-17.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-18.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } }
    ],
    next: 'photo-couple'
  },

  /* ============ 插畫類作品（galleryStyle: 'spaced'）============ */

  'illust-meiying': {
    id: 'illust-meiying',
    category: 'commercial-illust',
    categoryLabel: { 'zh-TW': '商業委託', 'en': 'Commercial' },
    title: { 'zh-TW': '《魅影之戀》封面繪製', 'en': '"Phantom Love" Cover Art' },
    tagline: {
      'zh-TW': '為小說《魅影之戀》量身打造的封面插畫，捕捉故事氛圍與角色靈魂',
      'en': 'Custom cover illustration for the novel "Phantom Love", capturing the story atmosphere and characters\' spirit.'
    },
    featureImage: 'https://picsum.photos/seed/illust1-feature/1600/900',
    galleryStyle: 'spaced',
    info: {
      client: { 'zh-TW': '艾雅（作者）', 'en': 'Aiya (Author)' },
      year: '2024',
      role: { 'zh-TW': '封面插畫師', 'en': 'Cover Illustrator' },
      tools: 'Clip Studio Paint, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '用畫筆<em>敘說一個故事</em>',
        'en': 'Telling a story <em>with brushstrokes</em>'
      },
      paragraphs: {
        'zh-TW': [
          '本作品為小說《魅影之戀》的封面插畫委託，需在閱讀小說後抓住故事核心情緒',
          '設計上採用低飽和色調與柔和光影，呈現故事中神秘又略帶哀愁的氛圍',
          '繪製過程經歷 3 次草稿迭代，最終定稿獲得作者高度肯定'
        ],
        'en': [
          'This work is a commissioned cover illustration for the novel "Phantom Love", requiring deep reading of the story to capture its emotional core.',
          'The design uses low-saturation tones and soft lighting to convey the story\'s mysterious and melancholic atmosphere.',
          'After 3 sketch iterations, the final piece received high praise from the author.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/illust1-1/1600/900', caption: { 'zh-TW': '最終封面', 'en': 'Final Cover' } },
      { src: 'https://picsum.photos/seed/illust1-2/1600/900', caption: { 'zh-TW': '草稿過程', 'en': 'Sketch Process' } },
      { src: 'https://picsum.photos/seed/illust1-3/1600/900', caption: { 'zh-TW': '上色細節', 'en': 'Coloring Details' } }
    ],
    next: 'illust-aphur'
  },

  'illust-aphur': {
    id: 'illust-aphur',
    category: 'original-illust',
    categoryLabel: { 'zh-TW': '原創插畫', 'en': 'Original Work' },
    title: { 'zh-TW': '《Aphur》獨立遊戲', 'en': '"Aphur" Indie Game' },
    tagline: {
      'zh-TW': '原創獨立遊戲的角色設計與主視覺，建立完整的世界觀與角色群像',
      'en': 'Original indie game character design and key visuals, building a complete worldview and character ensemble.'
    },
    featureImage: 'https://picsum.photos/seed/illust2-feature/1600/900',
    galleryStyle: 'spaced',
    info: {
      client: { 'zh-TW': '個人創作', 'en': 'Personal Project' },
      year: '2023',
      role: { 'zh-TW': '美術總監、角色設計', 'en': 'Art Director, Character Design' },
      tools: 'Clip Studio Paint, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '從零打造<em>一個世界</em>',
        'en': 'Building <em>a world</em> from scratch'
      },
      paragraphs: {
        'zh-TW': [
          '《Aphur》是一個原創的奇幻世界觀獨立遊戲企劃，由我擔任美術總監',
          '從世界觀設定、角色設計到主視覺繪製，逐步建立完整的視覺識別系統',
          '目前已完成 8 位主要角色的設計稿與遊戲主視覺'
        ],
        'en': [
          '"Aphur" is an original fantasy worldview indie game project, where I serve as Art Director.',
          'From worldview setting, character design, to key visual creation, I gradually built a complete visual identity system.',
          'Currently completed designs for 8 main characters and the game key visual.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/illust2-1/1600/900', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'https://picsum.photos/seed/illust2-2/1600/900', caption: { 'zh-TW': '主角設計', 'en': 'Main Character Design' } },
      { src: 'https://picsum.photos/seed/illust2-3/1600/900', caption: { 'zh-TW': '配角設計', 'en': 'Supporting Characters' } },
      { src: 'https://picsum.photos/seed/illust2-4/1600/900', caption: { 'zh-TW': '世界觀概念', 'en': 'Worldview Concept' } }
    ],
    next: 'illust-private'
  },

  'illust-private': {
    id: 'illust-private',
    category: 'private-illust',
    categoryLabel: { 'zh-TW': '私人委託', 'en': 'Private Commission' },
    title: { 'zh-TW': '私人委託作品集', 'en': 'Private Commission Collection' },
    tagline: {
      'zh-TW': '來自世界各地客戶的私人委託作品，包含角色客製、場景插畫等多元類型',
      'en': 'Private commissions from clients worldwide, including character customization, scene illustrations, and more.'
    },
    featureImage: 'https://picsum.photos/seed/illust3-feature/1600/900',
    galleryStyle: 'spaced',
    info: {
      client: { 'zh-TW': '個人客戶（多位）', 'en': 'Multiple Private Clients' },
      year: '2023 — 2024',
      role: { 'zh-TW': '插畫師', 'en': 'Illustrator' },
      tools: 'Clip Studio Paint'
    },
    description: {
      heading: {
        'zh-TW': '為每位客戶<em>創作專屬作品</em>',
        'en': 'Creating <em>exclusive works</em> for each client'
      },
      paragraphs: {
        'zh-TW': [
          '私人委託是與客戶最直接的創作互動，需要充分理解客戶的喜好與想像',
          '近兩年累積超過 30 件私人委託作品，題材橫跨原創角色、二次創作、紀念禮物等',
          '每件作品都是獨一無二的合作成果'
        ],
        'en': [
          'Private commissions are the most direct creative interaction with clients, requiring full understanding of their preferences and imagination.',
          'Over the past two years, accumulated more than 30 private commissions covering original characters, fan art, memorial gifts, and more.',
          'Each work is a unique result of collaboration.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/illust3-1/1600/900', caption: { 'zh-TW': '原創角色委託', 'en': 'Original Character' } },
      { src: 'https://picsum.photos/seed/illust3-2/1600/900', caption: { 'zh-TW': '紀念肖像', 'en': 'Memorial Portrait' } },
      { src: 'https://picsum.photos/seed/illust3-3/1600/900', caption: { 'zh-TW': '二次創作', 'en': 'Fan Art' } }
    ],
    next: 'illust-meiying'
  },

  /* ============ 範例：新增的作品 ============
   * 此作品為示範新增流程的範例，您可以參照這個格式加入自己的作品。
   * id 必須是英文小寫 + 短橫線（如 'yexun-logo'），不可重複。
   */
  'yexun-logo': {
    id: 'yexun-logo',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '野訊國際 LOGO', 'en': 'Yexun International LOGO' },
    tagline: {
      'zh-TW': '為野訊國際打造識別性強烈的品牌 LOGO，並延伸至插畫與漫畫合作專案',
      'en': 'Designing a distinctive brand LOGO for Yexun International, with extensions into illustration and comic collaborations.'
    },
    featureImage: 'https://picsum.photos/seed/yexun-feature/1600/900',
    // 設計類作品：不寫 galleryStyle（預設滿版無間距）
    info: {
      client: { 'zh-TW': '野訊國際', 'en': 'Yexun International' },
      year: '2024',
      role: { 'zh-TW': '品牌設計、插畫合作', 'en': 'Brand Design, Illustration' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '從 LOGO 到漫畫的<em>完整品牌敘事</em>',
        'en': 'A <em>complete brand narrative</em> from LOGO to comics'
      },
      paragraphs: {
        'zh-TW': [
          '野訊國際是一家專注於戶外體驗的新創品牌，期望透過視覺設計傳達「探索」與「自由」的精神',
          '在 LOGO 設計上，我採用山形與字母 Y 的結合，象徵戶外冒險的品牌定位',
          '專案延伸至漫畫合作，為品牌建立完整的敘事體系與內容行銷素材'
        ],
        'en': [
          'Yexun International is a startup brand focused on outdoor experiences, aiming to convey the spirit of "exploration" and "freedom" through visual design.',
          'For the LOGO, I combined a mountain shape with the letter Y, symbolizing the brand\'s outdoor adventure positioning.',
          'The project extends to comic collaborations, building a complete narrative system and content marketing materials for the brand.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/yexun-1/1600/900', caption: { 'zh-TW': 'LOGO 主視覺', 'en': 'LOGO Hero' } },
      { src: 'https://picsum.photos/seed/yexun-2/1600/900', caption: { 'zh-TW': '應用素材', 'en': 'Applications' } },
      { src: 'https://picsum.photos/seed/yexun-3/1600/900', caption: { 'zh-TW': '漫畫合作', 'en': 'Comic Collaboration' } }
    ],
    next: 'eggpop-nft'  // 點擊「下一個作品」會跳到 EGGPOP NFT
  },
'ux-app-redesign': {
    id: 'ux-app-redesign',
    category: 'uiux',
    categoryLabel: { 'zh-TW': 'UI / UX', 'en': 'UI / UX' },
    title: { 'zh-TW': 'UX_APP ReDesign', 'en': 'UX_APP ReDesign' },
    tagline: {
      'zh-TW': 'App 介面重新設計與體驗優化',
      'en': 'App interface redesign and UX optimization.'
    },
    featureImage: 'https://picsum.photos/seed/ux-app-redesign-feature/1600/900',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': '某 App 客戶', 'en': 'Confidential Client' },
      year: '2024',
      role: { 'zh-TW': 'UX 設計師', 'en': 'UX Designer' },
      tools: 'Figma, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/ux-app-redesign-1/1600/900', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'https://picsum.photos/seed/ux-app-redesign-2/1600/900', caption: { 'zh-TW': '延伸應用', 'en': 'Applications' } },
      { src: 'https://picsum.photos/seed/ux-app-redesign-3/1600/900', caption: { 'zh-TW': '細節展示', 'en': 'Details' } }
    ],
    next: 'ux-backend'
  },

  'ux-backend': {
    id: 'ux-backend',
    category: 'uiux',
    categoryLabel: { 'zh-TW': 'UI / UX', 'en': 'UI / UX' },
    title: { 'zh-TW': 'UX_專案前後台', 'en': 'UX_Project Frontend & Backend' },
    tagline: {
      'zh-TW': '完整專案前後台介面規劃與設計',
      'en': 'Complete frontend and backend interface planning and design.'
    },
    featureImage: 'https://picsum.photos/seed/ux-backend-feature/1600/900',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': '某企業客戶', 'en': 'Enterprise Client' },
      year: '2024',
      role: { 'zh-TW': 'UI/UX 設計師', 'en': 'UI/UX Designer' },
      tools: 'Figma, Sketch'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/ux-backend-1/1600/900', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'https://picsum.photos/seed/ux-backend-2/1600/900', caption: { 'zh-TW': '延伸應用', 'en': 'Applications' } },
      { src: 'https://picsum.photos/seed/ux-backend-3/1600/900', caption: { 'zh-TW': '細節展示', 'en': 'Details' } }
    ],
    next: 'cryptoldyou'
  },

  'eggpop': {
    id: 'eggpop',
    category: 'uiux',
    categoryLabel: { 'zh-TW': 'UI / UX', 'en': 'UI / UX' },
    title: { 'zh-TW': 'UIUX_EggPop', 'en': 'UIUX_EggPop' },
    tagline: {
      'zh-TW': 'Website 與 Search Web UIUX 設計建置',
      'en': 'Website and Search Web UIUX design and development.'
    },
    featureImage: 'https://picsum.photos/seed/eggpop-feature/1600/900',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': 'EggPop', 'en': 'EggPop' },
      year: '2024',
      role: { 'zh-TW': 'UIUX 設計、網站建置', 'en': 'UIUX Design, Web Development' },
      tools: 'Figma, HTML/CSS/JS'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/eggpop-1/1600/900', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'https://picsum.photos/seed/eggpop-2/1600/900', caption: { 'zh-TW': '延伸應用', 'en': 'Applications' } },
      { src: 'https://picsum.photos/seed/eggpop-3/1600/900', caption: { 'zh-TW': '細節展示', 'en': 'Details' } }
    ],
    next: 'eggpop-nft'
  },

  'yinqing': {
    id: 'yinqing',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '吟清酌', 'en': 'Yin Qing Zhuo' },
    tagline: {
      'zh-TW': '日本清酒品牌 VI 品牌設計',
      'en': 'Japanese Sake Brand VI Identity Design'
    },
    featureImage: 'images/yq-01.jpg',
    info: {
      client: { 'zh-TW': '吟清酌', 'en': 'Yin Qing Zhuo' },
      year: '2023',
      role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '吟是浪漫，清是純粹，酌是<em>分享</em>',
        'en': 'Gin is romance, Sei is purity, Shaku is <em>sharing</em>'
      },
      paragraphs: {
        'zh-TW': [
          '吟清酌相信每一杯酒都承載著故事與溫度。從清雅的日本清酒到溫潤的梅酒與果實酒，每一滴都蘊含了日本匠人的心意與文化。品牌希望帶給消費者不只是酒的滋味，而是細膩的相聚時光，讓舌尖的品味化作心裡的記憶'
        ],
        'en': [
          'Yin Qing Zhuo believes every glass of sake carries a story and warmth. From delicate nihonshu to rich umeshu and fruit wines, every drop embodies the spirit and culture of Japanese artisans. The brand aspires to offer not just flavor, but refined moments of connection — turning taste into lasting memories.'
        ]
      }
    },
    gallery: [
      { src: 'images/yq-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/yq-02.jpg', caption: { 'zh-TW': '品牌概念', 'en': 'Brand Concept' } },
      { src: 'images/yq-03.jpg', caption: { 'zh-TW': 'LOGO 字型系統', 'en': 'LOGO & Typography' } },
      { src: 'images/yq-05.jpg', caption: { 'zh-TW': '品牌色彩系統', 'en': 'Brand Color System' } },
      { src: 'images/yq-06.jpg', caption: { 'zh-TW': '品牌情境', 'en': 'Brand Mood' } },
      { src: 'images/yq-07.jpg', caption: { 'zh-TW': '輔助圖形', 'en': 'Supporting Graphic' } },
      { src: 'images/yq-08.jpg', caption: { 'zh-TW': '信頭紙 & 名片', 'en': 'Letterhead & Business Card' } },
      { src: 'images/yq-09.jpg', caption: { 'zh-TW': '提袋設計', 'en': 'Shopping Bag' } },
      { src: 'images/yq-10.jpg', caption: { 'zh-TW': '吊牌設計', 'en': 'Hang Tag' } },
      { src: 'images/yq-11.jpg', caption: { 'zh-TW': '活動頁面應用', 'en': 'Event Page' } },
      { src: 'images/yq-12.jpg', caption: { 'zh-TW': '社群媒體素材', 'en': 'Social Media Assets' } },
      { src: 'images/yq-13.jpg', caption: { 'zh-TW': 'X-Banner 設計', 'en': 'X-Banner' } }
    ],
    next: 'kenja'
  },


  'tpp-app-redesign': {
    id: 'tpp-app-redesign',
    category: 'uiux',
    categoryLabel: { 'zh-TW': 'UI / UX', 'en': 'UI / UX' },
    title: { 'zh-TW': '民眾黨 APP Redesign', 'en': 'TPP APP Redesign' },
    tagline: {
      'zh-TW': '民眾黨黨員應用程式重新設計',
      'en': "Taiwan People's Party Member App Redesign"
    },
    featureImage: 'images/tpp-01.jpg',
    figmaPrototype: 'https://embed.figma.com/proto/EgTseeAoPXfryAl8LV485r/%E6%B0%91%E7%9C%BE%E9%BB%A8app?node-id=4853-1073&starting-point-node-id=4850%3A1070&embed-host=share',
    info: {
      client: { 'zh-TW': '台灣民眾黨（自主重製）', 'en': "Taiwan People's Party (Self-initiated Redesign)" },
      year: '2022',
      role: { 'zh-TW': 'UI / UX 設計師', 'en': 'UI / UX Designer' },
      tools: 'Figma'
    },
    description: {
      heading: {
        'zh-TW': '不只是美化介面，而是一次<em>策略性重塑</em>',
        'en': 'Not just a facelift — a <em>strategic rebuild</em>'
      },
      paragraphs: {
        'zh-TW': [
          '舊版 App 面臨下載量與黨員基數嚴重脫節、介面設計不良、體驗不佳等問題，根源在於破碎的資訊架構、過時的視覺設計，以及缺乏核心使用者價值。這次重製的目的不僅是美化介面，而是一次由內而外的策略性重塑'
        ],
        'en': [
          'The original App suffered from poor downloads relative to its large member base, plagued by fragmented information architecture, outdated visual design, and lack of core user value. This redesign goes beyond aesthetics — it is a strategic rebuild from the inside out.'
        ]
      }
    },
    gallery: [
      { src: 'images/tpp-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/tpp-02.jpg', caption: { 'zh-TW': '設計背景', 'en': 'Design Background' } },
      { src: 'images/tpp-03.jpg', caption: { 'zh-TW': '使用者研究', 'en': 'User Research' } },
      { src: 'images/tpp-04.jpg', caption: { 'zh-TW': '資訊架構', 'en': 'Information Architecture' } },
      { src: 'images/tpp-05.jpg', caption: { 'zh-TW': '視覺設計', 'en': 'Visual Design' } },
      { src: 'images/tpp-06.jpg', caption: { 'zh-TW': '介面展示', 'en': 'UI Showcase' } },
      { src: 'images/tpp-07.jpg', caption: { 'zh-TW': '介面展示 2', 'en': 'UI Showcase 2' } },
      { src: 'images/tpp-08.jpg', caption: { 'zh-TW': '介面展示 3', 'en': 'UI Showcase 3' } },
      { src: 'images/tpp-09.jpg', caption: { 'zh-TW': '介面展示 4', 'en': 'UI Showcase 4' } },
      { src: 'images/tpp-10.jpg', caption: { 'zh-TW': '介面展示 5', 'en': 'UI Showcase 5' } },
      { src: 'images/tpp-11.jpg', caption: { 'zh-TW': '成果總覽', 'en': 'Final Overview' } }
    ],
    next: 'yinqing'
  },
  'kenja': {
    id: 'kenja',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '先智 KenJa', 'en': 'KenJa' },
    tagline: {
      'zh-TW': 'WEB3 區塊鏈礦機品牌設計',
      'en': 'WEB3 Blockchain Mining Brand Design'
    },
    featureImage: 'images/kj-01.jpg',
    info: {
      client: { 'zh-TW': '先智 KenJa', 'en': 'KenJa' },
      year: '2023',
      role: { 'zh-TW': '品牌設計師 / UIUX', 'en': 'Brand Designer / UIUX' },
      tools: 'Illustrator, Photoshop, Figma'
    },
    description: {
      heading: {
        'zh-TW': '以礦機外型結合 KJ，打造<em>科技識別</em>',
        'en': 'Mining hardware meets KJ — a bold <em>tech identity</em>'
      },
      paragraphs: {
        'zh-TW': [
          '以礦機外型結合 KJ 字母，打造科技感兼具識別性的品牌標誌，配色融合科技藍與挖礦綠，整合品牌識別至名片、Banner、官網與社群的完整視覺系統'
        ],
        'en': [
          'Combining mining hardware forms with the KJ lettermark, the brand identity balances technological edge with strong recognizability. Tech blue and mining green anchor the color system, extending across name cards, event banners, the cloud mining website, and social media posts.'
        ]
      }
    },
    gallery: [
      { src: 'images/kj-01.jpg', caption: { 'zh-TW': '主視覺 / LOGO 色彩系統', 'en': 'Key Visual / LOGO Color System' } },
      { src: 'images/kj-02.jpg', caption: { 'zh-TW': '名片設計', 'en': 'Business Card Design' } },
      { src: 'images/kj-03.jpg', caption: { 'zh-TW': 'KASPA 廣告貼文設計', 'en': 'KASPA Ad Post Design' } },
      { src: 'images/kj-04.jpg', caption: { 'zh-TW': 'KASPA Accupass 活動頁', 'en': 'KASPA Accupass Event Page' } },
      { src: 'images/kj-05.jpg', caption: { 'zh-TW': '雲礦機 X-Banner', 'en': 'Cloud Mining X-Banner' } },
      { src: 'images/kj-06.jpg', caption: { 'zh-TW': '先智雲礦機官網 UIUX', 'en': 'Cloud Mining Website UIUX' } },
      { src: 'images/kj-07.jpg', caption: { 'zh-TW': 'IG & FB 版面設計', 'en': 'IG & FB Post Layout' } },
      { src: 'images/kj-08.jpg', caption: { 'zh-TW': '宣傳手冊', 'en': 'Promotional Brochure' } }
    ],
    next: 'childscout'
  },

  'childscout': {
    id: 'childscout',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '童心．同心', 'en': 'Heart & Unity' },
    tagline: {
      'zh-TW': '中華民國童軍第 12 次全國大露營品牌識別設計',
      'en': 'Brand identity for the 12th National Scout Jamboree of R.O.C.'
    },
    featureImage: 'images/cs-01.jpg',
    info: {
      client: { 'zh-TW': '—', 'en': '—' },
      year: '2024',
      role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '童心、同心，猶如同心結般<em>團結一心</em>',
        'en': 'United hearts, like a knot of unity — <em>one spirit</em>'
      },
      paragraphs: {
        'zh-TW': [
          '童心、同心，猶如同心結般團結一心。大家環環相扣，形成無邊際的圓，邁向永續，環抱國際'
        ],
        'en': [
          'Hearts of youth, united as one — like a knot of solidarity. Everyone interlinked, forming a boundless circle, striding toward sustainability and embracing the world.'
        ]
      }
    },
    gallery: [
      { src: 'images/cs-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/cs-02.jpg', caption: { 'zh-TW': '品牌概念', 'en': 'Brand Concept' } },
      { src: 'images/cs-03.jpg', caption: { 'zh-TW': 'LOGO 系統', 'en': 'LOGO System' } },
      { src: 'images/cs-04.jpg', caption: { 'zh-TW': '色彩系統', 'en': 'Color Palette' } },
      { src: 'images/cs-05.jpg', caption: { 'zh-TW': '字型與輔助圖形', 'en': 'Typography & Supporting Graphic' } },
      { src: 'images/cs-06.jpg', caption: { 'zh-TW': '榮譽胸章', 'en': 'Honor Badge' } },
      { src: 'images/cs-07.jpg', caption: { 'zh-TW': '應用素材', 'en': 'Applications' } },
      { src: 'images/cs-08.jpg', caption: { 'zh-TW': '旗幟設計', 'en': 'Flag Design' } }
    ],
    next: 'swap'
  },

  'xinsheng': {
    id: 'xinsheng',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '新生國小60周年校慶', 'en': 'XinSheng 60th Anniversary' },
    tagline: {
      'zh-TW': '校慶主視覺識別設計',
      'en': '60th Anniversary School Celebration CIS Design'
    },
    featureImage: 'images/xs-01.jpg',
    info: {
      client: { 'zh-TW': '—', 'en': '—' },
      year: '2023',
      role: { 'zh-TW': '主視覺設計師', 'en': 'Key Visual Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '新生樹人，<em>心繫六十</em>',
        'en': 'Nurturing a generation, <em>hearts at sixty</em>'
      },
      paragraphs: {
        'zh-TW': [
          '新生樹人，心繫六十'
        ],
        'en': [
          'Nurturing a generation, hearts at sixty.'
        ]
      }
    },
    gallery: [
      { src: 'images/xs-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/xs-02.jpg', caption: { 'zh-TW': '學校特色研究', 'en': 'School Character Research' } },
      { src: 'images/xs-03.jpg', caption: { 'zh-TW': 'LOGO 系統', 'en': 'LOGO System' } },
      { src: 'images/xs-04.jpg', caption: { 'zh-TW': '識別元素', 'en': 'Brand Elements' } },
      { src: 'images/xs-05.jpg', caption: { 'zh-TW': '輔助識別', 'en': 'Secondary Elements' } },
      { src: 'images/xs-06.jpg', caption: { 'zh-TW': '色彩系統', 'en': 'Color System' } },
      { src: 'images/xs-07.jpg', caption: { 'zh-TW': 'EDM 與海報設計', 'en': 'EDM & Poster Design' } },
      { src: 'images/xs-08.jpg', caption: { 'zh-TW': '旗幟與服裝設計', 'en': 'Flag & Apparel Design' } },
      { src: 'images/xs-09.jpg', caption: { 'zh-TW': '校慶紀念品', 'en': 'Anniversary Merchandise' } }
    ],
    next: 'zhongqing'
  },

  'swap': {
    id: 'swap',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': 'SWAP', 'en': 'SWAP' },
    tagline: {
      'zh-TW': '區塊鏈金融品牌 LOGO 設計',
      'en': 'Blockchain financial brand LOGO design'
    },
    featureImage: 'images/swap_01-01.jpg',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': 'SWAP 平台', 'en': 'SWAP Platform' },
      year: '2024',
      role: { 'zh-TW': 'LOGO 設計師', 'en': 'LOGO Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'images/swap_01-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/swap_01-02.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-03.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-04.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-05.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-06.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-07.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-08.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-09.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-10.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-11.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-12.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/swap_01-13.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } }
    ],
    next: 'defi'
  },

  'defi': {
    id: 'defi',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': 'DeFi', 'en': 'DeFi' },
    tagline: {
      'zh-TW': 'DeFi 金融產品 LOGO 設計',
      'en': 'DeFi financial product LOGO design'
    },
    featureImage: 'images/defi-01.jpg',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': 'DeFi 金融客戶', 'en': 'DeFi Client' },
      year: '2024',
      role: { 'zh-TW': 'LOGO 設計師', 'en': 'LOGO Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'images/defi-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/defi-02.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-03.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-04.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-05.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-06.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-07.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-08.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-09.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-10.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-11.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/defi-12.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } }
    ],
    next: 'logo-collection'
  },

  'logo-collection': {
    id: 'logo-collection',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': 'LOGO Collection', 'en': 'LOGO Collection' },
    tagline: {
      'zh-TW': '多元 LOGO 設計作品合集',
      'en': 'A collection of diverse LOGO design works.'
    },
    featureImage: 'images/lc-01.jpg',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': '多位客戶', 'en': 'Multiple Clients' },
      year: '—',
      role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '多元風格的 <em>LOGO 創作</em>',
        'en': 'A diverse collection of <em>LOGO works</em>'
      },
      paragraphs: {
        'zh-TW': [
          ''
        ],
        'en': [
          ''
        ]
      }
    },
    gallery: [
      { src: 'images/lc-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/lc-02.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } },
      { src: 'images/lc-03.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } },
      { src: 'images/lc-04.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } },
      { src: 'images/lc-05.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } },
      { src: 'images/lc-06.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } },
      { src: 'images/lc-07.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } },
      { src: 'images/lc-08.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } },
      { src: 'images/lc-09.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } },
      { src: 'images/lc-10.jpg', caption: { 'zh-TW': 'LOGO 作品', 'en': 'LOGO Work' } }
    ],
    next: 'election'
  },

  'election': {
    id: 'election',
    category: 'event',
    categoryLabel: { 'zh-TW': '活動設計', 'en': 'Event Design' },
    title: { 'zh-TW': '縣市議員選舉文宣設計', 'en': 'County Council Election Campaign' },
    tagline: {
      'zh-TW': '新北市議員候選人選舉設計物',
      'en': 'Electoral campaign design materials for New Taipei City council candidates'
    },
    featureImage: 'images/el-03.jpg',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': '11 位候選人', 'en': '11 Candidates' },
      year: '2022 — 2023',
      role: { 'zh-TW': '專案設計師', 'en': 'Project Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '在選戰中扮演<em>視覺整合者</em>的角色',
        'en': 'The <em>visual integrator</em> behind the campaign'
      },
      paragraphs: {
        'zh-TW': [
          '以地方黨部設計師的身分，統籌多位縣市議員候選人的選舉文宣設計，從選舉看板、文宣手冊到社群素材，整合一致的視覺語言，在高壓的選戰期間確保品牌識別的統一性與效率'
        ],
        'en': [
          'As a designer representing the regional party office, coordinated election campaign materials for multiple county and city council candidates — from billboards and campaign booklets to social media assets, maintaining consistent visual language throughout the high-pressure campaign period.'
        ]
      }
    },
    gallery: [
      { src: 'images/el-03.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/el-01.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-02.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-04.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-05.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-06.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-07.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-08.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-09.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-10.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-11.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-12.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-13.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-14.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-15.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-16.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-17.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-18.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-19.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-20.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-21.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-22.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-23.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-24.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-25.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } },
      { src: 'images/el-26.jpg', caption: { 'zh-TW': '文宣設計', 'en': 'Campaign Material' } }
    ],
    next: 'xinsheng'
  },

  'sm-collection': {
    id: 'sm-collection',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': 'Social Media Post', 'en': 'Social Media Post' },
    tagline: {
      'zh-TW': '社群媒體貼文系列設計合集',
      'en': 'A collection of social media post designs.'
    },
    featureImage: 'https://picsum.photos/seed/sm-coll-feature/1600/900',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': '多位品牌客戶', 'en': 'Multiple Brand Clients' },
      year: '2023 — 2024',
      role: { 'zh-TW': '社群視覺設計師', 'en': 'Social Media Designer' },
      tools: 'Photoshop, Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/sm-coll-1/1600/900', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'https://picsum.photos/seed/sm-coll-2/1600/900', caption: { 'zh-TW': '延伸應用', 'en': 'Applications' } },
      { src: 'https://picsum.photos/seed/sm-coll-3/1600/900', caption: { 'zh-TW': '細節展示', 'en': 'Details' } }
    ],
    next: 'yexun-logo'
  },

  'zhongqing': {
    id: 'zhongqing',
    category: 'event',
    categoryLabel: { 'zh-TW': '活動設計', 'en': 'Event Design' },
    title: { 'zh-TW': '眾青雲集造浪營', 'en': 'Zhongqing Wave Camp' },
    tagline: {
      'zh-TW': '民眾黨青年委員會青年營隊規劃設計',
      'en': 'TPP Youth Committee Camp Visual & Event Design'
    },
    featureImage: 'images/zq-01.jpg',
    info: {
      client: { 'zh-TW': '民眾黨青年委員會', 'en': 'TPP Youth Committee' },
      year: '2023',
      role: { 'zh-TW': '活動視覺設計 / 主持人', 'en': 'Event Visual Designer / Host' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '風掀浪起，眾青<em>雲集</em>',
        'en': 'Waves Rising, Youth <em>Gathering</em>'
      },
      paragraphs: {
        'zh-TW': [
          '風掀浪起，眾青雲集！參與營隊，帶你認識政治選戰工作。模擬選戰 × 議題辯論 × 政治幕僚，不隨波逐流，學青？社青？來展現實力一同較勁！'
        ],
        'en': [
          "Waves rising, youth gathering! Join the camp and explore the world of political campaign work. Simulated elections x issue debates x political strategist experience. Not going with the flow - show what you're made of!"
        ]
      }
    },
    gallery: [
      { src: 'images/zq-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/zq-02.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-03.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-04.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-05.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-06.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-07.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-08.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-09.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-10.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-11.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-12.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-13.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-14.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-15.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-16.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } },
      { src: 'images/zq-17.jpg', caption: { 'zh-TW': '設計展示', 'en': 'Design Showcase' } }
    ],
    next: 'tpp-app-redesign'
  },

  'video-keelung-police': {
    id: 'video-keelung-police',
    category: 'video',
    categoryLabel: { 'zh-TW': '影片', 'en': 'Video' },
    title: { 'zh-TW': 'VIDEO_基隆市警察局反詐影片', 'en': 'VIDEO_Keelung Police Anti-Fraud' },
    tagline: {
      'zh-TW': '基隆市警察局反詐宣導影片拍攝與剪輯',
      'en': 'Anti-fraud awareness video filming and editing for Keelung Police.'
    },
    featureImage: 'https://picsum.photos/seed/video-police-feature/1600/900',
    galleryStyle: 'spaced',
    info: {
      client: { 'zh-TW': '基隆市警察局', 'en': 'Keelung Police Department' },
      year: '2024',
      role: { 'zh-TW': '影片拍攝、剪輯', 'en': 'Cinematographer, Editor' },
      tools: 'Sony α7 IV, DaVinci Resolve'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/video-police-1/1600/900', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'https://picsum.photos/seed/video-police-2/1600/900', caption: { 'zh-TW': '延伸應用', 'en': 'Applications' } },
      { src: 'https://picsum.photos/seed/video-police-3/1600/900', caption: { 'zh-TW': '細節展示', 'en': 'Details' } }
    ],
    next: 'clip-zhongqing'
  },

  'clip-zhongqing': {
    id: 'clip-zhongqing',
    category: 'video',
    categoryLabel: { 'zh-TW': '影片', 'en': 'Video' },
    title: { 'zh-TW': 'CLIP_眾青雲集造浪營', 'en': 'CLIP_Zhongqing Wave Camp Video' },
    tagline: {
      'zh-TW': '活動影片剪輯與後製',
      'en': 'Event video editing and post-production.'
    },
    featureImage: 'https://picsum.photos/seed/clip-zhongqing-feature/1600/900',
    galleryStyle: 'spaced',
    info: {
      client: { 'zh-TW': '眾青雲集', 'en': 'Zhongqing Cloud Group' },
      year: '2023',
      role: { 'zh-TW': '剪輯師', 'en': 'Video Editor' },
      tools: 'DaVinci Resolve'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'https://picsum.photos/seed/clip-zhongqing-1/1600/900', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'https://picsum.photos/seed/clip-zhongqing-2/1600/900', caption: { 'zh-TW': '延伸應用', 'en': 'Applications' } },
      { src: 'https://picsum.photos/seed/clip-zhongqing-3/1600/900', caption: { 'zh-TW': '細節展示', 'en': 'Details' } }
    ],
    next: 'video-luncheon'
  },
};

/* === 作品詳情頁渲染器 === */
class WorkDetailRenderer {
  constructor() {
    // 從 URL 取得作品 id（例如 ?id=eggpop-nft）
    const urlParams = new URLSearchParams(window.location.search);
    this.workId = urlParams.get('id') || 'eggpop-nft'; // 預設第一個

    this.work = WORKS_DATA[this.workId];
    this.lang = localStorage.getItem('lang') || 'zh-TW';

    this.init();
  }

  init() {
    if (!this.work) {
      this.renderNotFound();
      return;
    }

    this.renderContent();
    this.setupGalleryReveal();
    this.bindLanguageSwitch();
  }

  /* 雙語取值輔助函式 */
  t(value) {
    if (typeof value === 'object' && value !== null) {
      return value[this.lang] || value['zh-TW'] || '';
    }
    return value;
  }

  renderContent() {
    const w = this.work;

    // 標題
    this.setText('.work-hero-eyebrow-text', this.t(w.categoryLabel));
    this.setText('.work-hero-title-text', this.t(w.title));
    this.setText('.work-hero-tagline', this.t(w.tagline));

    // 主視覺
    const featureImg = document.querySelector('.work-feature-image img');
    if (featureImg) {
      featureImg.src = w.featureImage;
      featureImg.alt = this.t(w.title);
    }

    // 專案資訊
    this.setText('.work-info-client', this.t(w.info.client));
    this.setText('.work-info-year', w.info.year);
    this.setText('.work-info-role', this.t(w.info.role));
    this.setText('.work-info-tools', w.info.tools);

    // 專案敘述
    this.setHTML('.work-description-content h3', this.t(w.description.heading));
    const paragraphsContainer = document.querySelector('.work-description-paragraphs');
    if (paragraphsContainer) {
      paragraphsContainer.innerHTML = '';
      this.t(w.description.paragraphs).forEach(p => {
        const pEl = document.createElement('p');
        pEl.textContent = p;
        paragraphsContainer.appendChild(pEl);
      });
    }

    // 圖片區
    const galleryContainer = document.querySelector('.work-gallery-inner');
    if (galleryContainer) {
      // 套用圖片區樣式
      galleryContainer.classList.remove('gallery-spaced', 'gallery-masonry');
      if (w.galleryStyle === 'spaced') {
        galleryContainer.classList.add('gallery-spaced');
      } else if (w.galleryStyle === 'masonry') {
        galleryContainer.classList.add('gallery-masonry');
      }

      galleryContainer.innerHTML = '';
      w.gallery.forEach((item, index) => {
        const sizeClass = item.size && item.size !== 'wide' ? `size-${item.size}` : '';
        const itemEl = document.createElement('div');
        itemEl.className = `work-gallery-item ${sizeClass}`.trim();
        itemEl.innerHTML = `
          <img src="${item.src}" alt="${this.t(item.caption)}" loading="lazy">
          <div class="work-gallery-caption">
            <div class="work-gallery-caption-title">${this.t(item.caption)}</div>
            <div class="work-gallery-caption-meta">${String(index + 1).padStart(2, '0')} / ${String(w.gallery.length).padStart(2, '0')}</div>
          </div>
        `;
        galleryContainer.appendChild(itemEl);
      });
    }

    // Figma 原型嵌入（僅限民眾黨 APP）
    const existingProto = document.querySelector('.work-prototype-section');
    if (existingProto) existingProto.remove();
    if (w.figmaPrototype) {
      const protoSection = document.createElement('section');
      protoSection.className = 'work-prototype-section';
      protoSection.style.cssText = 'padding: 4rem 0 6rem; background: var(--color-bg-soft);';
      protoSection.innerHTML = `
        <div style="max-width: 900px; margin: 0 auto; padding: 0 var(--container-padding);">
          <p style="font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 2rem;">— Interactive Prototype</p>
          <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 2.5rem; color: var(--color-text);">可操作原型</h3>
          <div style="border-radius: 16px; overflow: hidden; border: 1px solid var(--color-border); background: #1e1e1e;">
            <iframe
              style="border: none; width: 100%; height: 80vh; display: block;"
              src="${w.figmaPrototype}"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      `;
      const nextSection = document.querySelector('.work-next');
      if (nextSection) {
        nextSection.parentNode.insertBefore(protoSection, nextSection);
      }
    }

    // 下一個作品
    if (w.next && WORKS_DATA[w.next]) {
      const nextWork = WORKS_DATA[w.next];
      this.setHTML('.work-next-title', this.t(nextWork.title));
      this.setText('.work-next-meta', this.t(nextWork.categoryLabel) + ' · ' + nextWork.info.year);
      const nextLink = document.querySelector('.work-next-link');
      if (nextLink) {
        nextLink.href = `work-detail.html?id=${nextWork.id}`;
      }
    }

    // 更新頁面標題
    document.title = `${this.t(w.title)} — Designer Name`;
  }

  setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  setHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  }

  /* 圖片區滾動進場 */
  setupGalleryReveal() {
    // 等動態渲染完成後再觀察
    setTimeout(() => {
      const items = document.querySelectorAll('.work-gallery-item');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      });
      items.forEach(item => observer.observe(item));
    }, 100);
  }

  /* 監聽語言切換並重新渲染 */
  bindLanguageSwitch() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => {
        // 等 LanguageSwitcher 切換完成後再更新
        setTimeout(() => {
          this.lang = localStorage.getItem('lang') || 'zh-TW';
          this.renderContent();
          // 重新觀察進場
          this.setupGalleryReveal();
        }, 50);
      });
    });
  }

  renderNotFound() {
    const main = document.querySelector('main') || document.body;
    main.innerHTML = `
      <section style="min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 8rem 2rem;">
        <div>
          <h1 style="font-family: var(--font-display); font-size: 4rem; font-weight: 500; margin-bottom: 1rem; color: var(--color-text-muted);">404</h1>
          <p style="color: var(--color-text-muted); font-size: 1.1rem; margin-bottom: 2rem;">作品不存在 / Work not found</p>
          <a href="portfolio.html" style="color: var(--color-accent); font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase;">← 返回作品集 / Back</a>
        </div>
      </section>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WorkDetailRenderer();
});
