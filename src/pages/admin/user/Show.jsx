import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

const Show = () => {
    return (
        <div className="px-12 py-4 flex justify-between">
            <div className=' w-1/4 mr-5'>
                <div className="bg-white p-5 rounded-lg mb-5 shadow-md">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center space-x-4">
                            <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Profile" className="w-24 h-24 rounded-full object-cover avatar" />
                            <div className='w-full'>
                                <h3 className="text-2xl font-semibold text-primaire text-center">User Name</h3>
                                <p className="text-g text-gray-500 text-center font-light">Chercheur</p>
                                <p className="text-g text-gray-500 text-center font-light">Là une petite description de l'utilisateur</p>
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
                                <tr className=' border-b'>
                                    <td className='font-medium p-2'>Prenom:</td>
                                    <td className=' font-light'>Mandicou</td>
                                </tr>
                                <tr className=' border-b'>
                                    <td className='font-medium p-2'>Nom:</td>
                                    <td className=' font-light'>Ba</td>
                                </tr>
                                <tr className=' border-b'>
                                    <td className='font-medium p-2'>Téléphone:</td>
                                    <td className=' font-light'>750050556</td>
                                </tr>
                                <tr className=' border-b'>
                                    <td className='font-medium p-2'>Email:</td>
                                    <td className=' font-light'>email@example.com</td>
                                </tr>
                                <tr className=' border-b'>
                                    <td className='font-medium p-2'>Date Naissance:</td>
                                    <td className=' font-light'>12/05/1981</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className='h-full bg-white rounded-lg shadow-md'>
                    <p className='text-center mt-10'>On peut mettre d'autres informations ici</p>
                </div>
            </div>
            
        </div>
    );
}

export default Show;
