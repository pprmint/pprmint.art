import React from "react";
import { Helmet } from "react-helmet-async";
import { Typography, Grid, Button, Container, Link } from "@mui/material";
import Image from "material-ui-image";

import WiiMenuPreview from "./assets/wip/wii_menu.png";
import EuroBillsPreview from "./assets/wip/euros.png";

import LogoHistoryImage from "./assets/gallery/2021-01-19-logo_history.png";
import LogoHistoryVideo from "./assets/gallery/2021-01-19-logo_history.mp4";
import RevertingChangeImage from "./assets/gallery/2020-11-30-reverting_change.png";
import RevertingChangeVideo from "./assets/gallery/2020-11-30-reverting_change.mp4";
import PbookImage from "./assets/gallery/2020-24-11-pbook.png";
import PbookVideo from "./assets/gallery/2020-24-11-pbook.mp4";
import Crosswalk from "./assets/gallery/2020-11-08-fussgaengerueberweg.png";
import MixedFeelingsImage from "./assets/gallery/2020-10-07-mixed_feelings.png";
import MixedFeelingsVideo from "./assets/gallery/2020-10-07-mixed_feelings.mp4";
import SomePhoneImage from "./assets/gallery/2020-09-15-some_phone.png";
import SomePhoneVideo from "./assets/gallery/2020-09-15-some_phone.mp4";
import SnowmanImage from "./assets/gallery/2020-09-08-snowman.png";
import SnowmanVideo from "./assets/gallery/2020-09-08-snowman.mp4";
import ControversialChangeImage from "./assets/gallery/2020-08-31-change.png";
import ControversialChangeVideo from "./assets/gallery/2020-08-31-change.mp4";
import NotflexTwoImage from "./assets/gallery/2020-07-17-notflex_2.png";
import NotflexTwoVideo from "./assets/gallery/2020-07-17-notflex_2.mp4";
import NumeralAbsenceImage from "./assets/gallery/2020-03-26-numeral_absence.png";
import NumeralAbsenceVideo from "./assets/gallery/2020-03-26-numeral_absence.mp4";
import RadioOneImage from "./assets/gallery/2020-01-06-radio1.jpg";
import RadioTwoImage from "./assets/gallery/2020-01-08-radio2.jpg";
import RadioThreeImage from "./assets/gallery/2020-01-22-radio3.png";
import MainMenuImage from "./assets/gallery/2019-11-10-main_menu.png";

interface WorkCardImageProps {
	title: string;
	image: string;
	description: string;
	link: string;
	buttonText: string;
	aspect: number;
}
interface WorkCardVideoProps {
	title: string;
	video: string;
	poster: string;
	description: string;
	link: string;
	buttonText: string;
}

