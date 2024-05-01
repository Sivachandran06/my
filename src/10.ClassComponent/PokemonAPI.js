import { Component } from "react";

class PokemonApi extends Component {
    state = {
        SelectedPokemon: "",
        loading: true,
        pokemonData: null // Added pokemonData state to hold fetched data
    }

    convertBigDataintoRelevantData(pokemonData) {
        const { id, height, abilities = [] } = pokemonData;
        const mappedArray = abilities.map((abilityObj) => {
            const { ability } = abilityObj;
            const { name } = ability;
            return name;
        });
        return { abilities: mappedArray, height };
    }

    onSelectionChange(event) {
        const value = event.target.value;
        this.setState({
            SelectedPokemon: value,
            loading: true // Set loading to true when new selection is made
        });
    }

    async componentDidMount() {
        console.log("Component Did Mount");
        const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            this.setState({
                pokemonData: this.convertBigDataintoRelevantData(data),
                loading: false
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.SelectedPokemon !== this.state.SelectedPokemon) {
            console.log("Component Did Update");
            const url = `https://pokeapi.co/api/v2/pokemon/${this.state.SelectedPokemon}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);

                this.setState({
                    pokemonData: this.convertBigDataintoRelevantData(data),
                    loading: false
                });
            } catch (error) {
                console.error("Error fetching data:", error);
                this.setState({ loading: false });
            }
        }
    }

    render() {
        const { SelectedPokemon, loading, pokemonData } = this.state;

        console.log("render");
        console.log(pokemonData, "selected pokemon");

        return (
            <>
                <div>
                    <h1>Select Pokemon</h1>
                    <select onChange={this.onSelectionChange.bind(this)}>
                        <option value={""}>SELECT NEXT POKEMON (pokemon)</option>
                        <option value={"ditto"}>DITTO</option>
                        <option value={"pikachu"}>PIKACHU</option>
                        <option value={"bulbasaur"}>BULBASAUR</option>
                    </select>
                </div>
                <h1>Pokemon API 1.0</h1>
                {pokemonData && !loading && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            width: "500px",
                            border: "1px solid black"
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                            <p>abilities: {pokemonData.abilities.join(", ")}</p>
                            <p>height: {pokemonData.height}</p>
                        </div>
                    </div>
                )}
                {loading && (
                    <h1>Loading....</h1>
                )}
            </>
        );
    }
}

export default PokemonApi;
