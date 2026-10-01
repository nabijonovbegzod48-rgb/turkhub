import SectionPage from "@/components/SectionPage";

export default async function KunXabariPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <SectionPage
      lang={lang}
      title="Kun xabari"
      description="Bugunning eng muhim va dolzarb yangiliklari."
    />
  );
}