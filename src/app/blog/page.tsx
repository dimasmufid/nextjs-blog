import { cn } from "@/lib/utils";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/BlogCard";

export const dynamic = "force-dynamic";

export default async function SimpleBlogWithGrid() {
  const blogs = await getAllBlogPosts();
  const columns = 30;
  const rows = 11;

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <div className="py-4 md:py-10 overflow-hidden relative  px-4 md:px-8">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-50">
          <div className="flex bg-gray-200 dark:bg-neutral-700 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
            {Array.from({ length: rows }).map((_, row) =>
              Array.from({ length: columns }).map((_, col) => {
                const index = row * columns + col;
                return (
                  <div
                    key={`${col}-${row}`}
                    className={`w-10 h-10 flex flex-shrink-0 rounded-[1px] ${
                      index % 2 === 0
                        ? "bg-gray-100 dark:bg-neutral-800"
                        : "bg-gray-100 dark:bg-neutral-800 shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)_inset]"
                    }`}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className="relative z-20 py-10 ">
          <h1
            className={cn(
              "scroll-m-20 text-4xl font-bold text-center md:text-left tracking-tight text-black dark:text-white mb-6"
            )}
          >
            Blog
          </h1>

          <p className="text-lg text-neutral-600 dark:text-neutral-400-foreground max-w-xl !mb-6 text-center md:text-left">
            Discover insightful resources and expert advice from our seasoned
            team to elevate your knowledge.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>
      </div>
    </div>
  );
}
