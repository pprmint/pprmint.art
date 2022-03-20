import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Typography, Container, Grid } from "@mui/material";
import Image from "material-ui-image";

import IceCreamCrimeScene from "./assets/ice_crime_scene.svg";

function FourOhFour() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Page not found • pprmint.art</title>
				<meta
					name="description"
					content="This page was not found. Unless you found it on Google, somehow, which means you technically found it...?"
				/>
			</Helmet>
			<div className="fullscreen">
				<img src={IceCreamCrimeScene} />
				<Container className="title">
					<Typography variant="h1">Who's the culprit?</Typography>
					<Typography variant="h2">This page was not found.</Typography>
					<br />
					<Link to="/">
						<Button variant="contained" size="large" color="warning">
							Leave the scene
						</Button>
					</Link>
				</Container>
			</div>
		</>
	);
}

export default FourOhFour;
