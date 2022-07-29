import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { Button, Typography, Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import IceCreamCrimeScene from "./assets/ice_crime_scene.json";

const lottieOptions = {
	loop: false,
	autoplay: true,
	animationData: IceCreamCrimeScene,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

function FourOhFour() {
	const { t } = useTranslation("translation", {
		keyPrefix: "404",
	});
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="This page was not found. Unless you found it on Google, somehow, which means you technically found it...? Which probably means that I royally fucked something up."
				/>
				<meta name="theme-color" content="#ffbb22" />
				<meta
					property="og:description"
					content="Why this link was sent is beyond me, since it doesn't really exist. But you do you."
				/>
				<meta property="og:image" content="https://pprmint.art/og/404.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="pprmint.art" />
				<meta property="og:url" content="https://pprmint.art" />
			</Helmet>
			<div className="fullscreen">
				<Lottie
					options={lottieOptions}
					isClickToPauseDisabled={true}
					height="auto"
					style={{ opacity: 0.25 }}
				/>
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
		</motion.div>
	);
}

export default FourOhFour;
