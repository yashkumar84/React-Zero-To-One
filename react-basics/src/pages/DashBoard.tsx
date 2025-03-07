import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      DashBoard Page
      <Link className="m-20" to={"/dashboard/settings"}>
        Settings
      </Link>
      <Outlet />
    </div>
  );
};

export default DashBoard;
