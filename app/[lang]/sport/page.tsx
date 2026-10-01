import SectionPage from "@/components/SectionPage";

export default async function SportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <SectionPage
      lang={lang}
      title="Sport"
      description="Sport olamidagi eng so‘nggi yangiliklar."
    />
  );
}