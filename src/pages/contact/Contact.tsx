import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import {
	Button,
	Typography,
	Alert,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Container,
	Stack,
} from "@mui/material";
import { FiInfo, FiMail, FiChevronDown } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import Lottie from "react-lottie";

import Banner from "./assets/banner.json";

const lottieOptions = {
	loop: false,
	autoplay: true,
	animationData: Banner,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export default function Contact() {
	const { t } = useTranslation("translation", {
		keyPrefix: "contact",
	});
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Learn more about what software I use to make my thingies, how you may use some of the things I make and click spicy buttons to send me an email or DM on Twitter."
				/>
			</Helmet>
			<Lottie
				options={lottieOptions}
				isClickToPauseDisabled={true}
				height="auto"
				style={{
					position: "absolute",
					marginTop: " calc(-1 * var(--marginTop))",
				}}
			/>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="content">
				<div className="section" id="faq">
					<Container>
						<ScrollAnimation animateIn="fadeBottom" animateOnce>
							<Accordion variant="outlined">
								<AccordionSummary expandIcon={<FiChevronDown />}>
									<Typography variant="h3">
										{t("section.faq.1commission.title")}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant="body1">
										<b>{t("section.faq.1commission.tldr")}</b>
										{t("section.faq.1commission.long")}
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="outlined">
								<AccordionSummary expandIcon={<FiChevronDown />}>
									<Typography variant="h3">
										{t("section.faq.2terms.title")}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant="body1">
										<b>{t("section.faq.2terms.tldr")}</b>
										{t("section.faq.2terms.long")}
									</Typography>
									<br />
									<Typography variant="body1">
										<b>{t("section.faq.2terms.works.title")}</b>
										<br />
										{t("section.faq.2terms.works.text1")}
										<Link to="/works">
											{t("section.faq.2terms.works.worksPage")}
										</Link>
										{t("section.faq.2terms.works.text2")}
									</Typography>
									<br />
									<Typography variant="body1">
										<b>{t("section.faq.2terms.downloads.title")}</b>
										<br />
										{t("section.faq.2terms.downloads.text1")}
										<Link to="/downloads/mintcraft">
											{t("section.faq.2terms.downloads.downloadsPage")}
										</Link>
										{t("section.faq.2terms.downloads.text2")}
										<br />
										<br />
										<b>{t("section.faq.2terms.fonts.title")}</b>
										<br />
										{t("section.faq.2terms.fonts.text1")}
										<a
											className="external"
											href="https://scripts.sil.org/cms/scripts/page.php?item_id=OFL"
											target="_blank"
											rel="noopener noreferrer"
										>
											SIL Open Font License
										</a>
										{t("section.faq.2terms.fonts.text2")}
										<b></b>
										<br />
										<br />
									</Typography>
									<Alert variant="filled" icon={<FiInfo />}>
										{t("section.faq.2terms.reminder")}
									</Alert>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="outlined">
								<AccordionSummary expandIcon={<FiChevronDown />}>
									<Typography variant="h3">
										{t("section.faq.3software.title")}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant="body1">
										{t("section.faq.3software.graphics")}
										<a
											className="external"
											href="https://affinity.serif.com/designer/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Affinity Designer
										</a>
										{t("section.faq.3software.and")}
										<a
											className="external"
											href="https://affinity.serif.com/photo/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Photo
										</a>
										.
										<br />
										{t("section.faq.3software.mograph")}
										<a
											className="external"
											href="https://www.adobe.com/products/aftereffects.html"
											target="_blank"
											rel="noopener noreferrer"
										>
											Adobe After Effects
										</a>
										{t("section.faq.3software.withExtensions")}
										<a
											className="external"
											href="https://www.mtmograph.com/products/motion-3"
											target="_blank"
											rel="noopener noreferrer"
										>
											Motion
										</a>
										,{" "}
										<a
											className="external"
											href="https://www.mtmograph.com/products/boombox"
											target="_blank"
											rel="noopener noreferrer"
										>
											Boombox
										</a>
										{t("section.faq.3software.and")}
										<a
											className="external"
											href="https://aescripts.com/ease-and-wizz/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Ease and Wizz
										</a>
										.
										<br />
										{t("section.faq.3software.video")}
										<a
											className="external"
											href="https://www.adobe.com/products/premiere.html"
											target="_blank"
											rel="noopener noreferrer"
										>
											Adobe Premiere Pro
										</a>
										.
										<br />
										{t("section.faq.3software.audio")}
										<a
											className="external"
											href="https://www.adobe.com/products/audition.html"
											target="_blank"
											rel="noopener noreferrer"
										>
											Adobe Audition
										</a>
										.
										<br />
										{t("section.faq.3software.music")}
										<a
											className="external"
											href="https://www.image-line.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											FL Studio
										</a>
										{t("section.faq.3software.withVSTs")}
										<a
											className="external"
											href="https://vital.audio/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Vital
										</a>
										{t("section.faq.3software.and")}
										<a
											className="external"
											href="https://labs.spitfireaudio.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											LABS
										</a>
										.
										<br />
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="outlined">
								<AccordionSummary expandIcon={<FiChevronDown />}>
									<Typography variant="h3">
										{t("section.faq.4gamecube.title")}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant="body1">
										<b>{t("section.faq.4gamecube.tldr")}</b>
										{t("section.faq.4gamecube.long")}
										<a
											className="external"
											href="https://www.youtube.com/watch?v=iEw9ZqHatPI"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("section.faq.4gamecube.thisVideo")}
										</a>
										.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="outlined">
								<AccordionSummary expandIcon={<FiChevronDown />}>
									<Typography variant="h3">
										{t("section.faq.5support.title")}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant="body1">
										<b>{t("section.faq.5support.tldr")}</b>
										{t("section.faq.5support.long")}
										<a
                                            className="external"
											href="https://patreon.com/pprmint"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("section.faq.5support.patreonPage")}
										</a>
										.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion variant="outlined">
								<AccordionSummary expandIcon={<FiChevronDown />}>
									<Typography variant="h3">
										{t("section.faq.6actually.title")}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant="body1">
										{t("section.faq.6actually.text")}
									</Typography>
								</AccordionDetails>
							</Accordion>
						</ScrollAnimation>
					</Container>
				</div>
				<div className="section" id="contact">
					<Container>
						<ScrollAnimation animateIn="fadeBottom" animateOnce>
							<Typography variant="h1">{t("section.contact.title")}</Typography>
							<Typography variant="body1">
								{t("section.contact.text")}
							</Typography>
							<br />
							<Stack spacing={2} direction="row">
								<Button
									href="mailto:mail@pprmint.art?subject=I'll%20gladly%20ignore%20any%20ads%20or%20offers%20you%20might%20have%20for%20me."
									target="_blank"
									rel="noopener noreferrer"
									variant="contained"
									startIcon={<FiMail />}
								>
									{t("section.contact.button.email")}
								</Button>
								<Button
									href="https://discord.com/invite/Vw9JXwr"
									target="_blank"
									rel="noopener noreferrer"
									variant="outlined"
									startIcon={<SiDiscord />}
								>
									{t("section.contact.button.discord")}
								</Button>
							</Stack>
						</ScrollAnimation>
					</Container>
				</div>
			</div>
		</React.Fragment>
	);
}
