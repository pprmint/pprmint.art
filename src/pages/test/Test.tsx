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
} from "@mui/material";
import {
	RiInformationLine,
	RiMailLine,
	RiTwitterLine,
	RiArrowDownSLine,
	RiTestTubeLine,
	RiTestTubeFill,
} from "react-icons/ri";

function Test() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Experiments • pprmint.art</title>
				<meta
					name="description"
					content="A page in which I try out stuff and let others roam around in themselves."
				/>
			</Helmet>
			<Container className="title">
				<Typography variant="h1">Experi<wbr />ments.</Typography>
				<Alert variant="outlined" severity="warning" icon={<RiTestTubeFill />}>
					<AlertTitle color="var(--textSecondary)">
						Experimental things ahead!
					</AlertTitle>
					This page sort of serves as a notebook of things that may or may not
					eventually be implemented across my site. Feel free to play around
					here yourself.
				</Alert>
			</Container>
			<div className="content">
				<div className="section" id="buttons">
					<Container>
						<Typography>Leaf buttons &ndash; variant 1</Typography>
						<br />
						<Stack spacing={2} direction="row">
							<Button color="secondary" variant="contained" sx={{ borderRadius: "5px 0 5px 0" }}>
								Leaf button 1 contained
							</Button>
							<Button color="secondary" variant="outlined" sx={{ borderRadius: "5px 0 5px 0" }}>
								Leaf button 1 outlined
							</Button>
							<Button color="secondary"
								variant="outlined"
								sx={{
									borderWidth: "2px !important",
									borderRadius: "5px 0 5px 0",
								}}
							>
								Leaf button 1 outlined alt
							</Button>
							<Button color="secondary" variant="text" sx={{ borderRadius: "5px 0 5px 0" }}>
								Leaf button 1 text
							</Button>
						</Stack>
					</Container>
                    <br />
                    <br />
					<Container>
						<Typography>Leaf buttons &ndash; variant 2</Typography>
						<br />
						<Stack spacing={2} direction="row">
							<Button color="secondary" variant="contained" sx={{ borderRadius: "10px 2px 10px 2px" }}>
								Leaf button 1 contained
							</Button>
							<Button color="secondary" variant="outlined" sx={{ borderRadius: "10px 2px 10px 2px" }}>
								Leaf button 1 outlined
							</Button>
							<Button color="secondary"
								variant="outlined"
								sx={{
									borderWidth: "2px !important",
									borderRadius: "10px 2px 10px 2px",
								}}
							>
								Leaf button 1 outlined alt
							</Button>
							<Button color="secondary" variant="text" sx={{ borderRadius: "10px 2px 10px 2px" }}>
								Leaf button 1 text
							</Button>
						</Stack>
					</Container>
				</div>
			</div>
		</>
	);
}

export default Test;
