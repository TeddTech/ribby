import { component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";
import { isProfilePageContext } from "~/routes/layout";
import Logo from "../logo";
import ProfileMenu from "../profile-menu";
import ProfilePlus from "../profile-plus";

export default component$(() => {
	const isProfilePage = useContext(isProfilePageContext);
	const isProfile = useSignal<boolean>(false);
	useTask$(({ track }) => {
		track(isProfile);
		const value = isProfilePage.value;
		isProfile.value = value;
	});
	return (
		<>
			<header class="z-1000 flex w-full flex-wrap bg-white text-sm dark:bg-neutral-900 sm:flex-nowrap sm:justify-start">
				<div class="relative mx-auto my-2 w-full max-w-[86rem] px-4 sm:px-6">
					<nav
						class={`${
							isProfile.value
								? "flex flex-col items-center justify-between xs:flex-row"
								: "sm:flex sm:items-center sm:justify-between"
						} border-b py-1 dark:border-neutral-700`}
						aria-label="Global"
					>
						<div class="flex items-center justify-between">
							<div
								class={`flex max-w-16 ${
									isProfile.value && "flex-col"
								} my-3 items-center xs:flex-row`}
							>
								<a href="/" class="z-50 flex flex-row items-center">
									<Logo isNavBar={false} />
									<p class="px-2 text-2xl font-semibold">Ribby</p>
								</a>
							</div>
							{!isProfile.value && (
								<div class="sm:hidden">
									<button
										type="button"
										class="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-lg border bg-white p-2 align-middle text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
										data-hs-collapse="#navbar-collapse-with-animation"
										aria-controls="navbar-collapse-with-animation"
										aria-label="Toggle navigation"
									>
										Menu
										<svg
											class="size-4 hs-overlay-open:hidden"
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
											<title>Navigation Menu</title>
											<circle cx="12" cy="12" r="1" />
											<circle cx="12" cy="5" r="1" />
											<circle cx="12" cy="19" r="1" />
										</svg>
									</button>
								</div>
							)}
						</div>
						{!isProfile.value && (
							<div
								id="navbar-collapse-with-animation"
								class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
							>
								<div class="mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0 sm:ps-7">
									<>
										<a
											class="font-semibold text-gray-500 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 sm:py-6"
											href="/pricing"
											aria-current="page"
										>
											Pricing
										</a>
										<a
											class="font-semibold text-gray-500 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 sm:py-6"
											href="/examples"
										>
											Examples
										</a>
										<a
											class="font-semibold text-gray-500 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 sm:py-6"
											href="/tutorials"
										>
											Tutorials
										</a>
										<div class="hs-dropdown [--adaptive:none] [--strategy:static] sm:py-4 sm:[--strategy:fixed] sm:[--trigger:hover]">
											<button
												type="button"
												class="flex w-full items-center font-medium text-gray-500 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
											>
												More
												<svg
													class="ms-2 size-4 flex-shrink-0"
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
													<title>Extended Site Navigation</title>
													<path d="m6 9 6 6 6-6" />
												</svg>
											</button>

											<div class="hs-dropdown-menu top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border">
												<a
													class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
													href="/about"
												>
													About
												</a>
												<div class="hs-dropdown relative [--adaptive:none] [--strategy:static] sm:[--strategy:absolute] sm:[--trigger:hover]">
													<button
														type="button"
														class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
													>
														Sub Menu
														<svg
															class="ms-2 size-4 flex-shrink-0 sm:-rotate-90"
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
															<title>Further Exteded Site Navigation</title>
															<path d="m6 9 6 6 6-6" />
														</svg>
													</button>

													<div class="hs-dropdown-menu end-full top-0 z-10 !mx-[10px] hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-end-5 before:top-0 before:h-full before:w-5 hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 sm:mt-2 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border">
														<a
															class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
															href="#"
														>
															About
														</a>
														<a
															class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
															href="#"
														>
															Downloads
														</a>
														<a
															class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
															href="#"
														>
															Team Account
														</a>
													</div>
												</div>

												<a
													class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
													href="/help"
												>
													Help
												</a>
												<a
													class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
													href="/blog"
												>
													Blog
												</a>
											</div>
										</div>
									</>
									<div class="relative box-border flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-7">
										<a
											class="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 sm:my-6 sm:border-s sm:border-gray-300 sm:ps-6"
											href="/login"
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
												<title>Header Login Personal Profile Icon</title>
												<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
												<circle cx="12" cy="7" r="4" />
											</svg>
											<p class="ml-4">Log in</p>
										</a>
										<div class="relative box-border flex shrink-0 flex-row items-center gap-5 pb-3 pl-0 pr-1 sm:pb-0">
											<div>
												<ThemeSelecter />
											</div>
											<div>
												<ThemeSwitcher />
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{isProfile.value && (
							<div class="mt-0 flex flex-row items-center justify-end gap-x-2 gap-y-0 px-1 pl-0 sm:gap-x-7">
								<div class="relative box-border flex shrink-0 flex-row items-center justify-between gap-0">
									<div>
										<ProfilePlus />
									</div>
									<div>
										<ProfileMenu />
									</div>
								</div>

								<div class="relative box-border flex shrink-0 flex-row items-center justify-between gap-2 sm:gap-5">
									<div>
										<ThemeSelecter />
									</div>
									<div>
										<ThemeSwitcher />
									</div>
								</div>
							</div>
						)}
					</nav>
				</div>
			</header>
		</>
	);
});

export const ThemeSelecter = component$(() => {
	return (
		<div class="hs-dropdown">
			<button
				type="button"
				class="hs-dropdown-toggle hs-dark-mode group flex items-center font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500"
			>
				<svg
					class="block size-4 hs-dark-mode-active:hidden"
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
					<title>Select to for dark theme mode</title>
					<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
				</svg>
				<svg
					class="hidden size-4 hs-dark-mode-active:block"
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
					<title>Select to for light theme mode</title>
					<circle cx="12" cy="12" r="4" />
					<path d="M12 2v2" />
					<path d="M12 20v2" />
					<path d="m4.93 4.93 1.41 1.41" />
					<path d="m17.66 17.66 1.41 1.41" />
					<path d="M2 12h2" />
					<path d="M20 12h2" />
					<path d="m6.34 17.66-1.41 1.41" />
					<path d="m19.07 4.93-1.41 1.41" />
				</svg>
			</button>

			<div
				id="selectThemeDropdown"
				class="hs-dropdown-menu z-10 mb-2 mt-2 hidden origin-bottom-left space-y-1 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[margin,opacity] duration-300 hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
			>
				<button
					type="button"
					class="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
					data-hs-theme-click-value="default"
				>
					Light
				</button>
				<button
					type="button"
					class="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
					data-hs-theme-click-value="dark"
				>
					Dark
				</button>
				<button
					type="button"
					class="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
					data-hs-theme-click-value="auto"
				>
					Auto (System)
				</button>
			</div>
		</div>
	);
});

export const ThemeSwitcher = component$(() => {
	return (
		<input
			data-hs-theme-switch=""
			class="relative h-7 w-[3.25rem] cursor-pointer appearance-none rounded-full border-2 border-transparent bg-gray-100 ring-1 ring-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-6 before:translate-x-0 before:transform before:rounded-full

before:bg-white before:shadow before:ring-0 before:transition before:duration-200 before:ease-in-out after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:h-[.8125rem] after:w-[.8125rem] after:transform after:bg-[length:.8125em_.8125em]

after:bg-[right_center] after:bg-no-repeat after:opacity-70 after:transition-all after:duration-200 after:ease-in-out checked:bg-blue-600 checked:bg-none checked:before:translate-x-full checked:before:bg-blue-200 checked:after:end-auto checked:after:start-1.5 focus:border-slate-700 focus:outline-none focus:ring-slate-700"
			type="checkbox"
			id="darkSwitch"
		/>
	);
});
