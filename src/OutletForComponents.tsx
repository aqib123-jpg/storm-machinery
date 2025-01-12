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
                path:'*',
                element:<Error404/>,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
  );
