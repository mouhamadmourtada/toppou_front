import React from 'react';
import Tache from '@/components/Tache';

const FourActivities = () => {
    const actvities = [
        {
        id: "1",
        titre: "Gestion des taches",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore."
      },
      {
        id: "2",
        titre: "Gestion des utilisateurs",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore."
      },
      {
        id: "3",
        titre: "Gestion des projet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore."
      },
      {
        id: "4",
        titre: "Gestion des taches",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore."
      },
      {
        id: "5",
        titre: "Gestion des taches",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore."
      },
      {
        id: "6",
        titre: "Gestion des taches",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore."
      },
    ]
    return (
        <div className="max-w-full flex overflow-scroll">
            {actvities.map((tache) => (
                <Tache titre={tache.titre} description={tache.description} key={tache.id}/>
            ))}
        </div>
    );
}

export default FourActivities;
