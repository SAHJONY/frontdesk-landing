import Image from 'next/image'
import styles from './landing.module.css'

export const dynamic = "force-dynamic"

export default function EnLanding() {
  const features = [
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
  ]

  const plans = [
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
  ]

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>FrontDesk Agents</div>
          <div className={styles.navButtons}>
            <a href="/login" className={styles.signIn}>Sign In</a>
            <a href="/signup" className={styles.startTrial}>Start Free Trial</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div>
            <h1 className={styles.heroTitle}>
              Excellent Service<br />
              <span className={styles.heroAccent}>Starts Here</span>
            </h1>
            <p className={styles.heroText}>
              Hire highly-skilled AI front desk agents for your business. 
              Never miss a call again with 24/7 bilingual support in English and Spanish.
            </p>
            <div className={styles.heroButtons}>
              <a href="/signup" className={styles.btnPrimary}>Get Started</a>
              <a href="#pricing" className={styles.btnSecondary}>View Pricing</a>
            </div>
            <div className={styles.stats}>
              <div>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Availability</div>
              </div>
              <div>
                <div className={styles.statValue}>2</div>
                <div className={styles.statLabel}>Languages</div>
              </div>
              <div>
                <div className={styles.statValue}>99.9%</div>
                <div className={styles.statLabel}>Uptime</div>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
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
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Everything You Need to Scale</h2>
          <p className={styles.sectionText}>
            Enterprise-grade AI reception platform with all the tools you need to deliver exceptional customer service.
          </p>
          <div className={styles.featureGrid}>
            {features.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon} style={{ background: `${feature.color}15` }}>
                  <div className={styles.featureIconInner} style={{ background: feature.color }}></div>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview Section */}
      <section className={styles.analytics}>
        <div className={styles.heroContainer}>
          <div>
            <h2 className={styles.heroTitle}>
              Powerful Analytics<br />
              <span className={styles.heroAccent}>Real-Time Insights</span>
            </h2>
            <p className={styles.heroText}>
              Track every conversation with enterprise-grade analytics. Monitor conversion rates, customer satisfaction, and business metrics in real-time.
            </p>
            <ul className={styles.checkList}>
              {[
                "Live conversation quality monitoring",
                "Customer satisfaction metrics",
                "Conversion rate optimization",
                "Custom reporting and exports"
              ].map((item, i) => (
                <li key={i} className={styles.checkItem}>
                  <span className={styles.checkMark}>✓</span>
                  <span style={{ color: "#d1d5db" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.analyticsImage}>
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
      <section id="pricing" className={styles.pricing}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
          <p className={styles.sectionText}>
            Enterprise-grade AI reception. Scale with confidence.
          </p>
          <div className={styles.pricingGrid}>
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={plan.highlighted ? `${styles.pricingCard} ${styles.pricingCardHighlighted}` : styles.pricingCard}
              >
                {plan.badge && (
                  <div className={styles.pricingBadge}>{plan.badge}</div>
                )}
                <h3 className={styles.pricingName}>{plan.name}</h3>
                <p className={styles.pricingPrice}>
                  {plan.price}<span className={styles.pricingPeriod}>/mo</span>
                </p>
                <ul className={styles.pricingFeatures}>
                  {plan.features.map((f, j) => (
                    <li key={j} className={styles.pricingFeature}>
                      <span style={{ color: plan.highlighted ? "#86efac" : "#10b981" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/signup" 
                  className={`${styles.pricingButton} ${plan.highlighted ? styles.pricingButtonHighlighted : styles.pricingButtonNormal}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Customer Service?</h2>
          <p className={styles.ctaText}>
            Join hundreds of businesses using AI receptionists to deliver exceptional service 24/7.
          </p>
          <a href="/signup" className={styles.ctaButton}>Start Your Free Trial</a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerBrand}>FrontDesk Agents</div>
              <p className={styles.footerText}>
                Enterprise-grade AI reception platform for modern businesses.
              </p>
            </div>
            <div>
              <h4 className={styles.footerTitle}>Product</h4>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>Features</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#pricing" className={styles.footerLink}>Pricing</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>Integrations</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerTitle}>Company</h4>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>About</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>Blog</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerTitle}>Legal</h4>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>Privacy</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>Terms</a>
                </li>
                <li className={styles.footerListItem}>
                  <a href="#" className={styles.footerLink}>Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 FrontDesk Agents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

