import { component$ } from "@builder.io/qwik";

interface CommentsProp {
	count: string;
}
export default component$<CommentsProp>(({ count }) => {
	return (
		<>
			<button
				class="mb-[9.5px] text-center text-xs leading-[11px] max-md:mb-[4.5px] max-md:max-w-[60px] max-md:text-[11px] max-md:leading-[14.5px] max-sm:mb-[7px] max-sm:text-[9px]"
				data-hs-overlay="#hs-overlay-bottom"
				type="button"
			>
				View all {count} Comments
			</button>
		</>
	);
});
