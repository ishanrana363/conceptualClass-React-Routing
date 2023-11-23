import {NavLink} from "react-router-dom";
import "../assets/css/style.css"

const Navbar = () => {
    return (

            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/about" >About</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/product" >Product</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/service" >Service</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/todo" >Todos</NavLink>
                    </li>
                </ul>
            </nav>
    );
};

export default Navbar;