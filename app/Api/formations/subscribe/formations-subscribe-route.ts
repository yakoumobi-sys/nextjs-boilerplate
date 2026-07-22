import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { nom, email, formation } = await req.json()

  if (!nom || !email || !formation) {
    return NextResponse.json(
      { error: "Tous les champs sont requis" },
      { status: 400 }
    )
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  )

  const { error } = await supabase
    .from("formation_inscriptions")
    .insert([{ nom, email, formation }])

  if (error) {
    console.error("Supabase error:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 }
    )
  }

  return NextResponse.json(
    { success: true, message: "Inscription reussie" },
    { status: 200 }
  )
}
