// Home page content blocks.
import type { IconName } from './services';

export const hero = {
  eyebrow: 'Infrastruttura AI · Modelli privati · RAG',
  title: 'Infrastruttura AI e modelli privati per le aziende',
  lead:
    'Progettiamo e realizziamo soluzioni AI su misura: infrastruttura, modelli privati, automazione e sistemi RAG, integrati nei vostri processi e sotto il vostro controllo.',
};

// "Cosa facciamo": three pillars linking to /servizi/ anchors.
export const pillars: { icon: IconName; title: string; text: string; anchor: string }[] = [
  {
    icon: 'infra',
    title: 'Infrastruttura AI',
    text: 'Ambienti on-premise, cloud o ibridi per eseguire modelli e applicazioni AI in modo sicuro, osservabile e con costi sotto controllo.',
    anchor: 'infrastruttura-ai',
  },
  {
    icon: 'model',
    title: 'Modelli privati',
    text: 'Modelli selezionati e adattati ai vostri dati e al vostro linguaggio, ospitati nel vostro perimetro, senza inviare informazioni a terzi.',
    anchor: 'modelli-privati',
  },
  {
    icon: 'rag',
    title: 'Automazione e RAG',
    text: 'Assistenti che rispondono citando i documenti aziendali e flussi automatici integrati con ERP, CRM e sistemi di ticketing.',
    anchor: 'rag-knowledge',
  },
];

export const audience = {
  title: 'Per organizzazioni che vogliono adottare l’AI in modo serio',
  lead:
    'Lavoriamo con realtà che hanno dati, processi e requisiti di sicurezza reali, e che cercano risultati misurabili più che una demo.',
  items: [
    { title: 'Aziende strutturate', text: 'Con più reparti, sistemi informativi consolidati e processi da integrare.' },
    { title: 'PMI', text: 'Che vogliono un vantaggio operativo concreto senza costruire un team AI interno.' },
    { title: 'Industria e manifattura', text: 'Con documentazione tecnica, qualità, manutenzione e dati di produzione.' },
    { title: 'Studi professionali', text: 'Legali, tecnici, commercialisti: archivi documentali ampi e riservati.' },
    { title: 'Organizzazioni complesse', text: 'Con volumi di dati elevati, vincoli normativi o più sedi.' },
    {
      title: 'Pubblica amministrazione',
      text: 'Comuni, università ed enti pubblici che cercano soluzioni private e conformi a GDPR e AI Act.',
      href: 'pubblica-amministrazione/',
    },
  ],
};

export const process = [
  {
    title: 'Analisi dei bisogni',
    text: 'Studiamo processi, dati disponibili e vincoli. Individuiamo i casi d’uso con il miglior rapporto tra valore e complessità.',
  },
  {
    title: 'Architettura della soluzione',
    text: 'Definiamo modelli, infrastruttura, integrazioni e requisiti di sicurezza. Scelte documentate, costi stimati.',
  },
  {
    title: 'Sviluppo e rilascio',
    text: 'Realizziamo in cicli brevi, validando la qualità su dati reali prima di andare in produzione.',
  },
  {
    title: 'Supporto e manutenzione',
    text: 'Monitoriamo prestazioni e costi, aggiorniamo modelli e contenuti, estendiamo la soluzione a nuovi casi.',
  },
];

export const homeUseCases = [
  { title: 'Ricerca nei documenti interni', text: 'Domande in linguaggio naturale su manuali, procedure e archivi, con citazione delle fonti.' },
  { title: 'Assistenti AI per i team', text: 'Supporto a commerciale, assistenza tecnica e amministrazione, sui dati dell’azienda.' },
  { title: 'Automazione dei flussi di lavoro', text: 'Classificazione, estrazione dati e instradamento di email, ticket e documenti.' },
  { title: 'Knowledge base intelligenti', text: 'La conoscenza aziendale organizzata, aggiornata e interrogabile da chi ne ha bisogno.' },
  { title: 'AI privata on-premise o in cloud', text: 'Modelli ospitati nella vostra infrastruttura o in un cloud dedicato, senza dati verso terzi.' },
];

export const differentiators: { icon: IconName; title: string; text: string }[] = [
  { icon: 'layers', title: 'Soluzioni su misura', text: 'Nessun prodotto preconfezionato: ogni architettura parte dai vostri processi e dai vostri dati.' },
  { icon: 'shield', title: 'Sicurezza prima di tutto', text: 'Controllo degli accessi, tracciabilità e dati che restano nel perimetro aziendale, in linea con il GDPR.' },
  { icon: 'plug', title: 'Integrazione con i sistemi esistenti', text: 'ERP, CRM, file server, SharePoint, ticketing: l’AI si inserisce dove il lavoro avviene già.' },
  { icon: 'scale', title: 'Scalabilità', text: 'Si parte da un caso d’uso e si cresce sulla stessa infrastruttura, senza ricominciare da capo.' },
  { icon: 'user', title: 'Approccio enterprise', text: 'Documentazione, metriche di qualità, governance e un referente tecnico dedicato.' },
];
