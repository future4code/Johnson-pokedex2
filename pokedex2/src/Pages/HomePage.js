import React from 'react'
import { useHistory } from 'react-router'



export const HomePage = () => {
    const history = useHistory()

    const goToStats = () => {
        history.push(`/stats`)
    }
    const goToPokedex = () => {
        history.push(`/pokedex`)
    }

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={goToStats}>Status</button> <button onClick={goToPokedex}>Pokedex</button>
        </div>
    )
}