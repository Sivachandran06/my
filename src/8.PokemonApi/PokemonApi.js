import { useEffect, useState } from "react";

function PokemonApi(){
    console.log("pokemon Api Component");
    const [ count, setCount] = useState(0);
    function  convertBigDataintoRevelantData(pokemonData){
        const{id, height, name, abilities=[]} = pokemonData;
        
        const mappedArreay = abilities.map((ablityObj)=>{
            const{ability}= ablityObj;
            const{ name} = ability;

            return name;
        });

        return{
            id,
            height,
            name,
            abilities: mappedArreay,
        };
    }

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((Response)=>{
        return Response.json()
    })
    .then((data)=>{
        console.log(data, "data");
        const revalntdata = convertBigDataintoRevelantData(data);
    })
    }, []);


    return(
        <>
        <div>
            <h1>PokemonApi</h1>

            <button onClick={()=>{
                setCount  ((old)=> old+1);
            }}>Clap {count}</button>

        </div>
        </>
    )

}
export default PokemonApi;