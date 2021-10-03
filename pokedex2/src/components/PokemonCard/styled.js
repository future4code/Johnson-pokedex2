import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeCardContainer = styled.div`
     height: 300px;
    width: 200px;
    padding: 5px;
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
    
`;

export const ImgContainer = styled.div`
  background: ${backgroundCard};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeImg = styled.img`
    width: 95px;
    height: 135px;
    background-color: white;
    margin: 15px 5px;
    box-shadow: 3px 3px 4px 4px rgba(10,40,95);
`;

export const ButtonsContainer = styled.button`
     width: 85px;
    margin-left: 10px;
    box-shadow: 2px 2px 5px 2px rgba(10,40,95);
    border: none;
    background-color: rgba(0,117,190);
    letter-spacing: 2px;
    font-size: 11px;
    padding: 3px 0;
    text-transform: uppercase;
    color: white; 
`;
