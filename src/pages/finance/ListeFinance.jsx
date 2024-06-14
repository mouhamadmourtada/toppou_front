import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddButton from '../../../components/AddButton';
import useAxios from '../../../Hook/useAxios';

const ListeFinance = () => {
    const navigate = useNavigate();

    const urlListe = "http://localhost:8080/financements"; // API endpoint for finances

    const [finances, setFinances] = useState([]);

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
            setFinances(responseAxios._embedded.finances);
        }
    }, [responseAxios]);

    const goToAddFinance = () => {
        navigate("/app/admin/finance/create");
    };

    return (
        <div>
            <div className="breadcrumb">
                <span className="breadcrumb-item">
                    <a href="/finances">
                        <i className="HomeIcon"></i> Finances
                    </a>
                </span>
            </div>
            <div className='flex justify-between py-2'>
                <h2 className="mt-3 text-lg font-bold text-tertiaire">Liste des finances</h2>
                <AddButton onClick={goToAddFinance}>Nouveau finance</AddButton>
            </div>
            {finances && finances.length > 0 &&
                <div className='bg-white'>
                    <div className="overflow-x-auto rounded shadow-xl">
                        <table className="table-auto w-full">
                            <thead className='align-left'>
                                <tr className='bg-primaire text-white text-xs font-semi-bold tracking-wide uppercase'>
                                    <th className='px-2 text-left py-3 uppercase'>ID</th>
                                    <th className='px-2 text-left py-3 uppercase'>Description</th>
                                    <th className='px-2 text-left py-3 uppercase'>Montant</th>
                                    <th className='px-2 text-left py-3 uppercase'>Date de signature</th>
                                    <th className='max-w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-tertiaire'>
                                {finances.map((finance, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-3 py-3 border-b">{finance.id}</td>
                                        <td className="px-3 py-3 border-b">{finance.description}</td>
                                        <td className="px-3 py-3 border-b">{finance.montant}</td>
                                        <td className="px-3 py-3 border-b">{finance.date_signature}</td>
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

export default ListeFinance;
