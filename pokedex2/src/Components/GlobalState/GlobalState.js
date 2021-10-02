import axios from "axios"
import { useState } from "react"
import BASE_URL from "../../Constante/Constante"

export const GlobalState = (props) =>{

    const [pokemons, setPokemons] = useState([])
    const [selectPokemon, setSelectPokemon] = useState({})

    const getPokemonById = (pokeName) => {
        axios.get(`${BASE_URL}/${pokeName}`)
        .then((response) =>{
            setPokemons(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert("Ocorreu um erro, tente novamente")
        })
    }


    const getPokemons = () => {
        axios.get(`${BASE_URL}`)
        .then((response) =>{
            setPokemons(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert("Ocorreu um erro, tente novamente")
        })
    }
 // criar states, setters y request
 // dar return no global state context  com os values corretos
 // slide 20
}
