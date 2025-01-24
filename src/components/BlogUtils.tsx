import type { SubCategory } from "@/lib/types";

export function CategoryText({ name, id }: { name: string; id: string }) {
  return (
    <a href={`/blogs?category=${id}`} class="link">
      {name}
    </a>
  );
}

export function SubCategories({
  subCategories,
}: {
  subCategories: SubCategory[];
}) {
  return (
    <ul class="flex gap-x-2">
      {subCategories.map((subCategory) => (
        <li>
          <a href={`/blogs?subCategory=${subCategory.id}`} class="[&:not(:last-of-type)]:after:content-[',_']">
            {subCategory.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TagComponent({
  name,
  id,
  color,
}: {
  name: string;
  id: string;
  color: string;
}) {
  return (
    <a href={`/blogs?tag=${id}`} class={`elevation-1 ${color} tag inline-block rounded-[var(--card-radius)] py-2 px-0`}>
      {name}
    </a>
  );
}
