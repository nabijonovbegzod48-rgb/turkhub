import SectionPage from "@/components/SectionPage";

export default async function SiyosatPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <SectionPage
      lang={lang}
      title="Siyosat"
      description="Mintaqa va dunyodagi siyosiy jarayonlarning so‘nggi yangiliklari."
    />
  );
}