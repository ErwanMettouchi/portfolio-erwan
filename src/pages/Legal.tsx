import { useTheme } from '../contexts/ThemeContext';

const LegalPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
          >
            Mentions Légales
          </h1>

          <p
            className={`mt-6 text-lg ${isDarkMode ? 'text-[#ffedcf]/80' : 'text-[#020817]/80'}`}
          >
            Politique de confidentialité & informations légales
          </p>
        </div>

        <div
          className={`flex flex-wrap gap-4 justify-center mb-12 p-6 rounded-2xl border-2 ${isDarkMode ? 'border-[#ffedcf]/20 shadow-[0_0_20px_rgba(255,237,207,0.1)]' : 'border-[#020817]/20 shadow-[0_0_20px_rgba(2,8,23,0.1)]'}`}
        >
          <a
            href="#mentions"
            className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${isDarkMode ? 'text-[#ffedcf] hover:bg-[#ffedcf]/10' : 'text-[#020817] hover:bg-[#020817]/10'}`}
          >
            📋 Mentions légales
          </a>
          <a
            href="#confidentialite"
            className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${isDarkMode ? 'text-[#ffedcf] hover:bg-[#ffedcf]/10' : 'text-[#020817] hover:bg-[#020817]/10'}`}
          >
            🔒 Confidentialité
          </a>
          <a
            href="#droits"
            className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${isDarkMode ? 'text-[#ffedcf] hover:bg-[#ffedcf]/10' : 'text-[#020817] hover:bg-[#020817]/10'}`}
          >
            ⚖️ Vos droits
          </a>
        </div>

        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        <section id="mentions" className="mb-16">
          <div
            className={`p-8 rounded-2xl border-2 ${isDarkMode ? 'border-[#ffedcf]/20 shadow-[0_4px_20px_rgba(255,237,207,0.1)]' : 'border-[#020817]/20 shadow-[0_4px_20px_rgba(2,8,23,0.1)]'}`}
          >
            <h2
              className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
            >
              📋 <span>Mentions légales</span>
            </h2>

            <div className="space-y-8">
              <div
                className={`p-6 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  👤 Éditeur du site
                </h3>
                <div
                  className={`space-y-2 ${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
                >
                  <p>
                    <strong>Nom :</strong> Mettouchi Erwan
                  </p>
                  <p>
                    <strong>Adresse :</strong> 85 Rue Duhesme, 75018 Paris
                  </p>
                  <p>
                    <strong>Téléphone :</strong> 06.25.00.62.44
                  </p>
                  <p>
                    <strong>Email :</strong> erwanmettouchi@gmail.com
                  </p>
                </div>
              </div>

              <div
                className={`p-6 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  🌐 Hébergement
                </h3>
                <div
                  className={`space-y-2 ${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
                >
                  <p>
                    <strong>Hébergeur :</strong> Vercel Inc.
                  </p>
                  <p>
                    <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
                    91789, États-Unis
                  </p>
                  <p>
                    <strong>Site web :</strong>{' '}
                    <a
                      href="https://vercel.com"
                      className={`underline hover:opacity-80 transition-opacity ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                    >
                      vercel.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        <section id="confidentialite" className="mb-16">
          <div
            className={`p-8 rounded-2xl border-2 ${isDarkMode ? 'border-[#ffedcf]/20 shadow-[0_4px_20px_rgba(255,237,207,0.1)]' : 'border-[#020817]/20 shadow-[0_4px_20px_rgba(2,8,23,0.1)]'}`}
          >
            <h2
              className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
            >
              🔒 <span>Politique de confidentialité</span>
            </h2>

            <div className="space-y-8">
              <div
                className={`p-6 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  📊 Collecte des données
                </h3>
                <p
                  className={`mb-4 ${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
                >
                  Via le formulaire de contact, nous collectons uniquement :
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
                >
                  <li>
                    <strong>Nom</strong> (obligatoire)
                  </li>
                  <li>
                    <strong>Prénom</strong> (facultatif)
                  </li>
                  <li>
                    <strong>Email</strong> (obligatoire)
                  </li>
                  <li>
                    <strong>Message</strong> (obligatoire)
                  </li>
                </ul>
              </div>

              <div
                className={`p-6 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  🎯 Finalité
                </h3>
                <p
                  className={`${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
                >
                  Les données sont utilisées exclusivement pour répondre à vos
                  demandes de contact et établir une communication
                  professionnelle.
                </p>
              </div>

              <div
                className={`p-6 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  ⏰ Conservation
                </h3>
                <p
                  className={`${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
                >
                  Les données du formulaire sont transmises directement par
                  email via EmailJS et ne sont pas stockées sur ce site. La
                  conservation dépend de la gestion de mes emails personnels.
                </p>
              </div>

              <div
                className={`p-6 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  🚫 Cookies
                </h3>
                <p
                  className={`${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
                >
                  Ce site n'utilise aucun cookie de traçage, publicitaire ou
                  d'analyse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        <section id="droits" className="mb-16">
          <div
            className={`p-8 rounded-2xl border-2 ${isDarkMode ? 'border-[#ffedcf]/20 shadow-[0_4px_20px_rgba(255,237,207,0.1)]' : 'border-[#020817]/20 shadow-[0_4px_20px_rgba(2,8,23,0.1)]'}`}
          >
            <h2
              className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
            >
              ⚖️ <span>Vos droits</span>
            </h2>

            <p
              className={`mb-6 ${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
            >
              Conformément au RGPD, vous disposez des droits suivants :
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`p-5 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h4
                  className={`font-semibold mb-2 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  👁️ Droit d'accès
                </h4>
                <p
                  className={`text-sm ${isDarkMode ? 'text-[#ffedcf]/80' : 'text-[#020817]/80'}`}
                >
                  Connaître les données que je détiens
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h4
                  className={`font-semibold mb-2 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  ✏️ Droit de rectification
                </h4>
                <p
                  className={`text-sm ${isDarkMode ? 'text-[#ffedcf]/80' : 'text-[#020817]/80'}`}
                >
                  Corriger des données inexactes
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h4
                  className={`font-semibold mb-2 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  🗑️ Droit d'effacement
                </h4>
                <p
                  className={`text-sm ${isDarkMode ? 'text-[#ffedcf]/80' : 'text-[#020817]/80'}`}
                >
                  Demander la suppression de vos données
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/10 bg-[#ffedcf]/5' : 'border-[#020817]/10 bg-[#020817]/5'}`}
              >
                <h4
                  className={`font-semibold mb-2 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
                >
                  🚫 Droit d'opposition
                </h4>
                <p
                  className={`text-sm ${isDarkMode ? 'text-[#ffedcf]/80' : 'text-[#020817]/80'}`}
                >
                  S'opposer au traitement de vos données
                </p>
              </div>
            </div>

            <div
              className={`mt-8 p-6 rounded-xl border ${isDarkMode ? 'border-[#ffedcf]/20 bg-[#ffedcf]/10' : 'border-[#020817]/20 bg-[#020817]/10'}`}
            >
              <h4
                className={`font-semibold mb-3 ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
              >
                📧 Pour exercer vos droits
              </h4>
              <p
                className={`mb-2 ${isDarkMode ? 'text-[#ffedcf]/90' : 'text-[#020817]/90'}`}
              >
                <strong>Email :</strong> erwanmettouchi@gmail.com
              </p>
              <p
                className={`text-sm ${isDarkMode ? 'text-[#ffedcf]/80' : 'text-[#020817]/80'}`}
              >
                Réponse sous 30 jours maximum
              </p>
            </div>
          </div>
        </section>

        <div
          className={`text-center p-6 rounded-2xl border ${isDarkMode ? 'border-[#ffedcf]/20 bg-[#ffedcf]/5' : 'border-[#020817]/20 bg-[#020817]/5'}`}
        >
          <p
            className={`text-sm ${isDarkMode ? 'text-[#ffedcf]/80' : 'text-[#020817]/80'}`}
          >
            En cas de litige, vous pouvez saisir la{' '}
            <a
              href="https://www.cnil.fr/fr/plaintes"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline hover:opacity-80 transition-opacity ${isDarkMode ? 'text-[#ffedcf]' : 'text-[#020817]'}`}
            >
              CNIL
            </a>
          </p>
          <p
            className={`text-xs mt-2 ${isDarkMode ? 'text-[#ffedcf]/60' : 'text-[#020817]/60'}`}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
