import fs from "fs";
import path from "path";
import { Button } from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import Website from "@/components/ui/Website";
import { WebsiteType } from "@/types/Website";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "websites.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const websites = JSON.parse(fileContent);
  return { props: { websites } };
}

type WebsitesPageType = {
  websites: WebsiteType[];
};
export default function WebsitesPage({ websites }: WebsitesPageType) {
  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
        {websites.map((w, i) => (
          <Website key={`website-${i}`} website={w} />
        ))}
      </div>
      <footer className="pt-12 flex justify-center">
        <Button onClick={() => {}}>Charger plus de sites web</Button>
      </footer>
    </main>
  );
}
