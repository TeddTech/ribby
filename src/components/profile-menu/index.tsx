import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
import ProfilePhotoIcon from "../profile-photo-icon";
import SignoutModal from "../signout-modal";

export default component$(() => {
	const session = useAuthSession();
	return (
		<>
			<div class="flex justify-end p-2">
				<button
					type="button"
					class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
					data-hs-overlay="#hs-overlay-right"
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
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</button>
			</div>

			<div
				id="hs-overlay-right"
				class="hs-overlay fixed end-0 top-0 z-[80] hidden h-full w-full translate-x-full transform border-s bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-gray-700 dark:bg-gray-800 sm:max-w-xs"
				// @ts-ignore
				tabindex="-1"
			>
				<div class="flex items-center justify-between rounded-t-lg border-b bg-gray-100 px-4 py-3 dark:border-gray-700 dark:bg-gray-700">
					<div class="flex items-center">
						<ProfilePhotoIcon size="47px" />
						<div class="-m-2 rounded-t-lg bg-gray-100 dark:bg-gray-700">
							<p class="text-sm text-gray-500 dark:text-gray-400">
								Signed in as
							</p>
							<p class="text-sm font-medium text-gray-800 dark:text-gray-300">
								{session.value?.user.handle || "handle-staging"}
							</p>
						</div>
					</div>
					{/* <h3 class="text-base font-bold text-gray-800 dark:text-white">
						Offcanvas title
					</h3> */}
					<button
						type="button"
						class="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700"
						data-hs-overlay="#hs-overlay-right"
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
							<title>Close Menu Button</title>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
				<div class="p-4">
					<div class="py-2 first:pt-0 last:pb-0">
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
							Requests
						</a>
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
							Downloads
						</a>
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
							Team Account
						</a>
					</div>
					<hr />
					<div class="py-2 first:pt-0 last:pb-0">
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
							Upgrade License
						</a>
					</div>
					<hr />
					<div class="py-2 first:pt-0 last:pb-0">
						<a
							class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#"
						>
							Account Settings
						</a>

						<button
							type="button"
							class="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:underline focus:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							data-hs-overlay="#hs-stacked-overlays-2"
							data-hs-overlay-options='{
				"isClosePrev": false
			  }'
						>
							Sign out
						</button>
					</div>
				</div>
			</div>
			<SignoutModal />
		</>
	);
});
