import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import rehypeHighlight from "rehype-highlight";

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [rehypeHighlight],
    });
    return {
      ...document,
      slug: document._meta.path,
      description: document.summary,
      mdx,
      date: document.date || new Date().toISOString().split("T")[0],
      tags: document.tags || [],
      category: document.category || "General",
    };
  },
});

export default defineConfig({
  collections: [blogs],
});
