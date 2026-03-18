export const formatPrice = (price: number) => {
  return `₹ ${price.toLocaleString('en-IN')}`;
};