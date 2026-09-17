// Use cases page content.

export interface UseCase {
  id: string;
  sector: string;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
}

export const useCases: UseCase[] = [
  {
    id: 'assistente-documentazione',
    sector: 'RAG · Documentazione',
    title: 'Assistente sulla documentazione interna',
    problem:
      'Procedure, manuali e policy sono sparsi tra cartelle condivise, intranet e email. Le persone chiedono ai colleghi più esperti, che perdono tempo a rispondere sempre alle stesse domande.',
    solution:
      'Un assistente basato su RAG che indicizza le fonti documentali, risponde in linguaggio naturale e indica il documento e la sezione da cui proviene ogni risposta, nel rispetto dei permessi di accesso.',
    benefit:
      'Tempi di ricerca ridotti, onboarding più rapido e meno interruzioni per le figure chiave.',
  },
  {
    id: 'customer-support',
    sector: 'Assistenza clienti',
    title: 'Supporto clienti intelligente',
    problem:
      'Il servizio clienti gestisce un volume crescente di richieste ripetitive, con tempi di risposta lunghi e qualità variabile tra operatori.',
    solution:
      'Un sistema che classifica le richieste in ingresso, propone all’operatore una risposta basata su knowledge base e storico, e gestisce in autonomia i casi semplici e ben definiti.',
    benefit:
      'Risposte più rapide e coerenti, operatori concentrati sui casi che richiedono competenza.',
  },
  {
    id: 'motore-ricerca-file',
    sector: 'Ricerca semantica',
    title: 'Motore di ricerca sui file aziendali',
    problem:
      'Anni di progetti, offerte e contratti archiviati su file server: trovare un documento significa ricordarne il nome o la cartella esatta.',
    solution:
      'Un motore di ricerca semantica che comprende il contenuto dei file (PDF, Office, scansioni) e restituisce i documenti pertinenti anche quando la domanda usa parole diverse.',
    benefit:
      'Il patrimonio documentale torna utilizzabile: meno lavoro rifatto, offerte e decisioni più informate.',
  },
  {
    id: 'ticket-workflow',
    sector: 'Automazione',
    title: 'Flussi automatici per i ticket',
    problem:
      'Ticket IT, richieste interne e segnalazioni arrivano senza categoria né priorità. Lo smistamento manuale rallenta la presa in carico.',
    solution:
      'Un flusso che legge ogni ticket, estrae le informazioni rilevanti, assegna categoria, priorità e team competente, e suggerisce la soluzione a partire dai ticket già risolti.',
    benefit:
      'Presa in carico più veloce, carichi di lavoro distribuiti meglio, storico finalmente sfruttato.',
  },
  {
    id: 'classificazione-documenti',
    sector: 'Modelli privati · Estrazione dati',
    title: 'Classificazione e analisi documentale',
    problem:
      'Fatture, ordini, DDT e contratti vengono letti e trascritti a mano nei gestionali, con errori e ritardi nei periodi di picco.',
    solution:
      'Un modello privato che riconosce il tipo di documento, estrae i campi necessari, verifica la coerenza con i dati esistenti e li inserisce nel gestionale, segnalando i casi dubbi per la revisione.',
    benefit:
      'Meno data entry manuale, errori intercettati prima, dati sensibili che non lasciano l’azienda.',
  },
];
