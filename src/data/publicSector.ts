// Content for /pubblica-amministrazione/.
import type { IconName } from './services';
import type { UseCase } from './useCases';

export const paHero = {
  label: 'Pubblica amministrazione',
  title: 'AI per enti pubblici, università e comuni',
  lead:
    'Sistemi AI privati e conformi per la pubblica amministrazione: dati che restano nel perimetro dell’ente, trasparenza verso i cittadini e integrazione con i sistemi documentali esistenti.',
};

export const paEntities = [
  {
    title: 'Comuni e unioni di comuni',
    text: 'Uffici con organico ridotto, molte richieste ripetitive dai cittadini e un patrimonio di regolamenti, delibere e modulistica.',
  },
  {
    title: 'Università ed enti di ricerca',
    text: 'Regolamenti didattici, bandi, procedure amministrative e archivi di ricerca consultati ogni giorno da studenti e personale.',
  },
  {
    title: 'Regioni, province e città metropolitane',
    text: 'Grandi volumi di atti, procedimenti e documentazione tecnica distribuiti tra più direzioni e sistemi.',
  },
  {
    title: 'Aziende sanitarie ed enti pubblici',
    text: 'Procedure interne, protocolli e dati particolarmente riservati, con requisiti di sicurezza elevati.',
  },
];

export const paRequirements: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'shield',
    title: 'Protezione dei dati e GDPR',
    text: 'Architetture privacy by design, dati trattati nel perimetro dell’ente e supporto nella redazione della valutazione d’impatto (DPIA).',
  },
  {
    icon: 'layers',
    title: 'AI Act e trasparenza',
    text: 'Classificazione del rischio dei sistemi secondo il Regolamento (UE) 2024/1689, documentazione tecnica e informazione chiara verso i cittadini.',
  },
  {
    icon: 'infra',
    title: 'Sovranità del dato e cloud',
    text: 'Soluzioni on-premise nei data center dell’ente o su infrastrutture cloud qualificate, coerenti con la Strategia Cloud Italia.',
  },
  {
    icon: 'plug',
    title: 'Integrazione con i sistemi dell’ente',
    text: 'Collegamento con protocollo informatico, gestione documentale, albo pretorio, portali istituzionali e piattaforme di ticketing.',
  },
  {
    icon: 'model',
    title: 'Modelli aperti e riuso',
    text: 'Preferenza per modelli open-weight e componenti open source, per evitare dipendenze da un singolo fornitore e favorire il riuso tra enti.',
  },
  {
    icon: 'user',
    title: 'Controllo umano e accessibilità',
    text: 'L’AI supporta il funzionario, non decide al suo posto. Interfacce progettate secondo i requisiti di accessibilità.',
  },
];

export const paUseCases: UseCase[] = [
  {
    id: 'sportello-cittadino',
    sector: 'Comuni · Servizi al cittadino',
    title: 'Assistente informativo per i cittadini',
    problem:
      'Gli uffici ricevono ogni giorno le stesse domande su tributi, anagrafe, servizi scolastici e pratiche edilizie, per telefono, email e allo sportello.',
    solution:
      'Un assistente disponibile sul portale istituzionale che risponde sulla base di regolamenti, modulistica e pagine ufficiali dell’ente, indicando sempre la fonte e l’ufficio competente.',
    benefit:
      'Meno richieste ripetitive agli uffici, informazioni coerenti e disponibili a qualsiasi ora.',
  },
  {
    id: 'protocollo-smistamento',
    sector: 'Enti pubblici · Protocollo',
    title: 'Classificazione e smistamento della corrispondenza',
    problem:
      'PEC, istanze e documenti in ingresso vengono letti e assegnati manualmente agli uffici, con ritardi nella presa in carico dei procedimenti.',
    solution:
      'Un sistema che analizza i documenti protocollati, propone classificazione e ufficio destinatario ed estrae i dati principali, lasciando la conferma all’operatore.',
    benefit:
      'Assegnazioni più rapide, meno errori di smistamento, tempi dei procedimenti più prevedibili.',
  },
  {
    id: 'assistente-studenti',
    sector: 'Università · Segreterie',
    title: 'Assistente per studenti e segreterie',
    problem:
      'Le segreterie studenti gestiscono picchi di richieste su immatricolazioni, piani di studio, tasse e bandi, spesso con risposte già presenti nei regolamenti.',
    solution:
      'Un assistente basato su RAG che consulta regolamenti didattici, bandi e FAQ di ateneo, risponde con riferimenti puntuali e inoltra al personale i casi che richiedono una valutazione.',
    benefit:
      'Segreterie meno sovraccariche nei periodi critici, studenti informati in modo tempestivo.',
  },
  {
    id: 'ricerca-atti',
    sector: 'Enti pubblici · Documentazione',
    title: 'Ricerca semantica su atti e delibere',
    problem:
      'Trovare precedenti tra anni di delibere, determine e regolamenti richiede tempo e conoscenza dell’archivio da parte di pochi funzionari esperti.',
    solution:
      'Un motore di ricerca interno che comprende il contenuto degli atti e restituisce i documenti pertinenti a partire da una domanda in linguaggio naturale, nel rispetto dei permessi.',
    benefit:
      'Istruttorie più rapide e meno dipendenza dalla memoria storica dei singoli uffici.',
  },
  {
    id: 'supporto-interno',
    sector: 'Amministrazione · Personale',
    title: 'Knowledge base per il personale',
    problem:
      'Procedure interne, circolari e normativa di riferimento cambiano spesso; il personale nuovo impiega mesi per orientarsi.',
    solution:
      'Una knowledge base interrogabile su procedure, circolari e manuali operativi dell’ente, ospitata nell’infrastruttura dell’amministrazione e aggiornata con continuità.',
    benefit:
      'Inserimento più rapido del personale e applicazione più uniforme delle procedure.',
  },
];

export const paProcess = [
  {
    title: 'Analisi e fattibilità',
    text: 'Incontri con uffici e responsabili IT e privacy: processi, dati, vincoli normativi e infrastruttura disponibile.',
  },
  {
    title: 'Progetto pilota',
    text: 'Un caso d’uso circoscritto, con obiettivi e metriche concordate, per verificare il valore prima di estendere.',
  },
  {
    title: 'Documentazione e rilascio',
    text: 'Documentazione tecnica, supporto alla valutazione d’impatto e agli atti per l’affidamento, messa in produzione.',
  },
  {
    title: 'Formazione e supporto',
    text: 'Formazione del personale, monitoraggio della qualità e manutenzione nel tempo.',
  },
];
