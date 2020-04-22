import React from 'react';

// store
import Store from './store';
// pages
import Home from './pages/Home';

// components
import Header from './components/Header';

function App() {
  return (
    <Store>
      <div>
        <Header />
        <Home />
      </div>
    </Store>
  );
}

export default App;
