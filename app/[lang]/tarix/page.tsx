import SectionPage from "@/components/SectionPage";

export default async function TarixPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <SectionPage
      lang={lang}
      title="Tarix"
      description="Turkiy xalqlar va Markaziy Osiyo tarixiga oid materiallar."
    />
  );
}