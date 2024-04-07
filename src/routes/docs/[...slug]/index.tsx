// routes/docs/[...slug]/index.tsx
import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
	const loc = useLocation();
	const params = loc.params.slug.split("/");
	if (params.length === 2) {
		return (
			<h1>
				Docs for feature {params[0]} and concept {params[1]}
			</h1>
		);
	}
	if (params.length === 1) {
		return <h1>Viewing docs for feature {params[0]}</h1>;
	}
});
