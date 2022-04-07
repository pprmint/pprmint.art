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

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: "#0C6",
			main: "#0C6",
			dark: "#095",
			contrastText: "#111",
		},
		secondary: {
			light: "#19F",
			main: "#19F",
			dark: "#17c",
			contrastText: "#111",
		},
		background: {
			default: "#111",
			paper: "#222",
		},
		text: {
			primary: "#EEE",
			secondary: "#BBB",
		},
		error: {
			light: "#F34",
			main: "#F34",
			dark: "#f34",
			contrastText: "#111",
		},
		warning: {
			light: "#FB2",
			main: "#FB2",
			dark: "#d92",
			contrastText: "#111",
		},
		info: {
			light: "#19F",
			main: "#19F",
			dark: "#17c",
			contrastText: "#111",
		},
		success: {
			light: "#0C6",
			main: "#0C6",
			dark: "#095",
			contrastText: "#111",
		},
	},
	typography: {
		fontFamily: "var(--fontSecondary)",
		h1: {
			fontFamily: "var(--fontPrimary)",
			color: "#EEE",
			fontSize: "4rem",
			fontWeight: 600,
			lineHeight: 1.1,
			paddingBottom: "1rem",
		},
		h2: {
			fontFamily: "var(--fontPrimary)",
			color: "#EEE",
			fontSize: "2rem",
			fontWeight: 500,
			padding: ".3rem 0",
			lineHeight: 1.1,
		},
		h3: {
			fontFamily: "var(--fontPrimary)",
			color: "#EEE",
			fontSize: "1.5rem",
			fontWeight: 400,
			padding: ".3rem 0",
		},
		body1: {
			color: "#BBB",
			lineHeight: 1.5,
		},
	},
	components: {
		MuiSkeleton: {
			styleOverrides: {
				root: {
					backgroundColor: "#222",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 5,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: 8,
					background: "#222",
					boxShadow: "0 6px 10px #00000055",
				},
				paperFullScreen: {
					borderRadius: 0,
				},
			},
		},
		MuiBackdrop: {
			styleOverrides: {
				root: {
					background: "#111111",
                    transition: "opacity .12s !important",
				},
			},
		},
	},
});

function LanguageSelector() {
	const selected = localStorage.getItem("i18nLng") || "en";
	const { t } = useTranslation();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
				variant="text"
				color="inherit"
				startIcon={<RiSettings4Line />}
				onClick={handleClick}
				sx={{ ml: "16px", mr: "16px", pl: "15px", pr: "15px", borderRadius: "20px" }}
			>
				{t("common.settings.title")}
			</Button>
			<Dialog
				maxWidth="sm"
				fullWidth
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				onBackdropClick={handleClose}
			>
				<Box sx={{ display: "flex", backgroundColor: "#333" }}>
					<Box pl={1} pr={1} pt={0.5} pb={0.5}>
						<IconButton onClick={handleClose} size="large">
							<RiCloseLine />
						</IconButton>
					</Box>
					<Typography
						sx={{
							mt: "10px",
							flexGrow: 1,
							fontSize: "1.75rem",
							fontFamily: "var(--fontPrimary)",
							fontWeight: 500,
							color: "var(--textSecondary)",
						}}
					>
						{t("common.settings.title")}
					</Typography>
					<Box pr={1} pt={0.5} pb={0.5}>
						<IconButton size="large" disabled>
							<RiSettings4Line />
						</IconButton>
					</Box>
				</Box>
				<Divider />
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
			</Dialog>
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
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</ThemeProvider>
		</StyledEngineProvider>
	</Suspense>,
	document.getElementById("root")
);

serviceWorker.unregister();
