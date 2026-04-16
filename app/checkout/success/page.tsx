import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main
      className="flex min-h-screen items-center justify-center px-5 py-16"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="w-full max-w-2xl p-8 text-center"
        style={{
          background: "linear-gradient(180deg, rgba(17,17,17,0.98), rgba(8,8,8,0.98))",
          border: "1px solid rgba(201,168,76,0.24)",
        }}
      >
        <div
          className="mb-4 text-xs"
          style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
        >
          CONFIRMATION
        </div>
        <h1
          className="mb-4 font-black leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
            letterSpacing: "-0.02em",
            fontWeight: 500,
          }}
        >
          Merci pour <span style={{ color: "var(--gold)" }}>votre demande.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base" style={{ color: "rgba(245,240,232,0.6)" }}>
          Votre prise de contact a bien été enregistrée. L&apos;équipe Lock Event revient vers vous
          pour confirmer les modalités de livraison, de présence sur site et de reprise du matériel.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold"
          style={{
            background: "var(--gold)",
            color: "#080808",
            textDecoration: "none",
            letterSpacing: "0.14em",
          }}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
