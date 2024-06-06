import React from 'react';
import MdIcon from '../components/MdIcon';
import { Link } from 'react-router-dom';

const BreadCrumb = ({links}) => {
    return (
        <div className='w-min'>
            
            {/* <!-- Breadcrumb --> */}
            <nav class="flex text-gray-700 border border-gray-200 rounded-lg bg-gray-50 " aria-label="Breadcrumb">
                <ol class="inline-flex items-center pr-4 space-x-1 md:space-x-2 rtl:space-x-reverse hover:text-secondaire">
                    
                    {links.map( (link, index) => (
                        <li key={index} className="hover:bg-primaire hover:text-secondaire py-3 px-3">
                            <div class="flex items-center">
                                <MdIcon className="w-4 h-4 mx-2" aria-hidden="true" icon={link.icon} />
                                <Link to={link.lien} class="text-sm font-medium text-gray-700 hover:text-inherit ">{link.label}</Link>

                                {index != links.length - 1 &&
                                    <Slash className="mx-2"></Slash>
                                }
                            </div>

                        </li>
                    ) 
                    )}
                    
                </ol>
            </nav>

        </div>
    );
}

export default BreadCrumb;

const Slash  = ({className}) => {
    return (
        <div className={className}>
            <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
        </div>
    )
}
