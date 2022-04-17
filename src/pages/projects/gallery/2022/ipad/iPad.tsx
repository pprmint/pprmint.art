import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography, Card, Skeleton, Container } from "@mui/material";

import Image from "material-ui-image";

import SlideOne from "./assets/ipad.png";

function ArchWall() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.iPad",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="It's an iPad."
                    />
                <meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="It's an iPad."
				/>
				<meta property="og:image" content="https://pprmint.art/og/works/ipad.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="iPad." />
				<meta property="og:url" content="https://pprmint.art/projects/works/2022/ipad" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">
					{t("title.sub")}{" "}
					<Typography variant="caption">{t("title.smallSub")}</Typography>
				</Typography>
			</Container>
			<div className="content">
				<div className="section">
					<a href={SlideOne} target="_blank">
						<Image
							src={SlideOne}
							width="100%"
							alt="An iPad made as part of a completely differnet project."
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
						{t("captions.leTablet")}
					</Typography>
				</div>
			</div>
		</>
	);
}

export default ArchWall;
