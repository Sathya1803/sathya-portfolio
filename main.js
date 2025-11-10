// Scroll animations with Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Add fade-in animation styles and observe elements
const animatedElements = document.querySelectorAll('.skill-card, .project-card');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Enhanced hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');

  // Prevent body scroll when menu is open
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Smooth scroll for anchor links
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

// Form submission handling
const contactForm = document.querySelector('.contact-section form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || document.getElementById('name').value;
    const email = formData.get('email') || document.getElementById('email').value;
    const message = formData.get('message') || document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Create mailto link (you can replace this with actual form submission)
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:sathyarajkumar183@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Reset form
    this.reset();
  });
}

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', function () {
    this.style.opacity = '1';
  });

  // Set initial style
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.3s ease';

  // If image is already loaded
  if (img.complete) {
    img.style.opacity = '1';
  }
});

// Add scroll effect to navbar
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add/remove scrolled class for styling
  if (scrollTop > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop;
});

// Add CSS class for scrolled navbar
const style = document.createElement('style');
style.textContent = `
  nav.scrolled {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.95);
  }
`;
document.head.appendChild(style);

// Typing animation for hero text (optional enhancement)
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  // Start typing animation after a short delay
  setTimeout(typeWriter, 500);
}
