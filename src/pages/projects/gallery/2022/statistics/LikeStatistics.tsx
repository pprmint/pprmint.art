import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Typography, Card, Skeleton, Container } from "@mui/material";

import Image from "material-ui-image";

import SlideOne from "./assets/statistics.png";

function Statistic() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Like statistics for @ProgressBar202_ • pprmint.art</title>
				<meta
					name="description"
					content="A nice dark statistic showing the likes for every percent from 2020 and 2021."
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">
					Like statistics for @ProgressBar202_
				</Typography>
				<Typography variant="h2">
					I was very bored before New Year's.{" "}
				</Typography>
			</Container>
			<div className="content">
				<div className="section">
					<a href={SlideOne} target="_blank">
						<Image
							src={SlideOne}
							width="100%"
							alt="A nice dark statistic showing the likes for every percent from 2020 and 2021."
							aspectRatio={1 / 1}
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
						I original plan was to wait maybe a week or two after New Year's
						before I finish this thing.
						<br />
						That plan saw Penguins, that's how far south it went.
					</Typography>
				</div>
			</div>
		</>
	);
}

export default Statistic;
