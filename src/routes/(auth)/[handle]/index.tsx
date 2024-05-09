import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
	RenderContent,
	getBuilderSearchParams,
	getContent,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "~/components/builder-registry";
import { useAuthSession } from "~/routes/plugin@auth";
import { getXataClient } from "~/xata";

export const BUILDER_MODEL = "profile-page";
export const useBuilderContent = routeLoader$(async ({ url, env, error }) => {
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

	if (!builderContent && !isPreviewing) {
		throw error(404, "Page not found");
	}

	return { builderContent, PUBLIC_BUILDER_API_KEY };
});

export const useUser = routeLoader$(async (event) => {
	const xata = getXataClient();
	const user = await xata.db.nextauth_users
		.filter({
			handle: event.params.handle,
		})
		.getFirst();
	if (!user) {
		event.status(404);
	} else {
		event.sharedMap.set("user", user);
	}
	return user;
});

export default component$(() => {
	const session = useAuthSession();
	const loc = useLocation();
	const isPersonalProfile = session.value?.user.handle === loc.params.handle;
	const user = useUser();
	const builderContent = useBuilderContent();
	if (!user.value) {
		return <p>Sorry, looks like {loc.params.handle} is not a user.</p>;
	}
	return (
		<>
			{isPersonalProfile && (
				<>
					<div>PERSONAL page</div>
				</>
			)}
			<RenderContent
				model={BUILDER_MODEL}
				content={builderContent.value.builderContent}
				apiKey={builderContent.value.PUBLIC_BUILDER_API_KEY}
				customComponents={CUSTOM_COMPONENTS}
				data={{ ...user.value }}
			/>
		</>
	);
});

export const head: DocumentHead = ({ params }) => {
	return {
		title: params.handle,
	};
};
