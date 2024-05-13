import { useState } from "react";

function MentorPage(){

    const [MentorList,] =useState(["Suguna","Subbu", "rathana", "Shiva", "Joyce" ])
    return(
        <>
        <h1>Mentor  Associate with US </h1>
        {MentorList.map((mentor)=>{
            return(<div style={{margin:"10px",background:"yellow",height:"75px", width: "200px"}}>{mentor}</div>)
        })}
        </>
    )
}
export default MentorPage;