import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs — Lock Event",
  description: "Tarifs de location de pochettes anti-photo pour événements. Essentiel, Premium, Corporate+. Location seule -30%. Devis sur mesure.",
};

const tiers = [
  {
    name: "Essentiel",
    tagline: "Petits événements",
    range: "≤ 50 invités",
    duration: "4 heures",
    price: "350 – 500€",
    priceNote: "HT · selon effectif final",
    features: [
      "Jusqu'à 50 pochettes numérotées",
      "Durée : 4 heures maximum",
      "1 technicien dédié sur place",
      "Livraison & reprise du matériel",
      "Notice légale + affichettes fournies",
      "Protocole urgence inclus",
    ],
    notIncluded: [
      "Signalétique événementielle sur-mesure",
      "Personnel d'accueil supplémentaire",
    ],
    featured: false,
    cta: "Choisir ce forfait",
  },
  {
    name: "Premium",
    tagline: "Événements standards",
    range: "51 – 150 invités",
    duration: "Journée complète",
    price: "700 – 1 200€",
    priceNote: "HT · selon effectif final",
    features: [
      "Jusqu'à 150 pochettes numérotées",
      "Journée complète (jusqu'à 10h)",
      "2 techniciens dédiés sur place",
      "Livraison & reprise du matériel",
      "Notice légale + affichettes fournies",
      "Signalétique événementielle incluse",
      "Support prioritaire J-7 et J",
      "Rapport de fin d'intervention",
    ],
    notIncluded: [],
    featured: true,
    cta: "Choisir ce forfait",
  },
  {
    name: "Corporate+",
    tagline: "Grands événements",
    range: "150 – 500 invités",
    duration: "Multi-journée possible",
    price: "1 500 – 3 500€",
    priceNote: "HT · sur devis",
    features: [
      "Jusqu'à 500 pochettes numérotées",
      "1 journée ou plus (tarif journée supplémentaire)",
      "Équipe dédiée (3+ techniciens)",
      "Coordination complète amont et aval",
      "Signalétique premium sur-mesure",
      "Gestion des cas particuliers (VIP, presse, staff)",
      "SLA contractuel et assurance matériel renforcée",
      "Compte-rendu détaillé post-événement",
    ],
    notIncluded: [],
    featured: false,
    cta: "Demander un devis",
  },
];

const addons = [
  {
    name: "Location seule",
    desc: "Vous gérez la logistique vous-même, Lock Event vous fournit le matériel. Idéal si vous disposez de votre propre équipe d'accueil.",
    price: "-30% sur le tarif de base",
    note: "Tarif sur devis selon quantité",
  },
  {
    name: "Journée supplémentaire",
    desc: "Pour les événements multi-jours (congrès, festival privé, retraite d'entreprise).",
    price: "+40% du tarif journée",
    note: "Corporate+ uniquement",
  },
  {
    name: "Déplacement national",
    desc: "Frais kilométriques calculés au-delà de 50 km de Marseille (trajet aller-retour).",
    price: "0,50€ / km au-delà de 50 km",
    note: "Hébergement en sus si nuitée requise",
  },
  {
    name: "Sur-mesure",
    desc: "Congrès de 500+ personnes, festival, tournage, événement international. Nous construisons une offre adaptée.",
    price: "Sur devis",
    note: "Délai minimum 3 semaines",
  },
];

