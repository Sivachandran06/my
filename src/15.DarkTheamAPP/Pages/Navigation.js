import { NavLink } from "react-router-dom";
import { useContext } from "react";
import DarkThemeContext from '../Context/DarkThemeContext';

function Navigation() {
    const { theme, setTheme } = useContext(DarkThemeContext);

    function themeHandler() {
        setTheme((old) => (old === "LIGHT" ? "DARK" : "LIGHT"));
    }

    return (
        <nav
            style={{
                display: "flex",
                gap: "10px",
                width: "100%",
                padding: "20px",
                height: "60px",
                background: theme === "LIGHT" ? "gray" : "yellow",
                color: theme === "LIGHT" ? "white" : "black",
            }}>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <button onClick={themeHandler}>Toggle Theme</button>
        </nav>
    );
}

export default Navigation;
