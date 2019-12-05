import React, {useEffect, useReducer, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function PokemonList(props) {
  const history = props.history;

  const SET_POKEMON_DATA = 'SET_POKEMON_DATA';
  const SET_ERROR = 'SET_ERROR';

  const initialState = {
    pokemonData: [],
    error: false,
  };

  const pokemonReducer = (state = initialState, action) => {
    const newState = { ...state };
    const { type } = { ...action };

    if (type === SET_POKEMON_DATA) {
      newState.pokemonData = action.data;
    }
    if (type === SET_ERROR) {
      newState.error = action.error;
    }
    return newState;
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
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
          dispatch({ type: SET_POKEMON_DATA, data: data.results });
        })
        .catch(error => dispatch({ type: SET_ERROR, error: true }));
    };

    dispatch({ type: SET_ERROR, error: false });

    fetchData();

  }, []);

  debugger;
  return (
    <div>
      {state.pokemonData && state.pokemonData.map(p => (
        <Button onClick={() => history.push(`/products/${p.name}`)}>{p.name}</Button>
      ))}
    </div>
  );
}

export default withRouter(PokemonList);