/* === 時間軸滾動進度填充 === */
class TimelineScrollProgress {
  constructor() {
    this.timeline = document.querySelector('.timeline');
    this.items = document.querySelectorAll('.timeline-item');
    this.init();
  }

  init() {
    if (!this.timeline) return;

    window.addEventListener('scroll', () => this.updateProgress(), { passive: true });
    this.updateProgress();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });

    this.items.forEach(item => observer.observe(item));
  }

  updateProgress() {
    const rect = this.timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = rect.top - windowHeight * 0.5;
    const end = rect.bottom - windowHeight * 0.5;

    let progress;
    if (start > 0) {
      progress = 0;
    } else if (end < 0) {
      progress = 100;
    } else {
      progress = (Math.abs(start) / (Math.abs(start) + end)) * 100;
    }

    this.timeline.style.setProperty('--scroll-progress', `${progress}%`);
  }
}

/* === 技能卡片：滑鼠位置追蹤光暈 === */
class SkillCardGlow {
  constructor() {
    this.cards = document.querySelectorAll('.skill-card');
    this.init();
  }

  init() {
    if (!this.cards.length) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    this.cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }
}

/* === 作品清單錯位進場（每個項目延遲 30ms 出現）=== */
class WorksListReveal {
  constructor() {
    this.blocks = document.querySelectorAll('.works-list-block');
    this.init();
  }

  init() {
    if (!this.blocks.length) return;

    this.blocks.forEach(block => {
      const items = block.querySelectorAll('.works-list-item');
      // 為每個項目套用初始狀態
      items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(15px)';
        item.style.transition = `opacity 0.6s var(--ease-out-expo) ${i * 0.03}s, transform 0.6s var(--ease-out-expo) ${i * 0.03}s, color 0.4s var(--ease-out-expo), border-color 0.4s var(--ease-out-expo), padding-left 0.4s var(--ease-out-expo)`;
      });

      // 觀察整個區塊
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            items.forEach(item => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      observer.observe(block);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TimelineScrollProgress();
  new SkillCardGlow();
  new WorksListReveal();
});
