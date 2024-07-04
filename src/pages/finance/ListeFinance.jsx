import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
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

import { Link } from 'react-router-dom';


const ListeFinance = () => {
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;


    const urlListe = `${apiUrl}financements`; // API endpoint for finances

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
            setFinances(responseAxios._embedded.financements);
        }
    }, [responseAxios]);

    const goToAddFinance = () => {
        navigate("/finance/create");
    };

    const handleView = (id) => {
        navigate(`/finance/show/${id}`)
    }

    const handleEdit = (id) => {
        navigate(`/finance/edit/${id}`)
    }

    const handleDelete = (id) => {
        console.log("delete finance")
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
                        <BreadcrumbPage className="text-primaire font-semibold">Liste finances</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>


            <div className='flex justify-between py-2'>
                <h2 className="mt-3 text-lg font-bold text-tertiaire">Liste des finances</h2>
                <AddButton onClick={goToAddFinance}>Nouveau financement</AddButton>
            </div>
            {finances && finances.length > 0 &&
                <div className='bg-white'>
                    <div className="overflow-x-auto rounded shadow-xl">
                        <table className="table-auto w-full">
                            <thead className='align-left'>
                                <tr className='bg-primaire text-white text-xs font-semi-bold tracking-wide uppercase'>
                                    <th className='px-2 text-left py-3 uppercase'>ID</th>
                                    {/* <th className='px-2 text-left py-3 uppercase'>Description</th> */}
                                    <th className='px-2 text-left py-3 uppercase'>Date_Obtention</th>
                                    <th className='px-2 text-left py-3 uppercase'>objectif</th>
                                    <th className='px-2 text-left py-3 uppercase'>Montant</th>
                                    <th className='px-2 text-left py-3 uppercase'>Date de signature</th>
                                    <th className='max-w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-tertiaire'>
                                {finances.map((finance, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="px-3 py-3 border-b">{finance.id}</td>
                                        {/* <td className="px-3 py-3 border-b">{finance.description}</td> */}
                                        <td className="px-3 py-3 border-b">{finance.dateObtentionEffective}</td>
                                        <td className="px-3 py-3 border-b">{finance.objectif}</td>
                                        <td className="px-3 py-3 border-b">{finance.montant}</td>
                                        <td className="px-3 py-3 border-b">{finance.dateSignature}</td>
                                       
                                        <td className='border-b justify-between align-items-center text-sm px-3 py-3 border-l w-12'>
                                            <div className="mx-auto px-4 border-2 border-gray-200 flex justify-center rounded items-center space-x-2 text-sm max-w-20 shadow-xl p-0.5 bg-gray-100">
                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleView(finance.id)}>
                                                    <MdIcon className="" aria-hidden="true" icon={"ViewIcon"} />
                                                </div>

                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleEdit(finance.id)}>
                                                    <MdIcon className="w-4 h-4" aria-hidden="true" icon={"EditIcon"} />
                                                </div>

                                                <div className="text-tertiaire cursor-pointer" onClick={() => handleDelete(finance.id)}>
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

export default ListeFinance;
