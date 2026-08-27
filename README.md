# VertexShell Solutions Website

Marketing website for VertexShell Solutions, a Cairo-based supplier of modular infrastructure, prefabricated electrical systems, and industrial products.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx          # Root layout, metadata, fonts
  page.tsx            # Home page (hero, teasers, CTA)
  about/page.tsx       # About Us page
  services/page.tsx    # Services page
  careers/page.tsx     # Careers page (open positions)
  contact/page.tsx     # Contact page
  globals.css         # Tailwind imports, custom theme, animations
  sitemap.ts          # Auto-generated sitemap
components/
  Nav.tsx             # Sticky nav across all pages (transparent -> white on scroll)
  Hero.tsx            # Full-viewport home hero with headline and CTAs
  AboutTeaser.tsx     # Condensed About section on the home page
  Capabilities.tsx    # 4-card services teaser on the home page
  WhyVertexShell.tsx  # Differentiators / value propositions
  Contact.tsx         # Contact info + Formspree form (used on /contact)
  CtaBanner.tsx       # Reusable "get in touch" CTA strip
  PageHero.tsx        # Reusable dark hero for inner pages
  MediaPanel.tsx      # Placeholder panel for photos not yet available
  Footer.tsx          # Footer with quick links, contact info, copyright
  LogoMark.tsx        # SVG logo component (dot-sphere)
  about/              # About page sections (story, sectors, presence, partnerships, leadership)
  services/           # Services page sections (per-pillar deep dive)
  careers/            # Careers page sections (intro, open positions)
hooks/
  useInView.ts        # Intersection Observer hook for scroll animations
public/
  logo.png            # Dot-sphere logo
  logo-with-text.jpg  # Full logo with "VertexShell Solutions" text
  banner.png          # Sector icons banner
  favicon.png         # Favicon (copy of logo)
  robots.txt          # Search engine directives
```

---

## Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: VertexShell website"
git remote add origin https://github.com/YOUR_USERNAME/vertexshell-website.git
git push -u origin main
```

### 2. Create a Vercel Account

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Authorize Vercel to access your repositories.

### 3. Import the Repo

1. From the Vercel dashboard, click **"Add New Project"**.
2. Select the `vertexshell-website` repository.
3. Framework preset will auto-detect as **Next.js** -- no changes needed.
4. Click **Deploy**. The build will take ~1 minute.

### 4. Add Custom Domain (vertexshell.com)

1. In Vercel, go to your project -> **Settings -> Domains**.
2. Type `vertexshell.com` and click **Add**.
3. Vercel will show you DNS records to configure. You need to set:
   - **A record**: `@` -> `76.76.21.21`
   - **CNAME record**: `www` -> `cname.vercel-dns.com`
4. Log into your domain registrar (GoDaddy, Namecheap, etc.) and update the DNS records.
5. Wait for DNS propagation (usually 5-30 minutes, can take up to 48 hours).
6. Vercel automatically provisions an SSL certificate.

---

## Setting Up Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Click **"New Form"** and name it (e.g., "VertexShell Contact").
3. Copy the form endpoint URL -- it looks like: `https://formspree.io/f/xyzabcde`
4. Open `components/Contact.tsx` and replace the placeholder:

```tsx
// Change this line:
action="https://formspree.io/f/YOUR_FORM_ID"

// To your actual endpoint:
action="https://formspree.io/f/xyzabcde"
```

5. Commit and push -- Vercel will auto-deploy the change.

---

## Content to Add Later

- **Photos**: The site currently uses `MediaPanel` placeholders wherever a real photo belongs. Replace them with a `next/image` once available:
  - Home hero / Services hero: a signature shot (aircraft, e-house install, or power skid on-site)
  - About page: team/office photo, partner manufacturer facility
  - Services page: one photo per pillar (aircraft; prefab e-house/shelter; containerized generator/power skid; warehouse or logistics yard)
  - Careers page: team/office culture photo
- **Leadership headshots**: `components/about/Leadership.tsx` currently shows initials avatars for Waleed and Youssef
- **Project references / case studies**: Add a new section, e.g. on the Services or About page
- **News / updates**: Add a section or link to LinkedIn posts
- **Careers**: `components/careers/OpenPositions.tsx` has one listing (Account Manager) with placeholder compensation/benefits language; confirm the apply-to email address and details before publishing
