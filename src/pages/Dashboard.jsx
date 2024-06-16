import React from "react";
import { useAuth } from "../provider/authProvider";
import Layout from "../layout/Layout"
import {Link} from "react-router-dom"
// il faut importer le localstorage service
import StorageService from "../services/StorageService"
import BarChart from "../components/Chart"

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
                        /                    
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-bold" >Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>


            <h1 className="font-bold text-2xl text-primaire mt-2">Dashboard</h1>

            {/* <button className="btn bg-gray-300 px-4 py-2 rounded m-3 " onClick={handleLogout}>
                Se déconnecter
            </button> */}

            <div className="h-full mt-2 w-full">

                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex bg-white p-6 rounded-2xl space-x-6 lg:w-1/6 md:w-1/3 ">
                        <div className="bg-[#F4F7FE] p-3 rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="text-primaire" width="30" height="30" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10c1.68 0 3.162.44 4.18 1.041c1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1m5.5-4c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4" clip-rule="evenodd"/></svg>
                        </div>
                        <div>
                            <p className="font-medium text-sm text-[#707EAE]">Chercheurs</p>
                            <p className="font-bold text-2xl text-primaire">100</p>
                        </div>

                    </div>

                    <div className="flex bg-white p-6 rounded-2xl space-x-6 w-1/6">
                        <div className="bg-[#F4F7FE] p-3 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="text-primaire" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120Zm-48-32.43L57.3 64L128 40.43L198.7 64Z"/></svg>                        </div>
                        <div>
                            <p className="font-medium text-sm text-[#707EAE]">Etudiants</p>
                            <p className="font-bold text-2xl text-primaire">300</p>
                        </div>

                    </div>

                    <div className="flex bg-white p-6 rounded-2xl space-x-6 w-1/6">
                        <div className="bg-[#F4F7FE] p-3 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primaire" width="30" height="30" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.386 9.648A20.388 20.388 0 0 1 24 3.503c11.294 0 20.45 9.155 20.45 20.449S35.294 44.402 24 44.402S3.55 35.245 3.55 23.951c0-3.946 1.119-7.631 3.055-10.756"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.819 23.824a2.193 2.193 0 0 1-4.387 0v0c0-1.211.982-2.193 2.193-2.193h.001c1.211 0 2.193.982 2.193 2.193Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.649 17.04h10.71a2.78 2.78 0 0 1 2.786 2.773v8.01a2.78 2.78 0 0 1-2.774 2.785H24.649a2.78 2.78 0 0 1-2.786-2.773v-8.01a2.78 2.78 0 0 1 2.774-2.786h.012Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.85 30.562v2.75a2.78 2.78 0 0 1-2.773 2.787H14.41a2.78 2.78 0 0 1-2.786-2.774V14.592a2.78 2.78 0 0 1 2.774-2.786h18.665a2.78 2.78 0 0 1 2.785 2.774v2.504M1.45 16.563l5.395-3.952l.725 6.648"/></svg>                        </div>
                        <div>
                            <p className="font-medium text-sm text-[#707EAE]">Dépenses</p>
                            <p className="font-bold text-2xl text-primaire">30k</p>
                        </div>

                    </div>

                    <div className="flex bg-white p-6 rounded-2xl space-x-6 w-1/6">
                        <div className="bg-[#F4F7FE] p-3 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primaire" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-4.18a2.988 2.988 0 0 0-5.64 0H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2Zm-7 0a1 1 0 1 1-1 1a1.003 1.003 0 0 1 1-1Zm-2 5l2.79 2.794l2.52-2.52L14 8h4v4l-1.276-1.311l-3.932 3.935L10 11.83l-2.586 2.584L6 13Zm9 10H5v-2h14Z"/></svg>
                        </div>
                        <div>
                            <p className="font-medium text-sm text-[#707EAE]">Projets</p>
                            <p className="font-bold text-2xl text-primaire">30</p>
                        </div>

                    </div>

                    <div className="flex bg-white p-6 rounded-2xl space-x-6 w-1/6">
                        <div className="bg-[#F4F7FE] p-3 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primaire" width="30" height="30" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.386 9.648A20.388 20.388 0 0 1 24 3.503c11.294 0 20.45 9.155 20.45 20.449S35.294 44.402 24 44.402S3.55 35.245 3.55 23.951c0-3.946 1.119-7.631 3.055-10.756"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.819 23.824a2.193 2.193 0 0 1-4.387 0v0c0-1.211.982-2.193 2.193-2.193h.001c1.211 0 2.193.982 2.193 2.193Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.649 17.04h10.71a2.78 2.78 0 0 1 2.786 2.773v8.01a2.78 2.78 0 0 1-2.774 2.785H24.649a2.78 2.78 0 0 1-2.786-2.773v-8.01a2.78 2.78 0 0 1 2.774-2.786h.012Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.85 30.562v2.75a2.78 2.78 0 0 1-2.773 2.787H14.41a2.78 2.78 0 0 1-2.786-2.774V14.592a2.78 2.78 0 0 1 2.774-2.786h18.665a2.78 2.78 0 0 1 2.785 2.774v2.504M1.45 16.563l5.395-3.952l.725 6.648"/></svg>                        </div>
                        <div>
                            <p className="font-medium text-sm text-[#707EAE]">Depenses</p>
                            <p className="font-bold text-2xl text-primaire">30k</p>
                        </div>

                    </div>
                    
                    



                </div>

                <div className="mt-6">
                    <div className="w-1/2 p-4 bg-white rounded-xl">
                        <h1 className="font-bold text-primaire text-2xl py-2">Dépenses</h1>
                        <BarChart />
                    </div>
                </div>



            </div>



            {/* <div>
                {userFromLocalStorage && (
                     <div>
                            <h2>Utilisateur</h2>
                            <p>{userFromLocalStorage.email}</p>
                      </div>
                 )    
                }
            </div> */}

           
            
           
        </div>
    );
}
export default Dashboard;

