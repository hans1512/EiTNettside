import './App.css';
<<<<<<< HEAD
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
=======

import Dropdown from "./components/dropdown/dropdown";
import Slider from "./components/slider"

function App() {

    return (
        <div className="App">
            <div className="input-section">
                <Slider/>
                <Slider/>
                <Slider/>
                <Dropdown items={[
                    <button>Norge</button>,
                    <button>Kina</button>,
                    <button>Tyskland</button>,
                    <button>USA</button>,
                ]} type='Select country'/>
                <Dropdown items={[
                    <button>Vannkraft</button>,
                    <button>Solceller</button>,
                    <button>Kullkraft</button>,
                    <button>Atomkraft</button>,
                ]}  type='Power source'/>
            </div>
            <div className="image-section">
                images:)
            </div>
            <div className="output-section">
                Output :)
            </div>
        </div>
    );
>>>>>>> 0a5dc63204d7cf1d35439aa2e61b89d1d2da95c5
}

export default App;
