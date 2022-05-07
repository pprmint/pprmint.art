import React from "react";
import { Helmet } from "react-helmet";
import {
    Button,
    Typography,
    ThemeProvider,
    Theme,
    StyledEngineProvider,
    Grid,
    Container,
    adaptV4Theme,
} from "@mui/material";
import "./MintAlt.css";
import { createTheme } from "@mui/material";

import Digital from "./images/time_digital.svg";
import Analog from "./images/time_analog.svg";
import Cardinal from "./images/cardinal.svg";

function MintAltDL() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>A mistake • pprmint.art</title>
                <meta
                    name="description"
                    content="A terrible name for an equally terrible fo- I mean This is a font inspired by Google's Material icons, as some of these have texts in them as well. I can only really recommend the numbers in here."
                />
            </Helmet>
            <Container className="wrapper">
                <Typography variant="h1" align="center">MINT&#173;ALT</Typography>
                <div className="content">
                    <Typography variant="h4" style={{ fontWeight: "lighter" }}>
                        INSPIRED BY GOOGLE'S MATERIAL ICONS.
                        <br />
                        GOOD FOR NUMBERS, I GUESS..?
                    </Typography>
                    <br />
                    <br />
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={6}>
                            <img src={Cardinal} alt="Cardinal directions" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <img src={Analog} alt="Analog clock" />
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <img src={Digital} alt="Digital clock" />
                    <br />
                    <br />
                    <br />
                    <a href="/assets/downloads/mintalternative_1.1.zip" download>
                        <Button
                            variant="outlined"
                            size="large"
                            color="primary"
                            style={{
                                fontWeight: "bold",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        >
                            Download
                        </Button>
                    </a>
                </div>
            </Container>
        </>
    );
}

export default MintAltDL;
