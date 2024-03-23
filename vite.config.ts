import { builderDevTools } from "@builder.io/dev-tools/vite";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
	return {
		plugins: [builderDevTools(), qwikCity(), qwikVite(), tsconfigPaths()],
		optimizeDeps: {
			include: ["@auth/core"],
		},
		dev: {
			headers: {
				"Cache-Control": "public, max-age=0",
			},
		},
		preview: {
			headers: {
				"Cache-Control": "public, max-age=600",
			},
		},
	};
});
