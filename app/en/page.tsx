import Image from 'next/image'

export const dynamic = "force-dynamic"

export default function EnLanding() {
  return (
    <main style={{
      minHeight: "100vh",
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "#ffffff",
      color: "#1f2937"
    }}>
      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e5e7eb",
        padding: "1rem 2rem"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1f2937"
          }}>
            FrontDesk Agents
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a href="/login" style={{
              padding: "0.5rem 1rem",
              color: "#4b5563",
              textDecoration: "none",
              fontWeight: 500
            }}>
              Sign In
            </a>
            <a href="/signup" style={{
              padding: "0.75rem 1.5rem",
              background: "#3b82f6",
              color: "white",
              textDecoration: "none",
              borderRadius: "0.5rem",
              fontWeight: 600,
              boxShadow: "0 4px 6px rgba(59, 130, 246, 0.3)"
            }}>
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: "8rem 2rem 4rem",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
        color: "white"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "center"
        }}>
          {/* Left: Text Content */}
          <div>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              lineHeight: 1.1
            }}>
              Excellent Service
              <br />
              <span style={{ color: "#60a5fa" }}>Starts Here</span>
            </h1>
            <p style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              Hire highly-skilled AI front desk agents for your business. 
              Never miss a call again with 24/7 bilingual support in English and Spanish.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <a href="/signup" style={{
                padding: "1rem 2rem",
                background: "#3b82f6",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.75rem",
                fontWeight: 700,
                fontSize: "1.125rem",
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                transition: "transform 0.2s",
                display: "inline-block"
              }}>
                Get Started
              </a>
              <a href="#pricing" style={{
                padding: "1rem 2rem",
                background: "rgba(255,255,255,0.1)",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.75rem",
                fontWeight: 700,
                fontSize: "1.125rem",
                border: "2px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(10px)",
                display: "inline-block"
              }}>
                View Pricing
              </a>
            </div>
            {/* Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              marginTop: "3rem"
            }}>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#60a5fa" }}>24/7</div>
                <div style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "0.25rem" }}>Availability</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#60a5fa" }}>2</div>
                <div style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "0.25rem" }}>Languages</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#60a5fa" }}>99.9%</div>
                <div style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "0.25rem" }}>Uptime</div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)"
            }}>
              <Image
                src="/images/hero-receptionist.jpg"
                alt="Professional AI receptionist service"
                width={612}
                height={408}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: "5rem 2rem",
        background: "#f9fafb"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: 700,
            color: "#1f2937"
          }}>
            Everything You Need to Scale
          </h2>
          <p style={{
            textAlign: "center",
            fontSize: "1.25rem",
            color: "#6b7280",
            marginBottom: "3rem",
            maxWidth: "600px",
            margin: "0 auto 3rem"
          }}>
            Enterprise-grade AI reception platform with all the tools you need to deliver exceptional customer service.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {[
              {
                title: "Voice IVR",
                desc: "Answer, route, and schedule with natural conversation flow. Intelligent routing to the right department or person every time.",
                color: "#3b82f6"
              },
              {
                title: "Leads & CRM",
                desc: "Push to HubSpot or Google Sheets automatically. Capture and synchronize every lead with your existing tools seamlessly.",
                color: "#10b981"
              },
              {
                title: "Real-Time Analytics",
                desc: "Call quality and outcomes tracking. Real-time insights into conversation quality, customer satisfaction, and business metrics.",
                color: "#8b5cf6"
              },
              {
                title: "24/7 Availability",
                desc: "Never miss a customer. Your AI receptionist works around the clock, handling unlimited concurrent calls without breaks.",
                color: "#f59e0b"
              },
              {
                title: "Bilingual Support",
                desc: "English and Spanish fluency. Seamlessly switch languages mid-conversation to serve all your customers with excellence.",
                color: "#ef4444"
              },
              {
                title: "Easy Integration",
                desc: "Connect in minutes with simple webhook integration. Works with your existing phone system and business tools out of the box.",
                color: "#14b8a6"
              }
            ].map((feature, i) => (
              <div key={i} style={{
                padding: "2rem",
                background: "white",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s"
              }}>
                <div style={{
                  width: "3rem",
                  height: "3rem",
                  background: `${feature.color}15`,
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem"
                }}>
                  <div style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    background: feature.color,
                    borderRadius: "0.25rem"
                  }}></div>
                </div>
                <h3 style={{
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                  fontWeight: 700,
                  color: "#1f2937"
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: "#6b7280",
                  lineHeight: 1.6
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview Section */}
      <section style={{
        padding: "5rem 2rem",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
        color: "white"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "center"
        }}>
          <div>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "1.5rem",
              fontWeight: 700
            }}>
              Powerful Analytics
              <br />
              <span style={{ color: "#60a5fa" }}>Real-Time Insights</span>
            </h2>
            <p style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              Track every conversation with enterprise-grade analytics. Monitor conversion rates, customer satisfaction, and business metrics in real-time.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Live conversation quality monitoring",
                "Customer satisfaction metrics",
                "Conversion rate optimization",
                "Custom reporting and exports"
              ].map((item, i) => (
                <li key={i} style={{
                  padding: "0.75rem 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{
                    color: "#10b981",
                    fontSize: "1.5rem",
                    fontWeight: 700
                  }}>✓</span>
                  <span style={{ color: "#d1d5db" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            border: "4px solid rgba(59, 130, 246, 0.2)"
          }}>
            <Image
              src="/images/dashboard-analytics.png"
              alt="Analytics dashboard showing real-time metrics"
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: "5rem 2rem",
        background: "#f9fafb",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            marginBottom: "1rem",
            fontWeight: 700,
            color: "#1f2937"
          }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{
            fontSize: "1.25rem",
            color: "#6b7280",
            marginBottom: "3rem"
          }}>
            Enterprise-grade AI reception. Scale with confidence.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            {[
              {
                name: "Starter",
                price: "$199",
                features: ["1 inbox", "1 AI receptionist", "Basic analytics", "Email support"],
                highlighted: false
              },
              {
                name: "Growth",
                price: "$399",
                features: ["5 inboxes", "Advanced analytics", "AI Assist+", "CRM integrations", "Priority support"],
                highlighted: true,
                badge: "RECOMMENDED"
              },
              {
                name: "Pro",
                price: "$699",
                features: ["Unlimited inboxes", "Full AI orchestration", "Custom branding", "Dedicated support", "SLA guarantee"],
                highlighted: false
              }
            ].map((plan, i) => (
              <div key={i} style={{
                padding: "2.5rem 2rem",
                background: plan.highlighted ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" : "white",
                color: plan.highlighted ? "white" : "#1f2937",
                borderRadius: "1rem",
                border: plan.highlighted ? "3px solid #60a5fa" : "1px solid #e5e7eb",
                transform: plan.highlighted ? "scale(1.05)" : "scale(1)",
                boxShadow: plan.highlighted ? "0 20px 50px rgba(59, 130, 246, 0.3)" : "0 4px 6px rgba(0, 0, 0, 0.1)",
                position: "relative"
              }}>
                {plan.badge && (
                  <div style={{
                    position: "absolute",
                    top: "-1rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#f59e0b",
                    color: "white",
                    padding: "0.25rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 700
                  }}>
                    {plan.badge}
                  </div>
                )}
                <h3 style={{
                  fontSize: "1.75rem",
                  marginBottom: "0.5rem",
                  fontWeight: 700
                }}>
                  {plan.name}
                </h3>
                <p style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  marginBottom: "1.5rem"
                }}>
                  {plan.price}<span style={{ fontSize: "1.25rem", fontWeight: 400 }}>/mo</span>
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "2rem",
                  textAlign: "left"
                }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{
                      padding: "0.5rem 0",
                      opacity: 0.9,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}>
                      <span style={{ color: plan.highlighted ? "#86efac" : "#10b981" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/signup" style={{
                  display: "block",
                  padding: "0.75rem 2rem",
                  background: plan.highlighted ? "white" : "#3b82f6",
                  color: plan.highlighted ? "#3b82f6" : "white",
                  textDecoration: "none",
                  borderRadius: "0.5rem",
                  fontWeight: 700
                }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "5rem 2rem",
        background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            marginBottom: "1.5rem",
            fontWeight: 700
          }}>
            Ready to Transform Your Customer Service?
          </h2>
          <p style={{
            fontSize: "1.25rem",
            marginBottom: "2rem",
            opacity: 0.9
          }}>
            Join hundreds of businesses using AI receptionists to deliver exceptional service 24/7.
          </p>
          <a href="/signup" style={{
            display: "inline-block",
            padding: "1rem 2.5rem",
            background: "white",
            color: "#3b82f6",
            textDecoration: "none",
            borderRadius: "0.75rem",
            fontWeight: 700,
            fontSize: "1.125rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
          }}>
            Start Your Free Trial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "3rem 2rem",
        background: "#111827",
        color: "#9ca3af",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
            textAlign: "left"
          }}>
            <div>
              <div style={{
                color: "white",
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "1rem"
              }}>
                FrontDesk Agents
              </div>
              <p style={{ fontSize: "0.875rem" }}>
                Enterprise-grade AI reception platform for modern businesses.
              </p>
            </div>
            <div>
              <h4 style={{
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem"
              }}>
                Product
              </h4>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.875rem"
              }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Features</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#pricing" style={{ color: "#9ca3af", textDecoration: "none" }}>Pricing</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Integrations</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem"
              }}>
                Company
              </h4>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.875rem"
              }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>About</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem"
              }}>
                Legal
              </h4>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.875rem"
              }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Terms</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: "1px solid #374151",
            paddingTop: "2rem",
            fontSize: "0.875rem"
          }}>
            <p>&copy; 2024 FrontDesk Agents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

