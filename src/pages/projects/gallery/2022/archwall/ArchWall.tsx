import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Typography, Card, Skeleton, Container } from "@mui/material";

import Image from "material-ui-image";

import SlideOne from "./assets/arch_with_blue_mountains.png";
import SlideTwo from "./assets/arch_screenshot.png";

function ArchWall() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Arch btw wallpaper • pprmint.art</title>
				<meta
					name="description"
					content="A wallpaper made to be used on Arch Linux with the Qogir theme. Very specific indeed."
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">Arch wallpaper.</Typography>
				<Typography variant="h2">I use Arch btw.</Typography>
			</Container>
			<div className="content">
				<div className="section">
					<a href={SlideOne} target="_blank">
						<Image
							src={SlideOne}
							width="100%"
							alt="The wallpaper in all its glory."
							aspectRatio={16 / 9}
							color="transparent"
							loading={
								<Skeleton
									variant="rectangular"
									animation="wave"
									width="100%"
									height="100%"
								/>
							}
						/>
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						The wallpaper. Feel free to right-click and save.
					</Typography>
				</div>
				<div className="section">
					<a href={SlideTwo} target="_blank">
						<Image
							src={SlideTwo}
							width="100%"
							alt="A screenshot showing this wallpaper applied to KDE Plasma with the Qogir theme enabled."
							aspectRatio={16 / 9}
							color="transparent"
							loading={
								<Skeleton
									variant="rectangular"
									animation="wave"
									width="100%"
									height="100%"
								/>
							}
						/>
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						This theme was made to be used together with the{" "}
						<a
							className="external"
							href="https://github.com/vinceliuice/Qogir-theme"
							target="_blank"
							rel="noreferrer noopener"
						>
							Qogir GTK
						</a>{" "}
						or{" "}
						<a
							className="external"
							href="https://github.com/vinceliuice/Qogir-kde"
							target="_blank"
							rel="noreferrer noopener"
						>
							KDE
						</a>{" "}
						theme.
					</Typography>
				</div>
			</div>
		</>
	);
}

export default ArchWall;
