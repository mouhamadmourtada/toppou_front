import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import useAxios from '../../../Hook/useAxios';
import IndiqueReduired from '../../../components/IndiqueRequired';
import { Loader } from '../../../components/Loader';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { toast, Toaster } from "sonner"


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"



const Edit = () => {

    const apiUrl = import.meta.env.VITE_API_URL;


    // const [selectedRoles, setSelectedRoles] = useState([])
    // cosnt [got]

    const navigate = useNavigate();
    const { userId } = useParams(); // Assuming the user ID is passed as a route parameter
    const [open, setOpen] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [image, setImage] = useState(null);

    const [allRoles, setAllRoles] = useState([]);

    


    const [user, setUser] = useState({
        nom: '',
        prenom: '',
        email: '',
        adresse : '',
        dateNaissance : '',
        // email : '',
        grade : '', 
        lieuNaissance : '',
        status : '',
        telephone : '',
        titre : ''

    });




    // console.log(userId)

    const { responseAxios: responseUpdate, error: errorUpdate, loading: loadingUpdate, fetchData: updateUser } = useAxios({
        url: `${apiUrl}users/${userId}`,
        method: "PATCH",
        body: null,
        headers: {
            "Content-type": "application/json",
        }
    });

    const { responseAxios: responseUser, error: errorUser, loading: loadingUser, fetchData: fetchUser } = useAxios({
        url: `${apiUrl}users/${userId}`,
        method: "GET",
        body: null,
        headers: {
            "Content-type": "application/json",
        }
    });

    const { responseAxios: userRoles, error: errorUserRoles, loading: loadingUserRoles, fetchData: fetchUserRoles } = useAxios({
        url: `${apiUrl}users/${userId}/roles`,
        method: "GET",
        body: null,
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    });


    const {responseAxios : allRolesResponse, error: allRolesError, loading: allRolesLoading, fetchData: fetchAllRoles} = useAxios({
        url: `${apiUrl}roles`,
        method: "GET",
        body: null,
        headers : {
            "Content-type": "application/json",
        }
    });

    useEffect(() => {
        fetchUser();
        fetchUserRoles();
        fetchAllRoles();
    }, [userId]);

    useEffect(() => {

        if (userRoles && userRoles._embedded.roles) {
            setSelectedRoles(userRoles._embedded.roles.map(role => role.libelle));
        }

    }, [userRoles])

    useEffect(() => {
        if (responseUser) {
            setUser({
                nom: responseUser.nom,
                prenom: responseUser.prenom,
                email: responseUser.email,
                adresse : responseUser.adresse,
                dateNaissance : responseUser.dateNaissance,
                // email : responseUser.email,
                grade : responseUser.grade,
                lieuNaissance : responseUser.lieuNaissance,
                status : responseUser.status,
                telephone : responseUser.telephone,
                titre : responseUser.titre

            });
            // setSelectedRoles(responseUser.roles);
        }
    }, [responseUser]);

    useEffect(() => {
        
        if (allRolesResponse) {
            setAllRoles(allRolesResponse._embedded.roles);
        }

        return () => {
            
        };
    }, [allRolesResponse]);

    console.log("rendu")


    useEffect(() => {
        if (responseUpdate) {
            console.log(responseUpdate)
            toast.success("Utilisateur modifié avec succès")

            setTimeout(() => {
                navigate("/admin/user")
            }, 100)
        }
    }, [responseUpdate]);

    // console.log(selectedRoles.map(role => "role/"+ allRoles.find(r => r.libelle === role).id))


    const onSubmit = (e) => {
        e.preventDefault();
        const nom = e.target.elements.nom.value;
        const prenom = e.target.elements.prenom.value;
        const email = e.target.elements.email.value;

        const updatedUser = {
            nom,
            prenom,
            email,
            adresse: e.target.elements.adresse.value,
            dateNaissance: e.target.elements.dateNaissance.value,
            grade: e.target.elements.grade.value,
            lieuNaissance: e.target.elements.lieuNaissance.value,
            status: e.target.elements.status.value,
            telephone: e.target.elements.telephone.value,
            titre: e.target.elements.titre.value,
            
            roles: selectedRoles.map(role => "role/"+ allRoles.find(r => r.libelle === role).id),
        }

        updateUser(JSON.stringify(updatedUser));
        // console.log(updatedUser)
    }




    return (
        <div>
            {(loadingUpdate || loadingUser || allRolesLoading) && (
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
                            <Link className='text-tertiaire' to="/admin">Admin</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/admin/user">Users</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-semibold">Edit</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>

            <div className='flex order-2 bg-white shadow-xl rounded-xl'>
                
                
                <div className="w-full xl:w-1/2 h-full flex items-center p-0 border-gray-100 border-4">
                    <form className='max-w-3xl mx-auto  p-5 py-10' onSubmit={onSubmit} >
                        {/* {errorUpdate && (
                            <Alert variant="destructive">
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{errorUpdate}</AlertDescription>
                            </Alert>
                        )} */}

                        <div className='mt-4'></div>

                        <div className='flex items-center justify-around flex-wrap'>
                            {/* nom */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="nom" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Nom <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="nom" placeholder="Nom de l'utilisateur" defaultValue={user.nom} />
                            </div>

                            {/* prénom */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="prenom" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Prénom <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="prenom" placeholder="Prénom de l'utilisateur" defaultValue={user.prenom} />
                            </div>

                            {/* email */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="email" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Email <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="email" placeholder="Email de l'utilisateur" defaultValue={user.email} />
                            </div>

                            {/* adressse */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="adresse" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Adresse <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="adresse" placeholder="Adresse de l'utilisateur" defaultValue={user.adresse} />
                            </div>

                            {/* date de naissance */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="dateNaissance" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Date de naissance <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="date" id="dateNaissance" placeholder="Date de naissance de l'utilisateur" defaultValue={user.dateNaissance} />
                            </div>

                            {/* grade */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="grade" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Grade <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="grade" placeholder="Grade de l'utilisateur" defaultValue={user.grade} />
                            </div>

                            {/* lieu de naissance */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="lieuNaissance" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Lieu de naissance <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="lieuNaissance" placeholder="Lieu de naissance de l'utilisateur" defaultValue={user.lieuNaissance} />
                            </div>

                            {/* status */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="status" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Status <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="status" placeholder="Lieu de naissance de l'utilisateur" defaultValue={user.status} />
                            </div>
                            

                            {/* telephone */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="telephone" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Téléphone <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="telephone" placeholder="Téléphone de l'utilisateur" defaultValue={user.telephone} />
                            </div>

                            {/* titre */}
                            <div className='mb-8 inputContainer min-w-64'>
                                <label htmlFor="titre" className="block text-sm font-medium text-tertiaire text-primaire mb-0">Titre <IndiqueReduired /></label>
                                <input className='w-full px-4 py-2 rounded-lg mt-2 border focus:border-primaire border-2 focus:bg-white focus:outline-none' type="text" id="titre" placeholder="Titre de l'utilisateur" defaultValue={user.titre} />
                            </div>

                        
                            {/* roles */}
                            {allRoles  && allRoles.length > 0 && (
                                <div className='mb-8 inputContainer min-w-64'>
                                    <label htmlFor="select" className="block text-sm font-medium text-gray-700 text-tertiaire">Roles</label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between text-primaire font-normal">
                                                {selectedRoles.length > 0
                                                    ? selectedRoles.map(role => allRoles.find(r => r.libelle === role)?.libelle).join(", ")
                                                    : "Sélectionnez un rôle"}
                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Search roles..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>pas de roles trouvé !</CommandEmpty>
                                                    <CommandGroup>
                                                        {allRoles.map((role) => (
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
                                                                <CheckIcon className={cn("ml-auto h-4 w-4", selectedRoles.includes(role.libelle) ? "opacity-100" : "opacity-0")} />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            )}
                        </div>

                        <div className='flex justify-between'>
                            <Button className="bg-red-800 px-5 hover:bg-red-700 text-white" type="button" variant="secondary" onClick={() => navigate("/admin/user")}>
                                <span className='mr-3'>Annuler</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </Button>
                        
                            <Button type="submit" variant="secondary" className="bg-primaire text-white px-5 hover:bg-primaire_hover">
                                <span className='mr-4'>Valider</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708L6.707 11.5l-4-4a.5.5 0 0 1 .708-.708l3.646 3.647 6.647-6.647a.5.5 0 0 1 .708 0z"/>
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
    )
}

export default Edit;
