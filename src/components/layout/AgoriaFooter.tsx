import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export default function AgoriaFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#263238] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/agoria-logo.png"
                alt="Agoria"
                width={100}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-xs text-gray-400 font-normal">(Demo)</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              La fédération de l'industrie technologique belge
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Qui sommes-nous ?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <Link href="/compliance-scan" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Compliance Scan
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Actualités
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Diamant Building</li>
              <li>Boulevard A. Reyers 80</li>
              <li>1030 Bruxelles</li>
              <li className="pt-2">
                <a href="tel:+3227068211" className="hover:text-white transition-colors">
                  +32 2 706 82 11
                </a>
              </li>
              <li>
                <a href="mailto:info@agoria.be" className="hover:text-white transition-colors">
                  info@agoria.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Agoria - Tous droits réservés</p>
          <p className="mt-2 md:mt-0 text-xs">
            Ceci est une démo académique du Compliance Scan - Projet étudiant {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
