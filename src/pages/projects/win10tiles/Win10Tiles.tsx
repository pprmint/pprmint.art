import React from "react";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Grid,
	Container,
	Card,
	CardContent,
	CardActions,
	Skeleton,
	Tooltip,
} from "@mui/material";
import Image from "material-ui-image";

import { RiArrowDownLine, RiDownload2Line } from "react-icons/ri";

import TilesLogo from "./assets/tiles_logo.svg";
import TilesBanner from "./assets/tiles_banner.svg";

import AfterEffects from "./assets/After_Effects.png";
import Aseprite from "./assets/Aseprite.png";
import Audition from "./assets/Audition.png";
import Blender from "./assets/Blender.png";
import Bundled from "./assets/Bundled.png";
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
	{ src: AfterEffects },
	{ src: Audition },
	{ src: Premiere },
	{ src: MediaEncoder },
	{ src: Designer },
	{ src: Photo },
	{ src: Publisher },
	{ src: Cinema4D },
];
const tilesSocial = [
	{ src: Discord },
	{ src: ProtonMail },
	{ src: Telegram },
	{ src: WhatsApp },
];
const tilesGames = [
	{ src: Steam },
	{ src: MinecraftJava },
	{ src: Osu },
	{ src: Pcsx2 },
];
const tilesOther1 = [
	{ src: Word },
	{ src: Excel },
	{ src: PowerPoint },
	{ src: Code },
	{ src: Netflix },
	{ src: PrimeVideo },
	{ src: Spotify },
	{ src: Vmware },
];
const tilesOther2 = [
	{ src: MinecraftBedrock },
	{ src: Aseprite },
	{ src: Blender },
	{ src: QBittorrent },
	{ src: Obs },
	{ src: Dolphin },
	{ src: FlStudio },
	{ src: Live },
];

function Win10TilesDL() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Start menu tiles • pprmint.art</title>
				<meta
					name="description"
					content="Make your start menu pretty (maybe) by using these in yours. Best if you're running version 20H2 or later."
				/>
			</Helmet>
			<div className="fullscreen">
				<img src={TilesBanner} />
				<Container className="title">
					<img src={TilesLogo} />
					<Typography variant="h2">Provided you still have them.</Typography>
					<br />
					<RiArrowDownLine size={25} color="#0c3" />
				</Container>
			</div>
			<div className="content">
				<div className="section" id="creative">
					<Container maxWidth="xl">
						<Grid container spacing={4}>
							<Grid item xs={12} md={5}>
								<Grid container spacing={1}>
									{tilesCreative.map((item) => (
										<Grid item xs={3}>
											<Image
												src={item.src}
												width="100%"
												color="#222222"
												alt=""
												loading={
													<Skeleton
														variant="rectangular"
														animation="wave"
														width="100%"
														height="100%"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</Grid>
							<Grid item xs={12} md={7}>
								<Typography variant="h2">You enjoy pain? Great!</Typography>
								<Typography variant="h1">Creative apps.</Typography>
								<Typography variant="body1">
									The Creative Cloud is a thing that... exists. For better or
									worse. It's still beyond me how a company that develops
									programs for designing stuff decided they should make all
									their apps' logos look like Media Encoder of all things.
									<br />
									<br />
									Anyway, you won't find <i>that</i> many icons in this pack,
									since I only made tiles for programs I actually use myself. Or
									have used, in some instances.
									<br />
									Unfortunately, the Creative Cloud is not one such instance.
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="section" id="social">
					<Container maxWidth="xl">
						<Grid container spacing={4}>
							<Grid item xs={12} md={7}>
								<Typography variant="h2">
									Not everyone's strong suit.
								</Typography>
								<Typography variant="h1">Socializing.</Typography>
								<Typography variant="body1">
									This Discord tile is a perfect example for miscommunication
									between parts of my brain. That's at least the only logical
									explanation I can think of as to how this abomination came to
									be.
								</Typography>
							</Grid>
							<Grid item xs={12} md={5}>
								<Grid container spacing={1}>
									{tilesSocial.map((item) => (
										<Grid item xs={3}>
											<Image
												src={item.src}
												width="100%"
												color="#222222"
												alt=""
												loading={
													<Skeleton
														variant="rectangular"
														animation="wave"
														width="100%"
														height="100%"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="section" id="gaming">
					<Container maxWidth="xl">
						<Grid container spacing={4}>
							<Grid item xs={12} md={5}>
								<Grid container spacing={1}>
									{tilesGames.map((item) => (
										<Grid item xs={3}>
											<Image
												src={item.src}
												width="100%"
												color="#222222"
												alt=""
												loading={
													<Skeleton
														variant="rectangular"
														animation="wave"
														width="100%"
														height="100%"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</Grid>
							<Grid item xs={12} md={7}>
								<Typography variant="h2">Waste your time.</Typography>
								<Typography variant="h1">Gaming.</Typography>
								<Typography variant="body1">
									I'm not asking where you got these ROMs from. I'm sure you
									acquired them totally legally and ripped yourself straight
									from the disc or cartridge.
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="section" id="other">
					<Container maxWidth="xl">
						<Typography variant="h1" textAlign="center">
							And a bunch more.
						</Typography>
						<Grid container spacing={4}>
							<Grid item xs={12} md={6}>
								<Grid container spacing={1}>
									{tilesOther1.map((item) => (
										<Grid item xs={3}>
											<Image
												src={item.src}
												width="500px"
												color="#222222"
												alt=""
												loading={
													<Skeleton
														variant="rectangular"
														animation="wave"
														width="100%"
														height="100%"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</Grid>
							<Grid item xs={12} md={6}>
								<Grid container spacing={1}>
									{tilesOther2.map((item) => (
										<Grid item xs={3}>
											<Image
												src={item.src}
												width="500px"
												color="#222222"
												alt=""
												loading={
													<Skeleton
														variant="rectangular"
														animation="wave"
														width="100%"
														height="100%"
													/>
												}
											/>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="section" id="download">
					<Container>
						<Typography variant="h1">Start menu tiles</Typography>
						<Typography variant="body1">
							For easily changing the tile image for any link in your start
							menu, I recommend{" "}
							<a
								className="external"
								href="http://github.com/Jonno12345/TileIconifier"
								target="_blank"
								rel="noopener noreferrer"
							>
								TileIconifier
							</a>
							. If you're on Windows 11, I'm sorry. You can grab something like{" "}
							<a
								className="external"
								href="https://www.stardock.com/products/start11/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Start11
							</a>{" "}
							to get the previous start menu back.
						</Typography>
						<br />
						<Button
							variant="contained"
							href="https://download.pprmint.art/win10tiles.zip"
							download
							color="primary"
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

export default Win10TilesDL;
