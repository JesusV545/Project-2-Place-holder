function addToCart(id, name, imageURL, price) {
    const cartItem = { id, name, imageURL, price };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const source = document.getElementById("cart-template").innerHTML;
const template = Handlebars.compile(source);
const html = template({ cartItems });
document.getElementById("cart-items").innerHTML = html;
