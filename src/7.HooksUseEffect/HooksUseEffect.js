import { useEffect, useState } from "react";

function HooksUseEffect() {
  const [phase, setPhase] = useState("Mounted Phase");
  const [count, setCount] = useState(0);
  
  console.log("Stage Of Phase: " + phase);

  useEffect(() => {
    console.log("Inside the useEffect");

    return()=>{
        console.log("cleaup : : : UNMOUNT PHASE")
    }
  });

  console.log("About to show UI in 2 sec (out side the UI)");

  return (
    <>
      {console.log("real UI !!!!")}
      <div> Counter {count} </div>
      <button onClick={() => {
        setCount((prevCount) => prevCount + 1);
        setPhase("updated Phase");
      }}>
        Click Me to Make an Update
      </button>
    </>
  );
}

export default HooksUseEffect;
