import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

interface RequestButtonProps {
	hide?: boolean;
	label?: string;
}

export default component$<RequestButtonProps>(
	({ hide = false, label = "Request" }) => {
		const page = useLocation();
		const hideClass = hide ? "invisible" : "";
		const profileClass =
			"py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white";
		const discoveryClass = `${hideClass} text-center inline-flex items-center gap-x-2 font-semibold border border-transparent bg-blue-100 text-blue-900 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-600 dark:hover:bg-blue-800 dark:text-blue-100 px-3.5 py-1.5 text-xs rounded-[50px] max-md:px-3 max-md:text-xs max-md:leading-4 max-sm:px-2 max-sm:py-0.5 max-sm:text-xs`;
		const requestButtonClass =
			page.url.pathname === "/discovery/" ? discoveryClass : profileClass;
		return (
			<>
				<button
					class={requestButtonClass}
					type="button"
					onClick$={() => {
						const element = document.getElementById(
							"bar-with-underline-item-3",
						);
						if (element) {
							element.click();
							element.scrollIntoView({ behavior: "smooth" });
						}
					}}
				>
					<p class="mx-auto">{label}</p>
				</button>
			</>
		);
	},
);
