import ProductCard from "@/modules/products/components/ProductCard";
import { useStore } from "@/zustand/useStore";
import { useEffect } from "react";

const HomePage = () => {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default HomePage;
