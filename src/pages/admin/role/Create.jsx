import React, { useState, useEffect } from 'react';
import useAxios from '../../../Hook/useAxios';
import { set } from 'react-hook-form';
import { Loader } from 'lucide-react';

const Create = () => {

    const [libelle, setLibelle] = useState('');
    const [description, setDescription] = useState('');
    const { responseAxios, error, loading, fetchData } = useAxios({ url : '/roles', method : 'POST'});
    const [showMessage, setShowMessage] = useState(false);   
    const [hasSubmitted, setHasSubmitted] = useState(false); // New state to track form submission


    useEffect(() => {
        if(responseAxios && hasSubmitted){
            setShowMessage(true);
            setDescription('');
            setLibelle('');
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    }, [responseAxios, hasSubmitted] ); 
    


    const handleSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        fetchData({ libelle, description})
    }

    return (
        <div className="min-h-full bg-white rounded-3xl p-8">

            <h2 className="font-bold mb-8 placeholder-placeholder_color placeholder:text-sm placeholder:font-normal focus:border-primaire text-2xl text-primaire">Ajouter un role</h2>

            <div className="w-full lg:flex py-10">
                <div className="w-1/2 lg:flex items-center  py-10 justify-center bg-primaire rounded-xl">
                    <svg  className="text-white"  xmlns= "http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32"><path fill="currentColor" d="M19.307 3.21a2.91 2.91 0 1 0-.223 1.94a11.636 11.636 0 0 1 8.232 7.049l1.775-.698a13.576 13.576 0 0 0-9.784-8.291m-2.822 1.638a.97.97 0 1 1 0-1.939a.97.97 0 0 1 0 1.94m-4.267.805l-.717-1.774a13.576 13.576 0 0 0-8.291 9.784a2.91 2.91 0 1 0 1.94.223a11.636 11.636 0 0 1 7.068-8.233m-8.34 11.802a.97.97 0 1 1 0-1.94a.97.97 0 0 1 0 1.94m12.607 8.727a2.91 2.91 0 0 0-2.599 1.62a11.636 11.636 0 0 1-8.233-7.05l-1.774.717a13.576 13.576 0 0 0 9.813 8.291a2.91 2.91 0 1 0 2.793-3.578m0 3.879a.97.97 0 1 1 0-1.94a.97.97 0 0 1 0 1.94M32 16.485a2.91 2.91 0 1 0-4.199 2.599a11.636 11.636 0 0 1-7.05 8.232l.718 1.775a13.576 13.576 0 0 0 8.291-9.813A2.91 2.91 0 0 0 32 16.485m-2.91.97a.97.97 0 1 1 0-1.94a.97.97 0 0 1 0 1.94"/><path fill="currentColor" d="M19.19 16.35a3.879 3.879 0 1 0-5.42 0a4.848 4.848 0 0 0-2.134 4.014v1.939h9.697v-1.94a4.848 4.848 0 0 0-2.143-4.014m-4.645-2.774a1.94 1.94 0 1 1 3.88 0a1.94 1.94 0 0 1-3.88 0m-.97 6.788a2.91 2.91 0 1 1 5.819 0z" class="ouiIcon__fillSecondary"/></svg>
                    
                </div>
                <div class="flex w-1/2 flex-col   pt-0 lg:w-2/3 lg:px-8  xl:px-10 ">
                    <form onSubmit={handleSubmit} >
                        <div className="-mx-2 ">
                            <div class="flex-1 px-2">
                                <label class="mb-2 block text-sm font-medium text-primare">Libellé</label>
                                <input 
                                    type="text"
                                    placeholder="Libelle" 
                                    className="mt-2 block w-full rounded-md border  border-gray-200 bg-white px-5 py-3 text-gray-700  focus:outline-none focus:ring focus:primaire focus:ring-opacity-40  placeholder-placeholder_color placeholder:text-sm placeholder:font-normal focus:border-primaire"
                                    required
                                    value={libelle}
                                    onChange={(e) => setLibelle(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className="mt-4 w-full">
                            <label className="mb-2 block text-sm font-medium text-primaire ">Description</label>
                            <textarea 
                                class="mt-2 block h-28 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-placeholder_color placeholder:text-sm placeholder:font-normal focus:border-primaire focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" 
                                placeholder="Mettez ici la description du role...."
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <button 
                            className="mt-4 w-full transform rounded-2xl flex items-center  justify-center  bg-primaire hover:bg-primaire_hover   px-6 py-4 text-sm font-medium capitalize tracking-wide text-white  text-bold  transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            type="submit"
                            disabled={loading}
                            >
                                {loading ?  <Loader  className='animate-spin360' />  : 'Ajouter'}
                        </button>
                    </form>
                    
                    {showMessage && <p className="text-green-500 text-center mt-4 bg-green-200 w-full p-3 rounded-xl ">Rôle ajouté avec succès!</p>}
                    {/*  {responseAxios && <p className="text-green-500 text-center mt-4 bg-green-200 w-full p-3 rounded-xl ">Rôle ajouté avec succès!</p>} */}
                    {error && <p className="text-red-500 text-center mt-4 w-full bg-red-100 p-3 rounded-xl">{error}</p>}
    
                </div>
            </div>
        </div>
    );
}

export default Create;

