import { useContext, useEffect ,useState} from "react";
import { UserContext } from "../../provider/UseProvider";
import { useNavigate } from "react-router-dom";



function LoginPage() {
    const contextData = useContext(UserContext);
    const { nameHandler, tokenHandler } = contextData;
    const navigate = useNavigate();
    
    const [loginState, setLoginState] = useState({
        email: "",
        password: "",
        appType: "music"
    });

    async function submitForm() {
        const url = "https://academics.newtonschool.co/api/v1/user/login";
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("projectID", "v6vl3jr9l35a");

        const raw = JSON.stringify({
            email: loginState.email,
            password: loginState.password,
            appType: "music"
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(url, requestOptions);
        const data = await response.json();
        const token = data?.token;
        const name = data?.data.user.name;

        tokenHandler(token);
        nameHandler(name);

        navigate("/");
    }

    function formHandler(e, key) {
        const val = e.target.value;
        setLoginState(old => ({
            ...old,
            [key]: val,
        }));
    }

    return (
        <>
            <h1>Login page</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                submitForm();
            }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => formHandler(e, "email")}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => formHandler(e, "password")}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default LoginPage;
