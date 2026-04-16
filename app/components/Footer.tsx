"use client";
import Link from "next/link";

const navLinks = [
  { label: "Service", href: "/produit" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Marchés", href: "/marches" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(245, 240, 232, 0.06)",
        padding: "64px 32px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--white)",
                marginBottom: 4,
              }}
            >
              LOCK EVENT
            </div>
            <div
              style={{
                fontSize: "0.55rem",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
              }}
            >
              Protection Visuelle
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(245, 240, 232, 0.5)",
                lineHeight: 1.7,
                maxWidth: 260,
              }}
            >
              Location de pochettes anti-photo avec cadenas antivol pour événements
              confidentiels. Basé à Marseille, service national.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div
              style={{
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
              }}
            >
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(245, 240, 232, 0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245, 240, 232, 0.5)")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:contact.lockevent@gmail.com"
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(245, 240, 232, 0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245, 240, 232, 0.5)")
                }
              >
                contact.lockevent@gmail.com
              </a>
              <span style={{ fontSize: "0.85rem", color: "rgba(245, 240, 232, 0.5)" }}>
                Marseille · Service national
              </span>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/lock_event_/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.85rem",
                  color: "rgba(245, 240, 232, 0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  marginTop: 4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245, 240, 232, 0.5)")
                }
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                @lock_event_
              </a>
            </div>
          </div>

          {/* Marchés */}
          <div>
            <div
              style={{
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
              }}
            >
              Marchés
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Corporate & Finance",
                "Luxe & Mode",
                "Concerts & Spectacles",
                "Clubs Privés & Hôtels",
              ].map((m) => (
                <span
                  key={m}
                  style={{ fontSize: "0.85rem", color: "rgba(245, 240, 232, 0.5)" }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(245, 240, 232, 0.06)",
            paddingTop: 28,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "rgba(245, 240, 232, 0.3)" }}>
            © {new Date().getFullYear()} Lock Event. Tous droits réservés.
          </span>
          <a
            href="https://www.instagram.com/lock_event_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.75rem",
              color: "rgba(245, 240, 232, 0.3)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245, 240, 232, 0.3)")
            }
          >
            instagram.com/lock_event_
          </a>
        </div>
      </div>
    </footer>
  );
}
