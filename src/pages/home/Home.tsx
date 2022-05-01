import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Helmet } from "react-helmet-async";
import {
	Container,
	Typography,
	Card,
	CardContent,
	Grid,
	Button,
} from "@mui/material";
import Image from "material-ui-image";
import { useTranslation } from "react-i18next";

import MintBanner from "./assets/mint_banner.svg";

import NewsGerman from "./assets/german.svg";
import NewsDomain from "./assets/newdomain.svg";
import NewsMintcraft from "./assets/mintcraft.svg";
import NewsMuiFive from "./assets/mui5.svg";
import { RiArrowDownLine } from "react-icons/ri";

function AnnouncementCard(
	props: React.PropsWithChildren<{
		imageSrc: string;
		imageAlt: string;
		date: string;
		headline: string;
		strongText: string;
		text: string;
	}>
) {
	return (
		<Card variant="outlined">
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={8}>
						<Typography variant="caption">{props.date}</Typography>
						<Typography variant="h2">{props.headline}</Typography>
						<Typography variant="body1">
							<strong>{props.strongText}</strong>
							<br />
							{props.text}
						</Typography>
						<br />
						{props.children}
					</Grid>
					<Grid item xs={12} sm={4}>
						<Image
							src={props.imageSrc}
							width="100%"
							alt={props.imageAlt}
							aspectRatio={16 / 9}
							color="transparent"
						/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default function Home() {
	const { t } = useTranslation("translation", {
		keyPrefix: "home",
	});
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
			<img src={MintBanner} className="hero fullscreen" />
			<div className="fullscreen">
				<Container className="title">
					<Typography variant="h1">{t("title.main")}</Typography>
					<Typography variant="h2">{t("title.sub")}</Typography>
					<br />
					<RiArrowDownLine size={25} color="#0c6" />
				</Container>
			</div>
			<div className="section" id="news">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">{t("section.news.title")}</Typography>
						<br />
						<ScrollAnimation animateIn="fadeBottom" animateOnce>
							<AnnouncementCard
								imageSrc={NewsMintcraft}
								imageAlt={t("section.news.announcement.mintcraft15.imageAlt")}
								date="20.04.2022"
								headline={t("section.news.announcement.mintcraft15.title")}
								strongText={t("section.news.announcement.mintcraft15.boldText")}
								text={t("section.news.announcement.mintcraft15.text")}
							>
								<Link to="/projects/mintcraft">
									<Button variant="contained" color="warning">
										{t("section.news.announcement.common.tellMore")}
									</Button>
								</Link>
							</AnnouncementCard>
						</ScrollAnimation>
						<br />
						<ScrollAnimation animateIn="fadeBottom" animateOnce>
							<AnnouncementCard
								imageSrc={NewsGerman}
								imageAlt={t("section.news.announcement.german.imageAlt")}
								date="18.04.2022"
								headline={t("section.news.announcement.german.title")}
								strongText={t("section.news.announcement.german.boldText")}
								text={t("section.news.announcement.german.text")}
							/>
						</ScrollAnimation>
						<br />
						<ScrollAnimation animateIn="fadeBottom" animateOnce>
							<AnnouncementCard
								imageSrc={NewsDomain}
								imageAlt={t("section.news.announcement.newDomain.imageAlt")}
								date="01.02.2022"
								headline={t("section.news.announcement.newDomain.title")}
								strongText={t("section.news.announcement.newDomain.boldText")}
								text={t("section.news.announcement.newDomain.text")}
							/>
						</ScrollAnimation>
					</ScrollAnimation>
				</Container>
			</div>
		</>
	);
}
