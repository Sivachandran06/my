import React, { useState } from "react";

export const UserContext = React.createContext({
    getToken: "",
    getName: "",
    nameHandler: () => {},
    tokenHandler: () => {},
    logout: () => {}
});

const UserProvider = ({ children }) => {
    const [getName, setName] = useState("");
    const [getToken, setToken] = useState("");

    console.log(getName, getToken, "USER PROVIDER");

    //const {children }= props; to do 

    function NameHandler(name) {
        setName(name);
        localStorage.setItem("name", name);
    }

    function TokenHandler(token) {
        setToken(token);
        localStorage.setItem("token", token);
    }

    const valObj = {
        getName,
        getToken,
        tokenHandler: TokenHandler,
        nameHandler: NameHandler,
        logout
    };

    function logout() {
        setName("");
        setToken("");
    }

    return (
        <UserContext.Provider value={valObj}>{children}</UserContext.Provider>
    );
};

export default UserProvider;
