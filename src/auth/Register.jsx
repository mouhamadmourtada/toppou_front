import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    const [isLoading, setIsloading] = useState(false);

    const [image, setImage] = useState(null);
    const [erreur, setErreur] = useState(''); // erreur est un tableau qui contient les erreurs [
    
    
    // const handleRegister = async (event) => {
    //     setErreur('');
    //     setIsloading(true);
    //     event.preventDefault();
    //     // il faut faire la fetch
    //     const urlRegister = import.meta.env.VITE_API_URL+'/chauffeurs';

    //     const formData = new FormData();
    //     const image = event.target.elements.image.files[0];
    //     console.log(event.target.elements.email.value)
    //     formData.append('image', image);
    //     formData.append('prenom', event.target.elements.prenom.value);
    //     formData.append('nom', event.target.elements.nom.value);
    //     formData.append('telephone', event.target.elements.telephone.value);
    //     formData.append('email', event.target.elements.email.value);
    //     formData.append('password', event.target.elements.password.value);
    //     formData.append('adresse', event.target.elements.adresse.value);
    //     formData.append('date_naissance', event.target.elements.date_naissance.value);
    //     formData.append('lieu_naissance', event.target.elements.lieu_naissance.value);
    //     formData.append('matricule', event.target.elements.matricule.value);
    //     formData.append('marque', event.target.elements.marque.value);
    //     formData.append('cin', event.target.elements.cin.value);
    //     formData.append('annee_voiture', event.target.elements.annee_voiture.value);
    //     formData.append('carte_identite', event.target.elements.carte_identite.files[0]);
    //     formData.append('permis', event.target.elements.permis.files[0]);
    //     // formData.append('carte_identite', event.target.elements.carte_identite.files[0]);

    //     // console.log(formData);
    //     // return;
    //     try {
    //         const response = await fetch(urlRegister, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //             body: formData,
    //         });
    
    //         const data = await response.json();
    
    //         if (data.status === 'error') {
    //             setErreur(data.message);
    //             return;
    //         }

            
    //         navigate("/", { replace: true });
    //     } catch (error) {
    //         console.error(error);
    //         setErreur(error.message || "Une erreur s'est produite");
    //     }
        
    //     console.log(image);
    //     console.log(formData);


    //     // console.log(event.target.elements)
    //     // console.log(urlLogin
    //     return;
    // }

    const handleRegister = (event) => {
        setErreur('');
        setIsloading(true);
        event.preventDefault();
        const urlRegister = import.meta.env.VITE_API_URL+'/chauffeurs';
    
        const prenom = event.target.elements.prenom.value;
        const nom = event.target.elements.nom.value;
        const telephone = event.target.elements.telephone.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const adresse = event.target.elements.adresse.value;
        const date_naissance = event.target.elements.date_naissance.value;
        const lieu_naissance = event.target.elements.lieu_naissance.value;
        const matricule = event.target.elements.matricule.value;
        const marque = event.target.elements.marque.value;
        const cin = event.target.elements.cin.value;
        const annee_voiture = event.target.elements.annee_voiture.value;
        const carte_identite = event.target.elements.carte_identite.files[0];
        const permis = event.target.elements.permis.files[0];

        const formData = new FormData();
        const image = event.target.elements.image.files[0];
        formData.append('image', image);
        formData.append("prenom", prenom);
        formData.append('nom', nom);
        formData.append('telephone', telephone);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('adresse', adresse);
        formData.append('date_naissance', date_naissance);
        formData.append('lieu_naissance', lieu_naissance);
        formData.append('matricule', matricule);
        formData.append('marque', marque);
        formData.append('cin', cin);
        formData.append('annee_voiture', annee_voiture);
        formData.append('carte_identite', carte_identite);
        formData.append('permis', permis);
        // console.log(formData);

        // console.log(event.target.elements.email.value)
        // formData.append('image', image);
        // formData.append("prenom", event.target.elements.prenom.value);
        // formData.append('nom', event.target.elements.nom.value);
        // formData.append('telephone', event.target.elements.telephone.value);
        // formData.append("email", event.target.elements.email.value);
        // formData.append('password', event.target.elements.password.value);
        // formData.append('adresse', event.target.elements.adresse.value);
        // formData.append('date_naissance', event.target.elements.date_naissance.value);
        // formData.append('lieu_naissance', event.target.elements.lieu_naissance.value);
        // formData.append('matricule', event.target.elements.matricule.value);
        // formData.append('marque', event.target.elements.marque.value);
        // formData.append('cin', event.target.elements.cin.value);
        // formData.append('annee_voiture', event.target.elements.annee_voiture.value);
        // formData.append('carte_identite', event.target.elements.carte_identite.files[0]);
        // formData.append('permis', event.target.elements.permis.files[0]);

        // return;
        // console.log(event.target.elements.nom.value)
        // // console.log(event.target.element.email.value)
    

        // return;

        fetch(urlRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'error') {
                setErreur(data.message);
                return;
            }
            navigate("/", { replace: true });
        })
        .catch(error => {
            console.error(error);
            setErreur(error.message || "Une erreur s'est produite");
        });
    
        console.log(image);
        console.log(formData);
        return;
    }


    return (
        <div>
            {/* <!-- component --> */}
<section className="bg-white ">
    <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: `url('https://mesinfos.fr/content/articles/556/A174556/initial-covoiturage.jpg')`, backgroundPosition : 'center'}}>
        </div>

        <div className="h-screen  flex items-center w-full max-w-4xl mx-auto lg:w-3/5">
            <div className="h-full overflow-scroll w-full p-8">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                    Obtenez un compte gratuitement
                </h1>

                <p className="mt-4 text-gray-500 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptatum similique ex nemo mollitia ipsa excepturi, neque expedita possimus eaque molestias rerum quo unde repellat assumenda laboriosam quas pariatur necessitatibus.
                </p>


                <form onSubmit={handleRegister}>
                    
                    <div className='mt-10 flex justify-center'>
                        <div className='w-48 h-48 relative rounded-full bg-gray-300'>
                            <input
                                onChange = {(event) => {
                                    const file = event.target.files[0];
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        if(reader.readyState === 2){
                                            setImage(reader.result);
                                        }
                                    }
                                    reader.readAsDataURL(file);
                                }}
                            type="file" name="image" id="image" className='absolute h-full w-full opacity-0' />
                            {image &&
                                <img src={image} alt="profile" className='w-full h-full object-cover rounded-full' />

                            }
                        </div>

                    </div>


                    <div className='flex flex-wrap justify-evenly'>
                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Prénom</label>
                            <input id='prenom' name='prenom' type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Nom</label>
                            <input name='nom' type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Numéro téléphone</label>
                            <input name='telephone' type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Adresse email</label>
                            <input name='email' type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Mot de passe</label>
                            <input name='password' type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Confrimer mot de passe</label>
                            <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Adresse</label>
                            <input name='adresse' type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Date de naissance</label>
                            <input name='date_naissance' type="date" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Lieu de naissance</label>
                            <input name='lieu_naissance' type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Matricule de la voiture</label>
                            <input name='matricule' type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Marque de la voiture</label>
                            <input name='marque' type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">CIN</label>
                            <input name='cin' type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className='mt-4 mx-10 my-2 w-72'>
                            <label className="block mb-2 text-sm text-gray-600 ">Année de sortie de la voiture</label>
                            <input name='annee_voiture' type="number" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />


                    
                    </div>

                        {/* carte d'identité */}
                        <div class="mt-4 min-w-72 mx-10">
                            <label class="block mb-2 text-sm text-gray-600">Carte d'identité</label>
                            <div class="flex items-center justify-center">
                                <label for="carte_identite" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input name="carte_identite" id="carte_identite" type="file" class="hidden" />
                                </label>
                            </div> 
                            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                        </div>

                        {/* permis de conduire */}

                        <div class="mt-4 min-w-72 mx-10">
                            <label class="block mb-2 text-sm text-gray-600">Permis de conduit </label>
                            <div class="flex items-center justify-center">
                                <label for="permis" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input name="permis" id="permis" type="file" class="hidden" />
                                </label>
                            </div> 
                            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                        </div>
                        

                    <div className='flex w-full mt-20 justify-end'>
                        <button type="submit"
                            className="text-center bg-secondaire hover:text-secondaire border-2 border-secondaire flex items-center justify-center px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Créer compte </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </form>
                
                <p className="mt-8"><Link to="/land" className="text-secondaire  font-semibold">Landing page</Link></p>
            </div>
        </div>
    </div>
</section>
        </div>
    );
}

export default Register;
