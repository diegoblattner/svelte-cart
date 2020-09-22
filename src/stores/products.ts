import { writable } from 'svelte/store';
import type { Product } from '../models/product';

export const products = writable<Product[]>([]);

export const loadProducts = (newProducts: Product[]) => products.set(newProducts);
