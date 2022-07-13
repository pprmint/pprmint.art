import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Snackbar, IconButton, Typography, Slide } from "@mui/material";
import { FiCheck } from "react-icons/fi";

export default function CookieSnackbar() {
	const { t } = useTranslation("translation", {
		keyPrefix: "common.cookies",
	});
	const [visible, setVisible] = React.useState(false);
	useEffect(() => {
		let cookiesAcknowledged = localStorage.getItem("cookiesAcknowledged");
		if (!cookiesAcknowledged) {
			setVisible(true);
		}
	}, []);
	if (!visible) return null;
	return (
		<Snackbar
			open={visible}
			TransitionComponent={Slide}
			message={
				<Typography>
					{t("agreement1")}
					<br />
					<br />
					{t("agreement2")}
					<Link to="/privacy">{t("link")}</Link>.
				</Typography>
			}
			action={
				<IconButton
					onClick={() => {
						setVisible(false);
						localStorage.setItem("cookiesAcknowledged", "yup");
					}}
				>
					<FiCheck />
				</IconButton>
			}
			sx={{ maxWidth: "750px" }}
		></Snackbar>
	);
}
