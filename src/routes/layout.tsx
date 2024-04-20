import {
	Slot,
	component$,
	createContextId,
	useContextProvider,
	useSignal,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.builder.io/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};

export interface BooleanContext {
	value: boolean;
}
export const isProfilePageContext =
	createContextId<BooleanContext>("isProfilePage");

export default component$(() => {
	const isProfilePage = useSignal();
	useContextProvider(isProfilePageContext, isProfilePage);
	return (
		<>
			<Header />
			<main>
				<Slot />
			</main>
			<Footer />
		</>
	);
});
