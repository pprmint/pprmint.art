import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.scss";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";
import XHR from "i18next-http-backend";
import stringsEN from "./globalassets/languages/english/strings.json";
import stringsDE from "./globalassets/languages/german/strings.json";
import {
	Button,
	LinearProgress,
	List,
	ListItem,
	ListSubheader,
	Menu,
	MenuItem,
} from "@mui/material";
import { RiArrowDownSLine } from "react-icons/ri";

const resources = {
	en: {
		translation: stringsEN,
	},
	de: {
		translation: stringsDE,
	},
};
const options = {
	order: ["localStorage", "querystring", "navigator"],
	lookupQuerystring: "lng",
};
const languageMap = {
	en: { label: "English", active: true },
	de: { label: "Deutsch", active: false },
};

function LanguageSelector() {
	const selected = localStorage.getItem("i18nLng") || "en";
	const { t } = useTranslation();

	React.useEffect(() => {
		document.body.dir = languageMap[selected].dir;
	}, [selected]);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Button
				variant="outlined"
				color="inherit"
				endIcon={<RiArrowDownSLine />}
				onClick={handleClick}
				sx={{ ml: "20px", width: "120px" }}
			>
				{t("common.currentLang")}
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				{Object.keys(languageMap)?.map((item) => (
					<MenuItem
						onClick={() => {
							i18n.changeLanguage(item), setAnchorEl(null);
						}}
					>
						{languageMap[item].label}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}
export default LanguageSelector;

i18n
	.use(XHR)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		detection: options,
		resources,
		fallbackLng: "en",
		supportedLngs: ["en", "de"],
		interpolation: {
			escapeValue: false,
		},
		debug: false,
	});

ReactDOM.render(
	<Suspense fallback={<LinearProgress color="inherit" />}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Suspense>,
	document.getElementById("root")
);

serviceWorker.unregister();
