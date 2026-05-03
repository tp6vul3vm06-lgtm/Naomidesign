/* === 多語言文案 === */
const translations = {
  'zh-TW': {
    'nav.home': '首頁',
    'nav.about': '關於我',
    'nav.portfolio': '設計',
    'nav.photography': '攝影',
    'nav.illustration': '插畫',
    'nav.contact': '聯繫方式',

    'hero.eyebrow': 'UI / UX 設計師',
    'hero.title1': '以設計',
    'hero.title2': '驅動<em>創新</em>',
    'hero.tagline': '專注於使用者經驗與視覺美學的平衡，打造令人印象深刻的數位體驗。',
    'hero.cta': '探索作品',
    'hero.scroll': '向下捲動',

    'about.eyebrow': '關於設計師',
    'about.title': '我是<em>設計師姓名</em>，相信好設計能改變世界',
    'about.p1': '擁有五年以上的 UI/UX 設計經驗，專精於品牌識別、數位產品設計與視覺敘事。',
    'about.p2': '我的設計理念是讓複雜的事情變簡單，讓平凡的事物變得不凡。',
    'about.cta': '更認識我',

    'works.eyebrow': '精選作品',
    'works.title': '近期<em>專案</em>',
    'works.link': '查看全部作品',
    'works.1.category': '品牌設計',
    'works.1.title': '設計作品 A — 品牌識別系統',
    'works.2.category': 'UI / UX',
    'works.2.title': '設計作品 B — 行動應用程式',
    'works.3.category': '活動設計',
    'works.3.title': '設計作品 C — 展覽視覺',

    'contact.eyebrow': '一起合作',
    'contact.title': '有想法？<em>聊聊吧</em>',
    'contact.text': '不論是商業合作、專案邀約或單純交流，都歡迎透過下方按鈕與我聯繫。',
    'contact.cta': '聯繫我',

    'footer.brand': '設計師姓名',
    'footer.tagline': 'UI/UX 設計師、視覺創作者，專注於打造令人記憶深刻的數位體驗。',
    'footer.col1.title': '導覽',
    'footer.col2.title': '聯絡',
    'footer.copyright': '© 2026 設計師姓名. 版權所有。',
    'footer.location': 'Made in Taipei',

    // 關於我頁面
    'about.hero.eyebrow': '關於我',
    'about.hero.title1': '設計師姓名',
    'about.hero.title2': '一位以好奇心',
    'about.hero.title3': '驅動設計的<em>創作者</em>',
    'about.hero.tagline': '我相信設計不只是視覺的呈現，而是解決問題、傳達情感、創造連結的橋樑。',

    'about.story.eyebrow': '個人故事',
    'about.story.title': '從插畫到<em>數位設計</em>的旅程',
    'about.story.p1': '從小對藝術充滿熱情的我，從手繪插畫開始，逐步走向了平面設計與品牌識別的領域。在大學主修視覺傳達設計期間，我發現自己對於「使用者如何與產品互動」這件事特別著迷。',
    'about.story.p2': '畢業後加入科技新創公司，正式踏入 UI/UX 領域。我學會了如何將美學與功能性結合，如何用設計解決真實的問題。五年來，我參與了超過 30 個專案，從新創品牌設計、SaaS 產品介面到大型企業的數位轉型。',
    'about.story.p3': '工作之餘，我喜歡用攝影記錄旅行的瞬間，用插畫表達內心的世界。這些創作不只是興趣，更是滋養我設計靈感的源泉。',
    'about.story.quote': '「好的設計是看不見的，它讓使用者專注於目標，而非設計本身。」',
    'about.story.caption': 'TAIPEI · 2026',

    // 專業能力區
    'about.pro.eyebrow': '專業能力',
    'about.pro.title': 'Professional <em>Expertise</em>',
    'about.pro.tagline': '橫跨數位、平面、立體三個維度，整合視覺與技術，提供完整的設計解決方案。',

    'about.pro.1.title': '整合設計專長（數位 × 平面 × 立體）',
    'about.pro.1.sub1.title': 'UI/UX 與品牌視覺',
    'about.pro.1.sub1.li1': 'App/Web 介面規劃、使用流程與高保真原型',
    'about.pro.1.sub1.li2': 'LOGO、CIS/VI 建置，行銷素材（海報、DM、Banner、社群貼圖、活動主視覺）',
    'about.pro.1.sub1.li3': '型錄、書籍、電子刊物等排版',
    'about.pro.1.sub2.title': '立體結構與產品開發',
    'about.pro.1.sub2.li1': '禮贈品、商品與包裝造型/結構設計',
    'about.pro.1.sub2.li2': '展場攤位、道具 3D 建模與空間視覺提案（Rhino/SketchUp/AutoCAD）',
    'about.pro.1.sub2.li3': 'KeyShot 渲染、雷雕與 3D 列印打樣驗證',
    'about.pro.1.sub3.title': '印刷與色彩管理',
    'about.pro.1.sub3.li1': '印前檔案製作、CMYK/專色色彩校正',
    'about.pro.1.sub3.li2': '紙材與後加工（燙金、局部光等）評估與成本控管',
    'about.pro.1.sub3.li3': '保持螢幕、印刷色彩一致性',
    'about.pro.1.tools': '主要工具：Illustrator、Photoshop、Figma、Rhino、KeyShot、SketchUp、AutoCAD',

    'about.pro.2.title': '插畫與漫畫創作專長',
    'about.pro.2.sub1.title': '插畫風格與應用',
    'about.pro.2.sub1.li1': '日系人物插畫、Q 版角色、主視覺/吉祥物繪製',
    'about.pro.2.sub1.li2': '產品插圖、卡牌、貼圖、服裝與場景設計',
    'about.pro.2.sub2.title': '漫畫敘事',
    'about.pro.2.sub2.li1': '黑白/全彩分鏡、劇情節奏與故事表現',
    'about.pro.2.sub2.li2': '短篇漫畫至完整連載皆可獨立執行',
    'about.pro.2.sub3.title': '排版與整合',
    'about.pro.2.sub3.li1': '插畫與文字排版、跨媒介視覺統整',
    'about.pro.2.tools': '主要工具：Clip Studio Paint、Photoshop',

    'about.pro.3.title': '攝影與影音製作專長',
    'about.pro.3.sub1.title': '攝影項目',
    'about.pro.3.sub1.li1': '人像、商品、活動/婚禮紀錄、形象及宣傳拍攝',
    'about.pro.3.sub2.title': '影片企劃與製作',
    'about.pro.3.sub2.li1': '動態攝影：外/內景節目、街專訪、訪談',
    'about.pro.3.sub2.li2': '長短影音企劃、剪輯、調光與基礎特效',
    'about.pro.3.sub2.li3': '形象影片、產品廣告、社群 Reels/短影音',
    'about.pro.3.sub2.li4': '快剪、情感類型成果展現',
    'about.pro.3.sub3.title': '現場與後製',
    'about.pro.3.sub3.li1': '拍攝腳本撰寫、燈光與器材運用，素材管理與版本交付',
    'about.pro.3.tools': '主要工具/設備：DaVinci Resolve、剪映、Sony α 系列相機',

    // 軟體圖示區
    'about.software.eyebrow': '常用軟體',
    'about.software.title': 'My <em>Toolkit</em>',

    // 經歷時間軸（倒序：資深 → 學歷）
    'about.exp.eyebrow': '工作經歷',
    'about.exp.title': '我走過的<em>每一步</em>',

    'about.exp.1.period': '2024 — 現在',
    'about.exp.1.role': '資深 UI/UX 設計師',
    'about.exp.1.company': 'Tech Studio Inc.',
    'about.exp.1.desc': '主導 SaaS 產品設計團隊，建立完整設計系統並提升使用者轉換率達 35%。負責跨部門設計策略規劃，與工程、產品團隊密切協作。',

    'about.exp.2.period': '2022 — 2024',
    'about.exp.2.role': 'UI/UX 設計師',
    'about.exp.2.company': 'Creative Agency',
    'about.exp.2.desc': '為超過 15 個品牌提供完整的數位產品設計服務，專案涵蓋電商、金融、醫療等多元領域。專案多次入選國內設計獎項。',

    'about.exp.3.period': '2021 — 2022',
    'about.exp.3.role': '初階產品設計師',
    'about.exp.3.company': 'Startup Hub',
    'about.exp.3.desc': '參與新創團隊的 MVP 設計，負責使用者研究、原型設計與視覺執行。學習如何在資源有限的情況下做出最佳設計決策。',

    'about.exp.4.period': '2020 — 2021',
    'about.exp.4.role': '視覺傳達設計學士',
    'about.exp.4.company': '國立 OO 大學',
    'about.exp.4.desc': '主修視覺傳達設計，副修認知心理學。畢業專題以「無障礙設計」為主題，獲得系上最佳作品獎。',

    // 作品清單區
    'about.works.eyebrow': '作品清單',
    'about.works.title': 'Selected <em>Works</em>',
    'about.works.tagline': '橫跨插畫、設計、攝影三個領域的代表性作品。',

    'about.works.illustration': 'ILLUSTRATION',
    'about.works.design': 'DESIGN',
    'about.works.photo': 'PHOTO & VIDEOGRAPHY',

    'about.cta.text': '想了解更多<em>合作可能</em>嗎？',
    'about.cta.btn': '聯繫我',

    // 設計頁面
    'portfolio.hero.eyebrow': '設計作品',
    'portfolio.hero.title1': '橫跨多元領域的',
    'portfolio.hero.title2': '<em>設計</em>實踐',
    'portfolio.hero.tagline': '從品牌識別、活動主視覺到 UI/UX，每個專案都是一次與客戶共同成長的旅程。',

    'portfolio.filter.all': '全部',
    'portfolio.filter.branding': '品牌設計',
    'portfolio.filter.event': '活動設計',
    'portfolio.filter.uiux': 'UI / UX',

    'portfolio.count.label': '展示作品',

    'portfolio.hint': '使用',
    'portfolio.hint.suffix': '切換作品',

    'portfolio.empty': '此分類暫無作品',

    'portfolio.cta.text': '對某個<em>專案</em>感興趣嗎？',
    'portfolio.cta.btn': '聊聊合作',

    // 設計作品名稱
    'portfolio.work.1.title': 'EGGPOP NFT',
    'portfolio.work.1.desc': 'NFT 設計與插畫整合，建立完整視覺系統。',

    'portfolio.work.2.title': '108 年淡水南瓜節',
    'portfolio.work.2.desc': '造景設計、繪製與製作，打造節慶主視覺。',

    'portfolio.work.3.title': 'Cryptoldyou Website',
    'portfolio.work.3.desc': '完整的 UIUX 設計與網站建置流程。',

    'portfolio.work.4.title': '民眾診聊所 LOGO',
    'portfolio.work.4.desc': 'LOGO 與影音相關延伸設計。',

    'portfolio.work.5.title': '眾青雲集造浪營',
    'portfolio.work.5.desc': '主視覺與系列活動延伸物設計。',

    'portfolio.work.6.title': 'EGGPOP Website',
    'portfolio.work.6.desc': 'Website 與 Search Web UIUX 設計建置。',

    'portfolio.work.7.title': '海波兒童劇團',
    'portfolio.work.7.desc': 'LOGO 與 CIS 完整設計。',

    'portfolio.work.8.title': '新生國小 60 周年',
    'portfolio.work.8.desc': '校慶主視覺與延伸物設計提案。',

    'portfolio.work.9.title': '中華民國童軍露營',
    'portfolio.work.9.desc': 'LOGO、延伸物與設計提案。',
  },
  'en': {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Design',
    'nav.photography': 'Photography',
    'nav.illustration': 'Illustration',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'UI / UX Designer',
    'hero.title1': 'Design that',
    'hero.title2': 'drives <em>innovation</em>',
    'hero.tagline': 'Crafting memorable digital experiences through the balance of user experience and visual aesthetics.',
    'hero.cta': 'Explore Work',
    'hero.scroll': 'Scroll Down',

    'about.eyebrow': 'About the Designer',
    'about.title': 'I am <em>Designer Name</em>, and I believe great design changes the world',
    'about.p1': 'With over five years of experience in UI/UX design, specializing in brand identity, digital product design, and visual storytelling.',
    'about.p2': 'My design philosophy is to make the complex simple, and the ordinary extraordinary.',
    'about.cta': 'Know Me More',

    'works.eyebrow': 'Selected Works',
    'works.title': 'Recent <em>Projects</em>',
    'works.link': 'View All Works',
    'works.1.category': 'Branding',
    'works.1.title': 'Project A — Brand Identity System',
    'works.2.category': 'UI / UX',
    'works.2.title': 'Project B — Mobile Application',
    'works.3.category': 'Event Design',
    'works.3.title': 'Project C — Exhibition Visual',

    'contact.eyebrow': "Let's Collaborate",
    'contact.title': 'Got an idea? <em>Let\'s talk</em>',
    'contact.text': 'Whether for business collaboration, project inquiry, or simply to connect, feel free to reach out through the button below.',
    'contact.cta': 'Contact Me',

    'footer.brand': 'Designer Name',
    'footer.tagline': 'UI/UX Designer and visual creator, focused on building memorable digital experiences.',
    'footer.col1.title': 'Navigation',
    'footer.col2.title': 'Contact',
    'footer.copyright': '© 2026 Designer Name. All rights reserved.',
    'footer.location': 'Made in Taipei',

    // About page
    'about.hero.eyebrow': 'About Me',
    'about.hero.title1': 'Designer Name',
    'about.hero.title2': 'A creator driven by',
    'about.hero.title3': '<em>curiosity</em> and design',
    'about.hero.tagline': 'I believe design is more than visual presentation — it\'s a bridge that solves problems, conveys emotions, and creates connections.',

    'about.story.eyebrow': 'My Story',
    'about.story.title': 'A journey from <em>illustration</em> to digital design',
    'about.story.p1': 'Passionate about art since childhood, I started with hand-drawn illustrations and gradually moved into graphic design and brand identity. During my visual communication studies in university, I became fascinated with how users interact with products.',
    'about.story.p2': 'After graduation, I joined a tech startup and officially entered the UI/UX field. I learned how to combine aesthetics with functionality, and how to use design to solve real problems. Over five years, I\'ve worked on more than 30 projects spanning startup branding, SaaS interfaces, and enterprise digital transformation.',
    'about.story.p3': 'Outside of work, I capture travel moments through photography and express my inner world through illustration. These creative pursuits aren\'t just hobbies — they\'re the source that nourishes my design inspiration.',
    'about.story.quote': '"Good design is invisible — it lets users focus on their goals, not on the design itself."',
    'about.story.caption': 'TAIPEI · 2026',

    // Professional expertise
    'about.pro.eyebrow': 'Professional',
    'about.pro.title': 'Professional <em>Expertise</em>',
    'about.pro.tagline': 'Spanning digital, graphic, and 3D dimensions — integrating visual and technical capabilities to deliver complete design solutions.',

    'about.pro.1.title': 'Integrated Design (Digital × Graphic × 3D)',
    'about.pro.1.sub1.title': 'UI/UX & Brand Visual',
    'about.pro.1.sub1.li1': 'App/Web interface planning, user flow, high-fidelity prototyping',
    'about.pro.1.sub1.li2': 'LOGO, CIS/VI development, marketing materials (posters, DM, banners, social media graphics, event key visuals)',
    'about.pro.1.sub1.li3': 'Catalog, book, and digital publication layout',
    'about.pro.1.sub2.title': '3D Structure & Product Development',
    'about.pro.1.sub2.li1': 'Gift, merchandise, and packaging structural design',
    'about.pro.1.sub2.li2': 'Exhibition booth, prop 3D modeling and spatial visual proposals (Rhino/SketchUp/AutoCAD)',
    'about.pro.1.sub2.li3': 'KeyShot rendering, laser engraving, and 3D printing prototype validation',
    'about.pro.1.sub3.title': 'Print & Color Management',
    'about.pro.1.sub3.li1': 'Pre-press file production, CMYK/spot color calibration',
    'about.pro.1.sub3.li2': 'Paper material and post-processing (foiling, spot UV, etc.) evaluation and cost control',
    'about.pro.1.sub3.li3': 'Maintain consistency between screen and print colors',
    'about.pro.1.tools': 'Tools: Illustrator, Photoshop, Figma, Rhino, KeyShot, SketchUp, AutoCAD',

    'about.pro.2.title': 'Illustration & Comic Creation',
    'about.pro.2.sub1.title': 'Illustration Style & Application',
    'about.pro.2.sub1.li1': 'Japanese-style character illustration, chibi characters, key visuals/mascot design',
    'about.pro.2.sub1.li2': 'Product illustration, cards, stickers, costume and scene design',
    'about.pro.2.sub2.title': 'Comic Storytelling',
    'about.pro.2.sub2.li1': 'B&W/full-color storyboarding, plot pacing and narrative expression',
    'about.pro.2.sub2.li2': 'From short comics to full serializations, all executable independently',
    'about.pro.2.sub3.title': 'Layout & Integration',
    'about.pro.2.sub3.li1': 'Illustration and typography layout, cross-media visual integration',
    'about.pro.2.tools': 'Tools: Clip Studio Paint, Photoshop',

    'about.pro.3.title': 'Photography & Video Production',
    'about.pro.3.sub1.title': 'Photography Projects',
    'about.pro.3.sub1.li1': 'Portrait, product, event/wedding documentation, branding & promotional photography',
    'about.pro.3.sub2.title': 'Video Planning & Production',
    'about.pro.3.sub2.li1': 'Motion photography: outdoor/indoor shows, street interviews, dialogues',
    'about.pro.3.sub2.li2': 'Long/short video planning, editing, color grading and basic effects',
    'about.pro.3.sub2.li3': 'Brand films, product ads, social Reels/short videos',
    'about.pro.3.sub2.li4': 'Quick cuts, emotion-driven content presentation',
    'about.pro.3.sub3.title': 'On-set & Post-production',
    'about.pro.3.sub3.li1': 'Script writing, lighting and equipment operation, asset management and version delivery',
    'about.pro.3.tools': 'Tools/Equipment: DaVinci Resolve, CapCut, Sony α series cameras',

    'about.software.eyebrow': 'Software',
    'about.software.title': 'My <em>Toolkit</em>',

    // Experience timeline
    'about.exp.eyebrow': 'Experience',
    'about.exp.title': 'Every <em>step</em> I\'ve taken',

    'about.exp.1.period': '2024 — Present',
    'about.exp.1.role': 'Senior UI/UX Designer',
    'about.exp.1.company': 'Tech Studio Inc.',
    'about.exp.1.desc': 'Leading the SaaS product design team, building a comprehensive design system that improved user conversion by 35%. Driving cross-functional design strategy with engineering and product teams.',

    'about.exp.2.period': '2022 — 2024',
    'about.exp.2.role': 'UI/UX Designer',
    'about.exp.2.company': 'Creative Agency',
    'about.exp.2.desc': 'Delivered comprehensive digital product design services for over 15 brands across e-commerce, finance, and healthcare sectors. Multiple projects shortlisted for national design awards.',

    'about.exp.3.period': '2021 — 2022',
    'about.exp.3.role': 'Junior Product Designer',
    'about.exp.3.company': 'Startup Hub',
    'about.exp.3.desc': 'Contributed to MVP design for startup teams, handling user research, prototyping, and visual execution. Learned to make optimal design decisions under resource constraints.',

    'about.exp.4.period': '2020 — 2021',
    'about.exp.4.role': 'BFA in Visual Communication Design',
    'about.exp.4.company': 'National OO University',
    'about.exp.4.desc': 'Major in visual communication design with minor in cognitive psychology. Graduation project on accessibility design received the department\'s best work award.',

    // Works list
    'about.works.eyebrow': 'Works List',
    'about.works.title': 'Selected <em>Works</em>',
    'about.works.tagline': 'Representative works spanning illustration, design, and photography.',

    'about.works.illustration': 'ILLUSTRATION',
    'about.works.design': 'DESIGN',
    'about.works.photo': 'PHOTO & VIDEOGRAPHY',

    'about.cta.text': 'Want to explore <em>collaboration possibilities</em>?',
    'about.cta.btn': 'Contact Me',

    // Portfolio page
    'portfolio.hero.eyebrow': 'Design Works',
    'portfolio.hero.title1': 'Design practice',
    'portfolio.hero.title2': 'across <em>multiple</em> fields',
    'portfolio.hero.tagline': 'From brand identity to event key visuals to UI/UX, every project is a journey of growth with clients.',

    'portfolio.filter.all': 'All',
    'portfolio.filter.branding': 'Branding',
    'portfolio.filter.event': 'Event',
    'portfolio.filter.uiux': 'UI / UX',

    'portfolio.count.label': 'Works Shown',

    'portfolio.hint': 'Use',
    'portfolio.hint.suffix': 'to navigate',

    'portfolio.empty': 'No works in this category yet',

    'portfolio.cta.text': 'Interested in a <em>project</em>?',
    'portfolio.cta.btn': "Let's Talk",

    // Design work names
    'portfolio.work.1.title': 'EGGPOP NFT',
    'portfolio.work.1.desc': 'Integrated NFT design and illustration, building a complete visual system.',

    'portfolio.work.2.title': 'Tamsui Pumpkin Festival 2019',
    'portfolio.work.2.desc': 'Scene design, illustration, and production for a festive key visual.',

    'portfolio.work.3.title': 'Cryptoldyou Website',
    'portfolio.work.3.desc': 'Complete UIUX design and website development workflow.',

    'portfolio.work.4.title': 'Public Clinic LOGO',
    'portfolio.work.4.desc': 'LOGO design and related multimedia extension design.',

    'portfolio.work.5.title': 'Youth Cloud Wave Camp',
    'portfolio.work.5.desc': 'Key visual and event series collateral design.',

    'portfolio.work.6.title': 'EGGPOP Website',
    'portfolio.work.6.desc': 'Website and Search Web UIUX design and development.',

    'portfolio.work.7.title': 'Haibo Children Theatre',
    'portfolio.work.7.desc': 'Complete LOGO and CIS design.',

    'portfolio.work.8.title': 'XinSheng 60th Anniversary',
    'portfolio.work.8.desc': 'School anniversary key visual and collateral design proposal.',

    'portfolio.work.9.title': 'ROC Scout Jamboree',
    'portfolio.work.9.desc': 'LOGO, collateral, and design proposal.',
  }
};

