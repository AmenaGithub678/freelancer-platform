import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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
import AddTask from './Pages/AddTask.jsx';
import MyPostedTasks from './Pages/MyPostedTasks.jsx';
import TaskDetails from './Pages/TaskDetails.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Contact from './Pages/Contact.jsx';
import UpadateTask from './Componets/UpadateTask.jsx';
import PrivateRoute from './context/PrivateRoute.jsx';
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Contact></Contact>,
    children:[
        {
        path: "/",
        Component: Home,
          },
            {
        path: "/add-task",
        element: <PrivateRoute>
          <AddTask></AddTask>
        </PrivateRoute>
          },
          {
        path: "/browse-task",
        loader: () =>fetch('https://my-freelancefusion-server.vercel.app/tasks'),
        Component: BrowseTasks,
          },
        {
          path:'/task-details/:id',
          loader: () => fetch('https://my-freelancefusion-server.vercel.app/tasks'),
          Component: TaskDetails,
        },
          {
            path: '/my-posted-task',
            element: <PrivateRoute>
              <MyPostedTasks></MyPostedTasks>
            </PrivateRoute>
          },
          {
            path: '/updateTask/:id',
            loader: ({params}) =>fetch(`https://my-freelancefusion-server.vercel.app/tasks/${params.id}`),
            Component: UpadateTask,
          },

          {
          path: '/contact',
          Component:Contact,
        },
        ]
  },
  {
      path:"/auth",
      Component: AuthLayout,
       errorElement: <Contact></Contact>,
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
<ThemeProvider>
 <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
</ThemeProvider>


   
  </StrictMode>,
)
