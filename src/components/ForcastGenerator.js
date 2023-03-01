import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import vannkraft from "./../images/vannkraft.svg";


export default function ForecastGenerator(props) {
    const [destination, setDestination] = useState("")
    const handleDestinationChange = (event: SelectChangeEvent) => {
        setDestination(event.target.value)
    }
    const [departure, setDeparture] = useState("")
    const handleDepartureCange = (event: SelectChangeEvent) => {
        setDeparture(event.target.value)
    }

    const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;


    const factor = props.optimism
    return (

        <Container>
            <Box>
                {(factor < 25) && (
                    <Text> Meget Lavt optimismenivå</Text>
                )}
                {(24 < factor && factor < 49) && (
                    <Text>middels lavt optimismenivå</Text>
                )}
                {(49 < factor && factor < 75) && (
                    <Text>Medimum høyt optimismenivå</Text>
                )}
                {factor > 74 && (
                    <Text> Høyt optimismenivå</Text>
                )}
            </Box>

            <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                    <InputLabel id="Departure">Departure</InputLabel>
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
                <Box sx={{ minWidth: 300, paddingTop: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="Destination">Destination</InputLabel>
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


    )
}