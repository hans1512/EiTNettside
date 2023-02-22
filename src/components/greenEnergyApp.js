import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as SolarIcon } from "../images/solar-panels-couple-in-sunlight-svgrepo-com.svg";
import { ReactComponent as WindIcon } from "../images/wind-power-2-svgrepo-com.svg";
import { ReactComponent as CoalIcon } from "../images/coal-svgrepo-com.svg";
import { ReactComponent as HydroIcon } from "../images/hydro-power-water-svgrepo-com.svg";

const images = {
    solkraft: <SolarIcon />,
    vindkraft: <WindIcon />,
    kullkraft: <CoalIcon />,
    vannkraft: <HydroIcon />
};

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        margin: theme.spacing(1)
    },
    slider: {
        margin: theme.spacing(1),
        width: "90%"
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: "80%",
        maxWidth: 200
    }
}));

function GreenEnergyApp() {
    const classes = useStyles();
    const [slider1Value, setSlider1Value] = useState(50);
    const [slider2Value, setSlider2Value] = useState(50);
    const [slider3Value, setSlider3Value] = useState(50);
    const [dropbox1Value, setDropbox1Value] = useState("solkraft");
    const [dropbox2Value, setDropbox2Value] = useState("Kina");

    const handleSlider1Change = (event, newValue) => {
        setSlider1Value(newValue);
    };

    const handleSlider2Change = (event, newValue) => {
        setSlider2Value(newValue);
    };

    const handleSlider3Change = (event, newValue) => {
        setSlider3Value(newValue);
    };

    const handleDropbox1Change = (event) => {
        setDropbox1Value(event.target.value);
    };

    const handleDropbox2Change = (event) => {
        setDropbox2Value(event.target.value);
    };

    const calculateTotal = () => {
        return slider1Value + slider2Value + slider3Value;
    };

    return (
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Green Energy Calculator
            </Typography>
            <Box mt={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={dropbox1Value}
                                onChange={handleDropbox1Change}
                                displayEmpty
                            >
                                <MenuItem value="solkraft">Solkraft</MenuItem>
                                <MenuItem value="vindkraft">Vindkraft</MenuItem>
                                <MenuItem value="kullkraft">Kullkraft</MenuItem>
                                <MenuItem value="vannkraft">Vannkraft</MenuItem>
                            </Select>
                        </FormControl>
                        <Slider
                            value={slider1Value}
                            onChange={handleSlider1Change}
                            aria-labelledby="slider1"
                            className={classes.slider}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={dropbox2Value}
                                onChange={handleDropbox2Change}
                                displayEmpty
                            >
                                <MenuItem value="Kina">Kina</MenuItem>
                                <MenuItem value="Norge">Norge</MenuItem>
                                <MenuItem value="USA">USA</MenuItem>
                            </Select>
                        </FormControl>
                        <Slider
                            value={slider2Value}
                            onChange={handleSlider2Change}
                            aria-labelledby="slider2"
                            className={classes.slider}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" gutterBottom>
                            Total: {calculateTotal()}
                        </Typography>
                        <Slider
                            value={slider3Value}
                            onChange={handleSlider3Change}
                            aria-labelledby="slider3"
                            className={classes.slider}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={4} className={classes.imageContainer}>
                {images[dropbox1Value]}
            </Box>
        </div>
    );
}

export default GreenEnergyApp;
