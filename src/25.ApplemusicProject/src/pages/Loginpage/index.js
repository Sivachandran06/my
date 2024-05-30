import { useEffect } from "react";
import { useState } from "react";
import { redirect } from "react-router-dom";


function Loginpage(){

    const [Loginstate , setLoginState] = useState({
            email: "",
            password: "",
            appType: "music"
    });

    useEffect(()=>{
        async function callAPI(){
            const url = "https://academics.newtonschool.co/api/v1/user/login";
            const myHeaders = new Headers;
            myHeaders.append ("content-Type", "applicalion/Json");
            myHeaders.append("projectID", "v6vl3jr9l35a");

            const raw = JSON.stringify({
                email: Loginstate.email,
                password: Loginstate.password,
                appType: "music"
            });

            const Reaqestoption ={
                method : "POST",
                headers: myHeaders,
                body:raw,
                redirect:"follow"
            };

            const responce = await fetch(url, Reaqestoption);
            const data = await responce.json();
            console.log( "data login" , data);
        }
        callAPI();
    },[]);

    function formHandeler(e, key){
        const val = e.target.value;
        setLoginState(old =>{
            return{
                ...old,
            [key]:val,
            }
        })
    }

    return(
        <>
            <h1>Login page</h1>

 <form  onSubmit={(e)=>{
     e.preventDefault();
     console.log("login" , Loginstate)
      }}>
     <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
           </label>
       <input
       type="email"
       className="form-control"
       id="exampleInputEmail1"
       aria-describedby="emailHelp"
       onChange={(e)=>formHandeler(e, "email")}
      />
    <div id="emailHelp" className="form-text">
       We'll never share your email with anyone else.
    </div>
    </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
             Password
            </label>
            <input
             type="password"
             className="form-control"
             id="exampleInputPassword1"
             onChange={(e)=>formHandeler(e, "password")}
             />
    </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
             <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
            </label>
        </div>
    <button type="submit" className="btn btn-primary" >
    Submit
     </button>
</form>

        </>
    )
}

export default Loginpage;