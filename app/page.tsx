'use client'

import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Mic, GraduationCap, Gift, Instagram, Youtube, Mail } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/emails/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSuccess(true)
        setEmail('')
        setTimeout(() => setSuccess(false), 4000)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-[#F5F3EE]">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <a href="#" className="font-black tracking-tight text-lg">MOKA YAKOUBI</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#formations" className="hover:text-white transition">Formations</a>
            <a href="#podcast" className="hover:text-white transition">Podcast</a>
            <a href="#gratuit" className="hover:text-white transition">Contenu gratuit</a>
          </div>
          <a href="#newsletter" className="bg-[#D4A853] text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#e0b96a] transition">
            Rejoindre
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-24 px-5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4A853] font-semibold tracking-[0.25em] text-xs mb-6 uppercase">
            Entrepreneur · Créateur · Formateur IA
          </p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8">
            Je bâtis des marques.
            <br />
            <span className="text-white/40">Je partage ce qui marche.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Fondateur de Caractère Store. +480K abonnés. J'aide les entrepreneurs
            francophones à lancer leur marque et scaler avec l'IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#formations" className="group bg-[#F5F3EE] text-black font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white transition">
              Découvrir les formations
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#gratuit" className="border border-white/20 font-bold px-8 py-4 rounded-full flex items-center justify-center hover:border-white/60 transition">
              Contenu gratuit
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl md:text-4xl font-black">480K+</p>
              <p className="text-white/50 text-sm mt-1">Communauté</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">4,6M</p>
              <p className="text-white/50 text-sm mt-1">Vues / 30 jours</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">2</p>
              <p className="text-white/50 text-sm mt-1">Entreprises</p>
            </div>
          </div>

          <p className="mt-14 text-2xl text-white/25 font-light" dir="rtl">الوقت يداهمنا</p>
        </div>
      </section>

      {/* 3 PILIERS */}
      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">

          {/* FORMATIONS */}
          <a id="formations" href="https://caracterestore.com" className="group bg-[#141416] border border-white/10 rounded-3xl p-8 hover:border-[#D4A853]/60 transition flex flex-col">
            <GraduationCap className="text-[#D4A853] mb-6" size={32} />
            <h3 className="text-2xl font-black mb-3">Formations</h3>
            <p className="text-white/55 leading-relaxed mb-8 flex-1">
              Lance ta marque en 30 jours. Stratégie, production, vente — la méthode complète que j'applique chez Caractère.
            </p>
            <span className="flex items-center gap-2 font-bold text-[#D4A853]">
              Voir les programmes <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          {/* PODCAST */}
          <a id="podcast" href="https://www.youtube.com/@mokayakoubi" className="group bg-[#141416] border border-white/10 rounded-3xl p-8 hover:border-[#D4A853]/60 transition flex flex-col">
            <Mic className="text-[#D4A853] mb-6" size={32} />
            <h3 className="text-2xl font-black mb-3">Podcast</h3>
            <p className="text-white/55 leading-relaxed mb-8 flex-1">
              Conversations sans filtre sur l'entrepreneuriat, le mindset et le business en Algérie et dans le monde francophone.
            </p>
            <span className="flex items-center gap-2 font-bold text-[#D4A853]">
              Écouter les épisodes <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          {/* GRATUIT */}
          <a id="gratuit" href="https://instagram.com/mokayakoubi" className="group bg-[#141416] border border-white/10 rounded-3xl p-8 hover:border-[#D4A853]/60 transition flex flex-col">
            <Gift className="text-[#D4A853] mb-6" size={32} />
            <h3 className="text-2xl font-black mb-3">Contenu gratuit</h3>
            <p className="text-white/55 leading-relaxed mb-8 flex-1">
              Chaque semaine : stratégies concrètes, outils IA et coulisses de mes business. Zéro blabla, que de l'actionnable.
            </p>
            <span className="flex items-center gap-2 font-bold text-[#D4A853]">
              Accéder gratuitement <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto bg-[#141416] border border-white/10 rounded-3xl p-8 md:p-14 md:flex gap-12 items-center">
          <div className="w-28 h-28 md:w-40 md:h-40 shrink-0 rounded-full bg-gradient-to-br from-[#D4A853] to-[#8a6a2f] flex items-center justify-center text-black text-4xl md:text-5xl font-black mb-8 md:mb-0">
            MY
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-5">De l'atelier au million.</h2>
            <p className="text-white/60 leading-relaxed text-lg max-w-2xl">
              Parti d'un atelier de personnalisation textile en Algérie, j'ai construit
              Caractère Store — 20 employés, des centaines de marques lancées — et une
              communauté de +480K entrepreneurs. Aujourd'hui je documente tout :
              les wins, les erreurs, et les systèmes qui font la différence.
            </p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="px-5 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-5">Chaque semaine.<br />Dans ta boîte mail.</h2>
          <p className="text-white/55 text-lg mb-10">
            1 stratégie business, 1 outil IA, 1 leçon terrain. Gratuit, direct, sans spam.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                className="w-full bg-[#F5F3EE] text-black rounded-full pl-11 pr-4 py-4 outline-none focus:ring-2 focus:ring-[#D4A853]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#D4A853] text-black font-bold px-8 py-4 rounded-full hover:bg-[#e0b96a] transition disabled:opacity-50"
            >
              {loading ? '...' : "Je m'inscris"}
            </button>
          </form>
          {success && <p className="text-[#D4A853] mt-4 font-semibold">✓ Bienvenue dans la famille !</p>}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">© 2026 Moka Yakoubi — Create. Standout. Scale.</p>
          <div className="flex gap-5 text-white/50">
            <a href="https://instagram.com/mokayakoubi" className="hover:text-[#D4A853] transition"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@mokayakoubi" className="hover:text-[#D4A853] transition"><Youtube size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}
