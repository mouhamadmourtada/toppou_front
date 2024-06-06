import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "../provider/authProvider";

export const NonAuthRoute = () => {
    const { token } = useAuth();
    if (token) {
      return <Navigate to="/dashboard" />;
    }
  
    return <Outlet />;
  };