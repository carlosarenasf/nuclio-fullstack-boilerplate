import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function PokemonList({history}) {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [error, setError] = useState(false);

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
          setPokemonsData(data.results);
        })
        .catch(error => setError(true));
    };

    setError(false);

    fetchData();

  }, []);

  debugger;
  return (
    <div>
      {pokemonsData && pokemonsData.map(p => (
        <Button onClick={() => history.push(`/products/${p.name}`)}>{p.name}</Button>
      ))}
    </div>
  );
}

export default withRouter(PokemonList);