import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';

export function Show(){
    const links = [
        {
            label : "Todos",
            lien : "/todos",
            icon : "HomeIcon"
        },{
            label : "show",
            lien : "/todos/show",
            icon : "ShowIcon"
        }
    ]
    return (
        <div>
            <BreadCrumb links = {links} />
            <div className='mt-5 bg-white min-h-20 rounded shadow-xl border border-1 border-gray-200'>

            </div>

        </div>
    );
}

