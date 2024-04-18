import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
				<div class="flex justify-end p-2">
					<button
						type="button"
						class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
						id="hs-dropright"
						aria-controls="sidebar-mini"
						aria-label="Toggle navigation"
					>
						<span class="sr-only">Toggle Navigation</span>
						<svg
							class="size-4 flex-shrink-0"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<title>Hamburger Menu</title>
							<path
								fill-rule="evenodd"
								d="M6.5 7.5v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3z"
							/>
						</svg>
					</button>
				</div>

				<div
					class="hs-dropdown-menu duration z-10 hidden w-72 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
					aria-labelledby="hs-dropright"
				>
					<div class="py-2 first:pt-0 last:pb-0">
						<span class="block px-3 py-2 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
							Create
						</span>
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
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
								<title>Emojie Raising Hand</title>
								<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
								<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
							</svg>
							Requests
						</a>
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
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
								<title>Doller Sign Emoji</title>
								<circle cx="8" cy="21" r="1" />
								<circle cx="19" cy="21" r="1" />
								<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
							</svg>
							Tips
						</a>
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
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
								<title>Setlist Emoji</title>
								<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
								<path d="M12 12v9" />
								<path d="m8 17 4 4 4-4" />
							</svg>
							Downloads
						</a>
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
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
								<title>Multile People Emoji</title>
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
								<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
							Team Account
						</a>
					</div>
					<div class="py-2 first:pt-0 last:pb-0">
						<span class="block px-3 py-2 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
							Contacts
						</span>
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="/help"
						>
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
								<title>
									Message Bubble With Addition Symbol Center in the Middle
								</title>
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
								<line x1="9" x2="15" y1="10" y2="10" />
								<line x1="12" x2="12" y1="7" y2="13" />
							</svg>
							Contact support
						</a>
					</div>
				</div>
			</div>
		</>
	);
});
