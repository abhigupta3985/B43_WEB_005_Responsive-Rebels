
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.account-link, .nav-icon').forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Clicked navigation item:', e.currentTarget.textContent.trim());
        });
    });

    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    searchButton.addEventListener('click', function() {
        console.log('Search query:', searchInput.value);
    });

    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    
    leftArrow.addEventListener('click', function() {
        console.log('Navigate carousel left');
    });
    
    rightArrow.addEventListener('click', function() {
        console.log('Navigate carousel right');
    });

    document.querySelectorAll('.shop-now-btn').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Shop now clicked for:', 
                this.closest('.deal-card')?.querySelector('.deal-title')?.textContent || 
                'main promotion');
        });
    });
});





// ----------drops section-----------

// Elements
const cardSlider = document.getElementById('cardSlider');
const sliderNextBtn = document.getElementById('sliderNext');
const getAppBtn = document.getElementById('getAppBtn');
const appModal = document.getElementById('appModal');
const closeModal = document.getElementById('closeModal');
const productCards = document.querySelectorAll('.product-card');

// Variables for slider
let currentPosition = 0;
const cardWidth = 215; // Card width + gap
const visibleCards = 7;
const totalCards = productCards.length;
const maxSlides = totalCards - visibleCards;

// Next button click handler
sliderNextBtn.addEventListener('click', () => {
    if (currentPosition < maxSlides) {
        currentPosition++;
        updateSliderPosition();
    } else {
        // Reset to beginning when reached the end
        currentPosition = 0;
        updateSliderPosition();
    }
});

// Update slider position
function updateSliderPosition() {
    cardSlider.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
}

// Show modal when "Get the app" button is clicked
getAppBtn.addEventListener('click', () => {
    appModal.style.display = 'flex';
});

// Show modal when any product card is clicked
productCards.forEach(card => {
    card.addEventListener('click', () => {
        appModal.style.display = 'flex';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    appModal.style.display = 'none';
});

// Close modal when clicking outside of it
appModal.addEventListener('click', (e) => {
    if (e.target === appModal) {
        appModal.style.display = 'none';
    }
});



    /* <!-- ---------------footer-------------- --> */

// Add newsletter form functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email) {
                alert('Thank you for signing up for our newsletter!');
                this.querySelector('input').value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});