import React from "react";
import { Button } from "@material-ui/core";
import {
  PageContainer,
  ContainerImgs,
  ContainerStats,
  ContainerTypes,
  ContainerMoves,
  ContainerTypesMoves
} from "./StyledCardsStats";

export default function CardsStats() {
  

  return (
    <>
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
          <ContainerTypes>Type1 Type2</ContainerTypes>
          <ContainerMoves>
            <h5>Moves</h5>
            <p>Move name1</p>
            <p>Move name2</p>
            <p>Move name3</p>
          </ContainerMoves>
        </ContainerTypesMoves>
      </PageContainer>
    </>
  );
}