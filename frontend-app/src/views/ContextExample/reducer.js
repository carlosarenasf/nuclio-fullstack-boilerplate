import {useReducer} from "react";
import {CONTEXT_EXAMPLE_ADD_LIKE, CONTEXT_EXAMPLE_CHANGE_USERNAME, CONTEXT_EXAMPLE_REMOVE_LIKE} from "./actions";

const initialState = {
  userName: 'Default name',
  like: 0,
};


const contextExampleReducer = (state = initialState, action) => {
  const { type } = { ...action };
  const newState = { ...state };

  if (type === CONTEXT_EXAMPLE_CHANGE_USERNAME) {
    newState.userName = action.userName || 'Default name';
  }
  if (type === CONTEXT_EXAMPLE_ADD_LIKE) {
    newState.like = state.like + 1;
  }
  if (type === CONTEXT_EXAMPLE_REMOVE_LIKE) {
    newState.like = state.like - 1;
  }
  return newState;
};


export const useContextExampleReducer = () => useReducer(contextExampleReducer, initialState);