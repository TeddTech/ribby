import type { RequestHandler } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";

export const onRequest: RequestHandler = async (event) => {
	if (isDev) return; // Will not return CSP headers in dev mode

	const nonce = Date.now().toString(36); // Your custom nonce logic here
	event.sharedMap.set("@nonce", nonce);

	let csp = [
		`default-src 'self'`,
		`connect-src 'self' https://cdn.builder.io https://vitals.vercel-insights.com`,
		`base-uri 'self'`,
		`font-src 'self' https: data:`,
		`form-action 'self' https://accounts.google.com/ https://www.facebook.com/ https://api.instagram.com/oauth/ https://www.instagram.com/oauth/ https://www.instagram.com/accounts/ https://www.tiktok.com/auth/ https://login.tidal.com/ https://api.soundcloud.com/ https://appleid.apple.com/auth/ https://accounts.spotify.com/`,
		`frame-ancestors 'self'`,
		`img-src 'self' https://raw.githubusercontent.com/xataio/ https://authjs.dev/img/providers/ https://cdn.builder.io/api/ data: blob:`,
		`object-src 'none'`,
		`script-src 'self' 'unsafe-inline' https: 'nonce-${nonce}' 'strict-dynamic'`,
		`frame-src 'self' 'nonce-${nonce}'`,
		`script-src-attr 'none'`,
		`style-src 'self' https: 'unsafe-inline'`,
		"block-all-mixed-content",
		"upgrade-insecure-requests",
		// "require-trusted-types-for 'script'",
	];

	if (event.env.get("VERCEL_ENV") === "preview") {
		csp = [
			`manifest-src 'self'`,
			`default-src 'none'`,
			`connect-src 'self' https://cdn.builder.io https://vercel.live/ https://vitals.vercel-insights.com https://vercel.com *.pusher.com *.pusherapp.com https://sockjs-mt1.pusher.com/ wss://ws-mt1.pusher.com/ wss://ws-us3.pusher.com/`,
			`base-uri 'self'`,
			`font-src 'self' https: data:`,
			`form-action 'self' https://accounts.google.com/ https://www.facebook.com/ https://api.instagram.com/oauth/ https://www.instagram.com/oauth/ https://www.instagram.com/accounts/ https://www.tiktok.com/auth/ https://login.tidal.com/ https://api.soundcloud.com/ https://appleid.apple.com/auth/ https://accounts.spotify.com/`,
			`frame-ancestors 'self'`,
			`img-src 'self' https://raw.githubusercontent.com/xataio/ https://authjs.dev/img/providers/ https://cdn.builder.io/api/ https://vercel.live/ https://vercel.com https://sockjs-mt1.pusher.com/ data: blob:`,
			`object-src 'none'`,
			`script-src 'self' https://vercel.live/ https://vercel.com 'unsafe-inline'`,
			`frame-src 'self' https://vercel.live/ https://vercel.com`,
			`script-src-attr 'none'`,
			`style-src 'self' https: 'unsafe-inline'`,
			"block-all-mixed-content",
			"upgrade-insecure-requests",
			// "require-trusted-types-for 'script'",
		];
	}
	event.headers.set("Content-Security-Policy", csp.join("; "));
};
