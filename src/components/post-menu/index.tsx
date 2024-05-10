import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			{" "}
			<div class="hs-tooltip -mt-1 inline-block">
				<button
					type="button"
					class="hs-tooltip-toggle inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700"
					data-hs-overlay="#post-menu-overlay-bottom"
				>
					<svg
						class="size-5 hs-overlay-open:hidden"
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
						<title>Post Menu</title>
						<circle cx="5" cy="12" r="1" />
						<circle cx="12" cy="12" r="1" />
						<circle cx="19" cy="12" r="1" />
					</svg>
					<title>Post Menu</title>

					<span
						class="hs-tooltip-content invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-neutral-700"
						role="tooltip"
					>
						Post Menu
					</span>
				</button>
			</div>
			<div
				id="post-menu-overlay-bottom"
				class="hs-overlay fixed inset-x-0 bottom-0 z-[80] hidden size-full max-h-[90%] translate-y-full transform rounded-t-3xl border-b bg-white transition-all duration-500 hs-overlay-open:translate-y-0 dark:border-neutral-700 dark:bg-neutral-800"
				tabIndex={-1}
			>
				<div class="flex items-center justify-between border-b px-4 py-3 dark:border-neutral-700">
					<h3 class="mx-auto font-bold text-gray-800 dark:text-white">
						Post Menu
					</h3>
					<button
						type="button"
						class="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
						data-hs-overlay="#post-menu-overlay-bottom"
					>
						<span class="sr-only">Close modal</span>
						<svg
							class="size-4 flex-shrink-0"
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
							<title>Close Button</title>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
				<div class="p-4">
					<p class="text-gray-800 dark:text-neutral-400">
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.
					</p>
				</div>
			</div>
		</>
	);
});
