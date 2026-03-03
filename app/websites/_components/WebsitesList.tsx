"use client";

import Website from "@/components/ui/Website";
import { Button } from "@/components/ui/Button";
import { WebsiteType } from "@/types/Website";

type WebsitesListType = { websites: WebsiteType[] };

export default function WebsitesList({ websites }: WebsitesListType) {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
        {websites.map((w, i) => (
          <Website key={`website-${i}`} website={w} />
        ))}
      </div>
      <footer className="pt-12 flex justify-center">
        <Button onClick={() => {}}>Charger plus de sites web</Button>
      </footer>
    </>
  );
}
