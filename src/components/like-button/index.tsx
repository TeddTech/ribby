import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";

export default component$(() => {
	const session = useAuthSession();
	const isLogInModal = !session.value
		? "#hs-modal-signin"
		: "hs-modal-no-action";
	return (
		<button
			type="button"
			data-hs-overlay={isLogInModal}
			class="text-[17px] max-sm:text-sm"
		>
			💜️️
		</button>
	);
});
