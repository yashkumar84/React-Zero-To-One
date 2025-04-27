import { Button } from "@/components/ui/button";
import { useCartStore } from "@/zustand/useCartStore";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { items, removeFromCart, clearCart } = useCartStore();
  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (acc, item) => acc + Number((item.price * 85).toFixed(0)) * item.quantity,
    0
  );

  if (items.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty!</h2>
        <Button onClick={() => navigate("/")}>Go Shopping</Button>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="grid gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">
                  {" "}
                  ₹{(item.price * 85).toFixed(0)} X {item.quantity}
                </p>
              </div>
            </div>
            <Button
              variant={"destructive"}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t py-6 flex justify-between items-center ">
        <h3 className="text-2xl font-bold ">Total :₹{totalPrice} </h3>
        <Button variant={"outline"} onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
