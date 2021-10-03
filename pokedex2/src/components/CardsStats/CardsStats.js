import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router";
import { goBack } from "../../routes/coordinator";
import {
  Body,
  PageContainer,
  ButtonDiv,
  ImgsContainer,
  StatsContainer,
  TypesContainer,
  MovesContainer,
  TypesMovesContainer,
} from "./StyledCardsStats";

import axios from "axios";

export default function CardsStats() {
 
  const [dataPoke, setdataPoke] = useState();
  const [stats, setstats] = useState();
  const [types, settypes] = useState();
  const [move, setmove] = useState();

  
  const params = useParams();

  
  const history = useHistory();

 
  useEffect(() => {
    
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.nome}`)
      .then((res) => {
        console.log(res.data);
        setdataPoke(res.data);
        setstats(res.data.stats);
        settypes(res.data.types);
        setmove(res.data.moves);

        
      })
      .catch((e) => {
      
      });
  }, []);

  const filterMove = move && move.slice(0, 3);

  return (
    <Body>
      <ButtonDiv>
        <Button
          onClick={() => goBack(history)}
          variant={"contained"}
          color={"primary"}
        >
          Voltar
        </Button>
        <Button variant={"contained"} color={"primary"}>
          Adicionar/Remover da Pokedex
        </Button>
      </ButtonDiv>
      <PageContainer>
        <div>
          <ImgsContainer>
            <img
              src={dataPoke && dataPoke.sprites.front_default}
              alt={"foto do pokemon"}
            />
          </ImgsContainer>
          <ImgsContainer>
            <img
              src={dataPoke && dataPoke.sprites.back_default}
              alt={"foto pokemon de costas"}
            />
          </ImgsContainer>
        </div>
        <StatsContainer>
            {stats &&
                stats.map((i, index) => {
                  return (
                    <div key={index}>
                      {i.stat.name}: {i.base_stat}
                    </div>
                  );
                })}
        </StatsContainer>
        <TypesMovesContainer>
          <TypesContainer>
                {types &&
                    types.map((typ) => {
                      return <li key={typ}>{typ.type.name}</li>;
                })}
          </TypesContainer>
          <MovesContainer>
              <h5>Moves</h5>
                {filterMove &&
                  filterMove.map((move) => {
                    return <li>{move.move.name}</li>;
              })}
          </MovesContainer>
        </TypesMovesContainer>
      </PageContainer>
    </Body>
  );
}
