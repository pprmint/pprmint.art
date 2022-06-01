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
	Skeleton,
	Container,
	Box,
	Badge,
	Stack,
	CircularProgress,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

import Image from "mui-image";

/* Projects */
import MintcraftCardHeader from "./mintcraft/assets/mintcraft.svg";
import MintSansCardHeader from "./mintsans/assets/mintsans.svg";
import MintAltCardHeader from "./mintalternative/assets/mintalt.svg";
import Win10TilesCardHeader from "./win10tiles/assets/win10tiles.svg";

/* 2021 */
import ManjaroWall from "./gallery/2021/manjarowall/assets/nyanjaro-cat-720.png";

const works2022 = [
	{
		src: "https://media.pprmint.art/2022/Book/Cover-720.png",
		link: "/projects/2022/Book",
		alt: "Book cover I made as a joke.",
	},
	{
		src: "https://media.pprmint.art/2022/MintBanners/MINT_Night-720.png",
		link: "/projects/2022/MintBanners",
		alt: "3D renders that have to do with MINT.",
	},
	{
		src: "https://media.pprmint.art/2022/WiiRemake/WiiRemake-720.png",
		link: "/projects/2022/wiimenu",
		alt: "Modern remake of the Wii Menu.",
	},
	{
		src: "https://media.pprmint.art/2022/Geoices/geoballs-720.png",
		link: "/projects/2022/geoices",
		alt: "3D remake of Geoices' logo.",
	},
	{
		src: "https://media.pprmint.art/2022/SUSE/suse-720.png",
		link: "/projects/2022/suserebrand",
		alt: "Oversimplified/redesigned logo for SUSE.",
	},
	{
		src: "https://media.pprmint.art/2022/Statistics/statistics-720.png",
		link: "/projects/2022/statistics",
		alt: "Like statistics for the @ProgressBar202_ Twitter account.",
	},
	{
		src: "https://media.pprmint.art/2022/iPad/iPad-720.png",
		link: "/projects/2022/ipad",
		alt: "An iPad as part of another project.",
	},
	{
		src: "https://media.pprmint.art/2022/ArchWall/Arch_Qogir-720.png",
		link: "/projects/2022/archwall",
		alt: "Arch Linux desktop background with mountains",
	},
	{
		src: "https://media.pprmint.art/2022/Ford/Ford-720.png",
		link: "/projects/2022/ford",
		alt: "Ford logo redesign, inspired by Raul Rand.",
	},
];

export default function Projects() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Have a look at some of my works, or download some other things I made, like my Minecraft resource pack, fonts or a few wallpapers for your phone and desktop."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Have a look at some of my works, or download some other things I made, like my Minecraft resource pack, fonts or a few wallpapers for your phone and desktop."
				/>
				<meta property="og:image" content="https://pprmint.art/og/index.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="My projects." />
				<meta property="og:url" content="https://pprmint.art/projects" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>

			<div className="section" id="projects">
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
										<Link to="/projects/mintcraft">
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
										<Link to="/projects/mintsans">
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
										{/* <Link to="/projects/mintsans"> */}
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
										<Link to="/projects/win10tiles">
											<Button color="inherit">{t("learnMore")}</Button>
										</Link>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</ScrollAnimation>
				</Container>
			</div>
			<div className="section" id="works2022">
				<Container maxWidth="xl">
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">2022</Typography>
					</ScrollAnimation>
				</Container>
				<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={0}>
					{works2022.map((item, index) => (
						<ScrollAnimation key={index} animateIn="fadeBottom" animateOnce>
							<Link to={item.link}>
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
										src={item.src}
										alt={item.alt}
										duration={0}
										easing="ease-out"
										showLoading={<CircularProgress />}
									/>
								</Button>
							</Link>
						</ScrollAnimation>
					))}
				</Masonry>
			</div>
		</>
	);
}
