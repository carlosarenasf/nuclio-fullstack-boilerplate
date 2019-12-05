import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import {ExampleContext} from "../context";
import {CONTEXT_EXAMPLE_CHANGE_USERNAME} from "../actions";

function Index(props) {

  const {state, dispatch} = useContext(ExampleContext);


  return (
    <div>
      <TextField onChange={e => dispatch({ type: CONTEXT_EXAMPLE_CHANGE_USERNAME, userName: e.target.value })}/>
    </div>
  );
}

export default Index;