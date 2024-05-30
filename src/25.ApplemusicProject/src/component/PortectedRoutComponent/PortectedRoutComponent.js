import { Navigate } from "react-router-dom";
import UseUser from "../../CustomHook/UseUser";


function PortectedRoutComponent(props){
    const {children } = props;

    const{getToken}= UseUser();

    if(getToken){
        return<>{children}</>
    }else{
        return<Navigate to={"/login"}/>
    }
}
export default PortectedRoutComponent;