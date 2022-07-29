import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
	Typography,
	IconButton,
	Stack,
	Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import {
	FiHeart,
} from "react-icons/fi";

import { SiYoutube, SiGithub, SiDiscord, SiPatreon } from "react-icons/si";

// Control thingies
import NavBar from "./NavBar";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollToTop from "./ScrollToTop";
import CookieSnackbar from "./CookieSnackbar";

function IconLink(props: React.PropsWithChildren<{ href: string }>) {
	return (
		<IconButton
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
			size="large"
		>
			{props.children}
		</IconButton>
	);
}

export default function App() {
	const { t } = useTranslation();
	return (
		<React.Fragment>
			<NavBar />
			<CookieSnackbar />

			<ScrollToTop>
                <AnimatedRoutes />
			</ScrollToTop>

			<footer>
				<Divider />
				<div className="copyright">
					<Typography variant="body2">
						{t("common.footer.madeWith")}
						<FiHeart color="var(--redSecondary)" />
						{t("common.footer.andCoffee")}
					</Typography>
					<Typography>
						<Link to="/privacy">{t("common.footer.privacyPolicy")}</Link>
					</Typography>
				</div>
				<br />
				<Stack
					id="footerButtons"
					spacing={2}
					direction="row"
					sx={{ justifyContent: "center", alignItems: "center" }}
				>
					<IconLink href="https://www.youtube.com/c/pprmint">
						<SiYoutube />
					</IconLink>
					<IconLink href="https://github.com/pprmint">
						<SiGithub />
					</IconLink>
					<IconLink href="https://patreon.com/pprmint/">
						<SiPatreon />
					</IconLink>
					<IconLink href="https://discord.com/invite/Vw9JXwr">
						<SiDiscord />
					</IconLink>
				</Stack>
			</footer>
		</React.Fragment>
	);
}
