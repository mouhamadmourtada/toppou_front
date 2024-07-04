import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAxios from '../../Hook/useAxios';
import { FaDollarSign, FaCalendarAlt, FaSignature, FaInfoCircle } from "react-icons/fa";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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
                                        <td className='font-medium p-2 text-primaire flex items-center'><FaInfoCircle className='mr-2'/>Description :</td>
                                        <td className='font-light text-tertiaire'>{finance.description}</td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='font-medium p-2 text-primaire flex items-center'><FaDollarSign className='mr-2'/>Montant :</td>
                                        <td className='font-light text-tertiaire'>{finance.montant}</td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='font-medium p-2 text-primaire flex items-center'><FaSignature className='mr-2'/>Date de Signature :</td>
                                        <td className='font-light text-tertiaire'>{finance.dateSignature}</td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='font-medium p-2 text-primaire flex items-center'><FaCalendarAlt className='mr-2'/>Date d'Obtention :</td>
                                        <td className='font-light text-tertiaire'>{finance.dateObtentionEffective}</td>
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
