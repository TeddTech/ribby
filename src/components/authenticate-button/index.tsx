import { component$, useStore } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { RenderContent, getContent } from "@builder.io/sdk-qwik";
import type { BuilderContent } from "@builder.io/sdk-qwik/types/types/builder-content";
import type { Nullable } from "@builder.io/sdk-qwik/types/types/typescript";
import { CUSTOM_COMPONENTS } from "../builder-registry";

export const BUILDER_MODEL = "authenticate-button";

const getBuilderContent = server$(async function () {
	const PUBLIC_BUILDER_API_KEY = this.env.get("PUBLIC_BUILDER_API_KEY");

	if (PUBLIC_BUILDER_API_KEY) {
		const builderContent = await getContent({
			model: BUILDER_MODEL,
			apiKey: PUBLIC_BUILDER_API_KEY,
		});

		return { builderContent, PUBLIC_BUILDER_API_KEY };
	}

	throw new Error("Failed to retrieve public builder API key");
});

export default component$(() => {
	const state = useStore({
		API_KEY: "",
		content: null as Nullable<BuilderContent>,
	});

	getBuilderContent()
		.then((res) => {
			state.content = res.builderContent;
			state.API_KEY = res.PUBLIC_BUILDER_API_KEY;
		})
		.catch((error) => {
			console.error("An error occurred:", error.message);
			console.error("Stack trace:", error.stack);
			console.log("---------------------------------");
			console.error(error);
		});

	return (
		<RenderContent
			model={BUILDER_MODEL}
			content={state.content}
			apiKey={state.API_KEY}
			customComponents={CUSTOM_COMPONENTS}
		/>
	);
});
