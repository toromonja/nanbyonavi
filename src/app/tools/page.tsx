import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Calculator } from "lucide-react";

export const metadata = createMetadata({
  title: "計算ツール",
  description: "難病患者向けの計算ツール一覧です。医療費自己負担シミュレーターを提供しています。",
});

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">計算ツール</h1>
      <p className="text-slate-600 mb-10">難病患者の方のお役に立てるツールを提供しています。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          href="/tools/iryohi"
          className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Calculator className="text-blue-600" size={24} />
          </div>
          <h2 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-indigo-700 transition-colors">
            医療費自己負担シミュレーター
          </h2>
          <p className="text-slate-500 text-sm">毎月の医療費自己負担上限額を試算できます。</p>
        </Link>
      </div>
    </div>
  );
}
