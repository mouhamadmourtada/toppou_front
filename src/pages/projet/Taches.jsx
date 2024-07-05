import React from 'react'
import Tache from '../../components/Tache'
import dataTaches from './data-taches';
import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Taches() {
  
  return (
    <>
      {/* breadcrumb */}
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
                      <Link className='text-tertiaire' to="/projet/liste">Projet</Link>
                  </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                  <BreadcrumbLink>
                      <Link className='text-tertiaire' to="/projet/show/1">Détails</Link>
                  </BreadcrumbLink>
                  </BreadcrumbItem>
                  
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                  <BreadcrumbPage className="text-primaire font-semibold">Tâches</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>

      </div>
      {/* <div className='flex justify-between w-full text-sm'>
          <div className='bg-white w-1/3 mx-2 rounded-lg h-fit'>
              <h2 className="my-3 px-3 text-base pb-4 font-bold text-primaire">Liste des tâches</h2>
              <Tache titre="Gestion des taches" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore." />
              <Tache titre="Gestion des utilisateurs" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore. 4" />
              <Tache titre="Gestion des projet" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore. 5" />
          </div>
          <div className='bg-white w-1/3 mx-2 rounded-lg h-fit'>
              <h2 className="my-3 px-3 text-base pb-4 font-bold text-primaire">En cours</h2>
              <Tache titre="Gestion des utilisateurs" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore. 2" />
          </div>
          <div className='bg-white w-1/3 mx-2 rounded-lg h-fit'>
              <h2 className="my-3 px-3 text-base pb-4 font-bold">
              <span className=' text-green-800 bg-green-100 rounded-lg py-1 px-2'>
                Terminées

              </span>
              </h2>
              <Tache titre="Gestion des taches" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore. 3" />
          </div>
      </div> */}
      <div className='flex justify-between w-full text-sm'>
        {dataTaches.columnOrder.map((columnId) => {
          const column = dataTaches.columns[columnId];
          const taches = column.taches.map((tacheId) => dataTaches.taches[tacheId]);
          return (
            <div className='bg-white w-1/3 mx-2 rounded-lg h-fit' key={columnId}>
              <h2 className="my-3 px-3 text-base pb-4 font-bold text-primaire">{column.title}</h2>
              {taches.map((tache) => (
                <Tache titre={tache.titre} description={tache.description} key={columnId}/>
              ))}
            </div>
          );
        })}
      </div>
    </>
  )
}
