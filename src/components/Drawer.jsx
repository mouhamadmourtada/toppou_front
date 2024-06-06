import React from 'react';
import Modal from './Modal';
const Drawer = ({children, isOpen, toggleIsOpen}) => {


    return (
        <Modal isOpen={isOpen} toggleIsOpen={toggleIsOpen}>
            <DrawerContent>
                {children}
            </DrawerContent>
        </Modal>
    );
}

export default Drawer;

const DrawerContent = ({children}) => {
    return (
        <div className='flex w-full justify-end h-full'>
            <div className='bg-white w-1/2 '>
                <p>Drawer Content</p>
                {children}
            </div>

        </div>        
    );
}
