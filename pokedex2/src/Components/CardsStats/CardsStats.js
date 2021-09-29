import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router";
import { goBack } from "../../Route/coordinator";
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
              src={""}
              alt="foto do pokemon"
            />
          </ImgsContainer>
          <ImgsContainer>
            <img
              src={""}
              alt={"foto pokemon de costas"}
            />
          </ImgsContainer>
        </div>
        <StatsContainer>
        
        </StatsContainer>
        <TypesMovesContainer>
          <TypesContainer>
            
          </TypesContainer>
          <MovesContainer>
           
          </MovesContainer>
        </TypesMovesContainer>
      </PageContainer>
    </Body>
  );
}
