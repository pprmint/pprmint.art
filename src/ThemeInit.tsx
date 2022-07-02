import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
import Image from "@jy95/material-ui-image";
import {
	createTheme,
	Button,
	ButtonGroup,
	Typography,
	DialogContent,
	Card,
	Grid,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Box,
} from "@mui/material";
import WireframeDark from "./globalassets/wireframes/wireframe_dark.svg";
import WireframeLight from "./globalassets/wireframes/wireframe_light.svg";
// import WireframeLight from "./globalassets/wireframes/wireframe_dark.svg";
// import WireframeLightCb from "./globalassets/wireframes/wireframe_dark.svg";

const ThemeSetting = () => {
	const selected = localStorage.getItem("theme") || "dark";

	const [selectedValue, setSelectedValue] = React.useState("dark");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
	};

	const { t } = useTranslation("translation", {
		keyPrefix: "common.settings.theme",
	});

	return (
		<React.Fragment>
			<DialogContent>
				<Typography variant="h3">{t("title")}</Typography>
				<Typography variant="body1">{t("description")}</Typography>
				<br />
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Card variant="outlined" elevation={0}>
							<img
								src={WireframeDark}
							/>
						</Card>
                        <Typography variant="caption">{t("caption.dark")}</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card variant="outlined" elevation={0}>
							<img
								src={WireframeLight}
							/>
						</Card>
                        <Typography variant="caption">{t("caption.light")}</Typography>
					</Grid>
				</Grid>
			</DialogContent>
		</React.Fragment>
	);
};
export default ThemeSetting;
