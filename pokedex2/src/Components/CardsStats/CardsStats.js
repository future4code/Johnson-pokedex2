import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Page, ContainerHeader, PageContainer, ContainerButton } from "./StyledCardsStats";


export default function CardsStats() {
  return (
    <Page>
      <ContainerHeader>
        <ContainerButton>
        <Button id="bt"
          onClick={""}
          variant={"contained"}
          color={"primary"}
        >
          Voltar
        </Button>
        <Button variant={"contained"} color={"primary"}>
          Adicionar/Remover da Pokedex
        </Button>
        </ContainerButton>
        </ContainerHeader>
     
      <PageContainer>
        <div>
          <div>
            <img
              src={""}
              alt="foto do pokemon"
            />
          </div>
          <div>
            <img
              src={""}
              alt={"foto pokemon de costas"}
            />
          </div>
        </div>
        <div>
          {}
        </div>
        <div>Pokemon</div>
      </PageContainer>
    </Page>
  );}
