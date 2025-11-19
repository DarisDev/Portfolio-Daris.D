// Smooth scroll effect for navigation
document.addEventListener('DOMContentLoaded', function() {
    
    // Create floating particles effect
    createFloatingParticles();
    
    // Add typing effect to the main heading
    const heading = document.querySelector('h1');
    if (heading) {
        const originalText = heading.textContent;
        heading.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heading.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }
    
    // Add scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    const elements = document.querySelectorAll('p, img, hr');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Create floating particles background effect
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 15; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 3;
    const startX = Math.random() * 100;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    
    // set dynamic dimensions & position; visual styles & animation keyframes moved to CSS
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}%`;
    particle.style.bottom = '-10px';
    // per-particle translate offset using CSS custom property
    particle.style.setProperty('--translateX', `${Math.random() * 100 - 50}px`);
    particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
    
    container.appendChild(particle);
}

// Keyframes and base particle styles are now declared in `styles.css` so we remove dynamic injection.

// Moodboard Generator functionality
(function () {
  const ideas = [
    'Neo-brutalist dashboard with chunky typography.',
    'Calm productivity app using misty gradients.',
    'Playful onboarding flow inspired by arcade cabinets.',
    'Speculative weather UI blending particles and glassmorphism.',
    'Developer journal with tactile cards and sticky ink effects.',
  ];

  const messageEl = document.getElementById('moodboard-message');
  const buttonEl = document.getElementById('moodboard-button');

  if (messageEl && buttonEl) {
    function setRandomIdea() {
      const idea = ideas[Math.floor(Math.random() * ideas.length)];
      messageEl.textContent = idea;
    }

    buttonEl.addEventListener('click', setRandomIdea);
    setRandomIdea();
  }
})();