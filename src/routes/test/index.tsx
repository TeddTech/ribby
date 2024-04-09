import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<button
				type="button"
				class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
				data-hs-overlay="#hs-slide-down-animation-modal"
			>
				Open modal
			</button>
			<div
				id="hs-slide-down-animation-modal"
				class="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden size-full overflow-y-auto overflow-x-hidden"
			>
				<div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
					<div class="pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
						<div class="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
							<h3 class="font-bold text-gray-800 dark:text-white">
								Modal title
							</h3>
							<button
								type="button"
								class="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700"
								data-hs-overlay="#hs-slide-down-animation-modal"
							>
								<span class="sr-only">Close</span>
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
						<div class="overflow-y-auto p-4">
							<p class="mt-1 text-gray-800 dark:text-gray-400">
								This is a wider card with supporting text below as a natural
								lead-in to additional content.
							</p>
						</div>
						<div class="flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-gray-700">
							<button
								type="button"
								class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800"
								data-hs-overlay="#hs-slide-down-animation-modal"
							>
								Close
							</button>
							<button
								type="button"
								class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
							>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
