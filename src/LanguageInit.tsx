import React from "react";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";
import XHR from "i18next-http-backend";
import stringsEN from "./globalassets/languages/english/strings.json";
import stringsDE from "./globalassets/languages/german/strings.json";
import {
	createTheme,
	useTheme,
	ThemeProvider,
	StyledEngineProvider,
	CssBaseline,
	Button,
	ButtonGroup,
	Dialog,
	DialogTitle,
	LinearProgress,
	Typography,
	useMediaQuery,
	IconButton,
	DialogContent,
	Divider,
	DialogActions,
	Box,
} from "@mui/material";
import { RiCloseLine, RiSettings4Line } from "react-icons/ri";

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

const LanguageSetting = () => {
	const selected = localStorage.getItem("i18nLng") || "en";
	const { t } = useTranslation();

	React.useEffect(() => {
		document.body.dir = languageMap[selected].dir;
	}, [selected]);
	return (
		<>
			<DialogContent>
				<Typography variant="h3">
					{t("common.settings.language.title")}
				</Typography>
				<Typography variant="body1">
					{t("common.settings.language.description")}
				</Typography>
				<br />
				<ButtonGroup variant="contained">
					{Object.keys(languageMap)?.map((item) => (
						<Button
							onClick={() => {
								i18n.changeLanguage(item);
							}}
						>
							{languageMap[item].label}
						</Button>
					))}
				</ButtonGroup>
			</DialogContent>
		</>
	);
};
export default LanguageSetting;

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
