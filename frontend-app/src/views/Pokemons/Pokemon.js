import React, {useEffect, useState} from 'react';
import {TextField} from "@material-ui/core";
import {useParams} from "react-router-dom";

function Pokemon(props) {

  let { name } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
   //your code here
  }, []);


  debugger;
  return pokemon ? (
    <div>
      <h3>Pokemon name: {pokemon.name}</h3>
      <p>Base experience: {pokemon.base_experience}</p>
    </div>
  ) : <h1>Empty</h1>;
}

export default Pokemon;