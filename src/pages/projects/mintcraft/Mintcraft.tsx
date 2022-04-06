import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Container,
	Stack,
} from "@mui/material";
import Image from "material-ui-image";
import { useTranslation } from "react-i18next";

import {
	RiDownload2Line,
	RiArrowRightUpLine,
	RiAddLine,
	RiSubtractLine,
	RiCheckboxCircleLine,
	RiCloseCircleLine,
	RiArrowDownLine,
	RiNumber1,
	RiNumber2,
	RiNumber3,
	RiNumber4,
	RiNumber5,
} from "react-icons/ri";

import Marquee from "react-fast-marquee";

import MintcraftLogo from "./assets/mintcraft_logo.svg";
import MintcraftBanner from "./assets/mintcraft_banner.svg";

import SlideOne from "./assets/slide1.png";
import SlideTwo from "./assets/slide2.png";
import SlideThree from "./assets/slide3.png";

import ScreenshotChest from "./assets/chest.png";
import ScreenshotBeacon from "./assets/beacon.png";
import ScreenshotInventory from "./assets/inventory.png";
import ScreenshotCreative from "./assets/creative.png";
import ScreenshotFurnace from "./assets/furnace.png";
import ScreenshotAnvil from "./assets/anvil.png";

import MintcraftPack from "./assets/mintcraft_pack.svg";
import MintbitPack from "./assets/mintbit_pack.svg";
import SoundsPack from "./assets/sounds_pack.svg";

function ContainerImage(props: { imageSrc: string; imageAlt: string }) {
	return (
		<img
			src={props.imageSrc}
			alt={props.imageAlt}
			style={{ margin: "5px", height: "50vw", maxHeight: "600px" }}
		/>
	);
}

function MintcraftDL() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.mintcraft",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Mintcraft (formerly 'MintCraft') is my Minecraft resource pack with some UI tweaks to my liking. Craft. It's basically dark mode Minecraft with some fancy new icons here and there."
				/>
			</Helmet>
			<div className="fullscreen">
				<img src={MintcraftBanner} />
				<Container className="title">
					<img src={MintcraftLogo} />
					<Typography variant="h2">{t("title.sub")}</Typography>
					<br />
					<RiArrowDownLine size={25} color="#fb2" />
				</Container>
			</div>
			<div className="content">
				<div className="section" id="changes">
					<Container>
						<Typography variant="h1">
							{t("section.changes.headline")}
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<RiAddLine />
								</ListItemIcon>
								<ListItemText>
									{t("section.changes.addition.supportNewVersion")}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									{t("section.changes.update.accentColors")}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									{t("section.changes.update.textureBeacon")}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									{t("section.changes.update.textureButtonIcons")}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									{t("section.changes.update.textureLogos")}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									{t("section.changes.update.texturePackIcons")}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiSubtractLine />
								</ListItemIcon>
								<ListItemText>
									{t("section.changes.removal.music")}
								</ListItemText>
							</ListItem>
						</List>
						<br />
					</Container>
				</div>
				<div className="section" id="screenshots">
					<Image
						src={SlideOne}
						width="100%"
						alt="Title screen"
						aspectRatio={240 / 119}
						color="transparent"
					/>
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
				</div>
				<div className="section" id="dontdothedo">
					<Container>
						<Typography variant="h1">
							{t("section.dosAndDonts.headline")}
						</Typography>
						<Grid container spacing={4}>
							<Grid item xs={12} md={6}>
								<Typography variant="h2" color="#0c6">
									{t("section.dosAndDonts.do.headline")}
								</Typography>
								<List>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											{t("section.dosAndDonts.do.modifyPersonalUse")}
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											{t("section.dosAndDonts.do.modifyOnlineContent")}
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											{t("section.dosAndDonts.do.sharePrivate")}
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											{t("section.dosAndDonts.do.serverPacks")}
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											<i>Optional:</i> {t("section.dosAndDonts.do.optionalCredit")}
										</ListItemText>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography variant="h2" color="#f34">
									{t("section.dosAndDonts.dont.headline")}
								</Typography>
								<List>
									<ListItem>
										<ListItemIcon>
											<RiCloseCircleLine />
										</ListItemIcon>
										<ListItemText>
											{t("section.dosAndDonts.dont.redistribute")}
										</ListItemText>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="section" id="credits">
					<Container>
						<Typography variant="h1">{t("section.credits.headline")}</Typography>
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
					</Container>
				</div>
				<div className="section" id="howto">
					<Container>
						<Typography variant="h1">{t("section.installation.headline")}</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<RiNumber1 />
								</ListItemIcon>
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
								<ListItemIcon>
									<RiNumber2 />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										{t("section.installation.steps.downloadPacks")}
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiNumber3 />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										{t("section.installation.steps.placeInFolder")}
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiNumber4 />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										{t("section.installation.steps.moveToTop")}
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiNumber5 />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">{t("section.installation.steps.digDown")}</Typography>
								</ListItemText>
							</ListItem>
						</List>
					</Container>
				</div>
				<div className="section" id="download">
					<Container>
						<Grid container spacing={4}>
							<Grid item xs={4} md={2.4}>
								<Image
									src={MintcraftPack}
									alt="Mintcraft icon"
									color="transparent"
								/>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography variant="h1">{t("section.downloads.mintcraft.name")}</Typography>
								<Typography variant="body1">
									{t("section.downloads.mintcraft.description")}
								</Typography>
								<br />
								<Stack spacing={2} direction="row">
									<Button
										variant="contained"
										href="https://download.pprmint.art/mintcraft/Mintcraft_1.4-118.zip"
										download
										color="warning"
										startIcon={<RiDownload2Line />}
									>
										{t("section.downloads.commonDownloadButton")}1.18
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/Mintcraft_1.3-117.zip"
										download
										color="inherit"
									>
										1.17
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/Mintcraft_1.1-116.zip"
										download
										color="inherit"
									>
										1.16
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="section">
					<Container>
						<Grid container spacing={4}>
							<Grid item xs={4} md={2.4}>
								<Image
									src={MintbitPack}
									alt="Mintbit add-on icon"
									color="transparent"
								/>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography variant="h1">{t("section.downloads.addonFont.name")}</Typography>
								<Typography variant="body1">
									{t("section.downloads.addonFont.description")}
								</Typography>
								<br />
								<Stack spacing={2} direction="row">
									<Button
										variant="contained"
										href="https://download.pprmint.art/mintcraft/Mintbit_Add-on_1.0-118.zip"
										download
										color="warning"
										startIcon={<RiDownload2Line />}
									>
										{t("section.downloads.commonDownloadButton")}1.18
									</Button>
									<Button
										variant="outlined"
										href="https://download.pprmint.art/mintcraft/Mintbit_Add-on_1.0-117.zip"
										download
										color="inherit"
									>
										1.17
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="section">
					<Container>
						<Grid container spacing={4}>
							<Grid item xs={4} md={2.4}>
								<Image
									src={SoundsPack}
									alt="Sounds add-on icon"
									color="transparent"
								/>
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography variant="h1">{t("section.downloads.addonSounds.name")}</Typography>
								<Typography variant="body1">
									{t("section.downloads.addonSounds.description")}
								</Typography>
								<br />
								<Button
									variant="contained"
									href="https://download.pprmint.art/mintcraft/Sounds_Add-on_1.0-118.zip"
									download
									color="warning"
									startIcon={<RiDownload2Line />}
								>
									{t("section.downloads.commonDownloadButton")}1.18
								</Button>
							</Grid>
						</Grid>
					</Container>
				</div>
			</div>
		</>
	);
}

export default MintcraftDL;
