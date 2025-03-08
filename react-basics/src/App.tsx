import { Link } from "react-router-dom";
import "./App.css";
import AllRoutes from "./component/AllRoutes";

function App() {
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
    </>
  );
}

export default App;
