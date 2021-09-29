import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import CardsHome from '../Components/CardPokemon/CardsHome'
import ImgHome from "../Images/home.png"

const ContainerHomePage = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 550px;
align-items: center;
background-color: #223d6e;



`
const ButtonsHeaderPage = styled.div`
display: flex;
column-gap: 16px;
margin-right: 30px;
height: 30px;

`
const Header = styled.header`
display: flex;
background-color:#1B53BA;
width: 100%;
height: 5vw;
justify-content: space-between;
padding: 16px;
`

const Main = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
gap: 20px;
width: 80%;
height: auto;
justify-content: center;
align-items: center;
padding-top: 16px;
padding-bottom: 16px;
margin: 0 auto;
`

const Footer = styled.footer`
display: flex;
background-color:  #1B53BA;
width: 100%;
height: 16vh;
justify-content: space-between;
text-align: center;
padding: 16px;
clear: both;
position: relative;
bottom:0;
left:0;

 h3{
    display: flex;
    letter-spacing: 4px;
    text-align: center;
    align-self: center;
    color: white;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif

}

`
const LinkFooter = styled.div`
width: 300px;
height: 80px;
text-align: center;
display: flex;
gap: 32px;

`
const CardNameDev = styled.p`
width: 80px;
height: 60px;
background-color: lightgrey;
border-radius: 10px;
font-size: 1.3em;
text-align: center;
position: relative;
display: none;

     &:hover {
        display: inline-flex;
    }

`

const PictureFooter = styled.img`

    width: 60px;
    border-radius: 50px;

    &:hover{
        width: 70px;
        box-shadow: 2px 2px 10px  black;
        
        
        

    }
    

`
const PictureHeaderHome = styled.img`
width: 40px;
margin-left: 30px;
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
            <a href="/">
                    <PictureHeaderHome alt= "home" src={ImgHome}/>
                    
                </a>
           
            <ButtonsHeaderPage>
            <button onClick={goToStats}>Status</button>
            <button onClick={goToPokedex}>Pokedex</button>
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
           <CardsHome/>
           <CardsHome/>
           
            </Main>
            <Footer>
            <h3> Desenvolvido por João, Jonathan e Hernán </h3>
            <LinkFooter>
            <CardNameDev>João Ferrão</CardNameDev>
                <a href="https://www.linkedin.com/feed/">
                    <PictureFooter alt= "João Ferrão" src="https://ca.slack-edge.com/TLAVDH7C2-U021T6GM9T2-b7eb47cc1930-512"/>
                    
                </a>

                <CardNameDev>Jonathan</CardNameDev>
                <a href="https://www.linkedin.com/feed/">
                    <PictureFooter alt= "Jonathan" src="https://ca.slack-edge.com/TLAVDH7C2-U0210A1KGFP-25c1e4d0acea-512"/>
                    
                </a>

                <CardNameDev>Hernán</CardNameDev>
                <a href="https://www.linkedin.com/feed/">
                    <PictureFooter alt= "Hernán" src="https://ca.slack-edge.com/TLAVDH7C2-U021T6HLJBA-58173d7265e5-512"/>
                    
                </a>
            </LinkFooter>
            

            </Footer>
        </ContainerHomePage>
    )
}


