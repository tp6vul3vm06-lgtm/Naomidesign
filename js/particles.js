/* ============================================
   全站粒子效果：拖曳尾跡 + 點擊噴發
   ============================================ */

class ParticleSystem {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.lastTrailTime = 0;
    this.trailInterval = 25; // 拖曳粒子產生間隔（毫秒）
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    // 偵測觸控裝置
    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    this.init();
  }

  init() {
    if (this.isTouchDevice) return;

    this.createCanvas();
    this.bindEvents();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particle-canvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9998;
      mix-blend-mode: screen;
    `;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
    this.ctx.scale(dpr, dpr);
  }

  bindEvents() {
    // 滑鼠移動：產生拖曳粒子
    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      // 計算移動速度
      const dx = e.clientX - this.lastMouseX;
      const dy = e.clientY - this.lastMouseY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // 只有在滑鼠移動有一定速度時才產生粒子（避免靜止時消耗效能）
      if (speed > 2 && now - this.lastTrailTime > this.trailInterval) {
        this.createTrailParticle(e.clientX, e.clientY);
        this.lastTrailTime = now;
      }

      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    }, { passive: true });

    // 滑鼠點擊：產生噴發粒子（射線狀）
    document.addEventListener('click', (e) => {
      this.createBurstParticles(e.clientX, e.clientY);
    });
  }

  // 拖曳粒子（緩慢淡出，輕微飄動）
  createTrailParticle(x, y) {
    this.particles.push({
      type: 'trail',
      x: x + (Math.random() - 0.5) * 8,
      y: y + (Math.random() - 0.5) * 8,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.1, // 略微向上飄
      size: Math.random() * 2 + 1,
      opacity: 0.6,
      life: 1,
      decay: 0.015,
      color: '0, 212, 163' // 主題綠色 RGB
    });
  }

  // 噴發粒子（從中心向外射線狀擴散）
  createBurstParticles(x, y) {
    const count = 18; // 噴發粒子數量
    for (let i = 0; i < count; i++) {
      // 隨機角度與速度
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const velocity = Math.random() * 4 + 2;

      this.particles.push({
        type: 'burst',
        x: x,
        y: y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: Math.random() * 2.5 + 1.5,
        opacity: 1,
        life: 1,
        decay: 0.025,
        color: '0, 212, 163'
      });
    }

    // 額外噴發幾個白色粒子（增加層次）
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 5 + 3;

      this.particles.push({
        type: 'burst',
        x: x,
        y: y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: Math.random() * 1.5 + 0.8,
        opacity: 0.8,
        life: 1,
        decay: 0.03,
        color: '255, 255, 255'
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // 更新與繪製粒子
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      // 更新位置
      p.x += p.vx;
      p.y += p.vy;

      // 噴發粒子有阻力（慢慢減速）
      if (p.type === 'burst') {
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.vy += 0.08; // 加上輕微重力
      }

      // 更新生命
      p.life -= p.decay;
      p.opacity = p.life * (p.type === 'burst' ? 1 : 0.6);

      // 移除已死亡粒子
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      // 繪製粒子（使用 radial gradient 製造光暈感）
      const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
      gradient.addColorStop(0, `rgba(${p.color}, ${p.opacity})`);
      gradient.addColorStop(0.4, `rgba(${p.color}, ${p.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${p.color}, 0)`);

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
      this.ctx.fill();

      // 中心亮點
      this.ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem();
});
