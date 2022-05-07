import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Typography,
	Card,
	Skeleton,
	Container,
	CircularProgress,
} from "@mui/material";

import Image from "mui-image";

import SlideOne from "./assets/nyanjaro-cat.png";

function ManjaroWall() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Manjaro wallpaper • pprmint.art</title>
				<meta
					name="description"
					content="A wallpaper made to be used on Manjaro, inspired by the default SWAY background."
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">Manjaro wallpaper.</Typography>
				<Typography variant="h2">
					Inspired by the default SWAY wallpaper.
				</Typography>
			</Container>
			<div className="content">
				<div className="section">
					<a href={SlideOne} target="_blank">
						<Image
							src={SlideOne}
							width="100%"
							alt="The wallpaper in all its glory."
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						The wallpaper. Feel free to right-click and save.
					</Typography>
				</div>
			</div>
		</>
	);
}

export default ManjaroWall;
