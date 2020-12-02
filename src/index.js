shoppingCart = [] 
taxRate = 12.5

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

addItemToCart()
addItemToCart()


//Calculate tax
function calculatesTax() {
    subtotal = 0;
   //formula to calculate gst total x taxRate / 100
    for (var i in shoppingCart) {
       subtotal += Math.round((shoppingCart[i].price * 100) /100) * shoppingCart[i].quantity;
    } 
        const taxAmount = subtotal * taxRate / 100;
        console.log(`The total sales tax amount for the shopping cart: $${taxAmount}`)

        
 //Calculates total price in shopping cart
function calculatesTotal() {
    let totalBeforeTax = 0;
    for (var i in shoppingCart) {
         totalBeforeTax += shoppingCart[i].price * shoppingCart[i].quantity;  
 
    } 
        const newTotal = totalBeforeTax + taxAmount;
     console.log(`The total price in your shopping bag is: $${newTotal}`)
}
calculatesTotal();
}
calculatesTax();
