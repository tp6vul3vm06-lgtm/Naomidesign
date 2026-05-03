/* === 設計頁面：作品網格進場與篩選 === */

class PortfolioGrid {
  constructor() {
    this.cards = document.querySelectorAll('.work-card');
    this.buttons = document.querySelectorAll('.filter-btn');
    this.filterCountEl = document.querySelector('.filter-count .count-num');
    this.emptyState = document.querySelector('.empty-state');
    this.observer = null;

    this.init();
  }

  init() {
    if (!this.cards.length) return;

    // 初始化滾動進場觀察
    this.setupRevealObserver();

    // 篩選按鈕事件
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.filter;
        this.applyFilter(category);
        this.updateButtonState(btn);
      });
    });

    // 初始顯示全部數量
    this.updateCount(this.cards.length);
  }

  /* 設定 IntersectionObserver 處理進場動畫 */
  setupRevealObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // 不要 unobserve，因為篩選後可能需要重新觸發
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    });

    this.cards.forEach(card => this.observer.observe(card));
  }

  /* 套用篩選 */
  applyFilter(category) {
    // 第一步：先讓所有卡片淡出（移除 visible class）
    this.cards.forEach(card => {
      card.classList.remove('visible');
    });

    // 第二步：等淡出動畫完成後，重新顯示符合條件的項目
    setTimeout(() => {
      let visibleCount = 0;

      this.cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === 'all' || cardCategory === category;

        if (shouldShow) {
          card.classList.remove('filtered-out');
          visibleCount++;
        } else {
          card.classList.add('filtered-out');
        }
      });

      // 更新數量
      this.updateCount(visibleCount);

      // 空狀態判斷
      if (this.emptyState) {
        this.emptyState.classList.toggle('visible', visibleCount === 0);
      }

      // 第三步：強制觸發 reflow 後，重新觸發進場動畫
      // 使用 requestAnimationFrame 確保 DOM 已重新排版
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // 重新觀察（讓在視窗內的卡片重新觸發 visible）
          this.cards.forEach(card => {
            if (!card.classList.contains('filtered-out')) {
              this.observer.unobserve(card);
              this.observer.observe(card);
            }
          });
        });
      });
    }, 400); // 等淡出動畫（1.2s）的前半部分完成
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
