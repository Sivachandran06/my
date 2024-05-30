import { useContext } from "react";
import React from "react";
import { UserContext } from "../provider/UseProvider";


function UseUser (){

    return useContext(UserContext);
}

export default UseUser;