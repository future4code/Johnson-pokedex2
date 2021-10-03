import React from 'react'
import { HomePage } from '../pages/HomePage';
import { PokedexPage } from '../pages/PokedexPage';
import { StatsPage } from '../pages/StatsPage';
import { ErrorPage } from '../pages/ErrorPage';
import { BrowserRouter, Switch, Route, } from "react-router-dom"



export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/pokemon/:name/:telaPokedex?"} >                            
                    <StatsPage />
                </Route>
            
                <Route exact path={"/pokedex"}>
                    <PokedexPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>

            
        
        </BrowserRouter>
    )
}