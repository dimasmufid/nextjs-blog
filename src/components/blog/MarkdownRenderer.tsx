"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      components={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        code({ className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          const isCodeBlock = !props.inline && match;

          return isCodeBlock ? (
            <SyntaxHighlighter
              style={materialDark}
              language={match ? match[1] : ""}
              PreTag="div"
              className="rounded-md my-4 overflow-auto"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        img({ src, alt }: any) {
          return (
            <div className="relative aspect-video w-full my-6">
              <Image
                src={src || ""}
                alt={alt || "Blog image"}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          );
        },
        // Additional component overrides
        h1: (props) => (
          <h1 className="text-3xl font-bold mb-5 mt-8" {...props} />
        ),
        h2: (props) => (
          <h2 className="text-2xl font-bold mb-4 mt-8" {...props} />
        ),
        h3: (props) => (
          <h3 className="text-xl font-bold mb-3 mt-6" {...props} />
        ),
        p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
        ul: (props) => <ul className="list-disc pl-6 mb-4" {...props} />,
        ol: (props) => <ol className="list-decimal pl-6 mb-4" {...props} />,
        li: (props) => <li className="mb-1" {...props} />,
        blockquote: (props) => (
          <blockquote
            className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        a: (props) => (
          <a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            {...props}
          />
        ),
        table: (props) => (
          <div className="overflow-x-auto my-6">
            <table
              className="min-w-full divide-y divide-gray-300 dark:divide-gray-700"
              {...props}
            />
          </div>
        ),
        th: (props) => (
          <th
            className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
            {...props}
          />
        ),
        td: (props) => (
          <td
            className="px-3 py-2 border-t border-gray-200 dark:border-gray-800"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
