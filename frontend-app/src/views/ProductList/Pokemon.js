import React, {useEffect, useState} from 'react';
import {TextField} from "@material-ui/core";
import {useParams} from "react-router-dom";

function Pokemon(props) {

  let { name } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const options = {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Access-Control-Allow-Headers': 'Authorization',
          'Content-Type': 'application/json',
        }),
        mode: 'cors',
      };

      return fetch(url, options)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
          return Promise.reject(response.status);
        })
        .then(data => {
          debugger;
          setPokemon(data);
        })
        .catch(error => console.log(error));
    };

    fetchData();

  }, []);


  debugger;
  return pokemon ? (
    <div>
      <h3>Pokemon name: {pokemon.name}</h3>
      <p>Base experience: {pokemon.base_experience}</p>
      <p>Type: {pokemon.types && pokemon.types.map(t => (<span> {t.type.name} </span>))}</p>
    </div>
  ) : <h1>Empty</h1>;
}

export default Pokemon;