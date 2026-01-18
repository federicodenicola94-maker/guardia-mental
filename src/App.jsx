import React from "react";
const logo = "/logo-gm.jpeg";

export default function App() {
  // ✅ Placeholders MercadoPago (después pegás los links reales)
const MP_BASICO = " https://mpago.la/2K8ub3V";
const MP_PRO = "...";
const MP_MENTORIA = "https://mpago.la/2xFDGa9";
const CV_LINK = "https://drive.google.com/file/d/1dG_Z0P3QUMzpfiAU0cvCcDo7oX0Ry9M1/view?usp=sharing";


  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={S.page}>
      {/* Background glow */}
      <div style={S.bgGlow} aria-hidden="true" />

      {/* NAV */}
      <header style={S.navWrap}>
        <div style={S.container}>
          <div style={S.nav}>
            <div style={S.brand} onClick={() => scrollToId("top")}>
              <img src={logo} alt="Guardia Mental" style={S.logo} />
              <div>
                <div style={S.brandTitle}>GUARDIA MENTAL</div>
                <div style={S.brandSubtitle}>Cursos para médicos de guardia</div>
              </div>
            </div>

            <nav style={S.navLinks}>
              <button style={S.navBtn} onClick={() => scrollToId("programa")}>Programa</button>
              <button style={S.navBtn} onClick={() => scrollToId("temario")}>Temario</button>
              <button style={S.navBtn} onClick={() => scrollToId("planes")}>Planes</button>
              <button style={S.navBtn} onClick={() => scrollToId("contacto")}>Contacto</button>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main id="top" style={S.main}>
        <div style={S.container}>
          <section style={S.hero}>
            <div style={S.heroLeft}>
              <div style={S.badge}>Método práctico • Guardia real • Decisiones seguras</div>

              <h1 style={S.h1}>
              PENSAMIENTO CRÍTICO
              <span style={S.h1Accent}> "No gana el que sabe más, gana el que piensa mejor" por Dr. De Nicola.</span>
              </h1>

                <p style={{ ...S.lead, marginTop: "12px", fontWeight: 700 }}>
                 PROGRAMA DEL DR. FEDERICO DE NICOLA – MÉDICO EMERGENTÓLOGO CON EXPERIENCIA.
                </p>


                <div style={S.ctaRow}>
                <button style={S.primaryBtn} onClick={() => scrollToId("planes")}>
                  Ver planes
                </button>
                <button style={S.secondaryBtn} onClick={() => scrollToId("programa")}>
                  Ver cómo es
                </button>
             <a
    href={CV_LINK}
    target="_blank"
    rel="noreferrer"
    style={S.cvBtn}
  >
    Ver CV
  </a>
</div>
              <div style={S.metricsRow}>
                <div style={S.metricCard}>
                  <div style={S.metricTop}>+40</div>
                  <div style={S.metricBottom}>clases cortas y directas</div>
                </div>
                <div style={S.metricCard}>
                  <div style={S.metricTop}>Casos</div>
                  <div style={S.metricBottom}>razonamiento paso a paso</div>
                </div>
                <div style={S.metricCard}>
                  <div style={S.metricTop}>Checklists</div>
                  <div style={S.metricBottom}>para guardia real</div>
                </div>
              </div>
            </div>

            <div style={S.heroRight}>
              <div style={S.glassCard}>
                <div style={S.cardTitle}>Lista de espera / novedades</div>
                <div style={S.cardText}>
                  Te aviso cuando estén listos los módulos y las primeras fechas.
                </div>

                <div style={S.formRow}>
                  <input style={S.input} placeholder="Tu email" />
                  <button style={S.formBtn}>Sumame</button>
                </div>

                <div style={S.cardHint}>
                  *Demo local. Luego conectamos pagos y automatización.
                </div>

                <div style={S.divider} />

                <div style={S.microList}>
                  <div style={S.microItem}>• Algoritmo mental para guardia</div>
                  <div style={S.microItem}>• Red flags y trampas típicas</div>
                  <div style={S.microItem}>• Casos reales guiados</div>
                </div>
              </div>

              <div style={S.sideNote}>
                <div style={S.sideNoteTitle}>Enfoque</div>
                <div style={S.sideNoteText}>
                  Aprendés a <b>pensar</b> en guardia. No a memorizar.
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAMA */}
          <section id="programa" style={S.section}>
            <h2 style={S.h2}>Cómo funciona</h2>
            <p style={S.sectionLead}>
              Te llevo de lo básico a lo crítico con una estructura simple y repetible.
            </p>

            <div style={S.grid3}>
              <div style={S.featureCard}>
                <div style={S.featureTop}>1) Algoritmo mental</div>
                <div style={S.featureText}>
                  Marco simple: <b>síntomas → síndromes → riesgos → decisiones</b>.
                </div>
              </div>
              <div style={S.featureCard}>
                <div style={S.featureTop}>2) Red flags</div>
                <div style={S.featureText}>
                  Lo que no podés dejar pasar. Trampas típicas incluidas.
                </div>
              </div>
              <div style={S.featureCard}>
                <div style={S.featureTop}>3) Casos reales</div>
                <div style={S.featureText}>
                  Casos guiados para aprender a <b>pensar</b>, no a repetir.
                </div>
              </div>
            </div>
          </section>

          {/* TEMARIO */}
          <section id="temario" style={S.section}>
            <h2 style={S.h2}>Temario base</h2>
            <p style={S.sectionLead}>
              Esto es un ejemplo. Lo vamos a afinar con tu enfoque y tus módulos.
            </p>

            <div style={S.grid2}>
              <div style={S.listCard}>
                <div style={S.listTitle}>Síndromes “de oro”</div>
                <ul style={S.ul}>
                  <li>Dolor torácico en guardia: lo que mata vs lo que molesta</li>
                  <li>Disnea: ABC, causas y decisión de internación</li>
                  <li>Sepsis: reconocer temprano y actuar rápido</li>
                  <li>Dolor abdominal: banderas rojas y errores comunes</li>
                </ul>
              </div>

              <div style={S.listCard}>
                <div style={S.listTitle}>Herramientas de guardia</div>
                <ul style={S.ul}>
                  <li>Checklists: anamnesis + examen + decisiones</li>
                  <li>Interpretación práctica de laboratorio “útil”</li>
                  <li>Cómo comunicar y dejar asentado en HC</li>
                  <li>Priorización: qué resolver primero</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PLANES */}
          <section id="planes" style={S.section}>
            <h2 style={S.h2}>Planes</h2>
            <p style={S.sectionLead}>
              Listos para conectar con MercadoPago. Por ahora están con links placeholder.
            </p>

            <div style={S.pricingGrid}>
              <PlanCard
                title="Básico"
                price="$XX.XXX"
                desc="Acceso al curso base + actualizaciones."
                bullets={[
                  "Clases on-demand",
                  "Checklists descargables",
                  "Casos guiados",
                ]}
                href={MP_BASICO}
                highlight={false}
              />

              <PlanCard
                title="Pro"
                price="$XX.XXX"
                desc="Para el que quiere subir nivel rápido."
                bullets={[
                  "Todo lo del Básico",
                  "Casos extra + simulaciones",
                  "Material de guardia listo",
                ]}
                href={MP_PRO}
                highlight={true}
                badge="RECOMENDADO"
              />

              <PlanCard
                title="Mentoría"
                price="$XX.XXX"
                desc="Corrección y acompañamiento."
                bullets={[
                  "Todo lo del Pro",
                  "1:1 (cupos limitados)",
                  "Plan de mejora personal",
                ]}
                href={MP_MENTORIA}
                highlight={false}
              />
            </div>
          </section>

          {/* CONTACTO */}
          <section id="contacto" style={S.section}>
            <h2 style={S.h2}>Contacto</h2>
            <div style={S.contactCard}>
              <div>
                <div style={S.contactTitle}>¿Querés sumarte o consultarme?</div>
                <div style={S.contactText}>
                  Dejá tu WhatsApp o escribime. Después armamos automatización (Mail + MP + acceso).
                </div>
              </div>
              <div style={S.contactBtns}>
                <a
                  style={S.primaryBtnA}
                  href="https://wa.me/54911XXXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  style={S.secondaryBtnA}
                  href="mailto:guardia.mental@tudominio.com"
                >
                  Email
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer style={S.footer}>
            <div style={S.footerLeft}>
              <img src={logo} alt="GM" style={S.footerLogo} />
              <div>
                <div style={S.footerTitle}>GUARDIA MENTAL</div>
                <div style={S.footerSub}>Entrenamiento real para médicos de guardia</div>
              </div>
            </div>
            <div style={S.footerRight}>
              <a style={S.footerLink} href="#planes" onClick={(e) => { e.preventDefault(); scrollToId("planes"); }}>
                Planes
              </a>
              <span style={S.footerDot}>•</span>
              <a style={S.footerLink} href="#contacto" onClick={(e) => { e.preventDefault(); scrollToId("contacto"); }}>
                Contacto
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function PlanCard({ title, price, desc, bullets, href, highlight, badge }) {
  return (
    <div style={{ ...S.planCard, ...(highlight ? S.planCardHighlight : {}) }}>
      <div style={S.planTop}>
        <div>
          <div style={S.planName}>{title}</div>
          <div style={S.planDesc}>{desc}</div>
        </div>
        {badge ? <div style={S.planBadge}>{badge}</div> : null}
      </div>

      <div style={S.planPrice}>{price}</div>

      <ul style={S.planUl}>
        {bullets.map((b, i) => (
          <li key={i} style={S.planLi}>✓ {b}</li>
        ))}
      </ul>

      <a href={href} target="_blank" rel="noreferrer" style={S.buyBtn}>
        Pagar con MercadoPago
      </a>

      <div style={S.planHint}>*Link de pago (placeholder). Luego lo conectamos al real.</div>
    </div>
  );
}

