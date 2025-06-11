document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Валидация формы
            const name = document.getElementById('name');
            const phone = document.getElementById('phone');
            const service = document.getElementById('service');
            const date = document.getElementById('date');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                showError(name, 'Пожалуйста, введите ваше имя');
                isValid = false;
            }
            
            if (!phone.value.trim()) {
                showError(phone, 'Пожалуйста, введите ваш телефон');
                isValid = false;
            } else if (!/^[\d\s()+ -]+$/.test(phone.value)) {
                showError(phone, 'Пожалуйста, введите корректный номер телефона');
                isValid = false;
            }
            
            if (service.value === '') {
                showError(service, 'Пожалуйста, выберите услугу');
                isValid = false;
            }
            
            if (!date.value) {
                showError(date, 'Пожалуйста, выберите дату');
                isValid = false;
            }
            
            if (isValid) {
                // Здесь можно добавить AJAX-запрос для отправки формы
                alert('Спасибо за вашу заявку! Мы свяжемся с вами для подтверждения записи.');
                bookingForm.reset();
            }
        });
        
        function showError(input, message) {
            const formGroup = input.closest('.form-group');
            let error = formGroup.querySelector('.error-message');
            
            if (!error) {
                error = document.createElement('div');
                error.className = 'error-message';
                formGroup.appendChild(error);
            }
            
            error.textContent = message;
            input.classList.add('error');
            
            input.addEventListener('input', function() {
                error.textContent = '';
                input.classList.remove('error');
            }, { once: true });
        }
    }
});
