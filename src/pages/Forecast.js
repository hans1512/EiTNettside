import React from "react"
import { Slider, Box } from "@mui/material"
import styled from 'styled-components';


const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;


export default function Forecast() {

    const marks = [ {
        value: 0,
        label: "STEPS",
    },
    {value: 50,
    label:"APS",
    },
    {value: 100,
    label: "NZE"
}]
    

    function valuetext(value) {
        return `${value}°C`;
      }

    return (
        <div>
            <Container>
            <Box width={300}>
                <h3>Optimismefaktor</h3>
                <Slider 
                    defaultValue={50} 
                    aria-label="Default" 
                    getAriaValueText={valuetext}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>
            </Container>
        </div>
    )
}