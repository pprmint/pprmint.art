import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import {
	Typography,
	Skeleton,
	Container,
	CircularProgress,
} from "@mui/material";
import Image from "mui-image";

export default function ArchWall() {
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
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/archwall.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Arch wallpaper." />
				<meta
					property="og:url"
					content="https://pprmint.art/projects/2022/archwall"
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/ArchWall/Arch_Qogir.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/ArchWall/Arch_Qogir.png"
							width="100%"
							alt="The wallpaper in all its glory."
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						{t("captions.wallpaper")}
					</Typography>
				</ScrollAnimation>
			</div>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/ArchWall/screenshot.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/ArchWall/screenshot.png"
							width="100%"
							alt="A screenshot showing this wallpaper applied to KDE Plasma with the Qogir theme enabled."
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
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
				</ScrollAnimation>
			</div>
		</>
	);
}