/* === 自訂游標（含游標跟隨）=== */
class CustomCursor {
  constructor() {
    this.dot = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    this.mouseX = 0;
    this.mouseY = 0;
    this.dotX = 0;
    this.dotY = 0;
    this.ringX = 0;
    this.ringY = 0;

    // 偵測觸控裝置
    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    this.init();
  }

  init() {
    if (!this.dot || !this.ring || this.isTouchDevice) return;

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // 滑入連結時放大
    document.querySelectorAll('a, button, .work-card, .magnetic').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.dot.classList.add('hover');
        this.ring.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        this.dot.classList.remove('hover');
        this.ring.classList.remove('hover');
      });
    });

    // 滑出視窗時隱藏
    document.addEventListener('mouseleave', () => {
      this.dot.style.opacity = '0';
      this.ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      this.dot.style.opacity = '1';
      this.ring.style.opacity = '1';
    });

    this.animate();
  }

  animate() {
    // 圓點精準跟隨（高速）
    this.dotX += (this.mouseX - this.dotX) * 0.9;
    this.dotY += (this.mouseY - this.dotY) * 0.9;

    // 圓圈緩慢跟隨（增加優雅感）
    this.ringX += (this.mouseX - this.ringX) * 0.18;
    this.ringY += (this.mouseY - this.ringY) * 0.18;

    if (this.dot) {
      this.dot.style.transform = `translate(${this.dotX}px, ${this.dotY}px) translate(-50%, -50%)`;
    }
    if (this.ring) {
      this.ring.style.transform = `translate(${this.ringX}px, ${this.ringY}px) translate(-50%, -50%)`;
    }

    requestAnimationFrame(() => this.animate());
  }
}

