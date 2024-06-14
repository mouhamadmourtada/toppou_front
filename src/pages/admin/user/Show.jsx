import React, { useEffect, useState } from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUser, FaPhoneAlt, FaAddressCard, FaStar, FaGraduationCap } from "react-icons/fa";
import { MdAttachEmail, MdDateRange } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { useParams } from 'react-router-dom';

import useAxios from '../../../Hook/useAxios';

import { Switch } from "@/components/ui/switch"

import { Link } from 'react-router-dom';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"


const Show = () => {


    
    const [user, setUser] = useState({
    });
    
    // const userId = 
    // il faut recupérer le userId passé en paramètre
    const {userId} = useParams();
    
    const url = `http://localhost:8080/users/${userId}`
    const url1 = `http://localhost:8080/users/toggleActif?id=${userId}`
    
    const {responseAxios, error, loading, fetchData} = useAxios({
        url : url,
        method: 'GET',
        body : null,
        headers : {
            'Content-Type': 'application/json',
        }
    });

    const {responseAxios:res, error: err, loading: load, fetchData: call} = useAxios({
        url: url1,
        method: 'PATCH',
        body: null,
        headers: {
            'Content-Type': 'application/json',
        }
    })

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

    
    const toggleAccount = (e) => {
        // e.preventDefault()
        call();
        setUser(res);
    }


    return (
        <div>
            {/* breadcrumb */}
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
                            <Link className='text-tertiaire' to="/app/admin">Admin</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/app/admin/user">users</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                       
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-semibold">Detail {user.prenom }</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
        {   
            user && (

                <div className="px-12 py-4 flex justify-between">
                    {/* gauche  */}
                    <div className=' w-1/4 mr-5'>

                        {/* haut */}
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
                                    <button className='bg-primaire text-white px-5 py-2 rounded-3xl mr-2 hover:bg-sky-950 hover:outline hover:outline-1'>Valider</button>
                                    <button className='bg-white text-primaire outline outline-1 px-4 py-2 rounded-3xl hover:bg-slate-50'>Contacter</button>

                                </div>
                            </div>
                        </div>


                        {/* bas */}
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
                    {/* droite */}
                    <div className='w-3/4 flex flex-col'>
                        <div className=" gap-4 mb-5">
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <table className='table-auto w-full'>
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
                                            <td className='font-medium p-2 text-primaire flex items-center'><GrStatusInfo className='mr-2'/>Status :</td>
                                            <td className='font-light text-tertiaire'>{user.status}</td>
                                        </tr>

                                        {/* actif */}
                                        <tr className=' border-b border-gray-100'>
                                            <td className='font-medium p-2 text-primaire flex items-center'>
                                                <RiAccountPinBoxFill className='mr-2'/>Etat compte :
                                            </td>
                                            <td className='font-light text-tertiaire'>
                                                <div className='flex items-center space-x-2 justify-between'>
                                                    {user.actif ? (
                                                        <span className='text-green-700 text-sm bg-green-200 py-1 px-3 rounded-3xl font-semibold'>Actif</span>
                                                    ) : (
                                                        <span className='text-red-700 font-semibold text-sm bg-red-200 px-3 py-1 rounded-3xl'>Inactif</span>              
                                                    )}
                                                    <Switch checked={user.actif} onClick = {toggleAccount} />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/* <div className='flex justify-end'>
                            <Switch checked={user.actif} onClick = {toggleAccount} />
                        </div> */}

                        <div className='h-full bg-white rounded-lg shadow-md p-5'>
                            
                            <div className='flex items-center align-items-center '>
                                <span className='text-primaire font-bold'>Roles : </span>
                                <ul className='flex'>
                                    <li className='mx-3 py-1 px-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-100 '>Chercheur</li>
                                    <li className='mx-3 py-1 px-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-100 '>bailleur</li>
                                    <li className='mx-3 py-1 px-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-100 '>admin</li>
                                </ul>
                            </div>
                        {/* </div> */}
{/* 
                            Role : 
                            Chercheur
                            Admin
                            Bailleur  */}

                            {/* <p className='text-center mt-10 text-tertiaire'>On peut mettre d'autres informations ici</p> */}
                        </div>

                    </div>
                    
                </div>
            )
        }
        </div>
    );
}

export default Show;
