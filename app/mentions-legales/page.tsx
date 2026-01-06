import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Mentions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
              Légales
            </span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            
            {/* Éditeur du site */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6" id="editeur">
                1. Éditeur du Site
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8 space-y-3">
                <p className="text-gray-700">
                  <strong className="text-black">Raison sociale :</strong> GL Marquage
                </p>
                <p className="text-gray-700">
                  <strong className="text-black">SIRET :</strong> 937 558 476 00019
                </p>
                <p className="text-gray-700">
                  <strong className="text-black">Activité :</strong> Signalisation routière, marquage au sol, mobilier urbain
                </p>
                <p className="text-gray-700">
                  <strong className="text-black">Zone d&apos;intervention :</strong> Savoie, Haute-Savoie, Ain, Isère, Suisse (Genève)
                </p>
                <p className="text-gray-700">
                  <strong className="text-black">Email :</strong>{' '}
                  <a href="mailto:glmarquage@gmail.com" className="text-yellow-600 hover:text-yellow-700">
                    glmarquage@gmail.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong className="text-black">Téléphone :</strong>{' '}
                  <a href="tel:0698741199" className="text-yellow-600 hover:text-yellow-700">
                    06 98 74 11 99
                  </a>
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6" id="hebergement">
                2. Hébergement
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700">
                  Ce site est hébergé par <strong className="text-black">OVH SAS</strong>
                </p>
                <p className="text-gray-700 mt-2">
                  2 rue Kellermann<br />
                  59100 Roubaix<br />
                  France
                </p>
                <p className="text-gray-700 mt-2">
                  Site web :{' '}
                  <a 
                    href="https://www.ovh.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    www.ovh.com
                  </a>
                </p>
              </div>
            </div>

            {/* Création du site */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6" id="creation">
                3. Conception et développement
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700">
                  Ce site a été conçu et développé par <strong className="text-black">Matixweb</strong>
                </p>
                <p className="text-gray-700 mt-2">
                  Agence de création de sites web
                </p>
                <p className="text-gray-700 mt-2">
                  Site web :{' '}
                  <a 
                    href="https://matixweb.fr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 font-bold"
                  >
                    matixweb.fr
                  </a>
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6" id="propriete">
                4. Propriété Intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, logo, graphismes, icônes) est la propriété 
                exclusive de GL Marquage ou de ses partenaires. Toute reproduction, représentation, modification, 
                publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation 
                écrite préalable de GL Marquage.
              </p>
            </div>

            {/* Politique de confidentialité */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6" id="confidentialite">
                5. Politique de Confidentialité
              </h2>
              
              <h3 className="text-xl font-bold text-black mt-8 mb-4">
                4.1 Collecte des données
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous collectons uniquement les données que vous nous fournissez volontairement via notre 
                formulaire de contact : nom, prénom, email, téléphone et message.
              </p>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">
                4.2 Utilisation des données
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les données collectées sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Répondre à vos demandes de devis</li>
                <li>Vous recontacter concernant votre projet</li>
                <li>Assurer le suivi commercial de votre demande</li>
              </ul>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">
                4.3 Conservation des données
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter 
                de votre dernière interaction avec GL Marquage.
              </p>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">
                4.4 Vos droits
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d&apos;opposition au traitement</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:glmarquage@gmail.com" className="text-yellow-600 hover:text-yellow-700">
                  glmarquage@gmail.com
                </a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6" id="cookies">
                6. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ce site utilise uniquement des cookies techniques essentiels au bon fonctionnement du site. 
                Aucun cookie de traçage ou publicitaire n&apos;est utilisé.
              </p>
            </div>

            {/* Responsabilité */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6" id="responsabilite">
                7. Limitation de Responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed">
                GL Marquage s&apos;efforce d&apos;assurer l&apos;exactitude des informations présentes sur ce site. 
                Toutefois, nous ne pouvons garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations 
                diffusées. Les photos présentées sont non contractuelles.
              </p>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6" id="droit">
                8. Droit Applicable
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </div>

            {/* Date de mise à jour */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : Janvier 2026
              </p>
            </div>

          </div>

          {/* Retour contact */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-black hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-xl"
            >
              Une question ? Contactez-nous
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
