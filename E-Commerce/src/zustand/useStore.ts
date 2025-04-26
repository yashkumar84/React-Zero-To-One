import { create } from "zustand";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface StoreState {
  products: Product[];
  fetchProducts: () => Promise<void>;
  getProductById: (id: number) => Product | void;
}

export const useStore = create<StoreState>((set, get) => ({
  products: [],
  fetchProducts: async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    set({ products });
  },

  getProductById: (id) => get().products.find((product) => product.id === id),
}));
