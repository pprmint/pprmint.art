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

export default function Ford() {
	const { t } = useTranslation("translation", {
		keyPrefix: "works.2022.ford",
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
					content="Inspired by a design by Paul Rand in 1966."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Inspired by a design by Paul Rand in 1966."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/ford.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Arch wallpaper." />
				<meta property="og:url" content="https://pprmint.art/works/2022/Ford" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<video
						src="https://media.pprmint.art/2022/Ford/Ford-m.mp4"
						width="100%"
						height="100%"
						autoPlay
						loop
						muted
						playsInline
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/Ford/Ford-b.svg"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/Ford/Ford-b.svg"
							alt="Ford logo outline on a blue background."
							aspectRatio={16 / 9}
							color="transparent"
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
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/Ford/Ford-slogan.svg"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/Ford/Ford-slogan.svg"
							alt="Slogan, literally translated from the German one currently in use... I think."
							aspectRatio={16 / 9}
							color="transparent"
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
				</ScrollAnimation>
			</div>
		</motion.div>
	);
}
