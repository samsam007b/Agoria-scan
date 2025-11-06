'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function AgoriaHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Utility Bar - Style Agoria */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <button
                disabled
                className="text-gray-500 hover:text-[#1C32FF] transition-colors duration-200 relative group"
              >
                About us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1C32FF] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                disabled
                className="text-gray-500 hover:text-[#1C32FF] transition-colors duration-200 relative group"
              >
                Find a member
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1C32FF] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                disabled
                className="text-gray-500 hover:text-[#1C32FF] transition-colors duration-200 relative group"
              >
                Contact us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1C32FF] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                disabled
                className="flex items-center gap-1 text-gray-500 hover:text-[#1C32FF] transition-colors duration-200 relative group"
              >
                <User size={16} className="transition-transform duration-200 group-hover:scale-110" />
                Log in
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1C32FF] group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
                <button
                  disabled
                  className="text-gray-500 hover:text-[#1C32FF] transition-colors duration-200 font-medium"
                >
                  NL
                </button>
                <span className="text-gray-300">|</span>
                <button
                  disabled
                  className="text-gray-500 hover:text-[#1C32FF] transition-colors duration-200 font-medium"
                >
                  FR
                </button>
                <span className="text-gray-300">|</span>
                <span className="text-[#1C32FF] font-bold">EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Style Agoria */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/agoria-logo.png"
              alt="Agoria"
              width={120}
              height={60}
              priority
              className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-xs text-gray-400 font-normal">(Demo)</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              disabled
              className="flex items-center gap-1 text-[#1A1A1A] font-medium hover:text-[#1C32FF] transition-all duration-200 relative group"
            >
              Domains of action
              <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              <span className="absolute -bottom-6 left-0 w-0 h-0.5 bg-[#1C32FF] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              disabled
              className="flex items-center gap-1 text-[#1A1A1A] font-medium hover:text-[#1C32FF] transition-all duration-200 relative group"
            >
              Services
              <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              <span className="absolute -bottom-6 left-0 w-0 h-0.5 bg-[#1C32FF] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              disabled
              className="flex items-center gap-1 text-[#1A1A1A] font-medium hover:text-[#1C32FF] transition-all duration-200 relative group"
            >
              Positioning
              <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              <span className="absolute -bottom-6 left-0 w-0 h-0.5 bg-[#1C32FF] group-hover:w-full transition-all duration-300"></span>
            </button>
            <Link
              href="/compliance-scan"
              className={`flex items-center gap-1 font-medium transition-all duration-200 relative group ${
                isActive('/compliance-scan')
                  ? 'text-[#1C32FF]'
                  : 'text-[#1A1A1A] hover:text-[#1C32FF]'
              }`}
            >
              Compliance SCAN
              <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              {/* Badge NEW avec animation */}
              <span className="absolute -top-2 -right-8 bg-[#00D084] text-white text-[10px] font-bold px-2 py-0.5 animate-pulse">
                NEW
              </span>
              {/* Underline active ou hover */}
              <span className={`absolute -bottom-6 left-0 h-0.5 bg-[#1C32FF] transition-all duration-300 ${
                isActive('/compliance-scan') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <button
              disabled
              className="text-[#1A1A1A] font-medium hover:text-[#1C32FF] transition-all duration-200 relative group"
            >
              Agenda
              <span className="absolute -bottom-6 left-0 w-0 h-0.5 bg-[#1C32FF] group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center">
            <div className="relative group">
              <input
                type="text"
                placeholder="What are you searching for?"
                disabled
                className="w-80 px-4 py-2 pr-10 border border-gray-300 bg-white text-sm placeholder:text-gray-400 focus:outline-none group-hover:border-[#1C32FF] transition-all duration-200"
              />
              <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1C32FF] transition-colors duration-200"
                size={20}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#1A1A1A] hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-slideDown">
          <nav className="px-4 py-4 space-y-2">
            <button
              disabled
              className="w-full text-left px-4 py-3 text-sm font-medium text-[#1A1A1A] hover:text-[#1C32FF] hover:bg-gray-50 transition-all duration-200"
            >
              Domains of action
            </button>
            <button
              disabled
              className="w-full text-left px-4 py-3 text-sm font-medium text-[#1A1A1A] hover:text-[#1C32FF] hover:bg-gray-50 transition-all duration-200"
            >
              Services
            </button>
            <button
              disabled
              className="w-full text-left px-4 py-3 text-sm font-medium text-[#1A1A1A] hover:text-[#1C32FF] hover:bg-gray-50 transition-all duration-200"
            >
              Positioning
            </button>
            <Link
              href="/compliance-scan"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-blue-50 ${
                isActive('/compliance-scan')
                  ? 'text-[#1C32FF] bg-blue-50'
                  : 'text-[#1A1A1A]'
              }`}
            >
              Compliance SCAN
              <span className="bg-[#00D084] text-white text-[10px] font-bold px-2 py-0.5 animate-pulse">
                NEW
              </span>
            </Link>
            <button
              disabled
              className="w-full text-left px-4 py-3 text-sm font-medium text-[#1A1A1A] hover:text-[#1C32FF] hover:bg-gray-50 transition-all duration-200"
            >
              Agenda
            </button>
          </nav>

          {/* Mobile Search */}
          <div className="px-4 pb-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="What are you searching for?"
                disabled
                className="w-full px-4 py-2 pr-10 border border-gray-300 bg-white text-sm placeholder:text-gray-400 group-hover:border-[#1C32FF] transition-all duration-200"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1C32FF] transition-colors duration-200" size={20} />
            </div>
          </div>

          {/* Mobile Top Bar Items */}
          <div className="border-t border-gray-100 px-4 py-4 space-y-2 text-sm">
            <button disabled className="block text-[#1A1A1A] hover:text-[#1C32FF] transition-colors duration-200">
              About us
            </button>
            <button disabled className="block text-[#1A1A1A] hover:text-[#1C32FF] transition-colors duration-200">
              Find a member
            </button>
            <button disabled className="block text-[#1A1A1A] hover:text-[#1C32FF] transition-colors duration-200">
              Contact us
            </button>
            <button disabled className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#1C32FF] transition-colors duration-200">
              <User size={16} />
              Log in
            </button>
            <div className="flex items-center gap-3 pt-2">
              <button disabled className="text-[#1A1A1A] hover:text-[#1C32FF] transition-colors duration-200">
                NL
              </button>
              <button disabled className="text-[#1A1A1A] hover:text-[#1C32FF] transition-colors duration-200">
                FR
              </button>
              <span className="text-[#1C32FF] font-bold">EN</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
