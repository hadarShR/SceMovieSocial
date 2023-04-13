import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const AdminRoute = () => {
  const { user, isAdmin } = UserAuth();

  return isAdmin && user ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminRoute;
