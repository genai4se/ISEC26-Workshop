// Get the navbar element
const navbar = document.querySelector('.navbar');

// Function to add a "sticky" class to the navbar when you reach its scroll position
function makeNavbarSticky() {
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Add an event listener to call the function on scroll
window.onscroll = function() {
    makeNavbarSticky();
};



// Shuffle list items to create a balanced two-column layout
function shuffleListItems() {
    const list = document.getElementById("list");
    const items = Array.from(list.getElementsByTagName("li"));
    
    items.forEach((item, index) => {
        if (index % 2 === 0) {
            item.style.pageBreakAfter = "always";
        }
    });
}

shuffleListItems();
