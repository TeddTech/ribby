import { Slot, component$, useContext, useTask$ } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Login from "~/components/login";
import NavigationBar from "~/components/navigation-bar";
import { isProfilePageContext } from "../layout";
export { useNavBarContent } from "~/components/navigation-bar";

export default component$(() => {
	const isProfilePage = useContext(isProfilePageContext);
	useTask$(() => {
		isProfilePage.value = true;
	});
	return (
		<>
			<div class="relative box-border flex h-[calc(100vh-87.727px)] shrink-0 flex-col-reverse max-xs:h-[calc(100vh-137.727px)] md:flex-row">
				<section class="relative z-10 mt-0 box-border flex w-[62px] shrink-0 flex-col border-r border-solid border-r-[lightgrey] bg-[#FDFEFE] py-5 dark:border-neutral-500 dark:bg-[#171717] max-md:fixed max-md:h-auto max-md:w-screen max-md:grow-0">
					<NavigationBar />
				</section>
				<section class="flex size-full flex-col justify-between overflow-y-scroll">
					<Slot />
					<Footer />
				</section>
			</div>

			<div
				id="hs-modal-signin"
				class="hs-overlay fixed start-0 top-0 z-[80] hidden size-full overflow-y-auto overflow-x-hidden"
			>
				<div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
					<div class="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<Login />
					</div>
				</div>
			</div>
		</>
	);
});
