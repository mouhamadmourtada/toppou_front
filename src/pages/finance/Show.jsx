import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAxios from '../../Hook/useAxios';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

// Importer les images


const ShowFinance = () => {
    const [finance, setFinance] = useState({});
    const { financeId } = useParams();
    
    const url = `http://localhost:8080/financements/${financeId}`;
    
    const { responseAxios, error, loading, fetchData } = useAxios({
        url: url,
        method: 'GET',
        body: null,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (responseAxios) {
            setFinance(responseAxios);
            console.log(finance);
        }
    }, [responseAxios]);

    return (
        <div>
            {/* Breadcrumb */}
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
                                <Link className='text-tertiaire' to="/app/finance/liste">Finance</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-primaire font-semibold">Detail {finance.id}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            {   
                finance && (
                    <div className="px-12 py-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <table className='table-auto w-full'>
                                <tbody>
                                    <tr className='border-b border-gray-100'>
                                        <td className='font-bold text-lg p-2 text-primaire flex items-center'>
                                            <img src="/images/description.jpeg" alt="Description" className='mr-2 w-6 h-6'/>Description :
                                        </td>
                                        <td className='font-bold text-lg text-tertiaire'>{finance.description}</td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='font-bold text-lg p-2 text-primaire flex items-center'>
                                            <img src="/images/montant.jpeg" alt="Montant" className='mr-2 w-6 h-6'/>Montant :
                                        </td>
                                        <td className='font-bold text-lg text-tertiaire'>{finance.montant}</td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='font-bold text-lg p-2 text-primaire flex items-center'>
                                            <img src="/images/objectif.jpeg" alt="Date de Signature" className='mr-2 w-6 h-6'/>Objectif :
                                        </td>
                                        <td className='font-bold text-lg text-tertiaire'>{finance.objectif}</td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='font-bold text-lg p-2 text-primaire flex items-center'>
                                            <img src="/images/datefinancement.webp" alt="Date d'Obtention" className='mr-2 w-6 h-6'/>Date d'Obtention :
                                        </td>
                                        <td className='font-bold text-lg text-tertiaire'>{finance.dateObtentionEffective}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ShowFinance;
