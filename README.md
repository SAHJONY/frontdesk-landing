# FrontDesk Agents

**AI Receptionist that speaks like a human. 24/7. EN/ES.**

A complete, production-ready SaaS platform for AI-powered phone reception and customer communication management.

## 🚀 Live Application

**Production URL**: [https://www.frontdeskagents.com](https://www.frontdeskagents.com)

## ✨ Features

### Core Platform
- **Multi-Tenant Architecture**: Secure tenant isolation with Row-Level Security (RLS)
- **Authentication**: Complete auth flows with Supabase (signup, login, password reset)
- **Owner Dashboard**: Comprehensive control panel for managing organizations and settings
- **Premium Landing Page**: Fortune 500-quality design with responsive layout

### AI Receptionist Capabilities
- **Voice IVR**: Natural conversation flow with intelligent routing
- **Bilingual Support**: Seamless English/Spanish conversation switching
- **24/7 Availability**: Handle unlimited concurrent calls
- **Smart Routing**: Direct calls to the right department or person
- **Lead Capture**: Automatic CRM integration (HubSpot, Google Sheets)
- **Analytics**: Real-time insights into call quality and outcomes

### Database Schema
- `orgs` - Organizations/tenants
- `profiles` - User profiles  
- `org_members` - Organization membership with RBAC (owner, admin, agent, viewer)
- `agents` - AI receptionist agents with voice/language configuration
- `inboxes` - Communication channels (voice, SMS, WhatsApp, email)
- `contacts` - Customer contact management
- `threads` - Conversation threads
- `messages` - Individual messages with direction tracking
- `attachments` - File attachments to messages

All tables have Row-Level Security enabled for complete tenant isolation.

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Database**: Supabase (PostgreSQL with RLS)
- **Authentication**: Supabase Auth
- **Payments**: Stripe (ready for integration)
- **AI**: OpenAI API (ready for integration)
- **Deployment**: Vercel
- **Language**: TypeScript

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/SAHJONY/frontdesk-landing.git
cd frontdesk-landing

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Required for full functionality:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.frontdeskagents.com

# Stripe (Optional - for billing features)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# OpenAI (Optional - for AI features)
OPENAI_API_KEY=sk-...
```

## 🗄️ Database Setup

```bash
# Initialize Supabase locally (optional)
npx supabase init

# Run migrations
npx supabase db push

# Or apply migrations directly in Supabase dashboard
# Copy contents of supabase/migrations/*.sql and run in SQL editor
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy!

Vercel will automatically:
- Build the application
- Deploy to production
- Set up custom domain
- Enable automatic deployments on push

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
frontdesk-landing/
├── app/
│   ├── api/              # API routes
│   │   └── auth/         # Authentication endpoints
│   ├── en/               # English landing page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   ├── owner/            # Owner dashboard
│   │   └── dashboard/
│   ├── healthz/          # Health check endpoint
│   ├── page.tsx          # Root redirect
│   └── layout.tsx        # Root layout
├── lib/
│   └── supabase/         # Supabase client utilities
│       ├── client.ts     # Browser client
│       └── server.ts     # Server client
├── supabase/
│   └── migrations/       # Database migrations
│       ├── 20251026000001_init_multi_tenancy.sql
│       └── 20251026000002_core_product_mvp.sql
├── middleware.ts         # Auth & routing middleware
├── package.json
└── .env.example          # Environment variables template
```

## 🔒 Security Features

- **Row-Level Security (RLS)**: All database tables enforce tenant isolation
- **Secure Headers**: HSTS, CSP, X-Frame-Options, etc.
- **Authentication**: Supabase Auth with secure session management
- **HTTPS Only**: Enforced via middleware
- **RBAC**: Role-based access control (owner, admin, agent, viewer)

## 📊 Current Status

✅ **Deployed Bundles**:
- Bundle A: Auth & Multi-Tenancy (RLS)
- Bundle B: Core Product MVP

⏳ **Pending Integration** (code ready, requires API keys):
- Bundle C: Billing & Subscriptions (Stripe)
- Bundle D: Growth Engine (Analytics, Referrals)
- Bundle E: Real-time & AI Features (OpenAI)
- Bundle F: Security Hardening (Legal pages)
- Bundle G: Testing & QA (E2E tests)
- Bundle H: Documentation (API docs, runbooks)

## 🎯 Roadmap

### Phase 1: Foundation (✅ Complete)
- [x] Multi-tenant architecture
- [x] Authentication system
- [x] Owner dashboard
- [x] Premium landing page
- [x] Core database schema

### Phase 2: Business Logic (In Progress)
- [ ] Stripe billing integration
- [ ] Usage tracking and quotas
- [ ] Subscription plan enforcement
- [ ] Onboarding flows

### Phase 3: AI Features
- [ ] OpenAI integration
- [ ] Voice transcription
- [ ] AI-assisted responses
- [ ] Real-time inbox updates

### Phase 4: Growth & Scale
- [ ] Referral system
- [ ] Analytics dashboard
- [ ] A/B testing framework
- [ ] Performance optimization

## 🤝 Contributing

This is a private project. For access or collaboration inquiries, contact: sahjonyllc@gmail.com

## 📄 License

Proprietary - All rights reserved

## 🆘 Support

For technical support or questions:
- Email: sahjonyllc@gmail.com
- GitHub Issues: [Create an issue](https://github.com/SAHJONY/frontdesk-landing/issues)

---

**Built with precision. Deployed with confidence.**

*Last updated: October 26, 2025*

