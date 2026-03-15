import type { Metadata } from "next";

export const siteUrl = "https://nanbyonavi.toromonja.com";
export const siteName = "ナンビョウナビ";
export const siteDescription =
  "指定難病・希少疾患の医療費助成制度・申請方法・支援窓口・治験情報をわかりやすく解説。患者・家族が安心して使える情報ナビ。";

export function createMetadata(override: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteName}｜難病・希少疾患の患者と家族のための情報サイト`,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    openGraph: {
      type: "website",
      siteName,
      images: [{ url: "/ogp.svg", width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/ogp.svg"],
    },
    robots: { index: true, follow: true },
    ...override,
  };
}
