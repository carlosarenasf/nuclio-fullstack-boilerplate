import React from 'react';
import './App.css';
import PokemonList from "./views/Pokemons/PokemonList";
import {APP_PRODUCT_ID, APP_PRODUCTS, APP_ROOT} from "./routes/routes";
import {  BrowserRouter , Route } from 'react-router-dom';
import Example from "./views/Example";
import Pokemon from "./views/Pokemons/Pokemon";

function App() {

  return (
    <BrowserRouter>
      <Route exact path={APP_PRODUCTS}  component={PokemonList} />
      <Route exact path={APP_PRODUCT_ID}  component={Pokemon} />
      <Route exact path={APP_ROOT}  component={Example} />
    </BrowserRouter>
  );
}


export default App;
