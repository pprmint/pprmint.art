import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, Skeleton, Container, Grid } from "@mui/material";
import Image from "@jy95/material-ui-image";

export default function GS() {
	const { t } = useTranslation("translation", {
		keyPrefix: "works.2021.lightStudy",
	});
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Trying to make convincing shades with vector graphics."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Trying to make convincing shades with vector graphics."
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Light study." />
				<meta
					property="og:url"
					content="https://pprmint.art/works/2021/lightstudy"
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
							<a
								href="https://media.pprmint.art/2021/LightStudy/light1.png"
								target="_blank"
							>
								<Image
									src="https://media.pprmint.art/2021/LightStudy/light1.png"
									color="transparent"
									aspectRatio={1 / 1}
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
						<Grid item xs={12} md={6}>
							<a
								href="https://media.pprmint.art/2021/LightStudy/dark1.png"
								target="_blank"
							>
								<Image
									src="https://media.pprmint.art/2021/LightStudy/dark1.png"
									color="transparent"
									aspectRatio={1 / 1}
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
						href="https://media.pprmint.art/2021/LightStudy/light2.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2021/LightStudy/light2.png"
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
					<a
						href="https://media.pprmint.art/2021/LightStudy/dark2.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2021/LightStudy/dark2.png"
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
                    <a href="https://media.pprmint.art/2021/LightStudy/screenshot.png" target="_blank">
						<Image
							src="https://media.pprmint.art/2021/LightStudy/screenshot.png"
							color="transparent"
							aspectRatio={1900 / 956}
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
						{t("captions.affinity")}
					</Typography>
				</ScrollAnimation>
			</div>
		</React.Fragment>
	);
}
