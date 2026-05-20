/* ============================================
   聯繫頁：表單驗證與送出
   ============================================ */

class ContactForm {
  constructor() {
    this.form = document.querySelector('.contact-form');
    this.submitBtn = document.querySelector('.form-submit');
    this.successBox = document.querySelector('.form-success');

    /* === Formspree 接入點 ===
     * 未來上線時：
     * 1. 到 https://formspree.io 註冊免費帳號
     * 2. 建立新表單，取得 endpoint URL（格式：https://formspree.io/f/XXXXXXXX）
     * 3. 把下方 null 改成您的 endpoint URL 字串
     * 4. 表單就會真的寄信到您的 Email
     */
    this.formspreeEndpoint = null; // 例：'https://formspree.io/f/XXXXXXXX'

    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // 即時驗證（離開欄位時驗證）—— 但僅在非示意模式下啟用
    if (this.formspreeEndpoint) {
      this.form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));

        // 輸入時清除錯誤狀態
        input.addEventListener('input', () => {
          const field = input.closest('.form-field');
          if (field) field.classList.remove('error');
        });
      });
    }
  }

  validateField(input) {
    const field = input.closest('.form-field');
    if (!field) return true;

    const value = input.value.trim();
    const isRequired = input.hasAttribute('required');
    const isEmail = input.type === 'email';

    // 必填檢查
    if (isRequired && !value) {
      this.showError(field, this.getMessage('required'));
      return false;
    }

    // Email 格式檢查
    if (isEmail && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.showError(field, this.getMessage('invalid.email'));
        return false;
      }
    }

    // 通過驗證
    field.classList.remove('error');
    return true;
  }

  validateAll() {
    let allValid = true;
    this.form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      if (!this.validateField(input)) allValid = false;
    });
    return allValid;
  }

  showError(field, message) {
    field.classList.add('error');
    const errorEl = field.querySelector('.form-error');
    if (errorEl) errorEl.textContent = message;
  }

  /* 從目前語言取訊息 */
  getMessage(key) {
    const lang = localStorage.getItem('lang') || 'zh-TW';
    if (typeof translations !== 'undefined' && translations[lang]) {
      return translations[lang][`contact.form.${key}`] || key;
    }
    return key;
  }

  async handleSubmit(e) {
    e.preventDefault();

    // 示意模式：完全不送出、不驗證
    if (!this.formspreeEndpoint) {
      return;
    }

    if (!this.validateAll()) return;

    // 鎖定按鈕
    this.submitBtn.disabled = true;
    const submitTextEl = this.submitBtn.querySelector('span');
    const originalText = submitTextEl ? submitTextEl.textContent : '';
    if (submitTextEl) submitTextEl.textContent = this.getMessage('sending');

    // 收集表單資料
    const formData = new FormData(this.form);

    try {
      // 真實送出（透過 Formspree）
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.showSuccess();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error('Form submit error:', err);
      alert(this.getMessage('error'));
      this.submitBtn.disabled = false;
      if (submitTextEl) submitTextEl.textContent = originalText;
    }
  }

  showSuccess() {
    this.form.style.display = 'none';
    if (this.successBox) {
      this.successBox.classList.add('visible');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});
