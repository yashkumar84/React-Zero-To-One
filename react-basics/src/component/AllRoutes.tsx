import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import ProtectedRoute from "./ProtectedRoute";
import DashBoard from "../pages/DashBoard";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import ProductListing from "../pages/ProductListing";

const AllRoutes = () => {
  const allRoutes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <About /> },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashBoard />
        </ProtectedRoute>
      ),
      children: [{ path: "/dashboard/settings", element: <Settings /> }],
    },
    { path: "/login", element: <Login /> },
    { path: "/product-listing/:id/:id1", element: <ProductListing /> },
  ]);
  return allRoutes;
};

export default AllRoutes;
