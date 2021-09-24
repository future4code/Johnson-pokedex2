import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import CardPokemon from '../Components/CardPokemon/CardPokemon'
import CardsHome from '../Components/CardPokemon/CardsHome'

const ContainerHomePage = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
align-items: center;




`
const ButtonsHeaderPage = styled.div`
display: flex;
column-gap: 16px;
margin-right: 30px;
height: 30px;

`
const Header = styled.div`
display: flex;
background-color: navy;
width: 100vw;
height: 5vw;
justify-content: space-between;
padding: 16px;
`
const Main = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
row-gap: 24px;
background-color: #CBC3E3;
width: 100vw;
height: auto;
justify-content: safe;
align-items: center;
padding: 16px;
`

const Footer = styled.div`
display: flex;
background-color: navy;
width: 100vw;
height: 5vw;
justify-content: space-between;
padding: 16px;

`

export const HomePage = () => {
    const history = useHistory()

    const goToHome = () => {
        history.push(`/`)
    }

    const goToStats = () => {
        history.push(`/stats`)
    }
    const goToPokedex = () => {
        history.push(`/pokedex`)
    }

    return (
        <ContainerHomePage>
            <Header>
            <button onClick={goToHome}>Home Page</button>
            <ButtonsHeaderPage>
            <button onClick={goToStats}>Status</button> <button onClick={goToPokedex}>Pokedex</button>
            </ButtonsHeaderPage>
            </Header>
            <Main>
         
           <CardsHome/>
           <CardsHome/>
           <CardsHome/>
           <CardsHome/>
           <CardsHome/>
           <CardsHome/>
           <CardsHome/>
           <CardsHome/>
            </Main>
            <Footer>
            <p> nomes e link para linkedin </p>
            </Footer>
        </ContainerHomePage>
    )
}


