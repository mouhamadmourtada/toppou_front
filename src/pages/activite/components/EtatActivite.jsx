import React from 'react';

const EtatActivite = ({etat}) => {

    const getClasses = (etat) => {
        switch(etat){
            // enum('ANNULEE','A_VENIR','EN_COURS','TERMINEE')
            case "ANNULEE" : return "bg-red-100 text-red-800";
            case "A_VENIR" : return "bg-blue-100 text-blue-800";
            case "EN_COURS" : return "bg-yellow-100 text-yellow-800";
            case "TERMINEE" : return "bg-green-100 text-green-800";
            default: return "bg-gray-500 text-gray-800";
        }
    }

    const getLibelle = (etat) => {
        switch(etat){
            // enum('ANNULEE','A_VENIR','EN_COURS','TERMINEE')
            case "ANNULEE" : return "Annulée";
            case "A_VENIR" : return "A venir";
            case "EN_COURS" : return "En cours";
            case "TERMINEE" : return "Terminée";
            default: return "Inconnu";
        }
    }

    return (
        <div>
            <span className={`px-2 py-0.5 rounded-xl font-semibold text-sm ${getClasses(etat)}`}>
                {getLibelle(etat)}
            </span>
        </div>
    );
}

export default EtatActivite;
