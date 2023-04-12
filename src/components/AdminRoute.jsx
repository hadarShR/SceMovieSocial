import { Route, Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const AdminRoute = ({ element: Component, ...rest }) => {
  const { user } = UserAuth();

  return (
    <Route
      {...rest}
      element={
        user && user.isAdmin ? <Component /> : <Navigate to="/" replace />
      }
    />
  );
};

export default AdminRoute;
