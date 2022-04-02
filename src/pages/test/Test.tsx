import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Alert,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Container,
	Stack,
	AlertTitle,
	Grid,
} from "@mui/material";
import {
	RiInformationLine,
	RiMailLine,
	RiTwitterLine,
	RiArrowDownSLine,
	RiTestTubeLine,
	RiTestTubeFill,
} from "react-icons/ri";

import "./assets/buttonStyles.scss";
import transparentWordmarkAnimation from "./assets/wordmark.webm";

function Test() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Playground • pprmint.art</title>
				<meta
					name="description"
					content="A page in which I try out stuff and let others roam around in themselves."
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">
					Play
					<wbr />
					ground.
				</Typography>
				<Alert variant="outlined" severity="warning" icon={<RiTestTubeFill />}>
					<AlertTitle color="var(--textSecondary)">
						Experimental things ahead!
					</AlertTitle>
					This page is kinda like my sketch book for ideas that may or may not
					be implemented across the site in the future, or a little playground
					where I make things for fun.
				</Alert>
			</Container>
			<div className="content">
				<div className="section" id="buttons">
					<Container>
						<Typography>
							Leaf buttons &ndash; variant 1 &ndash; 5px/0px
						</Typography>
						<br />
						<Stack spacing={2} direction="row">
							<Button
								color="secondary"
								variant="contained"
								sx={{ borderRadius: "5px 0" }}
							>
								contained
							</Button>
							<Button
								color="secondary"
								variant="outlined"
								sx={{ borderRadius: "5px 0" }}
							>
								outlined
							</Button>
							<Button
								color="secondary"
								variant="outlined"
								sx={{
									borderWidth: "2px !important",
									borderRadius: "5px 0",
								}}
							>
								outlined alt
							</Button>
							<Button
								color="secondary"
								variant="text"
								sx={{ borderRadius: "5px 0" }}
							>
								text
							</Button>
						</Stack>
					</Container>
					<br />
					<br />
					<Container>
						<Typography>
							Leaf buttons &ndash; variant 2 &ndash; 10px/2px
						</Typography>
						<br />
						<Stack spacing={2} direction="row">
							<Button
								color="secondary"
								variant="contained"
								sx={{ borderRadius: "10px 2px" }}
							>
								contained
							</Button>
							<Button
								color="secondary"
								variant="outlined"
								sx={{ borderRadius: "10px 2px" }}
							>
								outlined
							</Button>
							<Button
								color="secondary"
								variant="outlined"
								sx={{
									borderWidth: "2px !important",
									borderRadius: "10px 2px",
								}}
							>
								outlined alt
							</Button>
							<Button
								color="secondary"
								variant="text"
								sx={{ borderRadius: "10px 2px" }}
							>
								text
							</Button>
						</Stack>
					</Container>
					<br />
					<br />
					<Container>
						<Typography>Windows buttons, cuz why not</Typography>
						<br />
						<Stack spacing={2} direction="row">
							<button className="win11 uwp blue">Windows 11 UWP</button>
							<button className="win11 uwp transparent">Windows 11 UWP</button>
							<button className="win11 wpf">Windows 11 WPF</button>
						</Stack>
						{/* <br />
						<Stack spacing={2} direction="row">
							<button className="win10 uwp">
								Windows 10 UWP
							</button>
							<button className="win10 wpf">
								Windows 10 WPF
							</button>
						</Stack>
                        <br />
						<Stack spacing={2} direction="row">
							<button className="win8 uwp">
								Windows 8 UWP
							</button>
							<button className="win8 wpf">
								Windows 8 WPF
							</button>
						</Stack>
                        <br />
						<Stack spacing={2} direction="row">
							<button className="win7">
								Windows 7 / Vista
							</button>
						</Stack>
                        <br />
						<Stack spacing={2} direction="row">
							<button className="winXp">
								Windows XP
							</button>
						</Stack>
                        <br />
						<Stack spacing={2} direction="row">
							<button className="win9x">
								Windows 9X/2K
							</button>
						</Stack> */}
					</Container>
				</div>
				<div
					className="section"
					id="leafContainer"
					style={{
						background: "linear-gradient(to bottom right, #095, #111)",
						borderRadius: "50px 0",
						minHeight: "90vh",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Container maxWidth="xl">
						<Typography variant="h1">Section</Typography>
						<Typography variant="h2">
							with background and rounded corners.
						</Typography>
						<br />
						<Grid container spacing={8}>
							<Grid item xs={12} md={6}>
								<Typography variant="body1" color="#eee">
									That video you see is actually transparent, yes. Seems like
									one can do a lot of fucked up shit with WEBMs, cuz I think
									those funny videos that everyone loves and that make one's
									Discord client crash are also WEBMs. I used FFMPEG for this.
									The process was to basically generate a bunch of frames, use
									them as input in FFMPEG and then let it generate a WEBM from
									that. Now I just have no clue what I should use this video
									for...
									<br />
									<br />
									You can find tutorials explaining that in more detail online.
								</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography variant="body1">
									<video
										src={transparentWordmarkAnimation}
										width="100%"
										height="100%"
										autoPlay
										loop
										muted
									/>
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</div>
			</div>
		</>
	);
}

export default Test;
