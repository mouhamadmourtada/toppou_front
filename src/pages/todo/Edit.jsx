import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
export function Edit() {

    const links = [
        {
            label : "Todos",
            lien : "/todos",
            icon : "HomeIcon"
        },{
            label : "edit",
            lien : "/todos/edit",
            icon : "EditIcon"
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

// export default Edit;
