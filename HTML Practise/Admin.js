const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");

let searchVisible = false; // Track if the search form is currently visible

searchIcon.addEventListener("click", () => {
    if (searchVisible) {
        // If the search form is currently visible, hide it
        searchForm.classList.remove("active");
        searchVisible = false;
    } else {
        // If the search form is currently hidden, show it
        searchForm.classList.add("active");
        cartItemsContainer.classList.remove("active"); // Also hide the cart items container if it's visible
        searchVisible = true;
    }
});

const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

let cartVisible = false; // Track if the cart is currently visible

cartIcon.addEventListener("click", () => {
    if (cartVisible) {
        // If the cart is currently visible, hide it
        cartItemsContainer.classList.remove("active");
        cartVisible = false;
    } else {
        // If the cart is currently hidden, show it
        cartItemsContainer.classList.add("active");
        searchForm.classList.remove("active");
        cartVisible = true;
    }
});