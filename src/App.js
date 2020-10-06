import React from 'react';

import Header from './components/Header';
import Left   from './components/Left';
import Main from './pages/main';
import './styles.css';
function App() {
  return (
    <div className="App">
    <Header />
    {/* <Left /> */}
    <Main />
    </div>
  );
}

export default App;
