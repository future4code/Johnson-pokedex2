import React from 'react'
import Error from '../../images/errorgif.gif'
import { ErrorContainerPage, ContainerPage, Title, ImgError, PicturePokeHome, TitleContainer } from '../ErrorPage/styled'
import ImgHome from "../../images/home.png"

export const ErrorPage = () => {
    return (

        <ContainerPage>
            <ErrorContainerPage>
                   

            <TitleContainer>
        
            <Title>Ops.! Clique na Pokebola para retornar! </Title>
            <a href="/">
                <PicturePokeHome alt= "home" src={ImgHome}/>
            </a>
            </TitleContainer>
            <ImgError src={Error} />
            
            </ErrorContainerPage>
        </ContainerPage>
    )
}