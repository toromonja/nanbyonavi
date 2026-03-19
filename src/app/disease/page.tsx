import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import DiseaseListClient from "@/components/DiseaseListClient";
import { diseases } from "@/data/diseases";

export const metadata = createMetadata({
  title: "疾患を探す｜難病・希少疾患データベース",
  description:
    "指定難病・希少疾患のデータベース。疾患名での検索・カテゴリ絞り込みに対応。症状・原因・治療法・治験情報を掲載。",
  alternates: { canonical: "https://nanbyonavi.toromonja.com/disease" },
});

export default function DiseasePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">疾患を探す</h1>
      <p className="text-slate-600 mb-8">
        難病・希少疾患データベース。疾患名の検索やカテゴリ絞り込みで情報を探せます。
        <span className="ml-1 font-medium text-indigo-600">{diseases.length}疾患掲載</span>
      </p>
      <Suspense fallback={null}>
        <DiseaseListClient diseases={diseases} />
      </Suspense>
    </div>
  );
}
