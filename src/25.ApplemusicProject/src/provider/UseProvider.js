import React, { useState } from "react"

export const UserContext = React.createContext({
 getToken :"",
 getName:"",
 nameHandler:() =>{},
 tokenHandler:() =>{}
});

const UserProvider = (props) =>{
    const[getName ,setName] =useState(()=>{
        localStorage.getItem("name");
    });
    const[getToken , setToken] = useState(()=>{
        localStorage.getItem("token");
    });

    console.log(getName , getToken ,"USER PROVIDER");
    const { Childern } = props;

    function Namehandeler(name){
        setName(name);
        localStorage.setItem("name", name);
    }
    function TokenHandeler(token){
        setToken(token);
        localStorage.setItem("token" , token);
    }

    const valObj = {
        getName,
        getToken,
    }
    return(
        <>
        <UserContext.Provider value={valObj}>{ Childern}</UserContext.Provider>
        </>
        
    );

};

export default UserProvider;