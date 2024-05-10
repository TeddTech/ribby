import { component$ } from "@builder.io/qwik";
import DiscoveryPosts from "../discovery-posts";

export default component$(() => {
	return (
		<>
			<div class="mx-auto w-full max-w-5xl px-1">
				<nav
					class="sticky top-0 z-[5] flex overflow-hidden rounded-md border dark:border-neutral-700"
					aria-label="Tabs"
					role="tablist"
				>
					<button
						type="button"
						class="active relative min-w-0 flex-1 overflow-hidden border-b-2 border-s bg-white px-4 py-2 text-center text-lg font-medium text-gray-500 first:border-s-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:border-b-neutral-700 dark:border-l-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-400 dark:hs-tab-active:border-b-blue-600 dark:hs-tab-active:text-white xs:text-xl sm:text-2xl"
						id="bar-with-underline-item-1"
						data-hs-tab="#bar-with-underline-1"
						aria-controls="bar-with-underline-1"
						role="tab"
					>
						🎟️
					</button>
					<button
						type="button"
						class="relative min-w-0 flex-1 overflow-hidden border-b-2 border-s bg-white px-4 py-2 text-center text-lg font-medium text-gray-500 first:border-s-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:border-b-neutral-700 dark:border-l-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-400 dark:hs-tab-active:border-b-blue-600 dark:hs-tab-active:text-white xs:text-xl sm:text-2xl"
						id="bar-with-underline-item-2"
						data-hs-tab="#bar-with-underline-2"
						aria-controls="bar-with-underline-2"
						role="tab"
					>
						🎭
					</button>
					<button
						type="button"
						class="relative min-w-0 flex-1 overflow-hidden border-b-2 border-s bg-white px-4 py-2 text-center text-lg font-medium text-gray-500 first:border-s-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:border-b-neutral-700 dark:border-l-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-400 dark:hs-tab-active:border-b-blue-600 dark:hs-tab-active:text-white xs:text-xl sm:text-2xl"
						id="filter-posts-by-location"
						data-hs-tab="#bar-with-underline-3"
						aria-controls="bar-with-underline-3"
						role="tab"
					>
						📍
					</button>
					<button
						type="button"
						class="relative min-w-0 flex-1 overflow-hidden border-b-2 border-s bg-white px-4 py-2 text-center text-lg font-medium text-gray-500 first:border-s-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:border-b-neutral-700 dark:border-l-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-400 dark:hs-tab-active:border-b-blue-600 dark:hs-tab-active:text-white xs:text-xl sm:text-2xl"
						id="bar-with-underline-item-4"
						data-hs-tab="#bar-with-underline-4"
						aria-controls="bar-with-underline-4"
						role="tab"
					>
						📣
					</button>
				</nav>

				<div class="mt-3">
					<div
						id="bar-with-underline-1"
						role="tabpanel"
						aria-labelledby="bar-with-underline-item-1"
					>
						<DiscoveryPosts />
					</div>
					<div
						id="bar-with-underline-2"
						class="hidden"
						role="tabpanel"
						aria-labelledby="bar-with-underline-item-2"
					>
						<p class="text-gray-500 dark:text-neutral-400">
							This is the{" "}
							<em class="font-semibold text-gray-800 dark:text-neutral-200">
								second
							</em>{" "}
							item's tab body.
						</p>
					</div>
					<div
						id="bar-with-underline-3"
						class="hidden"
						role="tabpanel"
						aria-labelledby="filter-posts-by-location"
					>
						<p class="text-gray-500 dark:text-neutral-400">
							This is the{" "}
							<em class="font-semibold text-gray-800 dark:text-neutral-200">
								third
							</em>{" "}
							item's tab body.
						</p>
					</div>
					<div
						id="bar-with-underline-4"
						class="hidden"
						role="tabpanel"
						aria-labelledby="bar-with-underline-item-4"
					>
						<p class="text-gray-500 dark:text-neutral-400">
							This is the{" "}
							<em class="font-semibold text-gray-800 dark:text-neutral-200">
								fourth
							</em>{" "}
							item's tab body.
						</p>
					</div>
				</div>
			</div>
		</>
	);
});
