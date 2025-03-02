import { getCollection, type CollectionEntry } from "astro:content";
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

export async function getArticlePreviews(): Promise<ArticlePreview[]> {
	const articles = await getCollection("articles");

	const promises = articles.map(async (entry) => {
		const { preview } = await renderArticle(entry);
		return preview;
	});
	return Promise.all(promises);
}

export async function renderArticle(articleEntry: CollectionEntry<"articles">) {
	const render = await articleEntry.render();
	const { remarkPluginFrontmatter, headings } = render;

	const title =
		articleEntry.data.title ??
		headings.find((h) => h.depth === 1)?.text ??
		"NO TITLE :(";

	const preview: ArticlePreview = {
		id: articleEntry.slug,
		title,
		description: articleEntry.data.description ?? "",
		tags: articleEntry.data.tags,
		cover: articleEntry.data.cover,
		createdAt: new Date(remarkPluginFrontmatter.lastModified as Date),
	};

	return { preview, render };
}
