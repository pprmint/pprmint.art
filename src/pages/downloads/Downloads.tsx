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
import ScrollAnimation from "react-animate-on-scroll";

import MintcraftCardHeader from "./mintcraft/assets/mintcraft.svg";
import MintSansCardHeader from "./mintsans/assets/mintsans.svg";
import MintAltCardHeader from "./mintalternative/assets/mintalt.svg";
import Win10TilesCardHeader from "./win10tiles/assets/win10tiles.svg";

export default function Downloads() {
	const { t } = useTranslation("translation", {
		keyPrefix: "downloads",
	});
	return (
		<React.Fragment>
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
									<CardMedia
										component="img"
										image={MintcraftCardHeader}
										alt="Mintcraft logo"
									/>
									<CardContent>
										<Typography variant="body1">
											{t("section.project.mintcraft.cardText")}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											href="https://download.pprmint.art/mintcraft/1.18/Mintcraft_1.5.1_(FullSauce).zip"
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
									<CardMedia
										component="img"
										image={MintSansCardHeader}
										alt="MintSans- well, it's hardly a logo, more like just the name of the font set in MintSans itself."
									/>
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
									<CardMedia
										component="img"
										image={MintAltCardHeader}
										alt="The MintAlternative 'logo' with a 2K Material icon behind it. Get it? It's funny because the want was inspired by Material icons."
									/>
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
									<CardMedia
										component="img"
										image={Win10TilesCardHeader}
										alt="Some Windows 10 tiles. With 'Windows 10 tiles' being written above them."
									/>
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
		</React.Fragment>
	);
}
