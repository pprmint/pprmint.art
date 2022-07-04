import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Container,
	Stack,
	Card,
} from "@mui/material";
import Image from "@jy95/material-ui-image";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

import "./assets/mintbit/mintbit.css";
import "./assets/buttonStyles.scss";

import {
	FiArrowDown,
	FiArrowUpRight,
	FiPlus,
	FiMinus,
	FiDownload,
	FiThumbsUp,
	FiThumbsDown,
} from "react-icons/fi";

import Marquee from "react-fast-marquee";

import MintcraftLogo from "./assets/mintcraft_logo.svg";
import MintcraftBanner from "./assets/mintcraft_banner.svg";
import ClickSound from "./assets/click_stereo.ogg";

import SlideOne from "./assets/slide1.png";
import ScreenshotChest from "./assets/chest.png";
import ScreenshotBeacon from "./assets/beacon.png";
import ScreenshotInventory from "./assets/inventory.png";
import ScreenshotCreative from "./assets/creative.png";
import ScreenshotFurnace from "./assets/furnace.png";
import ScreenshotAnvil from "./assets/anvil.png";

import MintcraftPack from "./assets/mintcraft_pack.svg";
import SaucyPack from "./assets/mintcraft_fullsauce_pack.svg";
import MintbitPack from "./assets/mintbit_pack.svg";
import SoundsPack from "./assets/sounds_pack.svg";

const additions = [];

const changes = [
	"section.changes.update.1",
	"section.changes.update.2",
	"section.changes.update.3",
	"section.changes.update.4",
];

const removals = [];

function ContainerImage(props: { imageSrc: string; imageAlt: string }) {
	return (
		<img
			src={props.imageSrc}
			alt={props.imageAlt}
			style={{ margin: "5px", height: "50vw", maxHeight: "600px" }}
		/>
	);
}

