import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";
interface IPropType {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: IPropType) => {
  const [isAuthenticated] = useState<boolean>(true);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
