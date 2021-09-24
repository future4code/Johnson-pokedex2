import React from 'react'
import styled from 'styled-components';
import CardPokemon from '../Components/CardPokemon/CardPokemon'

const ContainerPokedexPage = styled.div`
    max-width: 100vw;
    /* max-height: 100vh; */
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns :repeat(4, 1fr) ;
    row-gap: 15px;
    column-gap: 5px;
    justify-items: stretch;
    align-items: stretch;
    background-color: rgba(10,40,95,.9);
    padding-top: 15px;
`
export const PokedexPage = () => {
    return (
        <div>
            <h2>POKEDEX</h2>
            
            <ContainerPokedexPage>
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />

            </ContainerPokedexPage>
        </div>
    )
}