export default function MintcraftDL() {
	const { t } = useTranslation("translation", {
		keyPrefix: "downloads.mintcraft",
	});
	let click = new Audio(ClickSound);
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Mintcraft (formerly 'MintCraft') is my Minecraft resource pack with some UI tweaks to my liking. Craft. It's basically dark mode Minecraft with some fancy new icons here and there."
				/>
				<meta name="theme-color" content="#ffbb22" />
				<meta
					property="og:description"
					content="Mintcraft (formerly 'MintCraft') is my Minecraft resource pack with some UI tweaks to my liking. Craft. It's basically dark mode Minecraft with some fancy new icons here and there."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/mintcraft.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="A Minecraft resource pack." />
				<meta property="og:url" content="https://pprmint.art/mintcraft" />
			</Helmet>
			<img src={MintcraftBanner} className="hero fullscreen" />
			<div className="fullscreen">
				<Container className="title">
					<Grid container>
						<Grid item sm={12} md={8}>
							<img src={MintcraftLogo} />
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
									color="warning"
								>
									{t("title.skipToDownloads")}
								</Button>
							</ScrollLink>
						</Grid>
					</Grid>
					<br />
					<FiArrowDown size={25} color="#fb2" />
				</Container>
			</div>
			<div className="section" id="screenshots">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<Image
						src={SlideOne}
						width="100%"
						alt="Title screen"
						aspectRatio={240 / 119}
						color="transparent"
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeRight" animateOnce>
					<Marquee gradientColor={[17, 17, 17]} gradientWidth="20%" speed={55}>
						<ContainerImage
							imageSrc={ScreenshotChest}
							imageAlt="Chest container"
						/>
						<ContainerImage
							imageSrc={ScreenshotInventory}
							imageAlt="Inventory container"
						/>
						<ContainerImage
							imageSrc={ScreenshotFurnace}
							imageAlt="Furnace container"
						/>
					</Marquee>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeLeft" animateOnce>
					<Marquee
						gradientColor={[17, 17, 17]}
						gradientWidth="20%"
						speed={55}
						direction="right"
					>
						<ContainerImage
							imageSrc={ScreenshotCreative}
							imageAlt="Creative container"
						/>
						<ContainerImage
							imageSrc={ScreenshotBeacon}
							imageAlt="Beacon container"
						/>
						<ContainerImage
							imageSrc={ScreenshotAnvil}
							imageAlt="Anvil container"
						/>
					</Marquee>
				</ScrollAnimation>
			</div>
			<div className="section" id="changes">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">
							{t("section.changes.headline")}
						</Typography>
						<List>
							{additions.map((addition, index) => (
								<ListItem key={index}>
									<ListItemIcon>
										<FiPlus />
									</ListItemIcon>
									<ListItemText>{t(addition)}</ListItemText>
								</ListItem>
							))}
						</List>
						<List>
							{changes.map((change, index) => (
								<ListItem key={index}>
									<ListItemIcon>
										<FiArrowUpRight />
									</ListItemIcon>
									<ListItemText>{t(change)}</ListItemText>
								</ListItem>
							))}
						</List>
						<List>
							{removals.map((removal, index) => (
								<ScrollAnimation animateIn="fadeBottom" animateOnce>
									<ListItem key={index}>
										<ListItemIcon>
											<FiMinus />
										</ListItemIcon>
										<ListItemText>{t(removal)}</ListItemText>
									</ListItem>
								</ScrollAnimation>
							))}
						</List>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section" id="dontdothedo">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">
							{t("section.dosAndDonts.headline")}
						</Typography>
						<Grid container spacing={4}>
							<Grid item xs={12} md={6}>
								<ScrollAnimation animateIn="fadeBottom" animateOnce>
									<Typography variant="h2" color="#0c6">
										{t("section.dosAndDonts.do.headline")}
									</Typography>
									<List>
										<ListItem>
											<ListItemIcon>
												<FiThumbsUp />
											</ListItemIcon>
											<ListItemText>
												{t("section.dosAndDonts.do.modifyPersonalUse")}
											</ListItemText>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<FiThumbsUp />
											</ListItemIcon>
											<ListItemText>
												{t("section.dosAndDonts.do.modifyOnlineContent")}
											</ListItemText>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<FiThumbsUp />
											</ListItemIcon>
											<ListItemText>
												{t("section.dosAndDonts.do.sharePrivate")}
											</ListItemText>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<FiThumbsUp />
											</ListItemIcon>
											<ListItemText>
												{t("section.dosAndDonts.do.serverPacks")}
											</ListItemText>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<FiThumbsUp />
											</ListItemIcon>
											<ListItemText>
												<i>Optional:</i>{" "}
												{t("section.dosAndDonts.do.optionalCredit")}
											</ListItemText>
										</ListItem>
									</List>
								</ScrollAnimation>
							</Grid>
							<Grid item xs={12} md={6}>
								<ScrollAnimation animateIn="fadeBottom" animateOnce>
									<Typography variant="h2" color="#f34">
										{t("section.dosAndDonts.dont.headline")}
									</Typography>
									<List>
										<ListItem>
											<ListItemIcon>
												<FiThumbsDown />
											</ListItemIcon>
											<ListItemText>
												{t("section.dosAndDonts.dont.redistribute")}
											</ListItemText>
										</ListItem>
									</List>
								</ScrollAnimation>
							</Grid>
						</Grid>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section" id="credits">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">
							{t("section.credits.headline")}
						</Typography>
						<Typography variant="h2">
							<a
								className="external"
								href="https://vanillatweaks.net"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("section.credits.vanillatweaks.name")}
							</a>
						</Typography>

						<Typography variant="body1">
							{t("section.credits.vanillatweaks.description")}
						</Typography>
						<br />
						<Typography variant="h2">
							<a
								className="external"
								href="https://twitter.com/AfkBlizzy"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("section.credits.blizzy.name")}
							</a>
						</Typography>

						<Typography variant="body1">
							{t("section.credits.blizzy.description")}
						</Typography>
						<br />
						<Typography variant="h2">
							{t("section.credits.twitterFellas.name")}
						</Typography>

						<Typography variant="body1">
							{t("section.credits.twitterFellas.description1")}
							<a
								className="external"
								href="https://twitter.com/Gamer_Kold"
								target="_blank"
								rel="noopener norefferer"
							>
								@Gamer_Kold
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/ScreamRepeat"
								target="_blank"
								rel="noopener norefferer"
							>
								@ScreamRepeat
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/notkoutsie"
								target="_blank"
								rel="noopener norefferer"
							>
								@notkoutsie
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/Voluna_Awoo"
								target="_blank"
								rel="noopener norefferer"
							>
								@Voluna_Awoo
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/TaromaruYuki"
								target="_blank"
								rel="noopener norefferer"
							>
								@TaromaruYuki
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/emplexx"
								target="_blank"
								rel="noopener norefferer"
							>
								@emplexx
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/foxylucklol"
								target="_blank"
								rel="noopener norefferer"
							>
								@foxylucklol
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/novotab51"
								target="_blank"
								rel="noopener norefferer"
							>
								@novotab51
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/fluxe__"
								target="_blank"
								rel="noopener norefferer"
							>
								@fluxe
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/IAmDraconium"
								target="_blank"
								rel="noopener norefferer"
							>
								@IAmDraconium
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/LorAndCompany"
								target="_blank"
								rel="noopener norefferer"
							>
								@LorAndCompany
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/GrabsterTV"
								target="_blank"
								rel="noopener norefferer"
							>
								@GrabsterTV
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/dlphesigns"
								target="_blank"
								rel="noopener norefferer"
							>
								@dlphesigns
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/xparacosm"
								target="_blank"
								rel="noopener norefferer"
							>
								@xparacosm
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/Febbuarie"
								target="_blank"
								rel="noopener norefferer"
							>
								@Febbuarie
							</a>{" "}
							<a
								className="external"
								href="https://twitter.com/The_Ruby872"
								target="_blank"
								rel="noopener norefferer"
							>
								@The_Ruby872
							</a>
							{t("section.credits.twitterFellas.description2")}
							<a
								className="external"
								href="https://twitter.com/Iucidcelestial"
								target="_blank"
								rel="noopener norefferer"
							>
								@Iucidcelestial
							</a>
							{t("section.credits.twitterFellas.description3")}
							<Link to="/downloads/mintcraft/splashes">
								{t("section.credits.twitterFellas.descriptionLink")}
							</Link>
							.
						</Typography>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section" id="howto">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">
							{t("section.installation.headline")}
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>1</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										{t("section.installation.steps.installOptifine")}
										<a
											className="external"
											href="https://optifine.net/downloads"
											target="_blank"
											rel="noopener noreferrer"
										>
											Optifine
										</a>
										.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>2</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										{t("section.installation.steps.downloadPacks")}
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>3</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										{t("section.installation.steps.placeInFolder")}
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>4</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										{t("section.installation.steps.moveToTop")}
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>5</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										{t("section.installation.steps.digDown")}
									</Typography>
								</ListItemText>
							</ListItem>
						</List>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section" id="downloads">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">
							{t("section.download.headline")}
						</Typography>
						<Card variant="outlined" sx={{ p: 3 }}>
							<Grid container spacing={4}>
								<Grid item xs={4} md={2.4}>
									<Image
										src={SaucyPack}
										alt="Mintcraft Full Sauce icon"
										color="transparent"
									/>
								</Grid>
								<Grid item xs={12} md={9}>
									<Typography variant="h1">
										{t("section.download.saucecraft.name")}
									</Typography>
									<Typography variant="body1">
										{t("section.download.saucecraft.description")}
									</Typography>
									<br />
									<Button
										variant="contained"
										href="https://download.pprmint.art/mintcraft/1.19/Mintcraft_1.6_(FullSauce_1.19).zip"
										download
										color="warning"
										startIcon={<FiDownload />}
									>
										{t("section.download.commonDownloadButton")}1.19
									</Button>
								</Grid>
							</Grid>
						</Card>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Grid container spacing={4}>
							<Grid item xs={4} md={2.4}>
								<Image
									src={MintcraftPack}
									alt="Mintcraft icon"
									color="transparent"
								/>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography variant="h1">
									{t("section.download.mintcraft.name")}
								</Typography>
								<Typography variant="body1">
									{t("section.download.mintcraft.description")}
								</Typography>
								<br />
								<Stack spacing={2} direction="row">
									<Button
										variant="contained"
										href="https://download.pprmint.art/mintcraft/1.19/Mintcraft_1.6_(1.19).zip"
										download
										color="warning"
										startIcon={<FiDownload />}
									>
										{t("section.download.commonDownloadButton")}1.19
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.18/Mintcraft_1.5_(1.18).zip"
										download
										color="inherit"
									>
										1.18
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.17/Mintcraft_1.3_(1.17).zip"
										download
										color="inherit"
									>
										1.17
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.16/Mintcraft_1.1_(1.16).zip"
										download
										color="inherit"
									>
										1.16
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Grid container spacing={4}>
							<Grid item xs={4} md={2.4}>
								<Image
									src={MintbitPack}
									alt="Mintbit add-on icon"
									color="transparent"
								/>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography variant="h1">
									{t("section.download.addonFont.name")}
								</Typography>
								<Typography variant="body1">
									{t("section.download.addonFont.description")}
								</Typography>
								<br />
								<Stack spacing={2} direction="row">
									<Button
										variant="contained"
										href="https://download.pprmint.art/mintcraft/1.19/MintBit_Add-on_1.0_(1.19).zip"
										download
										color="warning"
										startIcon={<FiDownload />}
									>
										{t("section.download.commonDownloadButton")}1.19
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.18/MintBit_Add-on_1.0_(1.18).zip"
										download
										color="inherit"
									>
										1.18
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.17/MintBit_Add-on_1.0_(1.17).zip"
										download
										color="inherit"
									>
										1.17
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.16/MintBit_Add-on_1.0_(1.16).zip"
										download
										color="inherit"
									>
										1.16
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section">
				<Container>
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Grid container spacing={4}>
							<Grid item xs={4} md={2.4}>
								<Image
									src={SoundsPack}
									alt="Sounds add-on icon"
									color="transparent"
								/>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography variant="h1">
									{t("section.download.addonSounds.name")}
								</Typography>
								<button className="Mintcraft" onClick={() => click.play()}>
									{t("section.download.addonSounds.clickMe")}
								</button>
								<br />
								<br />
								<Stack spacing={2} direction="row">
									<Button
										variant="contained"
										href="https://download.pprmint.art/mintcraft/1.19/Sounds_Add-on_1.1_(1.19).zip"
										download
										color="warning"
										startIcon={<FiDownload />}
									>
										{t("section.download.commonDownloadButton")}1.19
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.18/Sounds_Add-on_1.1_(1.18).zip"
										download
										color="inherit"
									>
										1.18
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.17/Sounds_Add-on_1.0_(1.17).zip"
										download
										color="inherit"
									>
										1.17
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/1.16/Sounds_Add-on_1.0_(1.16).zip"
										download
										color="inherit"
									>
										1.16
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</ScrollAnimation>
				</Container>
			</div>
		</React.Fragment>
	);
}
