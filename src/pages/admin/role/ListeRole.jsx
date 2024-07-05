import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddButton from '../../../components/AddButton';
import useAxios from '../../../Hook/useAxios';
import MdIcon from '../../../components/MdIcon';

const ListeRole = () => {
    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL;


    const urlListe = `${apiUrl}roles`; // API endpoint for roles

    const [roles, setRoles] = useState([]);

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
            setRoles(responseAxios._embedded.roles); // Adjust according to the actual response structure
        }
    }, [responseAxios]);

    const goToAddRole = () => {
        navigate("/admin/role/create");
    };

    const handleView = (id) => {
        console.log("View role with ID:", id);
        navigate(`/admin/role/show/${id}`)
        // Implement view functionality
        navigate(`/admin/role/show/${id}`);
       
    };

    const handleEdit = (id) => {
        console.log("Edit role with ID:", id);
        navigate(`/admin/role/edit/${id}`)
        // Implement edit functionality
        navigate(`/admin/role/edit/${id}`);
    };

    const handleDelete = (id) => {
        console.log("Delete role with ID:", id);
        // Implement delete functionality
    };

    return (
        <div>
            <div className="breadcrumb">
                <span className="breadcrumb-item">
                    <a href="/roles">
                        <i className="HomeIcon"></i> Roles
                    </a>
                </span>
            </div>
            <div className='flex justify-between py-2'>
                <h2 className="mt-3 text-lg font-bold text-tertiaire">Liste des rôles</h2>
                <AddButton onClick={goToAddRole}>Nouveau rôle</AddButton>
            </div>
            {roles && roles.length > 0 &&
                <div className='bg-white'>
                    <div className="overflow-x-auto rounded shadow-xl">
                        <table className="table-auto w-full">
                            <thead className='align-left'>
                                <tr className='bg-primaire text-white text-xs font-semi-bold tracking-wide uppercase'>
                                    <th className='px-2 text-left py-3 uppercase'>ID</th>
                                    <th className='px-2 text-left py-3 uppercase'>Libelle</th>
                                    <th className='px-2 text-left py-3 uppercase'>Description</th>
                                    <th className='max-w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-tertiaire'>
                                {roles.map((role, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-3 py-3 border-b">{role.id}</td>
                                        <td className="px-3 py-3 border-b">{role.libelle}</td>
                                        <td className="px-3 py-3 border-b">{role.description}</td>
                                       
                                        <td className='border-b justify-between align-items-center text-sm px-3 py-3 border-l w-12'>
                                            <div className="mx-auto px-4 border-2 border-gray-200 flex justify-center rounded items-center space-x-2 text-sm max-w-20 shadow-xl p-0.5 bg-gray-100">
                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleView(role.id)}>
                                                    <MdIcon className="" aria-hidden="true" icon={"ViewIcon"} />
                                                </div>

                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleEdit(role.id)}>
                                                    <MdIcon className="w-4 h-4" aria-hidden="true" icon={"EditIcon"} />
                                                </div>

                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleDelete(role.id)}>
                                                    {/* <svg width="15" height="17"  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 4.5H2M2 4.5H12M2 4.5V12.1C2 12.3304 2.10536 12.55 2.29289 12.7121C2.48043 12.8743 2.73478 12.9643 3 12.9643H10C10.2652 12.9643 10.5196 12.8743 10.7071 12.7121C10.8946 12.55 11 12.3304 11 12.1V4.5H2ZM3.5 4.5V3.25C3.5 3.05109 3.57902 2.86032 3.71967 2.71967C3.86032 2.57902 4.05109 2.5 4.25 2.5H7.75C7.94891 2.5 8.13968 2.57902 8.28033 2.71967C8.42098 2.86032 8.5 3.05109 8.5 3.25V4.5M5.5 6.5V10.5M7.5 6.5V10.5" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg> */}
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
};

export default ListeRole;
