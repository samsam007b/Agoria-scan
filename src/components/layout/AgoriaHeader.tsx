'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function AgoriaHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'About us', href: '#', active: false },
    { label: 'Services', href: '#', active: false },
    { label: 'Compliance Scan', href: '/compliance-scan', active: true },
    { label: 'Contact', href: '#', active: false },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-3xl font-bold tracking-tight">
              <span className="text-[#003E7E]">AGORIA</span>
              <span className="text-xs ml-2 text-gray-500 font-normal">(Demo)</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isCompliance = item.href === '/compliance-scan';

              if (!item.active) {
                return (
                  <button
                    key={item.label}
                    disabled
                    className="px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed opacity-60 relative"
                    title="Section non disponible dans la démo"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                    active
                      ? 'text-[#003E7E] bg-blue-50'
                      : 'text-gray-700 hover:text-[#003E7E] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {isCompliance && (
                    <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isCompliance = item.href === '/compliance-scan';

              if (!item.active) {
                return (
                  <button
                    key={item.label}
                    disabled
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-400 cursor-not-allowed opacity-60"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-semibold relative ${
                    active
                      ? 'text-[#003E7E] bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {isCompliance && (
                    <span className="ml-2 bg-[#FF6B35] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
