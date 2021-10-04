import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeCardContainer = styled.div`
     height: 300px;
    width: 200px;
    padding: 10px;
    border-radius: 15px;
    background-color: #0075BE;
    display: flex;
    flex-direction: column;
    align-items: center;    
    box-shadow: 3px 3px 4px 4px rgba(10,40,95);
    text-align: center;
    margin: 16px;

        & p {
            margin-left: 10px;
            font-size: 16px;
            color: lightgrey;
            
        }

        & h3{
            color: white;
            font-family: 'Trebuchet MS';
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    
`;

export const ImgContainer = styled.div`
  background: ${backgroundCard};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 20px;
  
  
  
`;

export const PokeImg = styled.img`
    width: 140px;
    height: 170px;
    padding: 15px 5px;
    box-shadow: 3px 3px 4px 4px rgba(10,40,95);
    border-radius: 20px;
`;

export const ButtonsContainer = styled.div`
    margin-top: 2px;
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: auto;
    padding: 4px;
    gap: 12px;
    border: none;
    letter-spacing: 2px;
    font-size: 0.8rem;
    color: white; 
`;

export const Buttons = styled.button`
    margin-top: 6px;
    background-color: #ffcc00;
    box-shadow: 2px 2px 5px 2px rgba(10,40,95);
    border: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 4px;
    border-radius: 8px;
    color: #223d6e; 
`;