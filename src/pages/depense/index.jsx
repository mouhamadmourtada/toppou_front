import ListeDepense from "./ListeDepense"
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show"
import Stats from "./Stats"
import {Outlet} from "react-router-dom"

export default [
  {
    path: "depense",
    element: <><Outlet/></>,
    children: [
        {
        path: "",
        element: <Stats/>,
        },
      {
        path: "liste",
        element: <ListeDepense/>,
      },
      {
        path: "create",
        element: <Create/>,
      },
      {
        path: "edit/:idDepense",
        element: <Edit/>,
      },
      {
        path: "show/:idDepense",
        element: <Show/>,
      }
    ]
  }
];