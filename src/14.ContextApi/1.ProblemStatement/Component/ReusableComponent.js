import Card from "./Card";

function ReusableComponent(props){
    const {productCount, setProductCount} = props;

    return(
        <>
        <div style={{border:"1px solid black", padding:"10px", margin:"10px"}}>
        <h1>ReusableComponent</h1>
        <Card productCount={productCount} setProductCount={setProductCount}/>
        </div>
        </>
    )
}

export default ReusableComponent;