import React from 'react'
import { goToStats } from '../../Route/Coordinator'
import { useHistory } from 'react-router'
import StyledCardsHome from './StyledCardsHome'
import { ContainerCard, PokemonImg, Name, Tags, StatsButton} from './StyledCardsHome'


export default function CarrdsHome() {
    const history = useHistory()

    // usar useContext para buscar informações do Estado Global, consumir o context
    // slide 26


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
                <StatsButton onClick={()=> goToStats(history)}>Detalhes</StatsButton>
                <StatsButton>Adicionar</StatsButton>
                </div>


            </ContainerCard>
        </div>
    )
}