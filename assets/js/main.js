const translations = {
  en: {
    title: "Survivorship & Co‑Survivorship Research – Map & Directory",
    language: {
      label: "Language",
      selectorLabel: "Select language",
    },
    brand: {
      name: "Survivorship & Co‑Survivorship Research",
    },
    nav: {
      map: "Map",
      directory: "Researchers",
      qa: "Q&A",
      submit: "Add yourself",
    },
    hero: {
      heading: "Mapping the people improving life after cardiac arrest",
      description:
        "Discover researchers, clinicians, survivors and co‑survivors. Find collaborators, share ideas, and accelerate survivorship science and services.",
      viewMap: "View the map",
      addEntry: "Add your entry",
    },
    mapSection: {
      title: "Global map",
      description:
        "Explore who is working on survivorship and co‑survivorship around the world. Filter by topic, population and methods.",
    },
    filters: {
      cognition: "Cognition",
      psychologicalSupport: "Psychological support",
      qualityOfLife: "Quality of life",
      returnToWork: "Return to work",
      family: "Family & co‑survivors",
      registryAnalyses: "Registry analyses",
    },
    directory: {
      title: "Researchers & collaborators",
      searchPlaceholder: "Search by name, org, tag, country…",
      searchLabel: "Search directory",
      addYourself: "Add yourself",
    },
    ribbon: {
      title: "Are you active in survivorship research?",
      description:
        "If you don't find yourself on the map, add your details below. See the Q&A for scope and sources.",
    },
    qa: {
      title: "Questions and answers on the map of survivorship",
      intro:
        "This list does not claim to be complete, nor can the accuracy or topicality of the information be guaranteed by the editors of this site.",
      items: [
        {
          question: "Why was the map of survivorship created?",
          answer:
            "To connect survivors, co‑survivors, clinicians and researchers working on life after OHCA. Visibility reduces duplication, speeds collaboration, and supports guideline and service development.",
        },
        {
          question: "What does the map show?",
          answer:
            "Pins for people and groups active in survivorship: research labs, clinical services, survivor-led organisations. Each pin links to a short profile: name, role, institution, country/region, and a 1–2 sentence summary.",
        },
        {
          question: "What is the content and sources on which the map is based?",
          answer:
            "Primarily self-submitted entries reviewed by editors, plus publicly available info from institutional pages, publications and conference programmes. Each entry indicates the source and last update.",
        },
        {
          question: "How can I make an entry on the map myself?",
          answer:
            "Use the form below or submit a pull request against data/resuscitation-network-people.json. We check scope and GDPR consent, then publish and email confirmation. You can request edits or removal anytime.",
        },
      ],
    },
    form: {
      title: "Add yourself to the map",
      intro:
        "This demo form doesn’t submit anywhere. Wire it to your backend, Airtable or Netlify Forms.",
      name: "Full name",
      namePlaceholder: "e.g., Jane Doe",
      role: "Role",
      rolePlaceholder: "Clinical Psychologist / Survivor / Researcher",
      org: "Institution / Group",
      orgPlaceholder: "e.g., King's College London",
      country: "Country / Region",
      countryPlaceholder: "e.g., UK",
      summary: "1–2 sentence summary",
      summaryPlaceholder:
        "I study long-term cognitive outcomes and family-centred aftercare…",
      email: "Email (kept private; used for confirmation)",
      emailPlaceholder: "you@example.org",
      links: "Links (optional)",
      linksPlaceholder: "ORCID, Lab page, LinkedIn…",
      consent:
        "I consent to the publication of my entry on the map and understand I can request edits or deletion at any time.",
      submit: "Submit (demo)",
      update: "Update an existing entry",
      demoSubmit: "Submitted (demo).",
    },
    footer: {
      notice:
        "© {year} Survivorship & Co‑Survivorship Research Network — Content CC BY 4.0 unless noted.",
      data:
        "Data notice: entries are published with consent; removal/edit requests honoured. Contact: {emailLink}",
    },
    status: {
      none: "No entries available yet.",
      all: "Showing all {total} people{query}{updated}.",
      partial: "Showing {visible} of {total} people{query}{updated}.",
      querySuffix: " for “{query}”",
      updatedSuffix: " (dataset updated {date})",
    },
    card: {
      confidence: "Confidence",
      updated: "Updated",
    },
    errors: {
      directory: "We could not load the directory data. Please try again later.",
    },
  },
  fr: {
    title: "Recherche sur la survie et la co-survie – Carte et annuaire",
    language: {
      label: "Langue",
      selectorLabel: "Choisir la langue",
    },
    brand: {
      name: "Recherche sur la survie et la co-survie",
    },
    nav: {
      map: "Carte",
      directory: "Chercheurs",
      qa: "FAQ",
      submit: "Ajoutez-vous",
    },
    hero: {
      heading:
        "Cartographier les personnes qui améliorent la vie après un arrêt cardiaque",
      description:
        "Découvrez des chercheurs, cliniciens, survivants et co-survivants. Trouvez des collaborateurs, partagez des idées et accélérez la science et les services dédiés à la survie.",
      viewMap: "Voir la carte",
      addEntry: "Ajouter votre profil",
    },
    mapSection: {
      title: "Carte mondiale",
      description:
        "Découvrez qui travaille sur la survie et la co-survie dans le monde. Filtrez par thème, population et méthodes.",
    },
    filters: {
      cognition: "Cognition",
      psychologicalSupport: "Soutien psychologique",
      qualityOfLife: "Qualité de vie",
      returnToWork: "Retour au travail",
      family: "Famille et co-survivants",
      registryAnalyses: "Analyses de registres",
    },
    directory: {
      title: "Chercheurs et collaborateurs",
      searchPlaceholder: "Rechercher par nom, organisation, étiquette, pays…",
      searchLabel: "Rechercher dans l'annuaire",
      addYourself: "Ajoutez-vous",
    },
    ribbon: {
      title: "Êtes-vous actif dans la recherche sur la survie ?",
      description:
        "Si vous ne vous trouvez pas sur la carte, ajoutez vos informations ci-dessous. Consultez la FAQ pour connaître le périmètre et les sources.",
    },
    qa: {
      title: "Questions et réponses sur la carte de la survie",
      intro:
        "Cette liste ne prétend pas être exhaustive, et les éditeurs de ce site ne peuvent garantir l'exactitude ni l'actualité des informations.",
      items: [
        {
          question: "Pourquoi la carte de la survie a-t-elle été créée ?",
          answer:
            "Pour mettre en relation survivants, co-survivants, cliniciens et chercheurs travaillant sur la vie après un ACR. La visibilité réduit les doublons, accélère la collaboration et soutient l'élaboration de lignes directrices et de services.",
        },
        {
          question: "Que montre la carte ?",
          answer:
            "Des repères pour les personnes et groupes actifs dans la survie : laboratoires de recherche, services cliniques, organisations dirigées par des survivants. Chaque repère mène à un court profil : nom, rôle, institution, pays/région et résumé en 1–2 phrases.",
        },
        {
          question: "Sur quels contenus et sources la carte s'appuie-t-elle ?",
          answer:
            "Essentiellement des contributions auto-soumises, revues par les éditeurs, ainsi que des informations publiques provenant de pages institutionnelles, publications et programmes de conférences. Chaque entrée indique la source et la dernière mise à jour.",
        },
        {
          question: "Comment puis-je moi-même ajouter une entrée sur la carte ?",
          answer:
            "Utilisez le formulaire ci-dessous ou soumettez une pull request sur data/resuscitation-network-people.json. Nous vérifions le périmètre et le consentement RGPD, puis publions et envoyons une confirmation par e-mail. Vous pouvez demander des modifications ou une suppression à tout moment.",
        },
      ],
    },
    form: {
      title: "Ajoutez-vous à la carte",
      intro:
        "Ce formulaire de démonstration n'envoie rien. Connectez-le à votre backend, Airtable ou Netlify Forms.",
      name: "Nom complet",
      namePlaceholder: "ex. Jane Doe",
      role: "Rôle",
      rolePlaceholder: "Psychologue clinicien / Survivant / Chercheur",
      org: "Institution / Groupe",
      orgPlaceholder: "ex. King's College London",
      country: "Pays / Région",
      countryPlaceholder: "ex. France",
      summary: "Résumé en 1–2 phrases",
      summaryPlaceholder:
        "J'étudie les résultats cognitifs à long terme et l'accompagnement centré sur la famille…",
      email: "E-mail (non publié ; utilisé pour la confirmation)",
      emailPlaceholder: "vous@example.org",
      links: "Liens (optionnel)",
      linksPlaceholder: "ORCID, page du laboratoire, LinkedIn…",
      consent:
        "Je consens à la publication de mon entrée sur la carte et comprends que je peux demander des modifications ou une suppression à tout moment.",
      submit: "Envoyer (démo)",
      update: "Mettre à jour une entrée existante",
      demoSubmit: "Envoyé (démo).",
    },
    footer: {
      notice:
        "© {year} Réseau de recherche sur la survie et la co-survie — Contenu CC BY 4.0 sauf mention contraire.",
      data:
        "Avis sur les données : les entrées sont publiées avec consentement ; les demandes de modification ou de suppression sont respectées. Contact : {emailLink}",
    },
    status: {
      none: "Aucune entrée disponible pour le moment.",
      all: "Affichage de toutes les {total} personnes{query}{updated}.",
      partial: "Affichage de {visible} personnes sur {total}{query}{updated}.",
      querySuffix: " pour « {query} »",
      updatedSuffix: " (jeu de données mis à jour le {date})",
    },
    card: {
      confidence: "Confiance",
      updated: "Mis à jour",
    },
    errors: {
      directory: "Impossible de charger l'annuaire. Veuillez réessayer plus tard.",
    },
  },
  pl: {
    title: "Badania nad przeżyciem i współprzeżyciem – mapa i katalog",
    language: {
      label: "Język",
      selectorLabel: "Wybierz język",
    },
    brand: {
      name: "Badania nad przeżyciem i współprzeżyciem",
    },
    nav: {
      map: "Mapa",
      directory: "Badacze",
      qa: "Pytania i odpowiedzi",
      submit: "Dodaj się",
    },
    hero: {
      heading:
        "Mapowanie osób poprawiających życie po zatrzymaniu krążenia",
      description:
        "Odkryj badaczy, klinicystów, osoby po NZK i współocalałych. Znajdź współpracowników, dziel się pomysłami i przyspiesz rozwój nauki oraz usług dotyczących przeżycia.",
      viewMap: "Zobacz mapę",
      addEntry: "Dodaj swój wpis",
    },
    mapSection: {
      title: "Mapa globalna",
      description:
        "Sprawdź, kto na świecie zajmuje się przeżyciem i współprzeżyciem. Filtrowanie według tematu, populacji i metod.",
    },
    filters: {
      cognition: "Kognicja",
      psychologicalSupport: "Wsparcie psychologiczne",
      qualityOfLife: "Jakość życia",
      returnToWork: "Powrót do pracy",
      family: "Rodzina i współocalali",
      registryAnalyses: "Analizy rejestrów",
    },
    directory: {
      title: "Badacze i współpracownicy",
      searchPlaceholder: "Szukaj po nazwisku, organizacji, etykiecie, kraju…",
      searchLabel: "Szukaj w katalogu",
      addYourself: "Dodaj się",
    },
    ribbon: {
      title: "Czy działasz w badaniach nad przeżyciem?",
      description:
        "Jeśli nie ma Cię na mapie, dodaj swoje dane poniżej. Zakres i źródła opisujemy w sekcji Pytań i odpowiedzi.",
    },
    qa: {
      title: "Pytania i odpowiedzi dotyczące mapy przeżycia",
      intro:
        "Lista nie jest wyczerpująca, a redakcja serwisu nie może zagwarantować dokładności ani aktualności informacji.",
      items: [
        {
          question: "Dlaczego powstała mapa przeżycia?",
          answer:
            "Aby połączyć osoby po NZK, współocalałych, klinicystów i badaczy pracujących nad życiem po NZK. Widoczność ogranicza dublowanie wysiłków, przyspiesza współpracę oraz wspiera rozwój wytycznych i usług.",
        },
        {
          question: "Co pokazuje mapa?",
          answer:
            "Pinezki reprezentujące osoby i zespoły aktywne w obszarze przeżycia: laboratoria badawcze, usługi kliniczne, organizacje prowadzone przez ocalałych. Każda pinezka prowadzi do krótkiego profilu z imieniem, rolą, instytucją, krajem/regionem i 1–2-zdaniowym opisem.",
        },
        {
          question: "Na jakich treściach i źródłach opiera się mapa?",
          answer:
            "Głównie na zgłoszeniach własnych weryfikowanych przez redakcję, a także na publicznie dostępnych informacjach ze stron instytucji, publikacji i programów konferencji. Każdy wpis wskazuje źródło i datę ostatniej aktualizacji.",
        },
        {
          question: "Jak mogę samodzielnie dodać wpis do mapy?",
          answer:
            "Skorzystaj z poniższego formularza lub prześlij pull request do pliku data/resuscitation-network-people.json. Sprawdzamy zakres i zgodę RODO, następnie publikujemy wpis i wysyłamy potwierdzenie e-mailem. W każdej chwili możesz poprosić o zmiany lub usunięcie.",
        },
      ],
    },
    form: {
      title: "Dodaj się do mapy",
      intro:
        "Ten formularz demonstracyjny niczego nie wysyła. Połącz go ze swoim backendem, Airtable lub Netlify Forms.",
      name: "Imię i nazwisko",
      namePlaceholder: "np. Janina Kowalska",
      role: "Rola",
      rolePlaceholder: "Psycholog kliniczny / Osoba po NZK / Badacz",
      org: "Instytucja / Zespół",
      orgPlaceholder: "np. King's College London",
      country: "Kraj / Region",
      countryPlaceholder: "np. Polska",
      summary: "Krótki opis (1–2 zdania)",
      summaryPlaceholder:
        "Badam długoterminowe funkcje poznawcze i opiekę skoncentrowaną na rodzinie…",
      email: "E-mail (niewidoczny publicznie; używany do potwierdzenia)",
      emailPlaceholder: "twoj@example.org",
      links: "Linki (opcjonalnie)",
      linksPlaceholder: "ORCID, strona zespołu, LinkedIn…",
      consent:
        "Wyrażam zgodę na opublikowanie mojego wpisu na mapie i rozumiem, że mogę w każdej chwili poprosić o zmiany lub usunięcie.",
      submit: "Wyślij (demo)",
      update: "Zaktualizuj istniejący wpis",
      demoSubmit: "Wysłano (demo).",
    },
    footer: {
      notice:
        "© {year} Sieć badań nad przeżyciem i współprzeżyciem — treści CC BY 4.0, o ile nie zaznaczono inaczej.",
      data:
        "Informacja o danych: wpisy publikujemy za zgodą; prośby o zmiany lub usunięcie są realizowane. Kontakt: {emailLink}",
    },
    status: {
      none: "Brak dostępnych wpisów.",
      all: "Wyświetlamy wszystkie {total} osoby{query}{updated}.",
      partial: "Wyświetlamy {visible} z {total} osób{query}{updated}.",
      querySuffix: " dla „{query}”",
      updatedSuffix: " (zbiór danych zaktualizowany {date})",
    },
    card: {
      confidence: "Zaufanie",
      updated: "Zaktualizowano",
    },
    errors: {
      directory: "Nie udało się wczytać katalogu. Spróbuj ponownie później.",
    },
  },
  el: {
    title: "Έρευνα Επιβίωσης και Συνεπιβίωσης – Χάρτης & Κατάλογος",
    language: {
      label: "Γλώσσα",
      selectorLabel: "Επιλέξτε γλώσσα",
    },
    brand: {
      name: "Έρευνα Επιβίωσης και Συνεπιβίωσης",
    },
    nav: {
      map: "Χάρτης",
      directory: "Ερευνητές",
      qa: "Ερωτήσεις & Απαντήσεις",
      submit: "Προσθέστε τον εαυτό σας",
    },
    hero: {
      heading:
        "Χαρτογραφούμε τους ανθρώπους που βελτιώνουν τη ζωή μετά από καρδιακή ανακοπή",
      description:
        "Ανακαλύψτε ερευνητές, κλινικούς, επιζώντες και συνεπιζώντες. Βρείτε συνεργάτες, μοιραστείτε ιδέες και επιταχύνετε την επιστήμη και τις υπηρεσίες επιβίωσης.",
      viewMap: "Δείτε τον χάρτη",
      addEntry: "Προσθέστε την καταχώρισή σας",
    },
    mapSection: {
      title: "Παγκόσμιος χάρτης",
      description:
        "Εξερευνήστε ποιοι εργάζονται για την επιβίωση και τη συνεπιβίωση σε όλον τον κόσμο. Φιλτράρετε ανά θέμα, πληθυσμό και μεθόδους.",
    },
    filters: {
      cognition: "Γνώση",
      psychologicalSupport: "Ψυχολογική υποστήριξη",
      qualityOfLife: "Ποιότητα ζωής",
      returnToWork: "Επανένταξη στην εργασία",
      family: "Οικογένεια & συνεπιζώντες",
      registryAnalyses: "Αναλύσεις μητρώων",
    },
    directory: {
      title: "Ερευνητές & συνεργάτες",
      searchPlaceholder: "Αναζήτηση με όνομα, οργανισμό, ετικέτα, χώρα…",
      searchLabel: "Αναζήτηση στον κατάλογο",
      addYourself: "Προσθέστε τον εαυτό σας",
    },
    ribbon: {
      title: "Είστε ενεργοί στην έρευνα επιβίωσης;",
      description:
        "Αν δεν βρίσκετε τον εαυτό σας στον χάρτη, προσθέστε τα στοιχεία σας παρακάτω. Δείτε τις Ερωτήσεις & Απαντήσεις για το εύρος και τις πηγές.",
    },
    qa: {
      title: "Ερωτήσεις και απαντήσεις για τον χάρτη επιβίωσης",
      intro:
        "Η λίστα δεν ισχυρίζεται ότι είναι πλήρης και οι επιμελητές του ιστότοπου δεν μπορούν να εγγυηθούν την ακρίβεια ή την επικαιρότητα των πληροφοριών.",
      items: [
        {
          question: "Γιατί δημιουργήθηκε ο χάρτης επιβίωσης;",
          answer:
            "Για να συνδέσει επιζώντες, συνεπιζώντες, κλινικούς και ερευνητές που εργάζονται για τη ζωή μετά από εξωνοσοκομειακή καρδιακή ανακοπή. Η ορατότητα μειώνει τις διπλές προσπάθειες, επιταχύνει τη συνεργασία και στηρίζει την ανάπτυξη κατευθυντήριων οδηγιών και υπηρεσιών.",
        },
        {
          question: "Τι δείχνει ο χάρτης;",
          answer:
            "Εικονίδια για άτομα και ομάδες που δραστηριοποιούνται στην επιβίωση: ερευνητικά εργαστήρια, κλινικές υπηρεσίες, οργανώσεις επιζώντων. Κάθε εικονίδιο οδηγεί σε σύντομο προφίλ με όνομα, ρόλο, ίδρυμα, χώρα/περιοχή και περίληψη 1–2 προτάσεων.",
        },
        {
          question: "Σε ποιο περιεχόμενο και ποιες πηγές βασίζεται ο χάρτης;",
          answer:
            "Κυρίως σε καταχωρίσεις που υποβάλλονται από τους ίδιους και ελέγχονται από τους επιμελητές, καθώς και σε δημόσια διαθέσιμες πληροφορίες από ιστοσελίδες ιδρυμάτων, δημοσιεύσεις και προγράμματα συνεδρίων. Κάθε καταχώριση αναφέρει την πηγή και την τελευταία ενημέρωση.",
        },
        {
          question: "Πώς μπορώ να καταχωρίσω ο ίδιος στον χάρτη;",
          answer:
            "Χρησιμοποιήστε την παρακάτω φόρμα ή υποβάλετε ένα pull request στο data/resuscitation-network-people.json. Ελέγχουμε το πεδίο και τη συγκατάθεση βάσει GDPR, στη συνέχεια δημοσιεύουμε και αποστέλλουμε επιβεβαίωση. Μπορείτε να ζητήσετε αλλαγές ή διαγραφή οποιαδήποτε στιγμή.",
        },
      ],
    },
    form: {
      title: "Προσθέστε τον εαυτό σας στον χάρτη",
      intro:
        "Αυτή η δοκιμαστική φόρμα δεν υποβάλλει δεδομένα. Συνδέστε την με το backend σας, το Airtable ή το Netlify Forms.",
      name: "Ονοματεπώνυμο",
      namePlaceholder: "π.χ. Μαρία Παπαδοπούλου",
      role: "Ρόλος",
      rolePlaceholder: "Κλινικός ψυχολόγος / Επιζών / Ερευνητής",
      org: "Ίδρυμα / Ομάδα",
      orgPlaceholder: "π.χ. King's College London",
      country: "Χώρα / Περιοχή",
      countryPlaceholder: "π.χ. Ελλάδα",
      summary: "Περίληψη 1–2 προτάσεων",
      summaryPlaceholder:
        "Μελετώ τα μακροπρόθεσμα γνωστικά αποτελέσματα και την οικογενειοκεντρική φροντίδα…",
      email: "Email (δεν δημοσιεύεται· χρησιμοποιείται για επιβεβαίωση)",
      emailPlaceholder: "esy@example.org",
      links: "Σύνδεσμοι (προαιρετικό)",
      linksPlaceholder: "ORCID, σελίδα εργαστηρίου, LinkedIn…",
      consent:
        "Συναινώ στη δημοσίευση της καταχώρισής μου στον χάρτη και κατανοώ ότι μπορώ να ζητήσω αλλαγές ή διαγραφή οποιαδήποτε στιγμή.",
      submit: "Υποβολή (δοκιμή)",
      update: "Ενημέρωση υπάρχουσας καταχώρισης",
      demoSubmit: "Υποβλήθηκε (δοκιμή).",
    },
    footer: {
      notice:
        "© {year} Δίκτυο έρευνας επιβίωσης & συνεπιβίωσης — Περιεχόμενο CC BY 4.0 εκτός αν αναφέρεται διαφορετικά.",
      data:
        "Σημείωση δεδομένων: οι καταχωρίσεις δημοσιεύονται με συγκατάθεση· αιτήματα αλλαγής ή διαγραφής γίνονται δεκτά. Επικοινωνία: {emailLink}",
    },
    status: {
      none: "Δεν υπάρχουν ακόμη καταχωρίσεις.",
      all: "Εμφανίζονται όλα τα {total} άτομα{query}{updated}.",
      partial: "Εμφανίζονται {visible} από τα {total} άτομα{query}{updated}.",
      querySuffix: " για «{query}»",
      updatedSuffix: " (το σύνολο δεδομένων ενημερώθηκε {date})",
    },
    card: {
      confidence: "Βεβαιότητα",
      updated: "Ενημερώθηκε",
    },
    errors: {
      directory: "Δεν ήταν δυνατή η φόρτωση του καταλόγου. Δοκιμάστε ξανά αργότερα.",
    },
  },
  fi: {
    title: "Selviytymis- ja kanssaselviytymistutkimus – kartta ja hakemisto",
    language: {
      label: "Kieli",
      selectorLabel: "Valitse kieli",
    },
    brand: {
      name: "Selviytymis- ja kanssaselviytymistutkimus",
    },
    nav: {
      map: "Kartta",
      directory: "Tutkijat",
      qa: "UKK",
      submit: "Lisää itsesi",
    },
    hero: {
      heading:
        "Kartoitamme ihmiset, jotka parantavat elämää sydänpysähdyksen jälkeen",
      description:
        "Löydä tutkijoita, kliinikoita, selviytyjiä ja kanssaselviytyjiä. Löydä yhteistyökumppaneita, jaa ideoita ja vauhdita selviytymistutkimusta ja -palveluja.",
      viewMap: "Näytä kartta",
      addEntry: "Lisää tietosi",
    },
    mapSection: {
      title: "Maailmankartta",
      description:
        "Tutustu siihen, kuka työskentelee selviytymisen ja kanssaselviytymisen parissa eri puolilla maailmaa. Suodata teeman, kohderyhmän ja menetelmien mukaan.",
    },
    filters: {
      cognition: "Kognitio",
      psychologicalSupport: "Psykologinen tuki",
      qualityOfLife: "Elämänlaatu",
      returnToWork: "Työhön paluu",
      family: "Perhe ja kanssaselviytyjät",
      registryAnalyses: "Rekisterianalyysit",
    },
    directory: {
      title: "Tutkijat ja yhteistyökumppanit",
      searchPlaceholder: "Hae nimellä, organisaatiolla, tunnisteella, maalla…",
      searchLabel: "Hae hakemistosta",
      addYourself: "Lisää itsesi",
    },
    ribbon: {
      title: "Oletko mukana selviytymistutkimuksessa?",
      description:
        "Jos et löydä itseäsi kartalta, lisää tietosi alle. Lue UKK:sta laajuus ja lähteet.",
    },
    qa: {
      title: "Kysymyksiä ja vastauksia selviytymiskartasta",
      intro:
        "Lista ei ole täydellinen, eikä sivuston toimittajat voi taata tietojen tarkkuutta tai ajantasaisuutta.",
      items: [
        {
          question: "Miksi selviytymiskartta luotiin?",
          answer:
            "Yhdistämään selviytyjiä, kanssaselviytyjiä, kliinikoita ja tutkijoita, jotka työskentelevät elämän eteen sydänpysähdyksen jälkeen. Näkyvyys vähentää päällekkäistä työtä, nopeuttaa yhteistyötä ja tukee ohjeiden ja palveluiden kehittämistä.",
        },
        {
          question: "Mitä kartta näyttää?",
          answer:
            "Karttamerkkejä ihmisille ja ryhmille, jotka toimivat selviytymisen parissa: tutkimuslaboratorioita, kliinisiä palveluja, selviytyjien johtamia järjestöjä. Jokainen merkki vie lyhyeen profiiliin, jossa on nimi, rooli, organisaatio, maa/alue ja 1–2 lauseen kuvaus.",
        },
        {
          question: "Mihin sisältöön ja lähteisiin kartta perustuu?",
          answer:
            "Pääasiassa itse lähetettyihin merkintöihin, jotka toimittajat tarkistavat, sekä julkisiin tietoihin organisaatioiden sivuilta, julkaisuista ja konferenssiohjelmista. Jokainen merkintä kertoo lähteen ja viimeisimmän päivityksen.",
        },
        {
          question: "Miten voin lisätä merkinnän itse kartalle?",
          answer:
            "Käytä alla olevaa lomaketta tai tee pull request tiedostoon data/resuscitation-network-people.json. Tarkistamme laajuuden ja GDPR-suostumuksen, julkaisemmeko merkinnän ja lähetämme vahvistuksen. Voit pyytää muutoksia tai poistamista milloin tahansa.",
        },
      ],
    },
    form: {
      title: "Lisää itsesi kartalle",
      intro:
        "Tämä demolomake ei lähetä tietoja. Kytke se taustajärjestelmääsi, Airtableen tai Netlify Formsiin.",
      name: "Koko nimi",
      namePlaceholder: "esim. Maija Meikäläinen",
      role: "Rooli",
      rolePlaceholder: "Kliininen psykologi / Selviytyjä / Tutkija",
      org: "Organisaatio / Ryhmä",
      orgPlaceholder: "esim. King's College London",
      country: "Maa / Alue",
      countryPlaceholder: "esim. Suomi",
      summary: "1–2 lauseen yhteenveto",
      summaryPlaceholder:
        "Tutkin pitkäaikaisia kognitiivisia vaikutuksia ja perhekeskeistä jälkihoitoa…",
      email: "Sähköposti (ei julkaista; käytetään vahvistukseen)",
      emailPlaceholder: "sinä@example.org",
      links: "Linkit (valinnainen)",
      linksPlaceholder: "ORCID, tutkimussivusto, LinkedIn…",
      consent:
        "Annan suostumukseni tietojeni julkaisemiseen kartalla ja ymmärrän, että voin pyytää muutoksia tai poistamista milloin tahansa.",
      submit: "Lähetä (demo)",
      update: "Päivitä olemassa oleva merkintä",
      demoSubmit: "Lähetetty (demo).",
    },
    footer: {
      notice:
        "© {year} Selviytymis- ja kanssaselviytymistutkimuksen verkosto — Sisältö CC BY 4.0 ellei toisin mainita.",
      data:
        "Tietohuomautus: merkinnät julkaistaan suostumuksella; muutos- ja poistopyynnöt toteutetaan. Yhteys: {emailLink}",
    },
    status: {
      none: "Tietueita ei ole vielä saatavilla.",
      all: "Näytetään kaikki {total} henkilöä{query}{updated}.",
      partial: "Näytetään {visible} / {total} henkilöä{query}{updated}.",
      querySuffix: " haulle ”{query}”",
      updatedSuffix: " (aineisto päivitetty {date})",
    },
    card: {
      confidence: "Varmuus",
      updated: "Päivitetty",
    },
    errors: {
      directory: "Hakemiston lataaminen epäonnistui. Yritä myöhemmin uudelleen.",
    },
  },
  sv: {
    title: "Forskning om överlevnad och medöverlevnad – karta och katalog",
    language: {
      label: "Språk",
      selectorLabel: "Välj språk",
    },
    brand: {
      name: "Forskning om överlevnad och medöverlevnad",
    },
    nav: {
      map: "Karta",
      directory: "Forskare",
      qa: "Frågor & svar",
      submit: "Lägg till dig",
    },
    hero: {
      heading:
        "Vi kartlägger människorna som förbättrar livet efter hjärtstopp",
      description:
        "Upptäck forskare, kliniker, överlevare och medöverlevare. Hitta samarbetspartner, dela idéer och påskynda forskning och tjänster kring överlevnad.",
      viewMap: "Visa kartan",
      addEntry: "Lägg till din post",
    },
    mapSection: {
      title: "Global karta",
      description:
        "Utforska vem som arbetar med överlevnad och medöverlevnad runt om i världen. Filtrera efter ämne, målgrupp och metod.",
    },
    filters: {
      cognition: "Kognition",
      psychologicalSupport: "Psykologiskt stöd",
      qualityOfLife: "Livskvalitet",
      returnToWork: "Återgång i arbete",
      family: "Familj och medöverlevare",
      registryAnalyses: "Registeranalyser",
    },
    directory: {
      title: "Forskare & samarbetspartners",
      searchPlaceholder: "Sök efter namn, organisation, tagg, land…",
      searchLabel: "Sök i katalogen",
      addYourself: "Lägg till dig",
    },
    ribbon: {
      title: "Är du aktiv inom forskning om överlevnad?",
      description:
        "Om du inte hittar dig själv på kartan, lägg till dina uppgifter nedan. Se Frågor & svar för omfattning och källor.",
    },
    qa: {
      title: "Frågor och svar om kartan över överlevnad",
      intro:
        "Listan gör inte anspråk på att vara komplett och redaktörerna kan inte garantera informationens riktighet eller aktualitet.",
      items: [
        {
          question: "Varför skapades kartan över överlevnad?",
          answer:
            "För att koppla samman överlevare, medöverlevare, kliniker och forskare som arbetar med livet efter hjärtstopp utanför sjukhus. Synlighet minskar dubbelarbete, påskyndar samarbete och stödjer utvecklingen av riktlinjer och tjänster.",
        },
        {
          question: "Vad visar kartan?",
          answer:
            "Markörer för personer och grupper som är aktiva inom överlevnad: forskningslaboratorier, kliniska verksamheter, organisationer ledda av överlevare. Varje markör länkar till en kort profil med namn, roll, institution, land/region och en sammanfattning på 1–2 meningar.",
        },
        {
          question: "Vilket innehåll och vilka källor ligger till grund för kartan?",
          answer:
            "Främst självinsända poster som granskas av redaktörer, samt offentligt tillgänglig information från institutionssidor, publikationer och konferensprogram. Varje post anger källa och senaste uppdatering.",
        },
        {
          question: "Hur kan jag själv lägga in en post på kartan?",
          answer:
            "Använd formuläret nedan eller skicka en pull request till data/resuscitation-network-people.json. Vi kontrollerar omfattning och GDPR-samtycke, publicerar posten och skickar en bekräftelse. Du kan begära ändringar eller borttagning när som helst.",
        },
      ],
    },
    form: {
      title: "Lägg till dig på kartan",
      intro:
        "Det här demot formuläret skickar inget. Koppla det till din backend, Airtable eller Netlify Forms.",
      name: "Fullständigt namn",
      namePlaceholder: "t.ex. Anna Andersson",
      role: "Roll",
      rolePlaceholder: "Klinisk psykolog / Överlevare / Forskare",
      org: "Institution / Grupp",
      orgPlaceholder: "t.ex. King's College London",
      country: "Land / Region",
      countryPlaceholder: "t.ex. Sverige",
      summary: "Sammanfattning i 1–2 meningar",
      summaryPlaceholder:
        "Jag studerar långsiktiga kognitiva resultat och familjecentrerad eftervård…",
      email: "E-post (publiceras inte; används för bekräftelse)",
      emailPlaceholder: "du@example.org",
      links: "Länkar (valfritt)",
      linksPlaceholder: "ORCID, labsida, LinkedIn…",
      consent:
        "Jag samtycker till att min post publiceras på kartan och förstår att jag kan begära ändringar eller radering när som helst.",
      submit: "Skicka (demo)",
      update: "Uppdatera en befintlig post",
      demoSubmit: "Skickat (demo).",
    },
    footer: {
      notice:
        "© {year} Nätverket för forskning om överlevnad och medöverlevnad — Innehåll CC BY 4.0 om inget annat anges.",
      data:
        "Datainformation: poster publiceras med samtycke; begäran om ändring eller borttagning uppfylls. Kontakt: {emailLink}",
    },
    status: {
      none: "Inga poster tillgängliga ännu.",
      all: "Visar alla {total} personer{query}{updated}.",
      partial: "Visar {visible} av {total} personer{query}{updated}.",
      querySuffix: " för ”{query}”",
      updatedSuffix: " (dataset uppdaterat {date})",
    },
    card: {
      confidence: "Tillförlitlighet",
      updated: "Uppdaterad",
    },
    errors: {
      directory: "Det gick inte att läsa in katalogen. Försök igen senare.",
    },
  },
  it: {
    title: "Ricerca sulla sopravvivenza e co-sopravvivenza – mappa e directory",
    language: {
      label: "Lingua",
      selectorLabel: "Seleziona lingua",
    },
    brand: {
      name: "Ricerca sulla sopravvivenza e co-sopravvivenza",
    },
    nav: {
      map: "Mappa",
      directory: "Ricercatori",
      qa: "Domande e risposte",
      submit: "Aggiungiti",
    },
    hero: {
      heading:
        "Mappiamo le persone che migliorano la vita dopo un arresto cardiaco",
      description:
        "Scopri ricercatori, clinici, sopravvissuti e co-sopravvissuti. Trova collaboratori, condividi idee e accelera la scienza e i servizi dedicati alla sopravvivenza.",
      viewMap: "Guarda la mappa",
      addEntry: "Aggiungi la tua scheda",
    },
    mapSection: {
      title: "Mappa globale",
      description:
        "Esplora chi lavora sulla sopravvivenza e co-sopravvivenza nel mondo. Filtra per tema, popolazione e metodi.",
    },
    filters: {
      cognition: "Cognizione",
      psychologicalSupport: "Supporto psicologico",
      qualityOfLife: "Qualità della vita",
      returnToWork: "Rientro al lavoro",
      family: "Famiglia e co-sopravvissuti",
      registryAnalyses: "Analisi di registri",
    },
    directory: {
      title: "Ricercatori e collaboratori",
      searchPlaceholder: "Cerca per nome, ente, tag, paese…",
      searchLabel: "Cerca nella directory",
      addYourself: "Aggiungiti",
    },
    ribbon: {
      title: "Sei attivo nella ricerca sulla sopravvivenza?",
      description:
        "Se non ti trovi sulla mappa, aggiungi i tuoi dati qui sotto. Consulta le Domande e risposte per ambito e fonti.",
    },
    qa: {
      title: "Domande e risposte sulla mappa della sopravvivenza",
      intro:
        "Questo elenco non pretende di essere completo e i curatori del sito non possono garantire accuratezza o aggiornamento delle informazioni.",
      items: [
        {
          question: "Perché è stata creata la mappa della sopravvivenza?",
          answer:
            "Per mettere in contatto sopravvissuti, co-sopravvissuti, clinici e ricercatori che lavorano sulla vita dopo un arresto cardiaco extraospedaliero. La visibilità riduce le duplicazioni, accelera la collaborazione e supporta lo sviluppo di linee guida e servizi.",
        },
        {
          question: "Cosa mostra la mappa?",
          answer:
            "Puntatori per persone e gruppi attivi nella sopravvivenza: laboratori di ricerca, servizi clinici, organizzazioni guidate da sopravvissuti. Ogni puntatore rimanda a un breve profilo con nome, ruolo, istituzione, paese/regione e un riassunto di 1–2 frasi.",
        },
        {
          question: "Quali contenuti e fonti alimentano la mappa?",
          answer:
            "Principalmente schede inviate dagli stessi interessati e revisionate dai curatori, oltre a informazioni pubbliche provenienti da siti istituzionali, pubblicazioni e programmi di conferenze. Ogni scheda indica la fonte e l'ultimo aggiornamento.",
        },
        {
          question: "Come posso inserire personalmente una scheda sulla mappa?",
          answer:
            "Usa il modulo qui sotto o invia una pull request al file data/resuscitation-network-people.json. Verifichiamo l'ambito e il consenso GDPR, quindi pubblichiamo e inviamo una conferma via e-mail. Puoi richiedere modifiche o rimozione in qualsiasi momento.",
        },
      ],
    },
    form: {
      title: "Aggiungiti alla mappa",
      intro:
        "Questo modulo dimostrativo non invia dati. Collegalo al tuo backend, ad Airtable o a Netlify Forms.",
      name: "Nome e cognome",
      namePlaceholder: "es. Maria Rossi",
      role: "Ruolo",
      rolePlaceholder: "Psicologa clinica / Sopravvissuto / Ricercatore",
      org: "Istituzione / Gruppo",
      orgPlaceholder: "es. King's College London",
      country: "Paese / Regione",
      countryPlaceholder: "es. Italia",
      summary: "Riassunto in 1–2 frasi",
      summaryPlaceholder:
        "Studio gli esiti cognitivi a lungo termine e l'assistenza centrata sulla famiglia…",
      email: "Email (non pubblicata; usata per la conferma)",
      emailPlaceholder: "tu@example.org",
      links: "Link (opzionale)",
      linksPlaceholder: "ORCID, pagina del laboratorio, LinkedIn…",
      consent:
        "Acconsento alla pubblicazione della mia scheda sulla mappa e comprendo che posso richiedere modifiche o cancellazione in qualsiasi momento.",
      submit: "Invia (demo)",
      update: "Aggiorna una scheda esistente",
      demoSubmit: "Inviato (demo).",
    },
    footer: {
      notice:
        "© {year} Rete di ricerca sulla sopravvivenza e co-sopravvivenza — Contenuti CC BY 4.0 salvo diversa indicazione.",
      data:
        "Informativa sui dati: le schede sono pubblicate con consenso; le richieste di modifica o cancellazione vengono soddisfatte. Contatto: {emailLink}",
    },
    status: {
      none: "Nessuna scheda disponibile al momento.",
      all: "Sono visualizzate tutte le {total} persone{query}{updated}.",
      partial: "Sono visualizzate {visible} persone su {total}{query}{updated}.",
      querySuffix: " per «{query}»",
      updatedSuffix: " (dataset aggiornato {date})",
    },
    card: {
      confidence: "Affidabilità",
      updated: "Aggiornato",
    },
    errors: {
      directory: "Impossibile caricare la directory. Riprova più tardi.",
    },
  },
};

