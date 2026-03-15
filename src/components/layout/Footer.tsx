import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-2">ナンビョウナビ</h2>
            <p className="text-indigo-200 text-sm leading-relaxed">
              難病・希少疾患の患者と家族のための情報ナビ。制度・支援・治験情報をわかりやすく。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-indigo-200">ガイド</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/seido" className="text-indigo-300 hover:text-white transition-colors">医療費助成制度</Link></li>
              <li><Link href="/guides/shinsei" className="text-indigo-300 hover:text-white transition-colors">申請方法</Link></li>
              <li><Link href="/guides/shien" className="text-indigo-300 hover:text-white transition-colors">支援・相談窓口</Link></li>
              <li><Link href="/guides/chiken" className="text-indigo-300 hover:text-white transition-colors">治験ガイド</Link></li>
              <li><Link href="/guides/shikkan" className="text-indigo-300 hover:text-white transition-colors">疾患カテゴリ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-indigo-200">ツール</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/iryohi" className="text-indigo-300 hover:text-white transition-colors">医療費シミュレーター</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-indigo-200">サイト情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-indigo-300 hover:text-white transition-colors">このサイトについて</Link></li>
              <li><Link href="/privacy" className="text-indigo-300 hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/disclaimer" className="text-indigo-300 hover:text-white transition-colors">免責事項</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-indigo-800 text-center text-indigo-400 text-xs">
          <p>掲載情報は参考情報です。最新・正確な情報は各公的機関にご確認ください。</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} ナンビョウナビ</p>
        </div>
      </div>
    </footer>
  );
}
