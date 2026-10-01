import SectionPage from "@/components/SectionPage";

export default async function VideoXabarPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <SectionPage
      lang={lang}
      title="Video xabar"
      description="Eng muhim yangiliklar va voqealarning video lavhalari."
    />
  );
}