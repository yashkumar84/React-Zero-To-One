import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductCard = ({ id, image, title, price }: ProductProps) => {
  return (
    <Card className="hover:shadow-md transition-all rounded-xl overflow-hidden border">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain mb-3 transition-transform duration-300 hover:scale-105"
        />
        <h3 className="text-base font-semibold kine-clamp-2">
          {title.substring(1, 15)}
        </h3>
        <p className="text-blue-600 font-bold text-lg mt-1">
          ₹{(price * 85).toFixed(0)}
        </p>
        <Link to={`/product/${id}`} className="w-full mt-3">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
