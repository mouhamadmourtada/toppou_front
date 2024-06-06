import React from "react";
import { useAuth } from "../provider/authProvider";
import Layout from "../layout/Layout"
const Dashboard = () => {
    const { setToken } = useAuth();

    const handleLogout = () => {
        setToken(null);
    };
    return (
        // il faut mettre des bordure rouge très claire
        <div>
            <h1>Dashboard</h1>
            <button className="btn btn-primary" onClick={handleLogout}>
                Se déconnecter
            </button>
           
        </div>
    );
}
export default Dashboard;

