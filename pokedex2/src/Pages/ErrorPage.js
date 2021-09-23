import React from 'react'
import Error from '../Images/errorgif.gif'

export const ErrorPage = () => {
    return (
        <div>
            <h2>ALGO DEU ERRADO!!</h2>
            <img src={Error} />
        </div>
    )
}