import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
	RenderContent,
	getBuilderSearchParams,
	getContent,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "../builder-registry";

export const BUILDER_MODEL = "navigation-bar";

// eslint-disable-next-line qwik/loader-location
export const useNavBarContent = routeLoader$(async ({ url, env, error }) => {
	const isPreviewing = url.searchParams.has("builder.preview");
	const PUBLIC_BUILDER_API_KEY =
		env.get("PUBLIC_BUILDER_API_KEY") || "BUILDER API NOT FOUND";

	const builderContent = await getContent({
		model: BUILDER_MODEL,
		apiKey: PUBLIC_BUILDER_API_KEY,
		options: getBuilderSearchParams(url.searchParams),
		userAttributes: {
			urlPath: url.pathname,
		},
	});

	// If there's no content, throw a 404.
	// You can use your own 404 component here
	if (!builderContent && !isPreviewing) {
		throw error(404, "Page not found");
	}

	return { builderContent, PUBLIC_BUILDER_API_KEY };
});

export default component$(() => {
	const builderContent = useNavBarContent();

	return (
		<RenderContent
			model={BUILDER_MODEL}
			content={builderContent.value.builderContent}
			apiKey={builderContent.value.PUBLIC_BUILDER_API_KEY}
			customComponents={CUSTOM_COMPONENTS}
		/>
	);
});
