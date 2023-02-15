import logo from './logo.svg';
import './App.css';
import React from 'react';
import Slider from './components/slider';
import SliderWithImages from "./components/SliderWithImages"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SliderWithImages/>
      </header>
    </div>
  );
}

export default App;
