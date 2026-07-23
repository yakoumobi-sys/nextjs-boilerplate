"use client"

import { useState } from "react"

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="28" height="28" rx="4" fill="#D4A853"/>
    <text x="16" y="22" textAnchor="middle" fontSize="18" fontWeight="900" fill="#0A0A0B" fontFamily="Archivo">M</text>
  </svg>
)

export default function FormationAppSaaS() {
  const [email, setEmail] = useState("")
  const [nom, setNom] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/formations/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nom, formation: "App/SaaS avec IA" }),
      })
      if (res.ok) {
        setSuccess(true)
        setEmail("")
        setNom("")
        setTimeout(() => window.location.href = "/", 3000)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{width:"100%",background:"#0A0A0B",color:"#F5F3EE",minHeight:"100vh",fontFamily:"'Archivo', system-ui"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;900&display=swap');*{margin:0;padding:0;box-sizing:border-box;}@keyframes fadeInUp{from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0);}.animate-fade-in-up{animation:fadeInUp 0.8s ease-out forwards;}`}</style>

      <nav style={{position:"fixed",top:0,width:"100%",zIndex:50,background:"rgba(10,10,11,0.95)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.1)",padding:"1rem 1.25rem"}}>
        <div style={{maxWidth:"1400px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <a href="/" style={{display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:900,fontSize:"1.25rem",color:"#F5F3EE",textDecoration:"none"}}>
            <Logo />
            MOKA
          </a>
          <a href="/" style={{background:"#D4A853",color:"#0A0A0B",fontSize:"0.875rem",fontWeight:900,padding:"0.625rem 1.25rem",borderRadius:"9999px",textDecoration:"none"}}>Retour</a>
        </div>
      </nav>

      <section style={{minHeight:"60vh",padding:"6rem 1.25rem",paddingTop:"12rem",textAlign:"center",background:"linear-gradient(135deg, rgba(212,168,83,0.1) 0%, transparent 100%)"}}>
        <div style={{maxWidth:"56rem",margin:"0 auto"}}>
          <span className="animate-fade-in-up" style={{color:"#D4A853",fontWeight:900,letterSpacing:"0.15em",fontSize:"0.75rem",textTransform:"uppercase",display:"block",marginBottom:"1.5rem"}}>FORMATION PREMIUM</span>
          
          <h1 className="animate-fade-in-up" style={{fontSize:"3rem",fontWeight:900,lineHeight:1.2,marginBottom:"2rem",animationDelay:"0.1s"}}>
            Cree ton App/SaaS avec l'IA
          </h1>
          
          <p className="animate-fade-in-up" style={{fontSize:"1.25rem",color:"#D4A853",fontWeight:900,lineHeight:1.8,marginBottom:"1rem",animationDelay:"0.2s"}}>
            De l'idee au lancement.
          </p>
          
          <p className="animate-fade-in-up" style={{fontSize:"1.125rem",color:"rgba(255,255,255,0.7)",lineHeight:1.8,marginBottom:"2rem",fontWeight:700,animationDelay:"0.3s"}}>
            Pas besoin de savoir coder.
          </p>

          <div className="animate-fade-in-up" style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",margin:"3rem 0",animationDelay:"0.4s"}}>
            <div style={{background:"rgba(212,168,83,0.1)",borderRadius:"0.5rem",padding:"1rem"}}>
              <p style={{fontSize:"0.875rem",fontWeight:900}}>AI-Powered</p>
            </div>
            <div style={{background:"rgba(212,168,83,0.1)",borderRadius:"0.5rem",padding:"1rem"}}>
              <p style={{fontSize:"0.875rem",fontWeight:900}}>Rapide</p>
            </div>
            <div style={{background:"rgba(212,168,83,0.1)",borderRadius:"0.5rem",padding:"1rem"}}>
              <p style={{fontSize:"0.875rem",fontWeight:900}}>Rentable</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:"6rem 1.25rem",borderTop:"1px solid rgba(255,255,255,0.1)"}}>
        <div style={{maxWidth:"1400px",margin:"0 auto"}}>
          
          <div className="animate-fade-in-up" style={{marginBottom:"6rem"}}>
            <h2 style={{fontSize:"2rem",fontWeight:900,marginBottom:"2.5rem",textAlign:"center"}}>Le Processus Complet</h2>
            
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"2rem"}}>
              {[
                {title:"Valider ton Idee",desc:"Marche research avec IA"},
                {title:"Builder avec No-Code",desc:"Bubble, Flutterflow, Make"},
                {title:"Integrer IA",desc:"ChatGPT API, Claude, Gemini"},
                {title:"Monetization",desc:"Stripe, subscription setup"},
                {title:"Analytics & Growth",desc:"Tracking, optimization"},
                {title:"Launch & Scale",desc:"Product Hunt, communities"}
              ].map((item, i) => (
                <div key={i} style={{background:"#141416",border:"1px solid rgba(212,168,83,0.2)",borderRadius:"1rem",padding:"2rem"}}>
                  <h3 style={{fontWeight:900,marginBottom:"0.5rem"}}>{item.title}</h3>
                  <p style={{color:"rgba(255,255,255,0.6)",fontSize:"0.875rem",fontWeight:700}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{background:"linear-gradient(135deg, rgba(212,168,83,0.1) 0%, transparent 100%)",borderRadius:"1.5rem",padding:"3rem",marginBottom:"6rem",border:"1px solid rgba(212,168,83,0.2)",textAlign:"center"}}>
            <h2 style={{fontSize:"2rem",fontWeight:900,marginBottom:"2rem"}}>Nos Etudiants Ont Lance</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"2rem"}}>
              {[
                {name:"AI Resume Builder",revenue:"$5K MRR",creator:"Fouad M."},
                {name:"ChatBot pour Restaurants",revenue:"$15K MRR",creator:"Yasmine B."},
                {name:"Translation App",revenue:"$32K MRR",creator:"Zaki T."}
              ].map((item, i) => (
                <div key={i} style={{background:"#0A0A0B",border:"1px solid rgba(212,168,83,0.3)",borderRadius:"1rem",padding:"2rem"}}>
                  <p style={{fontWeight:900,marginBottom:"0.75rem"}}>{item.name}</p>
                  <p style={{fontSize:"1.5rem",fontWeight:900,color:"#D4A853",marginBottom:"0.5rem"}}>{item.revenue}</p>
                  <p style={{color:"rgba(255,255,255,0.6)",fontSize:"0.875rem",fontWeight:700}}>par {item.creator}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{background:"#141416",borderRadius:"1.5rem",padding:"3rem",textAlign:"center",border:"2px solid #D4A853",marginBottom:"6rem"}}>
            <div style={{fontSize:"1.25rem",fontWeight:900,color:"#D4A853",marginBottom:"0.75rem"}}>COHORT 8 REMPLI 75%</div>
            <p style={{fontSize:"1.125rem",fontWeight:900,marginBottom:"1rem"}}>15 places restantes pour la prochaine cohort</p>
            <p style={{color:"rgba(255,255,255,0.7)",fontWeight:700}}>Demarrage: semaine prochaine</p>
          </div>

          <div className="animate-fade-in-up" style={{maxWidth:"28rem",margin:"0 auto",background:"linear-gradient(135deg, rgba(212,168,83,0.15) 0%, rgba(212,168,83,0.05) 100%)",border:"1px solid rgba(212,168,83,0.3)",borderRadius:"1.5rem",padding:"3rem"}}>
            <h2 style={{fontSize:"1.75rem",fontWeight:900,marginBottom:"1rem",textAlign:"center"}}>S'inscrire Maintenant</h2>
            <p style={{color:"rgba(255,255,255,0.6)",marginBottom:"2rem",textAlign:"center",fontWeight:700}}>Premiere semaine: 50% reduction</p>

            {!success?(
              <form onSubmit={handleSubscribe} style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <input type="text" required value={nom} onChange={(e)=>setNom(e.target.value)} placeholder="Ton nom" style={{background:"#F5F3EE",color:"#0A0A0B",border:"none",borderRadius:"0.5rem",padding:"1rem",fontFamily:"inherit",fontSize:"1rem",fontWeight:900}}/>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="ton@email.com" style={{background:"#F5F3EE",color:"#0A0A0B",border:"none",borderRadius:"0.5rem",padding:"1rem",fontFamily:"inherit",fontSize:"1rem",fontWeight:900}}/>
                <button type="submit" disabled={loading} style={{background:"#D4A853",color:"#0A0A0B",fontWeight:900,padding:"1.25rem",border:"none",borderRadius:"0.5rem",cursor:"pointer",fontSize:"1rem",textTransform:"uppercase",letterSpacing:"0.05em",marginTop:"1rem"}}>
                  {loading?"Inscription..." : "S'inscrire Maintenant"}
                </button>
              </form>
            ):(
              <div style={{background:"rgba(212,168,83,0.1)",border:"1px solid #D4A853",borderRadius:"0.5rem",padding:"2rem",textAlign:"center"}}>
                <p style={{color:"#D4A853",fontWeight:900,fontSize:"1.25rem",marginBottom:"0.5rem"}}>✓ Bienvenue!</p>
                <p style={{color:"rgba(255,255,255,0.7)",fontWeight:700}}>Regarde ton email pour commencer.</p>
              </div>
            )}

            <p style={{marginTop:"1.5rem",fontSize:"0.75rem",color:"rgba(255,255,255,0.5)",fontWeight:700,textAlign:"center"}}>Garantie 30 jours · Pas de risque</p>
          </div>
        </div>
      </section>

      <footer style={{borderTop:"1px solid rgba(255,255,255,0.1)",padding:"3rem 1.25rem",textAlign:"center",color:"rgba(255,255,255,0.4)",fontSize:"0.875rem",marginTop:"4rem"}}>
        <p style={{fontWeight:900}}>© 2026 Moka Yakoubi — Caractere Store</p>
      </footer>
    </div>
  )
}
