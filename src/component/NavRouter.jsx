import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import ServicePage from "../pages/ServicePage.jsx";
import TodoPage from "../pages/TodoPage.jsx";
import DynamickRoutes from "./DynamickRoutes.jsx";

export const router = createBrowserRouter([

    {
        path : "/",
        element : <div>
            <HomePage/>
        </div>
    },
    {
        path : "/about",
        element : <div>
            <AboutPage/>
        </div>
    },
    {
        path : "/contact",
        element : <div>
            <ContactPage/>
        </div>
    },
    {
        path : "/product",
        element : <div>
            <ProductPage/>
        </div>
    },
    {
        path : "/service",
        element :  <div>
            <ServicePage/>
        </div>
    },{
        path : "/todo",
        element :  <div>
            <TodoPage/>
        </div>
    },
    {
        path : "/todo/:todoID",
        element :  <div>
            <DynamickRoutes/>
        </div>
    }

])















