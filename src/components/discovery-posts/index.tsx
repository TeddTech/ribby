import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { builder } from "@builder.io/sdk";
import type { PostProps } from "../post";
import Post from "../post";
import Skeleton from "../skeleton";

builder.init(import.meta.env.PUBLIC_STAG_BUILDER_API_KEY);

export default component$(() => {
	const postsResource = useResource$(async () => {
		const posts = await builder.getAll("posts-data");
		const users = await builder.getAll("user-data");
		const comments = await builder.getAll("comments-data");
		const likes = await builder.getAll("likes-data");
		return { posts, users, comments, likes };
	});
	return (
		<Resource
			value={postsResource}
			onPending={() => <Skeleton count={6} />}
			onRejected={(error) => <>Error: {error.message}</>}
			onResolved={({ posts, users, comments, likes }) => (
				<div>
					{posts.map((post) => {
						const currentUser = users.filter((user) => {
							return post.data?.userId === user.data?.id;
						});
						const currentComments = comments.filter((comment) => {
							return post.data?.id === comment.data?.postId;
						});
						const currentLikes = likes.filter((like) => {
							return post.data?.id === like.data?.postId;
						});
						return (
							<div key={post.data?.id}>
								<Post
									post={post.data as PostProps["post"]}
									user={currentUser[0].data as PostProps["user"]}
									comments={currentComments as PostProps["comments"]}
									likes={currentLikes as PostProps["likes"]}
								/>
							</div>
						);
					})}
				</div>
			)}
		/>
	);
});
