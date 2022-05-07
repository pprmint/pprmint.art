import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import {
	Typography,
	Card,
	Skeleton,
	Container,
	Box,
	CircularProgress,
} from "@mui/material";
import Image from "mui-image";
import { flexbox } from "@mui/system";

export default function iPad() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.iPad",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta name="description" content="It's an iPad." />
				<meta name="theme-color" content="#00cc66" />
				<meta property="og:description" content="It's an iPad." />
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/ipad.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="iPad." />
				<meta
					property="og:url"
					content="https://pprmint.art/projects/2022/ipad"
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">
					{t("title.sub")}{" "}
					<Typography variant="caption">{t("title.smallSub")}</Typography>
				</Typography>
			</Container>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/iPad/iPad.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/iPad/iPad.png"
							alt="An iPad made as part of a completely differnet project."
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
					<br />
					<Typography variant="body1" textAlign="center">
						{t("captions.leTablet")}
					</Typography>
				</ScrollAnimation>
			</div>
		</>
	);
}