/* === 滾動進度條 === */
class ScrollProgress {
  constructor() {
    this.bar = document.querySelector('.scroll-progress');
    this.init();
  }

  init() {
    if (!this.bar) return;
    window.addEventListener('scroll', () => this.update(), { passive: true });
    this.update();
  }

  update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    this.bar.style.width = `${progress}%`;
  }
}

/* === 語言切換 === */
class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'zh-TW';
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
    this.updateButtonState();
  }

  bindEvents() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        if (lang && lang !== this.currentLang) {
          this.switchLanguage(lang);
        }
      });
    });
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.applyLanguage(lang);
    this.updateButtonState();
  }

  applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.lang = lang;
  }

  updateButtonState() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });
  }
}

/* === 導覽列滾動效果 === */
class NavbarScroll {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.init();
  }

  init() {
    if (!this.navbar) return;
    window.addEventListener('scroll', () => {
      this.navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }
}

/* === 漢堡選單 === */
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector('.menu-toggle');
    this.menu = document.querySelector('.nav-right');
    this.init();
  }

  init() {
    if (!this.toggle || !this.menu) return;

    this.toggle.addEventListener('click', () => {
      this.toggle.classList.toggle('active');
      this.menu.classList.toggle('active');
      document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
    });

    this.menu.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        this.toggle.classList.remove('active');
        this.menu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* === 滾動進場動畫 === */
class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('.reveal');
    this.init();
  }

  init() {
    if (!this.elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    });

    this.elements.forEach(el => observer.observe(el));
  }
}

