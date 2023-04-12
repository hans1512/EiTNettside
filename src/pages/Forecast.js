import React, { useState } from "react"
import { Slider, Box } from "@mui/material"
import styled from 'styled-components';
import ForecastGenerator from "../components/ForcastGenerator";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
`;


export default function Forecast() {

    const [destination, setDestination] = useState("")
    const handleDestinationChange = (event: SelectChangeEvent) => {
        setDestination(event.target.value)
    }
    const [departure, setDeparture] = useState("")
    const handleDepartureCange = (event: SelectChangeEvent) => {
        setDeparture(event.target.value)
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

    return (
        <div>
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
    )
}