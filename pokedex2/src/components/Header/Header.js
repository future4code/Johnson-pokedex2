import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton, PictureHeaderHome } from "./styled";
import { goToPokedex } from "../../routes/coordinator";
import ImgHome from "../../images/home.png"

const Header = ({ leftButtonFunction, title, showRightButton }) => {
  const history = useHistory();

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokémons":
        return "Ir para Pokedex";
      case "Pokédex":
        return "Voltar para lista de pokemons";
      default:
        return "Voltar";
    }
  };

  return (
    <HeaderContainer>
      <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </LeftHeaderButton>
      <a href="/">
          <PictureHeaderHome alt= "home" src={ImgHome}/>
                    
                </a>
      <h1>{title}</h1>
      {showRightButton && (
        <RightHeaderButton onClick={() => goToPokedex(history)}>
          Ir para pokedex
        </RightHeaderButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
