import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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

import NewsDomain from "./assets/newdomain.svg";
import NewsMintcraft from "./assets/mintcraft.svg";
import NewsMuiFive from "./assets/mui5.svg";
import NewsLayout from "./assets/layout.svg";
import { RiArrowDownLine } from "react-icons/ri";

function AnnouncementCard(props: {
	imageSrc: string;
	imageAlt: string;
	date: string;
	headline: string;
	strongText: string;
	text: string;
}) {
	return (
		<Card variant="outlined">
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={8}>
						<Typography variant="subtitle1">{props.date}</Typography>
						<Typography variant="h2">{props.headline}</Typography>
						<Typography variant="body1">
							<strong>{props.strongText}</strong>
							<br />
							{props.text}
						</Typography>
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

function ActionsAnnouncementCard(
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
						<Typography variant="subtitle1">{props.date}</Typography>
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
	const { t } = useTranslation();
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("home.meta.title")}</title>
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
				<img src={MintBanner} />
				<Container className="title">
					<Typography variant="h1">{t("home.title.main")}</Typography>
					<Typography variant="h2">{t("home.title.sub")}</Typography>
					<br />
					<RiArrowDownLine size={25} color="#0c6" />
				</Container>
			</div>
			<div className="content">
				<div className="section" id="news">
					<Container>
						<Typography variant="h1">{t("home.section.news.title")}</Typography>
						<br />
						<AnnouncementCard
							imageSrc={NewsDomain}
							imageAlt="My shiny new domain, pprmint.art."
							date="01. Feb. 2022"
							headline={t("home.section.news.announcement.newDomain.title")}
							strongText={t(
								"home.section.news.announcement.newDomain.boldDescription"
							)}
							text={t("home.section.news.announcement.newDomain.description")}
						/>
						<br />
						<AnnouncementCard
							imageSrc={NewsLayout}
							imageAlt="Outlines of desktop and mobile website"
							date="14. Jan. 2022"
							headline="Layout changes and fancier code."
							strongText="If you only believe what you see with your own eyes, this update is for you."
							text="Content on desktop is now properly centered, left and right margins
                            on mobile have been decreased and hovering over text links makes you want
                            to do so for the rest of your life. I also rewrote some parts of the
                            website and implemented components."
						/>
						<br />
						<ActionsAnnouncementCard
							imageSrc={NewsMintcraft}
							imageAlt="Outlines of desktop and mobile website"
							date="19. Dec. 2021"
							headline="Mintcraft version 1.4 released."
							strongText="The new version of my resource pack now supports the 1.18
                            Caves & Cliffs update."
							text="It features new icons, a slightly updated color scheme, some
                            tweaked icons (they move now), and a new add-on that changes
                            the button click sound."
							children={
								<Link to="/projects/mintcraft">
									<Button variant="contained" color="warning">
										Tell me more
									</Button>
								</Link>
							}
						/>
						<br />
						<AnnouncementCard
							imageSrc={NewsMuiFive}
							imageAlt="Outlines of desktop and mobile website"
							date="19. Dec. 2021"
							headline="This website got quite the upgrade."
							strongText="If you have eyes, chances are you've already noticed that something was off."
							text="I migrated to version 5 of MUI
                            (fka. Material-UI), which brought a variety of new features.
                            While I was at it, I also took the time to further explore the
                            capabilities of MUI, as well as restructuring this site.
                            Because of the quite substantial changes, there might still be
                            some rough edges here and there. If you notice any, please get
                            in touch with me."
						/>
					</Container>
				</div>
			</div>
		</>
	);
}