/* === 文字逐字浮現動畫 === */
class TextSplitReveal {
  constructor() {
    this.elements = document.querySelectorAll('.split-text');
    this.init();
  }

  init() {
    if (!this.elements.length) return;

    // 將文字拆成單個字元
    this.elements.forEach(el => {
      const text = el.textContent;
      el.textContent = '';
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.style.transitionDelay = `${i * 0.03}s`;
        span.textContent = char === ' ' ? '\u00A0' : char;
        el.appendChild(span);
      });
    });

    // 進場觀察
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.elements.forEach(el => observer.observe(el));
  }
}

/* === 磁吸按鈕（Magnetic Effect）=== */
class MagneticButton {
  constructor() {
    this.elements = document.querySelectorAll('.magnetic');
    this.init();
  }

  init() {
    if (!this.elements.length) return;

    this.elements.forEach(el => {
      const inner = el.querySelector('.magnetic-inner') || el;

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // 磁吸強度（越大跟隨越強）
        const strength = 0.35;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        // 內層額外位移，產生雙層磁吸感
        if (inner !== el) {
          inner.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        }
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
        if (inner !== el) inner.style.transform = '';
      });
    });
  }
}

/* === 3D 卡片傾斜效果 === */
class TiltCard {
  constructor() {
    this.cards = document.querySelectorAll('.work-card');
    this.init();
  }

