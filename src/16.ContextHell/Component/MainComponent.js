import { useContext } from "react";
import LanguagaeContext from "../Context/LanguageContext";
import TheamContext from "../Context/TheamContext";


function MainComponent(){
 const {language } = useContext(LanguagaeContext);
 const {theam} = useContext(TheamContext);


    return(
        <>
            <h1>Main Component is</h1> 
            <p>language: {language}</p> 
            <p>theam :{theam}</p>

        </>
    )

}
export default MainComponent;