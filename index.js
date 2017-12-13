var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemPrice=Math.ceil(Math.random()*100)
console.log(itemPrice)
var itemName= {[item]: itemPrice}
cart.push(itemName)
console.log([item] + " has been added to your cart.")
return cart // write your code here
}

function viewCart() {
if (cart.length==0){
  console.log("Your shopping cart is empty.")
}
else if (cart.length==1){
  console.log("In your cart you have "+ cart[0][0] + "at $"+ cart[0][1])
}
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
