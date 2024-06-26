import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
	RenderContent,
	getBuilderSearchParams,
	getContent,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "../../components/builder-registry";

// This page is a catch-all for all routes that don't have a pre-defined route.
// Using a catch-all route allows you to dynamically create new pages in Builder.

// Use the `useBuilderContent` route loader to get your content from Builder.
// `routeLoader$()` takes an async function to fetch content
// from Builder with using `getContent()`.
export const useBuilderContent = routeLoader$(async ({ url, env, error }) => {
	const isPreviewing = url.searchParams.has("builder.preview");
	const PUBLIC_BUILDER_API_KEY =
		env.get("PUBLIC_BUILDER_API_KEY") || "BUILDER API NOT FOUND";

	// Fetch Builder.io Visual CMS content using the Qwik SDK.
	// The public API key is set in the .env file at the root
	// https://www.builder.io/c/docs/using-your-api-key
	const builderContent = await getContent({
		model: "page",
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

	// return content fetched from Builder, which is JSON
	return { builderContent, PUBLIC_BUILDER_API_KEY };
});

export default component$(() => {
	const builderContent = useBuilderContent();

	// RenderContent component uses the `content` prop to render
	// the page, specified by the API Key, at the current URL path.
	return (
		<RenderContent
			model="page"
			content={builderContent.value.builderContent}
			apiKey={builderContent.value.PUBLIC_BUILDER_API_KEY}
			customComponents={CUSTOM_COMPONENTS}
		/>
	);
});

export const head: DocumentHead = ({ resolveValue }) => {
	const builderContent = resolveValue(useBuilderContent);
	return {
		title: builderContent.builderContent?.data?.title,
	};
};
