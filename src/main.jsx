import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Pages/Home.jsx';
import AuthLayout from './Layouts/AuthLayout.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import BrowseTasks from './Pages/BrowseTasks.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import AddTask from './Pages/AddTask.jsx';
import MyPostedTasks from './Pages/MyPostedTasks.jsx';
import TaskDetails from './Pages/TaskDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children:[
        {
        path: "/",
        Component: Home,
          },
            {
        path: "/add-task",
        element: <AddTask></AddTask>
          },
          {
        path: "/browse-task",
        loader: () =>fetch('http://localhost:5000/tasks'),
        Component: BrowseTasks,
          },
        {
          path:'/task-details/:id',
          loader: () => fetch('http://localhost:5000/tasks'),
          Component: TaskDetails,
        },
          {
            path: '/my-posted-task',
            element: <MyPostedTasks></MyPostedTasks>
          }
        ]
  },
  {
      path:"/auth",
      Component: AuthLayout,
      children:[
        {
          path:"/auth/login",
          Component: Login,
        },
        {
          path:"/auth/register",
          Component:Register,
        },
      ]
      },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
