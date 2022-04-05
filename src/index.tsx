import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.scss";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-http-backend";
import stringsEN from "./globalassets/languages/english/strings.json";
import stringsDE from "./globalassets/languages/german/strings.json";

const resources = {
	en: {
		translation: stringsEN,
	},
	de: {
		translation: stringsDE,
	},
};

const options = {
	order: ["querystring", "navigator"],
	lookupQuerystring: "lng",
};

i18n
	// .use(XHR)
	// .use(LanguageDetector)
	.use(initReactI18next)
	.init({
        lng: "en", // Will be replaced once both languages are ready.
		// detection: options,
		resources,
		// fallbackLng: "en",
		// supportedLngs: ["de", "en"],
		interpolation: {
			escapeValue: false,
		},
		// debug: false,
	});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
