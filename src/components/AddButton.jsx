import React from 'react';
import MdIcon from '../components/MdIcon';

const AddButton = ({children, className, onClick}) => {
    return (
        <div>
            <button className={`flex justify-center items-center hover:bg-primaire_hover  text-sm border-2 bg-primaire text-white px-4 py-1 rounded ${className}`} onClick={onClick}>
                <MdIcon className="w-4 h-4 mr-2" aria-hidden="true" icon={"AddIcon"} />
                <span>
                    {children}
                </span>
            </button>

        </div>
    );
}

export default AddButton;
