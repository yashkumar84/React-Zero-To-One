import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-">
        <Link to={"/"} className="text-xl font-bold text-blue-600">
          SmartCart
        </Link>

        <div className="flex-1 mx-6 max-w-xl w-full">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search For Products"
              className="pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Link to={"/cart"} className="relative">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>
          <Link to={"/dashboard"}>
            <UserCircle />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
