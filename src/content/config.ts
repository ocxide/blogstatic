import { defineCollection, z } from "astro:content";

const articles = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		image: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	articles,
};
