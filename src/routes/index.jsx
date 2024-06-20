import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import {useAuth} from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../auth/Login"
import Dashboard from "../pages/Dashboard";
import { Page404 } from "../pages/Page404";
import { NonAuthRoute } from "./NonAuthRoute";
import Layout from "../layout/Layout";
import ListeTodos from "../pages/todo/index";
import {Edit as EditTodo} from "../pages/todo/Edit";
import { Show as ShowTodo } from "../pages/todo/Show";
import {Create as CreateTodo} from "../pages/todo/Create";
import TestUpload from "../auth/TestUpload";
import Register from "../auth/Register";
import Landing from "../pages/Landing";
import Thanks from "../pages/Thanks";
import RecapAdmin from "../pages/admin/index";
import ListeRole from "../pages/admin/role/ListeRole";
import UserModule from "../pages/admin/user/index"
import RoleModule from "../pages/admin/role/index"
import ProjetModule from "../pages/projet/index"
import ActiviteModule from "../pages/activite/index"
import DepenseModule from "../pages/depense/index"
import FinanceModule from "../pages/finance/index"
import Profile from "../pages/profile/index"



const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
    {
      path: "/",
      element: <Landing/>,
    },
    {
      path: "/thanks",
      element: <Thanks/>,
    },
    {
      path: "*",
      element: <Page404/>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "",
      element: 
      <Layout>
        <ProtectedRoute />
      </Layout>,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
            path: "dashboard",
            element: <Dashboard />,
        },
        {
          path: "admin",
          element: <><Outlet/></>,
          children : [
            {
              path : "",
              element : <RecapAdmin/>
            },
            ...UserModule,
            ...RoleModule,
          ]
        },
        ...ActiviteModule,
        ...ProjetModule,
        ...DepenseModule,
        ...FinanceModule,
        {
          path: "todos",
          element: <><Outlet/></>,
          children: [
            {
              path: "",
              element: <ListeTodos/>,
            },
            {
              path: "create",
              element: <CreateTodo/>,
            },
            {
              path: "show/:id",
              element: <ShowTodo/>,
            },
            {
              path: "edit/:id",
              element: <EditTodo/>,
            },
          ],
        },
        {
          path: "logout",
          element: <div>Logout</div>,
        },
        {
          path : "profile",
          element : <Profile/>
        },
        {
            path: "*",
            element: <Page404/>,
            // on doit avoir une redirection vers une page 404
        }
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <NonAuthRoute/>,
      children : [
        {
          path: "/",
          element: <Login />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
      },
        {
          path : '/upload',
          element: <TestUpload/>
        }
      ]
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter(
    // routesForPublic
    [
    // ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly
  ]
);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;