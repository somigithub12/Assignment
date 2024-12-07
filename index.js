const apiURL = "https://interveiw-mock-api.vercel.app/api/getProducts";
const loadingButton = document.getElementById("loadingButton");
const toggleLoading = (isLoading) => {
    loadingButton.style.display = isLoading ? 'block' : 'none';
};
async function fetchAndDisplayProducts(sortType = "default") {
    toggleLoading(true);

    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const { data: products } = await response.json();

        if (!Array.isArray(products)) {
            throw new Error("The products data is not an array.");
        }

        // Sort Products
        const sortedProducts = sortProducts(products, sortType);

        // Display Products with Animation
        displayProducts(sortedProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
    } finally {
        toggleLoading(false);
    }
}

// Sort Products
const sortProducts = (products, sortType) => {
    switch (sortType) {
        case "priceLowToHigh":
            return [...products].sort((a, b) => a.price - b.price);
        case "priceHighToLow":
            return [...products].sort((a, b) => b.price - a.price);
        default:
            return products;
    }
};
const displayProducts = (products) => {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = ""; 

    products.forEach(({ product }, index) => {
        const firstVariantPrice = product.variants?.[0]?.price ?? "N/A";

        const productCard = document.createElement("div");
        productCard.className = "card";
        productCard.style.animationDelay = `${index * 0.3}s`; 
        productCard.innerHTML = `
            <div class="image-container">
                <img src="${product.image?.src}" alt="${product.image?.alt || 'Product Image'}" class="card-image">
           </div>
           <div class="card-content">
            <h2 class="card-title">${product.title}</h2>
            <p class="card-price">Rs. ${firstVariantPrice}</p>
            <button class="card-button"> 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                    <path d="M 3.5 6 A 1.50015 1.50015 0 1 0 3.5 9 L 6.2558594 9 C 6.9837923 9 7.5905865 9.5029243 7.7285156 10.21875 L 8.0273438 11.78125 L 11.251953 28.716797 C 11.835068 31.772321 14.527135 34 17.638672 34 L 36.361328 34 C 39.472865 34 42.166064 31.773177 42.748047 28.716797 L 45.972656 11.78125 A 1.50015 1.50015 0 0 0 44.5 10 L 10.740234 10 L 10.675781 9.6582031 C 10.272657 7.5455321 8.4069705 6 6.2558594 6 L 3.5 6 z M 11.3125 13 L 42.6875 13 L 39.800781 28.15625 C 39.484764 29.81587 38.051791 31 36.361328 31 L 17.638672 31 C 15.948808 31 14.516781 29.8158 14.199219 28.15625 L 14.199219 28.154297 L 11.3125 13 z M 20 36 A 3 3 0 0 0 20 42 A 3 3 0 0 0 20 36 z M 34 36 A 3 3 0 0 0 34 42 A 3 3 0 0 0 34 36 z"></path>
                </svg>
                ADD TO CART
            </button>
            </div>

        `;

        cardContainer.appendChild(productCard);
    });
};

// Event Listener for Sorting
document.getElementById("sort").addEventListener("change", (event) => {
    fetchAndDisplayProducts(event.target.value);
});

// Initial Fetch
fetchAndDisplayProducts();
