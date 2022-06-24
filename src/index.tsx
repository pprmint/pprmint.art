import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.scss";

import "./LanguageInit";

const darkTheme = createTheme({
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
			hyphens: "auto",
		},
		h2: {
			fontFamily: "var(--fontPrimary)",
			color: "#EEE",
			fontSize: "2rem",
			fontWeight: 500,
			padding: ".5rem 0",
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
					backgroundColor: "transparent",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 24,
                    paddingLeft: 16,
					paddingRight: 16,
				},
			},
		},
		MuiButtonGroup: {
			styleOverrides: {
				root: {
					borderRadius: 24,
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
		MuiPaper: {
			styleOverrides: {
				elevation0: {
					background: "var(--backgroundPrimary)",
				},
				elevation1: {
					background: "var(--backgroundSecondary)",
				},
				elevation2: {
					background: "var(--backgroundTertiary)",
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
		MuiSnackbarContent: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					background: "#333",
					boxShadow: "0 6px 10px #00000055",
					transition: "all cubic-bezier(0, 0, 0.2, 1)",
				},
			},
		},
		MuiBackdrop: {
			styleOverrides: {
				root: {
					background: "#111111cc",
					transition: "opacity .12s !important",
					backdropFilter: "blur(20px)",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					paddingRight: "0 !important",
				},
			},
		},
		MuiSlider: {
			styleOverrides: {
				valueLabel: {
					backgroundColor: "#555555",
					borderRadius: "5px",
					boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.12)",
					color: "#eeeeee",
				},
			},
		},
	},
});

import {
	createTheme,
	ThemeProvider,
	StyledEngineProvider,
	CssBaseline,
	LinearProgress,
} from "@mui/material";

ReactDOM.render(
	<Suspense fallback={<LinearProgress color="inherit" />}>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={darkTheme}>
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
