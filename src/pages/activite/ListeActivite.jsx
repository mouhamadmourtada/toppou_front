import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddButton from '../../components/AddButton';
import useAxios from '../../Hook/useAxios';

const ListeActivite = () => {
    const navigate = useNavigate();
    
    const apiUrl = import.meta.env.VITE_API_URL;


    const urlListe = `${apiUrl}activites`; // API endpoint for activities

    const [activities, setActivities] = useState([]);

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
            setActivities(responseAxios._embedded.activites);
        }
    }, [responseAxios]);

    const goToAddActivity = () => {
        navigate("/app/admin/activity/create");
    };

    return (
        <div>
            <div className="breadcrumb">
                <span className="breadcrumb-item">
                    <a href="/activities">
                        <i className="HomeIcon"></i> Activities
                    </a>
                </span>
            </div>
            <div className='flex justify-between py-2'>
                <h2 className="mt-3 text-lg font-bold text-tertiaire">Liste des activités</h2>
                <AddButton onClick={goToAddActivity}>Nouvelle activité</AddButton>
            </div>
            {activities && activities.length > 0 &&
                <div className='bg-white'>
                    <div className="overflow-x-auto rounded shadow-xl">
                        <table className="table-auto w-full">
                            <thead className='align-left'>
                                <tr className='bg-primaire text-white text-xs font-semi-bold tracking-wide uppercase'>
                                    <th className='px-2 text-left py-3 uppercase'>ID</th>
                                    <th className='px-2 text-left py-3 uppercase'>Libelle</th>
                                    <th className='px-2 text-left py-3 uppercase'>dateDebutActivite</th>
                                    <th className='px-2 text-left py-3 uppercase'>dateFinEffective</th>
                                    <th className='px-2 text-left py-3 uppercase'>etat</th>
                                    <th className='max-w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-tertiaire'>
                                {activities.map((activity, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-3 py-3 border-b">{activity.id}</td>
                                        <td className="px-3 py-3 border-b">{activity.libelle}</td>
                                        <td className="px-3 py-3 border-b">{activity.dateDebutActivite}</td>
                                        <td className="px-3 py-3 border-b">{activity.dateFinEffective}</td>
                                        <td className="px-3 py-3 border-b">{activity.etat}</td>
                                        <td className='border-b flex justify-center items-center space-x-2 text-sm px-3 py-3 border-l'>
                                        <td className='border-b flex justify-center items-center space-x-2 text-sm px-3 py-3 border-l'>
                                            <div className="px-4 border-2 border-gray-200 flex justify-center rounded items-center space-x-2 text-sm max-w-20 shadow-xl p-0.5 bg-gray-100">
                                                <div className="text-secondaire cursor-pointer" onClick={() => handleView(role.id)}>
                                                    <svg width="15" height="13" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.57141 7.5C1.57141 7.5 4.37661 1.5 9.2857 1.5C14.1948 1.5 17 7.5 17 7.5C17 7.5 14.1948 13.5 9.2857 13.5C4.37661 13.5 1.57141 7.5 1.57141 7.5Z" stroke="#929EAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M9.2857 9.21429C10.2325 9.21429 11 8.44677 11 7.5C11 6.55323 10.2325 5.78571 9.2857 5.78571C8.33892 5.78571 7.57141 6.55323 7.57141 7.5C7.57141 8.44677 8.33892 9.21429 9.2857 9.21429Z" stroke="#929EAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>

                                                <div className="text-secondaire cursor-pointer" onClick={() => handleEdit(role.id)}>
                                                    <svg width="13" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 9.5058L5 10.0458L5.5 7.0058L11.23 1.2958C11.323 1.20207 11.4336 1.12768 11.5554 1.07691C11.6773 1.02614 11.808 1 11.94 1C12.072 1 12.2027 1.02614 12.3246 1.07691C12.4464 1.12768 12.557 1.20207 12.65 1.2958L13.71 2.3558C13.8037 2.44876 13.8781 2.55936 13.9289 2.68122C13.9797 2.80308 14.0058 2.93379 14.0058 3.0658C14.0058 3.19781 13.9797 3.32852 13.9289 3.45037C13.8781 3.57223 13.8037 3.68284 13.71 3.7758L8 9.5058Z" stroke="#929EAE" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M12.5 10.0059V13.0059C12.5 13.2711 12.3946 13.5254 12.2071 13.713C12.0196 13.9005 11.7652 14.0059 11.5 14.0059H2C1.73478 14.0059 1.48043 13.9005 1.29289 13.713C1.10536 13.5254 1 13.2711V3.50586C1 3.24064 1.10536 2.98629 1.29289 2.79875C1.48043 2.61122 1.73478 2.50586 2 2.50586H5" stroke="#929EAE" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>

                                                <div className="text-secondaire cursor-pointer" onClick={() => handleDelete(role.id)}>
                                                    <svg width="11" height="13" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 4.5H2M2 4.5H12M2 4.5V12.1C2 12.3304 2.10536 12.55 2.29289 12.7121C2.48043 12.8743 2.73478 12.9643 3 12.9643H10C10.2652 12.9643 10.5196 12.8743 10.7071 12.7121C10.8946 12.55 11 12.3304 11 12.1V4.5H2ZM3.5 4.5V3.25C3.5 3.05109 3.57902 2.86032 3.71967 2.71967C3.86032 2.57902 4.05109 2.5 4.25 2.5H7.75C7.94891 2.5 8.13968 2.57902 8.28033 2.71967C8.42098 2.86032 8.5 3.05109 8.5 3.25V4.5M5.75 7V10M7.25 7V10" stroke="#929EAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
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

export default ListeActivite;
