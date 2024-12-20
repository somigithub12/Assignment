# Assignment
# task
# Assignment
# task

This code  which i implemets is defines a task for fetching and displaying a collection of products on a webpage, with options for sorting and loading more products.

Task Breakdown:
Fetching Products:

The fetchAndDisplayProducts function makes an API request to https://interveiw-mock-api.vercel.app/api/getProducts to retrieve a list of products.
The products are fetched and then sorted according to the selected sorting option (by price, either ascending or descending).
The data returned from the API should be in an array format. If the data is not an array or an error occurs during the fetch, an error message is logged.
Sorting the Products:

The sortProducts function sorts the products based on the sortType parameter, which can be:
"priceLowToHigh": Sort by price in ascending order.
"priceHighToLow": Sort by price in descending order.
"default": No sorting is applied.
Displaying the Products:

The displayProducts function generates and displays product cards on the webpage. Each product card includes:
An image of the product.
The product's title.
The price of the first variant (if available).
A button to "ADD TO CART" (though it does not have a specific function in this code).
The cards are displayed with a delay for an animation effect, so they appear in a staggered manner.
Loading Indicator:

The toggleLoading function controls the visibility of the loading button (loadingButton). This button is shown while products are being fetched and hidden when the fetch is complete.
Sorting Event:

An event listener is attached to the sorting dropdown (<select id="sort">). When the user selects a new sorting option, the products are fetched and displayed again, sorted according to the new selection.
Initial Fetch:

The fetchAndDisplayProducts function is called when the page is loaded, fetching and displaying the products without any sorting applied initially.
HTML Structure:
<div class="sort-section">: Contains a heading and a dropdown menu to select the sorting option.
<div class="card-container">: A container where the product cards are dynamically inserted.
<div id="loadingButton">: A section for the "Load More" button, which is initially visible to show a loading state.
CSS and JavaScript:
CSS: The styles for the product cards, sorting dropdown, loading button, and other elements are linked via index.css. The styles are assumed to control the layout, animations, and visibility of elements.
JavaScript: The logic for fetching products, sorting them, handling loading states, and dynamically generating HTML content is in index.js.
Purpose:
This code creates a simple dynamic product listing page with sorting functionality (by price). The page fetches product data from a mock API, displays it as cards with product information, and allows the user to sort the products by price. The loading state ensures the user knows when the products are being loaded from the API.