  init() {
    if (!this.cards.length) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    this.cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // 計算傾斜角度（最大 6 度，優雅範圍）
        const rotateX = ((centerY - y) / centerY) * 6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }
}

/* === 平滑滾動（Lenis 業界標準函式庫）===
 * 文件：https://github.com/darkroomengineering/lenis
 * 透過 CDN 在 HTML 中引入後，window.Lenis 即可使用
 */
class LenisSmoothScroll {
  constructor() {
    this.lenis = null;
    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    this.init();
  }

  init() {
    // 若 Lenis 未載入，跳過（會自動使用瀏覽器原生滾動）
    if (typeof Lenis === 'undefined') {
      console.warn('Lenis 函式庫未載入，使用瀏覽器原生滾動');
      return;
    }

    // 觸控裝置使用原生滾動
    if (this.isTouchDevice) return;

    // 初始化 Lenis（Apple/Stripe 風格參數）
    this.lenis = new Lenis({
      duration: 1.2,           // 動畫時長（秒）
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
      smoothWheel: true,       // 平滑滾輪
      wheelMultiplier: 1.0,    // 滾輪倍率（保持原生靈敏度）
      touchMultiplier: 2,      // 觸控倍率
      infinite: false,
    });

    // 啟動動畫迴圈
    const raf = (time) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 攔截錨點連結
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          this.lenis.scrollTo(targetEl, { duration: 1.4 });
        }
      });
    });
  }

  /* 公開方法：滾動到指定位置（給其他類別使用） */
  scrollTo(target, options = {}) {
    if (this.lenis) {
      this.lenis.scrollTo(target, { duration: 1.4, ...options });
    } else {
      // 降級方案：使用瀏覽器原生
      window.scrollTo({
        top: typeof target === 'number' ? target : 0,
        behavior: 'smooth'
      });
    }
  }

  stop() {
    if (this.lenis) this.lenis.stop();
  }

  start() {
    if (this.lenis) this.lenis.start();
  }
}

