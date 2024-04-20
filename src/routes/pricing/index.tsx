import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
				<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
					<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
						Pricing
					</h2>
					<p class="mt-1 text-gray-600 dark:text-gray-400">
						Whatever your status, our offers evolve according to your needs.
					</p>
				</div>

				<div class="flex items-center justify-center">
					<label class="me-3 min-w-14 text-sm text-gray-500 dark:text-gray-400">
						Monthly
					</label>

					<input
						type="checkbox"
						id="toggle-count-switch"
						class="relative h-7 w-[3.25rem] cursor-pointer rounded-full border-transparent bg-gray-100 p-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0 before:transition before:duration-200 before:ease-in-out checked:border-blue-600

    checked:bg-none checked:text-blue-600 checked:before:translate-x-full checked:before:bg-white focus:ring-blue-600 focus:checked:border-blue-600 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:before:bg-gray-400 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:checked:before:bg-white dark:focus:ring-offset-gray-600"
						checked
					/>

					<label class="relative ms-3 min-w-14 text-sm text-gray-500 dark:text-gray-400">
						Annual
						<span class="absolute -top-12 end-[36px] start-auto sm:-end-28 sm:-top-10">
							<span class="flex items-center">
								<svg
									class="-me-6 hidden h-8 w-14 sm:inline"
									width="45"
									height="25"
									viewBox="0 0 45 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>
										Arrow Pointing to Switch from Monthly Pricing Vs Anual
										Pricing
									</title>
									<path
										d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
										fill="currentColor"
										class="fill-gray-300 dark:fill-gray-700"
									/>
								</svg>
								<span class="mt-3 inline-block whitespace-nowrap rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white">
									Save up to 10%
								</span>
							</span>
						</span>
					</label>
				</div>

				<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
					<div class="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-gray-700">
						<h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">
							Free
						</h4>
						<span class="mt-7 text-5xl font-bold text-gray-800 dark:text-gray-200">
							Free
						</span>
						<p class="mt-2 text-sm text-gray-500">Forever free</p>

						<ul class="mt-7 space-y-2.5 text-sm">
							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">1 user</span>
							</li>

							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">
									Plan features
								</span>
							</li>

							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">
									Product support
								</span>
							</li>
						</ul>

						<a
							class="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-400 dark:hover:bg-blue-900"
							href="#"
						>
							Sign up
						</a>
					</div>

					<div class="flex flex-col rounded-xl border-2 border-blue-600 p-8 text-center shadow-xl dark:border-blue-700">
						<p class="mb-3">
							<span class="inline-flex items-center gap-1.5 rounded-lg bg-blue-100 px-3 py-1.5 text-xs font-semibold uppercase text-blue-800 dark:bg-blue-600 dark:text-white">
								Most popular
							</span>
						</p>
						<h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">
							Startup
						</h4>
						<span class="mx-auto mt-5 flex text-5xl font-bold text-gray-800 dark:text-gray-200">
							<span class="-me-2 px-2 text-2xl font-bold">$</span>
							<p
								class="mr-6"
								data-hs-toggle-count='{
								"target": "#toggle-count-switch",
								"min": 49,
								"max": 39
								}'
							>
								39
							</p>
						</span>
						<p class="mt-2 text-sm text-gray-500">
							All the basics for starting a new business
						</p>

						<ul class="mt-7 space-y-2.5 text-sm">
							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">2 users</span>
							</li>

							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">
									Plan features
								</span>
							</li>

							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">
									Product support
								</span>
							</li>
						</ul>

						<a
							class="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
							href="#"
						>
							Sign up
						</a>
					</div>

					<div class="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-gray-700">
						<h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">
							Team
						</h4>
						<span class="mx-auto mt-5 flex text-5xl font-bold text-gray-800 dark:text-gray-200">
							<span class="-me-2 px-2 text-2xl font-bold">$</span>
							<p
								class="mr-5"
								data-hs-toggle-count='{
								"target": "#toggle-count-switch",
								"min": 99,
								"max": 89
								}'
							>
								89
							</p>
						</span>
						<p class="mt-2 text-sm text-gray-500">
							Everything you need for a growing business
						</p>

						<ul class="mt-7 space-y-2.5 text-sm">
							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">5 users</span>
							</li>

							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">
									Plan features
								</span>
							</li>

							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">
									Product support
								</span>
							</li>
						</ul>

						<a
							class="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-400 dark:hover:bg-blue-900"
							href="#"
						>
							Sign up
						</a>
					</div>

					<div class="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-gray-700">
						<h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">
							Enterprise
						</h4>
						<span class="mx-auto mt-5 flex text-5xl font-bold text-gray-800 dark:text-gray-200">
							<span class="-me-2 px-2 text-2xl font-bold">$</span>
							<p
								class="mr-6"
								data-hs-toggle-count='{
								"target": "#toggle-count-switch",
								"min": 149,
								"max": 129
								}'
							>
								129
							</p>
						</span>
						<p class="mt-2 text-sm text-gray-500">
							Advanced features for scaling your business
						</p>

						<ul class="mt-7 space-y-2.5 text-sm">
							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">10 users</span>
							</li>

							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">
									Plan features
								</span>
							</li>

							<li class="flex space-x-2">
								<svg
									class="mt-0.5 size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
									<title>Check Mark</title>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								<span class="text-gray-800 dark:text-gray-400">
									Product support
								</span>
							</li>
						</ul>

						<a
							class="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-400 dark:hover:bg-blue-900"
							href="#"
						>
							Sign up
						</a>
					</div>
				</div>

				<div class="mt-20 lg:mt-32">
					<div class="mb-10 lg:mb-20 lg:text-center">
						<h3 class="text-2xl font-semibold dark:text-white">
							Compare plans
						</h3>
					</div>

					<div class="space-y-24 lg:hidden">
						<section>
							<div class="mb-4 px-1 xs:px-4">
								<h2 class="text-lg font-medium leading-6 text-gray-800">
									Free
								</h2>
							</div>
							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									Financial data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Open/High/Low/Close
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Price-volume difference indicator
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									On-chain data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Network growth
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Average token age consumed
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Exchange flow
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total ERC20 exchange funds flow
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Transaction volume
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total circulation (beta)
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Velocity of tokens (beta)
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											ETH gas used
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									Social data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Dev activity
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Topic search
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Relative social dominance
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total social volume
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>
								</tbody>
							</table>
						</section>

						<section>
							<div class="mb-4 px-1 xs:px-4">
								<h2 class="text-lg font-medium leading-6 text-gray-800">
									Startup
								</h2>
							</div>
							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									Financial data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Open/High/Low/Close
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Price-volume difference indicator
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									On-chain data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Network growth
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Average token age consumed
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Exchange flow
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total ERC20 exchange funds flow
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Transaction volume
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total circulation (beta)
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Velocity of tokens (beta)
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											ETH gas used
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									Social data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Dev activity
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Topic search
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Relative social dominance
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total social volume
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>
								</tbody>
							</table>
						</section>

						<section>
							<div class="mb-4 px-1 xs:px-4">
								<h2 class="text-lg font-medium leading-6 text-gray-800">
									Team
								</h2>
							</div>
							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									Financial data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Open/High/Low/Close
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Price-volume difference indicator
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									On-chain data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Network growth
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Average token age consumed
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Exchange flow
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total ERC20 exchange funds flow
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Transaction volume
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total circulation (beta)
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Velocity of tokens (beta)
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											ETH gas used
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									Social data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Dev activity
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Topic search
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Relative social dominance
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total social volume
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
												<title>Dash</title>
												<path d="M5 12h14" />
											</svg>

											<span class="sr-only">No</span>
										</td>
									</tr>
								</tbody>
							</table>
						</section>

						<section>
							<div class="mb-4 px-1 xs:px-4">
								<h2 class="text-lg font-medium leading-6 text-gray-800">
									Enterprise
								</h2>
							</div>
							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									Financial data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Open/High/Low/Close
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Price-volume difference indicator
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									On-chain data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Network growth
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Average token age consumed
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Exchange flow
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total ERC20 exchange funds flow
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Transaction volume
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total circulation (beta)
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Velocity of tokens (beta)
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											ETH gas used
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="w-full">
								<caption class="border-t border-gray-200 bg-gray-50 px-1 py-3 text-start text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white xs:px-4">
									Social data
								</caption>
								<thead>
									<tr>
										<th class="sr-only" scope="col">
											Feature
										</th>
										<th class="sr-only" scope="col">
											Included
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Dev activity
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Topic search
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Relative social dominance
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>

									<tr class="border-t border-gray-200 dark:border-gray-700">
										<th
											class="whitespace-nowrap px-1 py-5 text-start text-sm font-normal text-gray-600 dark:text-gray-400 xs:px-4"
											scope="row"
										>
											Total social volume
										</th>
										<td class="px-2 py-5 xs:pe-4">
											<svg
												class="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
												<title>Check Mark</title>
												<polyline points="20 6 9 17 4 12" />
											</svg>

											<span class="sr-only">Yes</span>
										</td>
									</tr>
								</tbody>
							</table>
						</section>
					</div>

					<div class="hidden lg:block">
						<table class="h-px w-full">
							<caption class="sr-only">Pricing plan comparison</caption>
							<thead class="sticky inset-x-0 top-0 bg-white dark:bg-slate-900">
								<tr>
									<th
										class="py-4 pe-6 ps-6 text-start text-sm font-medium text-gray-800"
										scope="col"
									>
										<div class="h-full" />
										<div class="col-span-1">
											<span class="sr-only">Feature by</span>
											<span class="dark:text-white">Plans</span>
										</div>
										<div class="h-6" />
									</th>

									<th
										class="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
										scope="col"
									>
										<div class="col-span-1">
											<div class="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-900">
												<div>
													<span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
														Free
													</span>
													<p class="text-xs text-gray-500">Free forever</p>
												</div>
												<div class="mt-2">
													<a
														class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800"
														href="#"
													>
														Get started
													</a>
												</div>
											</div>
										</div>
									</th>
									<th
										class="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
										scope="col"
									>
										<div class="col-span-1">
											<div class="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-900">
												<div>
													<span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
														Startup
													</span>
													<p class="text-xs text-gray-500">
														$39 per month billed annually
													</p>
												</div>
												<div class="mt-2">
													<a
														class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
														href="#"
													>
														Get started
													</a>
												</div>
											</div>
										</div>
									</th>
									<th
										class="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
										scope="col"
									>
										<div class="col-span-1">
											<div class="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-900">
												<div>
													<span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
														Team
													</span>
													<p class="text-xs text-gray-500">
														$89 per month billed annually
													</p>
												</div>
												<div class="mt-2">
													<a
														class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800"
														href="#"
													>
														Get started
													</a>
												</div>
											</div>
										</div>
									</th>
									<th
										class="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
										scope="col"
									>
										<div class="col-span-1">
											<div class="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-900">
												<div>
													<span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
														Enterprise
													</span>
													<p class="text-xs text-gray-500">
														$149 per month billed annually
													</p>
												</div>
												<div class="mt-2">
													<a
														class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800"
														href="#"
													>
														Get started
													</a>
												</div>
											</div>
										</div>
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
								<tr>
									<th
										class="bg-gray-50 py-3 ps-6 text-start font-bold text-gray-800 dark:bg-slate-800 dark:text-white"
										colSpan={5}
										scope="colgroup"
									>
										Financial data
									</th>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Open/High/Low/Close
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Price-volume difference indicator
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Not included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="bg-gray-50 py-3 ps-6 text-start font-bold text-gray-800 dark:bg-slate-800 dark:text-white"
										colSpan={5}
										scope="colgroup"
									>
										On-chain data
									</th>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Network growth
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Average token age consumed
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Not included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Exchange flow
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Not included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Total ERC20 exchange funds flow
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Not included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Transaction volume
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Total circulation (beta)
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Not included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Velocity of tokens (beta)
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Not included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										ETH gas used
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Not included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="bg-gray-50 py-3 ps-6 text-start font-bold text-gray-800 dark:bg-slate-800 dark:text-white"
										colSpan={5}
										scope="colgroup"
									>
										Social data
									</th>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Dev activity
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Topic search
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Relative social dominance
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>

								<tr>
									<th
										class="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-gray-400"
										scope="row"
									>
										Relative social dominance
									</th>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Free</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Startup</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-gray-600"
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
											<title>Dash</title>
											<path d="M5 12h14" />
										</svg>

										<span class="sr-only">Included in Team</span>
									</td>

									<td class="px-6 py-5">
										<svg
											class="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
											<title>Check Mark</title>
											<polyline points="20 6 9 17 4 12" />
										</svg>

										<span class="sr-only">Included in Enterprise</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
});
