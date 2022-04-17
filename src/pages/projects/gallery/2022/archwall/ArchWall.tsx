import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography, Skeleton, Container } from "@mui/material";

import Image from "material-ui-image";

import SlideOne from "./assets/arch_with_blue_mountains.png";
import SlideTwo from "./assets/arch_screenshot.png";

function ArchWall() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.archWall",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="A wallpaper made to be used on Arch Linux with the Qogir theme. Very specific indeed."
                    />
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="A wallpaper made to be used on Arch Linux with the Qogir theme. Very specific indeed."
				/>
				<meta property="og:image" content="https://pprmint.art/og/works/archwall.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Arch wallpaper." />
				<meta property="og:url" content="https://pprmint.art/projects/works/2022/archwall" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="content">
				<div className="section">
					<a href={SlideOne} target="_blank">
						<Image
							src={SlideOne}
							width="100%"
							alt="The wallpaper in all its glory."
							aspectRatio={16 / 9}
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
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						{t("captions.wallpaper")}
					</Typography>
				</div>
				<div className="section">
					<a href={SlideTwo} target="_blank">
						<Image
							src={SlideTwo}
							width="100%"
							alt="A screenshot showing this wallpaper applied to KDE Plasma with the Qogir theme enabled."
							aspectRatio={16 / 9}
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
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						{t("captions.theme1")}
						<a
							className="external"
							href="https://github.com/vinceliuice/Qogir-theme"
							target="_blank"
							rel="noreferrer noopener"
						>
							Qogir GTK
						</a>
						{t("captions.theme2")}
						<a
							className="external"
							href="https://github.com/vinceliuice/Qogir-kde"
							target="_blank"
							rel="noreferrer noopener"
						>
							KDE
						</a>
						{t("captions.theme3")}
					</Typography>
				</div>
			</div>
		</>
	);
}

export default ArchWall;
