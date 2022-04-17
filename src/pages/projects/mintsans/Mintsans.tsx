import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
	Button,
	Typography,
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
    const { t } = useTranslation("translation", {
		keyPrefix: "projects.mintsans",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="My first geometric font. Not bad for a first attempt, but not good either."
                    />
                <meta name="theme-color" content="#1199ff" />
				<meta
					property="og:description"
					content="My first geometric font. Not bad for a first attempt, but not good either."
				/>
				<meta property="og:image" content="https://pprmint.art/og/mintsans.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="A sans-serif font." />
				<meta property="og:url" content="https://pprmint.art/mintsans" />
			</Helmet>
			<div className="fullscreen">
				<img src={MintsansBanner} />
				<Container className="title">
					<img src={MintsansLogo} />
					<Typography variant="h2">{t("title.sub")}</Typography>
					<br />
					<RiArrowDownLine size={25} color="#19f" />
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
						<Typography variant="h1">{t("section.download.headline")}</Typography>
						<Typography variant="body1">
                        {t("section.download.description")}
						</Typography>
						<br />
						<Button
							variant="contained"
							href="https://download.pprmint.art/mintsans_2.0.zip"
							download
							color="info"
							startIcon={<RiDownload2Line />}
						>
							{t("section.download.downloadButton")}
						</Button>
					</Container>
				</div>
			</div>
		</>
	);
}

export default MintsansDL;
