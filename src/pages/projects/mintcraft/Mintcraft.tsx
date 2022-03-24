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
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>A Minecraft resource pack • pprmint.art</title>
				<meta
					name="description"
					content="Mintcraft (formerly 'MintCraft') is my Minecraft resource pack with some UI tweaks to my liking. Craft. It's basically dark mode Minecraft with some fancy new icons here and there."
				/>
			</Helmet>
			<div className="fullscreen">
				<img src={MintcraftBanner} />
				<Container className="title">
					<img src={MintcraftLogo} />
					<Typography variant="h2">A Minecraft resource pack.</Typography>
					<br />
					<RiArrowDownLine size={25} color="#fb2" />
				</Container>
			</div>
			<div className="content">
				<div className="section" id="changes">
					<Container>
						<Typography variant="h1">Changes in version 1.4</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<RiAddLine />
								</ListItemIcon>
								<ListItemText>Added support for Minecraft 1.18.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									Updated accent colors and those of the hunger bar.
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									Updated texture for beacon UI to have another divider line.
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									Updated textures for some icon buttons to move on hover.
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>
									Updated Mintcraft logos on loading and title screen.
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiArrowRightUpLine />
								</ListItemIcon>
								<ListItemText>Updated resouce pack icons.</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiSubtractLine />
								</ListItemIcon>
								<ListItemText>Removed music by C418.</ListItemText>
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
						<Typography variant="h1">Dos and Don'ts</Typography>
						<Grid container spacing={4}>
							<Grid item xs={12} md={6}>
								<Typography variant="h2" color="#0c6">
									Do:
								</Typography>
								<List>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											Use and modify Mintcraft and/or its add-ons to your liking
											and for personal use.
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											Use this pack, its add-ons or your modification in online
											content, like YouTube videos
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											Share this pack, or your modified version of it, with
											friends
											<i> privately</i>.
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiCheckboxCircleLine />
										</ListItemIcon>
										<ListItemText>
											<i>Optional:</i> Credit me somewhere when you use my pack
											by linking to this website.
										</ListItemText>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography variant="h2" color="#f34">
									Don't:
								</Typography>
								<List>
									<ListItem>
										<ListItemIcon>
											<RiCloseCircleLine />
										</ListItemIcon>
										<ListItemText>
											Share versions, parts and/or modifications of Mintcraft
											and/or its add-ons publicly.
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiCloseCircleLine />
										</ListItemIcon>
										<ListItemText>
											Host, mirror, sell or otherwise redistribute versions,
											parts and/or modifications of Mintcraft and/or its add-ons
											anywhere.
										</ListItemText>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="section" id="credits">
					<Container>
						<Typography variant="h1">Credits</Typography>
						<Typography variant="h2">
							<a
								className="external"
								href="https://vanillatweaks.net"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vanilla Tweaks
							</a>
						</Typography>
						<Typography variant="body1">
							JSON files to fix some text colors. Remember how I said this pack
							was only compatible with 3 languages? Yeah that was fixed with
							this.
						</Typography>
					</Container>
				</div>
				<div className="section" id="howto">
					<Container>
						<Typography variant="h1">How to install</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<RiNumber1 />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										Install{" "}
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
										Scroll down and click on a download button.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiNumber3 />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										Place my packs in your resource pack folder. You can find
										yours by going to Options, Resource Packs and clicking on
										Open Pack Folder.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiNumber4 />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">
										Move my packs to the top of the list. If you want. I dunno
										what you like to use them with.
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RiNumber5 />
								</ListItemIcon>
								<ListItemText>
									<Typography variant="body1">Dig straight down.</Typography>
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
								<Typography variant="h1">Mintcraft</Typography>
								<Typography variant="body1">
									My resource pack providing you with dark-mode containers and a
									selfish-color palette and many other tweaks. Some icons even
									move when you hover over them!
								</Typography>
								<br />
								<Stack spacing={2} direction="row">
									<Button
										variant="contained"
										href="http://download.pprmint.art/mintcraft/Mintcraft_1.4-118.zip"
										download
										color="warning"
										startIcon={<RiDownload2Line />}
									>
										Download for 1.18
									</Button>
									<Button
										variant="outlined"
										href="http://download.pprmint.art/mintcraft/Mintcraft_1.3-117.zip"
										download
										color="inherit"
									>
										1.17
									</Button>
									<Button
										variant="outlined"
										href="http://download.pprmint.art/mintcraft/Mintcraft_1.1-116.zip"
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
								<Typography variant="h1">Mintbit font add-on</Typography>
								<Typography variant="body1">
									A font that I specifically made to use with Mintcraft. Need
									more convincing? This font is used in the screenshots a bit
									above, as well as in these cards' headers.
								</Typography>
								<br />
								<Stack spacing={2} direction="row">
									<Button
										variant="contained"
										href="http://download.pprmint.art/mintcraft/Mintbit_Add-on_1.0-118.zip"
										download
										color="warning"
										startIcon={<RiDownload2Line />}
									>
										Download for 1.18
									</Button>
									<Button
										variant="outlined"
										href="http://download.pprmint.art/mintcraft/Mintbit_Add-on_1.0-117.zip"
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
								<Typography variant="h1">Sounds add-on</Typography>
								<Typography variant="body1">
									Despite this add-on being named after the plural of a word,
									this pack actually just replaces one sound, which is the
									button click sound. This one is similar, but less jarring.
								</Typography>
								<br />
								<Button
									variant="contained"
									href="http://download.pprmint.art/mintcraft/Sounds_Add-on_1.0-118.zip"
									download
									color="warning"
									startIcon={<RiDownload2Line />}
								>
									Download for 1.18
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
