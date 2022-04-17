import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography, Skeleton, Container } from "@mui/material";

import Image from "material-ui-image";

import SlideOne from "./assets/ford-m.mp4";
import SlideTwo from "./assets/ford-b.svg";
import SlideThree from "./assets/ford-slogan.svg";

export default function Ford() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.ford",
	});
	return (
		<>
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
				<meta property="og:image" content="https://pprmint.art/og/works/ford.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Arch wallpaper." />
				<meta property="og:url" content="https://pprmint.art/projects/works/2022/ford" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="content">
				<div className="section">
					<video
						src={SlideOne}
						width="100%"
						height="100%"
						autoPlay
						loop
						muted
					/>
					<a href={SlideTwo} target="_blank">
						<Image
							src={SlideTwo}
							width="100%"
							alt="Ford logo outline on a blue background."
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
					<a href={SlideThree} target="_blank">
						<Image
							src={SlideThree}
							width="100%"
							alt="Slogan, literally translated from the German one currently in use... I think."
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
				</div>
			</div>
		</>
	);
}
