import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "免責事項",
  description: "ナンビョウナビの免責事項です。",
});

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <span>免責事項</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-800 mb-8">免責事項</h1>
      <div className="space-y-8 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">情報の正確性について</h2>
          <p className="leading-relaxed">
            当サイト（ナンビョウナビ）に掲載する情報は、できる限り正確な内容を提供するよう努めていますが、情報の完全性・正確性・最新性を保証するものではありません。制度・法令は改正される場合があります。最新情報は必ず難病情報センター・厚生労働省・各都道府県・保健所等の公的機関にてご確認ください。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">医療行為・診断について</h2>
          <p className="leading-relaxed">
            当サイトは医療行為・診断を提供するものではありません。疾患の診断・治療方針・薬の使用等に関する判断は、必ず担当医・医療専門家にご相談ください。当サイトの情報を根拠にした医療行為の結果については、一切の責任を負いかねます。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">シミュレーターについて</h2>
          <p className="leading-relaxed">
            医療費シミュレーターの計算結果は参考値であり、実際の自己負担額を保証するものではありません。実際の金額は疾患・治療内容・申請状況等によって異なります。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">損害について</h2>
          <p className="leading-relaxed">
            当サイトの利用、または利用不可によって生じたいかなる損害についても、運営者は責任を負いません。
          </p>
        </section>
        <p className="text-slate-400 text-sm">最終更新日: 2026年3月15日</p>
      </div>
    </div>
  );
}
