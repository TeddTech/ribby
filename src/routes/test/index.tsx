import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import {
	useAuthSession,
	useAuthSignin,
	useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
	const session = useAuthSession();
	const signIn = useAuthSignin();
	const signOut = useAuthSignout();
	return (
		<>
			<div>Hello World!</div>
			<Form action={signIn}>
				<input type="hidden" name="providerId" value="github" />
				<input
					type="hidden"
					name="options.callbackUrl"
					value="http://qwik-auth-example.com/dashboard"
				/>
				<button type="button">Sign In</button>
			</Form>
			<br />
			<div>
				{session.value?.user?.email ? (
					<Form action={signOut}>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button class="bg-purple-400">Sign Out</button>
					</Form>
				) : (
					<Form action={signIn}>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button class="bg-purple-400">Sign In</button>
					</Form>
				)}
			</div>
		</>
	);
});
