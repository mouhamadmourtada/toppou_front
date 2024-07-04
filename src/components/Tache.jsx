import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

export default function Tache({titre, description, action}) {
    return (
        <a href="#1">
            <div 
                className="shadow-lg duration-1000 bg-white hover:shadow-2xl m-4 p-2">
                <div className="py-2 px-2 relative ">
                    <h3 className="mt-2 font-semibold group-hover:text-white flex justify-between">
                        <span className="text-primaire py-1 rounded-3xl">{titre}</span>
                        <a href="#" className=" hover:bg-slate-100 hover:rounded-full p-3">
                            <CiEdit />
                        </a>
                    </h3>
                    <p className="mt-4 font-light text-tertiaire">
                        {description}
                    </p>
                    <div className="flex justify-end">
                        <a href="#" className="flex items-center font-medium m-2 text-white bg-primaire p-1 rounded-sm hover:bg-primaire_hover">
                            <span>Assigner</span><IoMdAdd className="pt-1"/>
                        </a>
                    </div>
                </div>
            </div>
        </a>
    )
}