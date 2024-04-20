import { component$ } from "@builder.io/qwik";
import AppleMusic from "./apple-music";
import Soundcloud from "./soundcloud";
import Spotify from "./spotify";
import Tidal from "./tidal";

export default component$(() => {
	// - and more colour: rgba(101,101,105,1)
	return (
		<>
			<div class="flex shrink-0 flex-row gap-2">
				<Spotify />
				<AppleMusic />
				<Soundcloud />
				<Tidal />
			</div>
		</>
	);
});
