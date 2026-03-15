"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { diseases } from "@/data/diseases";

const POPULAR_SLUGS = [
  { slug: "als",                label: "ALS（筋萎縮性側索硬化症）" },
  { slug: "crohn",              label: "クローン病" },
  { slug: "sle",                label: "SLE（全身性エリテマトーデス）" },
  { slug: "parkinsons",         label: "パーキンソン病" },
  { slug: "fabry",              label: "ファブリー病" },
  { slug: "eb",                 label: "表皮水疱症" },
];

export default function HeroDiseaseSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 候補絞り込み（最大8件）
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return diseases
      .filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.nameEn.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  // 外側クリックで閉じる
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/disease?search=${encodeURIComponent(query.trim())}`);
    }
  }

  function handleSelect(slug: string) {
    setQuery("");
    setOpen(false);
    router.push(`/disease/${slug}`);
  }

  return (
    <section className="py-12 max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-slate-800 text-center mb-2">
        疾患名から探す
      </h2>
      <p className="text-slate-500 text-center text-sm mb-6">
        疾患名を入力すると候補が表示されます
      </p>

      {/* 検索ボックス */}
      <div ref={wrapperRef} className="relative mb-6">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              placeholder="疾患名を入力... （例: ALS、クローン病、ファブリー病）"
              className="w-full pl-12 pr-32 py-4 rounded-2xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 shadow-md text-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2 rounded-xl transition-colors"
            >
              検索
            </button>
          </div>
        </form>

        {/* ドロップダウン候補 */}
        {open && suggestions.length > 0 && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
            {suggestions.map((d) => (
              <button
                key={d.slug}
                onMouseDown={() => handleSelect(d.slug)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-indigo-50 transition-colors text-left border-b border-slate-100 last:border-0"
              >
                <div>
                  <span className="text-sm font-medium text-slate-800">{d.name}</span>
                  <span className="ml-2 text-xs text-slate-400">{d.nameEn}</span>
                </div>
                <ChevronRight size={14} className="text-indigo-400 shrink-0" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* よく調べられている疾患 */}
      <div>
        <p className="text-slate-500 text-xs font-medium mb-3 text-center">
          よく調べられている疾患
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {POPULAR_SLUGS.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/disease/${slug}`}
              className="text-sm font-medium px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-100 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* 一覧へのリンク */}
      <div className="text-center mt-6">
        <Link
          href="/disease"
          className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-medium text-sm"
        >
          すべての疾患を一覧で見る
          <ChevronRight size={14} />
        </Link>
      </div>
    </section>
  );
}
