"use client";

import { useState } from "react";
import Link from "next/link";

type TaxStatus = "seikatsu_hogo" | "non_taxable_low" | "non_taxable_high" | "taxable_low" | "taxable_mid" | "taxable_high";

interface IncomeCategory {
  label: string;
  value: TaxStatus;
  monthly: number;
  desc: string;
}

const categories: IncomeCategory[] = [
  { label: "生活保護受給世帯", value: "seikatsu_hogo", monthly: 0, desc: "生活保護を受給している世帯" },
  { label: "低所得Ⅰ（非課税・本人年収80万円以下）", value: "non_taxable_low", monthly: 2500, desc: "市町村民税非課税で本人年収が80万円以下" },
  { label: "低所得Ⅱ（非課税・本人年収80万円超）", value: "non_taxable_high", monthly: 5000, desc: "市町村民税非課税で本人年収が80万円超" },
  { label: "一般所得Ⅰ（課税・年収約160万円未満）", value: "taxable_low", monthly: 10000, desc: "市町村民税課税で年収が約160万円未満" },
  { label: "一般所得Ⅱ（課税・年収約160〜370万円）", value: "taxable_mid", monthly: 20000, desc: "市町村民税課税で年収が約160〜370万円" },
  { label: "上位所得（市町村民税所得割56万円以上）", value: "taxable_high", monthly: 30000, desc: "市町村民税所得割が56万円以上" },
];

// 一般的な3割負担の月額（仮定値：難病患者平均医療費）
const TYPICAL_MONTHLY_MEDICAL_WITHOUT = 80000;

export default function IryohiPage() {
  const [selected, setSelected] = useState<TaxStatus | "">("");
  const [isJuushou, setIsJuushou] = useState(false);

  const selectedCategory = categories.find((c) => c.value === selected);

  const monthlyLimit = selectedCategory
    ? isJuushou && selectedCategory.monthly > 0
      ? Math.floor(selectedCategory.monthly / 2)
      : selectedCategory.monthly
    : null;

  const monthlySaving =
    monthlyLimit !== null ? Math.max(0, TYPICAL_MONTHLY_MEDICAL_WITHOUT - monthlyLimit) : null;
  const yearlySaving = monthlySaving !== null ? monthlySaving * 12 : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-indigo-600">計算ツール</Link>
        <span>/</span>
        <span>医療費シミュレーター</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        医療費自己負担シミュレーター
      </h1>
      <p className="text-slate-600 mb-8">
        指定難病の医療費助成を受けた場合の月額自己負担上限額を試算できます。
      </p>

      {/* 入力フォーム */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <h2 className="font-bold text-slate-800 mb-4 text-lg">条件を入力してください</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            所得区分を選択 <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat.value}
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  selected === cat.value
                    ? "bg-indigo-50 border-indigo-300"
                    : "bg-slate-50 border-slate-200 hover:border-indigo-200"
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value={cat.value}
                  checked={selected === cat.value}
                  onChange={() => setSelected(cat.value)}
                  className="mt-0.5"
                />
                <div>
                  <div className="text-sm font-medium text-slate-800">{cat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{cat.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
            isJuushou ? "bg-violet-50 border-violet-300" : "bg-slate-50 border-slate-200 hover:border-violet-200"
          }`}>
            <input
              type="checkbox"
              checked={isJuushou}
              onChange={(e) => setIsJuushou(e.target.checked)}
            />
            <div>
              <div className="text-sm font-medium text-slate-800">重症患者認定を受けている</div>
              <div className="text-xs text-slate-500 mt-0.5">認定を受けると自己負担上限が半額になります（生活保護を除く）</div>
            </div>
          </label>
        </div>
      </div>

      {/* 結果 */}
      {monthlyLimit !== null && selectedCategory && (
        <div className="space-y-4">
          {/* メイン結果 */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white">
            <p className="text-indigo-200 text-sm mb-1">月額自己負担上限額</p>
            <p className="text-5xl font-bold mb-1">
              {monthlyLimit.toLocaleString()}円
            </p>
            {isJuushou && selectedCategory.monthly > 0 && (
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">重症患者認定適用（半額）</span>
            )}
          </div>

          {/* 比較表示 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-4">通常の3割負担との比較</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">助成なし（3割負担の目安）</p>
                <p className="text-2xl font-bold text-slate-700">
                  {TYPICAL_MONTHLY_MEDICAL_WITHOUT.toLocaleString()}円
                </p>
                <p className="text-xs text-slate-400 mt-1">月額</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 text-center">
                <p className="text-xs text-indigo-600 mb-1">助成後の上限</p>
                <p className="text-2xl font-bold text-indigo-700">
                  {monthlyLimit.toLocaleString()}円
                </p>
                <p className="text-xs text-indigo-400 mt-1">月額</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
              <p className="text-sm text-green-700 mb-1">月間節約額（目安）</p>
              <p className="text-3xl font-bold text-green-700">
                {monthlySaving !== null ? monthlySaving.toLocaleString() : "—"}円
              </p>
              <p className="text-xs text-green-600 mt-1">
                年間換算: <strong>{yearlySaving !== null ? yearlySaving.toLocaleString() : "—"}円</strong>の節約
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>注意：</strong>この試算は参考値です。3割負担の目安額は難病患者の平均的な医療費を仮定しており、実際の金額は疾患・治療内容によって大きく異なります。正確な情報は保健所・主治医にご確認ください。また、助成を受けるには認定申請が必要です。
          </div>
        </div>
      )}

      {!selected && (
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center text-slate-400">
          <p>上のフォームで所得区分を選択すると、試算結果が表示されます。</p>
        </div>
      )}
    </div>
  );
}
