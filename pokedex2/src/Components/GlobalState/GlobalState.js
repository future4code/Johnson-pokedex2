import axios from "axios"
import { useState } from "react"
import {BaseUrl} from "../../Constante/Constante"

export const GlobalState = (props) =>{

    const [pokemons, setPokemons] = useState([])
    const [selectPokemon, setSelectPokemon] = useState({})

    const getPokemonById = (pokeName) => {
        axios.get(`${BaseUrl}/${pokeName}`)
        .then((response) =>{
            setPokemons(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert("Ocorreu um erro, tente novamente")
        })
    }


    const getPokemons = () => {
        axios.get(`${BaseUrl}`)
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
