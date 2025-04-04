import { format } from "date-fns";
import Image from "next/image";
import { getBlogPost, getBlogSlugs } from "@/lib/mdx";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { BookACall } from "@/components/book-a-call";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug: string) => ({
    id: slug,
  }));
}

export default async function BlogContentCentered({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blog = await getBlogPost((await params).id);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:px-8">
      <Image
        src={blog.thumbnail}
        alt={blog.title}
        className="h-60 w-full rounded-3xl object-cover md:h-[30rem]"
        height={720}
        width={1024}
      />
      <h2 className="mb-2 mt-6 text-2xl font-bold tracking-tight text-black dark:text-white">
        {blog.title}
      </h2>
      <div className="flex items-center">
        <Image
          src={blog.authorImage}
          alt={blog.author}
          className="h-5 w-5 rounded-full"
          height={20}
          width={20}
        />
        <p className="pl-2 text-sm text-neutral-600 dark:text-neutral-400">
          {blog.author}
        </p>
        <div className="mx-2 h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-700" />
        <p className="pl-1 text-sm text-neutral-600 dark:text-neutral-400">
          {format(new Date(blog.date), "LLLL d, yyyy")}
        </p>
      </div>
      <div className="prose prose-sm mt-10 dark:prose-invert sm:mt-20">
        <MarkdownRenderer content={blog.content} />
      </div>

      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 dark:bg-gray-900 sm:flex-row sm:justify-between">
          <div className="mb-4 text-center sm:mb-0 sm:text-left">
            <h3 className="text-lg font-medium">Questions or feedback?</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Feel free to reach out if you have any questions about this
              article.
            </p>
          </div>
          <BookACall buttonText="Contact Author" />
        </div>
      </div>
    </div>
  );
}
