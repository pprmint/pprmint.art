import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Typography, Container, Grid } from "@mui/material";
import Image from "material-ui-image";

import PylonScene from "./assets/pylon.svg";
import { RiArrowDownLine } from "react-icons/ri";

function Wip() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Under construction • pprmint.art</title>
				<meta
					name="description"
					content="This page is not quite ready yet. Check back at a later time."
				/>
			</Helmet>
			<div className="fullscreen">
            <img src={PylonScene} />
				<Container className="title">
					<Typography variant="h1">You're too early.</Typography>
					<Typography variant="h2">There's nothing to see here yet.</Typography>
				</Container>
			</div>
		</>
	);
}

export default Wip;
