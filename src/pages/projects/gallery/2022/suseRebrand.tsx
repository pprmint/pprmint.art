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

export default function suseRebrand() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.suseRebrand",
	});
	return (
		<>
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
					content="https://pprmint.art/projects/2022/suserebrand"
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
							width="100%"
							alt="Slogan, literally translated from the German one currently in use... I think."
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/SUSE/slide2.svg"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/SUSE/slide2.svg"
							width="100%"
							alt="Slogan, literally translated from the German one currently in use... I think."
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
				</ScrollAnimation>
			</div>
		</>
	);
}
