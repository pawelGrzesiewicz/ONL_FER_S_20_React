import React, {useState, useEffect} from "react";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState(false);


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                console.log("RESPONSE", res)
                return res.json()
            })
            .then(res => {
                console.log('Json', res.results)
                setPokemons(res.results)
            })
            .catch(err => {
                console.log("Błąd: ", err)
            })
    }, [])


    if(!pokemons) {
        return <p>Loading...</p>
    }

    return (
        <ul className="list">
            {
                pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))
            }
        </ul>
    )
}

export default Pokemons