// @flow

import { combineReducers } from 'redux';
import { SET_NICETY_SEARCH_TERM, ADD_NICETIES_DATA, ADD_NICETY } from './actions';

const nicetiesSearchTerm = (state = '', action: Action) => {
  if (action.type === SET_NICETY_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const nicetiesData = (state = [], action: Action) => {
  if (action.type === ADD_NICETIES_DATA) {
    return state.concat(action.payload);
  } else if (action.type === ADD_NICETY) {
    return state.concat([action.payload]);
  }
  return state;
};

const rootReducer = combineReducers({ nicetiesSearchTerm, nicetiesData });

export default rootReducer;
