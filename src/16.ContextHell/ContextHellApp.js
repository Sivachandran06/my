import { useState } from "react";
import TheamContext from "./Context/TheamContext";
import LanguagaeContext from "./Context/LanguageContext";
import MainComponent from "./Component/MainComponent";





function ContectHellApp(){

    const [language , setLanguage] =useState("English");
    const [ theam, setTheam] = useState("Light");
 
    return(
        <>
        <TheamContext.Provider value={{theam:"Light"}}>
            <LanguagaeContext.Provider value={{language}}>
                <MainComponent />
            </LanguagaeContext.Provider>
        </TheamContext.Provider>

        </>
    )
}

export default ContectHellApp;