import { useEffect, useState } from "react";

function LifcycleofComponent(){

    const [greeting , setGreeting] = useState("Hellow");
    const [ Phase , setPhase] = useState("Mounting");
    console.log('RENDERING!!' +Phase );

    useEffect(()=>{
        console.log("API working");
        for(let i=0; i<300000000; i++ ){

        }
        console.log("API finished");
    });

    console.log("after useEffect");
    return (
        <>
        <div style={{border: "2px solid black "}}>
            <h1>{greeting}</h1>
            <button onClick={()=>{
                setGreeting("Bye");
                setPhase("Updated Phase")
            }}>Click</button>

        </div>
        </>
    )
}

export default LifcycleofComponent;