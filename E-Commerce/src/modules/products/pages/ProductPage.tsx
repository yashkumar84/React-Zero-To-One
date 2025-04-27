import { Button } from "@/components/ui/button";
import { useCartStore } from "@/zustand/useCartStore";
import { useStore } from "@/zustand/useStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const fetchProducts = useStore((state) => state.fetchProducts);
  const getProductById = useStore((state) => state.getProductById);
  const [loading, setLoading] = useState(true);
  const productId = Number(id);
  const product = getProductById(productId);
  const { addToCart } = useCartStore();

  useEffect(() => {
    if (!product) {
      fetchProducts().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [product, fetchProducts]);

  if (loading || !product)
    return <p className="text-center py-10">Loading Product .... </p>;

  return (
    <div className="min-h-screen px-8 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-10 ">
        <div className="flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full max-w-sm h-auto object-contain rounded-lg border p-4"
          />
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {product?.title}
            </h1>
            <p className="text-xl text-blue-700 font-semibold mt-4">
              {" "}
              ₹{product && (product.price * 85).toFixed(0)}
            </p>
            <p className="text-gray-700 mt-6 leading-relaxed">
              {product?.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </Button>
            <Button size={"lg"} variant={"outline"} className="w-full">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
