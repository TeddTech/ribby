import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
	RenderContent,
	getBuilderSearchParams,
	getContent,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "../builder-registry";

const BUILDER_MODEL = "post";
// eslint-disable-next-line qwik/loader-location
export const usePost = routeLoader$(async ({ url, env, error }) => {
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

export default component$((props: PostProps) => {
	const postModel = usePost();

	return (
		<>
			<RenderContent
				model={BUILDER_MODEL}
				content={postModel.value.builderContent}
				apiKey={postModel.value.PUBLIC_BUILDER_API_KEY}
				customComponents={CUSTOM_COMPONENTS}
				data={{ ...props }}
			/>
		</>
	);
});

interface Email {
	"@type": "@builder.io/core:LocalizedValue";
	Default: string;
}

interface Comment {
	id: string;
	fromUserId: string;
	toUserId: string;
	postId: string;
	createAt: number;
	updatedAt: number;
	comment: string;
}

interface Like {
	id: string;
	userId: string;
	postId: string;
	updatedAt: number;
	createdAt: number;
}

export interface PostProps {
	post: {
		currentlyPlaying: boolean;
		id: string;
		type: "Request" | "Tweet" | "Event" | "Media" | "Items";
		createdAt: number;
		updatedAt: number;
		content: string;
		userId: string;
	};
	comments: Comment[];
	likes: Like[];
	user: {
		id: string;
		type: "Attendee" | "Performer" | "Venue";
		handle: string;
		profilePicture: string;
		email: Email;
	};
}
