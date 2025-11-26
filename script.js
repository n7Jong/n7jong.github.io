// Slide Navigation System
let currentSlide = 0;
const totalSlides = 5;
let isAnimating = false;

// Get all elements
const slides = document.querySelectorAll('.slide');
const navLinks = document.querySelectorAll('.nav-link');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize
function init() {
    updateSlide(0);
    updateNavigation();
}

// Update slide position
function updateSlide(slideIndex) {
    if (isAnimating || slideIndex < 0 || slideIndex >= totalSlides) return;
    
    isAnimating = true;
    
    // Remove all classes
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev', 'next');
    });
    
    // Set current slide
    slides[slideIndex].classList.add('active');
    
    // Set direction for other slides
    slides.forEach((slide, index) => {
        if (index < slideIndex) {
            slide.classList.add('prev');
        } else if (index > slideIndex) {
            slide.classList.add('next');
        }
    });
    
    currentSlide = slideIndex;
    updateNavigation();
    
    // Reset animation lock
    setTimeout(() => {
        isAnimating = false;
    }, 800);
}

// Update navigation active states
function updateNavigation() {
    // Update nav links
    navLinks.forEach((link, index) => {
        if (index === currentSlide) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    // Update arrow buttons
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Navigation link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const slideIndex = parseInt(link.getAttribute('data-slide'));
        updateSlide(slideIndex);
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.querySelector('i').classList.remove('fa-times');
            mobileMenuToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Indicator clicks
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const slideIndex = parseInt(indicator.getAttribute('data-slide'));
        updateSlide(slideIndex);
    });
});

// Arrow button clicks
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        updateSlide(currentSlide - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        updateSlide(currentSlide + 1);
    }
});

// Slide navigation buttons (View My Work, Get In Touch)
const slideNavBtns = document.querySelectorAll('.slide-nav-btn');
slideNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const slideIndex = parseInt(btn.getAttribute('data-slide'));
        updateSlide(slideIndex);
    });
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
            updateSlide(currentSlide - 1);
        }
    } else if (e.key === 'ArrowRight') {
        if (currentSlide < totalSlides - 1) {
            updateSlide(currentSlide + 1);
        }
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            if (currentSlide < totalSlides - 1) {
                updateSlide(currentSlide + 1);
            }
        } else {
            // Swipe right - previous slide
            if (currentSlide > 0) {
                updateSlide(currentSlide - 1);
            }
        }
    }
}

// Mouse wheel navigation (optional)
let wheelTimeout;
document.addEventListener('wheel', (e) => {
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
            // Scroll down - next slide
            if (currentSlide < totalSlides - 1) {
                updateSlide(currentSlide + 1);
            }
        } else if (e.deltaY < 0) {
            // Scroll up - previous slide
            if (currentSlide > 0) {
                updateSlide(currentSlide - 1);
            }
        }
    }, 100);
});

// Animate skill bars when Skills slide is active
function animateSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        const skillProgress = card.querySelector('.skill-progress');
        if (skillProgress) {
            const width = skillProgress.style.width;
            skillProgress.style.width = '0';
            setTimeout(() => {
                skillProgress.style.width = width;
            }, 100 + (index * 100));
        }
    });
}

// Watch for slide changes to trigger animations
const slideObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('active')) {
            const slideIndex = parseInt(mutation.target.getAttribute('data-slide'));
            
            // Trigger skill bar animation when Skills slide becomes active
            if (slideIndex === 2) {
                setTimeout(animateSkillBars, 300);
            }
        }
    });
});

// Observe all slides for class changes
slides.forEach(slide => {
    slideObserver.observe(slide, { attributes: true, attributeFilter: ['class'] });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the form data to a server
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Prevent body scroll on mobile
document.body.style.overflow = 'hidden';
document.documentElement.style.overflow = 'hidden';

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Log console message
console.log('%c Welcome to Jong\'s Portfolio! ', 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Navigate with arrow keys, swipe, or click navigation! ', 'color: #6366f1; font-size: 14px;');

// Initialize on load
init();
