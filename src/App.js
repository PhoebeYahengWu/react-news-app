import React from 'react';
import News from './components/News/News'
import './App.css';

function App() {
  return (
    <div className="App">
    <nav>
    <div className="nav-wrapper #546e7a blue-grey darken-1">
      <a href="/" className="brand-logo center">Bitcoin Latest News</a>
    </div>
    </nav>
      <News />
    </div>
  );
}

export default App;
