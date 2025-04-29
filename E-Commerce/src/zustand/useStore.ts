import { create } from "zustand";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface StoreState {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchProducts: () => Promise<void>;
  getProductById: (id: number) => Product | void;
}

export const useStore = create<StoreState>((set, get) => ({
  products: [],
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  fetchProducts: async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    set({ products });
  },

  getProductById: (id) => get().products.find((product) => product.id === id),
}));
