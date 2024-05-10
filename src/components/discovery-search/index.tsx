import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<div class="mx-auto mb-[9px] mt-[1px] w-full max-w-xs rounded-full border-[1px] border-gray-200 hover:outline-none hover:ring-1 hover:ring-gray-300 dark:border-gray-700 dark:hover:ring-gray-600 sm:max-w-sm md:max-w-md">
				<label for="hs-trailing-button-add-on-with-icon" class="sr-only">
					Label
				</label>
				<div class="flex gap-[2px]">
					<input
						placeholder="Search events, performers, venues and more!"
						type="text"
						id="hs-trailing-button-add-on-with-icon"
						name="hs-trailing-button-add-on-with-icon"
						class="block h-9 w-full rounded-s-full border-none border-gray-200 py-3 pl-4 pr-2 text-sm text-black placeholder:text-xs hover:border-gray-300 hover:outline-none hover:ring-gray-300 focus:z-10 focus:border-r-[1px] focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:border-none dark:border-gray-700 dark:bg-[#171717] dark:text-white dark:hover:border-gray-300 dark:hover:ring-gray-600 dark:focus:ring-gray-600 sm:placeholder:text-sm"
					/>
					<button
						type="button"
						class="text-gray-40 inline-flex size-9 flex-shrink-0 items-center justify-center gap-x-2 rounded-e-full border-0 border-l-0 border-none border-gray-200 text-sm font-semibold focus:border-[1px] focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-600"
					>
						<svg
							class="mr-1 size-4 flex-shrink-0"
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
							<title>Discovery Search</title>
							<circle cx="11" cy="11" r="8" />
							<path d="m21 21-4.3-4.3" />
						</svg>
					</button>
				</div>
			</div>
		</>
	);
});
