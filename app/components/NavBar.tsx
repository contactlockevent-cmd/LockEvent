"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Service", href: "/produit" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Marchés", href: "/marches" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(8, 8, 8, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(245, 240, 232, 0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--white)",
              }}
            >
              LOCK EVENT
            </span>
            <span
              style={{
                fontSize: "0.5rem",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginTop: 1,
              }}
            >
              Protection Visuelle
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: 36,
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(245, 240, 232, 0.6)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245, 240, 232, 0.6)")
              }
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#080808",
              background: "var(--gold)",
              padding: "10px 22px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--gold-light)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--gold)")
            }
          >
            Devis
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 1,
                background: "var(--white)",
                transition: "all 0.3s",
                transform:
                  open && i === 0
                    ? "rotate(45deg) translate(4px, 4px)"
                    : open && i === 2
                    ? "rotate(-45deg) translate(4px, -4px)"
                    : open && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(8, 8, 8, 0.98)",
            borderTop: "1px solid rgba(245, 240, 232, 0.06)",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "var(--white)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#080808",
              background: "var(--gold)",
              padding: "14px 28px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Demander un devis
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
