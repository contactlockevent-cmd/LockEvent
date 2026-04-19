import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lock Event — Protection visuelle pour événements premium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
          position: "relative",
        }}
      >
        {/* Gold grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Top line */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48, position: "relative" }}>
          <div style={{ width: 48, height: 1, background: "#C9A84C" }} />
          <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C" }}>
            Premier service en France
          </span>
          <div style={{ width: 48, height: 1, background: "#C9A84C" }} />
        </div>
        {/* Logo text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
          <span
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#F5F0E8",
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            LOCK EVENT
          </span>
          <div style={{ width: "100%", height: 1, background: "rgba(201,168,76,0.3)", marginTop: 16, marginBottom: 16 }} />
          <span style={{ fontSize: 18, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C" }}>
            Protection Visuelle · Événements Premium
          </span>
        </div>
        {/* Bottom */}
        <div style={{ position: "absolute", bottom: 48, display: "flex", gap: 48 }}>
          {["100% Confidentiel", "0 Photo", "Service National"].map((s) => (
            <span key={s} style={{ fontSize: 14, letterSpacing: "0.15em", color: "rgba(245,240,232,0.4)", textTransform: "uppercase" }}>
              {s}
            </span>
          ))}
        </div>
        {/* URL */}
        <div style={{ position: "absolute", bottom: 28, right: 48 }}>
          <span style={{ fontSize: 13, color: "rgba(201,168,76,0.5)", letterSpacing: "0.1em" }}>lockevent.fr</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
