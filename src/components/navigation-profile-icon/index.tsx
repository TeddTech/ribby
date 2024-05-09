import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";

export default component$(() => {
	const loc = useLocation();
	const session = useAuthSession();
	const isLogInModal = !session.value
		? "#hs-modal-signin"
		: "hs-modal-no-action";
	const href = !session.value ? "#" : "/home";
	const underline =
		loc.url.pathname === `/${session.value?.user.handle}/`
			? "border-b border-gray-400"
			: "";
	return (
		<a href={href} data-hs-overlay={isLogInModal}>
			<div class={`${underline} p-1`}>
				<svg
					class="size-8 flex-shrink-0 text-gray-800 dark:text-white"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<title>Personal Profile Icon</title>
					<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
					<circle cx="12" cy="7" r="4" />
				</svg>
			</div>
		</a>
	);
});
