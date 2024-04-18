import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<div class="flex min-w-full grow flex-col items-center rounded-3xl bg-zinc-300 px-5 pb-3 pt-3">
				<a href="/">
					<img
						width={100}
						height={100}
						loading="lazy"
						sizes="(max-width: 638px) 7vw, (max-width: 998px) 5vw, 4vw"
						src="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=44"
						class="box-border aspect-[0.88] min-h-[20px] w-full min-w-[20px] max-w-[44px] shrink-0 self-stretch overflow-hidden object-contain"
						alt=""
					/>
				</a>
			</div>
		</>
	);
});
