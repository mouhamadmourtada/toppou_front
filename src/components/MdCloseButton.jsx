import React from 'react';

const MdCloseButton = ({onClick}) => {

    return (
        <button className='hover:border-none' onClick={onClick}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#F00" stroke-width="1.5"/>
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#F00" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </button>
    );
}

export default MdCloseButton;
