# Comino Web v2 🚀

Velkommen til versjon 2 av Comino Web sine nettsider! Dette er eit fullstendig nybygg bygd frå botnen av med moderne webteknologi.

## �️ Teknologiar

- **[Astro](https://astro.build)** - Moderne statisk sidegenerator med fantastisk ytelse
- **[React](https://react.dev)** - For interaktive komponentar
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-sikker JavaScript

## 📂 Prosjektstruktur

```
/
├── public/          # Statiske filer (bilete, favicon, etc.)
├── src/
│   ├── components/  # Gjenbrukbare komponentar
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ContactForm.tsx (React)
│   ├── layouts/     # Layout-komponentar
│   │   └── Layout.astro
│   ├── pages/       # Sider (filbasert routing)
│   │   ├── index.astro      # Hemsida
│   │   ├── tjenester.astro  # Tenester
│   │   ├── prosjekt.astro   # Prosjektportefølje
│   │   ├── om-oss.astro     # Om oss
│   │   └── kontakt.astro    # Kontakt
│   └── styles/      # Globale stilar
│       └── global.css
└── package.json
```

## 🚀 Kom i gang

### Installasjon

```bash
npm install
```

### Utviklingsserver

```bash
npm run dev
```

Dette startar ein lokal utviklingsserver på `http://localhost:4321/` (eller ein annan port om denne er oppteken).

### Bygg for produksjon

```bash
npm run build
```

Dette byggjer ei optimalisert versjon av sida i `./dist/` mappa.

### Førehandsvis produksjonsbygg

```bash
npm run preview
```

## 📄 Sider

- **Heim** (`/`) - Hovudsida med hero-seksjon og oversikt over tenester
- **Tenester** (`/tjenester`) - Oversikt over våre tenester
- **Prosjekt** (`/prosjekt`) - Portefølje av tidlegare arbeid
- **Om oss** (`/om-oss`) - Informasjon om Comino Web og vår filosofi
- **Kontakt** (`/kontakt`) - Kontaktskjema og informasjon

## 💡 Filosofi

Comino Web lagar nettsider **frå botnen av**. I staden for å bruke generiske page builders som Wix eller WordPress, skriv vi kode som er skreddarsydd for kvart prosjekt. Dette gjev oss:

- ⚡ **Betre ytelse** - Raskare lastetider og betre brukaropplevelse
- 🎨 **Full fleksibilitet** - Ingen grenser i design eller funksjonalitet
- 🔒 **Auka sikkerheit** - Ingen unødvendige plugins eller tredjepartskode
- 🚀 **Moderne teknologi** - Vi bruker dei nyaste verktøya og beste praksisane

## 🔧 Utvikling

### Leggje til nye sider

Astro bruker filbasert routing. Legg til ei ny `.astro`-fil i `src/pages/` for å lage ei ny side.

### Leggje til React-komponentar

For interaktive komponentar, lag `.tsx`-filer i `src/components/` og bruk dei med `client:load` eller andre [client-direktiv](https://docs.astro.build/en/reference/directives-reference/#client-directives).

### Styling

Vi bruker Tailwind CSS 4 for styling. Globale stilar finn du i `src/styles/global.css`.

## 📚 Lær meir

- [Astro-dokumentasjon](https://docs.astro.build)
- [React-dokumentasjon](https://react.dev)
- [Tailwind CSS-dokumentasjon](https://tailwindcss.com/docs)

## 📞 Kontakt

Har du spørsmål eller tilbakemeldingar? Ta kontakt!

- E-post: kontakt@cominoweb.no
- Nettside: [cominoweb.no](https://cominoweb.no)

---

Laga med ❤️ av Comino Web
