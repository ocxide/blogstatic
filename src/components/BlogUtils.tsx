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
    <ul>
      {subCategories.map((subCategory) => (
        <li>
          <a href={`/blogs?subCategory=${subCategory.id}`} class="link">
            {subCategory.name}
          </a>
        </li>
      ))}
    </ul>
  );

  /* <style lang="scss">
	a.link {
		&:not(:last-of-type):after {
			content: ', ';
		}
	}

	ul {
		display: flex;
		column-gap: 0.5rem;
	} 
</style> */
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
    <a href={`/blogs?tag=${id}`} class={`elevation-1 ${color} tag`}>
      {name}
    </a>
  );

  /* <style>
	a {
		display: inline-block;
		border-radius: var(--card-radius);
		padding: 0rem 0.5rem; 
	}
</style> */
}
