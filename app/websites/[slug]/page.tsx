import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";

export async function generateStaticParams() {
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );

  return websites.map((w: WebsiteType) => ({
    slug: w.slug,
  }));
}

type WebsitePageType = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WebsitePage({ params }: WebsitePageType) {
  const { slug } = await params;
  const websites: WebsiteType[] = await fetch(
    "http://localhost:3000/websites.json",
  ).then((res) => res.json());
  const currentWebsite = websites.find((w: WebsiteType) => w.slug == slug);
  console.log("currentWebsite: ", currentWebsite);

  return (
    <main>{currentWebsite && <WebsiteHeader website={currentWebsite} />}</main>
  );
}
