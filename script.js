//case1 using filter on array
const discounted = [
  { productId: 12, label: "Smartphone" },
  { productId: 67, label: "Tablet" },
];

const cart = [
  { productId: 12, label: "Smartphone" },
  { productId: 43, label: "Laptop" },
  { productId: 67, label: "Tablet" },
];

const filteredCart = cart.filter(function hasDiscount(cartProduct) {
  for (const discountedProduct of discounted) {
    if (discountedProduct.productId === cartProduct.productId) {
      return true;
    }
  }
  return false;
});

//case 2 using method chaining
const fiveMostExpensive = cart
  .filter((product) => product.price > 100) // we then feed the result to the next method
  .sort((a, b) => b.price - a.price) // sort by price, descending (from the most expensive to the least expensive)
  .slice(0, 5); // first 5
