import React from 'react'
import { HomePage } from '../Pages/HomePage';
import { PokedexPage } from '../Pages/PokedexPage';
import { StatsPage } from '../Pages/StatsPage';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"


export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/pokedex"}>
                    <PokedexPage />
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/stats"}>
                    <StatsPage />
                </Route>
            </Switch>
        
        </BrowserRouter>
    )
}