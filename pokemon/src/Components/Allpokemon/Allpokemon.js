import React, { useEffect, useState } from 'react'
import Singlepokemon from '../Singlepokemon/Singlepokemon';
import "./Allpokemon.css"
export default function Allpokemon() {
    const [state, setState] = useState([]);
    const [nextUrl, setNexturl] = useState([]);
    useEffect(() => {
        fetchPokemon("https://pokeapi.co/api/v2/pokemon");
    }, [])

    const fetchPokemon = async (url) => {
        let res = await fetch(`${url}`);
        let pokemon = await res.json();

        setNexturl(pokemon.next);
        function loadpokemon(data) {
            data.map(async (el) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${el.name}`)
                const pokemon = await res.json();
                setState((curr) => [...curr, pokemon])
            })
        }
        loadpokemon(pokemon.results)
    }
    return (
        <div>
            <div id='AllPokemonDiv'>
                {
                    state.map((el, ind) => {
                        return <div style={{ backgroundColor: "black" }} key={ind + 1}>
                            <Singlepokemon {...el} image=
                                {el.sprites.other.dream_world.front_default} />
                        </div>
                    })
                }

            </div>
            <div>

                <button style={{ "marginTop": "20px", padding: "10px 15px", borderRadius: "10px", "color": "coral", backgroundColor: "teal", marginBottom: "10px" }} onClick={() => { fetchPokemon(nextUrl) }}>Load More</button>
            </div>
        </div>
    )
}
