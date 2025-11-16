# Razorbill Next.js App

This directory contains the Next.js application for Razorbill Technologies.

## 📁 Structure

```
razorbill-nextjs/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility libraries
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🛠️ Development

**Note:** Run commands from the repository root using `npm run dev`, `npm run build`, etc.

If working directly in this directory:

```bash
npm install
npm run dev
```

## 📦 Key Dependencies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Formspree
- Supabase
- Lucide React
- Swiper

## 🎨 Components

- `Navigation` - Main site navigation
- `HeroCarousel` - Hero section carousel
- `HeroForm`, `CTAForm`, `FooterForm` - Contact forms
- `ReviewForm` - Customer review form
- `StructuredData` - SEO structured data

## 📝 Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## 🔧 Scripts

- `npm run dev` - Development server with Turbopack
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking
