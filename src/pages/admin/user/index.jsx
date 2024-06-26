import ListeUser from "./ListeUser"
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show"
import {Outlet} from "react-router-dom"

export default [
  {
    path: "user",
    element: <><Outlet/></>,
    children: [
      {
        path: "",
        element: <ListeUser/>,
      },
      {
        path: "create",
        element: <Create/>,
      },
      {
        path: "edit/:userId",
        element: <Edit/>,
      },
      {
        path: "show/:userId",
        element: <Show/>,
      }
    ]
  }
];