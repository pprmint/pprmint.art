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

export default function LikeStatistics() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.likeStatistics",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Some nice dark statistics showing the likes for every percent from 2020 and 2021."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Some nice dark statistics showing the likes for every percent from 2020 and 2021."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/statistics.jpg"
				/>
				<meta property="og:image:width" content="720" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="iPad." />
				<meta
					property="og:url"
					content="https://pprmint.art/projects/works/2022/statistics"
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/Statistics/statistics.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/Statistics/statistics.png"
							width="100%"
							alt="A nice dark statistic showing the likes for every percent from 2020 and 2021."
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						{t("captions.graphs1")}
						<br />
						{t("captions.graphs2")}
					</Typography>
				</ScrollAnimation>
			</div>
		</>
	);
}
