import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: ()=>fetch('https://coffee-store-server-7170xcm69-nahidul-islam-siams-projects.vercel.app/coffee')
  },
  {
    path:'addCoffee',
    element:<AddCoffee/>
   
  },
  {
    path: 'updateCoffee/:id',
    element:<UpdateCoffee/>,
  loader: ({params})=>fetch(`https://coffee-store-server-7170xcm69-nahidul-islam-siams-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path:'/users',
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-7170xcm69-nahidul-islam-siams-projects.vercel.app/user')
  }
]);



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
