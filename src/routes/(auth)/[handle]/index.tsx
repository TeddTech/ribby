import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";
import { getXataClient } from "~/xata";

export const useUser = routeLoader$(async (event) => {
	const xata = getXataClient();
	const user = await xata.db.nextauth_users
		.filter({
			handle: event.params.handle,
		})
		.getFirst();
	if (!user) {
		event.status(404);
	} else {
		event.sharedMap.set("user", user);
	}
	return user;
});

export default component$(() => {
	const session = useAuthSession();
	const loc = useLocation();
	const isPersonalProfile = session.value?.user.handle === loc.params.handle;
	const user = useUser();
	if (!user.value) {
		return <p>Sorry, looks like {loc.params.handle} is not a user.</p>;
	}
	return (
		<>
			{isPersonalProfile ? (
				<>
					<div>PERSONAL page</div>
					<br />
					<div>Welome {session.value.user.name}</div>
					<br />
					<div>Handle: {user.value.handle}</div>
				</>
			) : (
				<div>This is {user.value.name}'s profile page</div>
			)}
		</>
	);
});
