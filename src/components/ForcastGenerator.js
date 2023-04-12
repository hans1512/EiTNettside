import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import vannkraft from "./../images/vannkraft.svg";

export default function ForecastGenerator(props) {
  const [destination, setDestination] = useState("");
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const [departure, setDeparture] = useState("");
  const handleDepartureCange = (event) => {
    setDeparture(event.target.value);
  };

  const Text = styled.p`
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
  `;

  const factor = props.optimism;
  return (
    <Container>
      <Box>
        {factor < 25 && <Text> Meget Lavt optimismenivå</Text>}
        {24 < factor && factor < 50 && <Text>Middels lavt optimismenivå</Text>}
        {49 < factor && factor < 75 && <Text>Medimum høyt optimismenivå</Text>}
        {factor > 74 && <Text> Høyt optimismenivå</Text>}
      </Box>
    </Container>
  );
}
