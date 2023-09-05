import { Navigate, Outlet } from "react-router";

function ProtectedRoute({ user, children, redirectPath = "/login" }) {
  if (!user) return <Navigate to={redirectPath} replace />;
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
