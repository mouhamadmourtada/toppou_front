import React, { useEffect, useState } from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUser, FaPhoneAlt, FaAddressCard, FaStar, FaGraduationCap } from "react-icons/fa";
import { MdAttachEmail, MdDateRange } from "react-icons/md";
import { useParams } from 'react-router-dom';

import useAxios from '../../../Hook/useAxios';

const Show = () => {


    
    const [user, setUser] = useState({
    });
    
    // const userId = 
    // il faut recupérer le userId passé en paramètre
    const {userId} = useParams();
    
    const url = `http://localhost:8080/users/${userId}`
    
    const {responseAxios, error, loading, fetchData} = useAxios({
        url : url,
        method: 'GET',
        body : null,
        headers : {
            'Content-Type': 'application/json',
        }
    });


    useEffect(() => {
        fetchData()
        
    }, [])

    useEffect(() => {
        if(responseAxios){
            setUser(responseAxios)
            console.log(user)
        }
    }
    , [responseAxios])

    
    return (
        <div>
        {   
            user && (

                <div className="px-12 py-4 flex justify-between">
                    <div className=' w-1/4 mr-5'>
                        <div className="bg-white p-5 rounded-lg mb-5 shadow-md">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center space-x-4">
                                    <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Profile" className="w-24 h-24 rounded-full object-cover avatar border-4 border-gray-200" />
                                    <div className='w-full'>
                                        <h3 className="text-2xl font-bold text-primaire text-center my-2">
                                        <span>
                                            {`${user.prenom} ${user.nom}`}
                                        </span>                                     
                                        </h3>
                                        <p className="text-g text-tertiaire text-center font-light text-sm">Chercheur</p>
                                        <p className="text-g text-tertiaire text-center font-light text-sm">Là une petite description de l'utilisateur</p>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="mt-4 flex items-center justify-center">
                                <div className=''>
                                    <button className='bg-primaire text-white px-5 py-2 rounded-3xl mr-5 hover:bg-sky-950 hover:outline hover:outline-1'>Valider</button>
                                    <button className='bg-white text-primaire outline outline-1 px-4 py-2 rounded-3xl hover:bg-slate-50'>Contacter</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className='bg-white rounded-lg p-5 shadow-md'>
                            <div>
                                <span className='text-primaire flex items-center'><CiGlobe/><a href='#' className='ml-1'>Site Web</a></span>
                                <hr/>
                            </div>
                            <div>
                                <h3 className='text-primaire pt-3 flex items-center'><IoLogoLinkedin/><a href='#' className='ml-1'>Linkdin</a></h3>
                                <hr/>
                            </div>
                            <div>
                                <h3 className='text-primaire pt-3 flex items-center'><FaSquareXTwitter/><a href='#' className='ml-1'>Twitter</a></h3>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4 flex flex-col'>
                        <div className=" gap-4 mb-5">
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <table className='table-auto w-3/4'>
                                    <tbody>
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><FaUser className='mr-2'/>Username :</td>
                                            <td className='font-light text-tertiaire'>{user.username}</td>
                                        </tr>
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><FaPhoneAlt className='mr-2'/>Téléphone :</td>
                                            <td className='font-light text-tertiaire'>{user.telephone}</td>
                                        </tr>
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><MdAttachEmail className='mr-2'/>Email :</td>
                                            <td className='font-light text-tertiaire'>{user.email}</td>
                                        </tr>
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><MdDateRange className='mr-2'/>Date Naissance :</td>
                                            <td className='font-light text-tertiaire'>{user.dateNaissance}</td>
                                        </tr>
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><FaAddressCard className='mr-2'/>Adresse :</td>
                                            <td className='font-light text-tertiaire'>{user.adresse}</td>
                                        </tr>
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><FaStar className='mr-2'/>Titre :</td>
                                            <td className='font-light text-tertiaire'>{user.titre}</td>
                                        </tr>
                                        {/* grade */}
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><FaGraduationCap className='mr-2'/>Grade :</td>
                                            <td className='font-light text-tertiaire'>{user.grade}</td>
                                        </tr>
                                        {/* status */}
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><MdDateRange className='mr-2'/>Status :</td>
                                            <td className='font-light text-tertiaire'>{user.status}</td>
                                        </tr>

                                        {/* deleted */}
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'><MdDateRange className='mr-2'/>Etat compte :</td>
                                            <td className='font-light text-tertiaire'>
                                            {user.deleted ? (
                                                <span className='text-red-700 font-semibold text-sm bg-red-200 px-3 py-1 rounded-3xl'>Supprimé</span>
                                            ) : (
                                                <span className='text-green-700 text-sm bg-green-200 py-1 px-3 rounded-3xl font-semibold'>Actif</span>
                                            
                                            )}
                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        {/* <div className='h-full bg-white rounded-lg shadow-md'>
                            <p className='text-center mt-10 text-tertiaire'>On peut mettre d'autres informations ici</p>
                        </div> */}
                    </div>
                    
                </div>
            )
        }
        </div>
    );
}

export default Show;
