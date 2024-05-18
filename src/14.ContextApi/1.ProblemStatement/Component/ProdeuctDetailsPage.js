function ProdeuctDetailsPage(props){
    const {productCount , setProductCount} = props;

    return(
        <>
        <div style={{background:"yellow"}}>
        <h1>ProdeuctDetailsPage</h1>
        <p>productCount: {productCount} </p>
        </div>
        </>
    )
}

export default ProdeuctDetailsPage;