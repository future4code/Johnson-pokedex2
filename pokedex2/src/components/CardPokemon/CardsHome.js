import React from 'react'
import StyledCardsHome from './StyledCardsHome'
import { ContainerCard, PokemonImg, Name, Tags, StatsButton} from './StyledCardsHome'


export default function CarrdsHome() {
    return (
        <div>
            <ContainerCard>
                
                <div>
                <PokemonImg>
                    Imagem
                </PokemonImg>
                <div>
                    <Name>Nome:</Name>
                    <p>Picachu</p>
                    
                </div>
                </div>
                <div>
                <StatsButton>Detalhes</StatsButton>
                <StatsButton>Adicionar</StatsButton>
                </div>


            </ContainerCard>
        </div>
    )
}