/* === 首頁按鈕智慧行為 ===
 * - 在首頁時：點擊「首頁」連結平滑滾動回頂，並有過場動畫
 * - 在其他頁面時：正常導向首頁
 */
class HomeLinkBehavior {
  constructor(smoothScrollInstance) {
    this.smoothScroll = smoothScrollInstance;
    // 判斷目前是否在首頁
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    this.isHomePage = (filename === '' || filename === 'index.html' || filename === '/');

    this.init();
  }

  init() {
    // 抓取所有指向 index.html 或根目錄的連結（包含 logo 與首頁導覽連結）
    const homeLinks = document.querySelectorAll(
      'a[href="index.html"], a[href="/"], a[href="./"], a[href="./index.html"]'
    );

    homeLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (this.isHomePage) {
          // 在首頁時：阻止跳轉，改為平滑滾動回頂 + 動畫效果
          e.preventDefault();
          this.scrollToTopWithEffect();
        }
        // 不在首頁時：讓瀏覽器正常導航至 index.html（會觸發頁面載入動畫）
      });
    });
  }

  scrollToTopWithEffect() {
    // 觸發頁面進出動畫（淡出）
    document.body.classList.add('page-transition-out');

    setTimeout(() => {
      // 平滑滾動到頂部（Lenis 接管）
      this.smoothScroll.scrollTo(0, { duration: 1.4 });

      // 切換到淡入動畫
      setTimeout(() => {
        document.body.classList.remove('page-transition-out');
        document.body.classList.add('page-transition-in');

        // 動畫結束後清除 class
        setTimeout(() => {
          document.body.classList.remove('page-transition-in');
        }, 1000);
      }, 250);
    }, 150);
  }
}

/* === 初始化 === */
document.addEventListener('DOMContentLoaded', () => {
  new CustomCursor();
  new ScrollProgress();
  new LanguageSwitcher();
  new NavbarScroll();
  new MobileMenu();
  new ScrollReveal();
  new TextSplitReveal();
  new MagneticButton();
  new TiltCard();

  // Lenis 平滑滾動實例
  const smoothScroll = new LenisSmoothScroll();
  // 首頁按鈕智慧行為（傳入 SmoothScroll 實例）
  new HomeLinkBehavior(smoothScroll);

  // 觸發頁面進入動畫（從其他頁面進來時）
  requestAnimationFrame(() => {
    document.body.classList.add('page-loaded');
  });
});
