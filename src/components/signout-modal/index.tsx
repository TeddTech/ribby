import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
	const signOut = useAuthSignout();
	return (
		<>
			<div
				id="hs-stacked-overlays-2"
				class="hs-overlay fixed start-0 top-0 z-[81] hidden size-full overflow-y-auto overflow-x-hidden"
			>
				<div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xs">
					<div class="relative flex flex-col rounded-xl bg-white shadow-lg dark:bg-neutral-900">
						<div class="absolute end-2 top-2">
							<button
								type="button"
								class="flex size-7 items-center justify-center rounded-lg border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-neutral-700"
								data-hs-overlay="#hs-stacked-overlays-2"
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
									<title>Exit Sign Out Modal</title>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
							</button>
						</div>

						<div class="overflow-y-auto p-4 text-center sm:p-10">
							<span class="mb-4 inline-flex size-[62px] items-center justify-center rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:border-yellow-600 dark:bg-yellow-700 dark:text-yellow-100">
								<svg
									class="size-5 flex-shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<title>Warning Sign</title>
									<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
								</svg>
							</span>

							<h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
								Sign out
							</h3>
							<p class="text-gray-500 dark:text-neutral-500">
								Are you sure you would like to sign out of your Ribby account?
							</p>

							<div class="mt-6 grid gap-y-2">
								<Form action={signOut}>
									<input
										type="hidden"
										name="callbackUrl"
										value="/logged-out/"
									/>
									<button
										type="submit"
										class="inline-flex w-full items-center justify-center gap-2 rounded-lg border bg-white px-4 py-2.5 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
									>
										Sign out
									</button>
								</Form>
								<button
									type="button"
									class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
									data-hs-overlay="#hs-stacked-overlays-2"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
