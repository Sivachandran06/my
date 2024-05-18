import { useContext } from "react";
import DarkTheamContect from "../Context/DarkTheamContext";
import styles from"../Pages/AboutPage.module.css";


function AboutPage(){

    const ContextData= useContext(DarkTheamContect);
    const{theam}= ContextData;
    return(
        <>
        <h1 className={theam === "LIGHT" ? styles.light : styles.dark } >About Page </h1>
        </>
    )
}

export default AboutPage;