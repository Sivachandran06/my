import Faq from "../components/Faq";
import WelcomComponent from "../components/WelcomComponent";


function Home(){

    return(
        <>
        <WelcomComponent/>
        <div style={{ margin:"10px", }}> Welcome to 1 % elite </div>
        <Faq />
        </>
    )


}
export default Home;