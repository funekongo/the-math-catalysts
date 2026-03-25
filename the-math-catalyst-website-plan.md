# The Math Catalyst — Website Build Prompt

Use this document to build a clean, modern tutoring website for **The Math Catalyst**.

---

## Business Overview

- **Name:** The Math Catalyst
- **Service:** Online math tutoring via Google Meet
- **Sessions:** 2 sessions per weekend (Saturday and Sunday), each 2 hours long
- **Pricing:** R150 per month (flat subscription)
- **Payment:** Online payment integration (e.g. PayFast or Yoco — South African payment gateways)
- **Target audience:** High school students (Grade 10–12), parents

---

## Pages to Build

### 1. Home (`/`)
- Hero section with a bold tagline (e.g. *"Better marks. Every weekend."*)
- Short description of the service: weekend Google Meet sessions, R150/month
- Call-to-action button: **Join Now** or **Sign Up**
- How it works (3 steps: Sign up → Pay R150/month → Join sessions every weekend on Google Meet)
- Testimonials section (placeholder cards for now)
- Footer with contact email and social links

### 2. About (`/about`)
- Who the tutor is and their passion for teaching math
- Teaching approach: live, interactive sessions over Google Meet
- Why weekends work: focused, dedicated study time without school pressure

### 3. How It Works (`/how-it-works`)
- Step 1: Sign up and pay R150/month
- Step 2: Receive the Google Meet link
- Step 3: Join every Saturday and Sunday for 2-hour live sessions
- Step 4: Ask questions, get explanations, improve your marks

### 4. Pricing (`/pricing`)
- Single plan: **R150/month**
- Includes: 2 sessions per weekend (Saturday + Sunday), 2 hours each = up to 16 hours of tuition per month
- Payment via online payment gateway (PayFast or Yoco)
- Cancel anytime

### 5. Contact (`/contact`)
- Simple contact form: name, email, grade, message
- WhatsApp link (direct chat button)
- Response time: within 24 hours

---

## Design Requirements

- **Tone:** Smart, energetic, approachable — not corporate or stuffy
- **Color palette:**
  - Primary: `#1B2A4A` (deep navy)
  - Accent: `#F4A732` (amber/gold)
  - Background: `#F8F9FC` (off-white)
  - Text: `#1A1A2E`
- **Typography:**
  - Headings: a bold, geometric font (e.g. Poppins Bold or Playfair Display)
  - Body: clean and readable (e.g. Nunito or Source Sans 3)
- **Style:** Clean, mobile-first, minimal but warm. Math-inspired subtle background details (grids, equations as decorative elements)
- **Must be fully responsive** (mobile + desktop)

---

## Key Features

- [ ] Monthly subscription sign-up flow with online payment (PayFast or Yoco integration)
- [ ] Google Meet link delivery after successful payment (manual or automated)
- [ ] Floating WhatsApp button (bottom-right corner)
- [ ] Testimonial cards (placeholder content is fine to start)
- [ ] Mobile responsive layout
- [ ] Fast loading — compress all images
- [ ] Simple navigation: Home, About, How It Works, Pricing, Contact

---

## Tech Stack Suggestion (for Gemini to decide or follow)

- **Frontend:** Next.js or plain HTML/CSS/JS
- **Styling:** Tailwind CSS
- **Hosting:** Vercel or Netlify (free tier)
- **Payments:** PayFast or Yoco (South African gateways)
- **Domain:** `themathcatalyst.co.za` (suggested)

---

## Sample Copy

**Hero tagline options:**
- *"Better marks. Every weekend."*
- *"Live math tutoring. Every weekend. Just R150 a month."*
- *"Join the weekend sessions that actually make maths click."*

**How it works blurb:**
> Every Saturday and Sunday, join a live 2-hour Google Meet session. Ask questions, work through problems, and build real understanding — all for R150 a month.

---

## Notes for the Builder

- No consultation booking needed — students simply sign up and pay
- After payment, they receive the recurring Google Meet link
- Keep the site simple and focused on one clear action: **Sign up and pay**
- Prioritise the mobile experience — most students will visit on their phones

---

*Build a site that feels confident, welcoming, and makes signing up dead simple.*
