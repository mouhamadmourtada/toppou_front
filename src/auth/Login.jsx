import React, { useState } from 'react';
import { useAuth } from '../provider/authProvider';
import { useNavigate } from 'react-router-dom';
import IndiqueRequired from '../components/IndiqueRequired';
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';
import { Loader } from '../components/Loader';
import { Button } from "@/components/ui/button"
// import {Logo} from "."
import Logo from '../components/Logo'


const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erreur, setErreur] = useState('');
  const [isLoading, setIsloading] = useState(false);


    const handleLogin = async (event) => {
        event.preventDefault();
        setErreur('');
        setIsloading(true);
        if(!email || !password) {
            setErreur("Veuillez remplir tous les champs");
            return;
        }

        // il faut faire la fetch
        const urlLogin = import.meta.env.VITE_API_URL+'/auth/login';
        // console.log(urlLogin)
        // return;
        fetch(urlLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.status != 200) {
                setErreur(data.message);
                return;
            }
            
            setToken(data.accessToken);
            //  je reçois aussi getUser
            // maintenant au lieu de faire les choses manuellement comme ça est-ce qu'il ya pas un moyen de faire ça automatiquement. c'est-à-dire pour chaque attribut de l'objet user je veux le mettre dans le localstorage
            // est-ce qu'il y a un moyen de faire une boucle sur les attributs de l'objet user et les mettre dans le localstorage
            localStorage.setItem('user', JSON.stringify(data.getUser));
        //     localStorage.setItem('id', data.user.id);
        //     localStorage.setItem('nom', data.user.nom);
        //     localStorage.setItem('prenom', data.user.prenom);
        //     localStorage.setItem('email', data.user.email);
        //     localStorage.setItem('telephone', data.user.telephone);
        //     localStorage.setItem('avatar', data.user.pp? data.user.pp : '');
        //     localStorage.setItem('date_naissance', data.user.date_naissance);
        //     localStorage.setItem('adresse', data.user.adresse);
        //     localStorage.setItem('lieu_naissance', data.user.lieu_naissance);
            navigate("/app/", { replace: true });

        }).catch((error) => {
            console.error('Error:', error);
            setErreur(error.message || "Une erreur s'est produite");
            setErreur("Une erreur s'est produite");
        }).finally(() => {
            setIsloading(false);
        });


        // navigate("/app/", { replace: true });

          
    }

  return (
    
    <div className="h-screen overflow-hidden"
    //  className="flex flex-col items-center justify-center h-screen bg-gray-100"
     >
        {isLoading && (
            <div className='absolute h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-30'>
                {/* je veux mettre un bg avec un opacity */}
                {/* bg-gray-100-opacity */}
                <Loader />

            </div>
        )
        
        }
       <section className="flex flex-col md:flex-row h-screen items-center flex">

           
            {/* formulaire et tout */}
            <div className="bg-white w-full 
                xs:w-3/4
                sm:w-2/3
                lg:w-1/2
                xl:w-1/3 

                md:mx-auto md:mx-0 
                h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">

                <div className="overflow-auto no-scrollbar h-full w-full max-w-xl h-100">
                    {erreur && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Erreur!</strong>
                            <span className="block sm:inline">{erreur}</span>
                        </div>
                        )    
                    }
                    
                    <div className = "mt-3">
                        <Logo/>

                    </div>
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12"></h1>
                    <hr />

                    <form className="mt-8" >
                        {/* email */}
                        <div>
                            <label htmlFor='email' className="block text-primaire text-sm font-semibold">Email <IndiqueRequired/>  </label>
                            <input type="email" name="email" id="email" placeholder="Saisir email" 
                            className="w-full px-4 py-3 rounded-xl mt-2 border focus:border-primaire border-2
                                focus:bg-white focus:outline-none" autofocus autocomplete required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>

                        {/* mot de passe */}
                        <div className="mt-5">
                            <label htmlFor='password' className="block text-primaire text-sm font-semibold">Mot de passe <IndiqueRequired/></label>
                            <input type="password" name="password" id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Saisir votre mot de passe" minlength="6" 
                            className="w-full px-4 py-3 rounded-xl mt-2 border focus:border-primaire border-2
                                focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="text-right mt-5">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-primaire_hover focus:text-primaire_hover">Mot de passe oublié ?</a>
                        </div>

                        <button type="submit" onClick={handleLogin} className="w-full block bg-primaire hover:bg-primaire_hover focus:bg-primaire_hover text-white font-semibold rounded-lg px-4 py-3 mt-6">
                            Se connecter
                        </button>
                    </form>


                    <p className="mt-8">Vous n'avez pas de compte ? <Link to="/register" className="text-primaire hover:text-primaire_hover font-semibold">Créer un compte</Link></p>


                </div>
            </div>

             {/* image gauche */}
             <div className="bg-primaire hidden md:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="/images/login_illustration.jpg" alt="" className="w-full h-full object-cover"/>
            </div>

        </section>
    </div>

  );
};

export default Login;
