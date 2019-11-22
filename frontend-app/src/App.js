import React from 'react';
import './App.css';
import ProductList from "./views/ProductList/PokemonList";
import {APP_PRODUCT_ID, APP_PRODUCTS, LOGIN, RETRIEVE_DATA_EXAMPLE} from "./routes/routes";
import {  BrowserRouter , Route } from 'react-router-dom';
import Login from "./views/Login/Login";
import RetrieveDataExample from "./views/RetrieveDataExample";
import Pokemon from "./views/ProductList/Pokemon";

function App() {

  return (
    <BrowserRouter>
      <Route exact path={APP_PRODUCTS}  component={ProductList} />
      <Route exact path={APP_PRODUCT_ID}  component={Pokemon} />
    </BrowserRouter>
  );
}


export default App;
