
class ContactForm {
  constructor() {
    this.form = document.getElementById('contactForm');
    
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };

    console.log('Form data:', formData);
    
  
    this.form.reset();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});
