"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ArrowUpRight, Mic, GraduationCap, Gift, Instagram, Youtube, Mail, ChevronDown } from "lucide-react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [scrollPos, setScrollPos] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <main className="w-full bg-[#0A0A0B] text-[#F5F3EE] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;900&family=Space+Mono:wght@400;700&display=swap');

        * {
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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212, 168, 83, 0);
          }
          50% {
            box-shadow: 0 0 30px rgba(212, 168, 83, 0.3);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.05);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .transition-all {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(212, 168, 83, 0.2);
        }

        .text-gradient {
          background: linear-gradient(135deg, #D4A853 0%, #E0B96A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .border-gradient {
          position: relative;
          background: #141416;
          border: 1px solid transparent;
          background-clip: padding-box;
        }

        .border-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #D4A853, #8a6a2f);
          border-radius: inherit;
          z-index: -1;
          padding: 1px;
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <div className="font-black tracking-tight text-lg animate-fade-in-down">MOKA YAKOUBI</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#formations" className="hover:text-[#D4A853] transition-colors">Formations</a>
            <a href="#podcast" className="hover:text-[#D4A853] transition-colors">Podcast</a>
            <a href="#story" className="hover:text-[#D4A853] transition-colors">Story</a>
          </div>
          <a href="#newsletter" className="bg-[#D4A853] text-black text-sm font-bold px-5 py-2.5 rounded-full hover-lift">
            Rejoindre
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen pt-24 px-5 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A853] rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-[#D4A853] rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="animate-fade-in-down mb-8">
              <p className="text-[#D4A853] font-semibold tracking-[0.25em] text-xs uppercase mb-6">
                Entrepreneur · Fondateur · Visionnaire
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight mb-8 animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              Build<br />
              Teach<br />
              <span className="text-gradient">Scale</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 animate-fade-in-up leading-relaxed" style={{animationDelay: "0.2s"}}>
              Ce qui fonctionne pour moi,<br/>fonctionne pour toi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              <a href="#formations" className="group bg-[#F5F3EE] text-black font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover-lift">
                Formations Premium
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://youtu.be/KoKkuErzN9c" className="border border-white/20 font-bold px-8 py-4 rounded-full flex items-center justify-center hover:border-[#D4A853] transition-colors hover-lift">
                Podcast: Conversations Sans Filtre
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-white/10 pt-12 animate-fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="group hover-lift">
                <p className="text-3xl md:text-4xl font-black text-gradient">43</p>
                <p className="text-white/50 text-sm mt-2">Employes</p>
              </div>
              <div className="group hover-lift">
                <p className="text-3xl md:text-4xl font-black text-gradient">480K+</p>
                <p className="text-white/50 text-sm mt-2">Communaute</p>
              </div>
              <div className="group hover-lift">
                <p className="text-3xl md:text-4xl font-black text-gradient">2x</p>
                <p className="text-white/50 text-sm mt-2">Entreprises</p>
              </div>
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="flex justify-center mt-20 animate-float">
            <div className="border border-white/20 rounded-full p-3 hover:border-[#D4A853] transition-colors cursor-pointer">
              <ChevronDown size={24} className="text-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section id="formations" className="px-5 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-up">Formations</h2>
          <p className="text-white/60 mb-16 max-w-2xl animate-fade-in-up" style={{animationDelay: "0.1s"}}>
            Lance ta marque. Builds ta SaaS. Domine ton industrie.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Marque de Vetements",
                desc: "Lance ta marque sans machines, sans stock. Profit des le premier jour.",
                icon: GraduationCap,
                url: "/formations/marque-vetements",
                delay: "0s"
              },
              {
                title: "Tshirt Printing",
                desc: "Du DTF a la broderie. Clients illimites. Profits garantis.",
                icon: GraduationCap,
                url: "/formations/tshirt-printing",
                delay: "0.1s"
              },
              {
                title: "App/SaaS avec IA",
                desc: "De l'idee au lancement. Pas besoin de savoir coder.",
                icon: GraduationCap,
                url: "/formations/app-saas",
                delay: "0.2s"
              }
            ].map((formation, i) => (
              <a key={i} href={formation.url} className="group hover-lift border-gradient rounded-3xl p-8 hover:border-[#D4A853]/60 transition-all duration-300 flex flex-col animate-fade-in-up" style={{animationDelay: formation.delay}}>
                <formation.icon className="text-[#D4A853] mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-2xl font-black mb-3">{formation.title}</h3>
                <p className="text-white/55 leading-relaxed mb-8 flex-1">{formation.desc}</p>
                <span className="flex items-center gap-2 font-bold text-[#D4A853]">
                  S'inscrire <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section id="podcast" className="px-5 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#141416] border border-white/10 rounded-3xl p-8 md:p-16 md:flex gap-12 items-center hover-lift animate-fade-in-up">
            <Mic className="text-[#D4A853] shrink-0 mb-8 md:mb-0 animate-float" size={48} />
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-black mb-6">Podcast</h2>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
                On parle argent, mindset, business. Les vraies conversations que les entrepreneurs n'ont pas en public.
              </p>
              <a href="https://youtu.be/KoKkuErzN9c" className="inline-flex items-center gap-2 font-bold text-[#D4A853] hover:text-[#E0B96A] transition-colors">
                Ecouter les episodes <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="px-5 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 animate-fade-in-up">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-[#D4A853] to-[#8a6a2f] flex items-center justify-center text-black text-6xl font-black animate-pulse-glow">
                MY
              </div>
            </div>

            <div className="md:col-span-3 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <h2 className="text-5xl md:text-6xl font-black mb-8">De 2 tshirts a 43 employes.</h2>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  J'ai commence avec 2 tshirts. Aujourd'hui, Caractere Store: 43 employes, centaines de marques lancees, 480K entrepreneurs qui me suivent.
                </p>
                <p>
                  Chaque semaine je documente ce qui marche. Pas de BS. Juste du terrain.
                </p>
                <ul className="space-y-3 ml-4 pt-4">
                  <li className="flex gap-3">
                    <span className="text-[#D4A853] shrink-0">→</span>
                    <span>Comment scaler sans lever de fonds</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4A853] shrink-0">→</span>
                    <span>Outils IA qui changent le game</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4A853] shrink-0">→</span>
                    <span>Erreurs que tu dois eviter</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="px-5 py-32 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-black mb-6">Chaque semaine.<br/>Dans ta boite mail.</h2>
          <p className="text-white/55 text-lg mb-12">
            1 strategie business, 1 outil IA, 1 lecon terrain. Gratuit, direct, sans spam.
          </p>

          {!success ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  className="w-full bg-[#F5F3EE] text-black rounded-full pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-[#D4A853] transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#D4A853] text-black font-bold px-8 py-4 rounded-full hover:bg-[#E0B96A] transition-all disabled:opacity-50 hover-lift"
              >
                {loading ? "..." : "Je m'inscris"}
              </button>
            </form>
          ) : (
            <div className="bg-[#141416] border border-[#D4A853]/30 rounded-3xl p-12 text-center animate-fade-in-up">
              <p className="text-2xl font-black text-[#D4A853]">✓ Bienvenue!</p>
              <p className="text-white/60 mt-4">Verifie ton email pour acceder au contenu exclusif.</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 Moka Yakoubi — Build. Teach. Scale.</p>
          <div className="flex gap-5 text-white/50">
            <a href="https://instagram.com/mokayakoubi" className="hover:text-[#D4A853] transition-colors"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@mokayakoubi" className="hover:text-[#D4A853] transition-colors"><Youtube size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}
