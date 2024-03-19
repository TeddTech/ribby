import { component$, useVisibleTask$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		console.log(
			"%c🔍 Qwik Click-To-Source",
			"background: #564CE0; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;",
			"Fix for Paths That Use Spaces",
		);
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(globalThis as any).qwikOpenInEditor = (path: string) => {
			console.log(path);
			const baseURL = "http://local.local";
			const resolvedURL = new URL(path, "http://local.local");
			const params = new URLSearchParams();
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const srcDir = (globalThis as any).qwikdevtools.srcDir;
			params.set("file", srcDir + resolvedURL.pathname);
			const decodedPath = decodeURIComponent(params.toString());
			const finalPath = decodedPath.replace(baseURL, "");
			fetch(`/__open-in-editor?${finalPath}`);
			console.log("srcDir", srcDir);
			console.log("resolvedURL", resolvedURL.pathname);
			console.log("paramsToString", params.toString());
			console.log("finalPath", finalPath);
		};
	});
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
				<RouterHead />
				<ServiceWorkerRegister />
			</head>
			<body lang="en">
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
