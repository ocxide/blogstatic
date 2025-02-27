export type PostPreview = {
	id: string;
	title: string;
	preview: string;
	mainImage?: string;
	createdAt: string;
	category: Category;
	tags: Tag[];
	subCategories: SubCategory[];
};

export type Category = {
  id: string;
  name: string;
};

export type SubCategory = {
  id: string;
  name: string;
};

export type Tag = {
  id: string;
  name: string;
  color: string;
};

