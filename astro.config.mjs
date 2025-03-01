// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import { remarkLastModified } from "./src/remark/last-modified.mjs";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), solidJs(), mdx(), icon()],
	markdown: {
		remarkPlugins: [remarkLastModified],
	},
});
