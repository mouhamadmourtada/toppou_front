import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

import { Link } from 'react-router-dom';
import { Progress } from "@/components/ui/progress"
import MdIcon from '../../components/MdIcon';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import ReactApexChart from "react-apexcharts";
import AddButton from '../../components/AddButton';
import Acteur from './partials/Acteur';
import Financement from './partials/Financement';

const Show = () => {
    const options = {
        series: [
          {
            name: "Dépenses",
            data: [30, 40, 35, 50, 3, 60, 70] // Exemple de données pour les dépenses
          },
          {
            name: "Financements",
            data: [70, 30, 20, 40, 80, 50, 60] // Exemple de données pour les financements
          }
        ],
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#1E3A8A', '#10B981'], // Couleurs personnalisées
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Comparaison des Dépenses et Financements',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // Alternance des couleurs des lignes de la grille
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Exemple de catégories mensuelles
          title: {
            text: 'Mois'
          }
        },
        yaxis: {
          title: {
            text: 'Montant (€)' // Unité de l'axe Y
          },
          min: 0, // Ajustez le minimum selon vos données
          max: 80 // Ajustez le maximum selon vos données
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
    };
    return (
        <div className = "">
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
                        <BreadcrumbPage className="text-primaire font-semibold">Détail projet</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>


            <div className="mt-5 gap-2 flex" >
                
                {/* gauche */}
                <div className="w-3/4">
                    <div className="mb-5 rounded-lg p-5 shadow-xl border-2 border-gray-200 bg-white">
                        <div className='font-bold text-xl mb-3 flex justify-between'>
                            <p>
                                Projet TOPPOU2.0

                            </p>
                            <div className='flex gap-5'>
                                <p className='text-sm font-normal bg-green-200 text-green-800 rounded-lg px-2 py-1' >Status</p>
                                <button className='font-normal bg-primaire hover:bg-primaire_hover text-white text-sm px-2 py-1 ml-2 rounded-lg'>Modifier</button>

                            </div>
                        </div>

                        <div className='lg:flex gap-20 text-sm items-center'>

                            <div className='min-h-5 w-full'>
                                {/* budget plannifié */}
                                <div className='flex border-b-2 border-gray-300 pt-1 mt-2'>
                                    <div className='font-semibold w-full'>Budget plannifié</div>
                                    <div className='w-full font-semi-bold' >100 000 000 FCFA</div>
                                </div>
                                
                                {/* date de début */}
                                <div className='flex border-b-2 border-gray-300 pt-1 mt-2'>
                                    <div className='font-semibold w-full'>Date de début</div>
                                    <div className='w-full font-semi-bold' >01/01/2021</div>

                                </div>

                                {/* date de fin */}
                                <div className='flex border-b-2 border-gray-300 pt-1 mt-2'>
                                    <div className='font-semibold w-full'>Date de fin</div>
                                    <div className='w-full font-semi-bold' >01/01/2022</div>
                                </div>

                                {/* avancement */}
                                <div className='flex border-b-2 border-gray-300 pt-1 mt-2'>
                                    <div className='font-semibold w-full'>Avancement</div>
                                
                                    <div className='w-full font-semi-bold flex items-center' >
                                        <Progress value={66} className="grow h-2 "/>
                                        <span className='w-10 ml-2'>
                                            66%
                                        </span>
                                    </div>
                                </div>

                                {/* objectif */}
                                <div className='mt-5' >
                                    <div className='font-semibold'>Objectif</div>
                                    <div className='rounded-lg w-full border-2 p-2 font-semi-bold'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore rerum tempore iusto quidem voluptate, magnam reiciendis neque, consequuntur magni non mollitia perspiciatis at corporis pariatur eos inventore architecto optio!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus.</div>
                                </div>

                            


                            </div>

                            <div className='min-h-5 w-full'>
                                {/* depenses */}
                                <div className='flex border-b-2 border-gray-300 pt-1 mt-2'>
                                    <div className='font-semibold w-full'>Dépenses</div>
                                    <div className='w-full font-semi-bold' >100 000 000 FCFA</div>
                                </div>

                                {/* Fond actuel */}
                                <div className='flex border-b-2 border-gray-300 pt-1 mt-2'>
                                    <div className='font-semibold w-full'>Fond actuel</div>
                                    <div className='w-full font-semi-bold' >100 000 000 FCFA</div>
                                </div>

                                {/* debut effective */}
                                <div className='flex border-b-2 border-gray-300 pt-1 mt-2'>
                                    <div className='font-semibold w-full'>Début effective</div>
                                    <div className='w-full font-semi-bold' >01/01/2021</div>
                                </div>

                                {/* fin effective */}
                                <div className='flex border-b-2 border-gray-300 pt-1 mt-2'>
                                    <div className='font-semibold w-full'>Fin effective</div>
                                    <div className='w-full font-semi-bold' >01/01/2022</div>
                                </div>

                                {/* description */}
                                <div className='mt-5' >
                                    <div className='font-semibold'>Objectif</div>
                                    <div className='rounded-lg border-2 p-2 font-semi-bold'>Lorem 
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos alias, totam itaque perspiciatis aliquid? Repudiandae possimus assumenda molestiae numquam earum! Eos ullam corrupti aut quae, ut obcaecati. Rem, quam.
                                    </div>
                                </div>

                                
                            </div>

                        </div>

                    </div>

                    <div className='mb-5 rounded-lg p-5 shadow-xl border-2 border-gray-200 bg-white'>
                        <div className="">
                            <h1 className="font-bold text-primaire text-2xl py-2">Dépenses et Financements</h1>
                            <ReactApexChart options={options} series={options.series} type="line" height={options.chart.height} />   
                        
                        </div>
                    </div>

                    <div className='mb-5 rounded-lg p-5 shadow-xl border-2 border-gray-200 bg-white overflow-x-scroll'>
                        <h1 className="font-bold text-primaire text-2xl py-2">Financements</h1>

                        <div className='max-w-xl items-center gap-2 mt-4 flex justify-around '>
                            <Financement className={"mb-5"}/>
                            <Financement className={"mb-5"}/>
                            <Financement className={"mb-5"}/>

                            <Financement className={"mb-5"}/>
                            <Financement className={"mb-5"}/>
                            <Financement className={"mb-5"}/>

                        </div>

                    </div>

                    <div className='mb-5 rounded-lg p-5 shadow-xl border-2 border-gray-200 bg-white overflow-x-scroll'>
                        <h1 className="font-bold text-primaire text-2xl py-2">Activités</h1>


                    </div>

                </div>


                {/* droite */}
                <div class="mb-5 w-1/4">
                    {/* bailleur et budget */}
                    <div className='shadow-xl border-2 border-gray-200 bg-white rounded-lg p-2'>
                        {/* bailleur */}
                        <div className='flex mb-5 w-2/2 items-center' >
                            <div className='rounded-full border-4 border-gray-200 mr-3 p-1 bg-gray-200'>
                                <Avatar className="h-16 w-16" >
                                    <AvatarImage src="https://images.squarespace-cdn.com/content/v1/5dd366b5ac1101724ff2fac7/1574238293109-0UFJN5LRKCJKCU6BJ6EA/man+2.jpg" alt="@shadcn" />
                                    <AvatarFallback>LOGO</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='text-sm'>
                                <p className='text-primaire font-bold'>El hadji Ousmane SOW</p>
                                <p className="text-tertiaire">+221 78 104 50 43</p>
                                <p className="text-tertiaire" > Bailleur</p>
                            </div>
                        </div>
                        {/* financement et budget */}
                        <div className='flex w-full mb-5 items-center w-2/2' >
                            <div className='rounded-full border-4 border-gray-200 mr-3 p-1 bg-gray-200 text-center flex justify-center items-center'>
                                <MdIcon className="w-20 h-20" aria-hidden="true" icon={"MoneyIcon"} />
                            </div>

                            <div className='text-sm'>
                                <p className='text-primaire text-xl font-bold'>1.898.088 FCFA</p>
                                <div className='flex justify-between w-full'>
                                    <p className="text-tertiaire text-xs">Finance</p>
                                    <p className="text-tertiaire text-xs font-semibold">2024/02/01</p>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* chef de projet */}
                    <div className='shadow-xl border-4 border-gray-200 bg-white rounded-lg p-2 mt-5'>
                        <div className='flex justify-center bg-gradient-to-b from-primaire via-white to-white'>
                            <div className='rounded-full border-4 border-gray-200 mr-3 p-1 bg-gray-200'>
                                <Avatar className="h-16 w-16" >
                                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZgxyAhjH4Ihr7_AQOWE8oKwqR0CFnAo8Mw&s" alt="@shadcn" />
                                    <AvatarFallback>LOGO</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <div className='mt-3'>
                            {/* prenom */}
                            <div className="flex text-sm w-full justify-start items-center border-b-2 border-gray-300 mb-2">
                                <div className='font-semibold w-1/3 text-primaire'>Prénom</div>
                                <div className='font-semibold ml-2 w-2/3 text-tertiaire'>: Saliou</div>
                            </div>

                            {/* Nom */}
                            <div className="flex text-sm w-full justify-start items-center border-b-2 border-gray-300 mb-2">
                                <div className='font-semibold w-1/3 text-primaire'>Nom</div>
                                <div className='font-semibold ml-2 w-2/3 text-tertiaire'>: NIANE</div>
                            </div>

                            {/* Email */}
                            <div className="flex text-sm w-full justify-start items-center border-b-2 border-gray-300 mb-2">
                                <div className='font-semibold w-1/3 text-primaire'>Email</div>
                                <div className='font-semibold ml-2 w-2/3 text-tertiaire'>: saliouniane@gmail.com</div>
                            </div>

                            {/* Titre */}
                            <div className="flex text-sm w-full justify-start items-center border-b-2 border-gray-300 mb-2">
                                <div className='font-semibold w-1/3 text-primaire'>Titre</div>
                                <div className='font-semibold ml-2 w-2/3 text-tertiaire'>: professeur titulaire</div>
                            </div>

                            {/* date de naissance */}
                            <div className="flex text-sm w-full justify-start items-center border-b-2 border-gray-300 mb-2">
                                <div className='font-semibold w-1/3 text-primaire'>date de naissance</div>
                                <div className='font-semibold ml-2 w-2/3 text-tertiaire'>: 20/01/2024</div>
                            </div>

                            {/* Université */}
                            <div className="flex text-sm w-full justify-start items-center border-b-2 border-gray-300 mb-2">
                                <div className='font-semibold w-1/3 text-primaire'>Université</div>
                                <div className='font-semibold ml-2 w-2/3 text-tertiaire'>: Université Cheikh Anta diop de dakar</div>
                            </div>

                            {/* Téléphone */}
                            <div className="flex text-sm w-full justify-start items-center border-b-2 border-gray-300 mb-2">
                                <div className='font-semibold w-1/3 text-primaire'>Téléphone</div>
                                <div className='font-semibold ml-2 w-2/3 text-tertiaire'>: +221 78 1045043</div>
                            </div>

                            {/* voir plus */}
                            <div className="flex justify-end mt-5">
                                <button className='font-normal bg-primaire hover:bg-primaire_hover text-white text-sm px-2 py-1 ml-2 rounded-lg'>Voir plus</button>
                            </div>

                            
                        </div>

                    </div>


                    {/* acteurs de projet */}
                    <div className='shadow-xl border-4 border-gray-200 bg-white rounded-lg p-2 mt-5'>
                        <div className='flex justify-end'>
                            <AddButton >Ajouter</AddButton>
                        </div>
                        <p className='text-primaire font-bold mt-3'>
                            Les acteurs du projets :
                        </p>

                        
                        <Acteur></Acteur>
                        <Acteur></Acteur>
                        <Acteur></Acteur>
                        <Acteur></Acteur>
                        <Acteur></Acteur>
                        <Acteur></Acteur>
                        <Acteur></Acteur>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Show;
