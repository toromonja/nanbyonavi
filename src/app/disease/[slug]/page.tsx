import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, BookOpen, AlertTriangle } from "lucide-react";
import { diseases, getDiseaseBySlug } from "@/data/diseases";
import { siteUrl } from "@/lib/metadata";
import ClinicalTrials from "@/components/ClinicalTrials";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);
  if (!disease) return {};
  return {
    title: `${disease.name}｜症状・原因・治療法`,
    description: disease.overview,
    alternates: {
      canonical: `${siteUrl}/disease/${disease.slug}`,
    },
    openGraph: {
      title: `${disease.name}｜症状・原因・治療法 | ナンビョウナビ`,
      description: disease.overview,
    },
  };
}

const categoryColorMap: Record<string, { badge: string; bg: string; border: string }> = {
  neuro:         { badge: "bg-indigo-100 text-indigo-700",  bg: "bg-indigo-50",  border: "border-indigo-200" },
  immune:        { badge: "bg-violet-100 text-violet-700",  bg: "bg-violet-50",  border: "border-violet-200" },
  respiratory:   { badge: "bg-sky-100 text-sky-700",        bg: "bg-sky-50",     border: "border-sky-200" },
  renal:         { badge: "bg-cyan-100 text-cyan-700",      bg: "bg-cyan-50",    border: "border-cyan-200" },
  ophthalmology: { badge: "bg-lime-100 text-lime-700",      bg: "bg-lime-50",    border: "border-lime-200" },
  gastro:        { badge: "bg-green-100 text-green-700",    bg: "bg-green-50",   border: "border-green-200" },
  cardio:        { badge: "bg-pink-100 text-pink-700",      bg: "bg-pink-50",    border: "border-pink-200" },
  metabolic:     { badge: "bg-amber-100 text-amber-700",    bg: "bg-amber-50",   border: "border-amber-200" },
  blood:         { badge: "bg-red-100 text-red-700",        bg: "bg-red-50",     border: "border-red-200" },
  skin:          { badge: "bg-orange-100 text-orange-700",  bg: "bg-orange-50",  border: "border-orange-200" },
  bone:          { badge: "bg-teal-100 text-teal-700",      bg: "bg-teal-50",    border: "border-teal-200" },
};

const sectionClass = "mb-10";
const headingClass =
  "text-xl font-bold text-indigo-700 mb-3 pb-2 border-b border-indigo-100 flex items-center gap-2";

export default async function DiseasePage({ params }: Props) {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);
  if (!disease) notFound();

  const color = categoryColorMap[disease.categorySlug] ?? categoryColorMap["neuro"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* パンくず */}
      <nav className="text-sm text-slate-500 mb-6 flex flex-wrap items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <ChevronRight size={14} />
        <Link href="/disease" className="hover:text-indigo-600">疾患を探す</Link>
        <ChevronRight size={14} />
        <span className="text-slate-700">{disease.name}</span>
      </nav>

      {/* タイトルヘッダー */}
      <div className={`rounded-2xl border p-6 mb-10 ${color.bg} ${color.border}`}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${color.badge}`}>
            {disease.category}
          </span>
          {disease.nanbyoNumber && (
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/70 text-slate-600 border border-slate-200">
              指定難病 第{disease.nanbyoNumber}号
            </span>
          )}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
          {disease.name}
        </h1>
        <p className="text-slate-500 text-sm">{disease.nameEn}</p>
      </div>

      {/* 概要 */}
      <section className={sectionClass}>
        <h2 className={headingClass}>
          <BookOpen size={20} className="text-indigo-500" />
          概要
        </h2>
        <p className="text-slate-700 leading-relaxed">{disease.overview}</p>
      </section>

      {/* 主な症状 */}
      <section className={sectionClass}>
        <h2 className={headingClass}>
          <span className="text-indigo-500 text-lg">＋</span>
          主な症状
        </h2>
        <ul className="space-y-2">
          {disease.symptoms.map((s, i) => (
            <li key={i} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="mt-0.5 text-indigo-500 shrink-0">
                <ChevronRight size={16} />
              </span>
              <span className="text-slate-700 text-sm leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 原因・メカニズム */}
      <section className={sectionClass}>
        <h2 className={headingClass}>
          <span className="text-indigo-500 text-lg">🔬</span>
          原因・メカニズム
        </h2>
        <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
          <p className="text-slate-700 text-sm leading-relaxed">{disease.causes}</p>
        </div>
      </section>

      {/* 診断方法 */}
      <section className={sectionClass}>
        <h2 className={headingClass}>
          <span className="text-indigo-500 text-lg">🩺</span>
          診断方法
        </h2>
        <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
          <p className="text-slate-700 text-sm leading-relaxed">{disease.diagnosis}</p>
        </div>
      </section>

      {/* 治療法 */}
      <section className={sectionClass}>
        <h2 className={headingClass}>
          <span className="text-indigo-500 text-lg">💊</span>
          治療法
        </h2>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <p className="text-slate-700 text-sm leading-relaxed">{disease.treatment}</p>
        </div>
      </section>

      {/* 経過・予後 */}
      {disease.prognosis && (
        <section className={sectionClass}>
          <h2 className={headingClass}>
            <span className="text-indigo-500 text-lg">📈</span>
            経過・予後
          </h2>
          <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
            <p className="text-slate-700 text-sm leading-relaxed">{disease.prognosis}</p>
          </div>
        </section>
      )}

      {/* ─── 治験情報（リアルタイム取得） ─── */}
      <section className={sectionClass}>
        <h2 className={headingClass}>
          <span className="text-indigo-500 text-lg">🔬</span>
          治験情報
        </h2>
        <ClinicalTrials
          diseaseNameEn={disease.nameEn}
          diseaseNameJa={disease.name}
          jrctSearchUrl={disease.jrctSearchUrl}
        />
      </section>

      {/* 難病情報センターリンク */}
      {disease.nanbyouInfoUrl && (
        <section className={sectionClass}>
          <h2 className={headingClass}>
            <BookOpen size={20} className="text-indigo-500" />
            詳しい情報
          </h2>
          <a
            href={disease.nanbyouInfoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-medium text-sm px-5 py-3 rounded-xl transition-colors"
          >
            難病情報センターで詳細を見る
            <span className="text-indigo-300 text-xs">（厚生労働省委託）</span>
          </a>
        </section>
      )}

      {/* 注意事項 */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 mb-10">
        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
        <div className="text-sm text-amber-800 leading-relaxed">
          <strong>注意：</strong>
          本サイトの情報は一般的な医療情報の提供を目的としています。記載内容は作成時点の情報に基づくものであり、最新の情報と異なる場合があります。診断・治療については必ず専門医にご相談ください。
        </div>
      </div>

      {/* フッターナビ */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
        <Link
          href="/disease"
          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          <ChevronRight size={14} className="rotate-180" />
          疾患一覧へ戻る
        </Link>
        <Link
          href="/guides/seido"
          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium sm:ml-auto"
        >
          医療費助成制度を確認する
          <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
