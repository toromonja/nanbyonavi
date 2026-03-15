import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { BookOpen, FileText, Heart, FlaskConical, Stethoscope } from "lucide-react";

export const metadata = createMetadata({
  title: "制度ガイド一覧",
  description: "難病・希少疾患に関する制度ガイドの一覧ページです。医療費助成・申請方法・支援窓口・治験ガイドを掲載しています。",
});

const guides = [
  {
    icon: BookOpen,
    title: "指定難病・医療費助成制度",
    desc: "指定難病とは何か、医療費助成の仕組みと自己負担上限額を解説します。",
    href: "/guides/seido",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: FileText,
    title: "申請方法・手続き",
    desc: "医療費助成の申請に必要な書類・窓口・流れをステップ形式でガイドします。",
    href: "/guides/shinsei",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Heart,
    title: "支援制度・相談窓口",
    desc: "難病相談支援センター・就労支援・障害年金・患者会の情報をまとめています。",
    href: "/guides/shien",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: FlaskConical,
    title: "治験ガイド",
    desc: "治験の探し方・参加方法・注意点について、わかりやすく解説します。",
    href: "/guides/chiken",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Stethoscope,
    title: "疾患カテゴリ一覧",
    desc: "指定難病・希少疾患を疾患カテゴリ別に整理した一覧ページです。",
    href: "/guides/shikkan",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">制度ガイド一覧</h1>
      <p className="text-slate-600 mb-10">難病・希少疾患に関する制度・支援情報をカテゴリ別に掲載しています。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {guides.map((g) => {
          const Icon = g.icon;
          return (
            <Link
              key={g.href}
              href={g.href}
              className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <div className={`w-12 h-12 ${g.bg} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={g.color} size={24} />
              </div>
              <h2 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-indigo-700 transition-colors">{g.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed">{g.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
