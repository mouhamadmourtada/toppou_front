import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { Draggable } from "react-beautiful-dnd";
import {Link} from "react-router-dom"

export default function Tache({titre, description, action}) {
    return (
        <Link href="#1" className = "">
            <div 
                className="shadow-sm duration-1000 bg-white hover:shadow-lg m-4 p-2 border-2 border-gray-100 rounded-lg w-[350px]">
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
                        <button className="flex items-center font-semibold text-sm px-2 m-2 text-white bg-primaire p-1 rounded-sm hover:bg-primaire_hover">
                            <span>Assigner</span><IoMdAdd className="pt-1"/>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}