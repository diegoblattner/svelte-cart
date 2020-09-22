export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  priceFormatted: string;
  description: string;
  attributes: {
    name: string;
    value: string;
  }[];
}
