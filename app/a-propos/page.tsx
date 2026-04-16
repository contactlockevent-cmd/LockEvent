import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Lock Event",
  description: "L'histoire de Lock Event, premier service français de pochettes anti-photo pour événements confidentiels. Basé à Marseille.",
};

const values = [
  {
    title: "Discrétion",
    desc: "Nous ne divulguons jamais le nom de nos clients ni les événements auxquels nous intervenons. La confidentialité que nous garantissons à vos invités, nous l'appliquons aussi à nos propres opérations.",
  },
  {
    title: "Précision",
    desc: "Chaque intervention est planifiée au détail près. Pas d'improvisation sur le terrain. Nos protocoles sont éprouvés et documentés.",
  },
  {
    title: "Respect",
    desc: "Nos pochettes ne confisquent pas. Elles protègent sans priver. Nous respectons profondément la liberté individuelle — c'est pourquoi nous avons conçu un outil qui ne l'entrave pas.",
  },
];

export default function AProposPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section style={{ padding: "100px 32px 80px", borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              Notre histoire
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 28, maxWidth: 700 }}>
            Né d&apos;un besoin réel,{" "}
            <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.55)" }}>construit avec précision</em>
          </h1>
        </div>
      </section>

      {/* Storytelling */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ width: 40, height: 1, background: "var(--gold)", marginBottom: 24 }} />
              <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.1rem", fontWeight: 400, color: "rgba(245,240,232,0.4)", fontStyle: "italic", lineHeight: 1.7 }}>
                &ldquo;Ce que nous voyons détruit des projets qui méritaient mieux.&rdquo;
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.9 }}>
                Tout a commencé par une frustration légitime. En travaillant dans l&apos;événementiel
                professionnel, j&apos;ai été témoin à plusieurs reprises de photos et vidéos prises lors
                d&apos;événements confidentiels — et diffusées avant que les organisateurs aient pu
                réagir.
              </p>
              <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.9 }}>
                Un lancement automobile piraté. Une présentation de collection diffusée en avance.
                Des échanges de comité de direction captés sur téléphone et partagés en interne.
                À chaque fois, les conséquences allaient bien au-delà de l&apos;événement lui-même :
                stratégie compromise, relations presse fragilisées, confiance brisée.
              </p>
              <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.9 }}>
                La solution américaine — Yondr — existait, mais elle était inaccessible en France,
                onéreuse à l&apos;import et sans aucun service local. Les organisateurs français n&apos;avaient
                d&apos;autre choix que de demander poliment aux invités de ranger leur téléphone —
                demande que personne ne respectait vraiment.
              </p>
              <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.9 }}>
                Lock Event est né de cette évidence : il fallait créer un service professionnel,
                basé en France, qui puisse déployer des pochettes anti-photo premium lors de n&apos;importe
                quel événement — avec une équipe dédiée, un protocole solide et un outil qui respecte
                les invités.
              </p>
              <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.9 }}>
                Basés à Marseille, nous intervenons aujourd&apos;hui sur tout le territoire national,
                pour des agences événementielles, des marques de luxe, des entreprises du CAC et
                des hôtels de prestige.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 32px", background: "var(--bg-soft)", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Nos valeurs
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Ce qui nous guide
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {values.map((v) => (
              <div key={v.title} style={{ padding: "40px 32px", border: "1px solid rgba(245,240,232,0.07)", background: "var(--bg-card)" }}>
                <div style={{ width: 28, height: 1, background: "var(--gold)", marginBottom: 24 }} />
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.4rem", fontWeight: 500, marginBottom: 14 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why France needs this */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Le contexte
            </div>
            <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
              Pourquoi ce service manquait en France
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[
              {
                title: "Le concurrent américain",
                content: "Yondr, fondé en 2014 à San Francisco, a popularisé le concept aux États-Unis pour des concerts de stars (Jack White, Guns N&apos; Roses, Dave Chappelle). Mais son modèle est pensé pour le marché américain — pas de service en France, pas d&apos;équipe locale, pas d&apos;adaptation B2B.",
              },
              {
                title: "Le vide en France",
                content: "Aucun prestataire français ne proposait de service clé en main de pochettes anti-photo avec personnel dédié. Les organisateurs se retrouvaient à gérer eux-mêmes — ou à renoncer. Lock Event comble ce vide avec un service professionnel, national et adapté aux standards événementiels français.",
              },
              {
                title: "Une demande croissante",
                content: "La multiplication des réseaux sociaux, des stories en direct et du journalisme citoyen crée une pression nouvelle sur les événements confidentiels. Les entreprises et marques prennent conscience que la confidentialité visuelle n&apos;est plus optionnelle.",
              },
              {
                title: "Notre position",
                content: "Lock Event est le premier service français dédié à la protection visuelle événementielle. Nous ne vendons pas un gadget — nous délivrons une prestation complète avec des techniciens formés, un protocole certifié et un engagement de confidentialité.",
              },
            ].map((item) => (
              <div key={item.title} style={{ padding: "32px 0", borderTop: "1px solid rgba(245,240,232,0.07)" }}>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.2rem", fontWeight: 500, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Location */}
      <section style={{ padding: "100px 32px", background: "var(--bg-soft)", borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
                Base opérationnelle
              </div>
              <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "2rem", fontWeight: 400, marginBottom: 16 }}>
                Marseille
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}>
                Basés dans la capitale économique du sud de la France, nous rayonnons sur l&apos;ensemble
                du territoire. Paris, Lyon, Nice, Bordeaux, Toulouse, Strasbourg — nos équipes
                se déplacent partout où votre événement le requiert.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
                Notre équipe
              </div>
              <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "2rem", fontWeight: 400, marginBottom: 16 }}>
                Des techniciens, pas des vigiles
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}>
                Nos techniciens sont formés à l&apos;accueil premium, à la gestion de flux et aux protocoles
                d&apos;urgence. Ils s&apos;intègrent à votre événement sans créer de friction, et représentent
                votre image de marque autant que la nôtre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 24 }}>
            Travaillons ensemble
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.55)", marginBottom: 40, lineHeight: 1.7 }}>
            Un projet ? Une question ? Nous répondons à chaque demande personnellement, sous 24h.
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
              Nous contacter →
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
              Suivre sur Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
