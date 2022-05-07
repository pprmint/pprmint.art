import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, Skeleton, Container } from "@mui/material";
import Banner from "./wip.svg";

const channels = [
	{
		name: "Disc_Channel",
	},
	{
		name: "Forecast_Channel",
	},
	{
		name: "News_Channel",
	},
	{
		name: "Everybody_Votes_Channel",
	},
	{
		name: "Internet_Channel",
	},
];

export default function WiiMenu() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.wiiRemake",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta name="description" content="My take on a modernized Wii Menu." />
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="My take on a modernized Wii Menu."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/wiimenuremake.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Wii Menu remake." />
				<meta
					property="og:url"
					content="https://pprmint.art/projects/2022/wiimenu"
				/>
			</Helmet>
			<img src={Banner} className="hero" />
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="section">
				{channels.map((item) => (
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<video
							key={item.name}
							src={
								"https://media.pprmint.art/2022/WiiRemake/" + item.name + ".mp4"
							}
							width="100%"
							height="100%"
							poster={
								"https://media.pprmint.art/2022/WiiRemake/" + item.name + ".jpg"
							}
							controls
							playsInline
						/>
					</ScrollAnimation>
				))}
			</div>
		</>
	);
}
