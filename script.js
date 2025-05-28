// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Form submission
document.querySelector('.cta-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Obrigado! Entraremos em contato através do e-mail: ${email}`);
    this.reset();
});

// Testimonials carousel auto-scroll
const carousel = document.querySelector('.testimonials-carousel');
if (carousel) {
    let scrollPosition = 0;
    const scrollSpeed = 1;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    setInterval(() => {
        if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
        } else {
            scrollPosition += scrollSpeed;
        }
        carousel.scrollLeft = scrollPosition;
    }, 50);
}

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});