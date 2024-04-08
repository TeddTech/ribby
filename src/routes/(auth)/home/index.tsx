import type { Session } from "@auth/core/types";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = (event) => {
	const session: Session | null = event.sharedMap.get("session");
	console.log("HOME PROXY - ", session);
	throw event.redirect(302, `/${session?.user.handle}`);
};
