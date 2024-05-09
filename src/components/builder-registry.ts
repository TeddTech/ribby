import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Comment from "./comment";
import Comments from "./comments";
import DiscoveryFeed from "./discovery-feed";
import DiscoverySearch from "./discovery-search";
import FollowButton from "./follow-button";
import Footer from "./footer/footer";
import LikeButton from "./like-button";
import Likes from "./likes";
import Logo from "./logo";
import MapIcon from "./map-icon";
import MessageButton from "./message-button";
import MessagesIcon from "./messages-icon";
import NavigationProfileIcon from "./navigation-profile-icon";
import PostMenu from "./post-menu";
import ProfilePhotoIcon from "./profile-photo-icon";
import ProfilePosts from "./profile-posts";
import ProviderIcons from "./provider-icons";
import RequestButton from "./request-button";
import TimeDifference from "./time-difference";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
	{
		component: Comment,
		name: "Comment",
		inputs: [],
	},
	{
		component: Comments,
		name: "Comments",
		inputs: [
			{
				name: "count",
				type: "number",
			},
		],
	},
	{
		component: DiscoveryFeed,
		name: "Discovery Feed",
		inputs: [],
	},
	{
		component: DiscoverySearch,
		name: "Discovery Search",
		inputs: [],
	},
	{
		component: FollowButton,
		name: "Follow Button",
		inputs: [],
	},
	{
		component: Footer,
		name: "Footer",
		inputs: [],
	},
	{
		component: LikeButton,
		name: "Like Button",
		inputs: [],
	},
	{
		component: Likes,
		name: "Likes",
		inputs: [
			{
				name: "count",
				type: "number",
			},
		],
	},
	{
		component: Logo,
		name: "Logo",
		inputs: [],
	},
	{
		component: MapIcon,
		name: "Map Icon",
		inputs: [],
	},
	{
		component: MessageButton,
		name: "Message Button",
		inputs: [],
	},
	{
		component: MessagesIcon,
		name: "Messages Icon",
		inputs: [],
	},
	{
		component: NavigationProfileIcon,
		name: "Navigation Profile Icon",
		inputs: [],
	},
	{
		component: PostMenu,
		name: "Post Menu",
		inputs: [],
	},
	{
		component: ProfilePhotoIcon,
		name: "Profile Photo Icon",
		inputs: [
			{
				name: "size",
				type: "string",
				defaultValue: "size-8 md:size-10",
			},
			{
				name: "src",
				type: "string",
			},
		],
	},
	{
		component: ProfilePosts,
		name: "ProfilePosts ",
		inputs: [],
	},
	{
		component: ProviderIcons,
		name: "Provider Icons",
		inputs: [],
	},
	{
		component: RequestButton,
		name: "Request Button",
		inputs: [
			{
				name: "hide",
				type: "boolean",
			},
			{
				name: "label",
				type: "string",
			},
		],
	},
	{
		component: TimeDifference,
		name: "Time Difference",
		inputs: [
			{
				name: "startingTime",
				type: "string",
			},
		],
	},
];
