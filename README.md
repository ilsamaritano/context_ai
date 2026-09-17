# ContextAI — sito web

Sito statico realizzato con [Astro](https://astro.build), pubblicato su GitHub Pages.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview
```

## Struttura

```
src/
  data/          Contenuti (testi, servizi, casi d'uso, contatti) — modificare qui
  components/    Componenti riutilizzabili (card, processi, CTA, form, header, footer)
  layouts/       Layout base con SEO (title, meta, Open Graph, JSON-LD)
  pages/         Pagine: /, /servizi/, /casi-d-uso/, /chi-siamo/, /contatti/, /privacy/
  styles/        Design token e stili globali
public/          favicon, immagine Open Graph
```

## Prima di pubblicare

1. `src/data/site.ts`: impostare email reale, eventuale `bookingUrl` (Calendly/Cal.com) e `formEndpoint`.
   Senza `formEndpoint` il modulo apre il client email del visitatore con il messaggio precompilato.
   Per ricevere le richieste direttamente, creare un form su [Formspree](https://formspree.io) e incollarne l'URL.
2. `src/pages/privacy.astro`: completare i dati del titolare e far verificare l'informativa.
3. Se si usa un dominio personalizzato, aggiungere `public/CNAME` con il dominio.

## Deploy su GitHub Pages

1. Pubblicare questa cartella come repository GitHub (branch `main`).
2. In **Settings → Pages**, impostare **Source: GitHub Actions**.
3. Ogni push su `main` esegue `.github/workflows/deploy.yml`, che imposta automaticamente
   URL del sito e base path (funziona sia per `utente.github.io/repo` sia per domini personalizzati).
