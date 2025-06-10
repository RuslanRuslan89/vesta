// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // отступ сверху
        behavior: 'smooth'
      });
    }
  });
});

// Активный пункт меню при скролле
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Обработка формы (пример)
if (document.getElementById('contact-form')) {
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо! Мы скоро с вами свяжемся.');
    this.reset();
  });
}

// Анимация при загрузке страницы
function animateOnScroll() {
  const animatedElements = document.querySelectorAll('.fade-in');

  animatedElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Ползунок интенсивности (для примера)
const slider = document.getElementById('toneSlider');
slider.addEventListener('input', function() {
  const value = this.value;
  const label = document.querySelector('#toneSlider + p');
  label.textContent = `Интенсивность: ${value}/10`;
});
