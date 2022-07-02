import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import {
	Typography,
	Container,
	List,
	ListItem,
	Card,
	CardContent,
} from "@mui/material";

export default function PrivacyPolicy() {
	const { t } = useTranslation("translation", {
		keyPrefix: "privacypolicy",
	});
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Very exciting legal stuff awaits you on this delightful page. Fun for the whole family!"
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="Very exciting legal stuff awaits you on this delightful page. Fun for the whole family!"
				/>
				<meta property="og:image" content="https://pprmint.art/og/index.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="Privacy policy." />
				<meta property="og:url" content="https://pprmint.art/privacy" />
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<ScrollAnimation animateIn="fadeBottom" animateOnce>
				<div className="content">
					<div className="section" id="responsible">
						<Container>
							<Typography variant="h1">
								{t("section.responsible.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.responsible.text")}
							</Typography>
						</Container>
					</div>
					<div className="section" id="cookies">
						<Container>
							<Typography variant="h1">{t("section.cookies.title")}</Typography>
							<Card variant="outlined">
								<CardContent>
									<Typography variant="button">TL;DR:</Typography>
									<Typography>{t("section.cookies.text.tldr")}</Typography>
								</CardContent>
							</Card>
							<br />
							<Typography variant="body1">
								{t("section.cookies.text.long1")}
							</Typography>
							<List>
								<ListItem>
									<Typography>
										<code>i18nextLng</code>
										{": "}
										{t("section.cookies.text.localStorage.i18nextLng.text1")}
										<code>en</code>
										{t("section.cookies.text.localStorage.i18nextLng.text2")}
										<code>de</code>
										{t("section.cookies.text.localStorage.i18nextLng.text3")}
									</Typography>
								</ListItem>
								<ListItem>
									<Typography>
										<code>cookiesAcknowledged</code>
										{": "}
										{t(
											"section.cookies.text.localStorage.cookiesAcknowledged.text1"
										)}
										<code>yup</code>
										{t(
											"section.cookies.text.localStorage.cookiesAcknowledged.text2"
										)}
									</Typography>
								</ListItem>
							</List>
							<Typography variant="body1">
								{t("section.cookies.text.long2")}
							</Typography>
						</Container>
					</div>
					<div className="section" id="logs">
						<Container>
							<Typography variant="h1">{t("section.weblogs.title")}</Typography>
							<Card variant="outlined">
								<CardContent>
									<Typography variant="button">TL;DR:</Typography>
									<Typography>{t("section.weblogs.text.tldr")}</Typography>
								</CardContent>
							</Card>
							<br />
							<Typography variant="h2">
								{t("section.weblogs.text.long.contents.title")}
							</Typography>
							<Typography variant="h3">
								{t("section.weblogs.text.long.contents.domain.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.weblogs.text.long.contents.domain.description")}
							</Typography>
							<br />
							<Typography variant="h3">
								{t("section.weblogs.text.long.contents.ip.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.weblogs.text.long.contents.ip.description")}
							</Typography>
							<br />
							<Typography variant="h3">
								{t("section.weblogs.text.long.contents.accessTime.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.weblogs.text.long.contents.accessTime.description")}
							</Typography>
							<br />
							<Typography variant="h3">
								{t("section.weblogs.text.long.contents.file.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.weblogs.text.long.contents.file.description")}
							</Typography>
							<br />
							<Typography variant="h3">
								{t("section.weblogs.text.long.contents.httpCodes.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.weblogs.text.long.contents.httpCodes.description")}
								<br />
								<a
									className="external"
									href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
									target="_blank"
									rel="noopener noreferrer"
								>
									HTTP response status codes - HTTP | MDN
								</a>
							</Typography>
							<br />
							<Typography variant="h3">
								{t("section.weblogs.text.long.contents.agent.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.weblogs.text.long.contents.agent.description")}
								<br />
								<a
									className="external"
									href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
									target="_blank"
									rel="noopener noreferrer"
								>
									User-Agent - HTTP | MDN
								</a>
							</Typography>
							<br />
							<Typography variant="h2">
								{t("section.weblogs.text.long.storagePeriod.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.weblogs.text.long.storagePeriod.description")}
							</Typography>
							<br />
							<Typography variant="h2">
								{t("section.weblogs.text.long.usage.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.weblogs.text.long.usage.description")}
							</Typography>
							<br />
						</Container>
					</div>
					<div className="section" id="externalLinks">
						<Container>
							<Typography variant="h1">
								{t("section.externalLinks.title")}
							</Typography>
							<Typography variant="body1">
								{t("section.externalLinks.text")}
							</Typography>
						</Container>
					</div>
					<div className="section" id="contact">
						<Container>
							<Typography variant="h1">{t("section.contact.title")}</Typography>
							<Typography variant="body1">
								{t("section.contact.text")}
							</Typography>
						</Container>
					</div>
				</div>
			</ScrollAnimation>
		</React.Fragment>
	);
}
