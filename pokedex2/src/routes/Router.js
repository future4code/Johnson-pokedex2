import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonsListPage from "../pages/PokemonsListPage/PokemonsListPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={PokemonsListPage} />
        <Route exact path={"/pokemon/:name/:telaPokedex?"} component={PokemonDetailPage} />
        <Route exact path={"/pokedex"} component={PokedexPage} />
        <Route>
          <ErrorPage />
        </Route>
         
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
