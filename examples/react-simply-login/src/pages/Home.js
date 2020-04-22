import React, { useContext } from 'react';

// context
import { Context } from '../store';

const Home = () => {
  const [state] = useContext(Context);
  const { status } = state;
  switch (status) {
    case 'loading':
      return <p className='text-3xl font-bold text-center m-20 text-grey-200' data-testid='loading'>loading...</p>;
    case 'success':
      return <p className='text-3xl font-bold text-center m-20 text-yellow-600' data-testid='success'>success</p>;
    case 'failure':
      return <p className='text-3xl font-bold text-center m-20 text-red-600' data-testid='failure'>failure</p>;
    default:
      return <p className='text-3xl font-bold text-center m-20 text-blue-200' data-testid='welcome'>welcome</p>;
  }
};

export default Home;