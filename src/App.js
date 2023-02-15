import './App.css';

import Dropdown from "./components/dropdown/dropdown";
import Slider from "./components/slider"
import * as React from 'react'

const App = () => {

    const handleDropdown = (dropdown) => {
        console.log(countryState)
    };

    const [countryState, setCountryState] = React.useState('')
    const [powerState, setPowerState] = React.useState('')

    return (
        <div className="App">
            <div className="input-section">
                <Slider/>
                <Slider/>
                <Slider/>
                <Dropdown items={[
                    <button onClick={setCountryState}>Norge</button>,
                    <button onClick={setCountryState}>Kina</button>,
                    <button onClick={setCountryState}>Tyskland</button>,
                    <button onClick={setCountryState}>USA</button>,
                ]} type='Select country'/>
                {countryState}
                <Dropdown items={[
                    <button onClick={setPowerState}>Vannkraft</button>,
                    <button onClick={setPowerState}>Solceller</button>,
                    <button onClick={setPowerState}>Kullkraft</button>,
                    <button onClick={setPowerState}>Atomkraft</button>,
                ]} type='Power source'/>
                {powerState}
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
