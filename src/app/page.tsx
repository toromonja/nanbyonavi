import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import {
  BookOpen,
  Stethoscope,
  FlaskConical,
  Calculator,
  MessageCircle,
  Newspaper,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import HeroDiseaseSearch from "@/components/HeroDiseaseSearch";

export const metadata = createMetadata();

const worries = [
  "指定難病に認定されると何が変わるの？",
  "医療費の助成を受けるにはどうすればいい？",
  "治験に参加したいけど、どこで探せばいいの？",
  "専門医はどうやって探すの？",
  "障害年金はもらえる？",
  "仕事は続けられる？",
  "子どもが難病と診断された…どこに相談すれば？",
  "診断までに何年もかかった。同じ病気の人と話したい",
];

const steps = [
  {
    step: "STEP 1",
    title: "まず制度を知る",
    desc: "指定難病の医療費助成制度・自己負担上限額をわかりやすく解説",
    href: "/guides/seido",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    step: "STEP 2",
    title: "助成を申請する",
    desc: "必要書類・窓口・申請の流れをステップ形式でガイド",
    href: "/guides/shinsei",
    color: "from-violet-500 to-violet-600",
  },
  {
    step: "STEP 3",
    title: "支援を受ける",
    desc: "相談窓口・就労支援・障害年金・患者会の探し方",
    href: "/guides/shien",
    color: "from-purple-500 to-purple-600",
  },
];

const categories = [
  {
    icon: BookOpen,
    title: "制度ガイド",
    desc: "医療費助成・申請方法を解説",
    href: "/guides/seido",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Stethoscope,
    title: "疾患を探す",
    desc: "疾患カテゴリ一覧・代表疾患",
    href: "/disease",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: FlaskConical,
    title: "治験を探す",
    desc: "治験参加の方法・注意点",
    href: "/guides/chiken",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Calculator,
    title: "医療費シミュレーター",
    desc: "自己負担上限額を試算",
    href: "/tools/iryohi",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "相談窓口",
    desc: "支援センター・患者会の探し方",
    href: "/guides/shien",
    bg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Newspaper,
    title: "ガイド一覧",
    desc: "制度・申請・支援・治験ガイドの一覧",
    href: "/guides",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-violet-50 to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            難病・希少疾患の情報ナビ
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-4">
            難病と診断されたあなたへ。<br />
            <span className="text-indigo-600">必要な情報をわかりやすく。</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            制度・支援・治験情報をわかりやすくまとめました。<br className="hidden md:block" />
            一歩ずつ、一緒に進みましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides/seido"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-indigo-200"
            >
              制度を知る <ArrowRight size={18} />
            </Link>
            <Link
              href="/tools/iryohi"
              className="inline-flex items-center gap-2 bg-white hover:bg-indigo-50 text-indigo-700 font-semibold px-8 py-3.5 rounded-full border border-indigo-200 transition-colors"
            >
              医療費を計算する <Calculator size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 疾患検索セクション ─── */}
      <div className="bg-white border-b border-slate-100 shadow-sm">
        <HeroDiseaseSearch />
      </div>

      {/* よくある悩みカード */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          こんなお悩みはありませんか？
        </h2>
        <p className="text-slate-500 text-center mb-10">ナンビョウナビがその不安を解消します</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {worries.map((worry, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-indigo-100 p-4 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-default"
            >
              <div className="flex items-start gap-3">
                <span className="text-indigo-400 mt-0.5">
                  <ChevronRight size={18} />
                </span>
                <p className="text-slate-700 text-sm leading-relaxed">{worry}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3ステップナビゲーション */}
      <section className="py-16 bg-indigo-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            はじめての方はこちらから
          </h2>
          <p className="text-indigo-300 text-center mb-12">3ステップで制度・申請・支援を理解できます</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <Link
                key={s.step}
                href={s.href}
                className="group bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-all"
              >
                <div className={`inline-block bg-gradient-to-r ${s.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {s.title}
                </h3>
                <p className="text-indigo-200 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-indigo-300 text-sm font-medium">
                  詳しく見る <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* カテゴリカード */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
          コンテンツカテゴリ
        </h2>
        <p className="text-slate-500 text-center mb-10">知りたい情報をカテゴリから探せます</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href + cat.title}
                href={cat.href}
                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <div className={`w-12 h-12 ${cat.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={cat.iconColor} size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-500 text-sm">{cat.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 注意書き */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <strong>ご注意：</strong>当サイトの情報は参考情報です。制度の詳細・最新情報は難病情報センターや各都道府県の担当窓口にご確認ください。医療に関する判断は必ず医師にご相談ください。
        </div>
      </section>
    </>
  );
}
