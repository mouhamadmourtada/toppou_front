import React, { useState, useEffect } from 'react';
import useAxios from '../../../Hook/useAxios';
import { set } from 'react-hook-form';
// import { Loader } from 'lucide-react';
import { Loader } from '../../../components/Loader';
import { toast, Toaster } from "sonner"
// import {toast} from 


 
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Link, useNavigate } from 'react-router-dom';



const Create = () => {


    const navigate = useNavigate();

    const urlPosteRole = import.meta.env.VITE_API_URL+'roles';


    const [libelle, setLibelle] = useState('');
    const [description, setDescription] = useState('');
    const { responseAxios, error, loading, fetchData } = useAxios({ url : urlPosteRole, method : 'POST'});
    const [showMessage, setShowMessage] = useState(false);   
    const [hasSubmitted, setHasSubmitted] = useState(false); // New state to track form submission


    useEffect(() => {
        if(responseAxios && hasSubmitted){
            // setShowMessage(true);
            setDescription('');
            setLibelle('');
            toast.success("Rôle ajouté avec succès!")
            setTimeout(() => {
                navigate("/admin/role")

                // setShowMessage(false);
            }, 300);
        }
    }, [responseAxios, hasSubmitted] ); 
    


    const handleSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        fetchData({ libelle, description})
    }

    return (
        <div className="pb-10">

            {/* <h2 className="font-bold mb-8 placeholder-placeholder_color placeholder:text-sm placeholder:font-normal focus:border-primaire text-2xl text-primaire">Ajouter un role</h2> */}
            {
                loading &&
                <div className='absolute h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-30'>
                <Loader />

            </div>
            }

            <div className='my-3 font-semibold'>

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/dashboard">Home</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/admin">Admin</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/admin/role">Role</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-semibold">Nouveau</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>



            <div className="bg-white w-full shadow-xl border-gray-200 border-2 rounded-xl lg:flex pt-3 px-5 ">
                <div className="hidden lg:block w-1/2 lg:flex items-center pt-10 pb-3 justify-center rounded-xl">
                    <img src="/images/roles.png" alt="" />
                </div>

                <div class="w-full lg:w-1/2 flex flex-col justify-center align-items-center pt-0 lg:w-2/3 lg:px-8  xl:px-10 ">
                    <form onSubmit={handleSubmit} className='w-full max-w-96 border-2 rounded-lg border-gray-100 shadow px-5 py-10 mx-auto'>
                        <div className="">
                            <div class="flex-1 ">
                                <label className="block text-sm font-medium text-tertiaire text-primaire mb-0">Libellé</label>
                                <input 
                                    type="text"
                                    placeholder="Libelle" 
                                    className="w-full  mx-auto px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                    required
                                    value={libelle}
                                    onChange={(e) => setLibelle(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className="mt-8 w-full ">
                            <label className="block text-sm font-medium text-tertiaire text-primaire mb-0 ">Description</label>
                            <textarea 
                                className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none" 
                                placeholder="Mettez ici la description du role...."
                                required
                                value={description}
                                col = "6"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='mt-16 flex justify-center'>
                            <button 
                                className="w-full transform rounded flex items-center  justify-center  bg-primaire hover:bg-primaire_hover   px-3 py-3 text-sm font-medium capitalize text-white  text-bold  transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                type="submit"
                                disabled={loading}
                                >
                                    <span className='mr-4'>
                                        Ajouter
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                        <path d="M11 2H9v3h2z"/>
                                        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                    </svg>
                            </button>

                        </div>
                    </form>
                    
                    {/* {showMessage && <p className="text-green-500 text-center mt-4 bg-green-200 w-full p-3 rounded-xl ">Rôle ajouté avec succès!</p>} */}
                    {/* {error && <p className="text-red-500 text-center mt-4 w-full bg-red-100 p-3 rounded-xl">{error}</p>} */}
    
                </div>
            </div>
        </div>
    );
}

export default Create;

