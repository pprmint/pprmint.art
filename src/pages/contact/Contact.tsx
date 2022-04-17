import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
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
import {
	RiInformationLine,
	RiMailLine,
	RiTwitterLine,
	RiArrowDownSLine,
} from "react-icons/ri";

export default function Contact() {
	const { t } = useTranslation("translation", {
		keyPrefix: "contact",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="Learn more about what software I use to make my thingies, how you may use some of the things I make and click spicy buttons to send me an email or DM on Twitter."
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">{t("title.main")}</Typography>
				<Typography variant="h2">{t("title.sub")}</Typography>
			</Container>
			<div className="content">
				<div className="section" id="faq">
					<Container>
						<Accordion variant="outlined">
							<AccordionSummary expandIcon={<RiArrowDownSLine />}>
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
							<AccordionSummary expandIcon={<RiArrowDownSLine />}>
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
									<b>{t("section.faq.2terms.illustrations.title")}</b>
									<br />
									{t("section.faq.2terms.illustrations.text")}
								</Typography>
								<br />
								<Typography variant="body1">
									<b>{t("section.faq.2terms.stuff.title")}</b>
									<br />
									{t("section.faq.2terms.stuff.text1")}
									<Link to="/projects/mintcraft">Mintcraft</Link>{" "}
									{t("section.faq.2terms.stuff.text2")}
									<Link to="/projects/win10tiles">
										{t("section.faq.2terms.stuff.win10tiles")}
									</Link>
									{t("section.faq.2terms.stuff.text3")}
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
								<Alert
									color="info"
									variant="filled"
									icon={<RiInformationLine />}
								>
									{t("section.faq.2terms.reminder")}
								</Alert>
							</AccordionDetails>
						</Accordion>
						<Accordion variant="outlined">
							<AccordionSummary expandIcon={<RiArrowDownSLine />}>
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
									and{" "}
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
							<AccordionSummary expandIcon={<RiArrowDownSLine />}>
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
							<AccordionSummary expandIcon={<RiArrowDownSLine />}>
								<Typography variant="h3">
									{t("section.faq.5support.title")}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography variant="body1">
									<b>{t("section.faq.5support.tldr")}</b>
									{t("section.faq.5support.long")}
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion variant="outlined">
							<AccordionSummary expandIcon={<RiArrowDownSLine />}>
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
					</Container>
				</div>
				<div className="section" id="contact">
					<Container>
						<Typography variant="h1">{t("section.contact.title")}</Typography>
						<Typography variant="body1">{t("section.contact.text")}</Typography>
						<br />
						<Stack spacing={2} direction="row">
							<Button
								href="mailto:mail@pprmint.art?subject=I'll%20gladly%20ignore%20any%20ads%20or%20offers%20you%20might%20have%20for%20me."
								target="_blank"
								rel="noopener noreferrer"
								variant="contained"
								startIcon={<RiMailLine />}
							>
								{t("section.contact.button.email")}
							</Button>
							<Button
								href="https://twitter.com/messages/compose?recipient_id=1296863056266502144"
								target="_blank"
								rel="noopener noreferrer"
								variant="contained"
								color="info"
								startIcon={<RiTwitterLine />}
							>
								{t("section.contact.button.twitter")}
							</Button>
						</Stack>
					</Container>
				</div>
			</div>
		</>
	);
}
