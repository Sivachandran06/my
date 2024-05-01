import { Component } from "react";

class HellowComonent extends Component{
    state={
        count:0,
    };

    decrement(){
        this.setState(prevState => ({
            count:prevState.count-1,
        }))
    }
    increamnet(){
       this.setState(prevState =>({
        count:prevState.count+1,
       }))
    }
    render(){
        return(
            <>
            <h1>Hellow Component & Counter component Own</h1>

            <h2>Counter Class Component Counter</h2>

            <div style={{display: "flex", 
            flexDirection: "column", 
            gap:"10px", 
            margin:"20px", 
            justifyContent:"center", 
            alignItems:"center"}}>

                <div>{this.state.count}</div>
                <div style={{gap:"10px", margin:"20px", display:"flex"}}>
                    <button onClick={this.decrement.bind(this)}>-</button>
                    <button onClick={this.increamnet.bind(this)}>+</button>
                    
                </div>
            </div>
            </>
        )
    }
}
export default HellowComonent;