import "./App.css";
import React, { useState } from "react";
import Dropdown from "./components/dropdown/dropdown";
import Slider from "@mui/material/Slider";

function App() {
  const [slider1, setSlider1] = useState(20);

  const changeValue1 = (event, value) => {
    setSlider1(value);
  };
  const [slider2, setSlider2] = useState(20);

  const changeValue2 = (event, value) => {
    setSlider2(value);
  };
  const [slider3, setSlider3] = useState(20);

  const changeValue3 = (event, value) => {
    setSlider3(value);
  };

  const handleDropdown = (dropdown) => {
    console.log(countryState);
  };

  const [countryState, setCountryState] = React.useState("");
  const [powerState, setPowerState] = React.useState("");

  return (
    <div className="App">
      <div className="input-section">
        <div>
          <div>
            <small>The percentage of SAF in the fuel</small>
            <Slider
              defaultValue={20}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{
                width: 0.7,
                color: "blue",
              }}
              onChange={changeValue1}
            />
          </div>
          <div>
            <small>Stuff</small>
          </div>
          <div>
            <Slider
              defaultValue={20}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{
                width: 0.7,
                color: "success.main",
              }}
              onChange={changeValue2}
            />
          </div>
          <div>
            <small>more stuff</small>
          </div>
          <div>
            <Slider
              defaultValue={20}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{
                width: 0.7,
                color: "red",
              }}
              onChange={changeValue3}
            />
          </div>
          <h2>
            The state is {slider1}, {slider2} and {slider3}
          </h2>
        </div>
        <Dropdown
          items={[
            <button onClick={setPowerState}>Vannkraft</button>,
            <button onClick={setPowerState}>Solceller</button>,
            <button onClick={setPowerState}>Kullkraft</button>,
            <button onClick={setPowerState}>Atomkraft</button>,
          ]}
          type="Power source"
        />
        {powerState}
        <Dropdown
          items={[
            <button onClick={setCountryState}>Norge</button>,
            <button onClick={setCountryState}>Kina</button>,
            <button onClick={setCountryState}>Tyskland</button>,
            <button onClick={setCountryState}>USA</button>,
          ]}
          type="Select country"
        />
        {countryState}
      </div>
      <div className="image-section"></div>
      <div className="output-section"></div>
    </div>
  );
}

export default App;
