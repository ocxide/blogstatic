import type { BlogPreview } from "@/lib/types";
import { CategoryText, SubCategories, TagComponent } from "./BlogUtils";

export default function VPostPreview({ post }: { post: BlogPreview }) {
  return (
    <article class="relative grid grid-rows-[auto_auto_auto_1fr] group">
      <div class="img-wrapper">
        <img
          src={post.mainImage}
          alt={`${post.title}`}
          class="group-hover:scale-110"
        />
      </div>

      <h4>{post.title}</h4>

      <div innerHTML={post.preview}></div>

      <footer class="flex gap-x-4 overflow-auto">
        <CategoryText name={post.category.name} id={post.category.id} />

        <span>•</span>

        <SubCategories subCategories={post.subCategories} />

        {post.tags.length ? <span>•</span> : null}

        <ul class="flex gap-x-2 z-20">
          {post.tags.map((tag) => (
            <li>
              <TagComponent id={tag.id} name={tag.name} color={tag.color} />
            </li>
          ))}
        </ul>
      </footer>

      <a href={`/blogs/${post.id}`} class="absolute inset-0 w-full h-full" />
    </article>
  );

  /* <style lang="scss">
	.img-wrapper {
		width: 100%;
		aspect-ratio: 2 / 1;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;

		transition: transform 0.2s ease-in-out;
	}
</style> */
}
