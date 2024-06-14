import ListeRole from "./ListeRole"
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show"
import {Outlet} from "react-router-dom"

export default [
  {
    path: "role",
    element: <><Outlet/></>,
    children: [
      {
        path: "",
        element: <ListeRole/>,
      },
      {
        path: "create",
        element: <Create/>,
      },
      {
        path: "edit/:id",
        element: <Edit/>,
      },
      {
        path: "show/:id",
        element: <Show/>,
      }
    ]
  }
];