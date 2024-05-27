import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import SerachBar from "./SearchBar";
import Profil from "./Profile";



function NavBar(){

    return(
        <>
        <nav>
        <NavLink to={"/"}><Logo/></NavLink>

        <ul>
            <li>
                <NavLink to ={"/home"}>HOME</NavLink>
            </li>
            <li>
                <NavLink to ={"/social"}>SOCIAL</NavLink>
            </li>
            <li>
                <NavLink to ={"/library"}>LIBRARY</NavLink>
            </li>
        </ul>

        <SerachBar />
        <Profil />
        </nav>
        </>

    )
}
export default NavBar;