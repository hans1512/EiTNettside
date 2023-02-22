import './App.css';
import React from 'react';
import Dropdown from "./components/dropdown/dropdown";
import InputLayer from './components/input';

function App() {

    return (
        <div className="App">
            <div className="input-section">
                <InputLayer/>
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
            
            </div>
            <div className="output-section">
            
            </div>
        </div>
    );
}

export default App;
