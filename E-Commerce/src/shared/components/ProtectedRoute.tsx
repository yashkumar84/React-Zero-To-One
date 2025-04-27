import { useAuthStore } from "@/zustand/useAuthStore";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
