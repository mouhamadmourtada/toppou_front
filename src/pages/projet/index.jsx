import ListeProjet from "./ListeProjet"
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show"
import Stats from "./Stats"
import {Outlet} from "react-router-dom"

export default [
  {
    path: "projet",
    element: <><Outlet/></>,
    children: [
        {
        path: "",
        element: <Stats/>,
        },
      {
        path: "liste",
        element: <ListeProjet/>,
      },
      {
        path: "create",
        element: <Create/>,
      },
      {
        path: "edit/:idProjet",
        element: <Edit/>,
      },
      {
        path: "show/:idProjet",
        element: <Show/>,
      }
    ]
  }
];