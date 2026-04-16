import Link from "next/link";

const stats = [
  { value: "100%", label: "Confidentiel" },
  { value: "0 photo", label: "Prise à votre événement" },
  { value: "5 min", label: "De déploiement" },
];

const values = [
  {
    icon: "🔒",
    title: "Confidentialité absolue",
    desc: "Nos pochettes verrouillées empêchent toute photo ou vidéo pendant votre événement, sans bloquer l'accès au téléphone.",
  },
  {
    icon: "⚡",
    title: "Discret & fluide",
    desc: "Remise à l'entrée, récupération à la sortie. Vos invités gardent leur téléphone en poche — aucune frustration.",
  },
  {
    icon: "🛡️",
    title: "Cadenas antivol inclus",
    desc: "Chaque pochette est sécurisée par un cadenas magnétique. Impossible à ouvrir sans notre outil propriétaire.",
  },
  {
    icon: "🏆",
    title: "Service clé en main",
    desc: "Livraison, installation, personnel sur place, reprise en fin d'événement. Vous n'avez rien à gérer.",
  },
  {
    icon: "📍",
    title: "Basé à Marseille",
    desc: "Service national avec une équipe dédiée. Frais kilométriques uniquement au-delà de 50 km.",
  },
  {
    icon: "✨",
    title: "Haut de gamme",
    desc: "Pochettes premium adaptées aux événements luxe, corporate, mode. Esthétique soignée pour vos invités VIP.",
  },
];

const steps = [
  {
    n: "01",
    title: "Demande de devis",
    desc: "Décrivez votre événement : date, lieu, nombre d'invités, durée. Réponse sous 24h.",
  },
  {
    n: "02",
    title: "Livraison & déploiement",
    desc: "Notre équipe arrive avant l'heure, installe le système et accueille vos invités à l'entrée.",
  },
  {
    n: "03",
    title: "Déverrouillage & départ",
    desc: "À la sortie, chaque pochette est déverrouillée. Reprise du matériel. Votre événement reste secret.",
  },
];

const markets = [
  {
    title: "Corporate & Finance",
    tag: "Lancements produits · AG · Comités · Séminaires confidentiels",
    desc: "Protégez vos annonces stratégiques et informations sensibles face à des fuites involontaires ou intentionnelles.",
  },
  {
    title: "Luxe & Mode",
    tag: "LVMH · Kering · Auto premium · Joaillerie",
    desc: "Présentations exclusives, défilés pré-lancement, showrooms privés. Aucune image ne sort avant votre accord.",
  },
  {
    title: "Concerts & Spectacles",
    tag: "Premières · Shows privés · Soirées artistes",
    desc: "Offrez à vos artistes la sécurité de se produire sans crainte de diffusion non autorisée.",
  },
  {
    title: "Clubs & Hôtels de luxe",
    tag: "Palace · Membres privés · Événements VIP",
    desc: "Un outil discret qui renforce l'exclusivité et la confidentialité de votre établissement.",
  },
];

const faqs = [
  {
    q: "Est-ce légal ?",
    a: "Oui, tout à fait légal. La restriction de photographie sur un lieu privé est permise dès lors que les participants en sont informés. Lock Event fournit des affichettes et une notice d'information à distribuer à l'entrée.",
  },
  {
    q: "Les invités peuvent-ils toujours utiliser leur téléphone ?",
    a: "Oui. La pochette contient le téléphone mais ne le bloque pas. Les invités peuvent passer des appels ou envoyer des messages depuis la pochette. Seules les photos et vidéos sont empêchées mécaniquement par l'occultation.",
  },
  {
    q: "Que se passe-t-il en cas d'urgence ?",
    a: "En cas d'urgence, notre personnel sur place déverrouille immédiatement la pochette. Nous prévoyons toujours un protocole d'urgence documenté, communiqué au client avant l'événement.",
  },
  {
    q: "Combien de temps faut-il pour déployer le système ?",
    a: "Pour un événement standard de 100 personnes, notre équipe est opérationnelle en 20 à 30 minutes. Nous arrivons au minimum 1 heure avant le début pour installation et briefing du personnel d'accueil.",
  },
  {
    q: "Intervenez-vous en dehors de Marseille ?",
    a: "Oui, nous intervenons partout en France. Des frais kilométriques s'appliquent au-delà de 50 km de Marseille, calculés au cas par cas selon la distance et la durée.",
  },
  {
    q: "Que se passe-t-il si une pochette est endommagée ?",
    a: "Chaque intervention est couverte par une assurance matériel. Une clause de remplacement est incluse dans le contrat pour les dommages accidentels. Nous prévenons toujours avec un surplus de matériel.",
  },
];

