import styled from "styled-components";

export const PokeListContainer = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0;
    background-color: #223d6e;

`;

export const Footer = styled.footer`
    display: flex;
    background-color:  #1B53BA;
    width: 96.8vw;
    height: 8vh;
    justify-content: space-around;
    text-align: center;
    align-items:center;
    padding:  16px;
    margin: 0;
    clear: both;
    position: relative;
    bottom:0;
    left:0;

    h3{
        display: flex;
        letter-spacing: 4px;
        text-align: center;
        padding-left: 25%;
        align-self: center;
        color: white;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif

    }

`
export const LinkFooter = styled.div`
    width: 300px;
    height: 80px;
    text-align: center;
    align-items: center;
    display: flex;
    gap: 32px;

`
export const CardNameDev = styled.p`
    width: 280px;
    height: 60px;
    background-color: lightgrey;
    border-radius: 10px;
    font-size: 1.3em;
    text-align: right;
    position: relative;
    display: none;

        &:hover {
            display: inline-flex;
        }

`

export const PictureFooter = styled.img`

    width: 60px;
    border-radius: 50px;

    &:hover{
        width: 70px;
        box-shadow: 2px 2px 10px  black;
        
        
        

    }
    

`
