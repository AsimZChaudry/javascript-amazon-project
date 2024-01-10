console.log("hello");
import { cart } from "../data/cart.js";
let productsHTML = "";

products.forEach((product) => {
  productsHTML += `<div class="product-container">
  <div class="product-image-container">
    <img class="product-image"
      src=${product.image}>
  </div>

  <div class="product-name limit-text-to-2-lines">
    ${product.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars * 10}.png">
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
   ${(product.priceCents / 100).toFixed(2)}
  </div>

  <div class="product-quantity-container">
    <select  class="js-quantity-selector-${product.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>A
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
  </div>

  <button id="add-to-cart-button" class="add-to-cart-button button-primary js-add-to-cart" data-product-name="${
    product.name
  }" data-id="${product.id}">
    Add to Cart
  </button>
</div>`;

  document.getElementById("js-products-grid").innerHTML = productsHTML;
  let cartQuantity = 0;
  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    const productId = button.dataset.id;
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );

    button.addEventListener("click", () => {
      let existingProduct = false;
      let cartQuantity = 0;
      console.log("quantityi slector value", quantitySelector.value);
      cart.forEach((item) => {
        if (productId === item.id) {
          item.quantity += Number(quantitySelector.value);
          existingProduct = true;
        }
      });

      if (!existingProduct) {
        cart.push({
          id: button.dataset.id,
          quantity: Number(quantitySelector.value),
        });
      }
      console.log(cart);
      cart.forEach((item) => {
        console.log("crat");
        cartQuantity += item.quantity;
        console.log("cart repeat", cartQuantity);
      });

      document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
    });
  });
});
