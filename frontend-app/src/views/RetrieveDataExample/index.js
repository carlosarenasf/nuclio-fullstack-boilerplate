import React, { useState, useEffect } from 'react';
import {TextField} from "@material-ui/core";

function RetrieveDataExample(props) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [idPokemon, setIdPokemon] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;
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
        .then(data => setData(data))
        .catch(error => setError(true));
    };

    setError(false);

    fetchData();

  }, [idPokemon]);


  return (
    <div>
      <h3>{data && data.name}</h3>
      <p>{data && data.height}</p>
      {error && (<h1>Error</h1>)}

      <input type="text" value={idPokemon} onChange={e => setIdPokemon(e.target.value)} />
    </div>
  );
}

export default RetrieveDataExample;