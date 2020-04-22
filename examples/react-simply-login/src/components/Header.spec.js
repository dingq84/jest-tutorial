import React, { useReducer } from 'react'
import { render, fireEvent, cleanup, act } from '@testing-library/react';

import { Context } from '../store';
import Reducer from '../reducer';

const Store = ({ initialState, children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

describe('Header login and logout testing', () => {
  const mockLogin = jest.fn().mockResolvedValue();
  const mockLogout = jest.fn().mockResolvedValue();
  let renderWithContext = () => {};

  beforeAll(() => {
    jest.doMock('../services', () => {
      return {
        userService: {
          login: mockLogin,
          logout: mockLogout,
        }
      }
    });

    const { default: Header } = require('./Header');
    
    renderWithContext = (initialState) => {
      return render(
        <Store initialState={initialState}>
          <Header />
        </Store>
      )
    }
  });

  afterEach(() => {
    mockLogin.mockClear();
    mockLogout.mockClear();
    cleanup();
  });

  it('user is not logged, then click login', async () => {
    const { getByTestId } = renderWithContext({ isAuth: false });
    const loginBtn = getByTestId('login-button');
    expect(loginBtn).toBeInTheDocument();
    expect(() => { getByTestId('logout-button')}).toThrow();
    await act(async () => {
      fireEvent.click(loginBtn);
    });
    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogout).not.toBeCalled();
    expect(() => { getByTestId('login-button') }).toThrow();
    expect(getByTestId('logout-button')).toBeInTheDocument();
  });

  it('user click logout button', async () => {
    const { getByTestId } = renderWithContext({ isAuth: true });
    const logoutBtn = getByTestId('logout-button');
    await act(async () => {
      fireEvent.click(logoutBtn);
    });
    expect(mockLogin).not.toBeCalled();
    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(getByTestId('login-button')).toBeInTheDocument();
  });
});