import React from 'react'
import StyledCardPokemon from './StyledCardPokemon'
import { ContainerCard, PokemonImg, Name, Tags, StatsButton} from './StyledCardPokemon'


export default function CardPokemon() {
    return (
        <div>
            <ContainerCard>
                <div>
                    <Name>Nome:</Name>
                    <p>Bulbassaur</p>
                    <Tags>N:</Tags>
                    <p>151</p>
                    <Tags>Tipo:</Tags>
                    <p>Psiquico Mage</p>
                </div>
                <div>
                <PokemonImg>
                    Imagem
                </PokemonImg>
                <StatsButton>Status</StatsButton>
                </div>


            </ContainerCard>
        </div>
    )
}
