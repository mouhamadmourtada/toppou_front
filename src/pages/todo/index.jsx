import React, { useEffect } from 'react';
import {Outlet, Link, useNavigate} from "react-router-dom";
import Table from "../../components/Table";
import ActionComponent from '../../components/ActionComponent';
import BreadCrumb from '../../components/BreadCrumb';
import IndiquePage from '../../components/IndiquePage';
import AddButton from '../../components/AddButton';
import useAxios from '../../Hook/useAxios';

const ListeTodos = () => {

    const navigate = useNavigate()

    const {responseAxios, error, loading, fetchData } = useAxios({
        url : 'localhost:8000/api/todos',
        method : "GET",
        body : null,
        headers : {
            "Content-type" : "application/json"
        }

    }
    )

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const columns = [
        "id",
        "title",
        "completed",
        "description"
    ]
    
    
    const data = [
        {
            id: 1,
            title: "Todo 1",
            completed: false,
            description: "Description 1"
        },
        {
            id: 2,
            title: "Todo 2",
            completed: true,
            description: "Description 2"
        },
        {
            id: 3,
            title: "Todo 3",
            completed: false,
            description: "Description 3"
        }
    ]
    
    const actions = [
        {
            name: "view",
            function: (id) => {
                navigate(`/todos/show/${id}`)
                console.log(`/todos/show/${id}`)
                // console.log("view")
            }
        },
        {
            name: "edit",
            function: (id) => {
                // Navigate(`/todos/edit/${id}`)
                navigate(`/todos/edit/${id}`)
                console.log(`/todos/edit/${id}`)
                // console.log('edit')
            }
        },
        {
            name: "delete",
            function: (id) => {
    
                console.log('delete')
            }
        }
    ]

    const links = [
        {
            label : "Todos",
            lien : "/todos",
            icon : "HomeIcon"
        }
        // ,{
        //     label : "edit",
        //     lien : "/todos/edit/1",
        //     icon : "EditIcon"
        // }
    ]

    const goToAddTodo = () => {
        navigate("/todos/create")
    }


    return (
        <div >
            <BreadCrumb links = {links} />
            <div className='flex justify-between py-2'>
                <IndiquePage className={"mt-3"}>Liste des todos</IndiquePage>
                <AddButton onClick={goToAddTodo} >Nouveau Todo</AddButton>
            </div>
            <Table columns = {columns} data = {data} actions={actions}/>
           

           
        </div>
    );
}

export default ListeTodos;



