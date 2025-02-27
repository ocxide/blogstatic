import type { PostPreview } from "@/lib/types";
import { CategoryText, SubCategories, TagComponent } from "./BlogUtils";

export default function VPostPreview({ post }: { post: PostPreview }) {
  return (
    <article class="relative grid grid-rows-[auto_auto_auto_1fr] group">
      <div class="w-full aspect-[2/1] overflow-hidden">
        <img
          src={post.mainImage}
          alt={`${post.title}`}
          class="group-hover:scale-110 w-full h-full object-cover object-center transition-transform"
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
}