export default function TarifsPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{ padding: "100px 32px 80px", borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              Tarifs
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 24, maxWidth: 700 }}>
            Transparent,{" "}
            <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.55)" }}>sans surprise</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(245,240,232,0.6)", maxWidth: 520, lineHeight: 1.8 }}>
            Nos forfaits sont pensés pour s&apos;adapter à votre événement. Prix indicatifs HT —
            devis personnalisé sous 24h pour tout événement non standard.
          </p>
        </div>
      </section>

      {/* Main pricing */}
      <section style={{ padding: "80px 32px", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {tiers.map((t) => (
              <div
                key={t.name}
                style={{
                  padding: "44px 36px",
                  border: t.featured ? "1px solid var(--gold)" : "1px solid rgba(245,240,232,0.08)",
                  background: t.featured ? "linear-gradient(160deg, rgba(201,168,76,0.07) 0%, var(--bg-card) 100%)" : "var(--bg-card)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {t.featured && (
                  <div style={{ position: "absolute", top: -1, left: 32, background: "var(--gold)", color: "#080808", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 14px" }}>
                    Le plus populaire
                  </div>
                )}

                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: t.featured ? "var(--gold)" : "rgba(245,240,232,0.4)" }}>
                    {t.tagline}
                  </span>
                </div>

                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.8rem", fontWeight: 600, marginBottom: 4 }}>
                  {t.name}
                </div>

                <div style={{ display: "flex", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.75rem", background: "rgba(245,240,232,0.06)", padding: "4px 10px", color: "rgba(245,240,232,0.6)" }}>
                    {t.range}
                  </span>
                  <span style={{ fontSize: "0.75rem", background: "rgba(245,240,232,0.06)", padding: "4px 10px", color: "rgba(245,240,232,0.6)" }}>
                    {t.duration}
                  </span>
                </div>

                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "var(--gold)" }}>
                    {t.price}
                  </span>
                </div>
                <div style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.35)", marginBottom: 32, letterSpacing: "0.06em" }}>
                  {t.priceNote}
                </div>

                <ul style={{ listStyle: "none", padding: 0, marginBottom: 32, flex: 1 }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.88rem", color: "rgba(245,240,232,0.7)", padding: "9px 0", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                  {t.notIncluded.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.88rem", color: "rgba(245,240,232,0.3)", padding: "9px 0", borderBottom: "1px solid rgba(245,240,232,0.05)", textDecoration: "line-through" }}>
                      <span style={{ flexShrink: 0, marginTop: 1 }}>✗</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  style={{
                    display: "block", textAlign: "center", padding: "15px",
                    background: t.featured ? "var(--gold)" : "transparent",
                    border: t.featured ? "none" : "1px solid rgba(245,240,232,0.2)",
                    color: t.featured ? "#080808" : "var(--white)",
                    fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
                    textDecoration: "none", fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ padding: "80px 32px", background: "var(--bg-soft)", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Options & suppléments
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400 }}>
              Sur-mesure et flexibilité
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {addons.map((a) => (
              <div key={a.name} style={{ padding: "32px 28px", border: "1px solid rgba(245,240,232,0.07)", background: "var(--bg-card)" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.2rem", fontWeight: 500, marginBottom: 10 }}>
                  {a.name}
                </h3>
                <p style={{ fontSize: "0.87rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.7, marginBottom: 16 }}>
                  {a.desc}
                </p>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.2rem", color: "var(--gold)", marginBottom: 6 }}>
                  {a.price}
                </div>
                <div style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.3)", letterSpacing: "0.06em" }}>
                  {a.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section style={{ padding: "60px 32px", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ padding: "32px", border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.04)" }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              À noter
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Tous les prix sont indiqués hors taxes (HT). TVA applicable selon le régime en vigueur.",
                "Le décompte d'invités retenu est l'effectif maximum présent sur site en même temps.",
                "Les frais kilométriques s'appliquent au-delà de 50 km de Marseille (trajet A/R), calculés au réel.",
                "Acompte de 30% à la signature du devis. Solde à réception de facture post-événement.",
                "Annulation à moins de 72h : 50% du montant total dû. Annulation à moins de 24h : 100%.",
                "En cas de perte ou dommage matériel imputable au client, remplacement facturé selon barème annexe.",
              ].map((note) => (
                <li key={note} style={{ display: "flex", gap: 12, fontSize: "0.88rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.7 }}>
                  <span style={{ color: "var(--gold)", flexShrink: 0 }}>·</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 24 }}>
            Votre événement mérite un devis sur mesure
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.55)", marginBottom: 40, lineHeight: 1.7 }}>
            Remplissez le formulaire en 2 minutes — nous vous revenons avec une proposition
            détaillée sous 24h.
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
            Demander un devis →
          </Link>
        </div>
      </section>
    </div>
  );
}
