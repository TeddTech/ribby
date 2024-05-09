import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { routeLoader$, server$, useLocation } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";
import { getXataClient } from "~/xata";

// eslint-disable-next-line qwik/loader-location
export const useFollowers = routeLoader$(async (event) => {
	const followerHandle = event.sharedMap.get("session")?.user.handle ?? "";
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	const followingHandle = event.params.handle ?? "";
	const xata = getXataClient();
	const records = await xata.db.followers
		.filter({
			"follower.handle": followerHandle,
			"following.handle": followingHandle,
		})
		.getMany();
	console.log("useFollowers", records);
	return records;
});

export const followSwitch = server$(async function (action, id) {
	const xata = getXataClient();
	const followerHandle = this.sharedMap.get("session").user.handle;
	const followingHandle = this.params.handle;

	if (action === "Unfollow") {
		const record = await xata.db.followers.delete(id);
		console.log("UNFOLLOW -->", record);
		return { label: "Follow", id: null };
	}
	if (action === "Follow") {
		const users = await xata.db.nextauth_users
			.filter({
				handle: { $any: [followerHandle, followingHandle] },
			})
			.getMany();

		let followerId = "";
		let followingId = "";

		for (const user of users) {
			if (user.handle === followerHandle) {
				followerId = user.id;
			}
			if (user.handle === followingHandle) {
				followingId = user.id;
			}
		}

		const record = await xata.db.followers.createOrUpdate({
			follower: followerId,
			following: followingId,
		});
		console.log("FOLLOW -->", record);

		return { label: "Unfollow", id: record.id };
	}
	throw new Error(`Failed to ${action.toLowerCase()} user**`);
});

interface FollowButtonProps {
	isFollowing: boolean;
	isFollower: boolean;
}

export default component$<FollowButtonProps>(() => {
	const records = useFollowers();
	const recordId = useSignal<string | null>();
	const label = useSignal<string>("Follow");

	const getRecordId = records.value.length ? records.value[0].id : null;
	const nRelationships = records.value.length;
	const isFollowing = $((nRelationships: number) => {
		return nRelationships ? "Unfollow" : "Follow";
	});

	useTask$(async () => {
		recordId.value = getRecordId;
		label.value = await isFollowing(nRelationships);
	});

	const session = useAuthSession();
	const loc = useLocation();
	const isLogInModalFollowBtn = !session.value
		? "#hs-modal-signin"
		: "#hs-no-action";
	const isLogInModalUnfollowBtn = !session.value
		? "#hs-modal-signin"
		: "#hs-modal-follow-btn";
	const followBtnClass =
		"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white";
	const isPersonalProfile = session.value?.user.handle === loc.params.handle;

	if (isPersonalProfile) {
		// const options = {
		// 	type: undefined,
		// 	forceReload: true,
		// 	replaceState: true,
		// 	scroll: true,
		// };
		// nav("followers", options);
		return (
			<a href="settings/edit-profile" class={followBtnClass}>
				Edit profile
			</a>
		);
	}
	return (
		<>
			<button
				data-hs-overlay={isLogInModalUnfollowBtn}
				type="button"
				class={`${label.value === "Follow" && "hidden"} ${followBtnClass}`}
			>
				<div class="flex items-center gap-0 xs:gap-[2px] sm:gap-1 md:gap-1.5">
					<p class="mx-auto">Following</p>{" "}
					<svg
						class="-mr-1 size-4 flex-shrink-0"
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
						<title>Extended Following Button Menu</title>
						<path d="m6 9 6 6 6-6" />
					</svg>
				</div>
			</button>

			<button
				data-hs-overlay={isLogInModalFollowBtn}
				type="button"
				class={`${label.value === "Unfollow" && "hidden"} ${followBtnClass}`}
				onClick$={async () => {
					if (session.value) {
						const followSwitchResult = await followSwitch(
							label.value,
							recordId.value,
						);
						label.value = followSwitchResult.label;
						recordId.value = followSwitchResult.id;
					}
				}}
			>
				<div class="flex items-center gap-1.5">
					<p class="mx-auto">Follow</p>
				</div>
			</button>

			<div
				id="hs-modal-follow-btn"
				class="hs-overlay fixed inset-x-0 bottom-0 z-[80] hidden size-full max-h-[90%] translate-y-full transform rounded-t-3xl border-b bg-white transition-all duration-500 hs-overlay-open:translate-y-0 dark:border-neutral-700 dark:bg-neutral-800"
				tabIndex={-1}
			>
				<div class="flex items-center justify-between border-b px-4 py-3 dark:border-neutral-700">
					<h3 class="mx-auto font-bold text-gray-800 dark:text-white">
						<p class="ml-5">{loc.params.handle}</p>
					</h3>
					<button
						type="button"
						class="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
						data-hs-overlay="#hs-modal-follow-btn"
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
					{/* <p class="text-gray-500 dark:text-neutral-400">
						Follow Button Menu Content
					</p> */}
					<button
						data-hs-overlay={isLogInModalFollowBtn}
						type="button"
						class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white"
						onClick$={async () => {
							if (session.value) {
								const followSwitchResult = await followSwitch(
									label.value,
									recordId.value,
								);
								label.value = followSwitchResult.label;
								recordId.value = followSwitchResult.id;
							}
						}}
					>
						<div class="flex items-center gap-1.5">
							<p class="mx-auto">{label.value}</p>
						</div>
					</button>
				</div>
			</div>
		</>
	);
});
