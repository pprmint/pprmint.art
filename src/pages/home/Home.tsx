import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import SwipeableViews from "react-swipeable-views";
import { Helmet } from "react-helmet";
import {
	Container,
	Typography,
	Card,
	CardContent,
	Grid,
	Button,
	Box,
	MobileStepper,
	Paper,
	Divider,
	Skeleton,
	CardActions,
} from "@mui/material";
import Image from "@jy95/material-ui-image";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";

import { motion } from "framer-motion";

import MintBanner from "./assets/mintBanner.json";

import NewsPatreon from "./assets/patreon.svg";
import NewsMintcraft16 from "./assets/mintcraft16.svg";
import NewsTwitterDelete from "./assets/twitterDelete.svg";
import {
	FiArrowDown,
	FiArrowLeft,
	FiArrowRight,
	FiArrowUpRight,
} from "react-icons/fi";
import {
	SiDiscord,
	SiGithub,
	SiYoutube,
	SiAnilist,
	SiLastdotfm,
	SiPatreon,
} from "react-icons/si";

function ReadMore(
	props: React.PropsWithChildren<{
		link: string;
	}>
) {
	const { t } = useTranslation("translation", {
		keyPrefix: "home.section.news.announcement.common",
	});
	return (
		<React.Fragment>
			<Box
				p={2}
				sx={{
					textAlign: "center",
				}}
			>
				<Link to={props.link}>
					<Button size="small">{t("tellMore")}</Button>
				</Link>
			</Box>
		</React.Fragment>
	);
}
function ReadMoreExternal(
	props: React.PropsWithChildren<{
		link: string;
	}>
) {
	const { t } = useTranslation("translation", {
		keyPrefix: "home.section.news.announcement.common",
	});
	return (
		<React.Fragment>
			<Box
				p={2}
				sx={{
					textAlign: "center",
				}}
			>
				<a href={props.link} target="_blank" rel="noopener noreferrer">
					<Button size="small" endIcon={<FiArrowUpRight />} color="info">
						{t("tellMore")}
					</Button>
				</a>
			</Box>
		</React.Fragment>
	);
}

const announcements = [
	{
		id: "patreon",
		date: "17.07.2022",
		imageSrc: NewsPatreon,
		actions: <ReadMoreExternal link="https://patreon.com/pprmint" />,
	},
	{
		id: "mintcraft16",
		date: "05.07.2022",
		imageSrc: NewsMintcraft16,
		actions: <ReadMore link="/downloads/mintcraft" />,
	},
	{
		id: "twitterDelete",
		date: "04.06.2022",
		imageSrc: NewsTwitterDelete,
	},
];

