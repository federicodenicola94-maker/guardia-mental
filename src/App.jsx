import React, { useMemo, useState } from "react";

export default function App() {
  // 🔗 Links placeholder (después pegás los links reales de MercadoPago)
  const MP = {
    gm01: "https://link.mercadopago.com.ar/gm-01",
    gm02: "https://link.mercadopago.com.ar/gm-02",
    gm03: "https://link.mercadopago.com.ar/gm-03",
  };

  const [darkMode, setDarkMode] = useState(true);

  const cursos = useMemo(
    () => [
      {
        id: "gm01",
        tag: "Curso",
        title: "Guardia Mental — Método Base",
        subtitle: "Estructura mental para decidir rápido y seguro.",
        price: 50,
        img: "/curso-1.png",
        temario: [
          "Triage mental y prioridades",
          "Interrogatorio en 90 segundos",
          "Examen físico de alto rendimiento",
          "Red flags por síndrome",
          "Alta vs internación",
        ],
        link: MP.gm01,
      },
      {
        id: "gm02",
        tag: "Curso",
        title: "Casos Reales Guiados",
        subtitle: "Razonamiento clínico paso a paso (guardia real).",
        price: 150,
        img: "/curso-2.png",
        temario: [
          "Dolor torácico, disnea, abdomen",
          "Sepsis y foco oculto",
          "Neurológico agudo (ACV/convulsiones/tóxicos)",
          "Errores frecuentes y cómo evitarlos",
          "Decisiones con incertidumbre",
        ],
        link: MP.gm02,
      },
      {
        id: "gm03",
        tag: "Programa Avanzado",
        title: "GUARDIA MENTAL MASTER — Autonomía Total",
        subtitle: "Pensamiento crítico + liderazgo para guardia autónoma real.",
        price: 500,
        img: "/curso-3.png",
        temario: [
          "Framework avanzado de decisión clínica",
          "Casos críticos integradores (multisistema)",
          "Priorización real en shock room",
          "Criterio: internar, derivar o alta segura",
          "Entrenamiento para criterio propio",
        ],
        link: MP.gm03,
        destacado: true,
      },
    ],
    []
  );

  const T = theme(darkMode);

  return (
    <div style={T.page}>
      {/* HEADER */}
      <header style={T.header}>
        <div style={T.brand}>
          <img
            src="/logo-gm.jpeg"
            alt="Guardia Mental"
            style={T.logo}
            onError={(e) => {
              // fallback por si el nombre cambia
              e.currentTarget.src = "/logo.png";
            }}
          />
          <div>
            <div style={T.brandName}>GUARDIA MENTAL</div>
            <div style={T.brandDesc}>Formación para guardia autónoma</div>
          </div>
        </div>

        <nav style={T.nav}>
          <a style={T.navLink} href="#cursos">
            Cursos
          </a>
          <a style={T.navLink} href="#como">
            Método
          </a>
          <a style={T.navLink} href="#contacto">
            Contacto
          </a>

          <button style={T.toggle} onClick={() => setDarkMode((v) => !v)}>
            {darkMode ? "☀ Claro" : "🌙 Oscuro"}
          </button>
        </nav>
      </header>

      {/* HERO */}
      <main style={T.main}>
        <section style={T.hero}>
          <div style={T.heroLeft}>
            <div style={T.pill}>MÉDICO LÍDER · DECISIONES SEGURAS · GUARDIA REAL</div>

            <h1 style={T.h1}>
              PENSAMIENTO CRÍTICO
              <br />
              <span style={T.h1Soft}>"No gana el que sabe más, gana el que piensa mejor"</span>
            </h1>

            <p style={T.heroP}>
              Entrenamiento práctico para tomar decisiones claras en guardia: qué preguntar,
              qué buscar y qué no podés pasar por alto.
            </p>

            <div style={T.heroCtas}>
              <a href="#cursos" style={T.btnPrimary}>
                Ver cursos
              </a>
              <a href="#como" style={T.btnGhost}>
                Cómo funciona
              </a>
            </div>

            <div style={T.metrics}>
              <div style={T.metricCard}>
                <div style={T.metricTop}>+40</div>
                <div style={T.metricSub}>clases cortas</div>
              </div>
              <div style={T.metricCard}>
                <div style={T.metricTop}>Casos</div>
                <div style={T.metricSub}>razonamiento real</div>
              </div>
              <div style={T.metricCard}>
                <div style={T.metricTop}>Checklists</div>
                <div style={T.metricSub}>para guardia</div>
              </div>
            </div>
          </div>

          <div style={T.heroRight}>
            <div style={T.heroCard}>
              <div style={T.heroCardTitle}>Lista de espera</div>
              <div style={T.heroCardText}>
                Te aviso cuando haya fechas, novedades y cupos.
              </div>

              <div style={T.formRow}>
                <input style={T.input} placeholder="Tu email" />
                <button style={T.btnPrimarySm}>Sumarme</button>
              </div>

              <div style={T.helper}>
                Pagos por MercadoPago (próximo paso). Acceso inmediato al comprar.
              </div>
            </div>

            <div style={T.noteCard}>
              <div style={T.noteTitle}>Enfoque</div>
              <div style={T.noteText}>Aprendés a decidir. No a memorizar.</div>
            </div>
          </div>
        </section>

        {/* CÓMO */}
        <section id="como" style={T.section}>
          <h2 style={T.h2}>Cómo funciona</h2>
          <p style={T.lead}>Estructura simple, repetible y aplicable en guardia real.</p>

          <div style={T.grid3}>
            <div style={T.feature}>
              <div style={T.featureTop}>1) Algoritmo</div>
              <div style={T.featureText}>Síntomas → síndromes → riesgos → conducta.</div>
            </div>
            <div style={T.feature}>
              <div style={T.featureTop}>2) Red flags</div>
              <div style={T.featureText}>Lo que no podés dejar pasar.</div>
            </div>
            <div style={T.feature}>
              <div style={T.featureTop}>3) Casos</div>
              <div style={T.featureText}>Decisión clínica paso a paso.</div>
            </div>
          </div>
        </section>

        {/* CURSOS */}
        <section id="cursos" style={T.section}>
          <h2 style={T.h2}>Cursos</h2>
          <p style={T.lead}>Escalera de nivel: base → práctica → autonomía total.</p>

          <div style={T.gridCourses}>
            {cursos.map((c) => (
              <article
                key={c.id}
                style={c.destacado ? { ...T.courseCard, ...T.courseCardFeatured } : T.courseCard}
              >
                <div style={T.courseMedia}>
                  <img src={c.img} alt={c.title} style={T.courseImg} />
                  {c.destacado ? <div style={T.badge}>CUPOS LIMITADOS</div> : null}
                </div>

                <div style={T.courseBody}>
                  <div style={T.courseTag}>{c.tag}</div>
                  <h3 style={T.courseTitle}>{c.title}</h3>
                  <p style={T.courseSubtitle}>{c.subtitle}</p>

                  <div style={T.priceRow}>
                    <div style={T.price}>USD {c.price}</div>
                    <a href={c.link} style={c.destacado ? T.buyBtnFeatured : T.buyBtn}>
                      Comprar
                    </a>
                  </div>

                  <ul style={T.syllabus}>
                    {c.temario.slice(0, 5).map((it, i) => (
                      <li key={i} style={T.syllabusItem}>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={T.section}>
          <h2 style={T.h2}>Contacto</h2>
          <p style={T.lead}>Si querés llevar tu guardia al siguiente nivel, escribime.</p>

          <div style={T.contactCard}>
            <div style={T.contactRow}>
              <div>
                <div style={T.contactLabel}>Email</div>
                <div style={T.contactValue}>guardiamental@gmail.com</div>
              </div>
              <a style={T.btnGhost} href="mailto:tucorreo@guardia-mental.com">
                Enviar mail
              </a>
            </div>

            <div style={T.divider} />

            <div style={T.footerMini}>
              © {new Date().getFullYear()} Guardia Mental · Hecho para vender con criterio.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ===== THEME ===== */
function theme(dark) {
  const bg = dark ? "#0b0b0e" : "#f6f7fb";
  const text = dark ? "#ffffff" : "#0c0d12";
  const soft = dark ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.68)";
  const card = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const border = dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)";

  return {
    page: {
      minHeight: "100vh",
      background: bg,
      color: text,
      transition: "background 250ms ease, color 250ms ease",
    },
    header: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 22px",
      backdropFilter: "blur(10px)",
      background: dark ? "rgba(11,11,14,0.72)" : "rgba(246,247,251,0.72)",
      borderBottom: `1px solid ${border}`,
    },
    brand: { display: "flex", gap: 12, alignItems: "center" },
    logo: {
      height: 62,
      width: "auto",
      display: "block",
      filter: dark
        ? "drop-shadow(0 10px 20px rgba(0,0,0,0.55)) drop-shadow(0 0 14px rgba(225,29,46,0.25))"
        : "drop-shadow(0 8px 18px rgba(0,0,0,0.25))",
    },
    brandName: { fontWeight: 900, letterSpacing: 0.6, fontSize: 14 },
    brandDesc: { fontSize: 12, color: soft },

    nav: { display: "flex", gap: 12, alignItems: "center" },
    navLink: {
      color: soft,
      textDecoration: "none",
      fontSize: 13,
      padding: "8px 10px",
      borderRadius: 12,
      border: `1px solid transparent`,
    },

    toggle: {
      marginLeft: 6,
      padding: "8px 12px",
      borderRadius: 999,
      cursor: "pointer",
      fontWeight: 800,
      fontSize: 12,
      background: dark ? "#ffffff" : "#0b0b0e",
      color: dark ? "#0b0b0e" : "#ffffff",
      border: `1px solid ${border}`,
    },

    main: { maxWidth: 1120, margin: "0 auto", padding: "28px 18px 70px" },

    hero: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: 18,
      padding: "26px 0 10px",
    },
    heroLeft: {},
    heroRight: { display: "grid", gap: 14 },

    pill: {
      display: "inline-flex",
      padding: "8px 12px",
      borderRadius: 999,
      background: card,
      border: `1px solid ${border}`,
      fontSize: 12,
      color: soft,
      letterSpacing: 0.5,
      marginBottom: 14,
    },

    h1: { margin: 0, fontSize: 54, lineHeight: 1.02, fontWeight: 950 },
    h1Soft: { color: "rgba(255,255,255,0.70)" },

    heroP: { marginTop: 14, maxWidth: 560, color: soft, lineHeight: 1.5 },

    heroCtas: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
    btnPrimary: {
      background: "#e11d2e",
      color: "#fff",
      textDecoration: "none",
      borderRadius: 14,
      padding: "12px 16px",
      fontWeight: 900,
      border: "1px solid rgba(255,255,255,0.10)",
      boxShadow: "0 16px 40px rgba(225,29,46,0.18)",
    },
    btnGhost: {
      background: "transparent",
      color: text,
      textDecoration: "none",
      borderRadius: 14,
      padding: "12px 16px",
      fontWeight: 900,
      border: `1px solid ${border}`,
    },

    metrics: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
    metricCard: {
      background: card,
      border: `1px solid ${border}`,
      borderRadius: 16,
      padding: "12px 14px",
      minWidth: 150,
    },
    metricTop: { fontWeight: 950, fontSize: 16 },
    metricSub: { marginTop: 4, fontSize: 12, color: soft },

    heroCard: {
      background: card,
      border: `1px solid ${border}`,
      borderRadius: 18,
      padding: 16,
    },
    heroCardTitle: { fontWeight: 950, fontSize: 16 },
    heroCardText: { marginTop: 6, fontSize: 13, color: soft, lineHeight: 1.4 },

    formRow: { marginTop: 12, display: "flex", gap: 10 },
    input: {
      flex: 1,
      borderRadius: 14,
      padding: "12px 12px",
      background: dark ? "rgba(0,0,0,0.30)" : "rgba(255,255,255,0.80)",
      border: `1px solid ${border}`,
      color: text,
      outline: "none",
    },
    btnPrimarySm: {
      borderRadius: 14,
      padding: "12px 14px",
      fontWeight: 950,
      border: "1px solid rgba(255,255,255,0.10)",
      background: "#e11d2e",
      color: "white",
      cursor: "pointer",
    },
    helper: { marginTop: 10, fontSize: 12, color: soft },

    noteCard: {
      background: card,
      border: `1px solid ${border}`,
      borderRadius: 18,
      padding: 16,
    },
    noteTitle: { fontWeight: 950, fontSize: 13, color: soft, letterSpacing: 0.4 },
    noteText: { marginTop: 6, fontWeight: 900, fontSize: 14 },

    section: { marginTop: 30 },
    h2: { margin: "0 0 8px 0", fontSize: 26, fontWeight: 950 },
    lead: { margin: 0, color: soft, fontSize: 13, lineHeight: 1.5 },

    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 12,
      marginTop: 14,
    },
    feature: {
      background: card,
      border: `1px solid ${border}`,
      borderRadius: 18,
      padding: 16,
    },
    featureTop: { fontWeight: 950, fontSize: 14 },
    featureText: { marginTop: 8, color: soft, fontSize: 13, lineHeight: 1.4 },

    gridCourses: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 16,
      marginTop: 16,
    },
    courseCard: {
      background: card,
      border: `1px solid ${border}`,
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 18px 50px rgba(0,0,0,0.30)",
    },
    courseCardFeatured: {
      border: "1px solid rgba(225,29,46,0.45)",
      boxShadow:
        "0 22px 70px rgba(0,0,0,0.35), 0 0 0 1px rgba(225,29,46,0.25) inset",
    },
    courseMedia: {
      position: "relative",
      padding: 14,
      background: dark
        ? "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0))"
        : "linear-gradient(180deg, rgba(0,0,0,0.03), rgba(255,255,255,0))",
    },
    courseImg: { width: "100%", height: 250, objectFit: "contain", display: "block" },
    badge: {
      position: "absolute",
      right: 14,
      top: 14,
      fontSize: 12,
      fontWeight: 950,
      letterSpacing: 0.6,
      padding: "8px 10px",
      borderRadius: 999,
      background: "rgba(225,29,46,0.16)",
      border: "1px solid rgba(225,29,46,0.35)",
    },

    courseBody: { padding: "0 16px 16px 16px" },
    courseTag: { marginTop: 6, fontSize: 12, color: soft },
    courseTitle: { margin: "8px 0 0 0", fontSize: 18, fontWeight: 950 },
    courseSubtitle: { margin: "8px 0 12px 0", color: soft, fontSize: 13, lineHeight: 1.4 },

    priceRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 },
    price: { fontSize: 18, fontWeight: 950 },

    buyBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 12px",
      borderRadius: 12,
      textDecoration: "none",
      fontWeight: 950,
      background: dark ? "#ffffff" : "#0b0b0e",
      color: dark ? "#0b0b0e" : "#ffffff",
      border: `1px solid ${border}`,
    },
    buyBtnFeatured: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 12px",
      borderRadius: 12,
      textDecoration: "none",
      fontWeight: 950,
      background: "#e11d2e",
      color: "white",
      border: "1px solid rgba(255,255,255,0.10)",
      boxShadow: "0 16px 40px rgba(225,29,46,0.18)",
    },

    syllabus: { margin: "12px 0 0 0", paddingLeft: 16, color: soft, fontSize: 13, lineHeight: 1.45 },
    syllabusItem: { marginBottom: 6 },

    contactCard: {
      marginTop: 14,
      background: card,
      border: `1px solid ${border}`,
      borderRadius: 18,
      padding: 16,
    },
    contactRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
    contactLabel: { fontSize: 12, color: soft },
    contactValue: { fontSize: 14, fontWeight: 900 },
    divider: { height: 1, background: border, margin: "14px 0" },
    footerMini: { fontSize: 12, color: soft },

    // Responsive simple
    ...(window.matchMedia && window.matchMedia("(max-width: 900px)").matches
      ? {
          hero: { display: "grid", gridTemplateColumns: "1fr", gap: 14, padding: "18px 0 10px" },
          h1: { margin: 0, fontSize: 40, lineHeight: 1.05, fontWeight: 950 },
          grid3: { display: "grid", gridTemplateColumns: "1fr", gap: 12, marginTop: 14 },
          gridCourses: { display: "grid", gridTemplateColumns: "1fr", gap: 16, marginTop: 16 },
          nav: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" },
          logo: { height: 58, width: "auto", display: "block" },
        }
      : {}),
  };
}
