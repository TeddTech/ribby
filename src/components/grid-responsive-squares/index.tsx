import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./grid-responsive-squares.css?inline";

export default component$(() => {
	useStylesScoped$(styles);
	return (
		<div id="PostsProfile">
			<div class="mx-auto grid">
				<div class="square">
					<ul>
						This demo shows you can center multiple types of content :
						<li>Text</li>
						<li>Images</li>
						<li>Lists</li>
					</ul>
				</div>
				<div class="square">98%</div>
				<div class="square">3.9/5</div>
				<div class="square">98%</div>
				<div class="square">3.9/5</div>
				<div class="square">
					<img
						alt="#"
						width="500"
						height="403"
						src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg"
					/>
				</div>
				<div class="square">
					<img
						alt="#"
						width="500"
						height="333"
						src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
					/>
				</div>
				<div class="square">
					<img
						alt="#"
						width="500"
						height="348"
						class="rs"
						src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
					/>
				</div>
				<div class="square fullImg">
					<img
						alt="#"
						width="500"
						height="333"
						src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
					/>
				</div>
				<div class="square fullImg">
					<img
						alt="#"
						width="500"
						height="348"
						class="rs"
						src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
					/>
				</div>
				<div class="square fullImg">
					<img
						alt="#"
						width="500"
						height="403"
						src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg"
					/>
				</div>
				<div class="square">
					<img
						alt="#"
						width="500"
						height="333"
						src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
					/>
				</div>
				<div class="square">
					<img
						alt="#"
						width="500"
						height="348"
						class="rs"
						src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
					/>
				</div>
				<div class="square fullImg">
					<img
						alt="#"
						width="500"
						height="333"
						src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
					/>
				</div>
				<div class="square fullImg">
					<img
						alt="#"
						width="500"
						height="348"
						class="rs"
						src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
					/>
				</div>
				<div class="square fullImg">
					<img
						alt="#"
						width="500"
						height="403"
						src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg"
					/>
				</div>
			</div>
		</div>
	);
});
