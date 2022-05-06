// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
}
// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
}


// Cart Working JS
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

// Making Function
function ready(){
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)

    for (let i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
}

// Remove Items From Cart
function  removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal();
}

// Update Total
function updateTotal(){ 
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (let i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quanity')[0];
        var price = parseFloat(priceElement.innerText.replace("R", ""));
        var quanity = quantityElement.value
        total = total + price * quanity;

        document.getElementsByClassName('total-price')[0].innerText = 'R' + total;
    }
}