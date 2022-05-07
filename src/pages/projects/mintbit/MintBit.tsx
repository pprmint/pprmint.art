import React from "react";
import { Helmet } from "react-helmet";
import {
    Button,
    Typography,
    ThemeProvider,
    Theme,
    StyledEngineProvider,
    Container,
    adaptV4Theme,
} from "@mui/material";
import "./MintSans.css";
import { createTheme } from "@mui/material";

import Glyphs from "./images/glyphs.svg";
import Ofl from "./images/ofl.svg";

function MintSansDL() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>pprmint.de – MintSans.</title>
                <meta
                    name="description"
                    content="My first geometric font. Not bad for a first attempt, but not necessarily good either. Licensed under the SIL Open Font Lincense, so you can use it anywhere you want, as long as you don't sell the fonts on their own."
                />
            </Helmet>
            <Container id="wrapper">
                <Typography variant="h1" align="center">
                    Mint&#173;<span style={{ fontWeight: "normal" }}>Sans</span>{" "}
                    <span style={{ fontWeight: "bold", color: "#256eff" }}>V2</span>
                </Typography>
                <div id="content">
                    <div style={{ marginBottom: "150px" }}>
                        <Typography variant="h4" style={{ fontWeight: "lighter" }}>
                            There were so many things I disliked about the first version I
                            wanted to fix with the next version. A few of those ideas were
                            listed in my YouTube video where I've shown what I've beenworking
                            on in the first half of 2020.
                        </Typography>
                        <br />
                        <Typography variant="h4">
                            Things I mainly improved with this version are the numbers and
                            lowercase characters. I also slightly tweaked some numbers, very
                            few capitals and how high certain glyphs are above or below the
                            baseline.
                        </Typography>
                        <br />
                        <Typography variant="h4" style={{ fontWeight: "bold" }}>
                            I think that for a while this will be the last larger update to
                            this font. If I notice something there might be a hotfix or two,
                            but nothing more than that. Despite that, I hope you'll enjoy
                            using this font wherever you want.
                        </Typography>
                    </div>
                    <div style={{ marginBottom: "150px" }}>
                        <Typography
                            variant="h2"
                            style={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            Glyphs
                        </Typography>
                        <br />
                        <img src={Glyphs} alt="abcdefghijklmnopqrstuvwxyz" />
                    </div>
                    <div style={{ marginBottom: "50px" }}>
                        <img src={Ofl} width="100%" alt="OFL" />
                    </div>
                    <a href="/assets/downloads/mintsans_2.0.zip" download>
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

export default MintSansDL;
