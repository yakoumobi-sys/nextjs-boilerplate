"use client"
import { useState } from "react"
export default function Page() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/formations/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, formation: "Marque de Vetements" }),
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
    <div style={{width:"100%",background:"#0A0A0B",color:"#F5F3EE",minHeight:"100vh",fontFamily:"'Archivo', system-ui"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;900&display=swap');*{margin:0;padding:0;box-sizing:border-box;}@keyframes fadeInUp{from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0);}}.animate-fade-in-up{animation:fadeInUp 0.8s ease-out forwards;}`}</style>
      <nav style={{position:"fixed",top:0,width:"100%",zIndex:50,background:"rgba(10,10,11,0.95)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.1)",padding:"1rem 1.25rem"}}>
        <div style={{maxWidth:"1400px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <a href="/" style={{fontWeight:900,color:"#F5F3EE",textDecoration:"none"}}>← MOKA</a>
          <a href="/" style={{background:"#D4A853",color:"#0A0A0B",fontWeight:700,padding:"0.625rem 1.25rem",borderRadius:"9999px",textDecoration:"none"}}>Retour</a>
        </div>
      </nav>
      <section style={{minHeight:"60vh",padding:"6rem 1.25rem 4rem",paddingTop:"12rem",textAlign:"center"}}>
        <div style={{maxWidth:"56rem",margin:"0 auto"}}>
          <span className="animate-fade-in-up" style={{color:"#D4A853",fontWeight:600,letterSpacing:"0.15em",fontSize:"0.75rem",textTransform:"uppercase",display:"block",marginBottom:"2rem"}}>Formation Premium</span>
          <h1 className="animate-fade-in-up" style={{fontSize:"3.5rem",fontWeight:900,lineHeight:1.2,marginBottom:"2rem"}}>Lance ta marque de vetements</h1>
          <p className="animate-fade-in-up" style={{fontSize:"1.25rem",color:"rgba(255,255,255,0.6)",lineHeight:1.6}}>Sans machines. Sans stock. Profit des le premier jour.</p>
        </div>
      </section>
      <section style={{padding:"6rem 1.25rem",borderTop:"1px solid rgba(255,255,255,0.1)"}}>
        <div style={{maxWidth:"1400px",margin:"0 auto"}}>
          <div style={{marginBottom:"6rem"}}>
            <div className="animate-fade-in-up">
              <h2 style={{fontSize:"2rem",fontWeight:900,marginBottom:"2rem"}}>Ce que tu vas apprendre</h2>
              <ul style={{listStyle:"none"}}>
                <li style={{color:"rgba(255,255,255,0.7)",fontSize:"1.125rem",marginBottom:"1rem"}}>✓ Choisir ta niche</li>
                <li style={{color:"rgba(255,255,255,0.7)",fontSize:"1.125rem",marginBottom:"1rem"}}>✓ Design tes produits</li>
                <li style={{color:"rgba(255,255,255,0.7)",fontSize:"1.125rem",marginBottom:"1rem"}}>✓ Lancer sur Insta/TikTok</li>
                <li style={{color:"rgba(255,255,255,0.7)",fontSize:"1.125rem",marginBottom:"1rem"}}>✓ Scale a 10K€/mois</li>
              </ul>
            </div>
          </div>
          <div className="animate-fade-in-up" style={{background:"#141416",border:"1px solid rgba(212,168,83,0.3)",borderRadius:"1.5rem",padding:"3rem",textAlign:"center",maxWidth:"28rem",margin:"0 auto"}}>
            <h2 style={{fontSize:"2rem",fontWeight:900,marginBottom:"1rem"}}>Pret a demarrer?</h2>
            {!success?(
              <form onSubmit={handleSubscribe} style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="ton@email.com" style={{background:"#F5F3EE",color:"#0A0A0B",border:"none",borderRadius:"0.5rem",padding:"1rem"}}/>
                <button type="submit" disabled={loading} style={{background:"#D4A853",color:"#0A0A0B",fontWeight:700,padding:"1rem",border:"none",borderRadius:"0.5rem",cursor:"pointer"}}>{loading?"...":"S'inscrire"}</button>
              </form>
            ):(
              <p style={{color:"#D4A853",fontWeight:700}}>✓ Verifie ton email!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
