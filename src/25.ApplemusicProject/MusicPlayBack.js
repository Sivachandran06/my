import { Route, Routes } from "react-router-dom";
import Homepage from "./src/pages/Homepage";
import SocialPage from "./src/pages/SocialPage";
import Libarypage from "./src/pages/Libarypage";
import Loginpage from "./src/pages/Loginpage";
import PortectedRoutComponent from "./src/component/PortectedRoutComponent/PortectedRoutComponent";



function MusicPlayBack(){



    return(
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/social" element={<SocialPage />}></Route>
            <Route path="/library" element={<PortectedRoutComponent><Libarypage /></PortectedRoutComponent>}></Route>
            <Route path="/login" element={<Loginpage />}></Route>
        </Routes>
        </>
    )
}
export default MusicPlayBack;
