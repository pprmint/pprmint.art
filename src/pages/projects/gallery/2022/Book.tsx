import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, Container, CircularProgress } from "@mui/material";
import Image from "mui-image";

export default function Book() {
	const { t } = useTranslation("translation", {
		keyPrefix: "projects.works.2022.book",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Some people wonder why I write the way I write. One person said I should write a book."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Some people wonder why I write the way I write. One person said I should write a book."
				/>
				<meta
					property="og:image"
					content="https://pprmint.art/og/works/book.jpg"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Mint banners." />
				<meta
					property="og:url"
					content="https://pprmint.art/projects/2022/wiimenu"
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="section">
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/Book/Book.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/Book/Book.png"
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/Book/Book_alt.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/Book/Book_alt.png"
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeBottom" animateOnce>
					<a
						href="https://media.pprmint.art/2022/Book/Cover.png"
						target="_blank"
					>
						<Image
							src="https://media.pprmint.art/2022/Book/Cover.png"
							duration={1000}
							easing="ease-out"
							showLoading={<CircularProgress />}
						/>
					</a>
				</ScrollAnimation>
                <br />
				<Typography variant="body1" textAlign="center">
					{t("captions.starboard")}
				</Typography>
			</div>
		</>
	);
}
