import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography, Container } from "@mui/material";

import PylonScene from "./assets/pylon.svg";

function Wip() {
    const { t } = useTranslation("translation", {
		keyPrefix: "wip",
	});
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("meta.title")}</title>
				<meta
					name="description"
					content="This page is not quite ready yet. Check back at a later time."
                    />
                <meta name="theme-color" content="#ffbb22" />
				<meta
					property="og:description"
					content="This page is not quite ready yet. Check back at a later time."
				/>
				<meta property="og:image" content="https://pprmint.art/og/wip.jpg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="720" />
				<meta property="og:title" content="pprmint.art" />
				<meta property="og:url" content="https://pprmint.art" />
			</Helmet>
			<div className="fullscreen">
            <img src={PylonScene} />
				<Container className="title">
					<Typography variant="h1">{t("title.main")}</Typography>
					<Typography variant="h2">{t("title.sub")}</Typography>
				</Container>
			</div>
		</>
	);
}

export default Wip;
