import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import DarkTheamContect from './Context/DarkTheamContext';
import { useState } from 'react';
import Navigation from './Pages/Navigation';


function DarkTheamApp(){

    const [theam, setTheam]=useState("LIGHT");


    return(

        <>
        <DarkTheamContect.Provider value={{theam : theam , setTheam:setTheam}}>
        <Navigation />
        <h1>Dark Theam App</h1>

        <Routes>
            <Route path={"/contact"} element ={<ContactPage />} />
            <Route path={"/about"} element= {<AboutPage />} /> 
        </Routes> 
        </DarkTheamContect.Provider>

        
        </>
    )
}

export default DarkTheamApp;