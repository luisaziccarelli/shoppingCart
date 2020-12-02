shoppingCart = [] 
taxRate = 12.5
//prompt("What item would you like to add to the shopping cart?")

// let answer = prompt("What item would you like to add to the shopping cart?")

// Add products to shopping cart of the same type
function addItemToCart(name, price, quantity) {
   for (let i = 0; i < shoppingCart.length; i +=1) {
       if (shoppingCart[i]. name === name) {
           shoppingCart[i].quantity += quantity;
           return;
       }
   }
   const item = {
       name: name,
       price: price,
       quantity: quantity
   }
   shoppingCart.push(item);
}

addItemToCart("Shower gel", 49.99, 2)
addItemToCart("Deodorant", 99.99, 2)
