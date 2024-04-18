import type { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Providers from "~/components/providers";

export const onRequest: RequestHandler = (event) => {
	const session: Session | null = event.sharedMap.get("session");
	if (session && new Date(session.expires) > new Date()) {
		throw event.redirect(302, `/${session.user.handle}`);
	}
};

export const onGet: RequestHandler = (event) => {
	if (event.query.get("callbackUrl")) {
		event.cookie.set(
			"__Secure-next-auth.callback-url",
			`${event.query.get("callbackUrl")}`,
			{
				secure: true,
				httpOnly: true,
				path: "/",
				sameSite: "lax",
			},
		);
		event.cookie.set(
			"next-auth.callback-url",
			`${event.query.get("callbackUrl")}`,
			{
				httpOnly: true,
				path: "/",
				sameSite: "lax",
			},
		);
	} else {
		event.cookie.set("__Secure-next-auth.callback-url", "/home/", {
			secure: true,
			httpOnly: true,
			path: "/",
			sameSite: "lax",
		});
		event.cookie.set("next-auth.callback-url", "/home/", {
			httpOnly: true,
			path: "/",
			sameSite: "lax",
		});
	}
};

export default component$(() => {
	return (
		<>
			<div class="p-3">
				<div class="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
					<div class="p-4 sm:p-7">
						<div class="text-center">
							<h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
								Log in
							</h1>
							<p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
								Don't have an account yet?
								<a
									class="font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500"
									href="/signup"
								>
									{" "}
									Sign up here
								</a>
							</p>
						</div>

						<div class="mt-5">
							<Providers />
							<div class="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
								Or
							</div>

							<form>
								<div class="grid gap-y-4">
									<div>
										<label
											for="email"
											class="mb-2 block text-sm dark:text-white"
										>
											Email address
										</label>
										<div class="relative">
											<input
												type="email"
												id="email"
												name="email"
												class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
												required
												aria-describedby="email-error"
											/>
											<div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
												<svg
													class="size-5 text-red-500"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
													aria-hidden="true"
												>
													<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
												</svg>
											</div>
										</div>
										<p
											class="mt-2 hidden text-xs text-red-600"
											id="email-error"
										>
											Please include a valid email address so we can get back to
											you
										</p>
									</div>

									<div>
										<div class="flex items-center justify-between">
											<label
												for="password"
												class="mb-2 block text-sm dark:text-white"
											>
												Password
											</label>
											<a
												class="text-sm font-medium text-blue-600 decoration-2 hover:underline"
												href="../examples/html/recover-account.html"
											>
												Forgot password?
											</a>
										</div>
										<div class="relative">
											<input
												type="password"
												id="password"
												name="password"
												class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
												required
												aria-describedby="password-error"
											/>
											<div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
												<svg
													class="size-5 text-red-500"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
													aria-hidden="true"
												>
													<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
												</svg>
											</div>
										</div>
										<p
											class="mt-2 hidden text-xs text-red-600"
											id="password-error"
										>
											8+ characters required
										</p>
									</div>

									<div class="flex items-center">
										<div class="flex">
											<input
												id="remember-me"
												name="remember-me"
												type="checkbox"
												class="mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
											/>
										</div>
										<div class="ms-3">
											<label for="remember-me" class="text-sm dark:text-white">
												Remember me
											</label>
										</div>
									</div>

									<button
										type="submit"
										class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
									>
										Sign in
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
