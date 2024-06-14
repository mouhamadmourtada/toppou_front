import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddButton from '../../../components/AddButton';
import useAxios from '../../../Hook/useAxios';

const ListeDepense = () => {
    const navigate = useNavigate();

    const urlListe = "http://localhost:8080/expenses"; // API endpoint for expenses

    const [expenses, setExpenses] = useState([]);

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
            setExpenses(responseAxios._embedded.expenses);
        }
    }, [responseAxios]);

    const goToAddExpense = () => {
        navigate("/app/admin/expense/create");
    };

    return (
        <div>
            <div className="breadcrumb">
                <span className="breadcrumb-item">
                    <a href="/expenses">
                        <i className="HomeIcon"></i> Expenses
                    </a>
                </span>
            </div>
            <div className='flex justify-between py-2'>
                <h2 className="mt-3 text-lg font-bold text-tertiaire">Liste des dépenses</h2>
                <AddButton onClick={goToAddExpense}>Nouvelle dépense</AddButton>
            </div>
            {expenses && expenses.length > 0 &&
                <div className='bg-white'>
                    <div className="overflow-x-auto rounded shadow-xl">
                        <table className="table-auto w-full">
                            <thead className='align-left'>
                                <tr className='bg-primaire text-white text-xs font-semi-bold tracking-wide uppercase'>
                                    <th className='px-2 text-left py-3 uppercase'>ID</th>
                                    <th className='px-2 text-left py-3 uppercase'>Libelle</th>
                                    <th className='px-2 text-left py-3 uppercase'>Montant</th>
                                    <th className='px-2 text-left py-3 uppercase'>Date dépense</th>
                                    <th className='max-w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-tertiaire'>
                                {expenses.map((expense, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-3 py-3 border-b">{expense.id}</td>
                                        <td className="px-3 py-3 border-b">{expense.libelle}</td>
                                        <td className="px-3 py-3 border-b">{expense.montant}</td>
                                        <td className="px-3 py-3 border-b">{expense.date_depense}</td>
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

export default ListeDepense;
