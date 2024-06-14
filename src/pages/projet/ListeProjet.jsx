import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddButton from '../../../components/AddButton';
import useAxios from '../../../Hook/useAxios';

const ListeProjet = () => {
    const navigate = useNavigate();

    const urlListe = "http://localhost:8080/projets"; // API endpoint for projects

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
            setProjects(responseAxios._embedded.projects);
        }
    }, [responseAxios]);

    const goToAddProject = () => {
        navigate("/app/admin/project/create");
    };

    return (
        <div>
            <div className="breadcrumb">
                <span className="breadcrumb-item">
                    <a href="/projects">
                        <i className="HomeIcon"></i> Projects
                    </a>
                </span>
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
                                    <th className='px-2 text-left py-3 uppercase'>Description</th>
                                    <th className='px-2 text-left py-3 uppercase'>Chef de projet</th>
                                    <th className='max-w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-tertiaire'>
                                {projects.map((project, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-3 py-3 border-b">{project.id}</td>
                                        <td className="px-3 py-3 border-b">{project.nom}</td>
                                        <td className="px-3 py-3 border-b">{project.description}</td>
                                        <td className="px-3 py-3 border-b">{project.chef_projet_id}</td>
                                        <td className='border-b flex justify-center items-center space-x-2 text-sm px-3 py-3 border-l'>
                                            <div className="px-4 border-2 border-gray-200 flex justify-center rounded items-center space-x-2 text-sm max-w-20 shadow-xl p-0.5 bg-gray-100">
                                                {/* Actions */}
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
