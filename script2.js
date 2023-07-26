const cart = [
  { productId: 39, price: 15 },
  { productId: 12, price: 600 },
  { productId: 83, price: 920 },
  { productId: 43, price: 1200 },
  { productId: 67, price: 80 },
  { productId: 105, price: 700 },
];

//return the three most expensive products and keep original card array
function mostExpensive(cart) {
  const sortedCart = [...cart].sort((a, b) => b.price - a.price);
  return sortedCart.slice(0, 3);
}
