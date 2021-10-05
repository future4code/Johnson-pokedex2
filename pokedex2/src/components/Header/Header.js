import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton, PictureHeaderHome } from "./styled";
import { goToPokedex } from "../../routes/coordinator";
import ImgHome from "../../images/home.png"

const Header = ({ leftButtonFunction, title, showRightButton }) => {
  const history = useHistory();

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokemons":
        return "Ir para Pokedex";
      case "Pokedex":
        return "Voltar para lista de pokemons";
      default:
        return "Ir para Pokedex";
    }
  };

  return (
    <HeaderContainer>
      <a href="/">
          <PictureHeaderHome alt= "home" src={ImgHome}/>
                    
      </a> 
      
      <h1>{title}</h1>
      {showRightButton && (
        <RightHeaderButton onClick={() => goToPokedex(history)}>
          Ir para pokedex
        </RightHeaderButton>
      )}
      <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </LeftHeaderButton>
      
      
    </HeaderContainer>
  );
};

export default Header;
