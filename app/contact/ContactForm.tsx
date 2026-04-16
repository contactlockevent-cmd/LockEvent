"use client";
import { useState } from "react";

type FormState = "idle" | "ready";

const recipient = "contact.lockevent@gmail.com";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [mailToHref, setMailToHref] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    eventDate: "",
    location: "",
    message: "",
  });

  const inputStyle = {
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.1)",
    color: "var(--white)",
    fontFamily: "var(--font-body), sans-serif",
    fontSize: "0.9rem",
    padding: "14px 18px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    fontFamily: "var(--font-body), sans-serif",
    fontSize: "0.62rem",
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "rgba(245, 240, 232, 0.5)",
    display: "block",
    marginBottom: 8,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = form.company
      ? `Demande de devis Lock Event - ${form.company}`
      : `Demande de devis Lock Event - ${form.name}`;
    const body = [
      `Nom et prénom: ${form.name}`,
      `Entreprise / Organisation: ${form.company || "Non précisé"}`,
      `Email: ${form.email}`,
      `Téléphone: ${form.phone || "Non précisé"}`,
      `Type d'événement: ${form.eventType || "Non précisé"}`,
      `Nombre d'invités: ${form.guests || "Non précisé"}`,
      `Date de l'événement: ${form.eventDate || "Non précisée"}`,
      `Lieu: ${form.location || "Non précisé"}`,
      "",
      "Message:",
      form.message || "Aucun message complémentaire.",
    ].join("\n");

    const href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailToHref(href);
    setState("ready");
  };

  if (state === "ready") {
    return (
      <div
        style={{
          padding: "60px 48px",
          border: "1px solid rgba(201,168,76,0.3)",
          background: "rgba(201,168,76,0.04)",
          textAlign: "center",
        }}
      >
        <div style={{ width: 48, height: 1, background: "var(--gold)", margin: "0 auto 32px" }} />
        <h3
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "2rem",
            fontWeight: 400,
            marginBottom: 16,
          }}
        >
          Demande envoyée
        </h3>
        <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
          Votre demande est prête. Ouvrez votre messagerie pour envoyer l&apos;email prérempli à
          Lock Event, ou écrivez directement à {recipient}.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 32 }}>
          <a
            href={mailToHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 32px",
              background: "var(--gold)",
              color: "#080808",
              textDecoration: "none",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Ouvrir la messagerie
          </a>
          <button
            type="button"
            onClick={() => setState("idle")}
            style={{
              padding: "16px 32px",
              background: "transparent",
              color: "var(--white)",
              border: "1px solid rgba(245,240,232,0.2)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Modifier le message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {/* Row 1 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        <div>
          <label style={labelStyle} htmlFor="name">Nom & prénom *</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jean Martin"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="company">Entreprise / Organisation</label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Nom de l'entreprise"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        <div>
          <label style={labelStyle} htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="vous@entreprise.fr"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="phone">Téléphone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+33 6 xx xx xx xx"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 20 }}>
        <div>
          <label style={labelStyle} htmlFor="eventType">Type d&apos;événement</label>
          <select
            id="eventType"
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
          >
            <option value="" style={{ background: "#111" }}>— Choisir —</option>
            <option value="corporate" style={{ background: "#111" }}>Corporate / Séminaire</option>
            <option value="lancement" style={{ background: "#111" }}>Lancement produit</option>
            <option value="luxe" style={{ background: "#111" }}>Événement luxe / mode</option>
            <option value="concert" style={{ background: "#111" }}>Concert / Spectacle</option>
            <option value="gala" style={{ background: "#111" }}>Gala / Dîner de prestige</option>
            <option value="club" style={{ background: "#111" }}>Club privé / Hôtel</option>
            <option value="autre" style={{ background: "#111" }}>Autre</option>
          </select>
        </div>
        <div>
          <label style={labelStyle} htmlFor="guests">Nombre d&apos;invités</label>
          <input
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            placeholder="ex. 120"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="eventDate">Date de l&apos;événement</label>
          <input
            id="eventDate"
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            style={{ ...inputStyle, colorScheme: "dark" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
          />
        </div>
      </div>

      {/* Location */}
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle} htmlFor="location">Lieu de l&apos;événement</label>
        <input
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Ville, salle, adresse..."
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: 32 }}>
        <label style={labelStyle} htmlFor="message">Votre message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Décrivez votre événement, vos contraintes, vos questions..."
          style={{ ...inputStyle, resize: "vertical" as const, minHeight: 120 }}
          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(245,240,232,0.1)")}
        />
      </div>

      <button
        type="submit"
        style={{
          background: "var(--gold)",
          color: "#080808",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          padding: "18px 44px",
          border: "none",
          cursor: "pointer",
          alignSelf: "flex-start",
          transition: "background 0.2s",
        }}
      >
        Préparer l&apos;email →
      </button>

      <p style={{ marginTop: 16, fontSize: "0.75rem", color: "rgba(245,240,232,0.3)", lineHeight: 1.6 }}>
        Aucun backend requis. Ce formulaire prépare simplement un email vers {recipient}.
      </p>
    </form>
  );
}