const DEFAULT_LANGUAGE = "en";
const DATA_URL = "data/resuscitation-network-people.json";

const cardsContainer = document.getElementById("cards");
const statusEl = document.getElementById("directory-status");
const searchInput = document.getElementById("search");
const languageSelect = document.getElementById("language-select");
const formEl = document.querySelector(".form");

const SUPPORTED_LANGUAGES = Object.keys(translations);

const state = {
  total: 0,
  directoryItems: [],
  meta: {},
  rawMeta: {},
  mapController: {
    filter: () => {},
    setPeople: () => {},
    initialized: false,
  },
  people: [],
  rawPeople: [],
  locales: {},
  language: DEFAULT_LANGUAGE,
};

const normalise = (value) => (value ?? "").toString().toLowerCase();

const resolvePath = (source, key) =>
  key.split(".").reduce((acc, segment) => {
    if (acc === undefined || acc === null) {
      return undefined;
    }
    if (Array.isArray(acc)) {
      const index = Number(segment);
      return Number.isNaN(index) ? undefined : acc[index];
    }
    return acc[segment];
  }, source);

const translate = (key, replacements = {}, lang = state.language ?? DEFAULT_LANGUAGE) => {
  const languagesToTry = lang === DEFAULT_LANGUAGE ? [lang] : [lang, DEFAULT_LANGUAGE];
  let template;
  for (const code of languagesToTry) {
    if (!code) continue;
    const candidate = resolvePath(translations[code], key);
    if (typeof candidate === "string") {
      template = candidate;
      break;
    }
  }
  if (typeof template !== "string") {
    return key;
  }
  return template.replace(/\{(\w+)\}/g, (match, token) => {
    if (Object.prototype.hasOwnProperty.call(replacements, token)) {
      return replacements[token];
    }
    return "";
  });
};

