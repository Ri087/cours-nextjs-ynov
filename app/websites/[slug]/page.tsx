import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

export default async function WebsitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = createClient();
  const website = await client
    .getByUID("website", slug)
    .catch(() => notFound());

  return (
    <main>
      <WebsiteHeader website={website} />
    </main>
  );
}
