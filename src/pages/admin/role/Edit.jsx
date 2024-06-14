import React, { useState, useEffect } from 'react';
import useAxios from '../../../Hook/useAxios';
import { Loader } from '../../../components/Loader';
import { toast } from "sonner";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditRole = () => {

    const urlRoles = import.meta.env.VITE_API_URL+'roles';

    const navigate = useNavigate();
    const { id } = useParams(); // Get role id from the URL parameters
    const [libelle, setLibelle] = useState('');
    const [description, setDescription] = useState('');
    const { responseAxios, error, loading, fetchData } = useAxios({ url: `${urlRoles}/${id}`, method: 'PATCH' });
    const {responseAxios : responseGetRole, error : errorGetRole, loading : loadingGetRole, fetchData : fetchDataGetRole} = useAxios({
        url : `${urlRoles}/${id}`, 
        method : 'GET',
        body : null,
        headers : {
            "Content-type" : "application/json"
        }
    });

    const [hasSubmitted, setHasSubmitted] = useState(false);
    
    // Fetch existing role data
    useEffect(() => {
        fetchDataGetRole();
    }, [id]);

    useEffect(() => {
        if (responseGetRole) {
            setLibelle(responseGetRole.libelle);
            setDescription(responseGetRole.description);
        }
    }, [responseGetRole]);

    useEffect(() => {
        if (responseAxios && hasSubmitted) {
            setDescription('');
            setLibelle('');
            toast.success("Rôle modifié avec succès!");
            setTimeout(() => {
                navigate("/app/admin/role");
            }, 300);
        }
    }, [responseAxios, hasSubmitted]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        fetchData({ libelle, description });
    }

    return (
        <div className="min-h-full">
            {loading && (
                <div className='absolute h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-30'>
                    <Loader />
                </div>
            )}
            <div className='my-3 font-semibold'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link className='text-tertiaire' to="/app/dashboard">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link className='text-tertiaire' to="/app/admin">Admin</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link className='text-tertiaire' to="/app/admin/role">Role</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-primaire font-semibold">Modifier</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="bg-white w-full shadow-xl border-gray-200 border-2 rounded-xl lg:flex py-3 px-5">
                <div className="hidden lg:block w-1/2 lg:flex items-center py-10 justify-center rounded-xl">
                    <img src="/images/roles.png" alt="" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center align-items-center pt-0 lg:w-2/3 lg:px-8 xl:px-10">
                    <form onSubmit={handleSubmit} className='w-full max-w-96 border-2 rounded-lg border-gray-100 shadow px-5 py-10 mx-auto'>
                        <div className="">
                            <div className="flex-1 px-2">
                                <label className="block text-sm font-medium text-tertiaire text-primaire mb-0">Libellé</label>
                                <input 
                                    type="text"
                                    placeholder="Libelle"
                                    className="w-full mx-auto px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                    required
                                    value={libelle}
                                    onChange={(e) => setLibelle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-12 w-full">
                            <label className="block text-sm font-medium text-tertiaire text-primaire mb-0">Description</label>
                            <textarea
                                className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                placeholder="Mettez ici la description du role...."
                                required
                                value={description}
                                cols="6"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='mt-16 flex justify-center'>
                            <button
                                className="max-w-[200px] w-full transform rounded flex items-center justify-center bg-primaire hover:bg-primaire_hover px-3 py-2 text-sm font-medium capitalize text-white text-bold transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                type="submit"
                                disabled={loading}
                            >
                                <span className='mr-4'>Modifier</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z" />
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditRole;
