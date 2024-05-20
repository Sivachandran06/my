import { useRef, useState } from "react";


function UnduMessage(){

    const[sending , setSending] = useState(false);
    //const[timeId , setTimeId] = useState();
    const ref = useRef();
    
    function sendHandeler(){
        setSending(true);
        const id = setTimeout(() => {
            console.log("Removing undo")
            setSending(false)   
        }, 5000);
        //setTimeId(id);
        ref.current= id;
        
        
    }

    function UndoHandeler(){
        clearTimeout(ref.current);
        setSending(false);
    }


    return(
        <>
        <h1> Undo Message</h1>
        <div>
        <input type="text" placeholder="Enter The Message " />
            <button disabled={sending} onClick={sendHandeler}> Send</button>
        
        </div>
        {sending && (
        <div>
        <button  onClick={UndoHandeler}>Undo</button>
        </div>
        )}
        </>

    )
}
export default UnduMessage;
