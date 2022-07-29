import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import {
	Typography,
	Skeleton,
	Container,
} from "@mui/material";
import Image from "@jy95/material-ui-image";

export default function ManjaroWall() {
	const { t } = useTranslation("translation", {
		keyPrefix: "works.2021.manjaroWall",
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
					content="Manjaro wallpaper, inspired by their default SWAY background."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Manjaro wallpaper, inspired by their default SWAY background."
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Manjaro wallpaper." />
				<meta
					property="og:url"
					content="https://pprmint.art/works/2021/manjarowall"
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2021/ManjaroWall/nyanjaro-cat.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2021/ManjaroWall/nyanjaro-cat.png"
							alt="The wallpaper in all its glory."
							color="transparent"
							aspectRatio={16 / 9}
							loading={
								<Skeleton
									variant="rectangular"
									width="100%"
									height="100%"
									animation="wave"
								/>
							}
						/>
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						{t("captions.wallpaper")}
					</Typography>
				</ScrollAnimation>
			</div>
		</motion.div>
	);
}
