import { getCollection, render } from "astro:content";
import type { ImageInputFormat } from "astro";

export type ArticlePreview = {
	id: string;
	title: string;
	description: string;
	createdAt: Date;
	tags: string[];
	cover?: Image;
};

export type Image = {
	src: string;
	height: number;
	width: number;
	format: ImageInputFormat;
};

export async function getArticlePreviews() {
	const articles = await getCollection("articles");

	const promises = articles.map(async (content): Promise<ArticlePreview> => {
		const { remarkPluginFrontmatter } = await content.render();

		render;

		return {
			id: content.slug,
			title: content.data.title,
			description: content.data.description ?? "",
			tags: content.data.tags,
			cover: content.data.cover,
			createdAt: new Date(remarkPluginFrontmatter.lastModified as Date),
		};
	});
	return Promise.all(promises);
}
