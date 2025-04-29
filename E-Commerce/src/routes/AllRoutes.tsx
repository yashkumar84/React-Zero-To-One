import Dashboard from "@/modules/auth/pages/Dashboard";
import LoginPage from "@/modules/auth/pages/Login";
import Register from "@/modules/auth/pages/Register";
import CartPage from "@/modules/cart/pages/CartPage";
import ProductPage from "@/modules/products/pages/ProductPage";
import Search from "@/modules/products/pages/Search";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import HomePage from "@/shared/pages/HomePage";
import { useRoutes } from "react-router-dom";

const AllRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoute>
          <CartPage />
        </ProtectedRoute>
      ),
    },
    { path: "/product/:id", element: <ProductPage /> },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <Register /> },
    { path: "/search", element: <Search /> },
  ]);
  return routes;
};

export default AllRoutes;
