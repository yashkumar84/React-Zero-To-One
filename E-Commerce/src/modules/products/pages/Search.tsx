import { useStore } from "@/zustand/useStore";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const { products, searchQuery } = useStore();
  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.length > 0 ? (
        filtered.map((p) => (
          <ProductCard
            id={p.id}
            title={p.title}
            image={p.image}
            price={p.price}
            key={p.id}
            category={p.category}
            description={p.description}
          />
        ))
      ) : (
        <p>No Result Found</p>
      )}
    </div>
  );
};

export default Search;
