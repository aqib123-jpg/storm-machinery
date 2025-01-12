// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.tsx';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   // <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>  
// );
//   {/* </React.StrictMode> */}



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './OutletForComponents.tsx'; // Assuming you have exported router setup

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(<RouterProvider router={router} />
);
