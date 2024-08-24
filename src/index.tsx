import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

i18n.init({
    resources: {
        en: { translation: require('./locales/en.json') },
        tr: { translation: require('./locales/tr.json') }
    },
    lng: "tr", // Set default language to Turkish
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<I18nextProvider i18n={i18n}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</I18nextProvider>
);