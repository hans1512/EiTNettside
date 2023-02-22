import "./App.css";
import React, { useState } from "react";
import Dropdown from "./components/dropdown/dropdown";
import Slider from "@mui/material/Slider";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import solkraft from "./images/solkraft.svg";
import vannkraft from "./images/vannkraft.svg";
import vindkraft from "./images/vindkraft.svg";
import kullkraft from "./images/kullkraft.svg";
import tyskland from "./images/tyskland.svg";
import kina from "./images/kina.svg";
import usa from "./images/usa.svg";
import norge from "./images/norge.svg";
import pil from "./images/pil.svg";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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
  const [powerState, setPowerState] = React.useState('Vannkraft');

  const handleChangePowerState = (event: SelectChangeEvent) => {
    setPowerState(event.target.value);
  };

  const [countryState, setCountryState] = React.useState("Norge");

  const handleChangeCountryState = (event: SelectChangeEvent) => {
    setCountryState(event.target.value);
  };
  ///  const [powerState, setPowerState] = React.useState("Vannkraft");
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="energikilde">Kilde</InputLabel>
            <Select
              labelId="energikilde-label"
              id="energikilde"
              value={powerState}
              label="Age"
              onChange={handleChangePowerState}
            >
              <MenuItem value={"Vannkraft"}>Vannkraft</MenuItem>
              <MenuItem value={"Solkraft"}>Solkraft</MenuItem>
              <MenuItem value={"Vindkraft"}>Vindkraft</MenuItem>
              <MenuItem value={"Kullkraft"}>Kullkraft</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>Country</div>
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="land">land</InputLabel>
            <Select
              labelId="land-label"
              id="land"
              value={countryState}
              label="land"
              onChange={handleChangeCountryState}
            >
              <MenuItem value={"Norge"}>Norge</MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
              <MenuItem value={"Tyskland"}>Tyskland</MenuItem>
              <MenuItem value={"Kina"}>Kina</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    
      <div className="image-section">
        <div className="images">
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

          {/* {countryState === "Kina" && (
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
          )} */}
          <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Stuff"
        subheader="What is this stuff?"
      />
      <CardMedia
        component="img"
        height="194"
        image={countryState === "Tyskland" ? tyskland : norge}
        alt="Norge"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Norge er et vakkert land, med ren natur, rent vann og miljøbevisste mennesker.
         Vi kaster ikke søppel i naturen og vi hadde verdens første miljøvernminister.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Hvor miljøvennlige er vi da, når regningen kommer på bordet og vi vet at vår innsats har minimal betydning og noen forskere mener det hele er tøv? Skal vi oppnå våre mål må privatforbruket av energi ned,
           og da må prisene øke. Men de politiske kostnadene ved økte energikostnader er store. Da bensinprisene steg i et valgår, da senket vi bensinavgiften, og miljøpolitikere 
          protesterte ikke. Pristigninger rammer urettferdig, og er vanskelig å forsvare når folk ikke er sikre på at det hjelper miljøet.
          </Typography>
          <Typography paragraph>
          Det er her Norge svikter: Vi jobber hardt for å være moralske, men vi gjør lite for å finne løsninger. 
          Vi er flinke med vannkraftverk, vi lager og utplasserer vindmøller og vi bruker biodiesel, men det er ikke nok nedbørrike fjell og landbruksarealer i verden til å løse klimaproblemet, og vindkraft passer ikke over alt.
           Vi skaper pusterom for oss selv, men vi bidrar lite til langsiktige løsninger.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </div>
        <div className="arrow-image">
          <img src={pil} className="arrow-image" alt="pil"></img>
        </div>
      </div>
      <div className="output-section">
        <div>The total CO2 output for these settings is</div>

        {slider1 * slider2 * slider3}
      </div>
    </div>
  );
}

export default App;
