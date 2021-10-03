import React from 'react'
import Error from '../../images/errorgif.gif'
import { ErrorContainer } from '../ErrorPage/styled'

export const ErrorPage = () => {
    return (
        <ErrorContainer>
            <h1>ALGO DEU ERRADO!!</h1>
            <img src={Error} />
        </ErrorContainer>
    )
}