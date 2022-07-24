import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Typography, Skeleton, Container } from "@mui/material";
import { Masonry } from "@mui/lab";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

import Image from "@jy95/material-ui-image";

const works2022 = [
	{
		src: "https://media.pprmint.art/2022/Lights/N-720.png",
		link: "/works/2022/lights",
		aspect: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/2022/Book/Cover-720.png",
		link: "/works/2022/book",
		aspect: 2481 / 3508,
	},
	{
		src: "https://media.pprmint.art/2022/MintBanners/MINT_Night-720.png",
		link: "/works/2022/MintBanners",
		aspect: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/2022/WiiRemake/WiiRemake-720.png",
		link: "/works/2022/wiimenu",
		aspect: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/2022/Geoices/geoballs-720.png",
		link: "/works/2022/geoices",
		aspect: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/2022/SUSE/suse-720.png",
		link: "/works/2022/suserebrand",
		aspect: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/2022/Statistics/statistics-720.png",
		link: "/works/2022/statistics",
		aspect: 1 / 1,
	},
	{
		src: "https://media.pprmint.art/2022/iPad/iPad-720.png",
		link: "/works/2022/ipad",
		aspect: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/2022/ArchWall/Arch_Qogir-720.png",
		link: "/works/2022/archwall",
		aspect: 16 / 9,
	},
	{
		src: "https://media.pprmint.art/2022/Ford/Ford-720.png",
		link: "/works/2022/ford",
		aspect: 16 / 9,
	},
];

export default function Works() {
	const { t } = useTranslation("translation", {
		keyPrefix: "works",
	});
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta name="description" content="Have a look at some of my works." />
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Have a look at some of my works."
				/>
				<meta property="og:image" content="https://pprmint.art/og/index.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="My works." />
				<meta property="og:url" content="https://pprmint.art/works" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>

			<div className="section" id="2022">
				<Container maxWidth="xl">
					<ScrollAnimation animateIn="fadeBottom" animateOnce>
						<Typography variant="h1">2022</Typography>
					</ScrollAnimation>
				</Container>
				<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={0}>
					{works2022.map((item, index) => (
						<ScrollAnimation key={index} animateIn="fadeBottom" animateOnce>
							<Link to={item.link}>
								<Button
									color="inherit"
									sx={{
										width: "100%",
										display: "block",
										padding: 0,
										margin: 0,
										borderRadius: 0,
									}}
								>
									<Image
										src={item.src}
										color="transparent"
										aspectRatio={item.aspect}
										loading={<Skeleton variant="rectangular" />}
									/>
								</Button>
							</Link>
						</ScrollAnimation>
					))}
				</Masonry>
			</div>
		</React.Fragment>
	);
}
