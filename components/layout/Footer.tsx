import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/Design sans titre.png"
              alt="GL Marquage"
              width={240}
              height={240}
              className="h-24 w-24 rounded-full object-cover"
            />
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Expert en signalisation routière, marquage au sol et mobilier urbain.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/glmarquage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 transition-all group border border-white/10"
              >
                <span className="text-2xl">📸</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8">Nos Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/signalisation-horizontale" className="text-slate-400 hover:text-yellow-400 transition-colors text-lg font-light">
                  Signalisation Horizontale
                </Link>
              </li>
              <li>
                <Link href="/signalisation-verticale" className="text-slate-400 hover:text-yellow-400 transition-colors text-lg font-light">
                  Signalisation Verticale
                </Link>
              </li>
              <li>
                <Link href="/mobilier-urbain" className="text-slate-400 hover:text-yellow-400 transition-colors text-lg font-light">
                  Mobilier Urbain
                </Link>
              </li>
              <li>
                <Link href="/#realisations" className="text-slate-400 hover:text-yellow-400 transition-colors text-lg font-light">
                  Nos Réalisations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-8">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <a href="tel:0698741199" className="text-slate-400 hover:text-yellow-400 transition-colors text-lg font-light">
                  06 98 74 11 99
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <a href="mailto:glmarquage@gmail.com" className="text-slate-400 hover:text-yellow-400 transition-colors break-all text-lg font-light">
                  glmarquage@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-slate-400 text-lg font-light">
                  Savoie & Rhône-Alpes
                </span>
              </li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-xl font-bold mb-8">Zone d&apos;Intervention</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-3 text-lg font-light">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Savoie (73)</span>
              </li>
              <li className="flex items-center gap-3 text-lg font-light">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Haute-Savoie (74)</span>
              </li>
              <li className="flex items-center gap-3 text-lg font-light">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Ain (01)</span>
              </li>
              <li className="flex items-center gap-3 text-lg font-light">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Isère (38)</span>
              </li>
              <li className="flex items-center gap-3 text-lg font-light">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Suisse - Genève</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 font-light">
              &copy; {new Date().getFullYear()} GL Marquage. Tous droits réservés.
            </p>
            <p className="text-sm text-slate-500 font-light">
              SIRET : 937 558 476 00019
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
