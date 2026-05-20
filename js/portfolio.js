/* === 設計頁面：作品網格進場與篩選 === */

class PortfolioGrid {
  constructor() {
    this.cards = document.querySelectorAll('.work-card');
    this.buttons = document.querySelectorAll('.filter-btn');
    this.filterCountEl = document.querySelector('.filter-count .count-num');
    this.emptyState = document.querySelector('.empty-state');
    this.observer = null;
    this.isFiltering = false;

    this.init();
  }

  init() {
    if (!this.cards.length) return;

    // 初始化滾動進場觀察
    this.setupRevealObserver();

    // 篩選按鈕事件
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isFiltering) return; // 動畫進行中防止重複點擊
        const category = btn.dataset.filter;
        this.applyFilter(category);
        this.updateButtonState(btn);
      });
    });

    // 初始顯示全部數量
    this.updateCount(this.cards.length);
  }

  /* 設定 IntersectionObserver 處理首次進場動畫 */
  setupRevealObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    });

    this.cards.forEach(card => this.observer.observe(card));
  }

  /* 套用篩選（含明顯的淡出/淡入切換動畫）*/
  applyFilter(category) {
    this.isFiltering = true;

    // === 第一階段：淡出（500ms）===
    this.cards.forEach(card => {
      card.classList.remove('visible');
      card.classList.add('fading-out');
    });

    setTimeout(() => {
      // === 第二階段：DOM 切換 ===
      let visibleCount = 0;
      const visibleCards = [];

      this.cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === 'all' || cardCategory === category;

        if (shouldShow) {
          card.classList.remove('filtered-out');
          visibleCards.push(card);
          visibleCount++;
        } else {
          card.classList.add('filtered-out');
        }

        // 移除淡出狀態，準備淡入
        card.classList.remove('fading-out');
      });

      // 更新數量
      this.updateCount(visibleCount);

      // 空狀態判斷
      if (this.emptyState) {
        this.emptyState.classList.toggle('visible', visibleCount === 0);
      }

      // === 第三階段：錯位延遲淡入（每張延遲 60ms）===
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          visibleCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 60);
          });

          // 全部完成後解除鎖定
          const totalDuration = visibleCards.length * 60 + 1000;
          setTimeout(() => {
            this.isFiltering = false;
          }, totalDuration);
        });
      });
    }, 500);
  }

  updateButtonState(activeBtn) {
    this.buttons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  updateCount(count) {
    if (!this.filterCountEl) return;
    this.filterCountEl.textContent = String(count).padStart(2, '0');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioGrid();
});
