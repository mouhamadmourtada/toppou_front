import ListeFinance from "./ListeFinance"
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show"
import Stats from "./Stats"
import {Outlet} from "react-router-dom"

export default [
  {
    path: "finance",
    element: <><Outlet/></>,
    children: [
        {
        path: "",
        element: <Stats/>,
        },
      {
        path: "liste",
        element: <ListeFinance/>,
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