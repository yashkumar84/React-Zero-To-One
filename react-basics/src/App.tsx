// import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Service from "./pages/Service";
import ProductListing from "./pages/ProductListing";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import AllRoutes from "./component/AllRoutes";

function App() {
  // const [isLogin, setIsLogin] = useState<boolean>(true);
  // const [data, setData] = useState([
  //   "Yash",
  //   "Aryan",
  //   "Parth",
  //   "Ravi",
  //   "Ram",
  //   "Shyam",
  //   "Amit",
  // ]);
  // const [obj, setObj] = useState([{ name: "" }, {}, {}]);

  // return <>{isLogin ? <h1>Hello Yash</h1> : <h1>Please Login First</h1>}</>;

  // if (isLogin) {
  //   return <h1>Hello Yash</h1>;
  // } else {
  //   return <h1>Please Login </h1>;
  // }
  // return (
  //   <>
  //     {data.map((name, index) => (
  //       <>
  //         <h1 key={index}>Good Morning {name}</h1>
  //       </>
  //     ))}
  //   </>
  // );

  return (
    <>
      <div className="bg-blue-500 m-10">
        <Link className="m-2" to={"/"}>
          HomePage
        </Link>
        <Link className="m-2" to={"/about"}>
          About
        </Link>
        <Link className="m-2" to={"/service"}>
          Service
        </Link>
        <Link className="m-2" to={"/product-listing"}>
          Product Listing
        </Link>

        <Link className="m-2" to={"/login"}>
          Login
        </Link>
        <Link className="m-2" to={"/dashboard"}>
          DashBoard
        </Link>
      </div>
      <AllRoutes />

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/service" element={<Service />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
