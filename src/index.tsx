import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.scss";

import "./LanguageInit";
import Theme from "./ThemeInit";

import {
	ThemeProvider,
	StyledEngineProvider,
	CssBaseline,
	LinearProgress,
} from "@mui/material";

ReactDOM.render(
	<Suspense fallback={<LinearProgress color="inherit" />}>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={Theme}>
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
