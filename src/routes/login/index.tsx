import type { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Login from "~/components/login";

export const onRequest: RequestHandler = (event) => {
	const session: Session | null = event.sharedMap.get("session");
	if (session && new Date(session.expires) > new Date()) {
		throw event.redirect(302, `/${session.user.handle}`);
	}
};

export const onGet: RequestHandler = (event) => {
	if (event.query.get("callbackUrl")) {
		event.cookie.set(
			"__Secure-next-auth.callback-url",
			`${event.query.get("callbackUrl")}`,
			{
				secure: true,
				httpOnly: true,
				path: "/",
				sameSite: "lax",
			},
		);
		event.cookie.set(
			"next-auth.callback-url",
			`${event.query.get("callbackUrl")}`,
			{
				httpOnly: true,
				path: "/",
				sameSite: "lax",
			},
		);
	} else {
		event.cookie.set("__Secure-next-auth.callback-url", "/home/", {
			secure: true,
			httpOnly: true,
			path: "/",
			sameSite: "lax",
		});
		event.cookie.set("next-auth.callback-url", "/home/", {
			httpOnly: true,
			path: "/",
			sameSite: "lax",
		});
	}
};

export default component$(() => {
	return (
		<>
			<div class="p-3 pb-10">
				<div class="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
					<Login />
				</div>
			</div>
		</>
	);
});
