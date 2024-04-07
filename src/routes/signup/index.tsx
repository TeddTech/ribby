import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Providers from "~/components/providers";

export const onRequest: RequestHandler = (event) => {
	if (event.query.get("callbackUrl")) {
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
			<div class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
				<div class="p-4 sm:p-7">
					<div class="text-center">
						<h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
							Sign up
						</h1>
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
							Already have an account?
							<a
								class="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="/login"
							>
								{" "}
								Log in here
							</a>
						</p>
					</div>

					<div class="mt-5">
						<Providers />

						<div class="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
							Or
						</div>
						{/* <!-- Form --> */}
						<form>
							<div class="grid gap-y-4">
								{/* <!-- Form Group --> */}
								<div>
									<label for="email" class="mb-2 block text-sm dark:text-white">
										Email address
									</label>
									<div class="relative">
										<input
											type="email"
											id="email"
											name="email"
											class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
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
									<p class="mt-2 hidden text-xs text-red-600" id="email-error">
										Please include a valid email address so we can get back to
										you
									</p>
								</div>
								{/* <!-- End Form Group --> */}

								{/* <!-- Form Group --> */}
								<div>
									<label
										for="password"
										class="mb-2 block text-sm dark:text-white"
									>
										Password
									</label>
									<div class="relative">
										<input
											type="password"
											id="password"
											name="password"
											class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
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
								{/* <!-- End Form Group --> */}

								{/* <!-- Form Group --> */}
								<div>
									<label
										for="confirm-password"
										class="mb-2 block text-sm dark:text-white"
									>
										Confirm Password
									</label>
									<div class="relative">
										<input
											type="password"
											id="confirm-password"
											name="confirm-password"
											class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
											required
											aria-describedby="confirm-password-error"
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
										id="confirm-password-error"
									>
										Password does not match the password
									</p>
								</div>
								{/* <!-- End Form Group --> */}

								{/* <!-- Checkbox --> */}
								<div class="flex items-center">
									<div class="flex">
										<input
											id="remember-me"
											name="remember-me"
											type="checkbox"
											class="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
										/>
									</div>
									<div class="ms-3">
										<label for="remember-me" class="text-sm dark:text-white">
											I accept the{" "}
											<a
												class="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
												href="blank"
											>
												Terms and Conditions
											</a>
										</label>
									</div>
								</div>
								{/* <!-- End Checkbox --> */}

								<button
									type="submit"
									class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								>
									Sign up
								</button>
							</div>
						</form>
						{/* <!-- End Form --> */}
					</div>
				</div>
			</div>
		</>
	);
});
