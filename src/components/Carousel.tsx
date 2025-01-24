import { createSignal, type ResolvedChildren } from "solid-js";

export default function Carousel({
  children,
  pages,
  leftIcon,
  rightIcon,
  class: className,
}: {
  children: any;
  leftIcon?: ResolvedChildren;
  rightIcon?: ResolvedChildren;
  pages: number;
  class?: string;
}) {
  const [page, setPage] = createSignal(0);
  const hasNext = () => page() < pages - 1;

  return (
    <>
      <div class="w-full overflow-hidden">
        <div
          class={`${className} grid transition-transform`}
          style={`transform: translateX(-${(page() * 100) / pages}%); width: ${
            pages * 100
          }%; grid-template-columns: repeat(${pages}, 1fr);`}
        >
          {children}
        </div>
      </div>

      <footer class="mt-6">
        <div class="grid gap-x-2 items-center grid-cols-[auto_1fr_auto]">
          <button
            class="button icon"
            onClick={() => setPage(page() - 1)}
            disabled={page() === 0}
          >
            {leftIcon}
          </button>

          <fieldset class="flex gap-x-2">
            {Array(pages).map((_, i) => (
              <input
                type="radio"
                name="page"
                value={i}
                checked={i === page()}
                onChange={() => setPage(i)}
              />
            ))}
          </fieldset>

          <button
            class="button icon"
            onClick={() => setPage(page() + 1)}
            disabled={!hasNext()}
          >
            {rightIcon}
          </button>
        </div>
      </footer>
    </>
  );
}
