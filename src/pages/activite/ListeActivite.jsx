import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddButton from '../../../components/AddButton';
import useAxios from '../../../Hook/useAxios';

const ListeActivite = () => {
    const navigate = useNavigate();

    const urlListe = "http://localhost:8080/activities"; // API endpoint for activities

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
            setActivities(responseAxios._embedded.activities);
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
                                    <th className='px-2 text-left py-3 uppercase'>Etat</th>
                                    <th className='px-2 text-left py-3 uppercase'>Date début</th>
                                    <th className='px-2 text-left py-3 uppercase'>Date fin</th>
                                    <th className='max-w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-tertiaire'>
                                {activities.map((activity, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-3 py-3 border-b">{activity.id}</td>
                                        <td className="px-3 py-3 border-b">{activity.libelle}</td>
                                        <td className="px-3 py-3 border-b">{activity.etat}</td>
                                        <td className="px-3 py-3 border-b">{activity.date_debut_activite}</td>
                                        <td className="px-3 py-3 border-b">{activity.date_fin_activite}</td>
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

export default ListeActivite;
