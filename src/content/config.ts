import { defineCollection, z } from "astro:content";

const articles = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		image: z.string().optional(),
	}),
});

export const collections = {
	articles,
};
