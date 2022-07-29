import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, Container, Skeleton, Grid } from "@mui/material";
import Image from "@jy95/material-ui-image";

export default function MintBanners() {
	const { t } = useTranslation("translation", {
		keyPrefix: "works.2022.mintBanners",
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
					content="I played around a bit in Cinema 4D."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="I played around a bit in Cinema 4D."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/wiimenuremake.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Mint banners." />
				<meta
					property="og:url"
					content="https://pprmint.art/works/2022/wiimenu"
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<Grid container spacing={0}>
						<Grid item xs={12} md={6}>
							<video
								src="https://media.pprmint.art/2022/MintBanners/Scene1_0000_1.mp4"
								width="100%"
								height="100%"
								controls
								playsInline
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<a
								href="https://media.pprmint.art/2022/MintBanners/screenshot1.png"
								target="_blank"
							>
								<Image
									src="https://media.pprmint.art/2022/MintBanners/screenshot1.png"
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
						</Grid>
					</Grid>
					<a
						href="https://media.pprmint.art/2022/MintBanners/MINT_Night_2.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/MintBanners/MINT_Night_2.png"
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
						href="https://media.pprmint.art/2022/MintBanners/MINT_Night.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/MintBanners/MINT_Night.png"
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
						href="https://media.pprmint.art/2022/MintBanners/MINT_Night_3.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/MintBanners/MINT_Night_3.png"
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
						href="https://media.pprmint.art/2022/MintBanners/screenshot2.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/MintBanners/screenshot2.png"
							color="transparent"
							aspectRatio={2 / 1}
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
