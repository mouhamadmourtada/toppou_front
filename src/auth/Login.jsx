import React, { useState } from 'react';
import { useAuth } from '../provider/authProvider';
import { useNavigate } from 'react-router-dom';
import IndiqueRequired from '../components/IndiqueRequired';
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';
import { Loader } from '../components/Loader';
import { Button } from "@/components/ui/button"


const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erreur, setErreur] = useState('');
  const [isLoading, setIsloading] = useState(false);


    const handleLogin = async (event) => {
        event.preventDefault();
        // setErreur('');
        // setIsloading(true);
        // if(!email || !password) {
        //     setErreur("Veuillez remplir tous les champs");
        //     return;
        // }

        // // il faut faire la fetch
        // const urlLogin = import.meta.env.VITE_API_URL+'/login';
        // // console.log(urlLogin)
        // // return;
        // fetch(urlLogin, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password,
        //     }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if(data.status == 'error') {
        //         setErreur(data.message);
        //         return;
        //     }
            
        //     setToken(data.authorisation.token);
        //     localStorage.setItem('id', data.user.id);
        //     localStorage.setItem('nom', data.user.nom);
        //     localStorage.setItem('prenom', data.user.prenom);
        //     localStorage.setItem('email', data.user.email);
        //     localStorage.setItem('telephone', data.user.telephone);
        //     localStorage.setItem('avatar', data.user.pp? data.user.pp : '');
        //     localStorage.setItem('date_naissance', data.user.date_naissance);
        //     localStorage.setItem('adresse', data.user.adresse);
        //     localStorage.setItem('lieu_naissance', data.user.lieu_naissance);

        //     navigate("/app/", { replace: true });

        // }).catch((error) => {
        //     console.error('Error:', error);
        //     setErreur(error.message || "Une erreur s'est produite");
        //     setErreur("Une erreur s'est produite");
        // }).finally(() => {
        //     setIsloading(false);
        // });


        navigate("/app/", { replace: true });

          
    }

  return (
    
    <div
    //  className="flex flex-col items-center justify-center h-screen bg-gray-100"
     >
        <Button>hello </Button>
        {isLoading && (
            <div className='absolute h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-30'>
                {/* je veux mettre un bg avec un opacity */}
                {/* bg-gray-100-opacity */}
                <Loader />

            </div>
        )
        
        }
       <section className="flex flex-col md:flex-row h-screen items-center flex">

            {/* image gauche */}
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="/images/Top-12-Pioneers-in-Education-scaled.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
            {/* formulaire et tout */}
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">

                <div className="w-full h-100">
                    {erreur && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Erreur!</strong>
                            <span className="block sm:inline">{erreur}</span>
                        </div>
                        )    
                    }

                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                    <form className="mt-6" >
                        {/* email */}
                        <div>
                            <label htmlFor='email' className="block text-gray-700">Adresse Email <IndiqueRequired/>  </label>
                            <input type="email" name="email" id="email" placeholder="Saisir email" 
                            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>

                        {/* mot de passe */}
                        <div className="mt-4">
                            <label htmlFor='password' className="block text-gray-700">Mot de passe <IndiqueRequired/></label>
                            <input type="password" name="password" id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Saisir votre mot de passe" minlength="6" 
                            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div>

                        <button type="submit" onClick={handleLogin} className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                            Se connecter
                        </button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="33" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <span className="ml-4">Log in with Google</span>
                        </div>
                    </button>

                    <p className="mt-8">Vous n'avez pas de compte ? <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Créer un compte</Link></p>


                </div>
            </div>

        </section>
    </div>

  );
};

export default Login;
