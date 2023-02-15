import kullkraft from "../images/kullkraft.jpg"
import vindkraft from "../images/vindkraft.jpg"
import vannkraft from "../images/vannkraft.jpg"
import solkraft from "../images/solkraft.jpg"


import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
  return (
    <Box width={300}>
      <Slider 
        defaultValue={50} 
        aria-label="Default" 
        valueLabelDisplay="auto" />
    
    </Box>
  );
}