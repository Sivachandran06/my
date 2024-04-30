import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';
import LifcycleofComponent from './6.LifeCycleOfReactComponent/LifeCycleofComponent';
import HooksUseEffect from './7.HooksUseEffect/HooksUseEffect';
import { useState } from 'react';
import PokemonApi from './8.PokemonApi/PokemonApi';

function App() {
  const [ flag , setFlag]=useState(true);
  return (
    <>
      {/* <MyForm /> */}
      {/* <OwnForms /> */}
      {/* <LifcycleofComponent /> */}
      {/* {flag && <HooksUseEffect />} */}
      {/* <button onClick={()=>setFlag((oldval)=> !oldval)}> Click me to Clear All</button> */}

      <PokemonApi />
    </>
  );
}

export default App;
