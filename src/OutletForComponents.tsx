import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from "./App.tsx";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Product from './pages/Product.tsx';
import Contact from './pages/Contact.tsx';
import Services from './pages/Services.tsx';
import Faq from './pages/Faq.tsx';
import Error404 from './pages/Error404.tsx';
import SpecificProductDetail from './pages/SpecificProductDetail.tsx';
import AdminPanel from './components/Admin_Dashboard/AdminDashboard.tsx';
import AddUser from './components/Admin_Dashboard/AddUser.tsx';
import AddProduct from './components/Admin_Dashboard/AddProduct.tsx';
import EditUser from './components/Admin_Dashboard/UpdateUser.tsx';

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,

        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'about',
                element:<About/>,
            },
            {
                path:'product',
                element:<Product/>,
            },
            {
                path:'/product/:id',
                element:<SpecificProductDetail/>,
            },
            {
                path:'services',
                element:<Services/>,
            },
            {
                path:'contact',
                element:<Contact/>,
            },
            {
                path:'faq',
                element:<Faq/>,
            },
            {
                path: '/admin',
                element:<AdminPanel/>
            },
            {
                path: '/admin/addUser',
                element:<AddUser/>
            },
            {
                path: '/admin/updateUser/:id',
                element:<EditUser/>
            },
            {
                path: '/admin/addProduct',
                element:<AddProduct/>
            },
            {
                path:'*',
                element:<Error404/>,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
  );
