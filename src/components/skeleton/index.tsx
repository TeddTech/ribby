import { component$ } from "@builder.io/qwik";

interface SkeletonProp {
	count?: number;
}

export default component$<SkeletonProp>(({ count = 1 }) => {
	const skeletonElements = Array.from(
		{ length: count },
		(_, index) => index + 1,
	);
	return (
		<>
			{skeletonElements.map((index) => (
				<div key={index} class="flex animate-pulse">
					<div class="w-full">
						<p class="mx-1 mb-3 h-60 rounded-xl bg-gray-200 dark:bg-neutral-700" />
					</div>
				</div>
			))}
		</>
	);
});
