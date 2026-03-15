import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "このサイトについて",
  description: "ナンビョウナビのサイト概要・運営方針・コンテンツポリシーについてご説明します。",
});

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <span>このサイトについて</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-800 mb-8">このサイトについて</h1>
      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">サイトの目的</h2>
          <p className="text-slate-700 leading-relaxed">
            ナンビョウナビは、難病・希少疾患と診断された患者・家族の方が「次に何をすればいいかわからない」という状況を少しでも解消することを目的として作られた情報サイトです。
          </p>
          <p className="text-slate-700 leading-relaxed mt-2">
            指定難病の医療費助成制度・申請手続き・支援窓口・治験情報を、専門知識がない方でも理解できるよう、わかりやすい言葉でまとめています。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">掲載情報について</h2>
          <p className="text-slate-700 leading-relaxed">
            当サイトは、難病情報センター・厚生労働省・AMED等の公的情報をもとに作成しています。ただし、制度は改正されることがあります。最新・正確な情報は必ず各公的機関（保健所・難病情報センター等）でご確認ください。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">医療情報の取り扱い</h2>
          <p className="text-slate-700 leading-relaxed">
            当サイトは医療行為を提供するものではありません。医療に関する判断は必ず医師・医療専門家にご相談ください。個別の疾患診断・治療方針についての相談は行っておりません。
          </p>
        </section>
      </div>
    </div>
  );
}
