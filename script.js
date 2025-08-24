// Global variables
let currentReveal = 0;
const totalReveals = 13;
let journeyStarted = false;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Add event listeners
    setupEventListeners();
    
    // Create additional stars
    createDynamicStars();
    
    // Update reveal counter
    updateRevealCounter();
    
    // Add scroll animations
    setupScrollAnimations();
}

function setupEventListeners() {
    // Smooth scrolling for anchor links
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
    
    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.classList.contains('start-journey-btn')) {
                startJourney();
            } else if (e.target.classList.contains('reveal-btn')) {
                revealNext();
            } else if (e.target.classList.contains('interactive-cake')) {
                makeWish();
            }
        }
    });
}

function createDynamicStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 50;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'dynamic-star';
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${2 + Math.random() * 3}
            