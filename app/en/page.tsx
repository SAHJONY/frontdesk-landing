export const dynamic = "force-dynamic";

export default function EnLanding() {
  return (
    <main style={{
      minHeight: "100vh",
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white"
    }}>
      {/* Hero Section */}
      <section style={{
        padding: "6rem 2rem",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 800,
          marginBottom: "1.5rem",
          lineHeight: 1.1
        }}>
          FrontDesk Agents
        </h1>
        <p style={{
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          marginBottom: "1rem",
          opacity: 0.95,
          fontWeight: 300
        }}>
          AI Receptionist that speaks like a human. 24/7. EN/ES.
        </p>
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          marginBottom: "3rem",
          opacity: 0.85,
          maxWidth: "800px",
          margin: "0 auto 3rem"
        }}>
          Never miss a call again. Our AI agents answer, route, and schedule with natural conversation in English and Spanish.
        </p>
        <div style={{display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap"}}>
          <a href="/signup" style={{
            padding: "1rem 2.5rem",
            background: "white",
            color: "#667eea",
            textDecoration: "none",
            borderRadius: "0.75rem",
            fontWeight: 700,
            fontSize: "1.125rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.2s",
            display: "inline-block"
          }}>
            Start Free Trial
          </a>
          <a href="/login" style={{
            padding: "1rem 2.5rem",
            background: "rgba(255,255,255,0.2)",
            color: "white",
            textDecoration: "none",
            borderRadius: "0.75rem",
            fontWeight: 700,
            fontSize: "1.125rem",
            border: "2px solid white",
            transition: "all 0.2s",
            display: "inline-block"
          }}>
            Sign In
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: "4rem 2rem",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)"
      }}>
        <div style={{maxWidth: "1200px", margin: "0 auto"}}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            textAlign: "center",
            marginBottom: "3rem",
            fontWeight: 700
          }}>
            Everything You Need
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {[
              {
                title: "Voice IVR",
                desc: "Answer, route, schedule. Natural conversation flow with intelligent routing to the right department or person."
              },
              {
                title: "Leads & CRM",
                desc: "Push to HubSpot/Sheets. Automatic lead capture and synchronization with your existing tools."
              },
              {
                title: "Analytics",
                desc: "Call quality & outcomes. Real-time insights into conversation quality, customer satisfaction, and business metrics."
              },
              {
                title: "24/7 Availability",
                desc: "Never miss a customer. Your AI receptionist works around the clock, handling unlimited concurrent calls."
              },
              {
                title: "Bilingual Support",
                desc: "English & Spanish. Seamlessly switch languages mid-conversation to serve all your customers."
              },
              {
                title: "Easy Integration",
                desc: "Connect in minutes. Simple webhook integration with your existing phone system and business tools."
              }
            ].map((feature, i) => (
              <div key={i} style={{
                padding: "2rem",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "1rem",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255,255,255,0.2)"
              }}>
                <h3 style={{fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 600}}>
                  {feature.title}
                </h3>
                <p style={{opacity: 0.9, lineHeight: 1.6}}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <div style={{maxWidth: "1200px", margin: "0 auto"}}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            marginBottom: "1rem",
            fontWeight: 700
          }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{fontSize: "1.25rem", opacity: 0.9, marginBottom: "3rem"}}>
            Enterprise-grade AI reception. Scale with confidence.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            {[
              {name: "Starter", price: "$199", features: ["1 inbox", "1 AI receptionist", "Basic analytics", "Email support"]},
              {name: "Growth", price: "$399", features: ["5 inboxes", "Advanced analytics", "AI Assist+", "CRM integrations", "Priority support"]},
              {name: "Pro", price: "$699", features: ["Unlimited inboxes", "Full AI orchestration", "Custom branding", "Dedicated support", "SLA guarantee"]}
            ].map((plan, i) => (
              <div key={i} style={{
                padding: "2.5rem 2rem",
                background: i === 1 ? "white" : "rgba(255,255,255,0.15)",
                color: i === 1 ? "#667eea" : "white",
                borderRadius: "1rem",
                border: i === 1 ? "3px solid white" : "1px solid rgba(255,255,255,0.2)",
                transform: i === 1 ? "scale(1.05)" : "scale(1)"
              }}>
                <h3 style={{fontSize: "1.75rem", marginBottom: "0.5rem", fontWeight: 700}}>
                  {plan.name}
                </h3>
                <p style={{fontSize: "3rem", fontWeight: 800, marginBottom: "1.5rem"}}>
                  {plan.price}<span style={{fontSize: "1.25rem", fontWeight: 400}}>/mo</span>
                </p>
                <ul style={{listStyle: "none", padding: 0, marginBottom: "2rem", textAlign: "left"}}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{padding: "0.5rem 0", opacity: 0.9}}>✓ {f}</li>
                  ))}
                </ul>
                <a href="/signup" style={{
                  display: "block",
                  padding: "0.75rem 2rem",
                  background: i === 1 ? "#667eea" : "rgba(255,255,255,0.3)",
                  color: i === 1 ? "white" : "inherit",
                  textDecoration: "none",
                  borderRadius: "0.5rem",
                  fontWeight: 600
                }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "3rem 2rem",
        background: "rgba(0,0,0,0.3)",
        textAlign: "center"
      }}>
        <div style={{maxWidth: "1200px", margin: "0 auto"}}>
          <p style={{marginBottom: "1rem", opacity: 0.8}}>
            © 2025 FrontDesk Agents. All rights reserved.
          </p>
          <div style={{display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap"}}>
            <a href="/terms" style={{color: "white", opacity: 0.8, textDecoration: "none"}}>Terms</a>
            <a href="/privacy" style={{color: "white", opacity: 0.8, textDecoration: "none"}}>Privacy</a>
            <a href="/healthz" style={{color: "white", opacity: 0.8, textDecoration: "none"}}>Status</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

