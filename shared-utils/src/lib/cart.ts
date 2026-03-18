import { Product } from '@nx-product-poc/shared-types';

let cart: Product[] = [];

export const addToCart = (product: Product) => {
  cart.push(product);
};

export const getCartCount = () => cart.length;

export const clearCart = () => {
  cart = [];
};