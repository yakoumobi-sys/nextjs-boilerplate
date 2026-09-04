"use client"

import { useState, useRef, useEffect } from "react"

export default function CaractereLanding() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/emails/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company }),
      })
      if (res.ok) {
        setSuccess(true)
        setEmail("")
        setName("")
        setCompany("")
        setTimeout(() => setSuccess(false), 5000)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const testimonials = [
    {
      quote: "En 3 mois, tous nos employés avaient des uniformes personnalisés. Le résultat professionnel dépasse nos attentes.",
      author: "Sophie Dupont",
      role: "Directrice RH",
      company: "Tech Solutions Paris",
    },
    {
      quote: "Le service client a résolu tous nos questions. La simulation gratuite nous a permis de voir exactement ce que nous aurions.",
      author: "Marc Leblanc",
      role: "Fondateur",
      company: "Design Studio Lyon",
    },
    {
      quote: "Garantie, simulation, prix transparent. C'est exactement ce que cherchaient nos collaborateurs.",
      author: "Amélie Rousseau",
      role: "Responsable Communication",
      company: "Cabinet Conseil Marseille",
    },
  ]

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Raleway:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body, html {
          background: #ffffff;
          color: #1a1a1a;
        }

        @media (prefers-color-scheme: dark) {
          body, html {
            background: #1a1a1a;
            color: #f8f6f3;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        input, textarea {
          font-family: 'Raleway', system-ui, sans-serif;
        }
      `}</style>

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>CARACTÈRE</div>
          <button
            onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            style={styles.navCta}
          >
            Demander une simulation
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div className="animate-fade-in-up" style={styles.heroText}>
            <span style={styles.eyebrow}>Uniformes Professionnels Personnalisés</span>
            <h1 style={styles.h1}>
              Donnez une identité à votre équipe
            </h1>
            <p style={styles.heroDesc}>
              Uniformes sur mesure, simulation gratuite, garantie complète.
              <br />
              <strong>Zéro engagement. Juste du professionnalisme.</strong>
            </p>

            <div style={styles.ctaGroup}>
              <button
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                style={styles.btnPrimary}
              >
                Simulation gratuite →
              </button>
              <a href="#how-it-works" style={styles.btnSecondary}>
                Comment ça marche
              </a>
            </div>

            <div style={styles.trustBadges}>
              <div style={styles.badge}>✓ Garantie 100%</div>
              <div style={styles.badge}>✓ Simulation avant achat</div>
              <div style={styles.badge}>✓ Support réactif</div>
            </div>
          </div>

          <div className="animate-slide-in-right" style={styles.heroImage}>
            <div style={styles.colorGrid}>
              <div style={{ ...styles.colorSwash, background: "#C85A3A" }}></div>
              <div style={{ ...styles.colorSwash, background: "#1a1a1a" }}></div>
              <div style={{ ...styles.colorSwash, background: "#4A90E2" }}></div>
              <div style={{ ...styles.colorSwash, background: "#F5F3F0" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section style={styles.benefits}>
        <div style={styles.container}>
          <h2 className="animate-fade-in-up" style={styles.h2}>Pourquoi Caractère ?</h2>

          <div style={styles.benefitsGrid}>
            <div className="animate-fade-in-up" style={{ ...styles.benefit, animationDelay: "0.1s" }}>
              <div style={styles.benefitIcon}>🎯</div>
              <h3 style={styles.benefitTitle}>Simulation Gratuite</h3>
              <p style={styles.benefitText}>
                Voyez exactement le résultat avant d'acheter. Aucune surprise, aucun engagement.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ ...styles.benefit, animationDelay: "0.2s" }}>
              <div style={styles.benefitIcon}>✓</div>
              <h3 style={styles.benefitTitle}>Garantie Complète</h3>
              <p style={styles.benefitText}>
                Pas satisfait ? Nous remboursons sans questions. Votre confiance est notre priorité.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ ...styles.benefit, animationDelay: "0.3s" }}>
              <div style={styles.benefitIcon}>💬</div>
              <h3 style={styles.benefitTitle}>Support Dédié</h3>
              <p style={styles.benefitText}>
                Une équipe à l'écoute pour chaque question. Réponses rapides, solutions efficaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={styles.howItWorks}>
        <div style={styles.container}>
          <h2 className="animate-fade-in-up" style={styles.h2}>3 Étapes, Zéro Stress</h2>

          <div style={styles.stepsGrid}>
            <div className="animate-fade-in-up" style={{ ...styles.step, animationDelay: "0.1s" }}>
              <div style={styles.stepNumber}>1</div>
              <h3 style={styles.stepTitle}>Décrivez votre projet</h3>
              <p style={styles.stepDesc}>
                Nombre d'uniformes, couleurs, logo, personnalisations. On note chaque détail.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ ...styles.step, animationDelay: "0.2s" }}>
              <div style={styles.stepNumber}>2</div>
              <h3 style={styles.stepTitle}>Simulation gratuite</h3>
              <p style={styles.stepDesc}>
                Recevez en 48h votre simulation visuelle et un devis personnalisé sans frais.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ ...styles.step, animationDelay: "0.3s" }}>
              <div style={styles.stepNumber}>3</div>
              <h3 style={styles.stepTitle}>Production et livraison</h3>
              <p style={styles.stepDesc}>
                Si vous êtes satisfait, nous lançons la production. Livraison rapide garantie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.testimonials}>
        <div style={styles.container}>
          <h2 className="animate-fade-in-up" style={styles.h2}>Ils nous font confiance</h2>

          <div style={styles.testimonialBox}>
            <div style={styles.testimonialContent}>
              <p style={styles.testimonialQuote}>"{testimonials[activeTestimonial].quote}"</p>
              <div style={styles.testimonialAuthor}>
                <strong>{testimonials[activeTestimonial].author}</strong>
                <span style={styles.testimonialRole}>
                  {testimonials[activeTestimonial].role} · {testimonials[activeTestimonial].company}
                </span>
              </div>
            </div>
          </div>

          <div style={styles.dotsContainer}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                style={{
                  ...styles.dot,
                  background: activeTestimonial === idx ? "#C85A3A" : "#E8E8E8",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="demo" style={styles.demoSection}>
        <div style={styles.container}>
          <div style={styles.demoBox}>
            <div className="animate-fade-in-up" style={styles.demoContent}>
              <h2 style={styles.demoTitle}>Simulation Gratuite</h2>
              <p style={styles.demoDesc}>
                En 2 minutes, décrivez votre projet. Nous vous enverrons une simulation visuelle et un devis détaillé.
              </p>

              {!success ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <input
                      type="email"
                      placeholder="Email professionnel"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Nom de votre entreprise"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      style={styles.input}
                    />
                  </div>

                  <button type="submit" disabled={loading} style={styles.submitBtn}>
                    {loading ? "Envoi..." : "Recevoir ma simulation →"}
                  </button>
                </form>
              ) : (
                <div style={styles.successMessage}>
                  <div style={styles.checkmark}>✓</div>
                  <h3 style={styles.successTitle}>Simulation en route !</h3>
                  <p style={styles.successText}>
                    Nous avons reçu votre demande. Attendez-vous à recevoir votre simulation d'ici 48h.
                  </p>
                </div>
              )}
            </div>

            <div className="animate-slide-in-right" style={styles.demoHighlight}>
              <div style={styles.highlightBox}>
                <div style={styles.highlightStat}>
                  <div style={styles.highlightNumber}>100%</div>
                  <div style={styles.highlightLabel}>Gratuit, sans engagement</div>
                </div>

                <div style={styles.divider}></div>

                <ul style={styles.highlightList}>
                  <li>✓ Simulation visuelle détaillée</li>
                  <li>✓ Devis personnalisé</li>
                  <li>✓ Conseils de notre équipe</li>
                  <li>✓ Zéro obligation d'acheter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div>
            <h3 style={styles.footerBrand}>CARACTÈRE</h3>
            <p style={styles.footerDesc}>Uniformes professionnels. Personnalisés. Garantis.</p>
          </div>
          <div style={styles.footerLinks}>
            <a href="https://instagram.com/mokayakoubi" style={styles.footerLink}>Instagram</a>
            <a href="mailto:contact@caractere.fr" style={styles.footerLink}>Email</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2026 Caractère — Tous droits réservés</p>
        </div>
      </footer>
    </div>
  )
}

const styles = {
  root: {
    width: "100%",
    background: "#ffffff",
    color: "#1a1a1a",
    fontFamily: "'Raleway', system-ui, sans-serif",
    lineHeight: "1.6",
  } as React.CSSProperties,

  nav: {
    position: "fixed" as const,
    top: 0,
    width: "100%",
    zIndex: 50,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #E8E8E8",
    padding: "1rem 1.25rem",
  } as React.CSSProperties,

  navContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,

  logo: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  navCta: {
    background: "#C85A3A",
    color: "#ffffff",
    fontSize: "0.875rem",
    fontWeight: 700,
    padding: "0.625rem 1.25rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s",
  } as React.CSSProperties,

  hero: {
    paddingTop: "7rem",
    paddingBottom: "4rem",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    borderBottom: "1px solid #E8E8E8",
  } as React.CSSProperties,

  heroContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  } as React.CSSProperties,

  heroText: {} as React.CSSProperties,

  eyebrow: {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#C85A3A",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    display: "block",
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  h1: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "3.5rem",
    lineHeight: 1.1,
    fontWeight: 700,
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  heroDesc: {
    fontSize: "1.125rem",
    color: "#6b6b6b",
    marginBottom: "2.5rem",
    lineHeight: 1.8,
  } as React.CSSProperties,

  ctaGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    marginBottom: "3rem",
  } as React.CSSProperties,

  btnPrimary: {
    background: "#C85A3A",
    color: "#ffffff",
    fontWeight: 700,
    padding: "1rem 2rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s",
    display: "inline-block",
    width: "fit-content",
  } as React.CSSProperties,

  btnSecondary: {
    border: "2px solid #1a1a1a",
    color: "#1a1a1a",
    fontWeight: 700,
    padding: "0.875rem 2rem",
    borderRadius: "0.375rem",
    display: "inline-block",
    width: "fit-content",
    transition: "all 0.3s",
  } as React.CSSProperties,

  trustBadges: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  } as React.CSSProperties,

  badge: {
    fontSize: "0.95rem",
    color: "#4A4A4A",
    fontWeight: 500,
  } as React.CSSProperties,

  heroImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  colorGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
    width: "100%",
  } as React.CSSProperties,

  colorSwash: {
    width: "100%",
    aspectRatio: "1",
    borderRadius: "0.75rem",
  } as React.CSSProperties,

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
  } as React.CSSProperties,

  benefits: {
    padding: "6rem 1.25rem",
    borderBottom: "1px solid #E8E8E8",
  } as React.CSSProperties,

  h2: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "2.75rem",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "3.5rem",
    textAlign: "center" as const,
  } as React.CSSProperties,

  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
  } as React.CSSProperties,

  benefit: {
    textAlign: "center" as const,
  } as React.CSSProperties,

  benefitIcon: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  benefitTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  benefitText: {
    color: "#6b6b6b",
    lineHeight: 1.7,
  } as React.CSSProperties,

  howItWorks: {
    padding: "6rem 1.25rem",
    borderBottom: "1px solid #E8E8E8",
  } as React.CSSProperties,

  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
  } as React.CSSProperties,

  step: {
    padding: "2.5rem",
    background: "#F8F6F3",
    borderRadius: "0.75rem",
  } as React.CSSProperties,

  stepNumber: {
    fontSize: "3rem",
    fontWeight: 800,
    color: "#C85A3A",
    lineHeight: 1,
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  stepTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  stepDesc: {
    color: "#6b6b6b",
    lineHeight: 1.7,
  } as React.CSSProperties,

  testimonials: {
    padding: "6rem 1.25rem",
    background: "#F8F6F3",
    borderBottom: "1px solid #E8E8E8",
  } as React.CSSProperties,

  testimonialBox: {
    maxWidth: "900px",
    margin: "3.5rem auto",
    padding: "3rem",
    background: "#ffffff",
    borderRadius: "0.75rem",
    border: "1px solid #E8E8E8",
  } as React.CSSProperties,

  testimonialContent: {} as React.CSSProperties,

  testimonialQuote: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "1.5rem",
    fontWeight: 400,
    lineHeight: 1.8,
    marginBottom: "2rem",
  } as React.CSSProperties,

  testimonialAuthor: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.25rem",
  } as React.CSSProperties,

  testimonialRole: {
    fontSize: "0.875rem",
    color: "#6b6b6b",
  } as React.CSSProperties,

  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "0.75rem",
    marginTop: "2rem",
  } as React.CSSProperties,

  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s",
  } as React.CSSProperties,

  demoSection: {
    padding: "6rem 1.25rem",
    borderBottom: "1px solid #E8E8E8",
  } as React.CSSProperties,

  demoBox: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  } as React.CSSProperties,

  demoContent: {} as React.CSSProperties,

  demoTitle: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
  } as React.CSSProperties,

  demoDesc: {
    color: "#6b6b6b",
    fontSize: "1.125rem",
    marginBottom: "2rem",
    lineHeight: 1.8,
  } as React.CSSProperties,

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.25rem",
  } as React.CSSProperties,

  formGroup: {
    display: "flex",
    flexDirection: "column" as const,
  } as React.CSSProperties,

  input: {
    padding: "0.875rem 1rem",
    border: "1px solid #E8E8E8",
    borderRadius: "0.375rem",
    fontSize: "0.95rem",
    fontFamily: "'Raleway', system-ui, sans-serif",
    transition: "all 0.3s",
  } as React.CSSProperties,

  submitBtn: {
    background: "#C85A3A",
    color: "#ffffff",
    fontWeight: 700,
    padding: "1rem 1.5rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.95rem",
    transition: "all 0.3s",
    marginTop: "0.5rem",
  } as React.CSSProperties,

  successMessage: {
    textAlign: "center" as const,
    padding: "2rem",
  } as React.CSSProperties,

  checkmark: {
    fontSize: "3.5rem",
    color: "#C85A3A",
    marginBottom: "1rem",
  } as React.CSSProperties,

  successTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  successText: {
    color: "#6b6b6b",
  } as React.CSSProperties,

  demoHighlight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  highlightBox: {
    background: "#F8F6F3",
    padding: "2.5rem",
    borderRadius: "0.75rem",
    textAlign: "center" as const,
  } as React.CSSProperties,

  highlightStat: {
    marginBottom: "2rem",
  } as React.CSSProperties,

  highlightNumber: {
    fontSize: "2.5rem",
    fontWeight: 800,
    color: "#C85A3A",
  } as React.CSSProperties,

  highlightLabel: {
    fontSize: "0.95rem",
    color: "#6b6b6b",
    marginTop: "0.5rem",
  } as React.CSSProperties,

  divider: {
    height: "1px",
    background: "#E8E8E8",
    margin: "1.5rem 0",
  } as React.CSSProperties,

  highlightList: {
    listStyle: "none",
    textAlign: "left" as const,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
    fontSize: "0.95rem",
  } as React.CSSProperties,

  footer: {
    background: "#F8F6F3",
    padding: "4rem 1.25rem 2rem",
    borderTop: "1px solid #E8E8E8",
  } as React.CSSProperties,

  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto 2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    alignItems: "start",
  } as React.CSSProperties,

  footerBrand: {
    fontFamily: "'Crimson Text', serif",
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  footerDesc: {
    color: "#6b6b6b",
    fontSize: "0.95rem",
  } as React.CSSProperties,

  footerLinks: {
    display: "flex",
    gap: "2rem",
    justifyContent: "flex-end",
  } as React.CSSProperties,

  footerLink: {
    color: "#1a1a1a",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s",
  } as React.CSSProperties,

  footerBottom: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "2rem",
    borderTop: "1px solid #E8E8E8",
    textAlign: "center" as const,
    fontSize: "0.875rem",
    color: "#6b6b6b",
  } as React.CSSProperties,
}
