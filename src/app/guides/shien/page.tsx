import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata = createMetadata({
  title: "難病患者が使える支援制度と相談窓口まとめ",
  description:
    "難病相談支援センター・就労支援・障害年金・介護保険・患者会・家族会の探し方など、難病患者と家族が利用できる支援制度をまとめています。",
});

const links = [
  { name: "難病情報センター", url: "https://www.nanbyou.or.jp/", desc: "厚生労働省委託。制度・疾患情報の総合サイト" },
  { name: "AMED（日本医療研究開発機構）", url: "https://www.amed.go.jp/", desc: "難病研究・治験情報" },
  { name: "jRCT（臨床研究等提出・公開システム）", url: "https://jrct.niph.go.jp/", desc: "国内治験・臨床研究の検索" },
  { name: "難病のこどもの支援全国ネットワーク", url: "https://www.nanbyou-kodomo.jp/", desc: "小児難病の相談・支援" },
  { name: "障害年金ナビ（日本年金機構）", url: "https://www.nenkin.go.jp/", desc: "障害年金の手続き・認定基準" },
];

export default function ShienPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-indigo-600">制度ガイド</Link>
        <span>/</span>
        <span>支援・相談窓口</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        難病患者が使える支援制度と相談窓口まとめ
      </h1>
      <p className="text-slate-600 mb-10">
        難病・希少疾患の方が利用できる各種支援制度と相談窓口を一覧にしました。一人で悩まずに、まず相談してみましょう。
      </p>

      {/* 1. 難病相談支援センター */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          1. 難病相談・支援センター
        </h2>
        <div className="bg-indigo-50 rounded-xl p-6 mb-4">
          <p className="text-slate-700 leading-relaxed mb-3">
            各都道府県に設置されている公的な相談窓口です。難病患者・家族からの療養・就労・生活全般の相談を無料で受け付けています。同じ疾患の患者との交流会なども開催しています。
          </p>
          <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
            <li>療養に関する相談（医療機関・制度紹介）</li>
            <li>就労・生活に関する相談</li>
            <li>患者・家族交流会・ピアサポート</li>
            <li>専門の相談員（保健師・社会福祉士など）が対応</li>
          </ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <strong>探し方：</strong>「（都道府県名） 難病相談支援センター」で検索、または難病情報センターのサイトから各都道府県の一覧を確認できます。
        </div>
      </section>

      {/* 2. 就労支援 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          2. 就労支援
        </h2>
        <div className="space-y-4">
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">ハローワーク 難病患者就職サポーター</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              ハローワーク（公共職業安定所）には、難病患者の就職・就労継続を専門に支援する「難病患者就職サポーター」が配置されています。求職活動の支援・職場への定着支援・事業主への働きかけを行います。
            </p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">障害者手帳取得後の就労支援</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              難病でも障害者手帳を取得できる場合があります。手帳を取得すると、障害者雇用枠での就職、就労継続支援（A型・B型）、障害者職業センターの利用が可能になります。
            </p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">傷病手当金（在職中の所得保障）</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              健康保険に加入している方が病気・けがで仕事を休む場合、標準報酬日額の2/3を最長1年6ヶ月受け取れます。難病療養中でも対象になります。
            </p>
          </div>
        </div>
      </section>

      {/* 3. 障害年金 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          3. 障害年金との関係
        </h2>
        <div className="bg-violet-50 border border-violet-100 rounded-xl p-6">
          <p className="text-slate-700 leading-relaxed mb-3">
            難病は、障害年金の認定対象です。指定難病の認定を受けていなくても、障害の程度（障害等級1〜3級）に該当すれば受給できる場合があります。
          </p>
          <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside mb-3">
            <li>障害基礎年金（国民年金）：1・2級に該当する場合</li>
            <li>障害厚生年金（厚生年金）：1〜3級に該当する場合</li>
            <li>初診日から1年6ヶ月後（認定日）に請求可能</li>
          </ul>
          <p className="text-slate-600 text-sm">
            申請は複雑なため、社会保険労務士（社労士）への相談を推奨します。難病相談支援センターや市区町村の障害福祉担当窓口でも相談可能です。
          </p>
        </div>
      </section>

      {/* 4. 介護保険・障害福祉 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          4. 介護保険・障害福祉サービス
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">介護保険</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              40歳以上で特定疾病（16種類）に該当する場合は、介護認定を受けて介護保険サービスを利用できます。難病の多くが対象です。
            </p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">障害福祉サービス</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              障害者手帳がなくても、難病患者は障害福祉サービス（居宅介護・重度訪問介護など）を利用できる場合があります。市区町村の障害福祉担当窓口にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 患者会 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          5. 患者会・家族会の探し方
        </h2>
        <div className="bg-indigo-50 rounded-xl p-6">
          <p className="text-slate-700 leading-relaxed mb-3">
            同じ疾患を持つ患者や家族との繋がりは、心強い支えになります。患者会では、療養情報の共有・相談・交流会・治験情報の提供などが行われています。
          </p>
          <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
            <li>難病情報センターの「患者会情報」ページで検索</li>
            <li>各学会・研究班のウェブサイトで紹介されている場合あり</li>
            <li>SNS（X・Facebook等）で「（疾患名） 患者会」を検索</li>
            <li>難病相談支援センターに患者会情報を問い合わせる</li>
          </ul>
        </div>
      </section>

      {/* 6. リンク集 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          6. 主要リンク集
        </h2>
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <ExternalLink className="text-indigo-400 mt-0.5 shrink-0 group-hover:text-indigo-600" size={18} />
              <div>
                <div className="font-medium text-indigo-700 group-hover:underline">{link.name}</div>
                <div className="text-slate-500 text-sm">{link.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
