import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

interface LogoProps {
	isNavBar?: boolean;
}

export default component$<LogoProps>(({ isNavBar = true }) => {
	const loc = useLocation();
	const underline =
		isNavBar && loc.url.pathname === "/discovery/"
			? "border-b border-gray-400"
			: "";
	return (
		<>
			<div class={`${underline} flex flex-col items-center bg-none p-2`}>
				<img
					width={100}
					height={100}
					loading="lazy"
					sizes="(max-width: 638px) 7vw, (max-width: 998px) 5vw, 4vw"
					src="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=44"
					class="box-border aspect-[0.88] min-h-[20px] w-full min-w-[20px] max-w-[27px] shrink-0 self-stretch overflow-hidden object-contain"
					alt=""
				/>
			</div>
		</>
	);
});
