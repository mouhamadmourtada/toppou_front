import React, { useState, useEffect } from 'react';
import useAxios from '../../Hook/useAxios';
import { Loader } from '../../components/Loader';
import { toast } from "sonner";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const urlPosteRole = import.meta.env.VITE_API_URL + 'financements';
    const urlGetProjects = import.meta.env.VITE_API_URL + 'projets'; // URL to fetch projects

    const [dateObtentionEffective, setDateObtentionEffective] = useState('');
    const [dateSignature, setDateSignature] = useState('');
    const [description, setDescription] = useState('');
    const [montant, setMontant] = useState('');
    const [objectif, setObjectif] = useState('');
    const [projet, setProjet] = useState(''); // State for projet

    const { responseAxios, error, loading, fetchData } = useAxios({ url: urlPosteRole, method: 'POST' });
    const { responseAxios: projectsResponse, fetchData: fetchProjects } = useAxios({ url: urlGetProjects, method: 'GET' });
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects(); // Fetch the projects when the component mounts
    }, []);

    useEffect(() => {
        if (projectsResponse) {
            setProjects(projectsResponse._embedded.projets || []); // Assuming the response data is an array of projects
        }
    }, [projectsResponse]);

    useEffect(() => {
        if (responseAxios && hasSubmitted) {
            clearFormFields();
            toast.success("Financement ajouté avec succès!");
            setTimeout(() => {
                navigate("/app/finance/liste");
            }, 3000);
        }
    }, [responseAxios, hasSubmitted, navigate]);

    const validateDates = () => {
        if (new Date(dateSignature) >= new Date(dateObtentionEffective)) {
            toast.error("La date de signature doit précéder la date d'obtention.");
            return false;
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateDates()) return; // Return if dates are not valid
        setHasSubmitted(true);
        const currentDate = new Date().toISOString(); // Assuming you want current timestamp for created_at and updated_at
        fetchData({
            created_at: currentDate,
            dateObtentionEffective: dateObtentionEffective,
            dateSignature: dateSignature,
            description: description,
            montant: montant,
            objectif: objectif,
            projet: `projet/${projet}` // Format for projet_id selection from database
        });
    }

    const clearFormFields = () => {
        setDateObtentionEffective('');
        setDateSignature('');
        setDescription('');
        setMontant('');
        setObjectif('');
        setProjet('');
    }

    return (
        <div className="min-h-full">
            {loading &&
                <div className='absolute h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-30'>
                    <Loader />
                </div>
            }

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
                                <Link className='text-tertiaire' to="/app/finance/liste">Financement</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-primaire font-semibold">Nouveau</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="bg-white w-full shadow-xl border-gray-200 border-2 rounded-xl lg:flex py-3 px-5 ">
                <div className="hidden lg:block w-1/2 lg:flex items-center  py-10 justify-center rounded-xl">
                    <img src="/images/financement.png" alt="" />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center align-items-center pt-0 lg:w-2/3 lg:px-8  xl:px-10 ">
                    <form onSubmit={handleSubmit} className='w-full max-w-96 border-2 rounded-lg border-gray-100 shadow px-5 py-10 mx-auto'>
                        <div className="">
                            <div className="flex-1 px-2 ">
                                <label className="block text-sm font-medium text-tertiaire text-primaire mb-0">Date d'obtention</label>
                                <input
                                    type="date"
                                    className="w-full mx-auto px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                    required
                                    value={dateObtentionEffective}
                                    onChange={(e) => setDateObtentionEffective(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-12 w-full ">
                            <label className="block text-sm font-medium text-tertiaire text-primaire mb-0 ">Date Signature</label>
                            <input
                                type="date"
                                className="w-full mx-auto px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                required
                                value={dateSignature}
                                onChange={(e) => setDateSignature(e.target.value)}
                            />
                        </div>

                        <div className="mt-12 w-full ">
                            <label className="block text-sm font-medium text-tertiaire text-primaire mb-0 ">Description</label>
                            <textarea
                                className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                placeholder="Mettez ici la description du financement...."
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="mt-12 w-full ">
                            <label className="block text-sm font-medium text-tertiaire text-primaire mb-0 ">Montant</label>
                            <input
                                type="number"
                                className="w-full mx-auto px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                required
                                value={montant}
                                onChange={(e) => setMontant(e.target.value)}
                            />
                        </div>

                        <div className="mt-12 w-full ">
                            <label className="block text-sm font-medium text-tertiaire text-primaire mb-0 ">Objectif</label>
                            <input
                                type="text"
                                className="w-full mx-auto px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                required
                                value={objectif}
                                onChange={(e) => setObjectif(e.target.value)}
                            />
                        </div>

                        <div className="mt-12 w-full ">
                            <label className="block text-sm font-medium text-tertiaire text-primaire mb-0 ">Projet</label>
                            <select
                                className="w-full mx-auto px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none"
                                required
                                value={projet}
                                onChange={(e) => setProjet(e.target.value)}
                            >
                                <option value="">Select a project</option>
                                {projects && projects.length > 0 ? projects.map((project) => (
                                    <option key={project.id} value={project.id}>{project.nom}</option>
                                )) : <option value="">No projects available</option>}
                            </select>
                        </div>

                        <div className='mt-16 flex justify-center'>
                            <button
                                className="max-w-[200px] w-full transform rounded flex items-center  justify-center  bg-primaire hover:bg-primaire_hover   px-3 py-2 text-sm font-medium capitalize text-white  text-bold  transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                type="submit"
                                disabled={loading}
                            >
                                <span className='mr-4'>
                                    Ajouter
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z"/>
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;
