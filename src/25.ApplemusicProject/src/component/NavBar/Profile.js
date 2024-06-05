import { defer, useNavigate } from "react-router-dom"
import UseUser from "../../CustomHook/UseUser";



function Profil(){
const {getToken , logout}= UseUser();
const Navigate = useNavigate();

    return(
        <>

        { !getToken && <button onClick={()=>{Navigate("/login")}}>Login</button>}
        {getToken && <button onClick={()=>{logout (); Navigate("/")}}>LogOut</button>}
        
        </>
    )
}  

export default Profil;