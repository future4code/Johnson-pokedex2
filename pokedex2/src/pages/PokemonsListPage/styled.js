import styled from "styled-components";

export const PokeListContainer = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0 auto;

`;

export const Footer = styled.footer`
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
export const LinkFooter = styled.div`
    width: 300px;
    height: 80px;
    text-align: center;
    display: flex;
    gap: 32px;

`
export const CardNameDev = styled.p`
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

export const PictureFooter = styled.img`

    width: 60px;
    border-radius: 50px;

    &:hover{
        width: 70px;
        box-shadow: 2px 2px 10px  black;
        
        
        

    }
    

`
