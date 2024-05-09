import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

interface Prop {
	textWhite?: boolean;
}
export default component$<Prop>((props) => {
	const textColorLight = props.textWhite ? "color: white" : "";
	return (
		<footer class="mt-5 max-lg:pb-[77.727px] max-xs:pb-[77.727px]">
			<div class={styles.wrapper}>
				<a
					href="/footer"
					target="_blank"
					class={styles.anchor}
					rel="noreferrer"
					style={textColorLight}
				>
					<span>Made with ♡ by Ribby</span>
				</a>
			</div>
		</footer>
	);
});
