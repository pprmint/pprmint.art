import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	Snackbar,
	IconButton,
	Typography,
	Slide,
} from "@mui/material";
import { RiCloseLine } from "react-icons/ri";

export default function CookieSnackbar() {
    const { t } = useTranslation("translation", {
		keyPrefix: "common.cookies",
	});
	const [visible, setVisible] = React.useState(false);
	useEffect(() => {
		let cookiesAcknowledged = localStorage.getItem("cookiesAcknowledged");
		if (!cookiesAcknowledged) {
			setVisible(true);
			localStorage.setItem("cookiesAcknowledged", "yup");
		}
	}, []);
	if (!visible) return null;
	return (
		<Snackbar
			open={visible}
			TransitionComponent={Slide}
			message={
				<Typography>
					{t("use")}
					<br />
					{t("agreement")}
					<Link to="/privacy">{t("link")}</Link>{t("noFutureAppear")}
				</Typography>
			}
			action={
				<IconButton onClick={() => setVisible(false)}>
					<RiCloseLine />
				</IconButton>
			}
		></Snackbar>
	);
}
