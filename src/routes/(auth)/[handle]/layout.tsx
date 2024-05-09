import { Slot, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
export { useFollowers } from "~/components/follow-button";

export default component$(() => {
	const loc = useLocation();
	return (
		<>
			<div class="relative mx-auto mb-6 mt-1.5 box-border h-auto shrink-0 font-semibold opacity-60">
				{loc.params.handle}
			</div>
			<Slot />
		</>
	);
});
