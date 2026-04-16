import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis — Lock Event",
  description: "Demandez un devis pour votre événement confidentiel. Lock Event répond sous 24h.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{ padding: "100px 32px 80px", borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              Contact
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 24, maxWidth: 700 }}>
            Parlons de{" "}
            <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.55)" }}>votre événement</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(245,240,232,0.6)", maxWidth: 520, lineHeight: 1.8 }}>
            Remplissez le formulaire ci-dessous. Votre messagerie s&apos;ouvrira avec un email
            prérempli à envoyer à Lock Event, sans backend ni configuration technique.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section style={{ padding: "80px 32px 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          {/* Left — info */}
          <div>
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
                Coordonnées
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <a
                  href="mailto:contact.lockevent@gmail.com"
                  style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.7)", textDecoration: "none", display: "flex", gap: 12, alignItems: "center" }}
                >
                  <span style={{ color: "var(--gold)" }}>✉</span>
                  contact.lockevent@gmail.com
                </a>
                <div style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.5)", display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ color: "var(--gold)" }}>📍</span>
                  Marseille · Service national
                </div>
                <a
                  href="https://www.instagram.com/lock_event_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.7)", textDecoration: "none", display: "flex", gap: 12, alignItems: "center" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--gold)" }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                  @lock_event_
                </a>
              </div>
            </div>

            <div style={{ marginBottom: 48 }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
                Délai de réponse
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}>
                Le message prérempli est prêt à partir immédiatement. Réponse humaine sous 24 heures
                ouvrées en moyenne.
              </p>
            </div>

            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
                Disponibilité
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}>
                Nous intervenons partout en France. Pour les événements au-delà de 50 km de
                Marseille, des frais kilométriques s&apos;appliquent — nous les précisons dans le devis.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
