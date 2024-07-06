import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"


  import BarChart from "@/components/Chart"
import ReactApexChart from "react-apexcharts";

import { Link } from 'react-router-dom';

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
const Stats = () => {
    return (
        <div>
            <div className='my-3 font-semibold'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/dashboard">Home</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        {/* <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/admin">Admin</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link className='text-tertiaire' to="/role">Role</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem> */}
                       
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage className="text-primaire font-semibold">Dashboard projet</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>

            <div>
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-semibold'>Dashboard projet</h1>
                    <div>
                        <Link className="bg-primaire text-white py-1 px-2 rounded-lg" to="/projet/liste">Voir tous les projet </Link>

                    </div>
                </div>
            </div>

            <div className="w-full flex  gap-6 mt-6">
                        <div className="flex-none w-1/2 overflow-hidden bg-white rounded-xl p-4 ">
                            <h1 className="font-bold text-primaire text-2xl py-2">Dépenses et Financements</h1>

                            <ReactApexChart options={options} series={options.series} type="line" height={options.chart.height} />   
                         
                        </div>
                        <div className="lg:w-1/2  sm:w-full  p-4 bg-white rounded-xl">
                            <h1 className="font-bold text-primaire text-2xl py-2">Dépenses</h1>
                            <BarChart />
                        </div>
                    </div>
        </div>
    );
}

export default Stats;