const S = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "#0b0f14",
    color: "rgba(255,255,255,0.92)",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    position: "relative",
    overflowX: "hidden",
  },
  bgGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(1200px 600px at 15% 10%, rgba(255,0,0,0.14), transparent 55%), radial-gradient(900px 500px at 80% 25%, rgba(255,0,0,0.08), transparent 60%)",
    pointerEvents: "none",
  },

  container: { width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 24px" },

  navWrap: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    backdropFilter: "blur(10px)",
    background: "rgba(11,15,20,0.72)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  nav: {
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    cursor: "pointer",
    userSelect: "none",
  },
  logo: { width: 44, height: 44, borderRadius: 10, objectFit: "cover" },
  brandTitle: { fontWeight: 900, letterSpacing: 1 },
  brandSubtitle: { fontSize: 12, opacity: 0.75, marginTop: 2 },

  navLinks: { display: "flex", gap: 10, flexWrap: "wrap" },
  navBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(255,255,255,0.86)",
    padding: "10px 12px",
    borderRadius: 12,
    cursor: "pointer",
    fontSize: 13,
  },

  main: { position: "relative", padding: "34px 0 60px" },

  hero: {
    display: "grid",
    gridTemplateColumns: "1.12fr 0.88fr",
    gap: 24,
    alignItems: "start",
    paddingTop: 20,
  },
  heroLeft: { paddingRight: 8 },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    fontSize: 12,
    opacity: 0.92,
    marginBottom: 18,
  },
  h1: {
    margin: 0,
    fontSize: 54,
    lineHeight: 1.05,
    letterSpacing: -1,
    fontWeight: 950,
  },
  h1Accent: { color: "rgba(255,255,255,0.75)" },
  lead: { marginTop: 14, marginBottom: 22, fontSize: 16, lineHeight: 1.6, opacity: 0.86, maxWidth: 620 },

  ctaRow: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 },
  primaryBtn: {
    background: "linear-gradient(135deg, rgba(255,40,40,0.95), rgba(220,0,0,0.95))",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "white",
    padding: "12px 16px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 800,
  },
  secondaryBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(255,255,255,0.9)",
    padding: "12px 16px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 700,
  },

  metricsRow: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 8, maxWidth: 620 },
  metricCard: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 16,
    padding: "12px 14px",
  },
  metricTop: { fontWeight: 900, fontSize: 16 },
  metricBottom: { fontSize: 12, opacity: 0.75, marginTop: 2 },

  heroRight: { display: "flex", flexDirection: "column", gap: 14 },
  glassCard: {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
  },
  cardTitle: { fontWeight: 900, fontSize: 16 },
  cardText: { marginTop: 6, opacity: 0.8, lineHeight: 1.5, fontSize: 13 },
  formRow: { marginTop: 14, display: "flex", gap: 10 },
  input: {
    flex: 1,
    borderRadius: 14,
    padding: "12px 12px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(10,14,18,0.65)",
    color: "rgba(255,255,255,0.92)",
    outline: "none",
  },
  formBtn: {
    borderRadius: 14,
    padding: "12px 14px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.92)",
    color: "#0b0f14",
    cursor: "pointer",
    fontWeight: 900,
  },
  cardHint: { marginTop: 10, fontSize: 12, opacity: 0.6 },
  divider: { height: 1, background: "rgba(255,255,255,0.10)", margin: "14px 0" },
  microList: { display: "grid", gap: 6 },
  microItem: { fontSize: 12, opacity: 0.8 },

  sideNote: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    padding: 14,
  },
  sideNoteTitle: { fontWeight: 900, fontSize: 13, opacity: 0.9 },
  sideNoteText: { marginTop: 6, fontSize: 13, opacity: 0.78, lineHeight: 1.5 },

  section: { paddingTop: 48 },
  h2: { margin: 0, fontSize: 28, fontWeight: 950, letterSpacing: -0.5 },
  sectionLead: { marginTop: 8, opacity: 0.75, lineHeight: 1.6, maxWidth: 720 },

  grid3: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 },
  featureCard: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 18,
    padding: 16,
  },
  featureTop: { fontWeight: 900, marginBottom: 6 },
  featureText: { opacity: 0.78, lineHeight: 1.55, fontSize: 13 },

  grid2: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 },
  listCard: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 18,
    padding: 16,
  },
  listTitle: { fontWeight: 950, marginBottom: 10 },
  ul: { margin: 0, paddingLeft: 18, opacity: 0.82, lineHeight: 1.7 },

  pricingGrid: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 },
  planCard: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 20,
    padding: 18,
  },
  planCardHighlight: {
    border: "1px solid rgba(255,40,40,0.35)",
    background: "linear-gradient(180deg, rgba(255,40,40,0.10), rgba(255,255,255,0.03))",
    boxShadow: "0 18px 50px rgba(255,0,0,0.10)",
  },
  planTop: { display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" },
  planName: { fontWeight: 950, fontSize: 16 },
  planDesc: { opacity: 0.78, fontSize: 12, marginTop: 4, lineHeight: 1.5 },
  planBadge: {
    fontSize: 11,
    fontWeight: 950,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,40,40,0.20)",
  },
  planPrice: { marginTop: 14, fontSize: 28, fontWeight: 950, letterSpacing: -0.5 },
  planUl: { marginTop: 12, marginBottom: 14, paddingLeft: 0, listStyle: "none", display: "grid", gap: 8 },
  planLi: { fontSize: 13, opacity: 0.84, lineHeight: 1.5 },
  buyBtn: {
    display: "inline-flex",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    textDecoration: "none",
    background: "rgba(255,255,255,0.92)",
    color: "#0b0f14",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 950,
    border: "1px solid rgba(255,255,255,0.12)",
  },
  planHint: { marginTop: 10, fontSize: 12, opacity: 0.6 },

  contactCard: {
    marginTop: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 20,
    padding: 18,
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "center",
    flexWrap: "wrap",
  },
  contactTitle: { fontWeight: 950, fontSize: 15 },
  contactText: { marginTop: 6, opacity: 0.78, lineHeight: 1.6, fontSize: 13, maxWidth: 720 },
  contactBtns: { display: "flex", gap: 10, flexWrap: "wrap" },
  primaryBtnA: {
    textDecoration: "none",
    background: "linear-gradient(135deg, rgba(255,40,40,0.95), rgba(220,0,0,0.95))",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "white",
    padding: "12px 16px",
    borderRadius: 14,
    fontWeight: 900,
  },
  secondaryBtnA: {
    textDecoration: "none",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(255,255,255,0.9)",
    padding: "12px 16px",
    borderRadius: 14,
    fontWeight: 800,
  },

  footer: {
    marginTop: 52,
    paddingTop: 18,
    borderTop: "1px solid rgba(255,255,255,0.10)",
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
    paddingBottom: 18,
  },
  footerLeft: { display: "flex", gap: 12, alignItems: "center" },
  footerLogo: { width: 40, height: 40, borderRadius: 10, objectFit: "cover" },
  footerTitle: { fontWeight: 950, letterSpacing: 1 },
  footerSub: { fontSize: 12, opacity: 0.7, marginTop: 2 },
  footerRight: { display: "flex", alignItems: "center", gap: 10, opacity: 0.85 },
  footerLink: { color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 13 },
  footerDot: { opacity: 0.5 },

  // Responsive simple
  "@media": {},
};

// Responsive sin librerías: ajusta con CSS-in-JS “manual”
if (typeof window !== "undefined") {
  const m = window.matchMedia("(max-width: 980px)");
  const apply = () => {
    if (m.matches) {
      S.hero.gridTemplateColumns = "1fr";
      S.grid3.gridTemplateColumns = "1fr";
      S.grid2.gridTemplateColumns = "1fr";
      S.pricingGrid.gridTemplateColumns = "1fr";
      S.h1.fontSize = 42;
      S.metricsRow.gridTemplateColumns = "1fr";
    } else {
      S.hero.gridTemplateColumns = "1.12fr 0.88fr";
      S.grid3.gridTemplateColumns = "repeat(3, 1fr)";
      S.grid2.gridTemplateColumns = "repeat(2, 1fr)";
      S.pricingGrid.gridTemplateColumns = "repeat(3, 1fr)";
      S.h1.fontSize = 54;
      S.metricsRow.gridTemplateColumns = "repeat(3, 1fr)";
    }
  };
  apply();
  m.addEventListener?.("change", apply);
}


