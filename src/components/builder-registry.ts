import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import AppIcons from "./app-icons";
import Logo from "./logo";
import MapIcon from "./map-icon";
import MessagesIcon from "./messages-icon";
import NavigationProfileIcon from "./navigation-profile-icon";
import ProfilePhotoIcon from "./profile-photo-icon";

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
		component: AppIcons,
		name: "App Icons",
		inputs: [],
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
		component: ProfilePhotoIcon,
		name: "Profile Photo Icon",
		inputs: [],
	},
];
