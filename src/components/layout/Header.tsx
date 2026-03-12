'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/blog', label: '博客' },
  { href: '/projects', label: '项目' },
  { href: '/about', label: '关于' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-black/5 dark:border-white/5" />

      <nav className="relative max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center font-mono font-bold text-black text-lg shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-shadow">
                JW
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">
              <span className="text-foreground">Jun</span>
              <span className="text-teal-500 dark:text-teal-400">Wei</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'text-teal-500 dark:text-teal-400'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-500 dark:bg-teal-400" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:821331897@qq.com"
              className="relative group px-5 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white dark:text-black font-medium text-sm hover:shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              <span className="relative z-10">联系我</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-teal-500/10 text-teal-500 dark:text-teal-400'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="mailto:821331897@qq.com"
                className="mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white dark:text-black font-medium text-sm text-center"
              >
                联系我
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
