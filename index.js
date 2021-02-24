
//Simple params example
function sayName(name="bob"){
  console.log(name);
}

sayName();
sayName("New Name");




//Complex example
// Function definition
//Default param placeholders for products array and object containing discountPercentage and salesTax
function calculateTotal(products=[], { discountPercentage=.25, salesTax }={}) {

    console.log(products, discountPercentage, salesTax);
    let result = 0;
    for (let i = 0; i < products.length; i++) {
      const { priceInCents, quantity } = products[i];
      result += priceInCents * quantity;
    }
  
    if (discountPercentage) result *= 1 - discountPercentage;
    return result * (1 + salesTax);
  }
  
  // Inputs
  const products = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const options = {discountPercentage: 0.1, salesTax: 0.0825 };
  
  // Function call  (passing in products array and object containing discountPercentage and salesTax)
  console.log(calculateTotal(products, options)); //> 8768.25