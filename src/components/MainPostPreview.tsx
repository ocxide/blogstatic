import type { Category, SubCategory, Tag } from "@/lib/types";
import { CategoryText, SubCategories, TagComponent } from "./BlogUtils";

export function format(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${day}/${month}/${year}`;
}

export default function MainPostPreview({
  id,
  title,
  mainImage,
  preview,
  createdAt,
  category,
  subCategories,
  tags,
}: {
  id: string;
  title: string;
  mainImage?: string;
  preview: string;
  createdAt: string;
  category: Category;
  subCategories: SubCategory[];
  tags: Tag[];
}) {
  const blogUrl = `/blogs/${id}`;

  return (
    <article class="grid grid-cols-[2fr_1fr] gap-4">
      {mainImage && (
        <a href={blogUrl}>
          <img
            src={mainImage}
            alt=""
            class="h-full w-full object-cover object-center aspect-[2/1]"
          />
        </a>
      )}
      <section class="p-2 grid grid-rows-[auto_1fr_auto]">
        <a href={blogUrl}>
          <h4>{title}</h4>
          <small>{format(new Date(createdAt))}</small>
        </a>

        <div innerHTML={preview}></div>

        <footer class="grid">
          <CategoryText name={category.name} id={category.id} />

          <SubCategories subCategories={subCategories} />

          <ul class="flex gap-x-2">
            {tags.map((tag) => (
              <li>
                <TagComponent id={tag.id} name={tag.name} color={tag.color} />
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </article>
  );
}
