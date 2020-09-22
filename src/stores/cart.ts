import { writable, derived } from 'svelte/store';
import type { Product } from '../models/product';
const keepOrder = []; // keeps the items added to cart in order of insertion

interface CartItems {
  [id: string]: {
    item: Product;
    qty: number;
    total: number;
  }
}

export const cart = writable<CartItems>({});
export const cartTotal = derived(cart, (items) => Object.keys(items).reduce((sum, id) => sum + items[id].total, 0));
export const cartItems = derived(cart, (items) => keepOrder.map((id) => items[id]));

export const addToCart = (id: string, item: Product, qty = 1) => {
  cart.update((prev) => {
    const updated = { ...prev };
    const newItem = updated[id] || { item, qty: 0, total: 0 };
    const newQty = newItem.qty + qty;
    const newTotal = newQty * newItem.item.price;

    const index = keepOrder.indexOf(id);
    if (newQty < 1) {
      delete updated[id];
      keepOrder.splice(index, 1);
    } else {
      updated[id] = {
        item: newItem.item,
        qty: newQty,
        total: newTotal,
      };
      if (index === -1) {
        keepOrder.push(id);
      }
    }

    return updated;
  })
};

export const removeFromCart = (id: string) => {
  cart.update((prev) => {
    const updated = { ...prev };
    const index = keepOrder.indexOf(id);
    keepOrder.splice(index, 1);
    delete updated[id];
    return updated;
  });
}
