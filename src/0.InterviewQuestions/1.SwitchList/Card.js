

function card(Props){
 const {id,title, list ,handelclick } = Props;
 
 


    return(
        <>
        <div 
        style={{border:"1px solid black", margin:"10px", padding:"10px"}} 
        onClick={()=>{
            handelclick(id, list , title);
        }}>
        {title}
        </div>
        </>
    )

}
export default card;