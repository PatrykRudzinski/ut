import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  works: defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/content/works",
    }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
  }),
  about: defineCollection({
    loader: glob({
      pattern: "about.md",
      base: "./src/content",
    }),
    schema: z.object({}),
  }),
};
