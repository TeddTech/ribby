import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";
import MessageProviders from "../message-providers";

export default component$(() => {
	const session = useAuthSession();
	const loc = useLocation();
	const isLogInModal = !session.value ? "#hs-modal-signin" : "#message-modal";
	const isPersonalProfile = session.value?.user.handle === loc.params.handle;

	if (isPersonalProfile) {
		return (
			<>
				<button
					data-hs-overlay="#hs-vertically-centered-scrollable-modal-share-profile"
					type="button"
					class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white"
				>
					Share profile
				</button>
				<div
					id="hs-vertically-centered-scrollable-modal-share-profile"
					class="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden size-full overflow-y-auto overflow-x-hidden"
				>
					<div class="m-3 mt-0 flex h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
						<div class="pointer-events-auto flex max-h-full w-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-700/70">
							<div class="flex items-center justify-between border-b px-4 py-3 dark:border-neutral-700">
								<h3 class="font-bold text-gray-800 dark:text-white">
									Share profile
								</h3>
								<button
									type="button"
									class="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
									data-hs-overlay="#hs-vertically-centered-scrollable-modal-share-profile"
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
							<div class="overflow-y-auto p-4">Links and QR Code ...</div>
							<div class="flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-neutral-700">
								<button
									type="button"
									class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
									data-hs-overlay="#hs-vertically-centered-scrollable-modal-share-profile"
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
	}
	return (
		<>
			<button
				data-hs-overlay={isLogInModal}
				type="button"
				class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white"
			>
				<p class="mx-auto">Message</p>
			</button>
			<div
				id="message-modal"
				class="hs-overlay fixed inset-x-0 bottom-0 z-[80] hidden size-full max-h-[90%] translate-y-full transform rounded-t-3xl border-b bg-white transition-all duration-500 hs-overlay-open:translate-y-0 dark:border-neutral-700 dark:bg-neutral-800"
				tabIndex={-1}
			>
				<div class="flex items-center justify-between border-b px-4 py-3 dark:border-neutral-700">
					<h3 class="mx-auto font-bold text-gray-800 dark:text-white">
						<p class="ml-5">Message</p>
					</h3>
					<button
						type="button"
						class="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
						data-hs-overlay="#message-modal"
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
					<div class="flex items-center py-3 text-xs font-semibold uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
						message with socials
					</div>
					<MessageProviders />
				</div>
			</div>
		</>
	);
});
