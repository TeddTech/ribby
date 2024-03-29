import { builderDevTools } from "@builder.io/dev-tools/vite";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { type UserConfig, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((): UserConfig => {
	// const env = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [builderDevTools(), qwikCity(), qwikVite(), tsconfigPaths()],
		// envPrefix: "VITE_",
		// define: {
		// 	...Object.keys(env).reduce((prev, key) => {
		// 		prev[`process.env.${key}`] = JSON.stringify(env[key]);
		// 		return prev;
		// 	}, {}),
		// },
		optimizeDeps: {
			include: ["@auth/core"],
		},
		server: {
			headers: {
				"Cache-Control": "public, max-age=0",
			},
		},
		// dev: {
		// 	headers: {
		// 		"Cache-Control": "public, max-age=0",
		// 	},
		// },
		preview: {
			headers: {
				"Cache-Control": "public, max-age=600",
			},
		},
	};
});
