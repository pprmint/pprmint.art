import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Grid } from "@mui/material";

import Text from "./assets/text.svg";
import ButtonYes from "./assets/yes_button.svg";
import ButtonYesHover from "./assets/yes_button_hover.svg";
import ButtonNoDisabled from "./assets/no_button_disabled.svg";
import PopupSound from "./assets/Sample_0021.wav";
import HoverSound from "./assets/Sample_0004.wav";
import ClickSound from "./assets/Sample_0005.wav";
import ErrorSound from "./assets/Sample_0011.wav";

import "./assets/popupStyles.scss";

export default function HealthSafety() {
	let hover = new Audio(HoverSound);
	let click = new Audio(ClickSound);
	let error = new Audio(ErrorSound);
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Mintendo - Health and Safety Precautions</title>
				<meta name="description" content="Not yet." />
			</Helmet>
			<Container className="title" maxWidth="md">
				<div className="WiiPopup">
					<audio autoPlay>
						<source src={PopupSound} />
					</audio>
					<img src={Text} style={{ margin: "20% 15% 17%" }} />
					<Grid container>
						<Grid item xs={6} id="yesButton">
							<Link to="/">
								<img src={ButtonYes} onMouseOver={() => hover.play()} />
								<img src={ButtonYesHover} onClick={() => click.play()} />
							</Link>
						</Grid>
						<Grid item xs={6}>
							<img src={ButtonNoDisabled} onClick={() => error.play()} />
						</Grid>
					</Grid>
				</div>
			</Container>
		</React.Fragment>
	);
}