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
                        <BreadcrumbPage className="text-primaire font-semibold">Dashboard depenses</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>

            <div>
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-semibold'>Dashboard dépenses</h1>
                    <div>
                        <Link className="bg-primaire text-white py-1 px-2 rounded-lg" to="/depense/liste">Voir tous les dépenses </Link>

                    </div>
                </div>
            </div>
            stats
        </div>
    );
}

export default Stats;
