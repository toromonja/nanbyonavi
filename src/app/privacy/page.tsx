import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "プライバシーポリシー",
  description: "ナンビョウナビのプライバシーポリシーです。",
});

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-indigo-600">ホーム</Link>
        <span>/</span>
        <span>プライバシーポリシー</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-800 mb-8">プライバシーポリシー</h1>
      <div className="space-y-8 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">個人情報の収集について</h2>
          <p className="leading-relaxed">
            当サイト（ナンビョウナビ）は、現在ユーザー登録・お問い合わせフォーム等による個人情報の収集を行っておりません。医療費シミュレーターへの入力情報はサーバーに送信・保存されません（ブラウザ上のみで処理されます）。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">アクセス解析について</h2>
          <p className="leading-relaxed">
            当サイトでは、サービス改善のためにアクセス解析ツールを利用する場合があります。収集された情報は匿名であり、個人を特定するものではありません。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">外部リンクについて</h2>
          <p className="leading-relaxed">
            当サイトから外部サイトへのリンクを掲載しています。外部サイトのプライバシーポリシーについては、各サイトをご確認ください。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-indigo-700 mb-3">お問い合わせ</h2>
          <p className="leading-relaxed">
            プライバシーポリシーに関するお問い合わせは、サイト運営者までご連絡ください。
          </p>
        </section>
        <p className="text-slate-400 text-sm">最終更新日: 2026年3月15日</p>
      </div>
    </div>
  );
}