const lottieOptions = {
	loop: false,
	autoplay: true,
	animationData: MintBanner,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export default function Home() {
	const { t } = useTranslation("translation", {
		keyPrefix: "home",
	});

	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = announcements.length;
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="I make things look neat with vector points, keyframes, and colorful monospace letters. Have a look at my works or download things you may use for your own intents and purposes."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="I make things look neat with vector points, keyframes, and colorful monospace letters. Have a look at my works or download things you may use for your own intents and purposes."
				/>
				<meta property="og:image" content="https://pprmint.art/og/index.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Good today." />
				<meta property="og:url" content="https://pprmint.art" />
			</Helmet>
			<div className="fullscreen">
				<Lottie
					options={lottieOptions}
					isClickToPauseDisabled={true}
					height="auto"
				/>
				<Container className="title">
					<Typography variant="h1">{t("title.main")}</Typography>
					<Typography variant="h2">{t("title.sub")}</Typography>
					<br />
					<FiArrowDown size={25} color="#0c6" />
				</Container>
			</div>
			<div className="section" id="about">
				<Container>
					<Typography variant="h1">{t("section.about.title")}</Typography>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="body1">{t("section.about.text")}</Typography>
					</ScrollAnimation>
				</Container>
				<br />
				<br />
				<Container maxWidth="xl">
					<Grid container spacing={4}>
						<Grid item xs={12} sm={4}>
							<ScrollAnimation animateIn="fadeBottom" animateOnce>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h2">
											<SiYoutube
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#fc2323",
												}}
											/>
											{t("section.about.youtube.title")}
										</Typography>
										<Typography variant="body2">
											{t("section.about.youtube.text")}
										</Typography>
									</CardContent>
									<CardActions>
										<Box sx={{ marginLeft: "auto" }}>
											<a
												href="https://youtube.com/c/pprmint"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button color="inherit" endIcon={<FiArrowUpRight />}>
													{t("section.about.youtube.subscribe")}
												</Button>
											</a>
										</Box>
									</CardActions>
								</Card>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} sm={4}>
							<ScrollAnimation animateIn="fadeBottom" animateOnce>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h2">
											<SiGithub
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#fcfcfc",
												}}
											/>
											{t("section.about.github.title")}
										</Typography>
										<Typography variant="body2">
											{t("section.about.github.text")}
										</Typography>
									</CardContent>
									<CardActions>
										<Box sx={{ marginLeft: "auto" }}>
											<a
												href="https://github.com/pprmint"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button color="inherit" endIcon={<FiArrowUpRight />}>
													{t("section.about.github.follow")}
												</Button>
											</a>
										</Box>
									</CardActions>
								</Card>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} sm={4}>
							<ScrollAnimation animateIn="fadeBottom" animateOnce>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h2">
											<SiDiscord
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#6e7af1",
												}}
											/>
											{t("section.about.discord.title")}
										</Typography>
										<Typography variant="body2">
											{t("section.about.discord.text")}
										</Typography>
									</CardContent>
									<CardActions>
										<Box sx={{ marginLeft: "auto" }}>
											<a
												href="https://discord.com/invite/Vw9JXwr"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button color="inherit" endIcon={<FiArrowUpRight />}>
													{t("section.about.discord.join")}
												</Button>
											</a>
										</Box>
									</CardActions>
								</Card>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} sm={4}>
							<ScrollAnimation animateIn="fadeBottom" animateOnce>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h2">
											<SiPatreon
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#ff424d",
												}}
											/>
											{t("section.about.patreon.title")}
										</Typography>
										<Typography variant="body2">
											{t("section.about.patreon.text")}
										</Typography>
									</CardContent>
									<CardActions>
										<Box sx={{ marginLeft: "auto" }}>
											<a
												href="https://www.patreon.com/pprmint/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button color="inherit" endIcon={<FiArrowUpRight />}>
													{t("section.about.patreon.join")}
												</Button>
											</a>
										</Box>
									</CardActions>
								</Card>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} sm={4}>
							<ScrollAnimation animateIn="fadeBottom" animateOnce>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h2">
											<SiAnilist
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#25b3fc",
												}}
											/>
											{t("section.about.anilist.title")}
										</Typography>
										<Typography variant="body2">
											{t("section.about.anilist.text")}
										</Typography>
									</CardContent>
									<CardActions>
										<Box sx={{ marginLeft: "auto" }}>
											<a
												href="https://anilist.co/user/pprmint/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button color="inherit" endIcon={<FiArrowUpRight />}>
													{t("section.about.anilist.follow")}
												</Button>
											</a>
										</Box>
									</CardActions>
								</Card>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} sm={4}>
							<ScrollAnimation animateIn="fadeBottom" animateOnce>
								<Card variant="outlined">
									<CardContent>
										<Typography variant="h2">
											<SiLastdotfm
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#d93129",
												}}
											/>
											{t("section.about.lastfm.title")}
										</Typography>
										<Typography variant="body2">
											{t("section.about.lastfm.text")}
										</Typography>
									</CardContent>
									<CardActions>
										<Box sx={{ marginLeft: "auto" }}>
											<a
												href="https://www.last.fm/user/npprmint"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button color="inherit" endIcon={<FiArrowUpRight />}>
													{t("section.about.lastfm.follow")}
												</Button>
											</a>
										</Box>
									</CardActions>
								</Card>
							</ScrollAnimation>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Container maxWidth="xl">
				<Grid container spacing={7}>
					<Grid item md={12} lg={7}>
						<div className="section" id="latestWork">
							<Typography variant="h1">{t("section.recent.title")}</Typography>
							<br />
							<ScrollAnimation animateIn="fadeLeft" animateOnce>
								<Card variant="outlined">
									<Link to="/works/2022/lights">
										<Button
											color="inherit"
											sx={{
												width: "100%",
												display: "block",
												padding: 0,
												margin: 0,
												borderRadius: 0,
											}}
										>
											<Image
												src="https://media.pprmint.art/2022/Lights/N-720.png"
												alt={t("section.recent.name")}
												color="transparent"
												aspectRatio={16 / 9}
												loading={
													<Skeleton
														variant="rectangular"
														width="100%"
														height="100%"
														animation="wave"
													/>
												}
											/>
										</Button>
									</Link>
								</Card>
								<br />
								<Typography variant="h2">{t("section.recent.name")}</Typography>
								<Typography variant="body1">
									{t("section.recent.description")}
								</Typography>
							</ScrollAnimation>
						</div>
					</Grid>
					<Grid item md={12} lg={5}>
						<div className="section" id="news">
							<Typography variant="h1">{t("section.news.title")}</Typography>
							<br />
							<ScrollAnimation animateIn="fadeRight" animateOnce>
								<Box maxWidth="calc(100vw - 32px)">
									<Card variant="outlined">
										<Paper
											square
											elevation={3}
											sx={{
												display: "flex",
												alignItems: "center",
												height: 64,
												p: 3,
												zIndex: 2,
												position: "relative",
											}}
										>
											<Typography
												variant="h2"
												sx={{
													display: "flex",
													flexGrow: 1,
													fontSize: "1.5rem",
												}}
											>
												{t(
													"section.news.announcement." +
														announcements[activeStep].id +
														".headline"
												)}
											</Typography>
											<Typography>{announcements[activeStep].date}</Typography>
										</Paper>
										<SwipeableViews
											index={activeStep}
											onChangeIndex={handleStepChange}
											enableMouseEvents
										>
											{announcements.map((item, index) => (
												<div key={item.id}>
													{Math.abs(activeStep - index) <= 2 ? (
														<Box>
															<Box sx={{ zIndex: 1 }}>
																<Image
																	src={item.imageSrc}
																	alt={t(
																		"section.news.announcement." +
																			item.id +
																			".imageAlt"
																	)}
																	color="transparent"
																	aspectRatio={16 / 9}
																	loading={
																		<Skeleton
																			variant="rectangular"
																			width="100%"
																			height="100%"
																			animation="wave"
																		/>
																	}
																/>
															</Box>
															<Box pl={4} pr={4} pb={3}>
																<Typography variant="h3">
																	{t(
																		"section.news.announcement." +
																			item.id +
																			".boldText"
																	)}
																</Typography>
																<br />
																<Typography variant="body1">
																	{t(
																		"section.news.announcement." +
																			item.id +
																			".fullText"
																	)}
																</Typography>
																{item.actions}
															</Box>
														</Box>
													) : null}
												</div>
											))}
										</SwipeableViews>
										<Divider />
										<MobileStepper
											variant="text"
											steps={maxSteps}
											position="static"
											activeStep={activeStep}
											nextButton={
												<Button
													size="small"
													onClick={handleNext}
													disabled={activeStep === maxSteps - 1}
													endIcon={<FiArrowRight />}
												>
													{t("section.news.next")}
												</Button>
											}
											backButton={
												<Button
													size="small"
													onClick={handleBack}
													disabled={activeStep === 0}
													startIcon={<FiArrowLeft />}
												>
													{t("section.news.previous")}
												</Button>
											}
										/>
									</Card>
								</Box>
							</ScrollAnimation>
						</div>
					</Grid>
				</Grid>
			</Container>
		</motion.div>
	);
}
