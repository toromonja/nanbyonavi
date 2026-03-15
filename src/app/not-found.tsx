import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-indigo-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">ページが見つかりません</h1>
        <p className="text-slate-600 mb-8">
          お探しのページは移動・削除されたか、URLが間違っている可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          <ArrowLeft size={16} />
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
