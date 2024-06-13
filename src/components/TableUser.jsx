import React from 'react';
import ActionComponent from './ActionComponent';
import Modal from './Modal';
import MdCloseButton from './MdCloseButton';
import Drawer from './Drawer';

const TableUser = ({data, columns, actions}) => {
    return (
        <div className='bg-white'>
            <div className="overflow-x-auto rounded shadow-xl">
                <table className="table-auto w-full">
                    <thead className='align-left' >
                        <tr className='bg-primaire  text-white text-xs font-semi-bold tracking-wide uppercase'>
                            {columns.map((column, index) => (
                                <th className='px-2 text-left py-3 uppercase' key={index}>{column}</th>
                            ))}
                            <th className='max-w-20' key={-1}> action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {columns.map((column, index) => (                                
                                    <Td libelle={row[column]} type={typeof(row[column])} key={index}/>
                                ))}
                                <ActionComponent actions={actions} row={row} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>            
        </div>
    );
}

const Td = ({libelle, type}) => {
    const handleClick = () => {
        // Ajouter votre logique pour activer ou désactiver le compte utilisateur ici
        console.log('Toggle account status for user:', libelle);
    };

    if (type === "boolean") {
        return (
            <td className="px-3 py-3 border-b">
                <button className={libelle ? 'bg-green-500 text-white px-4 py-2 rounded-lg' : 'bg-red-500 text-white px-4 py-2 rounded-lg'} onClick={handleClick}>
                    {libelle ? 'Actif' : 'Inactif'}
                </button>
            </td>
        );
    } else {
        return (
            <td className="px-3 py-3 border-b">
                {libelle}
            </td>
        );
    }
}

export default TableUser;
