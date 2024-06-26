import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { Editor } from "@tiptap/core";
import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import styles from "./text-editor.css?inline";

export default component$(() => {
	useStyles$(styles);

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		const editor = new Editor({
			element:
				document.querySelector("#hs-editor-tiptap [data-hs-editor-field]") ??
				undefined,
			extensions: [
				Placeholder.configure({
					placeholder: "Add comment here",
					emptyNodeClass: "text-gray-800 dark:text-neutral-200",
				}),
				StarterKit,
				Paragraph.configure({
					HTMLAttributes: {
						class: "text-gray-800 dark:text-neutral-200",
					},
				}),
				Bold.configure({
					HTMLAttributes: {
						class: "font-bold",
					},
				}),
				Underline,
				Link.configure({
					HTMLAttributes: {
						class:
							"inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium dark:text-white",
					},
				}),
				BulletList.configure({
					HTMLAttributes: {
						class: "list-disc list-inside text-gray-800 dark:text-white",
					},
				}),
				OrderedList.configure({
					HTMLAttributes: {
						class: "list-decimal list-inside text-gray-800 dark:text-white",
					},
				}),
				ListItem,
				Blockquote.configure({
					HTMLAttributes: {
						class: "text-gray-800 sm:text-xl dark:text-white",
					},
				}),
			],
		});
		const actions = [
			{
				id: "#hs-editor-tiptap [data-hs-editor-bold]",
				fn: () => editor.chain().focus().toggleBold().run(),
			},
			{
				id: "#hs-editor-tiptap [data-hs-editor-italic]",
				fn: () => editor.chain().focus().toggleItalic().run(),
			},
			{
				id: "#hs-editor-tiptap [data-hs-editor-underline]",
				fn: () => editor.chain().focus().toggleUnderline().run(),
			},
			{
				id: "#hs-editor-tiptap [data-hs-editor-strike]",
				fn: () => editor.chain().focus().toggleStrike().run(),
			},
			{
				id: "#hs-editor-tiptap [data-hs-editor-link]",
				fn: () => {
					const url = window.prompt("URL");
					editor
						.chain()
						.focus()
						.extendMarkRange("link")
						.setLink({ href: url ?? "No url found" })
						.run();
				},
			},
			{
				id: "#hs-editor-tiptap [data-hs-editor-ol]",
				fn: () => editor.chain().focus().toggleOrderedList().run(),
			},
			{
				id: "#hs-editor-tiptap [data-hs-editor-ul]",
				fn: () => editor.chain().focus().toggleBulletList().run(),
			},
			{
				id: "#hs-editor-tiptap [data-hs-editor-blockquote]",
				fn: () => editor.chain().focus().toggleBlockquote().run(),
			},
			{
				id: "#hs-editor-tiptap [data-hs-editor-code]",
				fn: () => editor.chain().focus().toggleCode().run(),
			},
		];
		for (const { id, fn } of actions) {
			const action = document.querySelector(id);

			if (action === null) continue;

			action.addEventListener("click", fn);
		}
	});

	return (
		<>
			<div class="overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-700">
				<div id="hs-editor-tiptap">
					<div class="flex gap-x-0.5 border-b border-gray-200 p-2 align-middle dark:border-neutral-700">
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-bold=""
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
								<title>bold button</title>
								<path d="M14 12a4 4 0 0 0 0-8H6v8" />
								<path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
							</svg>
						</button>
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-italic=""
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
								<title>italic button</title>
								<line x1="19" x2="10" y1="4" y2="4" />
								<line x1="14" x2="5" y1="20" y2="20" />
								<line x1="15" x2="9" y1="4" y2="20" />
							</svg>
						</button>
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-underline=""
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
								<title>underscore button</title>
								<path d="M6 4v6a6 6 0 0 0 12 0V4" />
								<line x1="4" x2="20" y1="20" y2="20" />
							</svg>
						</button>
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-strike=""
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
								<title>strikethrough button</title>
								<path d="M16 4H9a3 3 0 0 0-2.83 4" />
								<path d="M14 12a4 4 0 0 1 0 8H6" />
								<line x1="4" x2="20" y1="12" y2="12" />
							</svg>
						</button>
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-link=""
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
								<title>link button</title>
								<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
								<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
							</svg>
						</button>
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-ol=""
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
								<title>ordered bullets</title>
								<line x1="10" x2="21" y1="6" y2="6" />
								<line x1="10" x2="21" y1="12" y2="12" />
								<line x1="10" x2="21" y1="18" y2="18" />
								<path d="M4 6h1v4" />
								<path d="M4 10h2" />
								<path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
							</svg>
						</button>
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-ul=""
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
								<title>unordered bullets</title>
								<line x1="8" x2="21" y1="6" y2="6" />
								<line x1="8" x2="21" y1="12" y2="12" />
								<line x1="8" x2="21" y1="18" y2="18" />
								<line x1="3" x2="3.01" y1="6" y2="6" />
								<line x1="3" x2="3.01" y1="12" y2="12" />
								<line x1="3" x2="3.01" y1="18" y2="18" />
							</svg>
						</button>
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-blockquote=""
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
								<title>Enlarge Text Button</title>
								<path d="M17 6H3" />
								<path d="M21 12H8" />
								<path d="M21 18H8" />
								<path d="M3 12v6" />
							</svg>
						</button>
						<button
							class="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
							type="button"
							data-hs-editor-code=""
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
								<title>Code Format Button</title>
								<path d="m18 16 4-4-4-4" />
								<path d="m6 8-4 4 4 4" />
								<path d="m14.5 4-5 16" />
							</svg>
						</button>
					</div>

					<div
						class="h-[10rem] overflow-auto p-4"
						data-hs-editor-field=""
						onClick$={(e) => {
							const target = e.target as HTMLElement;
							if (target.children.length > 0) {
								const firstChild = target.children[0] as HTMLElement;
								firstChild.focus();
							}
						}}
					/>
					<div class="flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-neutral-700">
						<button
							type="button"
							class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
							data-hs-overlay="#hs-vertically-centered-scrollable-modal"
						>
							Cancel
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
						>
							Post
						</button>
					</div>
				</div>
			</div>
		</>
	);
});
