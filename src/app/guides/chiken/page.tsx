import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ExternalLink, ChevronDown } from "lucide-react";

export const metadata = createMetadata({
  title: "治験に参加するには？難病・希少疾患の治験情報の探し方",
  description:
    "難病・希少疾患の治験に参加する方法・探し方・メリット・デメリット・注意点をわかりやすく解説。jRCT・ClinicalTrials.govの使い方も紹介。",
});

const phases = [
  { phase: "フェーズ1", desc: "少人数（健常者など）で安全性・用量を確認する段階" },
  { phase: "フェーズ2", desc: "少人数の患者で有効性・安全性を評価する段階" },
  { phase: "フェーズ3", desc: "多数の患者で既存治療との比較を行い承認を目指す段階" },
  { phase: "フェーズ4", desc: "承認後の市販後調査（安全性モニタリング）" },
];

const faqs = [
  {
    q: "治験に参加すると費用はかかりますか？",
    a: "治験に参加している期間の治験薬・検査費用は通常無料です。交通費の補助が出る場合もあります。ただし試験期間外の通常診療費は自己負担です。",
  },
  {
    q: "治験中に普通の病院にもかかれますか？",
    a: "かかれますが、治験薬と他の薬の相互作用を避けるため、治験実施医療機関に必ず報告する必要があります。自己判断で薬の追加・変更はしないでください。",
  },
  {
    q: "途中でやめることはできますか？",
    a: "治験は自由意思に基づくものです。いつでも理由を問わず辞退できます。辞退しても不利益を受けることはありません。",
  },
  {
    q: "希少疾患で患者数が少ない場合はどうなりますか？",
    a: "希少疾患では「患者申出療養」や「拡大治験（EAP）」などの仕組みがあり、正式な治験に参加できない方でも未承認薬を使用できる場合があります。",
  },
];

export default function ChikenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-indigo-600">制度ガイド</Link>
        <span>/</span>
        <span>治験ガイド</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        治験に参加するには？難病・希少疾患の治験情報の探し方
      </h1>
      <p className="text-slate-600 mb-10">
        「新しい治療を試したい」「まだ承認されていない薬を使いたい」という方へ。治験の仕組みと参加方法を解説します。
      </p>

      {/* 1. 治験とは */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          1. 治験とは
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          治験とは、新しい薬や医療機器の有効性・安全性を確認するための臨床試験です。国（薬機法）の承認を得るために必要なプロセスで、厳格な管理のもとで行われます。
        </p>
        <div className="space-y-3">
          {phases.map((p) => (
            <div key={p.phase} className="flex gap-4 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
              <div className="bg-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shrink-0 flex items-center">
                {p.phase}
              </div>
              <p className="text-slate-600 text-sm flex items-center">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 治験の探し方 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          2. 治験を探す方法
        </h2>
        <div className="space-y-6">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              jRCT（Japan Registry of Clinical Trials）
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              国内の臨床研究・治験を一元管理する公式データベース（厚生労働省）。疾患名や薬剤名で検索できます。「募集中」でフィルタリングすると参加可能な試験が見つかります。
            </p>
            <a
              href="https://jrct.niph.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium text-sm"
            >
              jRCTを開く <ExternalLink size={14} />
            </a>
          </div>
          <div className="bg-violet-50 rounded-xl p-6">
            <h3 className="font-bold text-slate-800 mb-2">ClinicalTrials.gov（米国）</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              米国NIHが運営する世界最大の臨床試験データベース。国際的な治験も掲載されており、日本の施設が参加している試験も検索できます。英語サイトですが、疾患名の英語表記で検索可能。
            </p>
            <a
              href="https://clinicaltrials.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-violet-600 hover:text-violet-800 font-medium text-sm"
            >
              ClinicalTrials.govを開く <ExternalLink size={14} />
            </a>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">主治医・専門医に相談</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              治験情報は公開されていないものもあります。専門医・研究班に直接問い合わせるのが最も確実です。難病情報センターの各疾患ページに研究班の連絡先が掲載されています。
            </p>
          </div>
        </div>
      </section>

      {/* 3. メリット・デメリット */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          3. 参加のメリット・デメリット・注意点
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-green-50 border border-green-100 rounded-xl p-5">
            <h3 className="font-bold text-green-700 mb-3">メリット</h3>
            <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
              <li>未承認の新薬・治療に早期アクセスできる</li>
              <li>治験薬・検査費用が無料</li>
              <li>頻回の診察・検査で健康管理が充実</li>
              <li>医学・社会への貢献になる</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <h3 className="font-bold text-red-700 mb-3">デメリット・リスク</h3>
            <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
              <li>プラセボ（偽薬）群に割り当てられる場合がある</li>
              <li>未知の副作用・有害事象のリスク</li>
              <li>来院・検査の頻度が増える</li>
              <li>生活上の制約（食事・飲酒など）が課せられる場合がある</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 患者申出療養・拡大治験 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          4. 患者申出療養・拡大治験（EAP）
        </h2>
        <div className="space-y-4">
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">患者申出療養</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              患者自らが申請することで、保険診療と組み合わせて未承認薬等を使用できる制度（2016年〜）。通常治験の対象外となった方や、治験が実施されていない疾患の方が利用できる場合があります。申請には病院・患者の共同申請が必要です。
            </p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">拡大治験（EAP: Expanded Access Program）</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              承認申請中の薬を、治験対象外の患者が使用できる仕組みです。製薬会社が独自に設定する場合があります。希少疾患では選択肢になり得ます。主治医を通じて確認してください。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 参加前チェックリスト */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          5. 参加前に確認すること（チェックリスト）
        </h2>
        <div className="bg-indigo-50 rounded-xl p-6">
          <ul className="space-y-3">
            {[
              "試験のフェーズ・目的を理解している",
              "プラセボ群の可能性について納得している",
              "来院頻度・期間の制約を把握している",
              "インフォームドコンセント（説明同意文書）を十分に読んだ",
              "副作用発生時の補償・対応を確認した",
              "主治医・家族と相談した",
              "辞退できることを確認した",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                <span className="text-indigo-600 mt-0.5">☑</span>
                {item}
              </li>
            ))}
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
    </div>
  );
}
