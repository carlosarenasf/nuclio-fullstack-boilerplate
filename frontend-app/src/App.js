import React from 'react';
import './App.css';
import PokemonList from "./views/Pokemons/PokemonList";
import {APP_CONTEXT, APP_PRODUCT_ID, APP_PRODUCTS, APP_ROOT} from "./routes/routes";
import {  BrowserRouter , Route } from 'react-router-dom';
import Example from "./views/Example";
import Pokemon from "./views/Pokemons/Pokemon";
import ContextExample from "./views/ContextExample";

function App() {

  return (
    <BrowserRouter>
      <Route exact path={APP_PRODUCTS}  component={PokemonList} />
      <Route exact path={APP_PRODUCT_ID}  component={Pokemon} />
      <Route exact path={APP_ROOT}  component={Example} />
      <Route exact path={APP_CONTEXT}  component={ContextExample} />
    </BrowserRouter>
  );
}


export default App;
