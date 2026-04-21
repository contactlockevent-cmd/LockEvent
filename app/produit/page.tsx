import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Service — Lock Event",
  description: "Pochettes anti-photo avec cadenas antivol magnétique pour événements confidentiels. Comment ça marche, bénéfices, cas d'usage.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Location de pochettes anti-photo Lock Event",
  description:
    "Location de pochettes anti-photo à cadenas magnétique propriétaire pour événements B2B confidentiels : lancements produit, AG, défilés, concerts privés, séminaires.",
  provider: {
    "@type": "LocalBusiness",
    name: "Lock Event",
    url: "https://lockevent.fr",
    email: "contact.lockevent@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Marseille", addressCountry: "FR" },
  },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Location de pochettes anti-photo pour événements",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "350",
    highPrice: "3500",
    offerCount: "3",
  },
};

const benefits = [
  {
    title: "Anti-photo sans bloquer le téléphone",
    desc: "Contrairement à une confiscation, nos pochettes occultent l'objectif et le micro sans empêcher l'usage du téléphone. Appels, messages, musique — tout fonctionne.",
  },
  {
    title: "Cadenas magnétique propriétaire",
    desc: "Chaque pochette est fermée par un cadenas magnétique qui ne s'ouvre qu'avec notre outil propriétaire. Ni ciseaux, ni force ne permettent de l'ouvrir sans la trahir.",
  },
  {
    title: "Discret et premium",
    desc: "Nos pochettes sont fabriquées dans un matériau premium, sobre et élégant. Elles ne dénaturent pas l'esthétique de votre événement.",
  },
  {
    title: "Déploiement en 5 minutes",
    desc: "Notre équipe entraînée gère la remise et la reprise en flux fluide, sans file d'attente ni tension. Protocole éprouvé sur des événements de 10 à 500 personnes.",
  },
];

const useCases = [
  {
    sector: "Lancement produit confidentiel",
    example: "Une marque automobile présente un modèle inédit à 200 journalistes et partenaires sous embargo. Lock Event s'assure qu'aucune photo ne sort avant l'heure H.",
    icon: "🚗",
  },
  {
    sector: "Assemblée générale / CODIR",
    example: "Un groupe cotisé tient une AG avec informations stratégiques sensibles. Les 150 participants rangent leur téléphone à l'entrée, sans friction.",
    icon: "📊",
  },
  {
    sector: "Défilé ou présentation luxe",
    example: "Une maison de couture présente sa collection SS26 à la presse et aux acheteurs. Aucune image ne filtre avant le communiqué officiel.",
    icon: "👗",
  },
  {
    sector: "Concert ou showcase privé",
    example: "Un artiste fait une résidence exclusive de 50 personnes. Les fans vivent le moment pleinement, sans distraction ni risque de diffusion pirate.",
    icon: "🎵",
  },
  {
    sector: "Club privé ou soirée gala",
    example: "Un club membres organise une soirée VIP. L'atmosphère exclusive est préservée — aucune photo sur les réseaux sociaux sans accord.",
    icon: "🥂",
  },
  {
    sector: "Séminaire confidentiel",
    example: "Une PME réunit ses cadres pour une session stratégique. Les présentations et discussions restent dans la salle.",
    icon: "🏛️",
  },
];

const techSpecs = [
  { label: "Matériau", value: "Polyester haute densité, opaque certifié" },
  { label: "Fermeture", value: "Cadenas magnétique propriétaire Lock Event" },
  { label: "Compatibilité", value: "Tous smartphones jusqu'à 6,9 pouces" },
  { label: "Fonctions préservées", value: "Appels, SMS, NFC, musique" },
  { label: "Fonctions bloquées", value: "Photo, vidéo, écran visible de l'extérieur" },
  { label: "Désaccès urgence", value: "30 secondes par technicien accrédité" },
  { label: "Durabilité", value: "500+ utilisations par pochette" },
  { label: "Hygiène", value: "Désinfection entre chaque utilisation" },
];

