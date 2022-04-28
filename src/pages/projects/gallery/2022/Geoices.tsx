import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography, Skeleton, Container } from "@mui/material";

import Image from "material-ui-image";

export default function Geoices() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.geoices",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="A 3D remake of Geoices' logo made with Cinema 4D and Octane."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="A 3D remake of Geoices' logo made with Cinema 4D and Octane."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/geoices.jpg"
				/>
				<meta property="og:image:width" content="720" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="3D remake of Geoices' logo." />
				<meta
					property="og:url"
					content="https://pprmint.art/projects/works/2022/geoices"
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2"><a className="external" href="https://twitter.com/geoices" target="_blank" rel="noopener noreferrer">{t("title.sub")}</a></Typography>
			</Container>
			<div className="content">
				<div className="section">
					<a href="https://media.pprmint.art/2022/Geoices/geoballs.png" target="_blank">
						<Image
							src="https://media.pprmint.art/2022/Geoices/geoballs.png"
							width="100%"
							alt="A 3D remake of Geoices' logo made with Cinema 4D and Octane."
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
