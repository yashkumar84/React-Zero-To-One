import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./useStore";
import { useAuthStore } from "./useAuthStore";
import { toast } from "sonner";

interface CartItems extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItems[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const { user } = useAuthStore.getState();
        if (!user) {
          alert("Please Login To add to Cart");
          return;
        }

        const existing = get().items.find((item) => item.id === product.id);
        if (existing) {
          set({
            items: get().items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
          toast.warning(`${product.title} is Already in Cart`);
        } else {
          set({ items: [...get().items, { ...product, quantity: 1 }] });
          toast.success(`${product.title} Added To Cart`);
        }
      },

      removeFromCart: (id) => {
        const removedItem = get().items.find((i) => i.id === id);
        set({
          items: get().items.filter((item) => item.id !== id),
        });

        toast.success(`${removedItem?.title} Remover From Cart`);
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
