import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Button, Typography, Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import IceCreamCrimeScene from "./assets/ice_crime_scene.svg";

function FourOhFour() {
	const { t } = useTranslation("translation", {
		keyPrefix: "404",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="This page was not found. Unless you found it on Google, somehow, which means you technically found it...? Which probably means that I royally fucked something up."
				/>
			</Helmet>
			<div className="fullscreen">
				<img src={IceCreamCrimeScene} />
				<Container className="title">
					<Typography variant="h1">{t("title.main")}</Typography>
					<Typography variant="h2">{t("title.sub")}</Typography>
					<br />
					<Link to="/">
						<Button variant="contained" size="large" color="warning">
							{t("title.button")}
						</Button>
					</Link>
				</Container>
			</div>
		</>
	);
}

export default FourOhFour;
