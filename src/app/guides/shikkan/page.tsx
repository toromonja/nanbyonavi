import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "指定難病・希少疾患 疾患カテゴリ一覧",
  description:
    "指定難病・希少疾患を疾患カテゴリ別に整理した一覧です。神経・筋疾患、免疫・膠原病、血液疾患、代謝疾患、消化器疾患、循環器疾患、皮膚疾患、骨・関節疾患を掲載。",
});

const categories = [
  {
    name: "神経・筋疾患",
    icon: "🧠",
    diseases: ["筋萎縮性側索硬化症（ALS）", "パーキンソン病関連疾患", "多発性硬化症", "重症筋無力症", "脊髄小脳変性症"],
    color: "bg-indigo-50 border-indigo-200",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "免疫・膠原病",
    icon: "🛡️",
    diseases: ["全身性エリテマトーデス（SLE）", "全身性強皮症", "ベーチェット病", "シェーグレン症候群", "多発性筋炎・皮膚筋炎"],
    color: "bg-violet-50 border-violet-200",
    tagColor: "bg-violet-100 text-violet-700",
  },
  {
    name: "血液疾患",
    icon: "🩸",
    diseases: ["再生不良性貧血", "発作性夜間ヘモグロビン尿症（PNH）", "骨髄異形成症候群（MDS）", "特発性血小板減少性紫斑病"],
    color: "bg-red-50 border-red-200",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    name: "代謝疾患",
    icon: "⚗️",
    diseases: ["ファブリー病", "ゴーシェ病", "ポンペ病", "ムコ多糖症", "フェニルケトン尿症"],
    color: "bg-amber-50 border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "消化器疾患",
    icon: "🫁",
    diseases: ["クローン病", "潰瘍性大腸炎", "自己免疫性肝炎", "原発性胆汁性胆管炎", "原発性硬化性胆管炎"],
    color: "bg-green-50 border-green-200",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    name: "循環器疾患",
    icon: "❤️",
    diseases: ["肺動脈性肺高血圧症", "高安動脈炎（大動脈炎症候群）", "特発性拡張型心筋症", "肥大型心筋症"],
    color: "bg-pink-50 border-pink-200",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    name: "皮膚疾患",
    icon: "🧬",
    diseases: ["表皮水疱症", "膿疱性乾癬", "天疱瘡", "類天疱瘡", "魚鱗癬"],
    color: "bg-orange-50 border-orange-200",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    name: "骨・関節疾患",
    icon: "🦴",
    diseases: ["骨形成不全症", "マルファン症候群", "軟骨無形成症", "低ホスファターゼ症", "モヤモヤ病"],
    color: "bg-teal-50 border-teal-200",
    tagColor: "bg-teal-100 text-teal-700",
  },
];

export default function ShikkanPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-indigo-600">制度ガイド</Link>
        <span>/</span>
        <span>疾患カテゴリ</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        指定難病・希少疾患 疾患カテゴリ一覧
      </h1>
      <p className="text-slate-600 mb-4">
        現在338種類の指定難病が存在します。疾患カテゴリ別に代表的な疾患名を掲載しています。
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-10">
        <strong>ご注意：</strong>このページは代表的な疾患の参考情報です。指定難病の完全な一覧・最新情報は<a href="https://www.nanbyou.or.jp/entry/5048" target="_blank" rel="noopener noreferrer" className="underline">難病情報センター</a>をご確認ください。
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className={`border rounded-2xl p-6 ${cat.color}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{cat.icon}</span>
              <h2 className="text-xl font-bold text-slate-800">{cat.name}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.diseases.map((d) => (
                <span key={d} className={`text-xs font-medium px-2.5 py-1 rounded-full ${cat.tagColor}`}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center">
        <p className="text-slate-600 mb-4 text-sm">お探しの疾患の制度・支援情報は、難病情報センターで詳しく調べることができます。</p>
        <a
          href="https://www.nanbyou.or.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-colors"
        >
          難病情報センターを見る
        </a>
      </div>
    </div>
  );
}
