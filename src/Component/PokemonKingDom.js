import { useEffect, useState } from "react";
import styles from "./PokemonKingDom.module.css"; // Correct path to CSS file
import PokemonCardComponent from "./PokemonCardeComponent";

function PokemonKingDom(props) {
    const [Loading, setLoading] = useState(true);
    const [PokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const url = "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1";

        async function fetchPokemonList() {
            const response = await fetch(url);
            let data = await response.json();
            data = data[0];

            const { results = [] } = data;

            const listOfAllPokemonData = [];

            for (let i = 0; i < results.length; i++) {
                const pokemonDetails = results[i];

                const responseDetails = await fetch(pokemonDetails.url);
                let pokemonDetailsdata = await responseDetails.json();
                pokemonDetailsdata = pokemonDetailsdata[0];

                listOfAllPokemonData.push(pokemonDetailsdata);
            }
            setPokemonData(listOfAllPokemonData);
            setLoading(false);
        }
        fetchPokemonList();
    }, []);

    return (
        <>
            {Loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                <h1>Pokemon Kingdom</h1>
                <div className="app-container">
                    <div className={styles}>
                    
                    {PokemonData.map(pokemon => (
                        <PokemonCardComponent 
                            key={pokemon.id} // Add a unique key prop
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            image={pokemon.image}
                        />
                    ))}
                    </div>
                </div>
                </>
            )}
        </>
    );
}

export default PokemonKingDom;
