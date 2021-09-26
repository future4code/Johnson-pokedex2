import React from "react";
import { Button } from "@material-ui/core";
import {
  Body,
  PageContainer,
  ContainerImgs,
  ContainerStats,
  ContainerTypes,
  ContainerMoves,
  ContainerTypesMoves
} from "./StyledCardsStats";

export default function CardsStats() {
  

  return (
    <Body>
      <div>
        <Button
          variant={"contained"}
          color={"primary"}
        >
          Voltar
        </Button>
        <Button variant={"contained"} color={"primary"}>
          Adicionar/Remover da Pokedex
        </Button>
      </div >
      <PageContainer>
        <div>
          <ContainerImgs>
            <img
              src={""}
              alt="foto do pokemon"
            />
          </ContainerImgs>
          <ContainerImgs>
            <img
              src={""}
              alt={"foto pokemon de costas"}
            />
          </ContainerImgs>
        </div>
        <ContainerStats>
          
                <div >
                  
                </div>
        </ContainerStats>
        <ContainerTypesMoves>
          <ContainerTypes>Teste1 Teste2</ContainerTypes>
          <ContainerMoves>
            <h5>Teste</h5>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
          </ContainerMoves>
        </ContainerTypesMoves>
      </PageContainer>
    </Body>
  );
}