import React, { useEffect, useState } from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUser, FaPhoneAlt, FaAddressCard, FaStar, FaGraduationCap } from "react-icons/fa";
import { MdAttachEmail, MdDateRange } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { RiAccountPinBoxFill } from "react-icons/ri";
import IndiqueReduired from '../../../components/IndiqueRequired';
import { toast, Toaster } from "sonner"
import { useParams } from 'react-router-dom';
import { Loader } from '../../../components/Loader';
import { formatDate } from '../../../services/DateService';

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

    const apiUrl = import.meta.env.VITE_API_URL;

    
    const [user, setUser] = useState({
    });
    const [roles, setRoles] = useState([]);
    
    // const userId = 
    // il faut recupérer le userId passé en paramètre
    const {userId} = useParams();
    
    const url = `${apiUrl}users/${userId}`
    const urlToggleActif = `${apiUrl}users/${userId}/toggleActif`
    const urlPatchRole = `${apiUrl}users/${userId}/roles`
    const urlChangePassword = `${apiUrl}users/${userId}/reset`

    const headers = {
        'Content-Type': 'application/json',
    }
    
    const {responseAxios, error, loading, fetchData} = useAxios({
        url : `${url}?projection=withRolesProjection`,
        method: 'GET',
        body : null,
        headers : {
            'Content-Type': 'application/json',
        }
    });

    const {responseAxios:res, error: err, loading: load, fetchData: patchUser} = useAxios({
        url: urlToggleActif,
        method: 'PATCH',
        body: null,
        headers: headers
    })

    // requette pour patcher le role en changeant ses roles
    const {responseAxios : responseChangeRole, error: errorChangeRole, loading: loadingChangeRole, fetchData: changeRole} = useAxios({
        url: urlPatchRole,
        method: 'PATCH',
        body: roles,
        headers: headers
    })


    const {responseAxios : responseChangePassword, error: errorChangePassword, loading: loadingChangePassword, fetchData: changePassword} = useAxios({
        url: urlChangePassword,
        method: 'PATCH',
        body: null,
        headers: headers
    })

    useEffect(() => {
        fetchData()
        
    }, [])

    useEffect(() => {
        if(responseAxios){
            setUser(responseAxios)
            setListeUserRole(responseAxios.roles)
            console.log(user)
        }
    }
    , [responseAxios])

    
    const toggleAccount = (e) => {
        patchUser();
    }

    useEffect(() => {
        if(res){
            setUser(res)
            const message = res.actif ? "Compte activé avec succès" : "Compte désactivé avec succès"
            toast.success(message)
        }
    }, [res])

    const setListeUserRole = (roles) => {
        let liste = []
        if(roles.length !== 0){
            roles.map(role => {
                liste.push(`roles/${role.id}`)
            })
            setRoles(liste)

        }
    }

    const retirerRole = (id) => {
        let newRoles = roles.filter(
            role => {
                // role !== id
                return role !== `roles/${id}`
            }
        )
        setRoles(newRoles)
        console.log(newRoles)
        
        changeRole({roles : newRoles}, `${apiUrl}users/${userId}`)
    }

    useEffect(() => {
        if(responseChangeRole){
            const lesRoles = user.roles.filter(role => 
                {
                    // role.id !== roles.id
                    return 'roles/' + role.id == roles
                }
            )

            
            setUser(responseChangeRole)
            setUser({...user, roles : lesRoles})
            setListeUserRole(responseAxios.roles)


        }
    }, [responseChangeRole])

    useEffect(() => {
        if(responseChangePassword){
            toast.success("Mot de passe modifié avec succès")

            
        }
    }, [responseChangePassword])

    const reinitialiserMotDePasse = (e) => {
        e.preventDefault()
        // recupérer le mot de passe depuis le formulaire
        // toast.success("Mot de passe modifié avec succès")
        // return;
        const password = e.target.password.value
        changePassword({password : password})
        // console.log('reinitialiser mot de passe')
    }

   


    return (
        <div className='relative'>
            {(loadingChangeRole || loading || load || loadingChangePassword) && (
                <div className='absolute h-full w-full flex top-0 left-0 justify-center items-center bg-gray-800 bg-opacity-30'>
                    <Loader />
                </div>
            )}
            {/* breadcrumb */}
            <div className='my-3 font-semibold'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/dashboard">Home</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/admin">Admin</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/admin/user">users</Link>
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
                                    <button className='bg-primaire text-white px-5 py-1 text-sm rounded-2xl mr-2 hover:bg-primaire_hover hover:outline hover:outline-1'>
                                        {/* <a ></a> */}
                                        <Link to={`/admin/user/edit/${userId}`}>
                                            Modifier
                                        </Link>

                                        </button>
                                    <button className='bg-white text-primaire outline outline-1 text-sm px-4 py-1 rounded-2xl hover:bg-slate-100'>Contacter</button>

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

                        <div className='bg-white rounded-lg p-5 shadow-md mt-5' >
                            {/* <button>Reinitialiser mot de passe</button> */}
                            <form  onSubmit={reinitialiserMotDePasse}>
                                {/* password */}
                                <div className='mb-8 inputContainer w-full'>
                                    <label htmlFor="password" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Mot de passe <IndiqueReduired></IndiqueReduired> </label>
                                    <input className=" px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 w-full
                                        focus:bg-white focus:outline-none" autofocus autocomplete required 
                                        type="password" id="password" placeholder="le nouveau mot de passe" />
                                </div>
                                <div className='flex justify-end'>
                                    
                                    
                                    <button className='bg-primaire flex items-center text-white px-5 py-1 rounded mr-2 text-sm font-semibold hover:bg-primaire_hover hover:outline hover:outline-1'>
                                        <span className='mr-2'>
                                            Modifier
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                                        </svg>
                                    </button>
                                </div>
                                {/* <input type="text" placeholder="Confirmer mot de passe" className='w-full border-b border-gray-200 p-2 my-2'/> */}
                            </form>

                        </div>
                    </div>

                    {/* droite */}
                    <div className='w-3/4 flex flex-col'>
                        <div className=" gap-4 mb-5">
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <table className='table-auto w-full text-sm'>
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
                                            <td className='font-light text-tertiaire'>{formatDate(user.dateNaissance)}</td>
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

                       
                        
                        {/* les roles */}
                        <div className='h-full bg-white rounded-lg shadow-md p-5 '>
                            <h4 className='mb-5 text-xl'>
                                <span className='text-primaire font-bold'>Roles </span>
                            </h4>
                            <div className=' '>
                                <table className='text-left w-full border-collapse'>
                                    <thead className='border-b-2 border-gray-200'>
                                        <tr>
                                            <th className='font-medium p-2 text-md_gray'>Nom</th>
                                            <th className='font-medium p-2 text-md_gray'>description</th>
                                            <th className='font-medium p-2 text-md_gray'></th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full mt-5'>
                                        {user && user.roles ? (
                                            user.roles.length === 0 ? (
                                                <tr>
                                                    <td className='font-medium text-primaire p-2 text-center' colSpan={3}>
                                                        Aucun rôle
                                                    </td>
                                                </tr>
                                            ) : (
                                                user.roles.map((role, index) => (
                                                    <tr key={index} className='border-b border-gray-100'>
                                                        <td className='font-medium text-primaire p-2'>
                                                            {role.libelle}
                                                        </td>
                                                        <td className='font-medium text-primaire p-2'>
                                                            {role.description}
                                                        </td>
                                                        <td title="retirer le rôle" className='p-2 text-center w-5'>
                                                            <div className="text-secondaire cursor-pointer" onClick={() => retirerRole(role.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                            </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        ) : (
                                            <tr>
                                                <td className='font-medium text-primaire p-2'>
                                                    Chargement des rôles...
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>

                                </table>
                                
                            </div>
                    
                        </div>

                            

                        

                    </div>
                    
                </div>
            )
        }
        </div>
    );
}

export default Show;
