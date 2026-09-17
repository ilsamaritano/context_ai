// Services content. Used by the home page (summary) and /servizi/ (detail).

export type IconName = 'infra' | 'model' | 'rag' | 'flow' | 'shield' | 'layers' | 'plug' | 'scale' | 'user';

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  description: string;
  useCases: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'infrastruttura-ai',
    icon: 'infra',
    title: 'Infrastruttura AI',
    summary:
      'Progettiamo e implementiamo l’infrastruttura su cui far girare l’AI: GPU, orchestrazione, database vettoriali, monitoraggio. On-premise, in cloud o ibrida.',
    description:
      'Progettazione e implementazione di infrastrutture AI scalabili e sicure. Dimensioniamo le risorse di calcolo sul carico reale, scegliamo lo stack più adatto e mettiamo in produzione ambienti osservabili, con controllo degli accessi e dei costi.',
    useCases: [
      'Ambiente on-premise per modelli linguistici su dati riservati',
      'Piattaforma cloud privata per più applicazioni AI interne',
      'Migrazione da API pubbliche a modelli ospitati in azienda',
      'Pipeline di inferenza con monitoraggio di latenza e costi',
    ],
    benefits: [
      'Dati e modelli restano sotto il vostro controllo',
      'Costi prevedibili e dimensionati sull’uso effettivo',
      'Architettura pronta a crescere con nuovi casi d’uso',
    ],
  },
  {
    id: 'modelli-privati',
    icon: 'model',
    title: 'Modelli privati',
    summary:
      'Selezioniamo, adattiamo e rilasciamo modelli AI dedicati alla vostra azienda, addestrati sul vostro linguaggio e sui vostri processi, senza esporre i dati a terzi.',
    description:
      'Sviluppo e adattamento di modelli AI su misura per casi d’uso aziendali. Partiamo da modelli open-weight consolidati, li valutiamo sui vostri dati e, dove serve, li specializziamo con fine-tuning mirato, misurando la qualità con metriche concordate.',
    useCases: [
      'Modello specializzato sul lessico tecnico di settore',
      'Estrazione strutturata di dati da contratti, ordini e fatture',
      'Classificazione automatica di richieste e documenti',
      'Assistente conforme a policy e tono aziendali',
    ],
    benefits: [
      'Nessun dato inviato a fornitori esterni',
      'Prestazioni misurate sui vostri casi reali, non su benchmark generici',
      'Indipendenza da un singolo fornitore di modelli',
    ],
  },
  {
    id: 'rag-knowledge',
    icon: 'rag',
    title: 'RAG e sistemi di conoscenza',
    summary:
      'Sistemi che permettono all’AI di rispondere a partire da documenti, procedure e conoscenza interna, citando sempre le fonti e rispettando i permessi di accesso.',
    description:
      'Sistemi di Retrieval-Augmented Generation che collegano i modelli AI alla documentazione aziendale. Indicizziamo archivi, manuali, ticket e procedure, gestiamo aggiornamenti e permessi, e verifichiamo che le risposte siano fondate sulle fonti corrette.',
    useCases: [
      'Assistente sulla documentazione tecnica e sui manuali di prodotto',
      'Ricerca semantica su archivi, contratti e pratiche',
      'Knowledge base interna per onboarding e procedure',
      'Supporto ai team commerciali su listini e schede tecniche',
    ],
    benefits: [
      'Risposte verificabili, con riferimento al documento di origine',
      'Meno tempo speso a cercare informazioni già esistenti',
      'Accessi coerenti con i permessi dei sistemi aziendali',
    ],
  },
  {
    id: 'automazione',
    icon: 'flow',
    title: 'Automazione',
    summary:
      'Automatizziamo attività ripetitive e flussi di lavoro combinando AI e integrazioni con i sistemi che usate già: ERP, CRM, gestionali, email, ticketing.',
    description:
      'Automazione di attività e processi aziendali ripetitivi tramite AI e integrazioni. Mappiamo il flusso attuale, individuiamo i passaggi dove l’AI porta un vantaggio misurabile e manteniamo il controllo umano nei punti decisionali.',
    useCases: [
      'Smistamento e prima risposta a ticket ed email',
      'Inserimento dati da documenti verso ERP e gestionali',
      'Generazione di report e sintesi periodiche',
      'Controlli di coerenza su ordini, offerte e documentazione',
    ],
    benefits: [
      'Ore di lavoro manuale restituite alle attività a valore',
      'Meno errori nei passaggi ripetitivi',
      'Processi tracciabili, con supervisione dove serve',
    ],
  },
];
