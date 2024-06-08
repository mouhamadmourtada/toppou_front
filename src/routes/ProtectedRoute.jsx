import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "../provider/authProvider";
import Layout from "../layout/Layout"

export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    if (!token) {
      console.log("redirection vers login")
      return <Navigate to="/login" />;
    }
  
    // If authenticated, render the child routes
    return (
      // <Layout>

        <Outlet/>
      // </Layout>
    )
      
  };