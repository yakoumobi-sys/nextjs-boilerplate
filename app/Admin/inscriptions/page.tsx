export const dynamic = "force-dynamic"

"use client"


import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { Download, LogOut } from "lucide-react"

type Inscription = {
  id: number
  nom: string
  email: string
  formation: string
  created_at: string
}

export default function AdminInscriptions() {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  )

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - change this to your password
    if (password === "Moka2024") {
      setAuthenticated(true)
      fetchInscriptions()
    } else {
      alert("Mot de passe incorrect")
    }
  }

  const fetchInscriptions = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("formation_inscriptions")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching inscriptions:", error)
    } else {
      setInscriptions(data || [])
    }
    setLoading(false)
  }

  const downloadCSV = () => {
    const headers = ["Nom", "Email", "Formation", "Date"]
    const rows = inscriptions.map((i) => [
      i.nom,
      i.email,
      i.formation,
      new Date(i.created_at).toLocaleDateString("fr-FR"),
    ])

    const csv = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "inscriptions.csv"
    a.click()
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[#0A0A0B] text-[#F5F3EE] flex items-center justify-center px-5">
        <form onSubmit={handleLogin} className="bg-[#141416] border border-white/10 rounded-3xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-black mb-8">Admin Panel</h1>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0A0A0B] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#D4A853]"
              placeholder="••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4A853] text-black font-bold py-3 rounded-lg hover:bg-[#e0b96a] transition"
          >
            Connexion
          </button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-[#F5F3EE]">
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black">Inscriptions</h1>
          <button
            onClick={() => setAuthenticated(false)}
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <LogOut size={20} />
            Deconnexion
          </button>
        </div>
      </nav>

      <section className="pt-24 pb-12 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-black mb-2">Tous les inscrits</h2>
              <p className="text-white/60">Total: {inscriptions.length}</p>
            </div>
            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 bg-[#D4A853] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#e0b96a] transition"
            >
              <Download size={20} />
              Telecharger CSV
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-white/60">Chargement...</p>
            </div>
          ) : inscriptions.length === 0 ? (
            <div className="text-center py-12 bg-[#141416] border border-white/10 rounded-2xl">
              <p className="text-white/60">Aucune inscription pour l'instant</p>
            </div>
          ) : (
            <div className="overflow-x-auto bg-[#141416] border border-white/10 rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 font-bold">Nom</th>
                    <th className="text-left px-6 py-4 font-bold">Email</th>
                    <th className="text-left px-6 py-4 font-bold">Formation</th>
                    <th className="text-left px-6 py-4 font-bold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {inscriptions.map((inscription) => (
                    <tr key={inscription.id} className="border-b border-white/5 hover:bg-[#0A0A0B] transition">
                      <td className="px-6 py-4">{inscription.nom}</td>
                      <td className="px-6 py-4 text-white/70">{inscription.email}</td>
                      <td className="px-6 py-4">
                        <span className="bg-[#D4A853]/20 text-[#D4A853] px-3 py-1 rounded-full text-sm font-bold">
                          {inscription.formation}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/60">
                        {new Date(inscription.created_at).toLocaleDateString("fr-FR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
