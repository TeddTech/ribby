import type { Session } from "@auth/core/types";
import { Slot, component$, useContext, useTask$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import NavigationBar from "~/components/navigation-bar";
import { isProfilePageContext } from "../layout";

export const onRequest: RequestHandler = async (event) => {
	const session: Session | null = event.sharedMap.get("session");
	console.log("LAYOUT - ", session);
	if (!session || new Date(session.expires) < new Date()) {
		throw event.redirect(302, `/signup?callbackUrl=${event.url.pathname}`);
	}
};

export default component$(() => {
	const isProfilePage = useContext(isProfilePageContext);
	useTask$(() => {
		isProfilePage.value = true;
	});
	return (
		<>
			{/* <p>Profile Layout</p> */}
			<div class="relative box-border flex shrink-0 flex-row">
				<NavigationBar />
				<Slot />
			</div>
		</>
	);
});
