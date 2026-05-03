/* === 跟隨滑鼠的模糊光暈效果（修正版：更貼近游標）=== */
class CursorGlow {
  constructor() {
    this.glow = document.getElementById('glow');
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.currentX = this.mouseX;
    this.currentY = this.mouseY;
    // 緩動係數從 0.06 提升到 0.15，光暈更貼近游標
    this.easing = 0.15;
    this.init();
  }

  init() {
    if (!this.glow) return;

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouseX = e.touches[0].clientX;
        this.mouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    this.animate();
  }

  animate() {
    this.currentX += (this.mouseX - this.currentX) * this.easing;
    this.currentY += (this.mouseY - this.currentY) * this.easing;

    this.glow.style.transform =
      `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;

    requestAnimationFrame(() => this.animate());
  }
}

/* === 英雄區塊視差效果 === */
class HeroParallax {
  constructor() {
    this.heroBg = document.querySelector('.hero-bg');
    this.heroContent = document.querySelector('.hero-content');
    this.init();
  }

  init() {
    if (!this.heroBg) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (scrollY < heroHeight) {
        const progress = scrollY / heroHeight;
        this.heroBg.style.transform = `scale(${1.05 + progress * 0.05}) translateY(${scrollY * 0.3}px)`;

        if (this.heroContent) {
          this.heroContent.style.opacity = 1 - progress * 1.2;
          this.heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    }, { passive: true });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CursorGlow();
  new HeroParallax();
});
