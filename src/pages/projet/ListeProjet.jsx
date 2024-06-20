import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AddButton from '../../components/AddButton';
import useAxios from '../../Hook/useAxios';
import MdIcon from '../../components/MdIcon';


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"


const ListeProjet = () => {
    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL;

    const urlListe = `${apiUrl}projets`; // API endpoint for projects

    const [projects, setProjects] = useState([]);

    const { responseAxios, error, loading, fetchData } = useAxios({
        url: urlListe,
        method: "GET",
        body: null,
        headers: {
            "Content-type": "application/json"
        }
    });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (responseAxios) {
            setProjects(responseAxios._embedded.projets);
            console.log(projects)
        }
    }, [responseAxios]);

    const goToAddProject = () => {
        navigate("/projet/create");
    };

    const handleView = (id) => {
        navigate(`/projet/show/${id}`)
    }

    const handleEdit = (id) => {
        navigate(`/projet/edit/${id}`)
    }

    const handleDelete = (id) => {
        console.log("delete projet")
    }

    return (
        <div>
            <div className='my-3 font-semibold'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/dashboard">Home</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        {/* <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/admin">Admin</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/role">Role</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem> */}
                       
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-semibold">Liste projets</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>

            
            <div className='flex justify-between py-2'>
                <h2 className="mt-3 text-lg font-bold text-tertiaire">Liste des projets</h2>
                <AddButton onClick={goToAddProject}>Nouveau projet</AddButton>
            </div>
            {projects && projects.length > 0 &&
                <div className='bg-white'>
                    <div className="overflow-x-auto rounded shadow-xl">
                        <table className="table-auto w-full">
                            <thead className='align-left'>
                                <tr className='bg-primaire text-white text-xs font-semi-bold tracking-wide uppercase'>
                                    <th className='px-2 text-left py-3 uppercase'>ID</th>
                                    <th className='px-2 text-left py-3 uppercase'>Nom</th>
                                    {/* <th className='px-2 text-left py-3 uppercase'>Description</th> */}
                                    <th className='px-2 text-left py-3 uppercase'>Chef de projet</th>
                                    <th className='px-2 text-left py-3 uppercase'>Date Creation</th>
                                    <th className='px-2 text-left py-3 uppercase'>Date Modif</th>
                                    <th className='max-w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-tertiaire'>
                                {projects.map((project, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-3 py-3 border-b">{project.id}</td>
                                        <td className="px-3 py-3 border-b">{project.nom}</td>
                                        {/* <td className="px-3 py-3 border-b">{project.description}</td> */}
                                        <td className="px-3 py-3 border-b">{project.chef_projet_id}</td>
                                        <td className="px-3 py-3 border-b">{project.createdAt}</td>
                                        <td className="px-3 py-3 border-b">{project.updatedAt}</td>
                                        <td className='border-b justify-between align-items-center text-sm px-3 py-3 border-l w-12'>
                                            <div className="mx-auto px-4 border-2 border-gray-200 flex justify-center rounded items-center space-x-2 text-sm max-w-20 shadow-xl p-0.5 bg-gray-100">
                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleView(project.id)}>
                                                    <MdIcon className="" aria-hidden="true" icon={"ViewIcon"} />
                                                </div>

                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleEdit(project.id)}>
                                                    <MdIcon className="w-4 h-4" aria-hidden="true" icon={"EditIcon"} />
                                                </div>

                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleDelete(project.id)}>
                                                    <MdIcon className="w-4 h-4 text-red-500" aria-hidden="true" icon={"TrashIcon"} />

                                                </div>

                                               
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
}

export default ListeProjet;
