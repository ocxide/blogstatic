import { defineCollection, z } from "astro:content";

const articles = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().optional(),
			description: z.string().optional(),
			tags: z.array(z.string()),
			cover: image().optional(),
		}),
});

export const collections = {
	articles,
};
