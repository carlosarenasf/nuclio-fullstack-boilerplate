import React, {useEffect, useState} from 'react';
import {useContextExampleReducer} from "./reducer";
import {ExampleContext} from "./context";
import UserNameField from './UserNameField';

function Index(props) {

  const [state, dispatch] = useContextExampleReducer();


  return (
    <div>
      <h1>{state.userName}</h1>
      <p>Likes: {state.like}</p>
      <ExampleContext.Provider value={{state, dispatch}}>
        <UserNameField/>
      </ExampleContext.Provider>
    </div>
  );
}

export default Index;