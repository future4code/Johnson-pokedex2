import React from 'react'
import styled from 'styled-components';


export const ContainerCard = styled.div`
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
    
`
export const PokemonImg = styled.div`
    width: 150px;
    height: 160px;
    background-color: white;
    border-radius: 5px;
    margin: 15px 5px;
    box-shadow: 3px 3px 4px 4px rgba(10,40,95);
    `
export const Name = styled.h4`
  margin: 20px 10px 5px ;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  
  
  `

export const StatsButton = styled.button`
    align-items: center;
    width: 85px;
    margin: 16px 4px;
    box-shadow: 2px 2px 5px 2px rgba(10,40,95);
    border: none;
    background-color: rgba(0,117,190);
    letter-spacing: 1px;
    font-size: 11px;
    padding: 3px 0;
    text-transform: uppercase;
    color: white;
    border-radius: 4px;
`