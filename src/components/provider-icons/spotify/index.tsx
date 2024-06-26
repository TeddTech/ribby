import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-label="Spotify"
				role="img"
				viewBox="0 0 512 512"
				width="47"
				height="47"
				fill="#000000"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					{" "}
					<rect width="512" height="512" rx="15%" fill="black" />
					<circle cx="256" cy="256" fill="#3bd75f" r="192" />
					<g fill="none" stroke="black" stroke-linecap="round">
						{" "}
						<path d="m141 195c75-20 164-15 238 24" stroke-width="36" />
						<path d="m152 257c61-17 144-13 203 24" stroke-width="31" />
						<path d="m156 315c54-12 116-17 178 20" stroke-width="24" />
					</g>{" "}
				</g>
			</svg>
		</>
	);
});
