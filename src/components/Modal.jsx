import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import MdCloseButton from './MdCloseButton';

const Modal = ({ children, isOpen, toggleIsOpen }) => {


    const handleClose = () => {
        toggleIsOpen()

    };

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                handleClose(); // Fermer le modal si l'utilisateur appuie sur la touche "Escape"
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []); // Utilisez un tableau vide pour exécuter cette fonction de nettoyage une seule fois à l'initialisation

    return createPortal(
        isOpen ? (
            <div onClick={handleOutsideClick} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
                    <div className=' absolute top-0 flex justify-end w-full'>
                        <MdCloseButton onClick={handleClose} /> 
                    </div>
                {/* <div className="bg-white rounded-lg p-6 max-w-4xl w-full" > */}
                    {children} 
                {/* </div> */}
            </div>
        ) : null,
        document.body
    );
};

export default Modal;


