import React from "react";
import { Helmet } from "react-helmet";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Typography, Grid, Container, Skeleton } from "@mui/material";
import Image from "@jy95/material-ui-image";

import { FiArrowDown, FiDownload } from "react-icons/fi";

import TilesLogo from "./assets/tiles_logo.svg";
import TilesBanner from "./assets/tiles_banner.svg";

import AfterEffects from "./assets/After_Effects.png";
import Aseprite from "./assets/Aseprite.png";
import Audition from "./assets/Audition.png";
import Blender from "./assets/Blender.png";
import Cinema4D from "./assets/Cinema_4D.png";
import Code from "./assets/Code.png";
import Designer from "./assets/Designer.png";
import Discord from "./assets/Discord.png";
import Dolphin from "./assets/Dolphin.png";
import Excel from "./assets/Excel.png";
import FlStudio from "./assets/FL_Studio.png";
import Live from "./assets/Live.png";
import MediaEncoder from "./assets/Media_Encoder.png";
import MinecraftBedrock from "./assets/Minecraft_Bedrock.png";
import MinecraftJava from "./assets/Minecraft_Java.png";
import Netflix from "./assets/Netflix.png";
import Obs from "./assets/OBS.png";
import Osu from "./assets/osu.png";
import Pcsx2 from "./assets/PCSX2.png";
import Photo from "./assets/Photo.png";
import PowerPoint from "./assets/PowerPoint.png";
import Premiere from "./assets/Premiere.png";
import PrimeVideo from "./assets/Prime_Video.png";
import ProtonMail from "./assets/ProtonMail.png";
import Publisher from "./assets/Publisher.png";
import QBittorrent from "./assets/qBittorrent.png";
import Spotify from "./assets/Spotify.png";
import Steam from "./assets/Steam.png";
import Telegram from "./assets/Telegram.png";
import Vmware from "./assets/Vmware.png";
import WhatsApp from "./assets/WhatsApp.png";
import Word from "./assets/Word.png";

const tilesCreative = [
	{ src: AfterEffects, alt: "After Effects" },
	{ src: Audition, alt: "Audition" },
	{ src: Premiere, alt: "Premiere Pro" },
	{ src: MediaEncoder, alt: "Media Encoder" },
	{ src: Designer, alt: "Affinity Designer" },
	{ src: Photo, alt: "Affinity Photo" },
	{ src: Publisher, alt: "Affinity Publisher" },
	{ src: Cinema4D, alt: "Cinema 4D" },
];
const tilesSocial = [
	{ src: Discord, alt: "Discord" },
	{ src: ProtonMail, alt: "ProtonMail" },
	{ src: Telegram, alt: "Telegram" },
	{ src: WhatsApp, alt: "WhatsApp" },
];
const tilesGames = [
	{ src: Steam, alt: "Steam" },
	{ src: MinecraftJava, alt: "Minecraft Java" },
	{ src: Osu, alt: "osu" },
	{ src: Pcsx2, alt: "PCSX2" },
];
const tilesOther1 = [
	{ src: Word, alt: "Word" },
	{ src: Excel, alt: "Excel" },
	{ src: PowerPoint, alt: "PowerPoint" },
	{ src: Code, alt: "Code" },
	{ src: Netflix, alt: "Netflix" },
	{ src: PrimeVideo, alt: "Prime Video" },
	{ src: Spotify, alt: "Spotify" },
	{ src: Vmware, alt: "Vmware Workstation Pro" },
];
const tilesOther2 = [
	{ src: MinecraftBedrock, alt: "Minecraft Bedrock" },
	{ src: Aseprite, alt: "Aseprite" },
	{ src: Blender, alt: "Blender" },
	{ src: QBittorrent, alt: "QBittorrent" },
	{ src: Obs, alt: "OBS" },
	{ src: Dolphin, alt: "Dolphin" },
	{ src: FlStudio, alt: "FL Studio" },
	{ src: Live, alt: "Live" },
];

