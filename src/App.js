import "./App.css";
import React, { useState } from "react";
import Dropdown from "./components/dropdown/dropdown";
import Slider from "@mui/material/Slider";

import solkraft from "./images/solkraft.svg";
import vannkraft from "./images/vannkraft.svg";
import vindkraft from "./images/vindkraft.svg";
import kullkraft from "./images/kullkraft.svg";
import tyskland from "./images/tyskland.svg";
import kina from "./images/kina.svg";
import usa from "./images/usa.svg";
import norge from "./images/norge.svg";
import pil from "./images/pil.svg";

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

  const [countryState, setCountryState] = React.useState("Norge");
  const [powerState, setPowerState] = React.useState("Vannkraft");

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
        <div>Power source</div>
        <Dropdown
          items={[
            <button onClick={setPowerState}>Vannkraft</button>,
            <button onClick={setPowerState}>Solkraft</button>,
            <button onClick={setPowerState}>Vindkraft</button>,
            <button onClick={setPowerState}>Kullkraft</button>,
          ]}
          type="Vannkraft"
        />
        <div>Country</div>
        <Dropdown
          items={[
            <button onClick={setCountryState}>Norge</button>,
            <button onClick={setCountryState}>Kina</button>,
            <button onClick={setCountryState}>Tyskland</button>,
            <button onClick={setCountryState}>USA</button>,
          ]}
          type="Norge"
        />
      </div>
      <div className="image-section">
        {powerState === "Vannkraft" && (
          <img src={vannkraft} className="power-image" alt="Vannkraft"></img>
        )}
        {powerState === "Kullkraft" && (
          <img src={kullkraft} className="power-image" alt="Kullkraft"></img>
        )}
        {powerState === "Solkraft" && (
          <img src={solkraft} className="power-image" alt="Solkraft"></img>
        )}
        {powerState === "Vindkraft" && (
          <img src={vindkraft} className="power-image" alt="Vindkraft"></img>
        )}

        <div className="arrow-image">
          <img src={pil} className="arrow-image" alt="pil"></img>
        </div>

        {countryState === "Kina" && (
          <img src={kina} className="country-image" alt="Kina"></img>
        )}
        {countryState === "Norge" && (
          <img src={norge} className="country-image" alt="Norge"></img>
        )}
        {countryState === "USA" && (
          <img src={usa} className="country-image" alt="USA"></img>
        )}
        {countryState === "Tyskland" && (
          <img src={tyskland} className="country-image" alt="Tyskland"></img>
        )}
      </div>
      <div className="output-section">
        <div>The total CO2 output for these settings is</div>

        {slider1 * slider2 * slider3}
      </div>
    </div>
  );
}

export default App;
