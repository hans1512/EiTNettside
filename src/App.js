import './App.css';

import Dropdown from "./components/dropdown/dropdown";

function App() {
    return (
        <div className="App">
            <div className="input-section">
                <Dropdown items={[
                    <button>Norge</button>,
                    <button>Kina</button>,
                    <button>Tyskland</button>,
                    <button>USA</button>,
                ]}/>
            </div>
            <div className="image-section">
                images:)
            </div>
            <div className="output-section">
                Output :)
            </div>
        </div>
    );
}

export default App;
