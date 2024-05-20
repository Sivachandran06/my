import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';
import LifcycleofComponent from './6.LifeCycleOfReactComponent/LifeCycleofComponent';
import HooksUseEffect from './7.HooksUseEffect/HooksUseEffect';
import { useState } from 'react';
//import PokemonApi from './8.PokemonApi/PokemonApi';
import DigitalClock from './9.DigitalClock/DigitalClock';
import CounterClassComponent from './10.ClassComponent/CounterClassComponent1';
import HellowComonent from './10.ClassComponent/HellowComponentCopy';
import PokemonApi from './10.ClassComponent/PokemonAPI';
import PokemonKingDom from './Component/PokemonKingDom';
import FoodList from './Component/FoodList/foodList';
import HellowComponentCopy from './10.ClassComponent/HellowComponentCopy';
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
      {/* <CounterClassComponent /> */}
      {/* <HellowComonent/> */}
      {/* <PokemonApi /> */}
      {/* <FoodList /> */}
      {/* <PokemonKingDom/> */}
      {/* <HellowComponentCopy/> */}
        



    </>
  );
}

export default App;