export default function Win10TilesDL() {
	const { t } = useTranslation("translation", {
		keyPrefix: "downloads.win10tiles",
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
					content="Make your start menu pretty (maybe) by using these in yours. Best if you're running version 20H2 or later."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Make your start menu pretty (maybe) by using these in yours. Best if you're running version 20H2 or later."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/win10tiles.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Start menu tiles." />
				<meta property="og:url" content="https://pprmint.art/win10tiles" />
			</Helmet>
			<img src={TilesBanner} className="hero fullscreen" />
			<div className="fullscreen">
				<Container className="title">
					<Grid container>
						<Grid item sm={12} md={8}>
							<img src={TilesLogo} />
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
								<Button variant="outlined" size="large" color="primary">
									{t("title.skipToDownloads")}
								</Button>
							</ScrollLink>
						</Grid>
					</Grid>
					<br />
					<FiArrowDown size={25} color="#0c3" />
				</Container>
			</div>
			<div className="section" id="creative">
				<Container maxWidth="xl">
					<Grid container spacing={4}>
						<Grid item xs={12} md={5}>
							<ScrollAnimation animateIn="fadeLeft" animateOnce>
								<Grid container spacing={1}>
									{tilesCreative.map((item) => (
										<Grid item xs={3} key={item.alt}>
											<Image
												src={item.src}
												alt={item.alt}
												color="#222"
												loading={
													<Skeleton
														variant="rectangular"
														width="100%"
														height="100%"
														animation="wave"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} md={7}>
							<Typography variant="h2">
								{t("section.creative.subtitle")}
							</Typography>
							<Typography variant="h1">
								{t("section.creative.headline")}
							</Typography>
							<ScrollAnimation animateIn="fadeRight" animateOnce>
								<Typography variant="body1">
									{t("section.creative.text1")}
									<br />
									<br />
									{t("section.creative.text2")}
								</Typography>
							</ScrollAnimation>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="section" id="gaming">
				<Container maxWidth="xl">
					<Grid container spacing={4}>
						<Grid item xs={12} md={5}>
							<ScrollAnimation animateIn="fadeLeft" animateOnce>
								<Grid container spacing={1}>
									{tilesSocial.map((item) => (
										<Grid item xs={3} key={item.alt}>
											<Image
												src={item.src}
												alt={item.alt}
												color="#222"
												loading={
													<Skeleton
														variant="rectangular"
														width="100%"
														height="100%"
														animation="wave"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} md={7}>
							<Typography variant="h2">
								{t("section.social.subtitle")}
							</Typography>
							<Typography variant="h1">
								{t("section.social.headline")}
							</Typography>
							<ScrollAnimation animateIn="fadeRight" animateOnce>
								<Typography variant="body1">
									{t("section.social.text")}
								</Typography>
							</ScrollAnimation>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="section" id="gaming">
				<Container maxWidth="xl">
					<Grid container spacing={4}>
						<Grid item xs={12} md={5}>
							<ScrollAnimation animateIn="fadeLeft" animateOnce>
								<Grid container spacing={1}>
									{tilesGames.map((item) => (
										<Grid item xs={3} key={item.alt}>
											<Image
												src={item.src}
												alt={item.alt}
												color="#222"
												loading={
													<Skeleton
														variant="rectangular"
														width="100%"
														height="100%"
														animation="wave"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} md={7}>
							<Typography variant="h2">
								{t("section.gaming.subtitle")}
							</Typography>
							<Typography variant="h1">
								{t("section.gaming.headline")}
							</Typography>
							<ScrollAnimation animateIn="fadeRight" animateOnce>
								<Typography variant="body1">
									{t("section.gaming.text")}
								</Typography>
							</ScrollAnimation>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="section" id="other">
				<Container maxWidth="xl">
					<Typography variant="h1" textAlign="center">
						{t("section.more.headline")}
					</Typography>
					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<ScrollAnimation animateIn="fadeRight" animateOnce>
								<Grid container spacing={1}>
									{tilesOther1.map((item) => (
										<Grid item xs={3} key={item.alt}>
											<Image
												src={item.src}
												alt={item.alt}
												color="#222"
												loading={
													<Skeleton
														variant="rectangular"
														width="100%"
														height="100%"
														animation="wave"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</ScrollAnimation>
						</Grid>
						<Grid item xs={12} md={6}>
							<ScrollAnimation animateIn="fadeLeft" animateOnce>
								<Grid container spacing={1}>
									{tilesOther2.map((item) => (
										<Grid item xs={3} key={item.alt}>
											<Image
												src={item.src}
												alt={item.alt}
												color="#222"
												loading={
													<Skeleton
														variant="rectangular"
														width="100%"
														height="100%"
														animation="wave"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</ScrollAnimation>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="section" id="downloads">
				<Container>
					<Typography variant="h1">{t("section.download.headline")}</Typography>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="body1">
							{t("section.download.text1")}
							<a
								className="external"
								href="http://github.com/Jonno12345/TileIconifier"
								target="_blank"
								rel="noopener noreferrer"
							>
								TileIconifier
							</a>
							{t("section.download.text2")}
							<a
								className="external"
								href="https://www.stardock.com/products/start11/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Start11
							</a>{" "}
							{t("section.download.text3")}
						</Typography>
						<br />
						<Button
							variant="contained"
							href="https://download.pprmint.art/win10tiles.zip"
							download
							color="primary"
							startIcon={<FiDownload />}
						>
							{t("section.download.downloadButton")}
						</Button>
					</ScrollAnimation>
				</Container>
			</div>
		</motion.div>
	);
}
