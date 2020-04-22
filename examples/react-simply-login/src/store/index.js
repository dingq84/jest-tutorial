import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'

import Reducer from '../reducer';

const initialState = {
  isAuth: false,
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

Store.propTypes = {
  children: PropTypes.any,
};

export default Store;

export const Context = createContext(initialState);