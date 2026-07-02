// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;

        // WhatsApp integration
        const whatsappMessage = `Hello, I would like to book a service.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nService Request: ${message}`;
        const whatsappLink = `https://wa.me/254731712727?text=${encodeURIComponent(whatsappMessage)}`;

        // Show confirmation and open WhatsApp
        alert('Thank you! Your request will be sent to WhatsApp.');
        window.open(whatsappLink, '_blank');

        // Reset form
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and equipment items
document.querySelectorAll('.service-card, .equipment-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Dark mode toggle (optional)
const darkModeToggle = localStorage.getItem('darkMode');
if (darkModeToggle === 'true') {
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.color = '#f5f5f5';
}

// Performance optimization - Lazy load images if any
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            observer.observe(img);
        });
    }
});

console.log('Kevin Njenga Biomedical Engineering Services - Website Loaded Successfully');
