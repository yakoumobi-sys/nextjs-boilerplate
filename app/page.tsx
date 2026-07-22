"use client"

import { useState } from "react"
import { ArrowRight, ArrowUpRight, Mic, GraduationCap, Gift, Instagram, Youtube, Mail } from "lucide-react"

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
    <main className="min-h-screen bg-[#0A0A0B] text-[#F5F3EE]">
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

      <section className="pt-36 pb-24 px-5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4A853] font-semibold tracking-[0.25em] text-xs mb-6 uppercase">
            Entrepreneur · Fondateur · Formateur
          </p>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8">
            Build.<br />
            Teach.<br />
            <span className="text-white/40">Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Ce qui fonctionne pour moi, fonctionne pour toi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#formations" className="group bg-[#F5F3EE] text-black font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white transition">
              Decouvrir les formations
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://youtu.be/KoKkuErzN9c" className="border border-white/20 font-bold px-8 py-4 rounded-full flex items-center justify-center hover:border-white/60 transition">
              Ecouter le podcast
            </a>
            <a href="#gratuit" className="border border-white/20 font-bold px-8 py-4 rounded-full flex items-center justify-center hover:border-white/60 transition">
              Contenu gratuit
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl md:text-4xl font-black">43</p>
              <p className="text-white/50 text-sm mt-1">Employes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">480K+</p>
              <p className="text-white/50 text-sm mt-1">Communaute</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">2</p>
              <p className="text-white/50 text-sm mt-1">Entreprises</p>
            </div>
          </div>

          <p className="mt-14 text-2xl text-white/25 font-light" dir="rtl">الوقت يداهمنا</p>
        </div>
      </section>

      <section id="formations" className="px-5 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-12">Formations</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <a href="https://caracterestore.com/formations" className="group bg-[#141416] border border-white/10 rounded-3xl p-8 hover:border-[#D4A853]/60 transition flex flex-col">
              <GraduationCap className="text-[#D4A853] mb-6" size={32} />
              <h3 className="text-2xl font-black mb-3">Marque de vetements</h3>
              <p className="text-white/55 leading-relaxed mb-8 flex-1">
                Lance ta marque de vetements sans machines et sans stock.
              </p>
              <span className="flex items-center gap-2 font-bold text-[#D4A853]">
                S'inscrire <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            <a href="https://caracterestore.com/formations" className="group bg-[#141416] border border-white/10 rounded-3xl p-8 hover:border-[#D4A853]/60 transition flex flex-col">
              <GraduationCap className="text-[#D4A853] mb-6" size={32} />
              <h3 className="text-2xl font-black mb-3">Tshirt Printing</h3>
              <p className="text-white/55 leading-relaxed mb-8 flex-1">
                Lance ton tshirt printing business.
              </p>
              <span className="flex items-center gap-2 font-bold text-[#D4A853]">
                S'inscrire <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            <a href="https://caracterestore.com/formations" className="group bg-[#141416] border border-white/10 rounded-3xl p-8 hover:border-[#D4A853]/60 transition flex flex-col">
              <GraduationCap className="text-[#D4A853] mb-6" size={32} />
              <h3 className="text-2xl font-black mb-3">App/SaaS avec IA</h3>
              <p className="text-white/55 leading-relaxed mb-8 flex-1">
                Cree ton application ou SaaS avec l'IA.
              </p>
              <span className="flex items-center gap-2 font-bold text-[#D4A853]">
                S'inscrire <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="podcast" className="px-5 pb-24">
        <div className="max-w-6xl mx-auto bg-[#141416] border border-white/10 rounded-3xl p-8 md:p-14">
          <div className="flex items-start gap-8 md:gap-12">
            <Mic className="text-[#D4A853] shrink-0" size={48} />
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Podcast</h2>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
                On parle argent, mindset, business. Les vraies conversations que les entrepreneurs n'ont pas en public.
              </p>
              <a href="https://youtu.be/KoKkuErzN9c" className="inline-flex items-center gap-2 font-bold text-[#D4A853] hover:text-[#e0b96a] transition">
                Ecouter les episodes <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="gratuit" className="px-5 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Contenu gratuit</h2>
          <a href="https://instagram.com/mokayakoubi" className="group bg-[#141416] border border-white/10 rounded-3xl p-8 hover:border-[#D4A853]/60 transition flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Gift className="text-[#D4A853]" size={40} />
              <div>
                <h3 className="text-2xl font-black mb-2">Chaque semaine</h3>
                <p className="text-white/55">Strategies concretes, outils IA et coulisses de mes business.</p>
              </div>
            </div>
            <ArrowUpRight size={24} className="text-[#D4A853] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto bg-[#141416] border border-white/10 rounded-3xl p-8 md:p-14">
          <h2 className="text-3xl md:text-5xl font-black mb-8">De 2 tshirts a 43 employes.</h2>
          <div className="space-y-6 text-white/60 leading-relaxed text-lg">
            <p>
              J'ai commence avec 2 tshirts. Maintenant on a 43 employes.
            </p>
            <p>
              J'ai lance Caractere dans ma chambre. Aujourd'hui:
              43 employes. Centaines de marques lancees. 480K entrepreneurs qui me suivent.
            </p>
            <p>
              Chaque semaine je documente ce qui marche:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                <span>Comment scaler sans lever de fonds</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                <span>Outils IA qui changent le game</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4A853] shrink-0">—</span>
                <span>Erreurs que tu dois eviter</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="newsletter" className="px-5 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-5">Chaque semaine.<br />Dans ta boite mail.</h2>
          <p className="text-white/55 text-lg mb-10">
            1 strategie business, 1 outil IA, 1 lecon terrain. Gratuit, direct, sans spam.
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
              {loading ? "..." : "Je m'inscris"}
            </button>
          </form>
          {success && <p className="text-[#D4A853] mt-4 font-semibold">Bienvenue dans la famille !</p>}
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">© 2026 Moka Yakoubi — Build. Teach. Scale.</p>
          <div className="flex gap-5 text-white/50">
            <a href="https://instagram.com/mokayakoubi" className="hover:text-[#D4A853] transition"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@mokayakoubi" className="hover:text-[#D4A853] transition"><Youtube size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}
