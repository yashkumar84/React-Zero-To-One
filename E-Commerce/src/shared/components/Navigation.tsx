import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/zustand/useAuthStore";
import { useCartStore } from "@/zustand/useCartStore";
import { useStore } from "@/zustand/useStore";
import { Search, ShoppingCart, UserCircle } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const { user, loginWithGoogle, logout } = useAuthStore();
  const { items } = useCartStore();
  const { searchQuery, setSearchQuery } = useStore();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search");
  };

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
            <form onSubmit={handleSearch}>
              <Input
                type="text"
                placeholder="Search For Products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Link to={"/cart"} className="relative">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {items.length}
            </span>
          </Link>

          {user ? (
            <>
              <Button variant={"outline"} onClick={logout}>
                Logout
              </Button>
              <Link to={"/dashboard"}>
                <UserCircle />
              </Link>
            </>
          ) : (
            <>
              <Button variant={"outline"} onClick={loginWithGoogle}>
                Login with Google
              </Button>
              <Link to={"/login"}>
                <Button variant={"secondary"}>Login With Email</Button>
              </Link>

              <Link to={"/register"}>
                <Button variant={"secondary"}>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
