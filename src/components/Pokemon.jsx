import React, { useState } from 'react'
import Pokedex from './Pokedex';

const Pokemon = () => {


    const [pokemonNombre, setPokemonNombre] = useState('')
    const [pokemonImagen, setPokemonImagen] = useState('')
    const [pokemonHP, setPokemonHP] = useState('')
    const [pokemonATK, setPokemonATK] = useState('')
    const [pokemonDEF, setPokemonDEF] = useState('')
    const [pokemonXP, setPokemonXP] = useState('')
    const [pokemonWeight, setPokemonWeight] = useState('')
    const [pokemonHeight, setPokemonHeight] = useState('')
    const [pokemonTipo, setPokemonTipo] = useState('')
    const [pokemonTipo2, setPokemonTipo2] = useState('')

    const randomId = (min, max) => {

        return (Math.floor(Math.random() * (max - min) + min))
    }


    const getPokemon = async (id) => {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const getData = await fetch(url)
        const data = await getData.json()

        setPokemonNombre(data.name),
        setPokemonImagen(data.sprites.other.dream_world.front_default),
        setPokemonHP(data.stats[0].base_stat),
        setPokemonATK(data.stats[1].base_stat),
        setPokemonDEF(data.stats[2].base_stat)
        setPokemonXP(data.base_experience)
        setPokemonWeight((Number(data.weight)) / 10)
        setPokemonHeight((Number(data.height)) / 10)
        setPokemonTipo(data.types[0].type.name)
        
        if (data.types.length == 1) {
            setPokemonTipo2(' ')
        } else {
            setPokemonTipo2(data.types[1].type.name)
        }

        /* console.log(data) */

    }

    return (
        <div>
            <Pokedex

                getPokemon={getPokemon}
                randomId={randomId}
                pokemonNombre={pokemonNombre}
                pokemonImagen={pokemonImagen}
                pokemonHP={pokemonHP}
                pokemonATK={pokemonATK}
                pokemonDEF={pokemonDEF}
                pokemonXP={pokemonXP}
                pokemonWeight={pokemonWeight}
                pokemonHeight={pokemonHeight}
                pokemonTipo={pokemonTipo}
                pokemonTipo2={pokemonTipo2}

            />
        </div>
    )
}

export default Pokemon