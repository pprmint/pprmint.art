import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
import Image from "material-ui-image";
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
import WireframeDarkCb from "./globalassets/wireframes/wireframe_dark_cb.svg";
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
		<>
			<DialogContent>
				<Typography variant="h3">{t("title")}</Typography>
				<Typography variant="body1">{t("description")}</Typography>
				<br />
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Card variant="outlined" elevation={0}>
							<Image
								src={WireframeDark}
								aspectRatio={16 / 9}
								color="transparent"
							/>
						</Card>
                        <Typography variant="caption">{t("caption.dark")}</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card variant="outlined" elevation={0}>
							<Image
								src={WireframeDarkCb}
								aspectRatio={16 / 9}
								color="transparent"
							/>
						</Card>
                        <Typography variant="caption">{t("caption.darkCb")}</Typography>
					</Grid>
				</Grid>
			</DialogContent>
		</>
	);
};
export default ThemeSetting;
