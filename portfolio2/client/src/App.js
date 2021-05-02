import React from 'react';
import './App.css';
import HomePage from './components/Home Page';
import GetMovie from './components/SearchMovie';

function App() {
  return (
    <div className="App">
      <HomePage />
      <GetMovie />
    </div>
  );
}

export default App;
