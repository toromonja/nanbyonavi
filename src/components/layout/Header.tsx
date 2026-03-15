"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "ホーム", href: "/" },
  { label: "制度ガイド", href: "/guides/seido" },
  { label: "疾患情報", href: "/guides/shikkan" },
  { label: "治験", href: "/guides/chiken" },
  { label: "計算ツール", href: "/tools/iryohi" },
  { label: "相談窓口", href: "/guides/shien" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-indigo-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-indigo-700">ナンビョウナビ</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 hover:text-indigo-700 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-indigo-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-indigo-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-slate-700 hover:text-indigo-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
