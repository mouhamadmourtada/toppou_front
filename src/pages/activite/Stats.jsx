import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ChartActiviteDelais from './components/ChartActiviteDelais';
import ChartActiviteCout from './components/ChartActiviteCout';

import { Link } from 'react-router-dom';

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
                        <BreadcrumbPage className="text-primaire font-semibold">Dashboard activités</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-semibold'>Dashboard Activites</h1>
                    <div>
                        <Link className="bg-primaire text-white py-1 px-2 rounded-lg" to="/activite/liste">Voir tous les activités </Link>

                    </div>
                </div>
            </div>

            <div className='bg-white rounded-xl my-5 shadow p-5 md:flex items-center'>
                <div className='w-1/2 h-96'>
                    <ChartActiviteDelais/>
                </div>
                <div className='w-1/2 h-96'>
                    <ChartActiviteCout/>
                </div>

            </div>
        </div>
    );
}

export default Stats;
