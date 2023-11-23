import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,} from "react-router-dom";

import App from './App.jsx'
import {router} from "./component/NavRouter.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
