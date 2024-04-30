import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';
import LifcycleofComponent from './6.LifeCycleOfReactComponent/LifeCycleofComponent';
import HooksUseEffect from './7.HooksUseEffect/HooksUseEffect';
import { useState } from 'react';
import PokemonApi from './8.PokemonApi/PokemonApi';
import DigitalClock from './9.DigitalClock/DigitalClock';
import CounterClassComponent from './10.ClassComponent/CounterClassComponent1';

function App() {
  const [ flag , setFlag]=useState(true);
  return (
    <>
      {/* <MyForm /> */}
      {/* <OwnForms /> */}
      {/* <LifcycleofComponent /> */}
      {/* {flag && <HooksUseEffect />} */}
      {/* <button onClick={()=>setFlag((oldval)=> !oldval)}> Click me to Clear All</button> */}

      {/* <PokemonApi /> */}
      {/* <DigitalClock/> */}
      <CounterClassComponent />
    </>
  );
}

export default App;
