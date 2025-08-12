// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Video Modal
const modal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close');
const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Course Buttons
document.querySelectorAll('.course-btn').forEach(button => {
    button.addEventListener('click', () => {
        const courseTitle = button.closest('.course-card').querySelector('h3').textContent;
        alert(`Starting course: ${courseTitle}`);
    });
});

// CTA Button
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' });
});
