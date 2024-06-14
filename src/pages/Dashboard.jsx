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


import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  






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
                        <BreadcrumbLink className="text-tertiaire"  href="/">Homeq</BreadcrumbLink>
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


             <ResizablePanelGroup className="bg-white shadow-xl border-gray-100 broder-2 rounded-xl p-5 mt-5"
                direction="horizontal"
                // className="rounded-lg border"
                >
                <ResizablePanel defaultSize={50}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">One</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Two</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
                </ResizablePanelGroup>
            

            


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

