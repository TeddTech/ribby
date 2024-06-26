/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for the Google Cloud Run middleware when building for production.
 *
 * Learn more about the Cloud Run integration here:
 * - https://qwik.builder.io/docs/deployments/gcp-cloud-run/
 *
 */
import { createServer } from "node:http";
import {
	type PlatformNode,
	createQwikCity,
} from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";

declare global {
	interface QwikCityPlatform extends PlatformNode {}
}

/** The default headers used by helmet */
const DEFAULT_HEADERS = {
	"Content-Security-Policy": [
		`default-src 'self'`,
		`base-uri 'self'`,
		`font-src 'self' https: data:`,
		`form-action 'self' https://accounts.google.com/ https://www.facebook.com/ https://api.instagram.com/oauth/ https://www.instagram.com/oauth/ https://www.instagram.com/accounts/ https://www.tiktok.com/auth/ https://login.tidal.com/ https://api.soundcloud.com/ https://appleid.apple.com/auth/ https://accounts.spotify.com/`,
		`frame-ancestors 'self'`,
		`img-src 'self' https://raw.githubusercontent.com/xataio/ https://authjs.dev/img/providers/ https://cdn.builder.io/api/ data: blob:`,
		`object-src 'none'`,
		`script-src 'self'`,
		`script-src-attr 'none'`,
		`style-src 'self' https: 'unsafe-inline'`,
		"upgrade-insecure-requests",
	].join("; "),
	"Cross-Origin-Embedder-Policy": "require-corp-or-same-origin",
	"Cross-Origin-Opener-Policy": "same-origin-allow-popups",
	"Cross-Origin-Resource-Policy": "same-origin",
	"Origin-Agent-Cluster": "?1",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Strict-Transport-Security": "max-age=15552000; includeSubDomains",
	"X-Content-Type-Options": "nosniff",
	"X-DNS-Prefetch-Control": "off",
	"X-Download-Options": "noopen",
	"X-Frame-Options": "SAMEORIGIN",
	"X-Permitted-Cross-Domain-Policies": "none",
	"X-XSS-Protection": "0",
};

// Create the Qwik City router
const { router, notFound, staticFile } = createQwikCity({
	render,
	qwikCityPlan,
	manifest,
	static: {
		cacheControl: "public, max-age=31557600",
	},
	getOrigin(req) {
		// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto
		const protocol = req.headers["x-forwarded-proto"] ?? "http";
		const host = req.headers["x-forwarded-host"] ?? req.headers.host;
		return `${protocol}://${host}`;
	},
	getClientConn: (conn) => {
		const xForwardedFor = conn.headers["x-forwarded-for"];
		if (typeof xForwardedFor === "string") {
			return {
				ip: xForwardedFor.split(",").shift()?.trim(),
			};
		}
		if (Array.isArray(xForwardedFor)) {
			return {
				ip: xForwardedFor.shift()?.trim(),
			};
		}
		return {
			ip: undefined,
		};
	},
});

const server = createServer();

server.on("request", (req, res) => {
	for (const header of Object.entries(DEFAULT_HEADERS)) {
		res.setHeader(...header);
	}

	staticFile(req, res, () => {
		router(req, res, () => {
			notFound(req, res, () => {});
		});
	});
});

server.listen(process.env.PORT ?? 8080);
