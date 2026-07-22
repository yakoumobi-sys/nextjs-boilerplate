"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle, Mail } from "lucide-react"
import Link from "next/link"

export default function MarqueVetements() {
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/formations/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          email,
          formation: "Marque de vetements",
        }),
      })

      if (res.ok) {
        setSuccess(true)
        setNom("")
        setEmail("")
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
        <div className="max-w-6xl mx-auto px-5 py-4">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white">
            <ArrowLeft size={20} />
            Retour
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Lance ta marque de vetements
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Sans machines. Sans stock. Profit des le premier jour.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black mb-6">Ce que tu vas apprendre</h2>
              <ul className="space-y-4">
                {[
                  "Comment trouver ton niche",
                  "Design et production (DTF, Broderie)",
                  "Vendre sans stock (POD + B2B)",
                  "Premier client en 7 jours",
                  "Automatiser la production",
                  "Scaler a 10K+/mois",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="text-[#D4A853] shrink-0" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-[#141416] border border-white/10 rounded-2xl">
                <p className="text-white/60 mb-4">Cree par:</p>
                <p className="font-black text-lg">Moka Yakoubi</p>
                <p className="text-white/50">Fondateur Caractere Store</p>
                <p className="text-white/50">+480K abonnes</p>
              </div>
            </div>

            <div>
              {!success ? (
                <form onSubmit={handleSubmit} className="bg-[#141416] border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-black mb-6">S'inscrire maintenant</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Nom complet</label>
                      <input
                        type="text"
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Ton nom"
                        className="w-full bg-[#0A0A0B] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#D4A853]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ton@email.com"
                        className="w-full bg-[#0A0A0B] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#D4A853]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D4A853] text-black font-bold py-3 rounded-lg hover:bg-[#e0b96a] transition disabled:opacity-50"
                  >
                    {loading ? "Inscription en cours..." : "S'inscrire"}
                  </button>

                  <p className="text-white/40 text-xs mt-4 text-center">
                    Acces immediat. Pas de spam.
                  </p>
                </form>
              ) : (
                <div className="bg-[#141416] border border-[#D4A853]/30 rounded-3xl p-8 text-center">
                  <CheckCircle className="text-[#D4A853] mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-black mb-2">Bienvenue!</h3>
                  <p className="text-white/60 mb-6">
                    Verifie ton email pour acceder a la formation.
                  </p>
                  <Link href="/" className="text-[#D4A853] font-bold">
                    Retour a l'accueil
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
