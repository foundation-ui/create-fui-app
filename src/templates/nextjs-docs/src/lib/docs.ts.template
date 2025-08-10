import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { glob } from "glob";

const CONTENT_PATH = path.join(process.cwd(), "content/docs");

/**
 * Get all slugs for generateStaticParams
 */
export async function getAllDocSlugs() {
  const files = await glob("**/*.mdx", { cwd: CONTENT_PATH });

  /**
   * Remove the .mdx extension and return as an array of strings
   * 'components/button.mdx' -> ['components', 'button']
   */
  return files.map((file) => file.replace(/\.mdx$/, "").split("/"));
}

/**
 * Get the content for a single doc page
 */
export async function getDocBySlug(slug: string[]) {
  const filePath = path.join(CONTENT_PATH, `${slug.join("/")}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data,
    content,
  };
}
