import "./App.css";
import React, { useState } from "react";
import Dropdown from "./components/dropdown/dropdown";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import solkraft from "./images/solkraft.svg";
import vannkraft from "./images/vannkraft.svg";
import vindkraft from "./images/vindkraft.svg";
import kullkraft from "./images/kullkraft.svg";
import tyskland from "./images/tyskland.svg";
import kina from "./images/kina.svg";
import usa from "./images/usa.svg";
import norge from "./images/norge.svg";
import pil from "./images/pil.svg";
import Page1 from "./pages/page1";

function App() {
  return (
    <div className="App">
      {
        /// Add menu options/ tabs 1,2,3
      }
      <Page1 />
    </div>
  );
}

export default App;
