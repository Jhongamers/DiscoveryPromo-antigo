import React from 'react';

import Header from './components/Header';
import Main   from './pages/main';
import Footer from './components/Footer';
import './styles.css';
function App() {
  return (
    <div className="App">
    <Header />
    {/* <Left /> */}
    <Main />
    <Footer />
    </div>
  );
}

export default App;
