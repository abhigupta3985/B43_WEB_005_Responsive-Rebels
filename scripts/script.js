
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


document.addEventListener('DOMContentLoaded', function() {
    const categoriesGrid = document.querySelector('.categories-grid');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    const categoryItems = document.querySelectorAll('.category-item');
    
    const totalProducts = categoryItems.length;
    
    const visibleProducts = 9;
    
    const itemWidth = 150; 
    
    const maxPages = Math.ceil(totalProducts / visibleProducts);
    
    let currentPage = 0;
    
    function updateArrows() {
      leftArrow.style.display = currentPage === 0 ? 'none' : 'flex';
      
      rightArrow.style.display = currentPage >= maxPages - 1 ? 'none' : 'flex';
    }
    
    function slideTo(pageIndex) {
      if (pageIndex < 0) pageIndex = 0;
      if (pageIndex >= maxPages) pageIndex = maxPages - 1;
      
      const translateX = -pageIndex * (visibleProducts * itemWidth);
      
      categoriesGrid.style.transform = `translateX(${translateX}px)`;
      
      currentPage = pageIndex;
      
      updateArrows();
    }
    
    updateArrows();
    
    leftArrow.addEventListener('click', function() {
      slideTo(currentPage - 1);
    });
    
    rightArrow.addEventListener('click', function() {
      slideTo(currentPage + 1);
    });
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        slideTo(currentPage - 1);
      } else if (e.key === 'ArrowRight') {
        slideTo(currentPage + 1);
      }
    });
  });




// ----------drops section-----------

const cardSlider = document.getElementById('cardSlider');
const sliderNextBtn = document.getElementById('sliderNext');
const getAppBtn = document.getElementById('getAppBtn');
const appModal = document.getElementById('appModal');
const closeModal = document.getElementById('closeModal');
const productCards = document.querySelectorAll('.product-card');

let currentPosition = 0;
const cardWidth = 215; 
const visibleCards = 7;
const totalCards = productCards.length;
const maxSlides = totalCards - visibleCards;

sliderNextBtn.addEventListener('click', () => {
    if (currentPosition < maxSlides) {
        currentPosition++;
        updateSliderPosition();
    } else {
        currentPosition = 0;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    cardSlider.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
}

getAppBtn.addEventListener('click', () => {
    appModal.style.display = 'flex';
});

productCards.forEach(card => {
    card.addEventListener('click', () => {
        appModal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    appModal.style.display = 'none';
});

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