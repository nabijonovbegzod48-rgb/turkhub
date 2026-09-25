import TurkHubHome from "@/components/TurkHubHome";

const languages = ["uz", "tr", "kz", "en"] as const;

export function generateStaticParams() {
  return languages.map((lang) => ({
    lang,
  }));
}

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function LanguagePage({
  params,
}: Props) {
  const { lang } = await params;

  const currentLang = languages.includes(
    lang as (typeof languages)[number],
  )
    ? lang
    : "uz";

  return <TurkHubHome lang={currentLang} />;
}