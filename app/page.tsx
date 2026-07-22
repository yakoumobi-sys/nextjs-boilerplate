"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/emails/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSuccess(true)
        setEmail("")
        setTimeout(() => setSuccess(false), 4000)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: #D4A853 #0A0A0B;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0A0A0B;
        }

        ::-webkit-scrollbar-thumb {
          background: #D4A853;
          border-radius: 4px;
        }

        body, html {
          background: #0A0A0B;
          color: #F5F3EE;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 168, 83, 0); }
          50% { box-shadow: 0 0 30px rgba(212, 168, 83, 0.3); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        input {
          font-family: 'Archivo', system-ui, sans-serif;
        }
      `}</style>

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>MOKA YAKOUBI</div>
          <div style={styles.links}>
            <a href="#formations" style={styles.navLink}>Formations</a>
            <a href="#podcast" style={styles.navLink}>Podcast</a>
            <a href="#story" style={styles.navLink}>Story</a>
          </div>
          <button
            style={styles.navBtn}
            onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
          >
            Rejoindre
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroBg1}></div>
        <div style={styles.heroBg2}></div>

        <div style={styles.heroContainer}>
          <span className="animate-slide-in-left" style={styles.tag}>
            Entrepreneur · Fondateur · Visionnaire
          </span>

          <h1 className="animate-fade-in-up" style={{ ...styles.h1, animationDelay: "0.1s" }}>
            Build<br />
            Teach<br />
            <span style={styles.gold}>Scale</span>
          </h1>

          <p className="animate-fade-in-up" style={{ ...styles.subtitle, animationDelay: "0.2s" }}>
            Ce qui fonctionne pour moi,<br />fonctionne pour toi.
          </p>

          <div className="animate-fade-in-up" style={{ ...styles.ctaGroup, animationDelay: "0.3s" }}>
            <a href="#formations" style={styles.btnPrimary}>
              Formations Premium →
            </a>
            <a href="https://youtu.be/KoKkuErzN9c" style={styles.btnSecondary}>
              Podcast: Conversations Sans Filtre
            </a>
          </div>

          <div className="animate-fade-in-up" style={{ ...styles.stats, animationDelay: "0.4s" }}>
            <div style={styles.stat}>
              <div style={styles.statNum}>43</div>
              <div style={styles.statLabel}>Employes</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNum}>480K+</div>
              <div style={styles.statLabel}>Communaute</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNum}>2x</div>
              <div style={styles.statLabel}>Entreprises</div>
            </div>
          </div>

          <div className="animate-float" style={styles.scrollIndicator}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section id="formations" style={styles.formations}>
        <div style={styles.container}>
          <h2 className="animate-fade-in-up" style={styles.h2}>Formations</h2>
          <p className="animate-fade-in-up" style={{ ...styles.sectionDesc, animationDelay: "0.1s" }}>
            Lance ta marque. Builds ta SaaS. Domine ton industrie.
          </p>

          <div style={styles.grid3}>
            {[
              {
                title: "Marque de Vetements",
                desc: "Lance ta marque sans machines, sans stock. Profit des le premier jour.",
                url: "/formations/marque-vetements",
                delay: "0s",
              },
              {
                title: "Tshirt Printing",
                desc: "Du DTF a la broderie. Clients illimites. Profits garantis.",
                url: "/formations/tshirt-printing",
                delay: "0.1s",
              },
              {
                title: "App/SaaS avec IA",
                desc: "De l'idee au lancement. Pas besoin de savoir coder.",
                url: "/formations/app-saas",
                delay: "0.2s",
              },
            ].map((f, i) => (
              <a
                key={i}
                href={f.url}
                className="animate-fade-in-up"
                style={{
                  ...styles.card,
                  animationDelay: f.delay,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(-8px)"
                  el.style.boxShadow = "0 20px 40px rgba(212, 168, 83, 0.1)"
                  el.style.borderColor = "rgba(212, 168, 83, 0.6)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(0)"
                  el.style.boxShadow = "none"
                  el.style.borderColor = "rgba(255, 255, 255, 0.1)"
                }}
              >
                <svg style={styles.cardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                  <path d="M23 4v6h-6"></path>
                </svg>
                <h3 style={styles.cardTitle}>{f.title}</h3>
                <p style={styles.cardDesc}>{f.desc}</p>
                <div style={styles.cardCta}>S'inscrire →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section id="podcast" style={styles.podcast}>
        <div style={styles.container}>
          <div className="animate-fade-in-up" style={styles.podcastBox}>
            <svg style={styles.podcastIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
            <div>
              <h2 style={styles.podcastTitle}>Podcast</h2>
              <p style={styles.podcastDesc}>
                On parle argent, mindset, business. Les vraies conversations que les entrepreneurs n'ont pas en public.
              </p>
              <a href="https://youtu.be/KoKkuErzN9c" style={styles.podcastLink}>
                Ecouter les episodes →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" style={styles.story}>
        <div style={styles.container}>
          <div style={styles.storyGrid}>
            <div className="animate-fade-in-up" style={styles.storyImage}>MY</div>
            <div className="animate-fade-in-up" style={{ ...styles.storyContent, animationDelay: "0.2s" }}>
              <h2 style={styles.storyTitle}>De 2 tshirts a 43 employes.</h2>
              <p style={styles.storyText}>
                J'ai commence avec 2 tshirts. Aujourd'hui, Caractere Store: 43 employes, centaines de marques lancees,
                480K entrepreneurs qui me suivent.
              </p>
              <p style={styles.storyText}>Chaque semaine je documente ce qui marche. Pas de BS. Juste du terrain.</p>
              <ul style={styles.storyList}>
                <li style={styles.storyItem}>Comment scaler sans lever de fonds</li>
                <li style={styles.storyItem}>Outils IA qui changent le game</li>
                <li style={styles.storyItem}>Erreurs que tu dois eviter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" style={styles.newsletter}>
        <div style={styles.container}>
          <h2 className="animate-fade-in-up" style={styles.newsTitle}>
            Chaque semaine.<br />Dans ta boite mail.
          </h2>
          <p className="animate-fade-in-up" style={{ ...styles.newsDesc, animationDelay: "0.1s" }}>
            1 strategie business, 1 outil IA, 1 lecon terrain. Gratuit, direct, sans spam.
          </p>

          {!success ? (
            <form
              onSubmit={handleSubscribe}
              className="animate-fade-in-up"
              style={{ ...styles.form, animationDelay: "0.2s" }}
            >
              <div style={styles.inputWrapper}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  style={styles.input}
                />
              </div>
              <button type="submit" disabled={loading} style={styles.submitBtn}>
                {loading ? "..." : "Je m'inscris"}
              </button>
            </form>
          ) : (
            <div className="animate-fade-in-up" style={styles.successBox}>
              <h3 style={styles.successTitle}>✓ Bienvenue!</h3>
              <p style={styles.successText}>Verifie ton email pour acceder au contenu exclusif.</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <p>© 2026 Moka Yakoubi — Build. Teach. Scale.</p>
          <div style={styles.socials}>
            <a href="https://instagram.com/mokayakoubi" style={styles.socialLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </a>
            <a href="https://youtube.com/@mokayakoubi" style={styles.socialLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const styles = {
  root: {
    width: "100%",
    background: "#0A0A0B",
    color: "#F5F3EE",
    fontFamily: "'Archivo', system-ui, sans-serif",
    lineHeight: "1.6",
    overflow: "hidden",
  } as React.CSSProperties,

  nav: {
    position: "fixed" as const,
    top: 0,
    width: "100%",
    zIndex: 50,
    background: "rgba(10, 10, 11, 0.85)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "1rem 1.25rem",
  } as React.CSSProperties,

  navContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,

  logo: {
    fontWeight: 900,
    fontSize: "1.125rem",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  links: {
    display: "flex",
    gap: "2rem",
    fontSize: "0.875rem",
    color: "rgba(255, 255, 255, 0.7)",
  } as React.CSSProperties,

  navLink: {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.3s",
    cursor: "pointer",
  } as React.CSSProperties,

  navBtn: {
    background: "#D4A853",
    color: "#0A0A0B",
    fontSize: "0.875rem",
    fontWeight: 700,
    padding: "0.625rem 1.25rem",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s",
  } as React.CSSProperties,

  hero: {
    position: "relative" as const,
    minHeight: "100vh",
    padding: "6rem 1.25rem 5rem",
    overflow: "hidden",
  } as React.CSSProperties,

  heroBg1: {
    position: "absolute" as const,
    top: 80,
    left: 40,
    width: 288,
    height: 288,
    background: "#D4A853",
    borderRadius: "50%",
    filter: "blur(96px)",
    opacity: 0.1,
    zIndex: 1,
  } as React.CSSProperties,

  heroBg2: {
    position: "absolute" as const,
    bottom: 128,
    right: 40,
    width: 384,
    height: 384,
    background: "#D4A853",
    borderRadius: "50%",
    filter: "blur(96px)",
    opacity: 0.1,
    zIndex: 1,
  } as React.CSSProperties,

  heroContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative" as const,
    zIndex: 10,
    textAlign: "center" as const,
  } as React.CSSProperties,

  tag: {
    color: "#D4A853",
    fontWeight: 600,
    letterSpacing: "0.15em",
    fontSize: "0.75rem",
    textTransform: "uppercase" as const,
    marginBottom: "2rem",
    display: "block",
  } as React.CSSProperties,

  h1: {
    fontSize: "3.5rem",
    lineHeight: 0.95,
    fontWeight: 900,
    letterSpacing: "-0.02em",
    marginBottom: "2rem",
  } as React.CSSProperties,

  gold: {
    background: "linear-gradient(135deg, #D4A853 0%, #E0B96A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  } as React.CSSProperties,

  subtitle: {
    fontSize: "1.125rem",
    color: "rgba(255, 255, 255, 0.6)",
    maxWidth: "42rem",
    margin: "0 auto 3rem",
    lineHeight: 1.6,
  } as React.CSSProperties,

  ctaGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    marginBottom: "4rem",
    maxWidth: "28rem",
    marginLeft: "auto",
    marginRight: "auto",
  } as React.CSSProperties,

  btnPrimary: {
    background: "#F5F3EE",
    color: "#0A0A0B",
    fontWeight: 700,
    padding: "1rem 2rem",
    borderRadius: "9999px",
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    cursor: "pointer",
  } as React.CSSProperties,

  btnSecondary: {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#F5F3EE",
    fontWeight: 700,
    padding: "1rem 2rem",
    borderRadius: "9999px",
    textDecoration: "none",
    transition: "all 0.3s",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    cursor: "pointer",
  } as React.CSSProperties,

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    maxWidth: "28rem",
    margin: "3rem auto 0",
    paddingTop: "3rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  } as React.CSSProperties,

  stat: {
    transition: "all 0.3s",
  } as React.CSSProperties,

  statNum: {
    fontSize: "1.875rem",
    fontWeight: 900,
    background: "linear-gradient(135deg, #D4A853 0%, #E0B96A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  } as React.CSSProperties,

  statLabel: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "0.875rem",
    marginTop: "0.5rem",
  } as React.CSSProperties,

  scrollIndicator: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
  } as React.CSSProperties,

  formations: {
    padding: "6rem 1.25rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  } as React.CSSProperties,

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  } as React.CSSProperties,

  h2: {
    fontSize: "3rem",
    fontWeight: 900,
    marginBottom: "1rem",
  } as React.CSSProperties,

  sectionDesc: {
    color: "rgba(255, 255, 255, 0.6)",
    marginBottom: "4rem",
    maxWidth: "32rem",
  } as React.CSSProperties,

  grid3: {
    display: "grid",
    gap: "1.5rem",
  } as React.CSSProperties,

  card: {
    background: "#141416",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "1.5rem",
    padding: "2rem",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column" as const,
    cursor: "pointer",
  } as React.CSSProperties,

  cardIcon: {
    color: "#D4A853",
    marginBottom: "1.5rem",
    width: 32,
    height: 32,
  } as React.CSSProperties,

  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: 900,
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  cardDesc: {
    color: "rgba(255, 255, 255, 0.55)",
    marginBottom: "2rem",
    flex: 1,
    lineHeight: 1.6,
  } as React.CSSProperties,

  cardCta: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: 700,
    color: "#D4A853",
  } as React.CSSProperties,

  podcast: {
    padding: "6rem 1.25rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  } as React.CSSProperties,

  podcastBox: {
    background: "#141416",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "1.5rem",
    padding: "2rem",
    display: "grid",
    gap: "3rem",
    alignItems: "center",
    transition: "all 0.3s",
    cursor: "pointer",
  } as React.CSSProperties,

  podcastIcon: {
    color: "#D4A853",
    width: 48,
    height: 48,
  } as React.CSSProperties,

  podcastTitle: {
    fontSize: "2.25rem",
    fontWeight: 900,
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  podcastDesc: {
    color: "rgba(255, 255, 255, 0.6)",
    lineHeight: 1.8,
    marginBottom: "2rem",
    fontSize: "1.125rem",
  } as React.CSSProperties,

  podcastLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: 700,
    color: "#D4A853",
    textDecoration: "none",
  } as React.CSSProperties,

  story: {
    padding: "6rem 1.25rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  } as React.CSSProperties,

  storyGrid: {
    display: "grid",
    gap: "3rem",
    alignItems: "center",
  } as React.CSSProperties,

  storyImage: {
    width: "100%",
    aspectRatio: "1",
    borderRadius: "1.5rem",
    background: "linear-gradient(135deg, #D4A853, #8a6a2f)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0A0A0B",
    fontSize: "3.5rem",
    fontWeight: 900,
    boxShadow: "0 0 30px rgba(212, 168, 83, 0.3)",
  } as React.CSSProperties,

  storyContent: {} as React.CSSProperties,

  storyTitle: {
    fontSize: "2.25rem",
    fontWeight: 900,
    marginBottom: "2rem",
    lineHeight: 1.2,
  } as React.CSSProperties,

  storyText: {
    color: "rgba(255, 255, 255, 0.6)",
    lineHeight: 1.8,
    marginBottom: "1.5rem",
    fontSize: "1.125rem",
  } as React.CSSProperties,

  storyList: {
    listStyle: "none",
    marginTop: "2rem",
    paddingTop: "1rem",
  } as React.CSSProperties,

  storyItem: {
    display: "flex",
    gap: "0.75rem",
    color: "rgba(255, 255, 255, 0.6)",
    marginBottom: "0.75rem",
    fontSize: "1rem",
    lineHeight: 1.6,
  } as React.CSSProperties,

  newsletter: {
    padding: "8rem 1.25rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center" as const,
  } as React.CSSProperties,

  newsTitle: {
    fontSize: "2.25rem",
    fontWeight: 900,
    lineHeight: 1.2,
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  newsDesc: {
    color: "rgba(255, 255, 255, 0.55)",
    fontSize: "1.125rem",
    marginBottom: "3rem",
  } as React.CSSProperties,

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
    maxWidth: "32rem",
    margin: "0 auto",
  } as React.CSSProperties,

  inputWrapper: {
    flex: 1,
    position: "relative" as const,
  } as React.CSSProperties,

  input: {
    width: "100%",
    background: "#F5F3EE",
    color: "#0A0A0B",
    border: "none",
    borderRadius: "9999px",
    padding: "1rem",
    paddingLeft: "2.5rem",
    fontFamily: "inherit",
    fontSize: "0.95rem",
    outline: "none",
  } as React.CSSProperties,

  submitBtn: {
    background: "#D4A853",
    color: "#0A0A0B",
    fontWeight: 700,
    padding: "1rem 2rem",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.95rem",
    transition: "all 0.3s",
  } as React.CSSProperties,

  successBox: {
    background: "#141416",
    border: "1px solid rgba(212, 168, 83, 0.3)",
    borderRadius: "1.5rem",
    padding: "3rem",
    textAlign: "center" as const,
  } as React.CSSProperties,

  successTitle: {
    fontSize: "1.5rem",
    fontWeight: 900,
    color: "#D4A853",
    marginBottom: "1rem",
  } as React.CSSProperties,

  successText: {
    color: "rgba(255, 255, 255, 0.6)",
    marginBottom: 0,
  } as React.CSSProperties,

  footer: {
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "3rem 1.25rem",
  } as React.CSSProperties,

  footerContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    textAlign: "center" as const,
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: "0.875rem",
  } as React.CSSProperties,

  socials: {
    display: "flex",
    gap: "1.25rem",
    justifyContent: "center",
    color: "rgba(255, 255, 255, 0.5)",
  } as React.CSSProperties,

  socialLink: {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.3s",
    display: "flex",
    cursor: "pointer",
  } as React.CSSProperties,
}
