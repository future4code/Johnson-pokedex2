import React, { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokeListContainer, Footer, LinkFooter, CardNameDev, PictureFooter } from "./styled";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";

const PokemonsListScreen = () => {
  const { pokemons } = useContext(GlobalStateContext);
  const history = useHistory();

  return (
    <>
      <Header
        title={"Lista de Pokemons"}
        leftButtonFunction={() => goToPokedex(history)}
      />
      <PokeListContainer>
        {pokemons &&
          pokemons.map((poke) => {
            return <PokemonCard key={poke.name} poke={poke} />;
          })}
      </PokeListContainer>
        
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
      
    </>
  );
};

export default PokemonsListScreen;
