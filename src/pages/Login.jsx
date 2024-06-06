// import React, { useState } from 'react';
// import { useAuth } from '../provider/authProvider';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const { setToken } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [erreur, setErreur] = useState('');

  

//     const handleLogin = async () => {
        
//         if(!email || !password) {
//             setErreur("Veuillez remplir tous les champs");
//             return;
//         }

//         // il faut faire la fetch
//         fetch('http://localhost:8000/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password,
//             }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.message) {
//                 setErreur(data.message);
//                 return;
//             }
            
//             setToken(data.authorisation.token);
//             // il faut change
//             // navigate('/dashboard');
//             navigate("/", { replace: true });

//         }).catch((error) => {
//             console.error('Error:', error);
//             setErreur("Une erreur s'est produite");
//         });

//         // setToken(data.jwt);
//         // navigate('/dashboard');    
//     }

//   return (
//     <div
//     //  className="flex flex-col items-center justify-center h-screen bg-gray-100"
//      >
//         {/* <div className="w-full max-w-md">
//             <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                 <div className="mb-4">
//                     <h2 className="text-center">Connexion</h2>
//                     {erreur && (
//                     <div className="bg-red-500 text-white px-3 py-2 rounded relative" role="alert">
//                         {erreur}
//                     </div>
//                     )}
//                     <form>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                         E-mail
//                         </label>
//                         <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="email"
//                         type="email"
//                         placeholder="Entrez votre e-mail"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                         Mot de passe
//                         </label>
//                         <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                         id="password"
//                         type="password"
//                         placeholder="Entrez votre mot de passe"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type="button"
//                         onClick={handleLogin}
//                         >
//                         Se connecter
//                         </button>
//                     </div>
//                     </form>
//                 </div>
//             </div>
//         </div> */}
//        <section class="flex flex-col md:flex-row h-screen items-center">

//             <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
//                 <img src="/images/Top-12-Pioneers-in-Education-scaled.jpg" alt="" class="w-full h-full object-cover"/>
//             </div>

//             <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
//                 flex items-center justify-center">

//             <div class="w-full h-100">


//                 <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

//                 <form class="mt-6" action="#" method="POST">
//                 <div>
//                     <label class="block text-gray-700">Email Address</label>
//                     <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
//                 </div>

//                 <div class="mt-4">
//                     <label class="block text-gray-700">Password</label>
//                     <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
//                         focus:bg-white focus:outline-none" required />
//                 </div>

//                 <div class="text-right mt-2">
//                     <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
//                 </div>

//                 <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
//                         px-4 py-3 mt-6">Log In</button>
//                 </form>

//                 <hr class="my-6 border-gray-300 w-full" />

//                 <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
//                     <div class="flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
//                         <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
//                     </svg>
//                     <span class="ml-4">
//                     Log in
//                     with
//                     Google</span>
//                     </div>
//                     </button>

//                 <p class="mt-8">Need an account? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
//                         account</a></p>


//             </div>
//             </div>

//         </section>
//     </div>
//   );
// };

// export default Login;
