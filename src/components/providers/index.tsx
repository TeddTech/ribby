import type { PublicProvider } from "@auth/xata-adapter/node_modules/@auth/core/types";
import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { Form, server$, useLocation } from "@builder.io/qwik-city";
import { useAuthSignin } from "~/routes/plugin@auth";
import ProviderLogo from "../providerLogo";

const getProviders = server$(async function () {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Cookie: `_vercel_jwt=${this.cookie.get("_vercel_jwt")?.value}`,
		},
	};

	try {
		const response = await fetch(
			`https://${this.env.get("VERCEL_URL")}/api/auth/providers`,
			options,
		);
		const data = await response.json();
		return data;
	} catch (error) {
		const response = await fetch(
			`https://${this.env.get("VERCEL_BRANCH_URL")}/api/auth/providers`,
			options,
		);
		const data = await response.json();
		return data;
	}
});

export default component$(() => {
	const loc = useLocation();
	const signIn = useAuthSignin();
	const providers = useResource$(async () => {
		if (import.meta.env.VITE_VERCEL_ENV) {
			return await getProviders();
		}
		const response = await fetch(`${loc.url.origin}/api/auth/providers`);
		const data = await response.json();
		return data;
	});
	return (
		<>
			<Resource
				value={providers}
				onPending={() => (
					<>
						<div class="text-black">Loading...</div>
					</>
				)}
				onRejected={(error) => (
					<>
						<div class="text-black">
							Please reload Page due to the following error: {error.message}
						</div>
					</>
				)}
				onResolved={(providers) =>
					(Object.values(providers) as unknown as PublicProvider[]).map(
						(provider: PublicProvider) => (
							<div key={provider.id}>
								{provider.id === "spotify" && (
									<div class="flex items-center py-3 text-xs font-semibold uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
										sign in with music
									</div>
								)}
								{provider.id === "tiktok" && (
									<div class="flex items-center py-3 text-xs font-semibold uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
										sign in with socials
									</div>
								)}
								<Form action={signIn}>
									<input type="hidden" name="providerId" value={provider.id} />
									<button
										type="submit"
										class="my-1 inline-flex h-10 w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
									>
										<ProviderLogo providerId={provider.id} />
										Sign up with {provider.name}
									</button>
								</Form>
							</div>
						),
					)
				}
			/>
		</>
	);
});
