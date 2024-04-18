import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
	return (
		<footer>
			<div class={styles.wrapper}>
				<a
					href="/footer"
					target="_blank"
					class={styles.anchor}
					rel="noreferrer"
				>
					<span>Made with ♡ by Ribby</span>
				</a>
			</div>
		</footer>
	);
});