const formatDate = (value, locale = state.language ?? DEFAULT_LANGUAGE) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  try {
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
};

const cloneValue = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => cloneValue(item));
  }
  if (value && typeof value === "object") {
    return { ...value };
  }
  return value;
};

const localisePerson = (person, lang) => {
  const overrides = resolvePath(state.locales, `${lang}.people.${person.id}`);
  if (!overrides || typeof overrides !== "object") {
    return { ...person };
  }
  const next = { ...person };
  Object.entries(overrides).forEach(([key, value]) => {
    next[key] = cloneValue(value);
  });
  return next;
};

const getLocalisedPeople = (lang) => {
  const base = Array.isArray(state.rawPeople) ? state.rawPeople : [];
  return base.map((person) => localisePerson(person, lang));
};

const getLocalisedMeta = (lang) => {
  const overrides = resolvePath(state.locales, `${lang}.meta`);
  const base = state.rawMeta && typeof state.rawMeta === "object" ? state.rawMeta : {};
  if (!overrides || typeof overrides !== "object") {
    return { ...base };
  }
  return { ...base, ...overrides };
};

const buildKeywords = (person) =>
  [
    person.name,
    person.role,
    person.org,
    person.city,
    person.country,
    person.interests,
    person.confidence,
    Array.isArray(person.tags) ? person.tags.join(" ") : person.tags,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const getInitials = (name) => {
  if (!name) return "??";
  const words = name.trim().split(/\s+/).slice(0, 2);
  return words.map((word) => word[0]?.toUpperCase() ?? "").join("") || "??";
};

const createTag = (label) => {
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = `#${label}`;
  return span;
};

const createCard = (person) => {
  const card = document.createElement("article");
  card.className = "card";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = getInitials(person.name);

  const body = document.createElement("div");

  const heading = document.createElement("strong");
  heading.textContent = person.name;
  body.appendChild(heading);

  const meta = document.createElement("div");
  meta.className = "meta";
  const locationBits = [person.city, person.country].filter(Boolean).join(", ");
  const segments = [person.role, person.org, locationBits].filter(Boolean);
  meta.textContent = segments.join(" • ");
  body.appendChild(meta);

  if (person.interests) {
    const summary = document.createElement("p");
    summary.className = "muted";
    summary.textContent = person.interests;
    body.appendChild(summary);
  }

  if (Array.isArray(person.tags) && person.tags.length) {
    const tags = document.createElement("div");
    tags.className = "tags";
    person.tags.forEach((tag) => tags.appendChild(createTag(tag)));
    body.appendChild(tags);
  }

  const footnoteParts = [];
  if (person.confidence) {
    footnoteParts.push(`${translate("card.confidence")}: ${person.confidence}`);
  }
  const formattedUpdatedAt = formatDate(person.updated_at);
  if (formattedUpdatedAt) {
    footnoteParts.push(`${translate("card.updated")} ${formattedUpdatedAt}`);
  }
  if (footnoteParts.length) {
    const foot = document.createElement("div");
    foot.className = "meta";
    foot.textContent = footnoteParts.join(" • ");
    body.appendChild(foot);
  }

  card.appendChild(avatar);
  card.appendChild(body);
  return card;
};

const createPopupContent = (person) => {
  const location = [person.city, person.country].filter(Boolean).join(", ");
  const tags = Array.isArray(person.tags) && person.tags.length
    ? `<div style="margin-top:6px;">${person.tags
        .map((tag) => `<span style=\"display:inline-block;margin-right:6px;padding:2px 6px;border-radius:999px;background:#eef2ff;color:#312e81;font-size:11px;\">#${tag}</span>`)
        .join("")}</div>`
    : "";
  const emailLine = person.email && person.email !== "N/A"
    ? `<div style="margin-top:6px;font-size:12px;"><a href=\"mailto:${person.email}\">${person.email}</a></div>`
    : "";
  return `
    <div style="font-family:system-ui,sans-serif;font-size:13px;line-height:1.5;max-width:220px;">
      <strong style="font-size:14px;">${person.name}</strong>
      <div style="color:#4b5563;margin-top:4px;">${[person.role, person.org].filter(Boolean).join(' • ')}</div>
      ${location ? `<div style=\"color:#6b7280;margin-top:4px;\">${location}</div>` : ''}
      ${person.interests ? `<div style=\"margin-top:6px;\">${person.interests}</div>` : ''}
      ${tags}
      ${emailLine}
    </div>
  `;
};

const initDirectory = (people) => {
  if (!cardsContainer) return [];
  cardsContainer.innerHTML = "";
  const directoryItems = people.map((person) => ({
    person,
    element: createCard(person),
    keywords: buildKeywords(person),
  }));

  directoryItems.forEach(({ element, keywords }) => {
    element.dataset.keywords = keywords;
    cardsContainer.appendChild(element);
  });

  return directoryItems;
};

const initMap = (people) => {
  const mapElement = document.getElementById("map-canvas");
  if (!mapElement || typeof L === "undefined") {
    return {
      filter: () => {},
      setPeople: () => {},
      initialized: false,
    };
  }

  const map = L.map(mapElement, {
    worldCopyJump: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(map);

  const layerGroup = L.layerGroup().addTo(map);

  const buildEntries = (list) =>
    list
      .filter((person) => Number.isFinite(person.lat) && Number.isFinite(person.lng))
      .map((person) => ({
        person,
        marker: L.marker([person.lat, person.lng], { title: person.name }).bindPopup(createPopupContent(person)),
        keywords: buildKeywords(person),
      }));

  let entriesWithCoords = buildEntries(people);

  const renderMarkers = (markers) => {
    layerGroup.clearLayers();
    markers.forEach((item) => layerGroup.addLayer(item.marker));
  };

  const resetView = (markers) => {
    if (!markers.length) {
      map.setView([30, 0], 2);
      return;
    }
    if (markers.length === entriesWithCoords.length && entriesWithCoords.length) {
      const bounds = L.latLngBounds(entriesWithCoords.map((item) => item.marker.getLatLng()));
      map.fitBounds(bounds.pad(0.2), { maxZoom: 6 });
    } else {
      const bounds = L.latLngBounds(markers.map((item) => item.marker.getLatLng()));
      map.fitBounds(bounds.pad(0.3), { maxZoom: 8 });
    }
  };

  renderMarkers(entriesWithCoords);
  resetView(entriesWithCoords);

  return {
    filter: (query) => {
      const q = normalise(query);
      const matches = q
        ? entriesWithCoords.filter((item) => item.keywords.includes(q))
        : entriesWithCoords;
      renderMarkers(matches);
      resetView(matches);
    },
    setPeople: (nextPeople) => {
      entriesWithCoords = buildEntries(nextPeople);
      renderMarkers(entriesWithCoords);
      resetView(entriesWithCoords);
    },
    initialized: true,
  };
};

const updateStatus = (visible, total, query, meta) => {
  if (!statusEl) return;
  if (total === 0) {
    statusEl.textContent = translate("status.none");
    return;
  }

  const queryPart = query ? translate("status.querySuffix", { query }) : "";
  const formattedMetaDate = formatDate(meta?.updated_at);
  const updatedPart = meta?.updated_at
    ? translate("status.updatedSuffix", { date: formattedMetaDate ?? meta.updated_at })
    : "";

  const messageKey = visible === total ? "status.all" : "status.partial";
  statusEl.textContent = translate(messageKey, {
    visible,
    total,
    query: queryPart,
    updated: updatedPart,
  });
};

const applyFilter = (query) => {
  const rawQuery = (query ?? "").toString();
  const q = normalise(rawQuery);
  let visible = 0;
  state.directoryItems.forEach(({ element, keywords }) => {
    const match = !q || keywords.includes(q);
    element.style.display = match ? "" : "none";
    if (match) visible += 1;
  });
  state.mapController?.filter(rawQuery);
  updateStatus(visible, state.total, rawQuery.trim(), state.meta);
};

const loadData = async () => {
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error(`Failed to load directory data (${response.status})`);
  }
  return response.json();
};

const applyTranslations = (lang) => {
  const nextLang = SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
  state.language = nextLang;
  document.documentElement.lang = nextLang;
  if (languageSelect && languageSelect.value !== nextLang) {
    languageSelect.value = nextLang;
  }

  document.title = translate("title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.dataset.i18n === "footer.notice") {
      return;
    }
    el.textContent = translate(el.dataset.i18n);
  });

  const footerNotice = document.querySelector('[data-i18n="footer.notice"]');
  if (footerNotice) {
    footerNotice.textContent = translate("footer.notice", {
      year: new Date().getFullYear(),
    });
  }

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (!key) return;
    if (key === "footer.data") {
      const email = el.dataset.email ?? "info@example.org";
      const emailLink = `<a href="mailto:${email}" style="color:#fff; text-underline-offset:2px;">${email}</a>`;
      el.innerHTML = translate(key, { email, emailLink });
    } else {
      el.innerHTML = translate(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!key) return;
    el.setAttribute("placeholder", translate(key));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (!key) return;
    el.setAttribute("aria-label", translate(key));
  });

  state.meta = getLocalisedMeta(nextLang);
  state.people = getLocalisedPeople(nextLang);
  state.total = state.people.length;

  const currentQuery = searchInput?.value ?? "";

  state.directoryItems = initDirectory(state.people);

  if (!state.mapController.initialized) {
    state.mapController = initMap(state.people);
  } else if (typeof state.mapController.setPeople === "function") {
    state.mapController.setPeople(state.people);
  }

  if (state.people.length) {
    applyFilter(currentQuery);
  } else {
    if (typeof state.mapController.setPeople === "function") {
      state.mapController.setPeople([]);
    }
    updateStatus(0, 0, currentQuery.trim(), state.meta);
  }
};

const initialise = async () => {
  try {
    const data = await loadData();
    state.rawPeople = Array.isArray(data.people) ? data.people : [];
    state.rawMeta = data.meta && typeof data.meta === "object" ? data.meta : {};
    state.locales = data.locales && typeof data.locales === "object" ? data.locales : {};
    applyTranslations(state.language);
  } catch (error) {
    console.error(error);
    if (statusEl) {
      statusEl.textContent = translate("errors.directory");
    }
  }
};

if (searchInput) {
  searchInput.addEventListener("input", (event) => applyFilter(event.target.value));
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => applyTranslations(event.target.value));
}

if (formEl) {
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(translate("form.demoSubmit"));
  });
}

applyTranslations(state.language);
initialise();
