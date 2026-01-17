import { useEffect, useMemo, useState } from "react";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("dark"); // "dark" | "light"

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Pegá acá tus links REALES de MercadoPago cuando los tengas
  const MP = useMemo(
    () => ({
      gm01: "https://link.mercadopago.com.ar/gm-01",
      gm02: "https://link.mercadopago.com.ar/gm-02",
      gm03: "https://link.mercadopago.com.ar/gm-03",
    }),
    []
  );

  const cursos = useMemo(
    () => [
      {
        id: "gm01",
        badge: "Curso",
        title: "MÉTODO BASE — Guardia Mental",
        subtitle: "Estructura mental para decidir rápido y seguro.",
        price: 50,
        img: "/curso-1.png",
        temario: [
          "Marco mental: síntomas → síndromes → riesgos → decisión",
          "Anamnesis de alto rendimiento en guardia (sin ruido)",
          "Examen físico que cambia conducta",
          "Errores típicos del médico nuevo (y cómo evitarlos)",
          "Plan inicial: qué pedir y cuándo",
          "Alta vs internación: criterios claros",
        ],
        mp: MP.gm01,
      },
      {
        id: "gm02",
        badge: "Curso",
        title: "CASOS REALES GUIADOS",
        subtitle: "Pensamiento clínico aplicado. No es memorización.",
        price: 150,
        img: "/curso-2.png",
        temario: [
          "Casos por síndrome: dolor torácico, disnea, abdomen agudo",
          "Neurológico: cefalea, focalidad, vértigo, crisis",
          "Trauma: decisiones rápidas y seguras",
          "Sepsis: identificación precoz + manejo inicial",
          "Laboratorio e imágenes: cómo leer “lo importante”",
          "Checklist de cierre: lo que no podés olvidar",
        ],
        mp: MP.gm02,
      },
      {
        id: "gm03",
        badge: "Programa Premium",
        title: "AUTONOMÍA DE GUARDIA — PENSAMIENTO CRÍTICO 360°",
        subtitle: "Formación completa para manejar guardia de forma autónoma.",
        price: 500,
        img: "/curso-3.png",
        temario: [
          "Sistema completo de decisión clínica (del triage al alta)",
          "Red flags por sistemas: cardiología, neuro, resp, abdomen",
          "Estrategias de priorización: qué mata primero",
          "Interpretación práctica: ECG, gases, sepsis bundle, IAM/ACV",
          "Comunicación clínica: interconsultas y pases impecables",
          "Plan de guardia: algoritmo + checklists + simulaciones",
          "Criterios de internación, derivación y manejo ambulatorio",
          "Biblioteca de plantillas: conductas listas para usar",
        ],
        mp: MP.gm03,
      },
    ],
    [MP.gm01, MP.gm02, MP.gm03]
  );

  return (
    <div className="page">
      {/* TOPBAR */}
      <header className="topbar">
        <div className="brand">
          <img
            src="/logo-gm.jpeg"
            alt="Guardia Mental"
            className="brandLogo"
            loading="eager"
          />
          <div className="brandText">
            <div className="brandName">GUARDIA MENTAL</div>
            <div className="brandSub">Cursos premium para médicos de guardia</div>
          </div>
        </div>

        <nav className="nav">
          <a className="navLink" href="#cursos">
            Cursos
          </a>
          <a className="navLink" href="#metodo">
            Método
          </a>
          <a className="navLink" href="#contacto">
            Contacto
          </a>

          <button
            className="themeBtn"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Cambiar tema"
            title="Cambiar tema"
            type="button"
          >
            {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </nav>
      </header>

      {/* HERO */}
      <main className="container">
        <section className="hero">
          <div className="heroLeft">
            <div className="pill">
              DR. FEDERICO DE NICOLA · MÉDICO EMERGENTÓLOGO
            </div>

            <h1 className="h1">
              Pensamiento clínico
              <span className="h1Soft"> para guardia real.</span>
              <br />
              Decisiones seguras, sin humo.
            </h1>

            <p className="lead">
              Entrenamiento práctico para decidir con claridad bajo presión:
              qué preguntar, qué buscar y qué no podés pasar por alto.
            </p>

            <div className="heroCtas">
              <a className="btnPrimary" href="#cursos">
                Ver cursos
              </a>
              <a className="btnGhost" href="#metodo">
                Cómo funciona
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statTop">Estructura</div>
                <div className="statText">Algoritmos mentales + checklists</div>
              </div>
              <div className="stat">
                <div className="statTop">Aplicación</div>
                <div className="statText">Casos reales guiados</div>
              </div>
              <div className="stat">
                <div className="statTop">Autonomía</div>
                <div className="statText">Criterio clínico sólido</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="card">
              <div className="cardTitle">Acceso rápido</div>
              <div className="cardText">
                Elegí un curso, pagás y recibís el acceso (cuando conectemos
                MercadoPago real).
              </div>

              <div className="quickList">
                {cursos.map((c) => (
                  <a className="quickItem" key={c.id} href={`#${c.id}`}>
                    <span className="quickName">{c.title}</span>
                    <span className="quickPrice">USD {c.price}</span>
                  </a>
                ))}
              </div>

              <div className="hint">
                *Ahora está “demo”. Después pegamos tus links reales y listo.
              </div>
            </div>
          </div>
        </section>

        {/* CURSOS */}
        <section id="cursos" className="section">
          <div className="sectionHead">
            <h2 className="h2">Cursos</h2>
            <p className="sectionLead">
              Pocos productos, bien definidos. Fácil de elegir. Fácil de comprar.
            </p>
          </div>

          <div className="grid">
            {cursos.map((c) => (
              <article id={c.id} key={c.id} className="course">
                <div className="courseMedia">
                  <img className="courseImg" src={c.img} alt={c.title} />
                </div>

                <div className="courseBody">
                  <div className="courseTop">
                    <span className="badge">{c.badge}</span>
                    <span className="price">USD {c.price}</span>
                  </div>

                  <h3 className="h3">{c.title}</h3>
                  <p className="courseSub">{c.subtitle}</p>

                  <details className="details">
                    <summary>Ver temario</summary>
                    <ul className="list">
                      {c.temario.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  </details>

                  <div className="courseCtas">
                    <a className="btnPrimary" href={c.mp} target="_blank" rel="noreferrer">
                      Comprar (MercadoPago)
                    </a>
                    <a className="btnGhost" href="#contacto">
                      Consultar
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* METODO */}
        <section id="metodo" className="section">
          <div className="sectionHead">
            <h2 className="h2">El método</h2>
            <p className="sectionLead">
              Un sistema simple para no improvisar cuando hay presión.
            </p>
          </div>

          <div className="cards3">
            <div className="miniCard">
              <div className="miniTitle">1) Estructura mental</div>
              <div className="miniText">
                Síntomas → síndrome → riesgo → conducta. Sin vueltas.
              </div>
            </div>

            <div className="miniCard">
              <div className="miniTitle">2) Red flags</div>
              <div className="miniText">
                Lo que no podés dejar pasar. Trampas típicas incluidas.
              </div>
            </div>

            <div className="miniCard">
              <div className="miniTitle">3) Decisión accionable</div>
              <div className="miniText">
                Qué pedir, qué hacer, cuándo internar y cuándo no.
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <div className="sectionHead">
            <h2 className="h2">Contacto</h2>
            <p className="sectionLead">
              Para preguntas, convenios, equipos, o mentoría.
            </p>
          </div>

          <div className="contactCard">
            <div className="contactLeft">
              <div className="contactName">
                DR. FEDERICO DE NICOLA
              </div>
              <div className="contactRole">
                MÉDICO EMERGENTÓLOGO · DIRECTOR ACADÉMICO — GUARDIA MENTAL
              </div>
              <div className="contactHint">
                Reemplazá estos links por los tuyos reales.
              </div>
            </div>

            <div className="contactRight">
              <a className="linkBtn" href="https://instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="linkBtn" href="https://wa.me/" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="linkBtn" href="mailto:tuemail@correo.com">
                Email
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} Guardia Mental</div>
          <div className="footerRight">Hecho para vender, simple y premium.</div>
        </footer>
      </main>
    </div>
  );
}
