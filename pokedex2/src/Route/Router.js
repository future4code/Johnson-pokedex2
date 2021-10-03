import React from 'react'
import { HomePage } from '../Pages/HomePage';
import { PokedexPage } from '../Pages/PokedexPage';
import { StatsPage } from '../Pages/StatsPage';
import {BaseUrl} from '../Constante/Constante'
import { ErrorPage } from '../Pages/ErrorPage';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import CarrdsHome from '../Components/CardPokemonHome/CardsHome';


export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
                <Route exact path={"/"} component={HomePage}>
                    <HomePage />
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/pokedex"} component={PokedexPage}>
                    <PokedexPage />
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/stats/:name"} component={StatsPage}>
                    <StatsPage />
                </Route>
            </Switch>
            <Switch>
                <Route>
                    <div>ERRO: Página não encontrada</div>
                </Route>
            </Switch>
            
        
        </BrowserRouter>
    )
}

