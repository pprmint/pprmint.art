import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, Skeleton, Container } from "@mui/material";
import Image from "@jy95/material-ui-image";

export default function suseRebrand() {
	const { t } = useTranslation("translation", {
		keyPrefix: "works.2022.suseRebrand",
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
				<meta name="description" content="An oversimplified chameleon." />
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="An oversimplified chameleon."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/ford.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Arch wallpaper." />
				<meta
					property="og:url"
					content="https://pprmint.art/works/2022/suserebrand"
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/SUSE/slide1.svg"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/SUSE/slide1.svg"
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
					<a
						href="https://media.pprmint.art/2022/SUSE/slide2.svg"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/SUSE/slide2.svg"
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
					<a
						href="https://media.pprmint.art/2022/SUSE/slide2.svg"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/SUSE/slide3.svg"
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
					<a
						href="https://media.pprmint.art/2022/SUSE/slide2.svg"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/SUSE/slide4.svg"
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
