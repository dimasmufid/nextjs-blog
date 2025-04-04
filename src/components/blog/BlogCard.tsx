"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/lib/mdx";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
      <span className="font-medium text-black dark:text-white">DevStudio</span>
    </Link>
  );
};

interface IBlurImage {
  height?: number | string;
  width?: number | string;
  src: string;
  className?: string;
  alt?: string;
  [key: string]: unknown;
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: IBlurImage) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300 transform",
        isLoading ? "blur-sm scale-105" : "blur-0 scale-100",
        className
      )}
      onLoadingComplete={() => setLoading(false)}
      src={src}
      width={
        typeof width === "number"
          ? width
          : width === undefined
          ? 1024
          : parseInt(width, 10) || 1024
      }
      height={
        typeof height === "number"
          ? height
          : height === undefined
          ? 768
          : parseInt(height, 10) || 768
      }
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      alt={alt ? alt : "Avatar"}
      {...rest}
    />
  );
};

export const BlogCard = ({ blog }: { blog: BlogPost }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
  return (
    <Link
      className="shadow-derek rounded-3xl border dark:border-neutral-800 w-full bg-white dark:bg-neutral-900 overflow-hidden hover:scale-[1.02] transition duration-200"
      href={`/blog/${blog.slug}`}
    >
      {blog.thumbnail ? (
        <BlurImage
          src={blog.thumbnail}
          alt={blog.title}
          height={800}
          width={800}
          className="h-52 object-cover object-top w-full"
        />
      ) : (
        <div className="h-52 flex items-center justify-center bg-white dark:bg-neutral-900">
          <Logo />
        </div>
      )}
      <div className="p-4 md:p-8 bg-white dark:bg-neutral-900">
        <div className="flex space-x-2 items-center mb-2">
          <Image
            src={blog.authorImage}
            alt={blog.author}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          />
          <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400">
            {blog.author}
          </p>
        </div>
        <p className="text-lg font-bold mb-4 text-neutral-800 dark:text-neutral-100">
          {blog.title}
        </p>
        <p className="text-left text-sm mt-2 text-neutral-600 dark:text-neutral-400">
          {truncate(blog.summary, 100)}
        </p>
      </div>
    </Link>
  );
};
