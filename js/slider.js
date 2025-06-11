document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Автопрокрутка
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Остановка автопрокрутки при наведении
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Свайп для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }
});
