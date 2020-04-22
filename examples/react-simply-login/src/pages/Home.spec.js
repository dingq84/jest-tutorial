import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from './Home';
import { Context } from '../store';

describe('Home render', () => {
  const renderWithCotext = (initState) => {
    return render(
      <Context.Provider value={[initState]}>
        <Home />
      </Context.Provider>
    );
  };

  afterEach(() => {
    cleanup();
  });

  it('init home component', () => {
    const { getByTestId } = renderWithCotext({ status: ''});
    expect(getByTestId('welcome')).toBeInTheDocument();
  });
  
  it('if status is successful', () => {
    const { getByTestId } = renderWithCotext({ status: 'success' });
    expect(getByTestId('success')).toBeInTheDocument();
  });

  it('if status is failure', () => {
    const { getByTestId } = renderWithCotext({ status: 'failure' });
    expect(getByTestId('failure')).toBeInTheDocument();
  });

  it('if staus is loading', () => {
    const { getByTestId } = renderWithCotext({ status: 'loading' });
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});