
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