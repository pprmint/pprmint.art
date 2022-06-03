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
	CircularProgress,
} from "@mui/material";
import Image from "mui-image";
import { useTranslation } from "react-i18next";

import MintBanner from "./assets/mintBanner";

import NewsGerman from "./assets/german.svg";
import NewsDomain from "./assets/newdomain.svg";
import NewsMintcraft from "./assets/mintcraft.svg";
import NewsTwitterDelete from "./assets/twitterDelete.svg";
import {
	RiArrowDownLine,
	RiArrowLeftSLine,
	RiArrowRightSLine,
	RiArrowRightUpLine,
	RiDiscordLine,
	RiGithubLine,
	RiYoutubeLine,
} from "react-icons/ri";

function ReadMore(
	props: React.PropsWithChildren<{
		link: string;
	}>
) {
	const { t } = useTranslation("translation", {
		keyPrefix: "home.section.news.announcement.common",
	});
	return (
		<>
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
		</>
	);
}

const announcements = [
    {
        id: "twitterDelete",
        date: "04.06.2022",
        imageSrc: NewsTwitterDelete,
    },
	{
		id: "mintcraft15",
		date: "20.04.2022",
		imageSrc: NewsMintcraft,
		actions: <ReadMore link="/projects/mintcraft" />,
	},
	{
		id: "german",
		date: "18.04.2022",
		imageSrc: NewsGerman,
	},
	{
		id: "newDomain",
		date: "01.02.2022",
		imageSrc: NewsDomain,
	},
];

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
		<>
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
			<MintBanner />
			<div className="fullscreen">
				<Container className="title">
					<Typography variant="h1">{t("title.main")}</Typography>
					<Typography variant="h2">{t("title.sub")}</Typography>
					<br />
					<RiArrowDownLine size={25} color="#0c6" />
				</Container>
			</div>
			<div className="section" id="about">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">{t("section.about.title")}</Typography>
						<Typography variant="body1">
							{t("section.about.intro1")}
							<Link to="/about">{t("section.about.aboutMePage")}</Link>
							{t("section.about.intro2")}
						</Typography>
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
											<RiYoutubeLine
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#ff0000",
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
												<Button
													color="inherit"
													endIcon={<RiArrowRightUpLine />}
												>
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
											<RiGithubLine
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#1f6feb",
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
												<Button
													color="inherit"
													endIcon={<RiArrowRightUpLine />}
												>
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
											<RiDiscordLine
												style={{
													position: "relative",
													top: "4px",
													marginRight: "12px",
													color: "#5865F2",
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
												<Button
													color="inherit"
													endIcon={<RiArrowRightUpLine />}
												>
													{t("section.about.discord.join")}
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
							<ScrollAnimation animateIn="fadeLeft" animateOnce>
								<Typography variant="h1">
									{t("section.recent.title")}
								</Typography>
								<br />
								<Card variant="outlined">
									<Link to="/projects/2022/book">
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
												src="https://media.pprmint.art/2022/Book/Book.jpg"
												alt={t("section.recent.name")}
												duration={1000}
												easing="ease-out"
												showLoading={<CircularProgress />}
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
							<ScrollAnimation animateIn="fadeRight" animateOnce>
								<Typography variant="h1">{t("section.news.title")}</Typography>
								<br />
								<Box maxWidth="calc(100vw - 32px)">
									<Card variant="outlined">
										<Paper
											square
											elevation={2}
											sx={{
												display: "flex",
												alignItems: "center",
												height: 64,
												p: 3,
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
														<Container>
															<Box p={3}>
																<Image
																	src={item.imageSrc}
																	alt={t(
																		"section.news.announcement." +
																			item.id +
																			".imageAlt"
																	)}
																	duration={1000}
																	easing="ease-out"
																	showLoading={<CircularProgress />}
																/>
															</Box>
															<Box p={1}>
																<Typography variant="h3">
																	{t(
																		"section.news.announcement." +
																			item.id +
																			".boldText"
																	)}
																</Typography>
																<Typography variant="body1">
																	{t(
																		"section.news.announcement." +
																			item.id +
																			".fullText"
																	)}
																</Typography>
																{item.actions}
															</Box>
														</Container>
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
													endIcon={<RiArrowRightSLine />}
												>
													{t("section.news.next")}
												</Button>
											}
											backButton={
												<Button
													size="small"
													onClick={handleBack}
													disabled={activeStep === 0}
													startIcon={<RiArrowLeftSLine />}
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
		</>
	);
}
