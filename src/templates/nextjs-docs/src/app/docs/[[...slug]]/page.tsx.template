import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllDocSlugs, getDocBySlug } from "@/lib/docs";

import { COMPONENTS as DocsComponents } from "../_mapping/docs-components";

interface DocPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;

  const docSlug = slug ?? ["index"];
  const doc = await getDocBySlug(docSlug);

  if (!doc) {
    return (
      <DocsComponents.DocsHeading
        title="Not found"
        description="The page you are looking for does not exists."
      />
    );
  }

  return (
    <React.Fragment>
      <DocsComponents.DocsHeading
        title={doc.frontmatter.title as string}
        description={doc.frontmatter.description as string}
      />

      <MDXRemote source={doc.content} components={{ ...DocsComponents }} />
    </React.Fragment>
  );
}