const pricingTiers = [
  {
    name: "Essentiel",
    range: "≤ 50 invités · 4h",
    price: "350 – 500€",
    features: [
      "Jusqu'à 50 pochettes",
      "Durée 4 heures",
      "1 technicien sur place",
      "Livraison & reprise incluses",
      "Notice légale incluse",
    ],
    featured: false,
  },
  {
    name: "Premium",
    range: "51 – 150 invités · journée",
    price: "700 – 1 200€",
    features: [
      "Jusqu'à 150 pochettes",
      "Journée complète",
      "2 techniciens sur place",
      "Livraison & reprise incluses",
      "Signalétique événementielle",
      "Support prioritaire",
    ],
    featured: true,
  },
  {
    name: "Corporate+",
    range: "150 – 500 invités",
    price: "1 500 – 3 500€",
    features: [
      "Jusqu'à 500 pochettes",
      "Multi-journée possible",
      "Équipe dédiée",
      "Coordination complète",
      "Reporting & compte-rendu",
      "SLA contractuel",
    ],
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "Un service d'une discrétion parfaite, déployé sans friction. Nos invités ont joué le jeu et notre présentation est restée confidentielle jusqu'au lancement.",
    author: "Directrice des événements",
    company: "Groupe international — Paris",
  },
  {
    quote:
      "Nous organisons plusieurs présentations exclusives par an. Lock Event est désormais un partenaire incontournable pour nos showrooms pré-lancement.",
    author: "Responsable communication",
    company: "Maison de couture — Lyon",
  },
  {
    quote:
      "L'équipe est professionnelle, rapide et les pochettes sont de belle facture. Exactement ce dont nous avions besoin pour notre séminaire stratégique.",
    author: "DRH",
    company: "PME industrielle — Marseille",
  },
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "80px 32px",
        }}
      >
        {/* Background grid */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 500,
            background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
          <div className="animate-fade-up delay-1" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              Premier service en France
            </span>
          </div>

          <h1
            className="animate-fade-up delay-2"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: 28,
              maxWidth: 820,
            }}
          >
            Votre événement{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(105deg, var(--gold) 0%, var(--gold-light) 50%, #8B6914 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              reste secret.
            </em>
          </h1>

          <p
            className="animate-fade-up delay-3"
            style={{ fontSize: "1.1rem", color: "rgba(245, 240, 232, 0.65)", maxWidth: 520, lineHeight: 1.75, marginBottom: 48 }}
          >
            Location de pochettes anti-photo avec cadenas antivol pour événements B2B confidentiels.
            Vos invités gardent leur téléphone — aucune image ne sort.
          </p>

          <div className="animate-fade-up delay-4" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 72 }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--gold)", color: "#080808",
                fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
                padding: "16px 36px", textDecoration: "none", fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Demander un devis →
            </Link>
            <Link
              href="/produit"
              style={{
                display: "inline-flex", alignItems: "center",
                background: "transparent", color: "var(--white)",
                fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
                padding: "15px 35px", border: "1px solid rgba(245, 240, 232, 0.2)",
                textDecoration: "none", fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Découvrir le service
            </Link>
          </div>

          <div className="animate-fade-up delay-5" style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 4 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245, 240, 232, 0.4)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE BAND ─── */}
      <div style={{ background: "rgba(201, 168, 76, 0.06)", borderTop: "1px solid rgba(201, 168, 76, 0.15)", borderBottom: "1px solid rgba(201, 168, 76, 0.15)", padding: "18px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 56, animation: "marquee 22s linear infinite", width: "max-content" }}>
          {[...Array(3)].flatMap((_, ri) =>
            ["ANTI-PHOTO", "CONFIDENTIEL", "B2B PREMIUM", "MARSEILLE", "SERVICE NATIONAL", "CADENAS ANTIVOL", "ÉVÉNEMENTS LUXE", "PROTECTION VISUELLE"].map((t) => (
              <span key={`${ri}-${t}`} style={{ fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", whiteSpace: "nowrap" }}>
                {t} ·
              </span>
            ))
          )}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
      </div>

      {/* ─── VALUES ─── */}
      <section style={{ padding: "120px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Pourquoi Lock Event
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1 }}>
              La protection visuelle{" "}
              <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.6)" }}>sans compromis</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 1, background: "rgba(245, 240, 232, 0.05)" }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: "var(--bg)", padding: "40px 32px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.3rem", fontWeight: 500, marginBottom: 12 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(245, 240, 232, 0.55)", lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section style={{ padding: "120px 32px", background: "var(--bg-soft)", borderTop: "1px solid rgba(245,240,232,0.05)", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Comment ça marche
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Simple, rapide, efficace
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 48 }}>
            {steps.map((s) => (
              <div key={s.n}>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "5rem", fontWeight: 300, color: "rgba(201, 168, 76, 0.15)", lineHeight: 1, marginBottom: 16 }}>
                  {s.n}
                </div>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.4rem", fontWeight: 500, marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(245, 240, 232, 0.55)", lineHeight: 1.75 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARKETS ─── */}
      <section style={{ padding: "120px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
                Nos marchés
              </div>
              <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
                Tous les secteurs{" "}
                <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.5)" }}>qui exigent la discrétion</em>
              </h2>
            </div>
            <Link href="/marches" style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
              Voir tous les marchés →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 24 }}>
            {markets.map((m) => (
              <div key={m.title} style={{ border: "1px solid rgba(245,240,232,0.07)", padding: "36px 28px", background: "var(--bg-card)" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.3rem", fontWeight: 500, marginBottom: 10 }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 16, opacity: 0.8 }}>
                  {m.tag}
                </p>
                <p style={{ fontSize: "0.88rem", color: "rgba(245, 240, 232, 0.55)", lineHeight: 1.75 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING OVERVIEW ─── */}
      <section style={{ padding: "120px 32px", background: "var(--bg-soft)", borderTop: "1px solid rgba(245,240,232,0.05)", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Tarifs
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, marginBottom: 16 }}>
              Transparent et sans surprise
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.5)", maxWidth: 480, margin: "0 auto" }}>
              Trois formules adaptées à chaque taille d&apos;événement. Location seule disponible à -30%.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {pricingTiers.map((t) => (
              <div
                key={t.name}
                style={{
                  padding: "40px 32px",
                  border: t.featured ? "1px solid var(--gold)" : "1px solid rgba(245,240,232,0.07)",
                  background: t.featured ? "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, var(--bg-card) 100%)" : "var(--bg-card)",
                  position: "relative",
                }}
              >
                {t.featured && (
                  <div style={{ position: "absolute", top: -1, left: 28, background: "var(--gold)", color: "#080808", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 12px" }}>
                    Recommandé
                  </div>
                )}
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.5rem", fontWeight: 500, marginBottom: 4 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: "0.65rem", color: "rgba(245,240,232,0.4)", letterSpacing: "0.08em", marginBottom: 28 }}>
                  {t.range}
                </div>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "2.2rem", fontWeight: 300, color: "var(--gold)", marginBottom: 28 }}>
                  {t.price}
                </div>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 36 }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ fontSize: "0.88rem", color: "rgba(245,240,232,0.65)", padding: "8px 0", borderBottom: "1px solid rgba(245,240,232,0.05)", display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  style={{
                    display: "block", textAlign: "center", padding: "14px",
                    background: t.featured ? "var(--gold)" : "transparent",
                    border: t.featured ? "none" : "1px solid rgba(245,240,232,0.2)",
                    color: t.featured ? "#080808" : "var(--white)",
                    fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
                    textDecoration: "none", fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  Demander ce forfait
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/tarifs" style={{ fontSize: "0.75rem", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.1em" }}>
              Voir les tarifs complets + location seule →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ padding: "120px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Témoignages
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Ce que disent nos clients
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ padding: "40px 32px", border: "1px solid rgba(245,240,232,0.07)", background: "var(--bg-card)" }}>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "3rem", color: "var(--gold)", lineHeight: 1, marginBottom: 16, opacity: 0.6 }}>
                  &ldquo;
                </div>
                <p style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(245,240,232,0.8)", fontStyle: "italic", marginBottom: 28 }}>
                  {t.quote}
                </p>
                <div style={{ width: 24, height: 1, background: "var(--gold)", marginBottom: 16 }} />
                <div style={{ fontSize: "0.85rem", fontWeight: 500, marginBottom: 4 }}>{t.author}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)", letterSpacing: "0.05em" }}>{t.company}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", fontStyle: "italic" }}>
            * Témoignages clients — identités confidentialisées à leur demande
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: "120px 32px", background: "var(--bg-soft)", borderTop: "1px solid rgba(245,240,232,0.05)", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              FAQ
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Questions fréquentes
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderTop: "1px solid rgba(245,240,232,0.07)", padding: "28px 0" }}>
                <summary style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.2rem", fontWeight: 500, cursor: "pointer", listStyle: "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                  userSelect: "none",
                }}>
                  {f.q}
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ marginTop: 16, fontSize: "0.9rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.8, maxWidth: 680 }}>
                  {f.a}
                </p>
              </details>
            ))}
            <div style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }} />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "120px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>
            Votre prochain événement
          </div>
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 28 }}>
            Protégez ce qui{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(105deg, var(--gold) 0%, var(--gold-light) 50%, #8B6914 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              ne doit pas fuiter.
            </em>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.55)", marginBottom: 48, lineHeight: 1.7 }}>
            Devis personnalisé sous 24h. Sans engagement.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
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
            <a
              href="https://www.instagram.com/lock_event_/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "var(--white)",
                fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
                padding: "17px 43px", border: "1px solid rgba(245,240,232,0.2)",
                textDecoration: "none", fontFamily: "var(--font-body), sans-serif",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              @lock_event_
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