export default function ProduitPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section style={{ padding: "100px 32px 80px", borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              Le service
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 28, maxWidth: 700 }}>
            La pochette anti-photo{" "}
            <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.55)" }}>qui respecte vos invités</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(245,240,232,0.6)", maxWidth: 560, lineHeight: 1.8 }}>
            Ni confiscation, ni blocage forcé. Lock Event propose une solution élégante et technique :
            une pochette opaque à cadenas magnétique qui empêche photos et vidéos tout en laissant
            les téléphones accessibles pour les usages essentiels.
          </p>
        </div>
      </section>

      {/* How it works — detailed */}
      <section style={{ padding: "100px 32px", background: "var(--bg-soft)", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Fonctionnement
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Du briefing à la sortie
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
            {[
              {
                step: "Avant l'événement",
                items: [
                  "Appel de cadrage avec votre équipe : effectif, timing, contraintes",
                  "Envoi du contrat et de la notice légale (droit à l'image, RGPD)",
                  "Livraison du matériel la veille ou le matin J",
                  "Briefing de votre personnel d'accueil par notre technicien référent",
                ],
              },
              {
                step: "À l'entrée",
                items: [
                  "Chaque invité reçoit sa pochette numérotée",
                  "Son téléphone y glisse en moins de 10 secondes",
                  "Le cadenas se ferme magnétiquement — un simple « clic »",
                  "L'invité conserve la pochette sur lui toute la durée de l'événement",
                ],
              },
              {
                step: "Pendant l'événement",
                items: [
                  "Notre technicien reste sur place en cas de besoin",
                  "Protocole urgence médicale ou personnelle activable en 30 secondes",
                  "Aucune perturbation logistique — vos invités oublient rapidement la pochette",
                ],
              },
              {
                step: "À la sortie",
                items: [
                  "Déverrouillage immédiat avec notre outil propriétaire",
                  "Récupération des pochettes : numérotation vérifiée",
                  "Retour du matériel complet — zéro résidu chez vous",
                ],
              },
            ].map((phase) => (
              <div key={phase.step} style={{ padding: "40px 0", borderBottom: "1px solid rgba(245,240,232,0.07)", display: "grid", gridTemplateColumns: "240px 1fr", gap: 48 }}>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.3rem", fontWeight: 500, paddingTop: 4 }}>
                  {phase.step}
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {phase.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: "0.92rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.65 }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Bénéfices
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Ce qui nous distingue
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ padding: "36px 28px", border: "1px solid rgba(245,240,232,0.07)", background: "var(--bg-card)" }}>
                <div style={{ width: 32, height: 1, background: "var(--gold)", marginBottom: 24 }} />
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.25rem", fontWeight: 500, marginBottom: 12 }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.75 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: "100px 32px", background: "var(--bg-soft)", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Cas d&apos;usage
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Pour quels événements ?
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {useCases.map((uc) => (
              <div key={uc.sector} style={{ padding: "32px 28px", border: "1px solid rgba(245,240,232,0.07)", background: "var(--bg-card)" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: 12 }}>{uc.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.15rem", fontWeight: 500, marginBottom: 10 }}>
                  {uc.sector}
                </h3>
                <p style={{ fontSize: "0.87rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.75 }}>
                  {uc.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech specs */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Fiche technique
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Spécifications
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
            {techSpecs.map((spec, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 32, padding: "20px 0", borderBottom: "1px solid rgba(245,240,232,0.07)" }}>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.8, paddingTop: 2 }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.7)" }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 24 }}>
            Prêt pour votre prochain événement ?
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.55)", marginBottom: 40, lineHeight: 1.7 }}>
            Devis en 24h, sans engagement. Nos techniciens vous répondent par email ou téléphone.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold)", color: "#080808", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", padding: "16px 36px", textDecoration: "none", fontFamily: "var(--font-body), sans-serif" }}>
              Demander un devis →
            </Link>
            <Link href="/tarifs" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "var(--white)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", padding: "15px 35px", border: "1px solid rgba(245,240,232,0.2)", textDecoration: "none", fontFamily: "var(--font-body), sans-serif" }}>
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
