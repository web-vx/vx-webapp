# VertexShell Solutions Website

One-page marketing website for VertexShell Solutions — a Cairo-based supplier of modular infrastructure, prefabricated electrical systems, and industrial products.

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
  page.tsx            # Main page (assembles all sections)
  globals.css         # Tailwind imports, custom theme, animations
  sitemap.ts          # Auto-generated sitemap
components/
  Nav.tsx             # Sticky navigation (transparent -> white on scroll)
  Hero.tsx            # Full-viewport hero with headline and CTAs
  About.tsx           # Company overview
  Capabilities.tsx    # 4-card grid of service offerings
  WhyVertexShell.tsx  # Differentiators / value propositions
  Standards.tsx       # Certification standards strip
  Contact.tsx         # Contact info + Formspree form
  Footer.tsx          # Footer with logo, copyright, location
  LogoMark.tsx        # SVG logo component (dot-sphere)
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

- **Phone number**: Replace `[Phone number placeholder]` in `components/Contact.tsx`
- **Project references / case studies**: Add a new section component between WhyVertexShell and Standards
- **Leadership team**: Add a Team section with headshots and bios
- **News / updates**: Add a blog section or link to LinkedIn posts
- **OG image**: Generate a 1200x630 image and save as `public/og-image.png`
