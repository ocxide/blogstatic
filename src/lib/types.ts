import type { ImageInputFormat } from "astro";

export type ArticlePreview = {
	id: string;
	title: string;
	createdAt: Date;
	tags: string[];
	cover?: Image;
};

export type Image = {
	src: string;
	height: number;
	width: number;
	format: ImageInputFormat;
}
