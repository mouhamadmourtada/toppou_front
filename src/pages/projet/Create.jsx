import React, { useEffect, useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import {Loader} from "@/components/Loader"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import  IndiqueReduired  from "@/components/IndiqueRequired";
import { set } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import useAxios from '../../Hook/useAxios';
import { toast, Toaster } from "sonner"



import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"



const Create = () => {


    const frameworks = [
        {
          value: "1",
          label: "Next.js",
        },
        {
          value: "2",
          label: "SvelteKit",
        },
        {
          value: "3",
          label: "Nuxt.js",
        },
        {
          value: "4",
          label: "Remix",
        },
        {
          value: "5",
          label: "Astro",
        },
      ]


    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
     

    const [chefProjets, setChefProjets] = useState([])

    // const errorPoste = false;
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = `${apiUrl}projets`;

    const urlListeChef = `${apiUrl}users/chefProjet`;


    const navigate = useNavigate();

    const {responseAxios, error, loading, fetchData} = useAxios({
        url: urlListeChef,
        method: 'GET',
        body: null,
        headers: {
            "Content-Type": "application/json",
        }
    });

    const {responseAxios : responsePoste, error: errorPoste, loading: loadingPoste, fetchData: fetchDataPoste} = useAxios({
        url: url,
        method : 'POST',
        body: null,
        headers : {
            "Content-Type": "application/json"
        }
    })

    useEffect( ()=> {
        if(responseAxios){
            setChefProjets(responseAxios.chefProjets)
        }else
            fetchData();
    }, [responseAxios])

   


    const onSubmit = (e) => {
        console.log("on sumbit")
        e.preventDefault();
        // console.log(e.target.elements)
        const nom = e.target.elements.nom.value;
        const chef_projet_id = e.target.elements.chef_projet_id.value;
        const cout_planifies = e.target.elements.cout_planifies.value;
        const date_debut_prevue = e.target.elements.date_debut_prevue.value;
        const date_fin_prevue = e.target.elements.date_fin_prevue.value;
        const objectif = e.target.elements.objectif.value;
        const description = e.target.elements.description.value;

        const data = {
            nom,
            chefProjet : `chefProjet/${chef_projet_id}`,
            cout_planifies,
            date_debut_prevue,
            date_fin_prevue,
            objectif,
            description
        }
        // fetchData(data)
        console.log(data)
        fetchDataPoste(data)
    }

    useEffect(() => {
        if(responsePoste){
            console.log(responsePoste)
            toast.success("Projet ajouté avec succès")
            // attendre 2 s avant de rediriger vers /admin/users
            setTimeout(() => {
                navigate("/projet/liste")
            }, 200)
        }
    }, [responsePoste])

    // cons

    return (
        <div className='min-h-full'>
            {value}
            { 
            (loadingPoste || loading) && (
                <div className='absolute h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-30'>
                    <Loader />
                </div>
            )}
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
                            <Link className='text-tertiaire' to="/projet">Dashboard projet</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/projet/liste">Liste projet</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                       
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-semibold">Nouveau projet</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>

            <div className='flex order-2 h-full overflow-hidden'>
                <div className='w-1/2 self-center hidden xl:block flex items-center justify-between'>
                    <img src="/images/Data report-pana.png" alt="" srcset="" />
                </div>
                <div className="mb-10 w-full xl:w-1/2 h-full flex bg-white items-center pb-10 shadow-xl rounded-xl overflow-scroll">
                    <form className='text-sm max-w-3xl mx-auto h-full p-5 mt-5 ' onSubmit={onSubmit}>
                        {errorPoste && (
                            <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{errorPoste}</AlertDescription>
                            </Alert>
                        )}
                        <div className='mt-4'></div>
                        <div className='flex items-center justify-around flex-wrap'>
                            {/* Nom */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="nom" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Nom <IndiqueReduired></IndiqueReduired> </label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="nom" placeholder="Nom du projet" />
                            </div>
                           
                           {/* chef de projet */}
                            {
                                chefProjets && chefProjets.length > 0 && (
                                   <div className="mb-8 inputContainer min-w-64 text-tertiaire">
                                    <label htmlFor="chef_projet_id" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Chef de projet <IndiqueReduired></IndiqueReduired> </label>
                                    <select className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none" name="chef_projet_id" id="chef_projet_id">
                                        <option value="">Sélectionne un chef de projet</option>
                                        { chefProjets.map(chefProjet => {
                                            return <option key={chefProjet.id} value={chefProjet.id}>{chefProjet.nom} {chefProjet.prenom}</option>
                                        })}
                                    </select>

                                   </div>
                                )
                            }


                            {/* Cout Planifié */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="cout_planifies" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Cout Planifié <IndiqueReduired></IndiqueReduired> </label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="cout_planifies" placeholder="Cout planifié du projet" />
                            </div>


                            {/* Date Début Prévue */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="date_debut_prevue" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Date Début Prévue <IndiqueReduired></IndiqueReduired> </label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="date" id="date_debut_prevue" placeholder="Date de début prévue" />
                            </div>

                            {/* Date Fin Prévue */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="date_fin_prevue" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Date Fin Prévue <IndiqueReduired></IndiqueReduired> </label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="date" id="date_fin_prevue" placeholder="Date de fin prévue" />
                            </div>

                            

                           
                            {/* <div className='mb8 inputContainer min-w-64' ></div> */}

                            {/* Objectif */}
                            <div className='mb-8 inputContainer w-full max-w-xl '>
                                <label htmlFor="objectif" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Objectif <IndiqueReduired></IndiqueReduired> </label>
                                <textarea rows={5} className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' id="objectif" placeholder="Objectif du projet"></textarea>
                            </div>

                             {/* Description */}
                             <div className='mb-8 inputContainer w-full max-w-xl '>
                                <label htmlFor="description" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Description <IndiqueReduired></IndiqueReduired> </label>
                                <textarea rows={5} className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' id="description" placeholder="Description du projet"></textarea>
                            </div>

                            
                        </div>
                        <div className='flex items-center justify-end flex-wrap mb-5'>
                            <Button type="submit" variant="secondary" className="bg-primaire text-white px-5 hover:bg-primaire_hover">
                                <span className='mr-4'>
                                    Valider
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z"/>
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                </svg>
                            </Button>
                            {/* <button className='px-4 py-2 rounded-lg mt-2 border hover:bg-primaire_hover bg-primaire text-white border-2' type="submit">Enregister</button> */}
                        </div>
                    </form>
                </div>
               
            </div>



        </div>
    );
}

export default Create;
