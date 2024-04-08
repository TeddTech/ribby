import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignout } from "../plugin@auth";

export default component$(() => {
	const signOut = useAuthSignout();
	return (
		<>
			<div>
				<Form action={signOut}>
					<input type="hidden" name="callbackUrl" value="/logged-out/" />
					<button type="submit">Log Out</button>
				</Form>
			</div>
		</>
	);
});
