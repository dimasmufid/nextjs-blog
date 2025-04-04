import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the Blog Post type
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorImage: string;
  thumbnail: string;
  summary: string;
  content: string;
};

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

// Get all markdown file names in the blog directory
export async function getBlogSlugs(): Promise<string[]> {
  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

// Get blog post data for a specific slug
export async function getBlogPost(slug: string): Promise<BlogPost> {
  const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    authorImage: data.authorImage,
    thumbnail: data.thumbnail,
    summary: data.summary,
    content,
  };
}

// Get all blog posts with their metadata
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));

  // Sort posts by date in descending order
  return posts.sort((post1, post2) => {
    if (new Date(post1.date) > new Date(post2.date)) {
      return -1;
    } else {
      return 1;
    }
  });
}
