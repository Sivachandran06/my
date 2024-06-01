import React, { useState } from "react";

export const UserContext = React.createContext({
    getToken: "",
    getName: "",
    nameHandler: () => {},
    tokenHandler: () => {},
    logout: () => {}
});

const UserProvider = ({ children }) => {
    const [getName, setName] = useState(localStorage.getItem("name"));
    const [getToken, setToken] = useState(localStorage.getItem("token"));

    console.log(getName, getToken, "USER PROVIDER");

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
