import { component$, useSignal } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
import TextEditor from "../text-editor";

export default component$(() => {
	const clickedCommentButton = useSignal<boolean>(false);
	const isCommentsOpen = useSignal<boolean>(false);
	const session = useAuthSession();
	const isLogInModal = !session.value
		? "#hs-modal-signin"
		: "#hs-overlay-bottom";
	return (
		<>
			<button
				class="text-[17px] max-sm:text-sm"
				type="button"
				data-hs-overlay={isLogInModal}
				onClick$={() => {
					if (session.value) {
						clickedCommentButton.value = true;
					}
				}}
			>
				💬
			</button>

			<div
				id="hs-overlay-bottom"
				class="hs-overlay fixed inset-x-0 bottom-0 z-[80] hidden size-full max-h-[90%] translate-y-full transform rounded-t-3xl border-b bg-white transition-all duration-500 hs-overlay-open:translate-y-0 dark:border-neutral-700 dark:bg-neutral-800"
				tabIndex={-1}
				onTransitionEnd$={() => {
					isCommentsOpen.value = !isCommentsOpen.value;
					clickedCommentButton.value = !!(
						clickedCommentButton.value && isCommentsOpen.value
					);
				}}
			>
				<div class="flex items-center justify-between border-b px-4 py-3 dark:border-neutral-700">
					<h3 class="mx-auto font-bold text-gray-800 dark:text-white">
						{clickedCommentButton.value ? "Post a comment" : "View comments"}
					</h3>
					<button
						type="button"
						class="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
						data-hs-overlay="#hs-overlay-bottom"
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
					{clickedCommentButton.value && <TextEditor />}
					<p class="text-gray-800 dark:text-neutral-400">
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.
					</p>
				</div>
			</div>
		</>
	);
});
