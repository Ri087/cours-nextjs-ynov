import fs from "fs";
import path from "path";
import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";

function getWebsites(): WebsiteType[] {
  const filePath = path.join(process.cwd(), "public", "websites.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export async function getStaticPaths() {
  const websites = getWebsites();
  const paths = websites.map((w: WebsiteType) => ({
    params: { slug: w.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const websites = getWebsites();
  const currentWebsite = websites.find((w: WebsiteType) => w.slug == slug);
  if (!currentWebsite) return { notFound: true };

  return { props: { website: currentWebsite } };
}

type WebsitePageType = {
  website: WebsiteType;
};

export default function WebsitePage({ website }: WebsitePageType) {
  return (
    <main>
      <WebsiteHeader website={website} />
    </main>
  );
}
