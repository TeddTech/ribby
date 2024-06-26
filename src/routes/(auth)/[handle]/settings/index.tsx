import type { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async (event) => {
	const session: Session | null = event.sharedMap.get("session");
	if (!session || new Date(session.expires) < new Date()) {
		throw event.redirect(302, `/signup?callbackUrl=${event.url.pathname}`);
	}
};

export default component$(() => {
	return (
		<>
			<div>Settings Page</div>
		</>
	);
});
