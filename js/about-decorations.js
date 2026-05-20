/* ============================================
   全站飄浮裝飾元素系統（深海氣泡上升感）
   ============================================
   設計原則：
   - 元素持續向上飄移（即使頁面靜止）
   - 加上視差滾動，深度感更強
   - 配比：圓點 + 線條變多、方框變小
   - 寧靜、低調、不干擾閱讀
*/

class FloatingDecorations {
  constructor() {
    this.container = null;
    this.elements = [];
    this.scrollY = 0;
    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    this.init();
  }

  init() {
    if (this.isTouchDevice) return;

    this.container = document.createElement('div');
    this.container.id = 'floating-decorations';
    this.container.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
    `;

    document.body.style.position = 'relative';
    document.body.insertBefore(this.container, document.body.firstChild);

    this.createElements();

    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
    }, { passive: true });

    this.animate();
  }

  createElements() {
    // 配比調整：圓點 + 線條變多、方框變小
    const configs = [
      { type: 'circle',  count: 5,  sizeRange: [40, 110]  },
      { type: 'ring',    count: 4,  sizeRange: [60, 140]  },
      { type: 'dot',     count: 15, sizeRange: [3, 8]     },  // 大幅增加
      { type: 'line',    count: 8,  sizeRange: [60, 160]  },  // 增加
      { type: 'square',  count: 3,  sizeRange: [18, 36]   }   // 變小
    ];

    const pageHeight = document.body.scrollHeight || window.innerHeight * 3;

    configs.forEach(config => {
      for (let i = 0; i < config.count; i++) {
        const size = this.randomBetween(config.sizeRange[0], config.sizeRange[1]);
        const x = Math.random() * 100;
        const y = Math.random() * pageHeight;

        // 視差速度（滾動相關）
        const parallaxSpeed = this.randomBetween(0.1, 0.4);

        // 氣泡上升動畫
        // 不同元素類型不同上升速度，營造前後景深度
        const riseSpeedBase = {
          'dot':    this.randomBetween(40, 90),    // 小圓點較快（前景）
          'circle': this.randomBetween(80, 150),   // 圓暈較慢（後景）
          'ring':   this.randomBetween(70, 140),
          'line':   this.randomBetween(60, 120),
          'square': this.randomBetween(80, 130)
        };
        const riseDuration = riseSpeedBase[config.type] || 90;

        // 水平漂移幅度（微小，像水流）
        const swayX = this.randomBetween(-25, 25);
        const swayDuration = this.randomBetween(8, 18);

        // 隨機起始延遲（讓元素不同時刻運動）
        const riseDelay = this.randomBetween(-riseDuration, 0); // 負值讓動畫已經在進行中
        const swayDelay = this.randomBetween(-swayDuration, 0);

        // 外層：視差容器
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
          position: absolute;
          left: ${x}%;
          top: ${y}px;
          width: ${size}px;
          height: ${size}px;
          will-change: transform;
        `;

        // 中層：氣泡上升（無限循環）
        const riseLayer = document.createElement('div');
        riseLayer.style.cssText = `
          width: 100%;
          height: 100%;
          animation: bubbleRise ${riseDuration}s linear ${riseDelay}s infinite;
        `;

        // 內層：左右搖擺（像水流晃動）
        const swayLayer = document.createElement('div');
        swayLayer.style.cssText = `
          width: 100%;
          height: 100%;
          --sway-x: ${swayX}px;
          animation: bubbleSway ${swayDuration}s ease-in-out ${swayDelay}s infinite alternate;
        `;

        // 最內層：實際視覺元素
        const visual = this.createElement(config.type, size);
        visual.style.width = '100%';
        visual.style.height = '100%';

        swayLayer.appendChild(visual);
        riseLayer.appendChild(swayLayer);
        wrapper.appendChild(riseLayer);
        this.container.appendChild(wrapper);

        this.elements.push({
          wrapper: wrapper,
          baseY: y,
          parallaxSpeed: parallaxSpeed
        });
      }
    });
  }

  createElement(type, size) {
    const el = document.createElement('div');

    switch (type) {
      case 'circle':
        // 圓暈（後景）
        el.style.background = 'radial-gradient(circle, rgba(0, 212, 163, 0.06) 0%, rgba(0, 212, 163, 0) 70%)';
        el.style.borderRadius = '50%';
        break;

      case 'ring':
        // 圓環
        el.style.border = '1px solid rgba(0, 212, 163, 0.08)';
        el.style.borderRadius = '50%';
        break;

      case 'dot':
        // 小亮點（前景，像水中氣泡）
        el.style.background = 'rgba(0, 212, 163, 0.3)';
        el.style.borderRadius = '50%';
        el.style.boxShadow = '0 0 10px rgba(0, 212, 163, 0.4)';
        break;

      case 'line':
        // 細線（隨機角度）
        el.style.height = '1px';
        el.style.background = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)';
        el.style.transform = `rotate(${Math.random() * 180}deg)`;
        el.style.transformOrigin = 'center';
        break;

      case 'square':
        // 小方框（旋轉）
        el.style.border = '1px solid rgba(255, 255, 255, 0.07)';
        el.style.transform = `rotate(${Math.random() * 45}deg)`;
        break;
    }

    return el;
  }

  randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  animate() {
    // 視差效果：頁面滾動時元素額外位移
    this.elements.forEach(item => {
      const offset = this.scrollY * item.parallaxSpeed;
      item.wrapper.style.transform = `translateY(${-offset}px)`;
    });

    requestAnimationFrame(() => this.animate());
  }
}

/* 注入動畫 CSS */
if (!document.getElementById('floating-decorations-style')) {
  const style = document.createElement('style');
  style.id = 'floating-decorations-style';
  style.textContent = `
    @keyframes bubbleRise {
      0% {
        transform: translateY(100vh);
      }
      100% {
        transform: translateY(-100vh);
      }
    }
    @keyframes bubbleSway {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(var(--sway-x, 20px));
      }
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
  new FloatingDecorations();
});
