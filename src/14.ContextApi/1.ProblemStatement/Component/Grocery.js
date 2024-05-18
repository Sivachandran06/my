import ProductListPage from "./ProductListPage";


function Grocery(props){
    const {productCount, setProductCount} =props;

    return(
        
        
        <>
        <div style={{border:"1px solid black", padding:"10px", margin:"10px"}}>
        <h1>Grocery</h1>
        <ProductListPage productCount ={productCount} setProductCount={setProductCount} />
        </div>
        </>
    )
}

export default Grocery;