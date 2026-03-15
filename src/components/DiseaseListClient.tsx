"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronRight, X } from "lucide-react";
import type { Disease } from "@/data/diseases";

// ─── カテゴリ定義 ─────────────────────────────────────────
const CATEGORIES = [
  { slug: "all",           label: "すべて" },
  { slug: "neuro",         label: "神経・筋疾患" },
  { slug: "immune",        label: "免疫・膠原病" },
  { slug: "respiratory",   label: "呼吸器疾患" },
  { slug: "renal",         label: "腎・泌尿器疾患" },
  { slug: "ophthalmology", label: "眼疾患" },
  { slug: "gastro",        label: "消化器疾患" },
  { slug: "cardio",        label: "循環器疾患" },
  { slug: "metabolic",     label: "代謝疾患" },
  { slug: "blood",         label: "血液疾患" },
  { slug: "skin",          label: "皮膚疾患" },
  { slug: "bone",          label: "骨・関節疾患" },
] as const;

type CategorySlug = typeof CATEGORIES[number]["slug"];

// ─── カラーマップ ─────────────────────────────────────────
const CATEGORY_COLOR: Record<string, { badge: string; border: string; hover: string }> = {
  neuro:         { badge: "bg-indigo-100 text-indigo-700",  border: "border-indigo-100", hover: "hover:border-indigo-300" },
  immune:        { badge: "bg-violet-100 text-violet-700",  border: "border-violet-100", hover: "hover:border-violet-300" },
  respiratory:   { badge: "bg-sky-100 text-sky-700",        border: "border-sky-100",    hover: "hover:border-sky-300" },
  renal:         { badge: "bg-cyan-100 text-cyan-700",      border: "border-cyan-100",   hover: "hover:border-cyan-300" },
  ophthalmology: { badge: "bg-lime-100 text-lime-700",      border: "border-lime-100",   hover: "hover:border-lime-300" },
  gastro:        { badge: "bg-green-100 text-green-700",    border: "border-green-100",  hover: "hover:border-green-300" },
  cardio:        { badge: "bg-pink-100 text-pink-700",      border: "border-pink-100",   hover: "hover:border-pink-300" },
  metabolic:     { badge: "bg-amber-100 text-amber-700",    border: "border-amber-100",  hover: "hover:border-amber-300" },
  blood:         { badge: "bg-red-100 text-red-700",        border: "border-red-100",    hover: "hover:border-red-300" },
  skin:          { badge: "bg-orange-100 text-orange-700",  border: "border-orange-100", hover: "hover:border-orange-300" },
  bone:          { badge: "bg-teal-100 text-teal-700",      border: "border-teal-100",   hover: "hover:border-teal-300" },
};

function getColor(slug: string) {
  return CATEGORY_COLOR[slug] ?? CATEGORY_COLOR["neuro"];
}

// ─── 疾患カード ───────────────────────────────────────────
function DiseaseCard({ disease }: { disease: Disease }) {
  const color = getColor(disease.categorySlug);
  return (
    <Link
      href={`/disease/${disease.slug}`}
      className={`group flex flex-col bg-white rounded-2xl border shadow-sm p-5 transition-all hover:shadow-md ${color.border} ${color.hover}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${color.badge}`}>
          {disease.category}
        </span>
        {disease.nanbyoNumber && (
          <span className="text-xs text-slate-400">第{disease.nanbyoNumber}号</span>
        )}
      </div>
      <h2 className="font-bold text-slate-800 text-base leading-snug mb-1 group-hover:text-indigo-700 transition-colors">
        {disease.name}
      </h2>
      <p className="text-slate-400 text-xs mb-3">{disease.nameEn}</p>
      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 flex-1 mb-4">
        {disease.overview}
      </p>
      <div className="flex items-center gap-1 text-indigo-600 text-xs font-semibold mt-auto">
        詳しく見る
        <ChevronRight size={13} />
      </div>
    </Link>
  );
}

// ─── メインコンポーネント ─────────────────────────────────
interface Props {
  diseases: Disease[];
  initialSearch?: string;
}

export default function DiseaseListClient({ diseases, initialSearch = "" }: Props) {
  const [query, setQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<CategorySlug>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return diseases.filter((d) => {
      const matchCat = activeCategory === "all" || d.categorySlug === activeCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        d.name.toLowerCase().includes(q) ||
        d.nameEn.toLowerCase().includes(q) ||
        d.overview.toLowerCase().includes(q)
      );
    });
  }, [diseases, query, activeCategory]);

  const countByCategory = useMemo(() => {
    const map: Record<string, number> = { all: diseases.length };
    for (const d of diseases) {
      map[d.categorySlug] = (map[d.categorySlug] ?? 0) + 1;
    }
    return map;
  }, [diseases]);

  return (
    <>
      {/* 検索ボックス */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="疾患名・英語名で検索..."
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 shadow-sm text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            aria-label="クリア"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => {
          const count = countByCategory[cat.slug] ?? 0;
          const isActive = activeCategory === cat.slug;
          return (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                isActive
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-700"
              }`}
            >
              {cat.label}
              <span className={`ml-1.5 text-xs ${isActive ? "text-indigo-200" : "text-slate-400"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 結果件数 */}
      <p className="text-slate-500 text-sm mb-4">
        {filtered.length}件の疾患が見つかりました
        {query && (
          <span className="ml-2 text-indigo-600 font-medium">「{query}」の検索結果</span>
        )}
      </p>

      {/* 疾患カードグリッド */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((d) => (
            <DiseaseCard key={d.slug} disease={d} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-slate-500 text-lg mb-2">該当する疾患が見つかりませんでした</p>
          <p className="text-slate-400 text-sm mb-6">別のキーワードや英語表記でお試しください</p>
          <button
            onClick={() => { setQuery(""); setActiveCategory("all"); }}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-colors"
          >
            すべての疾患を表示する
          </button>
        </div>
      )}

      {/* 注意書き */}
      <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
        <strong>ご注意：</strong>掲載疾患は代表的な指定難病・希少疾患の一部です。指定難病の完全な一覧は
        <a
          href="https://www.nanbyou.or.jp/entry/5048"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1"
        >
          難病情報センター
        </a>
        をご確認ください。
      </div>
    </>
  );
}
