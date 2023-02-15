import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';


export default function SliderSizes(e) {
 
  return (
    <Box width={300}>
      <Slider 
        defaultValue={20} 
        aria-label="Default" 
        valueLabelDisplay="auto"
        onChange={e}/>  
    </Box>
  );
}