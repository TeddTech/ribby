import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";

export default component$(() => {
	return (
		<header class={styles.header}>
			<div class={styles.wrapper}>
				<div class={styles.logo}>
					<a href="/" title="qwik">
						<QwikLogo height={50} width={143} />
					</a>
				</div>
				<ul>
					<li>
						<a
							href="https://qwik.builder.io/docs/components/overview/"
							target="_blank"
							rel="noreferrer"
						>
							Docs
						</a>
					</li>
					<li>
						<a
							href="https://qwik.builder.io/examples/introduction/hello-world/"
							target="_blank"
							rel="noreferrer"
						>
							Examples
						</a>
					</li>
					<li>
						<a
							href="https://qwik.builder.io/tutorial/welcome/overview/"
							target="_blank"
							rel="noreferrer"
						>
							Tutorials
						</a>
					</li>
					<li>
						<ThemeSelecter />
					</li>
					<li>
						<ThemeSwitcher />
					</li>
				</ul>
			</div>
		</header>
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
					Default (Light)
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
