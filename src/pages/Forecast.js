import React, { useState } from "react"
import { Slider, Box, useStepContext } from "@mui/material"
import styled from 'styled-components';
import ForecastGenerator from "../components/ForcastGenerator";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import "./forecast.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Input_Div = styled.div`
    left: 0 
    `;

const Output_div = styled.div`
    right: 0;
`;



export default function Forecast() {
      
    const varme = 0.0001133
    const El = 0.00000133
    const C02 = 5.9959
    const H2 = 0.7634


async function changeDistance(departure){
        switch(departure){    
        case "Oslo":
                switch (destination){
                    case "Oslo":
                        handleChangeFuel(0)
                        break
                    case "Tokyo":
                        handleChangeFuel(217)
                        console.log("hei")
                        break
                    case "New York":
                        handleChangeFuel(95)
                        break
                    default:
                        break
                }
            case "Tokyo":
                switch (destination){
                    case "Oslo":
                        handleChangeFuel(217)
                        break
                    case "Tokyo":
                        handleChangeFuel(0)
                        break
                    case "New York":
                        handleChangeFuel(184)
                        break
                    default:
                        break
                    }
                
            case "New York": 
                switch (destination){
                    case "Oslo":
                        handleChangeFuel(95)
                        break
                    case "Tokyo":
                        handleChangeFuel(184)
                        console.log("tokyo")
                        break
                    case "New York":
                        handleChangeFuel(0)
                        break
                    default:
                        break
                    }
            default:
                break
          }}

    const [refresh, setRefresh] = useState(false)

    const [TimeTaken, setTimeTake] = useState(29700)
    const [FuelAmount, setFuelAmount] = useState(95)

    const handleChangeFuel = (fuel) => {
        setFuelAmount(fuel)
    }
    const [destination, setDestination] = useState("Oslo")
    const handleDestinationChange = (event: SelectChangeEvent) => {
        
        setDestination(event.target.value)
        changeDistance(departure)

        
        
    }

    const [departure, setDeparture] = useState("New York")
    const handleDepartureCange = (event: SelectChangeEvent) => {
        
        setDeparture(event.target.value)
        changeDistance(departure)
    }

  

    const marks = [{
        value: 0,
        label: "STEPS",
    },
    {
        value: 50,
        label: "APS",
    },
    {
        value: 100,
        label: "NZE"
    }]

    const [Optimism, setOptimism] = useState(0)
    
    const handleChangeOptimism = (e, value) => {
        setOptimism(value)
    }

    function valuetext(value) {
        return `${value}°C`;
    }
    const varme_nze_utslipp = -0.05665
    const  el_nze_utslipp = -0.00665
    const CO2_nze_utslipp = 2.94828
    const H2_nze_utslipp = 0
    const produksjon_nze_utslipp = 0.4053

    const varme_aps_utslipp = 0.57783
    const el_aps_utslipp = 0.06783
    const C02_aps_utslipp = 5.7140927
    const H2_aps_utslipp = 0
    const produksjon_aps_utslipp = 0.4053

    const varme_steps_utslipp = 2.11871
    const el_steps_utslipp = .24871
    const C02_steps_utslipp = 5.9959
    const H2_steps_utslipp =  0
    const produksjon_steps_utslipp = 0.4053
    
    var heat_co2 = 0
    var el_co2
    var CO2_co2
    var H2_co2
    var produksjon_co2


    
    if (Optimism < 50){ 
        heat_co2 = varme_steps_utslipp * (Math.max(0, 50-Optimism) / 50) + varme_aps_utslipp * (1- Math.max(0, 50-Optimism) / 50)
        el_co2 = el_steps_utslipp * (Math.max(0, 50-Optimism) / 50) + el_aps_utslipp * (1- Math.max(0, 50-Optimism) / 50)
        CO2_co2 = C02_steps_utslipp * (Math.max(0, 50-Optimism) / 50) + C02_aps_utslipp * (1- Math.max(0, 50-Optimism) / 50)
        H2_co2 = H2_steps_utslipp * (Math.max(0, 50-Optimism) / 50) + H2_aps_utslipp * (1- Math.max(0, 50-Optimism) / 50)
        produksjon_co2 = produksjon_steps_utslipp * (Math.max(0, 50-Optimism) / 50) + produksjon_aps_utslipp * (1- Math.max(0, 50-Optimism) / 50)

        }
    if (Optimism == 50){
        heat_co2 = varme_aps_utslipp
        el_co2 = el_aps_utslipp
        CO2_co2 = C02_aps_utslipp
        H2_co2 = H2_aps_utslipp
        produksjon_co2 = produksjon_aps_utslipp
    }
    if (Optimism > 50){
        heat_co2 = varme_aps_utslipp * (Math.max(0,100-Optimism) / 50) + varme_nze_utslipp * (1- (Math.max(0,100-Optimism) / 50))
        el_co2 = el_aps_utslipp * (Math.max(0,100-Optimism) / 50) + el_nze_utslipp * (1- (Math.max(0,100-Optimism) / 50))
        CO2_co2 = C02_aps_utslipp * (Math.max(0,100-Optimism) / 50) + CO2_nze_utslipp * (1- (Math.max(0,100-Optimism) / 50))
        H2_co2 = H2_aps_utslipp * (Math.max(0,100-Optimism) / 50) + H2_nze_utslipp * (1- (Math.max(0,100-Optimism) / 50))
        produksjon_co2 = produksjon_aps_utslipp * (Math.max(0,100-Optimism) / 50) + produksjon_nze_utslipp * (1- (Math.max(0,100-Optimism) / 50))


    }

    heat_co2 = heat_co2.toFixed(7)
    el_co2 = el_co2.toFixed(7)
    CO2_co2 = CO2_co2.toFixed(7) 
    H2_co2 = H2_co2.toFixed(7)
    produksjon_co2 = produksjon_co2.toFixed(7)



    const heat_prize_steps = 520.4722963
    const el_prize_steps = 62.76436104
    const CO2_prize_steps = 149.8975
    const H2_prize_steps = 3435.3
    const heat_prize_aps = 493.9446837
    const el_prize_aps = 59.5653667
    const CO2_prize_aps = 299.795
    const H2_prize_aps = 2137.52
    const heat_prize_nze =345.2396841
    const el_prize_nze = 41.632857
    const CO2_prize_nze = 479.672
    const H2_prize_nze = 992.42


    var heat_prize
    var el_prize
    var CO2_prize 
    var H2_prize 
    

    if (Optimism < 50){ 
        heat_prize = heat_prize_steps * (Math.max(0, 50-Optimism) / 50) + heat_prize_aps * (1- Math.max(0, 50-Optimism) / 50)
        el_prize = el_prize_steps * (Math.max(0, 50-Optimism) / 50) + el_prize_aps * (1- Math.max(0, 50-Optimism) / 50)
        CO2_prize = CO2_prize_steps * (Math.max(0, 50-Optimism) / 50) + CO2_prize_aps * (1- Math.max(0, 50-Optimism) / 50)
        H2_prize = H2_prize_steps * (Math.max(0, 50-Optimism) / 50) + H2_prize_aps * (1- Math.max(0, 50-Optimism) / 50)
    }
if (Optimism == 50){
    heat_prize = heat_prize_aps
    el_prize = el_prize_aps
    CO2_prize = CO2_prize_aps
    H2_prize = H2_prize_aps
}
if (Optimism > 50){
    heat_prize = heat_prize_aps * (Math.max(0,100-Optimism) / 50) + heat_prize_nze * (1- (Math.max(0,100-Optimism) / 50))
    el_prize = el_prize_aps * (Math.max(0,100-Optimism) / 50) + el_prize_nze * (1- (Math.max(0,100-Optimism) / 50))
    CO2_prize = CO2_prize_aps * (Math.max(0,100-Optimism) / 50) + CO2_prize_nze * (1- (Math.max(0,100-Optimism) / 50))
    H2_prize = H2_prize_aps * (Math.max(0,100-Optimism) / 50) + H2_prize_nze * (1- (Math.max(0,100-Optimism) / 50))

}

heat_prize = heat_prize.toFixed(5)
el_prize = el_prize.toFixed(5)
CO2_prize = CO2_prize.toFixed(5)
H2_prize = H2_prize.toFixed(5)
    function createData(name, resources, utslipp, pris) {
        return { name, resources, utslipp, pris};
      }
      
    

      const rows = [
        createData('CO2 (t)', C02*FuelAmount, CO2_co2*FuelAmount, CO2_prize*FuelAmount),
        createData('Electricity (TWh)', El*FuelAmount, el_co2*FuelAmount, el_prize*FuelAmount),
        createData('H2 (t)', H2*FuelAmount, H2_co2*FuelAmount, H2_prize*FuelAmount),
        createData('Heat (TWh)', varme*FuelAmount, heat_co2*FuelAmount, heat_prize*FuelAmount),
      ];



    

// + varme_aps_utslipp + varme_nze_utslipp * Math.max(0, Optimism-50) 
    return (
        <div className="App">
        <div className="input-section">
            <Container>
                <Box width={300}>
                    <h3>Optimismefaktor: {Optimism}%</h3>
                    <Slider
                        defaultValue={0}
                        aria-label="Default"
                        getAriaValueText={valuetext}
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                        onChange={handleChangeOptimism}
                    />
                    <ForecastGenerator optimism={Optimism} />
                </Box>
                <Box sx={{ maxWidth: 300 }}>
                <FormControl fullWidth>
                    <InputLabel id="Departure">Avgang</InputLabel>
                    <Select
                        defaultValue="New York"
                        labelId="departure-label"
                        id="Departure"
                        value={departure}
                        label="Departure"
                        onChange={handleDepartureCange}
                    >
                        <MenuItem value={"Oslo"}>Oslo</MenuItem>
                        <MenuItem value={"Amstedam"}>Amsterdam</MenuItem>
                        <MenuItem value={"New York"}>New York</MenuItem>
                        <MenuItem value={"Tokyo"}>Tokyo</MenuItem>
                    </Select>
                </FormControl>
                <Box />
                <Box sx={{ maxWidth: 300, paddingTop: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="Destination">Ankomst</InputLabel>
                        <Select
                            defaultValue="Oslo"
                            labelId="energikilde-label"
                            id="energikilde"
                            value={destination}
                            label="Destination"
                            onChange={handleDestinationChange}
                        >
                            <MenuItem value={"Oslo"}>Oslo</MenuItem>
                            <MenuItem value={"Amstedam"}>Amsterdam</MenuItem>
                            <MenuItem value={"New York"}>New York</MenuItem>
                            <MenuItem value={"Tokyo"}>Tokyo</MenuItem>
                        </Select>
                    </FormControl>
                
                </Box>
                </Box>
            </Container>

        </div>
        <div className="output-section">
            <Typography>Ved å ta utgangspunkt i at et fly bruker 4 liter drivstoff per sekund vil en flytur fra {departure} til {destination} bruke {4*TimeTaken} liter drivstoff. Hvis vi tar hensyn til massetettheten gir det oss {FuelAmount} tonn drivstoff.</Typography>
           
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Resources needed</TableCell>
                  <TableCell width={200} align="right">Resources needed</TableCell>
                  <TableCell width={200} align="rigth">Utslipp (t C02)</TableCell>
                  <TableCell width={200} align="right">Pris (USD)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.resources}</TableCell>
                    <TableCell align="right">{row.utslipp}</TableCell>
                    <TableCell align="right">{row.pris}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      
        
        </div>
        </div>
    )
}