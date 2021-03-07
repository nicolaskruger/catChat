import React from 'react';
import './styles/reset.css';
import './styles/default.css'
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