function WorkCardImage(props: WorkCardImageProps) {
	return (
		<Grid item xs={12} sm={6}>
			<Link href={props.image} target="_blank" rel="noopener noreferrer">
				<Image
					src={props.image}
					width="100%"
					imageStyle={{ borderRadius: "8px" }}
					style={{ marginBottom: "5px" }}
					alt=""
					aspectRatio={props.aspect}
					color="transparent"
				/>
			</Link>
			<br />
			<div className="left">
				<Typography variant="h2">
					{props.title}
					<Typography variant="body1" color="textSecondary">
						{props.description}
					</Typography>
				</Typography>
			</div>
			<div className="right">
				<Button
					variant="text"
					style={{ marginTop: "8px" }}
					href={props.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{props.buttonText}
				</Button>
			</div>
			<br />
		</Grid>
	);
}

function WorkCardVideo(props: WorkCardVideoProps) {
	return (
		<Grid item xs={12} sm={6}>
			<video
				src={props.video}
				poster={props.poster}
				width="100%"
				style={{ borderRadius: "8px" }}
				controls
			/>
			<br />
			<br />
			<div className="left">
				<Typography variant="h2">
					{props.title}
					<Typography variant="body1" color="textSecondary">
						{props.description}
					</Typography>
				</Typography>
			</div>
			<div className="right">
				<Button
					variant="text"
					style={{ marginTop: "8px" }}
					href={props.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{props.buttonText}
				</Button>
			</div>
			<br />
		</Grid>
	);
}

function Works() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – Works.</title>
				<meta
					name="description"
					content="Here you're able to have a look at my works in full quality. Don't bust my bandwidth, please, thanks."
				/>
			</Helmet>
			<Container className="wrapper">
				<Grid container spacing={4} className="nav">
					<Grid item xs={12} sm={9}>
						<Typography variant="h1">Good today.</Typography>
						<Typography variant="h2">And welcome to my website.</Typography>
					</Grid>
				</Grid>
				<div className="content">
					<br />
					<Grid container spacing={4}>
						<WorkCardVideo
							title="Logo history."
							video={LogoHistoryVideo}
							poster={LogoHistoryImage}
							description="Because that previous wordmark sucked ass."
							link="https://www.youtube.com/watch?v=6RdrbgFcKJ4"
							buttonText="Watch on YouTube"
						/>
						<WorkCardVideo
							title="Reverting a certain change."
							video={RevertingChangeVideo}
							poster={RevertingChangeImage}
							description="Changed my mind."
							link="https://www.youtube.com/watch?v=syodof7Dt0E"
							buttonText="Watch on YouTube"
						/>
						<WorkCardVideo
							title="p.book L1."
							video={PbookVideo}
							poster={PbookImage}
							description="A flipping laptop animation."
							link="https://www.youtube.com/watch?v=h7o23FG3qE8"
							buttonText="Watch on YouTube"
						/>
						<WorkCardImage
							title="Fußgängerüberweg."
							image={Crosswalk}
							description="A minimalistic render of a German crosswalk."
							link={Crosswalk}
							buttonText="Open in new tab"
							aspect={16 / 9}
						/>
						<WorkCardVideo
							title="mixed feelings."
							video={MixedFeelingsVideo}
							poster={MixedFeelingsImage}
							description="A simple piece and my first release on Spotify as well."
							link="https://open.spotify.com/track/73O4fIE3kcigRDTlrX8R0C?si=4-tSzqL6RZ-rdwN8k0x2yw"
							buttonText="Play on Spotify"
						/>
						<WorkCardVideo
							title="Nosy Iksperiah."
							poster={SomePhoneImage}
							video={SomePhoneVideo}
							description="Not a rip-off, no no."
							link={SomePhoneVideo}
							buttonText="Open in new tab"
						/>
						<WorkCardVideo
							title="Sliding into your DMs."
							poster={SnowmanImage}
							video={SnowmanVideo}
							description="An animation made in Cinema 4D and After Effects."
							link="https://www.youtube.com/watch?v=QER7VTjT99Q"
							buttonText="Watch on YouTube"
						/>
						<WorkCardVideo
							title="A controversial change."
							poster={ControversialChangeImage}
							video={ControversialChangeVideo}
							description="Animation to show I was moving from a dark to light theme."
							link="https://www.youtube.com/watch?v=X7TZsusEAow"
							buttonText="Watch on YouTube"
						/>
						<WorkCardVideo
							title="Notflex 2."
							poster={NotflexTwoImage}
							video={NotflexTwoVideo}
							description="Netflix logo animation, but different."
							link="https://www.youtube.com/watch?v=slSMCeM2bbM"
							buttonText="Watch on YouTube"
						/>
						<WorkCardVideo
							title="numeral absence."
							poster={NumeralAbsenceImage}
							video={NumeralAbsenceVideo}
							description="My first musical piece that's not named after numbers."
							link="https://www.youtube.com/watch?v=Qpg3KsY5T-g"
							buttonText="Watch on YouTube"
						/>
						<WorkCardImage
							title="Radio (3D render)."
							image={RadioThreeImage}
							description="Made that thing yet again in Cinema 4D."
							link="https://www.youtube.com/watch?v=2hBZoZY2gko"
							buttonText="Watch speedart on YouTube"
							aspect={16 / 9}
						/>
						<WorkCardImage
							title="Radio (Sketch)."
							image={RadioTwoImage}
							description="Drew that thing again at school."
							link={RadioTwoImage}
							buttonText="Open in new tab"
							aspect={16 / 9}
						/>
						<WorkCardImage
							title="Radio (Cover art)."
							image={RadioOneImage}
							description="Made for the other song my friend Blizzy created."
							link="https://www.youtube.com/watch?v=lxJOpDmvOD8"
							buttonText="Listen on YouTube"
							aspect={1 / 1}
						/>
						<WorkCardImage
							title="Main Menu cover art."
							image={MainMenuImage}
							description="Made for a song my friend Blizzy created."
							link="https://www.youtube.com/watch?v=XTvPgD7bUOw"
							buttonText="Listen on YouTube"
							aspect={1 / 1}
						/>
					</Grid>
					<br />
					<br />
					<Typography variant="h2">
						You have reached the end. Or have you?
					</Typography>
					<Typography variant="subtitle1">[Vsauce theme plays]</Typography>
					<Typography variant="body1">
						Things I made back in 2019 and 2018 can only be found archived on
						Google Drive, because some of these look awful and I didn't want
						them to defile my website. If you're interested anyways: Feel free
						to check them out here:
					</Typography>
					<br />
					<a
						href="https://drive.google.com/drive/folders/1gRaSM0STXm9_fyHrhmm8C_jBQbSE8KaJ"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outlined">Open Google Drive archive</Button>
					</a>
				</div>
			</Container>
		</>
	);
}

export default Works;
