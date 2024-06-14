import React, { useState, useEffect } from 'react';

// import { CopyIcon } from "@radix-ui/react-icons"
 
import { Button } from "@/components/ui/button"
import useAxios from '../../../Hook/useAxios';
import IndiqueReduired from '../../../components/IndiqueRequired';
import { Loader } from '../../../components/Loader';

import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"


  import { Checkbox } from "@/components/ui/checkbox"
  import { Link, useNavigate } from 'react-router-dom';

import { toast, Toaster } from "sonner"
   
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
 
import { cn } from "@/lib/utils"
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
 
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"



const Create = () => {


    const urlRegister = import.meta.env.VITE_API_URL+'api/auth/register';
    const urlRoles = import.meta.env.VITE_API_URL+'roles';

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([]);

    const [image, setImage] = useState(null);

    const {responseAxios : responsePoste, error : errorPoste, loading : loadingPoste, fetchData : posteUser } = useAxios({
        url : urlRegister,
        method : "POST",
        body : null,
        headers : {
            "Content-type" : "application/json",
            // 'Access-Control-Allow-Origin': '*',
        }
    })


    const onSubmit = (e) => {
        e.preventDefault();
        // showToast()
        // return;
        const nom = e.target.elements.nom.value;
        const prenom = e.target.elements.prenom.value;
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const adresse = e.target.elements.adresse.value;
        const dateNaissance = e.target.elements.date_naissance.value;
        const lieuNaissance = e.target.elements.lieu_naissance.value;
        const grade = e.target.elements.grade.value;
        const status = e.target.elements.status.value;
        const titre = e.target.elements.titre.value;
        const telephone = e.target.elements.telephone.value;
        const password = e.target.elements.password.value;


        const user = {
            nom,
            prenom,
            username,
            email,
            adresse,
            dateNaissance,
            lieuNaissance,
            grade,
            status,
            titre,
            telephone,
            roles : selectedRoles,
            password
            
        }

       
        posteUser(JSON.stringify(user))
    }

    useEffect(() => {
        if (responsePoste) {
            console.log(responsePoste)
            toast.success("Utilisateur ajouté avec succès")
            // attendre 2 s avant de rediriger vers /app/admin/users
            setTimeout(() => {
                navigate("/app/admin/user")
            }, 200)
        }
    }, [responsePoste]);
    
    const [roles, setRoles] = useState();

    const {responseAxios, error, loading, fetchData } = useAxios({
        url : urlRoles,
        method : "GET",
        body : null,
        headers : {
            "Content-type" : "application/json",
            'Access-Control-Allow-Origin': '*',
        }

    }
    )

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (responseAxios) {
          setRoles(responseAxios._embedded.roles);
        }
      }, [responseAxios]);




    return (
        <div>


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
                            <Link className='text-tertiaire' to="/app/admin/user">Users</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-semibold">Nouvel</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>

            <div className='flex order-2 bg-white shadow-xl rounded-xl'>
                <div className="w-full xl:w-1/2 h-full flex items-center p-0 border-gray-100 border-4">
                    <form className='max-w-3xl mx-auto border-2 bg-white shadow-xl rounded-xl p-5 py-10' onSubmit={onSubmit} >
                        
                        {errorPoste && (
                            <>
                            
                            <Alert variant="destructive">
                            {/* <ExclamationTriangleIcon className="h-4 w-4" /> */}
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                {errorPoste}
                            </AlertDescription>
                        </Alert>

                            </>
                        )
                        }
                        <div className='mt-3 flex justify-center'>
                            <div className='w-32 h-32 relative rounded-full bg-gray-300'>
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

                        <div className='mt-4'></div>

                        <div className='flex items-center justify-around flex-wrap'>
                            
                            {/* nom */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="nom" class="block text-sm font-medium text-tertiaire text-primaire mb-0">Nom <IndiqueReduired></IndiqueReduired> </label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none'    type="text" id="nom" placeholder="Nom de l'utilisateur" />
                            </div>

                            {/* prenom */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="prenom" class="block text-sm font-medium text-tertiaire text-primaire mb-0">prenom <IndiqueReduired></IndiqueReduired> </label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none'    type="text" id="prenom" placeholder="prenom de l'utilisateur" />
                            </div>


                            {/* roles */}
                            {roles && roles.length > 0 && (
                                <div className='mb-8 inputContainer min-w-64'>
                                    <label htmlFor="select" className="block text-sm font-medium text-gray-700 text-tertiaire">Roles</label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between text-primaire font-normal"
                                            >
                                                {selectedRoles.length > 0
                                                    ? selectedRoles.map(role => roles.find(r => r.libelle === role)?.libelle).join(", ")
                                                    : "Selectionnez un role"}
                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Search roles..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>pas de roles trouvé !</CommandEmpty>
                                                    <CommandGroup>
                                                        {roles.map((role) => (
                                                            <CommandItem
                                                                key={role.id}
                                                                value={role.libelle}
                                                                onSelect={(currentValue) => {
                                                                    if (selectedRoles.includes(currentValue)) {
                                                                        setSelectedRoles(selectedRoles.filter(role => role !== currentValue));
                                                                    } else {
                                                                        setSelectedRoles([...selectedRoles, currentValue]);
                                                                    }
                                                                    setOpen(false);
                                                                }}
                                                            >
                                                                <Checkbox className="mr-2" checked={selectedRoles.includes(role.libelle)} />
                                                                {role.libelle}
                                                                <CheckIcon
                                                                    className={cn(
                                                                        "ml-auto h-4 w-4",
                                                                        selectedRoles.includes(role.libelle) ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>

                            )}

                                {/* username */}
                                <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="username" class="block text-sm font-medium text-tertiaire text-primaire mb-0">username <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete  type="text" id="username" placeholder="username de l'utilisateur" />
                            </div>

                            {/* email */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="email" class="block text-sm font-medium text-tertiaire text-primaire mb-0">email <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete required 
                                    type="text" id="email" placeholder="prenom de l'utilisateur" />
                            </div>

                            {/* password */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="password" class="block text-sm font-medium text-tertiaire text-primaire mb-0">Mot de passe <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete required 
                                    type="password" id="password" placeholder="le mot  de l'utilisateur" />
                            </div>


                            


                            

                            {/* telephone */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="telephone" class="block text-sm font-medium text-tertiaire text-primaire mb-0">telephone <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete  type="number" id="telephone" placeholder="telephone de l'utilisateur" />
                            </div>
                            
                            {/* adresse */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="adresse" class="block text-sm font-medium text-tertiaire text-primaire mb-0">adresse <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete  type="text" id="adresse" placeholder="adresse de l'utilisateur" />
                            </div>
                            
                            {/* date_naissance */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="date_naissance" class="block text-sm font-medium text-tertiaire text-primaire mb-0">date_naissance <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete  type="date" id="date_naissance" placeholder="date de naissance de l'utilisateur" />
                            </div>

                            {/* lieu_naissance */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="lieu_naissance" class="block text-sm font-medium text-tertiaire text-primaire mb-0">lieu_naissance <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete  type="text" id="lieu_naissance" placeholder="lieu de naissance de l'utilisateur" />
                            </div>

                                

                            {/* grade */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="grade" class="block text-sm font-medium text-tertiaire text-primaire mb-0">grade <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete  type="text" id="grade" placeholder="grade de l'utilisateur" />
                            </div>

                            {/* status */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="status" class="block text-sm font-medium text-tertiaire text-primaire mb-0">status <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete  type="text" id="status" placeholder="status de l'utilisateur" />
                            </div>

                            {/* titre */}
                            <div className='mb-8 inputContainer min-w-64 '>
                                <label htmlFor="titre" class="block text-sm font-medium text-tertiaire text-primaire mb-0">titre <IndiqueReduired></IndiqueReduired> </label>
                                <input className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2
                                    focus:bg-white focus:outline-none" autofocus autocomplete  type="text" id="titre" placeholder="titre de l'utilisateur" />
                            </div>


                        </div>

                        <div className='flex justify-between'>
                            <Button className = "bg-red-800 px-5 hover:bg-red-700 text-white" type="button" variant="secondary">
                            <span className='mr-3'>
                                <Link to="/app/admin/user">
                                    Annuler
                                </Link>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            </Button>
                        
                            <Button type="submit" variant="secondary" className="bg-primaire text-white px-5 hover:bg-primaire_hover">
                                <span className='mr-4'>
                                    Valider
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z"/>
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                </svg>
                            </Button>

                        </div>

                    </form>

                </div>

                <div className='w-1/2 self-center hidden xl:block flex items-center justify-between'>
                    <img src="/images/At the office-amico.png" alt="" srcset="" />
                </div>
            </div>
          
        </div>
    );
}

export default Create;
