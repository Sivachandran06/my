import { Component } from "react";

class CounterClassComponent extends Component{
    state={
        count : 0,
        abcdezz: 10,

    };
    decrement(){
        this.setState({
            ...this.state,
            count:-1,
        })
    }

    increment(){
        this.setState({
            ...this.state,
            count:+1,
        })
    }
    
    render(){
        return(
        <>
        <h1>Counter Class Component</h1>
        <div 
        style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap:"10px", 
            margin:"20px", 
            justifyContent:"center", 
            alignItems:"center"
            }}>
                <div id="Counter" >{this.state.count}</div>
                <div style={{display:"flex", gap:"10px", margin: "20px"}}>
                    <button onClick={this.decrement.bind(this)}>-</button>
                    <button onClick={this.increment.bind(this)}>+</button>
                </div>
        </div>
        </>
        );
    }


}

export default CounterClassComponent;