// Global site settings. Edit here — no component changes required.

export const site = {
  name: 'ContextAI',
  tagline: 'Infrastruttura AI e modelli privati per le aziende',
  description:
    'ContextAI progetta infrastrutture AI, modelli privati, sistemi RAG e automazioni per aziende e PMI. Soluzioni sicure, on-premise o in cloud, integrate con i sistemi esistenti.',
  locale: 'it_IT',
  // TODO: replace with real contact details before going live.
  email: 'info@contextai.it',
  // Optional: calendar booking URL (Calendly, Cal.com, Google Calendar...). Empty string hides it.
  bookingUrl: '',
  // Optional: form backend endpoint (e.g. Formspree "https://formspree.io/f/xxxx").
  // If empty, the form opens the visitor's email client with a pre-filled message.
  formEndpoint: '',
  linkedin: '',
};

export const nav = [
  { label: 'Servizi', href: 'servizi/' },
  { label: 'Casi d’uso', href: 'casi-d-uso/' },
  { label: 'Chi siamo', href: 'chi-siamo/' },
];

export const primaryCta = { label: 'Prenota una call', href: 'contatti/' };
