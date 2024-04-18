import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { RenderContent, getContent } from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "../builder-registry";

export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;
export const BUILDER_MODEL = "navigation-bar";

export default component$(() => {
	const builderContentRsrc = useResource$(() => {
		return getContent({
			model: BUILDER_MODEL,
			apiKey: BUILDER_PUBLIC_API_KEY,
		});
	});

	return (
		<Resource
			value={builderContentRsrc}
			onPending={() => <div>Loading...</div>}
			onResolved={(content) => (
				<RenderContent
					model={BUILDER_MODEL}
					content={content}
					apiKey={BUILDER_PUBLIC_API_KEY}
					customComponents={CUSTOM_COMPONENTS}
				/>
			)}
		/>
	);
});
