import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type MentionsPageType = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    description: string;
  };
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "mentions.mdx");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);
  const source = await serialize(content);

  return {
    props: {
      source,
      frontMatter: data,
    },
  };
}

export default function MentionsPage({
  source,
  frontMatter,
}: MentionsPageType) {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </head>
      <article className="prose prose-lg max-w-none">
        <MDXRemote {...source} />
      </article>
    </main>
  );
}
