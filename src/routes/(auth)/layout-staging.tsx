import { Slot, component$, useContext, useTask$ } from "@builder.io/qwik";
import NavigationBar from "~/components/navigation-bar";
import { isProfilePageContext } from "../layout";

export default component$(() => {
	const isProfilePage = useContext(isProfilePageContext);
	useTask$(() => {
		isProfilePage.value = true;
	});
	return (
		<>
			<div class="relative box-border flex shrink-0 flex-row">
				<NavigationBar />
				<Slot />
			</div>
		</>
	);
});
