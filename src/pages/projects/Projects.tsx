import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
} from "@mui/material";
import { Masonry } from "@mui/lab";
import { useTranslation } from "react-i18next";

import Image from "material-ui-image";

/* Projects */
import MintcraftCardHeader from "./mintcraft/assets/mintcraft.svg";
import MintSansCardHeader from "./mintsans/assets/mintsans.svg";
import MintAltCardHeader from "./mintalternative/assets/mintalt.svg";
import Win10TilesCardHeader from "./win10tiles/assets/win10tiles.svg";

/** Random works **/
/* 2022 */
import Statistics from "./gallery/2022/statistics/assets/statistics-720.png";
import iPad from "./gallery/2022/ipad/assets/ipad-720.png";
import ArchWall from "./gallery/2022/archwall/assets/arch_with_blue_mountains-720.png";
import FordLogo from "./gallery/2022/ford/assets/ford-720.png";

/* 2021 */
import ManjaroWall from "./gallery/2021/manjarowall/assets/nyanjaro-cat-720.png";

import LogoHistoryImage from "./gallery/2021/2021-01-19-logo_history.png";
import LogoHistoryVideo from "./gallery/2021/2021-01-19-logo_history.mp4";
import RevertingChangeImage from "./gallery/2020/2020-11-30-reverting_change.png";
import RevertingChangeVideo from "./gallery/2020/2020-11-30-reverting_change.mp4";
import PbookImage from "./gallery/2020/2020-24-11-pbook.png";
import PbookVideo from "./gallery/2020/2020-24-11-pbook.mp4";
import Crosswalk from "./gallery/2020/2020-11-08-fussgaengerueberweg.png";
import MixedFeelingsImage from "./gallery/2020/2020-10-07-mixed_feelings.png";
import MixedFeelingsVideo from "./gallery/2020/2020-10-07-mixed_feelings.mp4";
import SomePhoneImage from "./gallery/2020/2020-09-15-some_phone.png";
import SomePhoneVideo from "./gallery/2020/2020-09-15-some_phone.mp4";
import SnowmanImage from "./gallery/2020/2020-09-08-snowman.png";
import SnowmanVideo from "./gallery/2020/2020-09-08-snowman.mp4";
import ControversialChangeImage from "./gallery/2020/2020-08-31-change.png";
import ControversialChangeVideo from "./gallery/2020/2020-08-31-change.mp4";
import NotflexTwoImage from "./gallery/2020/2020-07-17-notflex_2.png";
import NotflexTwoVideo from "./gallery/2020/2020-07-17-notflex_2.mp4";
import NumeralAbsenceImage from "./gallery/2020/2020-03-26-numeral_absence.png";
import NumeralAbsenceVideo from "./gallery/2020/2020-03-26-numeral_absence.mp4";
import RadioOneImage from "./gallery/2020/2020-01-06-radio1.jpg";
import RadioTwoImage from "./gallery/2020/2020-01-08-radio2.jpg";
import RadioThreeImage from "./gallery/2020/2020-01-22-radio3.png";
import MainMenuImage from "./gallery/2019/2019-11-10-main_menu.png";

const works2022 = [
	{
		src: "https://media.pprmint.art/works/2022/statistics/statistics-720.png",
		link: "/projects/works/2022/statistics",
		alt: "An iPad as part of another project.",
		ratio: 1 / 1,
	},
	{
		src: "https://media.pprmint.art/works/2022/ipad/ipad-720.png",
		link: "/projects/works/2022/ipad",
		alt: "An iPad as part of another project.",
		ratio: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/works/2022/archwall/arch_with_blue_mountains-720.png",
		link: "/projects/works/2022/archwall",
		alt: "Arch Linux desktop background with mountains",
		ratio: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/works/2022/ford/ford-720.png",
		link: "/projects/works/2022/ford",
		alt: "Ford logo redesign, inspired by Raul Rand.",
		ratio: 16 / 9,
	},
];

const works2021 = [
	{
		src: ManjaroWall,
		link: "/projects/works/2021/manjarowall",
		alt: "Manjaro desktop background with Nyan-Cat style, I guess.",
		ratio: 16 / 9,
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
			<div className="content">
				<div className="section" id="projects">
					<Container>
						<Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
							<Badge
								badgeContent={"1.5"}
								color="warning"
								anchorOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
							>
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
											href="https://download.pprmint.art/mintcraft/1.18/Mintcraft_1.5.zip"
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
							</Badge>
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
						</Masonry>
					</Container>
				</div>
				<div className="section" id="works2022">
					<Container>
						<Typography variant="h1">2022</Typography>
					</Container>
					<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={0}>
						{works2022.map((item) => (
							<Link to={item.link} key={item.src}>
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
										aspectRatio={item.ratio}
										src={item.src}
										alt={item.alt}
										color="transparent"
										loading={
											<Skeleton
												variant="rectangular"
												animation="wave"
												width="100%"
												height="100%"
											/>
										}
									/>
								</Button>
							</Link>
						))}
					</Masonry>
				</div>
				{/* <div className="section" id="works2021">
					<Container>
						<Typography variant="h1">2021</Typography>
						<Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
							{works2021.map((item) => (
								<Link to={item.link} key={item.src}>
									<Card variant="outlined" sx={{ cursor: "pointer" }}>
										<Image
											aspectRatio={item.ratio}
											src={item.src}
											alt={item.alt}
											color="transparent"
											loading={
												<Skeleton
													variant="rectangular"
													animation="wave"
													width="100%"
													height="100%"
												/>
											}
										/>
									</Card>
								</Link>
							))}
						</Masonry>
					</Container>
				</div> */}
			</div>
		</>
	);
}
