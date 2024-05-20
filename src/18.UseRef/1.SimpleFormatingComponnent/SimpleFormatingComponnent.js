import { useEffect, useRef } from "react";

function SimpleFormatingComponnent(){

    const inputBoxReffrance = useRef();
    
    useEffect(() =>{
        inputBoxReffrance.current.focus();
    })

    return(
        <>
        <h1>Simple form input box</h1>
        <input ref={inputBoxReffrance} style={{justifyContent:"center",display:"flex"}}
            type="text" placeholder="enter name" id="input-box"
            onChange={()=>{}}></input>
        </>
    )
}

export default SimpleFormatingComponnent;