

function Card(props){
    const {productCount , setProductCount} =props;
    return(
        <>
        <div style={{background:"yellow"}}>

        <h1>Card</h1>
        <button onClick={()=>{
            setProductCount(old => old+1)
        }}>+</button>
        <p>productCount {productCount}</p>
        <button onClick={()=>{
            setProductCount(old => old-1)
        }}>-</button>
        </div>
        </>
    )
}

export default Card;