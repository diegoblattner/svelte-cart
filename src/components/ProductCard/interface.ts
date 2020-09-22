import type { Product } from "../../models/product";

export interface ProductCardProps {
  product: Product;
  addToCart: (id: string, product: Product, qty: number) => void;
  removeFromCart: (id: string) => void;
}
