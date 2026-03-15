import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export const metadata = createMetadata({
  title: "指定難病の医療費助成制度｜仕組みと自己負担上限額を解説",
  description:
    "指定難病とは何か、医療費助成の仕組み、所得区分別の自己負担上限額一覧、高額療養費との違い、小児慢性特定疾病制度をわかりやすく解説します。",
});

const costTable = [
  { category: "生活保護", monthly: "0円", note: "生活保護受給世帯" },
  { category: "低所得Ⅰ", monthly: "2,500円", note: "市町村民税非課税（本人年収80万円以下）" },
  { category: "低所得Ⅱ", monthly: "5,000円", note: "市町村民税非課税（本人年収80万円超）" },
  { category: "一般所得Ⅰ", monthly: "10,000円", note: "市町村民税課税（年収約160万円未満）" },
  { category: "一般所得Ⅱ", monthly: "20,000円", note: "市町村民税課税（年収約160万円以上）" },
  { category: "上位所得", monthly: "30,000円", note: "市町村民税（所得割）56万円以上" },
];

const faqs = [
  {
    q: "指定難病に認定されると保険適用外の治療も助成されますか？",
    a: "医療費助成は保険診療が対象です。保険適用外（自由診療）の治療費は助成されません。",
  },
  {
    q: "難病の認定申請中でも助成は受けられますか？",
    a: "申請中は助成を受けられませんが、認定後に申請日まで遡って適用されます（申請月から有効）。",
  },
  {
    q: "所得区分はどのように決まりますか？",
    a: "申請者および同一世帯の配偶者の市町村民税の課税状況・課税額をもとに判定されます。",
  },
  {
    q: "複数の難病を持っている場合は？",
    a: "複数の指定難病を持つ場合、それぞれの診断書が必要ですが、医療費の合算ができる場合があります。主治医・保健所にご確認ください。",
  },
];

export default function SeidoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* パンくず */}
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-indigo-600">制度ガイド</Link>
        <span>/</span>
        <span>医療費助成制度</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        指定難病の医療費助成制度｜仕組みと自己負担上限額を解説
      </h1>
      <p className="text-slate-600 mb-10">
        指定難病に認定されると、医療費の自己負担が大幅に軽減されます。制度の仕組みをわかりやすく解説します。
      </p>

      {/* 1. 指定難病とは */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          1. 指定難病とは
        </h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          難病法（難病の患者に対する医療等に関する法律）に基づき、国が指定した疾患を「指定難病」といいます。2024年現在、338疾患が指定されています。指定されるための4つの要件があります。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { num: "①", title: "発症メカニズムが不明", desc: "原因が解明されていないか、治療法が確立されていない" },
            { num: "②", title: "希少性", desc: "患者数が日本で一定数（人口の0.1%程度）に達しない" },
            { num: "③", title: "長期療養の必要性", desc: "慢性疾患で長期にわたる治療が必要" },
            { num: "④", title: "生活への影響", desc: "日常生活や社会生活に支障がある" },
          ].map((item) => (
            <div key={item.num} className="bg-indigo-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-indigo-600 font-bold text-lg">{item.num}</span>
                <span className="font-semibold text-slate-800">{item.title}</span>
              </div>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 医療費助成の仕組み */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          2. 医療費助成の仕組み
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          指定難病と認定された方は、医療機関での窓口負担が通常の3割から2割に軽減され、さらに月ごとの自己負担上限額が設定されます。上限額を超えた医療費は公費で負担されます。
        </p>
        <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
          {[
            { label: "指定医を受診", sub: "難病指定医にかかる" },
            { label: "申請・認定", sub: "保健所に申請し審査" },
            { label: "受給者証交付", sub: "都道府県から発行" },
            { label: "窓口2割負担", sub: "月の上限額まで" },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-indigo-600 text-white rounded-xl px-4 py-3 text-center min-w-28">
                <div className="text-xs text-indigo-200 mb-0.5">STEP {i + 1}</div>
                <div className="font-bold text-sm">{step.label}</div>
                <div className="text-xs text-indigo-200 mt-0.5">{step.sub}</div>
              </div>
              {i < 3 && <ArrowRight className="text-indigo-400 hidden md:block" size={20} />}
            </div>
          ))}
        </div>
      </section>

      {/* 3. 自己負担上限額一覧 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          3. 自己負担上限額一覧（月額）
        </h2>
        <p className="text-slate-700 mb-4 text-sm">
          世帯の所得区分によって月額の自己負担上限額が決まります。上限を超えた分は全額公費負担です。
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-indigo-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">所得区分</th>
                <th className="px-4 py-3 text-left font-semibold">月額上限（外来＋入院）</th>
                <th className="px-4 py-3 text-left font-semibold">目安</th>
              </tr>
            </thead>
            <tbody>
              {costTable.map((row, i) => (
                <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 font-medium text-slate-800">{row.category}</td>
                  <td className="px-4 py-3 font-bold text-indigo-600 text-lg">{row.monthly}</td>
                  <td className="px-4 py-3 text-slate-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 mt-2">※重症患者認定を受けた場合は上限額が半額になります。</p>
      </section>

      {/* 4. 高額療養費との違い */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          4. 高額療養費との違い
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 rounded-xl p-5">
            <h3 className="font-bold text-indigo-700 mb-2">指定難病の医療費助成</h3>
            <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
              <li>月額上限が低い（最大30,000円）</li>
              <li>外来・入院・薬局が合算される</li>
              <li>同一疾病に限定</li>
              <li>認定申請が必要</li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-xl p-5">
            <h3 className="font-bold text-slate-700 mb-2">高額療養費制度</h3>
            <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
              <li>月額上限が高め（約80,000円〜）</li>
              <li>全疾病の医療費が対象</li>
              <li>申請不要（保険者が自動計算）</li>
              <li>難病認定がない方でも使える</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-600 text-sm mt-4">
          難病の医療費助成を受けながら、高額療養費も組み合わせて利用できる場合があります。主治医や保健所にご相談ください。
        </p>
      </section>

      {/* 5. 小児慢性特定疾病 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          5. 小児慢性特定疾病制度（18歳未満）
        </h2>
        <div className="bg-violet-50 border border-violet-100 rounded-xl p-6">
          <p className="text-slate-700 leading-relaxed mb-3">
            18歳未満の子どもについては、「小児慢性特定疾病医療費助成制度」があります。対象疾病は現在800種類以上で、指定難病とは別の制度です。
          </p>
          <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
            <li>18歳到達後も一定条件で継続可能（最大20歳まで）</li>
            <li>自己負担上限は成人の指定難病よりも低め</li>
            <li>申請窓口は都道府県・政令市・中核市の担当課</li>
          </ul>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          6. よくある質問
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white border border-slate-200 rounded-xl p-4 group">
              <summary className="font-medium text-slate-800 cursor-pointer flex items-center justify-between list-none">
                <span>Q. {faq.q}</span>
                <ChevronDown className="text-indigo-400 group-open:rotate-180 transition-transform shrink-0" size={18} />
              </summary>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">A. {faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 次のステップ */}
      <div className="bg-indigo-700 text-white rounded-2xl p-6 text-center">
        <p className="text-indigo-200 text-sm mb-2">制度がわかったら次のステップへ</p>
        <h3 className="text-xl font-bold mb-4">実際に申請してみましょう</h3>
        <Link
          href="/guides/shinsei"
          className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-2.5 rounded-full hover:bg-indigo-50 transition-colors"
        >
          申請方法を見る <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
