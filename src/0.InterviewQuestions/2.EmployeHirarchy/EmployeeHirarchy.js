import { useState } from "react";


function EmployeeHerarchy(Props){
    const {data} = Props;
    const {name, hasAnyOneUnderHim ,item} = data;
    console.log(data, "data");

    const [state , setstate] = useState();

    if(hasAnyOneUnderHim){
        return(
            <>
            <div onClick={()=>{
                setstate((old)=> !old)
            }}>
            <span>{" "} {state ? "v" : ">"} {name}
            </span>
            </div>
            {state && <div style={{padding:"10px"}}>
                {item.map((employee)=>{
                 return <EmployeeHerarchy data ={employee} />
            })}
            </div>}
                    
            </>
        )
    }else {
        return <div>{name}</div>
        
    }
    
}

export default EmployeeHerarchy;