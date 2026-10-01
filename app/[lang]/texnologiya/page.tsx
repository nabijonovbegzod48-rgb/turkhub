import SectionPage from "@/components/SectionPage";

export default async function TexnologiyaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <SectionPage
      lang={lang}
      title="Texnologiya"
      description="Sun’iy intellekt, IT va zamonaviy texnologiyalar yangiliklari."
    />
  );
}