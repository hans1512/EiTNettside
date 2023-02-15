import './App.css';

import Dropdown from "./components/dropdown/dropdown";
import Slider from "./components/slider"

const App = () => {

    const handleDropdown = (dropdown) => {
        console.log(dropdown)
    };

    return (
        <div className="App">
            <div className="input-section">
                <Slider/>
                <Slider/>
                <Slider/>
                <Dropdown items={[
                    <button onClick={handleDropdown}>Norge</button>,
                    <button onClick={handleDropdown}>Kina</button>,
                    <button onClick={handleDropdown}>Tyskland</button>,
                    <button onClick={handleDropdown}>USA</button>,
                ]} type='Select country'/>
                <Dropdown items={[
                    <button onClick={handleDropdown}>Vannkraft</button>,
                    <button onClick={handleDropdown}>Solceller</button>,
                    <button onClick={handleDropdown}>Kullkraft</button>,
                    <button onClick={handleDropdown}>Atomkraft</button>,
                ]} type='Power source'/>
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
