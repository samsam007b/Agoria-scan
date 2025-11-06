'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/agoria-logo.png"
              alt="Agoria"
              width={120}
              height={60}
              priority
              className="h-12 w-auto"
            />
            <span className="text-xs text-gray-400 font-normal">(Demo)</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isCompliance = item.href === '/compliance-scan';

              if (!item.active) {
                return (
                  <button
                    key={item.label}
                    disabled
                    className="px-5 py-2 text-sm font-medium text-gray-300 cursor-not-allowed opacity-50 relative"
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
                  className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 relative ${
                    active
                      ? 'text-[#1C32FF] bg-[#F5F7FA]'
                      : 'text-[#1A1A1A] hover:text-[#1C32FF] hover:bg-[#F5F7FA]'
                  }`}
                >
                  {item.label}
                  {isCompliance && (
                    <span className="absolute -top-1 -right-1 bg-[#00D084] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#1A1A1A] hover:bg-[#F5F7FA] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isCompliance = item.href === '/compliance-scan';

              if (!item.active) {
                return (
                  <button
                    key={item.label}
                    disabled
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-300 cursor-not-allowed opacity-50"
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
                  className={`block px-4 py-3 text-sm font-semibold relative rounded-md transition-all duration-200 ${
                    active
                      ? 'text-[#1C32FF] bg-[#F5F7FA]'
                      : 'text-[#1A1A1A] hover:bg-[#F5F7FA]'
                  }`}
                >
                  {item.label}
                  {isCompliance && (
                    <span className="ml-2 bg-[#00D084] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
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
