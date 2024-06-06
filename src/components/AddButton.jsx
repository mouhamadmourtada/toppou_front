import React from 'react';
import MdIcon from '../components/MdIcon';

const AddButton = ({children, className, onClick}) => {
    return (
        <div>
            <button className={`flex justify-center items-center hover:bg-white hover:text-secondaire hover:border-secondaire border-2 bg-secondaire text-white ${className}`} onClick={onClick}>
                <MdIcon className="w-4 h-4 mx-2" aria-hidden="true" icon={"AddIcon"} />
                <span>
                    {children}
                </span>
            </button>

        </div>
    );
}

export default AddButton;
