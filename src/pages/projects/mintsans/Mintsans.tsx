import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Card,
	CardContent,
	CardActions,
	Container,
} from "@mui/material";

import Image from "material-ui-image";

import { RiArrowDownLine, RiDownload2Line } from "react-icons/ri";

import MintsansBanner from "./assets/mintsans_banner.svg";
import MintsansLogo from "./assets/mintsans_logo.svg";

import SlideOne from "./assets/slide1.svg";
import SlideTwo from "./assets/slide2.svg";
import SlideThree from "./assets/slide3.svg";
import SlideFour from "./assets/slide4.svg";
import SlideFive from "./assets/slide5.svg";
import SlideSix from "./assets/slide6.svg";

function MintsansDL() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>A sans-serif font • pprmint.art</title>
				<meta
					name="description"
					content="My first geometric font. Not bad for a first attempt, but not good either."
				/>
			</Helmet>
			<div className="fullscreen">
				<img src={MintsansBanner} />
				<Container className="title">
					<img src={MintsansLogo} />
					<Typography variant="h2">A sans-serif font.</Typography>
					<br />
					<RiArrowDownLine size={25} />
				</Container>
			</div>
			<div className="content">
				<div className="section">
					<Image
						src={SlideOne}
						width="100%"
						alt="Aboslutely censored hideous."
						aspectRatio={16 / 9}
						color="transparent"
					/>
					<Image
						src={SlideTwo}
						width="100%"
						alt="Geometrical inconsistency, feat. A Quick Brown Fox."
						aspectRatio={16 / 9}
						color="transparent"
					/>
					<Image
						src={SlideThree}
						width="100%"
						alt="If you look up the definition for"
						aspectRatio={16 / 9}
						color="transparent"
					/>
					<Image
						src={SlideFour}
						width="100%"
						alt="mistake, it'll be set in MintSans."
						aspectRatio={16 / 9}
						color="transparent"
					/>
					<Image
						src={SlideFive}
						width="100%"
						alt="The quick brown fox jumps over the lazy dog."
						aspectRatio={16 / 9}
						color="transparent"
					/>
					<Image
						src={SlideSix}
						width="100%"
						alt="Some tips for using MintSans!"
						aspectRatio={16 / 9}
						color="transparent"
					/>
				</div>
				<div className="section">
					<Container>
						<Typography variant="h1">Mintsans V2</Typography>
						<Typography variant="body1">
							If you could actually read the text on slide 3 in a sensible
							order, you deserve a download button.
						</Typography>
						<br />
						<Button
							variant="contained"
							href="http://download.pprmint.art/mintsans_2.0.zip"
							download
							color="info"
							startIcon={<RiDownload2Line />}
						>
							Download
						</Button>
					</Container>
				</div>
			</div>
		</>
	);
}

export default MintsansDL;
