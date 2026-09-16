# Rush Track Transport LLC — Next.js Corporate Website

A local-first corporate website prototype for Rush Track Transport LLC, built with Next.js App Router.

## Run in VS Code

1. Open this folder in VS Code.
2. Open Terminal in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open: `http://localhost:3000`

## Pages included

- Home
- About Us
- Our Divisions
- Transport & Logistics division
- Warehousing & Storage division
- Fleet Services division
- Industries
- Fleet
- Sustainability
- News
- Contact
- Local contact API route (`/api/contact`)

## RT Movers connection

The Moving & Relocation division links to:
`https://rtmoversuae.com/`

## Important prototype note

The site currently uses remote Unsplash image URLs as design placeholders for photography. Before final hosting, replace those with official Rush Track/RT Movers images in `/public/images/` and update `data/site.js`.

The contact form works locally by posting to `/api/contact`; enquiries are printed in the terminal. For production, connect the API route to your preferred email/CRM service.
