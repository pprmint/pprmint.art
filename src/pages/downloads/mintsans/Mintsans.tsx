import React from "react";
import { Helmet } from "react-helmet";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import {
	Button,
	Typography,
	Container,
	Card,
	Skeleton,
	Slider,
	Grid,
	Box,
	Paper,
	Alert,
} from "@mui/material";

import Image from "@jy95/material-ui-image";

import "./assets/mintsans/mintsans.css";
import {
	FiArrowDown,
	FiDownload,
	FiInfo,
} from "react-icons/fi";

import MintsansBanner from "./assets/mintsans_banner.svg";
import MintsansLogo from "./assets/mintsans_logo.svg";

import SlideOne from "./assets/slide1.svg";
import SlideTwo from "./assets/slide2.svg";
import SlideThree from "./assets/slide3.svg";
import SlideFour from "./assets/slide4.svg";
import SlideFive from "./assets/slide5.svg";
import SlideSix from "./assets/slide6.svg";

const weights = [
	{
		value: 200,
	},
	{
		value: 400,
	},
	{
		value: 700,
	},
];

const tracking = [
	{
		value: -0.25,
	},
	{
		value: 0,
	},
	{
		value: 1,
	},
];

export default function MintsansDL() {
	const { t } = useTranslation("translation", {
		keyPrefix: "downloads.mintsans",
	});

	const [fontSize, setFontSize] = React.useState<
		number | string | Array<number | string>
	>(40);
	const handleSizeChange = (event: Event, newValue: number | number[]) => {
		setFontSize(newValue);
	};

	const [fontWeight, setFontWeight] = React.useState<
		number | string | Array<number | string>
	>(400);
	const handleWeightChange = (event: Event, newValue: number | number[]) => {
		setFontWeight(newValue);
	};

	const [fontTracking, setFontTracking] = React.useState<
		number | string | Array<number | string>
	>(0);
	const handleTrackingChange = (event: Event, newValue: number | number[]) => {
		setFontTracking(newValue);
	};

	return (
		<React.Fragment>
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
				<meta
					property="og:image"
					content="https://pprmint.art/og/mintsans.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="A sans-serif font." />
				<meta property="og:url" content="https://pprmint.art/mintsans" />
			</Helmet>
			<img src={MintsansBanner} className="hero fullscreen" />
			<div className="fullscreen">
				<Container className="title">
                <Grid container>
						<Grid item sm={12} md={8}>
					<img src={MintsansLogo} />
					<Typography variant="h2">{t("title.sub")}</Typography>
					</Grid>
						<Grid
							item
							sm={12}
							md={4}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<ScrollLink to="downloads" smooth>
								<Button
									variant="outlined"
									size="large"
									color="info"
								>
									{t("title.skipToDownloads")}
								</Button>
							</ScrollLink>
						</Grid>
					</Grid>
                    <br />
					<FiArrowDown size={25} color="#19f" />
				</Container>
			</div>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<Image
						src={SlideOne}
						color="transparent"
						aspectRatio={16 / 9}
						loading={<Skeleton variant="rectangular" />}
						alt="Aboslutely censored hideous."
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<Image
						src={SlideTwo}
						color="transparent"
						aspectRatio={16 / 9}
						loading={<Skeleton variant="rectangular" />}
						alt="Geometrical inconsistency, feat. A Quick Brown Fox."
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<Image
						src={SlideThree}
						color="transparent"
						aspectRatio={16 / 9}
						loading={<Skeleton variant="rectangular" />}
						alt="If you look up the definition for"
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<Image
						src={SlideFour}
						color="transparent"
						aspectRatio={16 / 9}
						loading={<Skeleton variant="rectangular" />}
						alt="mistake, it'll be set in MintSans."
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<Image
						src={SlideFive}
						color="transparent"
						aspectRatio={16 / 9}
						loading={<Skeleton variant="rectangular" />}
						alt="The quick brown fox jumps over the lazy dog."
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<Image
						src={SlideSix}
						color="transparent"
						aspectRatio={16 / 9}
						loading={<Skeleton variant="rectangular" />}
						alt="Some tips for using MintSans!"
					/>
				</ScrollAnimation>
			</div>
			<div className="section" id="try">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">{t("section.try.headline")}</Typography>
						<Typography variant="body1">
							{t("section.try.description")}
						</Typography>
					</ScrollAnimation>
				</Container>
				<br />
				<br />
				<Container maxWidth="xl">
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Box maxWidth="calc(100vw - 32px)">
							<Card variant="outlined">
								<Paper
									square
									elevation={2}
									sx={{
										display: "flex",
										alignItems: "center",
										pr: 3,
										pl: 3,
										pt: 2,
										pb: 1,
									}}
								>
									<Grid container spacing={4}>
										<Grid item sm={4} xs={12}>
											<Typography gutterBottom>
												{t("section.try.size")}
											</Typography>
											<Slider
												aria-label="Font size"
												color="secondary"
												value={typeof fontSize === "number" ? fontSize : 0}
												valueLabelDisplay="auto"
												valueLabelFormat={fontSize + " px"}
												onChange={handleSizeChange}
											/>
										</Grid>
										<Grid item sm={4} xs={12}>
											<Typography gutterBottom>
												{t("section.try.weight")}
											</Typography>
											<Slider
												aria-label="Font weight"
												color="secondary"
												valueLabelDisplay="auto"
												defaultValue={400}
												min={200}
												max={700}
												step={null}
												marks={weights}
												onChange={handleWeightChange}
											/>
										</Grid>
										<Grid item sm={4} xs={12}>
											<Typography gutterBottom>
												{t("section.try.tracking")}
											</Typography>
											<Slider
												aria-label="Font tracking"
												color="secondary"
												value={
													typeof fontTracking === "number" ? fontTracking : 0
												}
												valueLabelDisplay="auto"
												valueLabelFormat={fontTracking + " rem"}
												min={-0.25}
												max={1}
												step={0.01}
												marks={tracking}
												onChange={handleTrackingChange}
											/>
										</Grid>
									</Grid>
								</Paper>
								<Box p={3}>
									<Alert
										variant="filled"
										severity="info"
										icon={<FiInfo />}
									>
										{t("section.try.info")}
									</Alert>
								</Box>
								<Box
									minHeight="50vh"
									p={3}
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										textAlign: "center",
									}}
								>
									<Typography
										sx={{
											fontFamily: "Mintsans",
											color: "var(--textSecondary)",
											outline: "none",
											fontWeight: fontWeight,
											fontSize: fontSize,
											letterSpacing: fontTracking + "rem",
										}}
										contentEditable="true"
										suppressContentEditableWarning
									>
										{t("section.try.pangram")}
									</Typography>
								</Box>
							</Card>
						</Box>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section" id="downloads">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">
							{t("section.download.headline")}
						</Typography>
						<Typography variant="body1">
							{t("section.download.description")}
						</Typography>
						<br />
						<Button
							variant="contained"
							href="https://download.pprmint.art/mintsans_2.0.zip"
							download
							color="info"
							startIcon={<FiDownload />}
						>
							{t("section.download.downloadButton")}
						</Button>
					</ScrollAnimation>
				</Container>
			</div>
		</React.Fragment>
	);
}
