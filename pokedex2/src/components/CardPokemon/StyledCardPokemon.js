import React from 'react'
import styled from 'styled-components';


export const ContainerCard = styled.div`
    height: 200px;
    width: 200px;
    padding: 5px;
    border-radius: 15px;
    background-color: rgba(0,117,190);
    display: flex;
    box-shadow: 3px 3px 4px 4px rgba(10,40,95);

        & p {
            margin-left: 10px;
            font-size: 16px;
        }
    
`
export const PokemonImg = styled.div`
    width: 95px;
    height: 135px;
    background-color: white;
    margin: 15px 5px;
    box-shadow: 3px 3px 4px 4px rgba(10,40,95);
    `
export const Name = styled.h4`
  margin: 10px 10px 5px ;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  
  `
export const Tags = styled.h6`
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin: 10px 0 2px 5px;
    border-bottom: 1px solid;
    margin: 5px 10px 10px

`
export const StatsButton = styled.button`
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
`