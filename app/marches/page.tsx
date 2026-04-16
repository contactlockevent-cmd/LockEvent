import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marchés — Lock Event",
  description: "Lock Event sert les entreprises corporate, les maisons de luxe, les concerts privés et les clubs. Protection visuelle premium pour chaque secteur.",
};

const sectors = [
  {
    id: "corporate",
    label: "Corporate & Finance",
    headline: "Protégez vos informations stratégiques",
    description: `Dans le monde des affaires, une fuite d'information peut coûter des millions. Un lancement produit photographié
    avant l'embargo, une présentation captée lors d'une AG, un document confidentiel filmé sur tableau blanc —
    les risques sont réels et sous-estimés.`,
    details: `Lock Event s'intègre naturellement dans vos protocoles de sécurité événementielle.
    Nos pochettes complètent vos NDA et chartes de confidentialité par une protection physique et immédiate.`,
    useCases: [
      "Assemblées générales et CODIR",
      "Séminaires de direction et retraites stratégiques",
      "Lancements produits sous embargo",
      "Conférences investisseurs et roadshows",
      "Sessions de R&D et briefings confidentiels",
      "Négociations et due diligence en présentiel",
    ],
    clients: ["Grands groupes cotés", "PME en croissance", "Cabinets de conseil", "Fonds d'investissement", "Agences de communication corporate"],
    accent: "#C9A84C",
  },
  {
    id: "luxe",
    label: "Luxe & Mode",
    headline: "L'exclusivité commence avant le lancement",
    description: `Dans l'industrie du luxe, le secret est une valeur. Une image qui filtre avant le jour J peut détruire des mois
    de travail créatif et commercial. Les maisons de luxe, les marques automobile premium et les joaillers
    organisent des présentations exclusives qui exigent une discrétion absolue.`,
    details: `Lock Event a conçu une expérience de remise des pochettes à la hauteur de vos événements VIP :
    discrétion, efficacité, esthétique soignée. Nos pochettes s'intègrent à votre univers visuel sur demande.`,
    useCases: [
      "Défilés de mode et presentations pre-saison",
      "Showrooms collections privées",
      "Lancements de véhicules premium ou de luxe",
      "Présentations joaillerie et haute horlogerie",
      "Événements de relations presse et influenceurs",
      "Galas de marque et dîners d'exception",
    ],
    clients: ["Groupes LVMH, Kering, Richemont", "Marques auto premium (Porsche, Lamborghini, Bentley…)", "Maisons de joaillerie", "Labels de mode indépendants", "Agences RP luxe"],
    accent: "#C9A84C",
  },
  {
    id: "concerts",
    label: "Concerts & Spectacles",
    headline: "Vivez le moment. Sans l'écran devant.",
    description: `Les artistes ont le droit de jouer sans craindre la diffusion non autorisée. Les promoteurs ont la responsabilité
    de protéger les œuvres. Et les spectateurs méritent de vivre pleinement le spectacle, sans une forêt d'écrans
    dans leur champ de vision.`,
    details: `Lock Event permet aux artistes de se produire en toute liberté dans un cadre privé. Showcases pré-lancement,
    concerts membres, avant-premières — notre système est souple, rapide et testé sur des shows de taille variable.`,
    useCases: [
      "Showcases et concerts de lancement",
      "Résidences privées et sessions acoustiques",
      "Premières et avant-premières cinéma",
      "Représentations théâtre pour professionnels",
      "Soirées artistes et backstage events",
      "Concerts membres ou fans clubs premium",
    ],
    clients: ["Labels de musique (majors et indépendants)", "Promoteurs de concerts", "Agences de booking", "Salles de spectacle privées", "Maisons de production audiovisuelle"],
    accent: "#C9A84C",
  },
  {
    id: "clubs",
    label: "Clubs Privés & Hôtels",
    headline: "L'exclusivité s'entretient",
    description: `Les clubs privés, les palaces et les hôtels de luxe accueillent une clientèle qui attend discrétion et confidentialité.
    Chaque soirée gala, chaque dîner de prestige, chaque événement membres doit pouvoir se tenir sans crainte de
    fuites sur les réseaux sociaux.`,
    details: `Lock Event renforce l'aura d'exclusivité de votre établissement. Le simple geste de remettre une pochette
    à l'entrée envoie un signal fort : ce qui se passe ici reste ici.`,
    useCases: [
      "Soirées gala et dîners de prestige",
      "Événements membres de clubs privés",
      "Séminaires et retraites en palace",
      "Mariages et cérémonies VIP",
      "Cocktails et réceptions d'entreprise",
      "Événements de lancement pour clientèle UHNWI",
    ],
    clients: ["Palaces et hôtels 5 étoiles", "Clubs privés et cercles", "Domaines et châteaux", "Conciergeries de luxe", "Wedding planners haut de gamme"],
    accent: "#C9A84C",
  },
];

export default function MarchesPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{ padding: "100px 32px 80px", borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              Nos marchés
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 28, maxWidth: 700 }}>
            La discrétion comme{" "}
            <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.55)" }}>standard de marché</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(245,240,232,0.6)", maxWidth: 560, lineHeight: 1.8 }}>
            Lock Event intervient dans tous les secteurs où la confidentialité visuelle est un enjeu
            stratégique, légal ou artistique.
          </p>
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((sector, idx) => (
        <section
          key={sector.id}
          style={{
            padding: "100px 32px",
            background: idx % 2 === 1 ? "var(--bg-soft)" : "var(--bg)",
            borderBottom: "1px solid rgba(245,240,232,0.05)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
              {/* Left */}
              <div>
                <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
                  {sector.label}
                </div>
                <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: 24 }}>
                  {sector.headline}
                </h2>
                <p style={{ fontSize: "0.92rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.85, marginBottom: 20 }}>
                  {sector.description}
                </p>
                <p style={{ fontSize: "0.92rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.85 }}>
                  {sector.details}
                </p>
              </div>

              {/* Right */}
              <div>
                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.4)", marginBottom: 16 }}>
                    Cas d&apos;usage
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {sector.useCases.map((uc) => (
                      <li key={uc} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.9rem", color: "rgba(245,240,232,0.65)" }}>
                        <span style={{ color: "var(--gold)", flexShrink: 0 }}>→</span>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.4)", marginBottom: 16 }}>
                    Clients types
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {sector.clients.map((c) => (
                      <span key={c} style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.5)", padding: "6px 12px", border: "1px solid rgba(245,240,232,0.1)", background: "rgba(245,240,232,0.03)" }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 24 }}>
            Votre secteur n&apos;est pas listé ?
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.55)", marginBottom: 40, lineHeight: 1.7 }}>
            Nous intervenons dans tous les contextes où la confidentialité visuelle est un enjeu.
            Parlez-nous de votre projet.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--gold)", color: "#080808",
              fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
              padding: "18px 44px", textDecoration: "none", fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Discuter de votre projet →
          </Link>
        </div>
      </section>
    </div>
  );
}
