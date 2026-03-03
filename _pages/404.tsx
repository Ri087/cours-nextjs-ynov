import { ButtonLink } from "@/components/ui/ButtonLink";

export default function Custom404() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-6xl font-bold uppercase">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oups ! La page que vous recherchez n&apos;existe pas.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="link">
          Retour à l&apos;accueil
        </ButtonLink>
      </div>
    </main>
  );
}
