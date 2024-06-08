import React from "react";
import { useAuth } from "../provider/authProvider";
import Layout from "../layout/Layout"
import {Link} from "react-router-dom"
// il faut importer le localstorage service
import StorageService from "../services/StorageService"

// import { SlashIcon } from "@radix-ui/react-icons"
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"







const Dashboard = () => {
    const { setToken } = useAuth();

    const handleLogout = () => {
        setToken(null);
    };


    const userFromLocalStorage = StorageService.getUser();

    return (
        <div className="bg-my_white h-full">

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-tertiaire"  href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                    {/* <SlashIcon /> */}
                    /
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink >
                            <Link to = "app/todo" >Component</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                    {/* <SlashIcon /> */}
                    /
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-bold" >Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>


            <h1>Dashboard</h1>
            <button className="btn bg-gray-300 px-4 py-2 rounded m-3 " onClick={handleLogout}>
                Se déconnecter
            </button>

            <div>
                {userFromLocalStorage && (
                     <div>
                            <h2>Utilisateur</h2>
                            <p>{userFromLocalStorage.email}</p>
                      </div>
                 )    
                }
            </div>

           
            
           
        </div>
    );
}
export default Dashboard;

