import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Container,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";

import MintcraftCardLogo from "./mintcraft/assets/mintcraft_card_logo.svg";
import MintcraftCardBG from "./mintcraft/assets/mintcraft_card_bg.svg";

import MintsansCardLogo from "./mintsans/assets/mintsans_card_logo.svg";
import MintsansCardBG from "./mintsans/assets/mintsans_card_bg.svg";

import MintAltCardLogo from "./mintalternative/assets/mintalt_card_logo.svg";
import MintAltCardBG from "./mintalternative/assets/mintalt_card_bg.svg";

import Win10TilesCardLogo from "./win10tiles/assets/tiles_card_logo.svg";
import Win10TilesCardBG from "./win10tiles/assets/tiles_card_bg.svg";

export default function Downloads() {
	const { t } = useTranslation("translation", {
		keyPrefix: "downloads",
	});
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Download things I made and use them for yourself."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Download things I made and use them for yourself."
				/>
				<meta property="og:image" content="https://pprmint.art/og/index.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Downloads." />
				<meta property="og:url" content="https://pprmint.art/downloads" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>

			<div className="section" id="downloads">
				<Container maxWidth="xl">
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Grid container spacing={3}>
							<Grid item xs={12} md={6}>
								<Card variant="outlined">
									<Link to="/downloads/mintcraft">
										<div className="cardHeader">
											<div className="splash">
												{t("section.project.mintcraft.splash")}
											</div>
											<img className="logo" src={MintcraftCardLogo} />
											<img className="bg" src={MintcraftCardBG} />
										</div>
									</Link>
									<CardContent>
										<Typography variant="body1">
											{t("section.project.mintcraft.cardText")}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											href="https://download.pprmint.art/mintcraft/1.19/Mintcraft_1.6_(FullSauce_1.19).zip"
											download
											color="warning"
										>
											{t("downloadLatest")}
										</Button>
										<Link to="/downloads/mintcraft">
											<Button color="inherit">{t("learnMore")}</Button>
										</Link>
									</CardActions>
								</Card>
							</Grid>
							<Grid item xs={12} md={6}>
								<Card variant="outlined">
									<Link to="/downloads/mintsans">
										<div className="cardHeader">
											<img className="logo" src={MintsansCardLogo} />
											<img className="bg" src={MintsansCardBG} />
										</div>
									</Link>
									<CardContent>
										<Typography variant="body1">
											{t("section.project.mintsans.cardText")}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											href="https://download.pprmint.art/mintsans_2.0.zip"
											download
											color="secondary"
										>
											{t("downloadLatest")}
										</Button>
										<Link to="/downloads/mintsans">
											<Button color="inherit">{t("learnMore")}</Button>
										</Link>
									</CardActions>
								</Card>
							</Grid>
							<Grid item xs={12} md={6}>
								<Card variant="outlined">
									<div className="cardHeader">
										<img className="logo" src={MintAltCardLogo} />
										<img className="bg" src={MintAltCardBG} />
									</div>
									<CardContent>
										<Typography variant="body1">
											{t("section.project.mintalt.cardText")}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											href="https://download.pprmint.art/mintalternative_1.1.zip"
											download
											color="error"
										>
											{t("downloadLatest")}
										</Button>
										{/* <Link to="/downloads/mintsans"> */}
										<Button color="inherit" disabled>
											{t("learnMore")}
										</Button>
										{/* </Link> */}
									</CardActions>
								</Card>
							</Grid>
							<Grid item xs={12} md={6}>
								<Card variant="outlined">
									<Link to="/downloads/win10tiles">
										<div className="cardHeader">
											<img className="logo" src={Win10TilesCardLogo} />
											<img className="bg" src={Win10TilesCardBG} />
										</div>
									</Link>
									<CardContent>
										<Typography variant="body1">
											{t("section.project.startmenutiles.cardText")}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											href="https://download.pprmint.art/win10tiles.zip"
											download
											color="primary"
										>
											{t("downloadLatest")}
										</Button>
										<Link to="/downloads/win10tiles">
											<Button color="inherit">{t("learnMore")}</Button>
										</Link>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</ScrollAnimation>
				</Container>
			</div>
		</motion.div>
	);
}
