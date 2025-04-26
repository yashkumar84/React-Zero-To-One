import Dashboard from "@/modules/auth/pages/Dashboard";
import LoginPage from "@/modules/auth/pages/Login";
import Register from "@/modules/auth/pages/Register";
import CartPage from "@/modules/cart/pages/CartPage";
import ProductPage from "@/modules/products/pages/ProductPage";
import HomePage from "@/shared/pages/HomePage";
import { useRoutes } from "react-router-dom";

const AllRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "/cart", element: <CartPage /> },
    { path: "/product/:id", element: <ProductPage /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <Register /> },
  ]);
  return routes;
};

export default AllRoutes;
