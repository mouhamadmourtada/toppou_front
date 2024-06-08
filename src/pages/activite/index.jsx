import ListeActivite from "./ListeActivite"
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show"
import Stats from "./Stats"
import {Outlet} from "react-router-dom"

export default [
  {
    path: "activite",
    element: <><Outlet/></>,
    children: [
      {
        path: "",
        element: <Stats/>,
      },
      {
        path: "liste",
        element: <ListeActivite/>,
      },
      {
        path: "create",
        element: <Create/>,
      },
      {
        path: "edit",
        element: <Edit/>,
      },
      {
        path: "show",
        element: <Show/>,
      }
    ]
  }
];