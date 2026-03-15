"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckSquare, Square, ChevronDown, ArrowRight } from "lucide-react";

const checklistItems = [
  "臨床調査個人票（指定医が記載）",
  "住民票（世帯全員のもの・発行から3ヶ月以内）",
  "健康保険証の写し（申請者全員分）",
  "市町村民税の課税証明書または非課税証明書",
  "同意書（指定の様式）",
  "申請書（保健所の指定様式）",
  "（受診中の場合）受給者証",
  "（小児の場合）保護者の健康保険証・所得証明",
];

const faqs = [
  {
    q: "申請してから受給者証が届くまでどれくらいかかりますか？",
    a: "通常3〜6ヶ月程度かかります。審査中の医療費は、認定後に一時的に自己負担が多くなりますが、申請月に遡って助成が適用されます（後日精算）。",
  },
  {
    q: "指定医とは何ですか？どこで探せますか？",
    a: "都道府県が指定した「難病指定医」です。臨床調査個人票（診断書）を記載できる医師です。各都道府県の難病担当課のウェブサイトで検索できます。",
  },
  {
    q: "更新申請を忘れた場合はどうなりますか？",
    a: "受給者証の有効期限が切れると、助成が受けられなくなります。有効期限の約3ヶ月前に更新案内が届きますが、忘れた場合は速やかに保健所にご相談ください。",
  },
  {
    q: "引っ越した場合の手続きは？",
    a: "都道府県をまたぐ引っ越しの場合、新しい都道府県で新規申請が必要です。同一都道府県内であれば、変更届の提出で済む場合があります。",
  },
];

export default function ShinseiPage() {
  const [checked, setChecked] = useState<boolean[]>(new Array(checklistItems.length).fill(false));

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  const doneCount = checked.filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-indigo-600">制度ガイド</Link>
        <span>/</span>
        <span>申請方法</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        医療費助成の申請方法｜必要書類・窓口・流れ
      </h1>
      <p className="text-slate-600 mb-10">
        指定難病の医療費助成を受けるための申請手順を、わかりやすくステップ形式で解説します。
      </p>

      {/* 1. 申請の流れ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 pb-2 border-b border-indigo-100">
          1. 申請の流れ
        </h2>
        <div className="space-y-4">
          {[
            {
              step: "STEP 1",
              title: "指定医に診断書（臨床調査個人票）を依頼",
              desc: "かかりつけの医師が「難病指定医」であることを確認し、臨床調査個人票（診断書）の作成を依頼します。作成には数週間かかる場合があります。",
              note: "費用：文書作成料は自己負担（数千円〜1万円程度）",
            },
            {
              step: "STEP 2",
              title: "書類を揃える",
              desc: "臨床調査個人票のほか、住民票・健康保険証の写し・所得証明書などを準備します。下のチェックリストをご活用ください。",
              note: "住民票は発行から3ヶ月以内のものが必要",
            },
            {
              step: "STEP 3",
              title: "居住地の保健所に提出",
              desc: "必要書類をまとめて、住所地を管轄する保健所の難病担当窓口に持参または郵送します。",
              note: "窓口は都道府県によって異なります",
            },
            {
              step: "STEP 4",
              title: "審査・認定（約3〜6ヶ月）",
              desc: "都道府県の審査委員会が審査を行います。認定・不認定の通知が届きます。不認定の場合は不服申立ができます。",
              note: "審査中も医療は通常通り受けられます",
            },
            {
              step: "STEP 5",
              title: "受給者証が届く",
              desc: "認定されると「特定医療費（指定難病）受給者証」が発行されます。医療機関窓口に提示することで、助成が適用されます。",
              note: "有効期限（1年間）に注意・更新が必要",
            },
          ].map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                {i < 4 && <div className="w-0.5 h-full bg-indigo-200 mt-2" />}
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-4 mb-4 flex-1 shadow-sm">
                <div className="text-indigo-600 text-xs font-bold mb-1">{s.step}</div>
                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">{s.desc}</p>
                <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">{s.note}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 必要書類チェックリスト */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          2. 必要書類チェックリスト
        </h2>
        <div className="bg-indigo-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-indigo-700 font-medium text-sm">書類の準備状況</p>
            <span className="text-indigo-700 font-bold text-sm">{doneCount} / {checklistItems.length} 完了</span>
          </div>
          <div className="h-2 bg-indigo-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-indigo-600 rounded-full transition-all"
              style={{ width: `${(doneCount / checklistItems.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="space-y-2">
          {checklistItems.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                checked[i]
                  ? "bg-indigo-50 border-indigo-200"
                  : "bg-white border-slate-200 hover:border-indigo-200"
              }`}
            >
              {checked[i] ? (
                <CheckSquare className="text-indigo-600 shrink-0" size={20} />
              ) : (
                <Square className="text-slate-400 shrink-0" size={20} />
              )}
              <span className={`text-sm ${checked[i] ? "text-indigo-700 line-through" : "text-slate-700"}`}>
                {item}
              </span>
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3">※都道府県や疾患によって追加書類が必要な場合があります。保健所にご確認ください。</p>
      </section>

      {/* 3. 指定医とは */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          3. 指定医とは何か
        </h2>
        <div className="bg-violet-50 border border-violet-100 rounded-xl p-6">
          <p className="text-slate-700 leading-relaxed mb-3">
            難病指定医とは、都道府県から指定を受けた医師で、「臨床調査個人票（診断書）」を記載できます。「協力難病指定医」は診断書を作成できず、診断の補助のみを行います。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm">
            指定医かどうかは、かかりつけ医院に直接確認するか、各都道府県のウェブサイトで検索できます。大学病院・総合病院には多くの指定医がいます。
          </p>
        </div>
      </section>

      {/* 4. 更新手続き */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          4. 更新手続きの注意点
        </h2>
        <div className="space-y-3">
          {[
            { icon: "📅", title: "有効期限は1年", desc: "受給者証は毎年更新が必要です。有効期限の約3ヶ月前に更新の案内が届きます。" },
            { icon: "📋", title: "更新時も診断書が必要", desc: "更新申請にも臨床調査個人票（診断書）が必要です。早めに指定医に依頼しましょう。" },
            { icon: "⚠️", title: "期限切れに注意", desc: "有効期限を過ぎると助成が停止されます。手続きが間に合わない場合は保健所に相談を。" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-100">
          5. よくある質問
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

      <div className="bg-indigo-700 text-white rounded-2xl p-6 text-center">
        <p className="text-indigo-200 text-sm mb-2">申請が済んだら</p>
        <h3 className="text-xl font-bold mb-4">利用できる支援制度もチェックしましょう</h3>
        <Link
          href="/guides/shien"
          className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-2.5 rounded-full hover:bg-indigo-50 transition-colors"
        >
          支援制度を見る <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
