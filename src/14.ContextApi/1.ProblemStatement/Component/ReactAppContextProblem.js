import { useState } from "react";
import Grocery from "./Grocery";
import ProdeuctDetailsPage from "./ProdeuctDetailsPage";
import ReusableComponent from "./ReusableComponent";

function ReactAppContextProblem( props){

    const[productCount, setProductCount] = useState(100);
    return(
        <>
        <h1>ReactAppContextProblemAPI</h1>
  
        <Grocery productCount={productCount} setProductCount={setProductCount} />
        <ProdeuctDetailsPage productCount={productCount} setProductCount={setProductCount}/>
        <ReusableComponent productCount={productCount} setProductCount={setProductCount} />
        
        </>
    )
}

export default ReactAppContextProblem;