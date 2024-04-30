import { useEffect, useState } from "react";

function DigitalClock(){
const[time , setTime] = useState(new Date().toLocaleTimeString())

useEffect(()=>{
    const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);
    console.log(intervalId)

    return()=>{
        clearInterval(intervalId);
    }
},[])
return(
    <>
    <h1>Digital Clock</h1>
    <h2>{time}</h2>
    </>
)
}
export default DigitalClock;