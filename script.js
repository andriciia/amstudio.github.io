document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.header__nav');
    const body = document.body;
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Остальной код (модальные окна, формы и т.д.)
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.modal__close');
    const bookingBtn = document.getElementById('booking-btn');
    
    function toggleModal() {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        body.style.overflow = modal.style.display === 'block' ? 'hidden' : '';
    }
    
    if (bookingBtn) bookingBtn.addEventListener('click', toggleModal);
    if (closeBtn) closeBtn.addEventListener('click', toggleModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) toggleModal();
    });
    
    // Обработка формы
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ваша заявка принята! Мы свяжемся с вами для подтверждения записи.');
            toggleModal();
            this.reset();
        });
    }
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                if (window.innerWidth <= 992) {
                    burger.classList.remove('active');
                    nav.classList.remove('active');
                    body.style.overflow = '';
                }
            }
        });
    });
});