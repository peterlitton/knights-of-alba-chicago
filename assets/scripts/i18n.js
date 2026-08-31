(function(){
  // ============ I18N DICTIONARY ============
  // Italian translations. Key naming matches data-i18n attributes.
  // For brand voice, drew from the parent Order site's Italian register.
  const I18N = {
    en: {}, // English is the default in HTML, so this is empty (no override needed)
    it: {
      // Top strip
      "topstrip.line": "Ordine dei Cavalieri del Tartufo e dei Vini d'Alba · Fondato nel 1967",
      "topstrip.link": "Visita l'Ordine →",

      // Brand + nav
      "brand.order": "Ordine dei Cavalieri",
      "brand.city": "Delegazione di Chicago",
      "nav.home": "Home",
      "nav.events": "Eventi",
      "nav.gallery": "Galleria",
      "nav.knight": "Diventa Cavaliere",
      "nav.knights": "I Cavalieri",
      "nav.contact": "Contatti",

      // Hero
      "hero.eyebrow": "Delegazione di Chicago · Istituita il 9 maggio 2023",
      "hero.title": "Un sodalizio dedito al <em>buon vino</em> e alla <em>buona tavola</em>, nel cuore di Chicago.",
      "hero.sub": "Un invito a celebrare il tartufo bianco d'Alba, i grandi vini delle Langhe e la cultura senza tempo della tavola italiana — riuniti nella città che chiamiamo casa.",
      "cta.become": "Diventa Cavaliere",
      "cta.upcoming": "Prossimi Eventi",

      // Mission
      "mission.badge": "Investitura Chicago<strong>2024</strong>",
      "mission.eyebrow": "La Nostra Missione",
      "mission.title": "Onorare una tradizione. Arricchire una città.",
      "mission.intro": "L'Ordine dei Cavalieri del Tartufo e dei Vini d'Alba è nato nel 1967 in una piccola trattoria di Grinzane Cavour. Oggi è presente nei cinque continenti.",
      "mission.p1": "Chicago è entrata a far parte di questo sodalizio nel 2023 sotto la guida del Maestro Georgia Marsh — assumendosi così una quieta responsabilità: custodire, nella nostra città, una cultura del vino, del cibo e della convivialità affinata in Piemonte da secoli.",
      "mission.p2": "I nostri Cavalieri sono sommelier e chirurghi, ristoratori e architetti, vignaioli e finanzieri. Ciò che ci unisce è una passione sincera per la tavola e la convinzione che le cose migliori della vita siano quelle condivise.",

      // Three pillars
      "pillars.eyebrow": "Tradizione · Cultura · Eccellenza",
      "pillars.title": "I tre pilastri dell'Ordine",
      "pillars.truffle.title": "Il Tartufo Bianco d'Alba",
      "pillars.truffle.body": "Tuber magnatum pico — il tartufo più pregiato al mondo, raccolto nei boschi attorno ad Alba. L'Ordine ne tutela il nome, la stagione e i riti a tavola.",
      "pillars.wines.title": "I Vini delle Langhe",
      "pillars.wines.body": "Barolo. Barbaresco. Roero. Barbera d'Alba. Dolcetto. Nebbiolo. L'Ordine cura ogni anno una Selezione dei migliori vini delle grandi denominazioni piemontesi.",
      "pillars.table.title": "La Tavola Italiana",
      "pillars.table.body": "Oltre il cibo e il vino: il rito senza fretta di spezzare il pane, il brindisi che significa qualcosa, il pranzo lungo come forma d'amicizia. Lo teniamo vivo, qui a Chicago.",

      // Events preview (home) + page header
      "events.title": "Riunioni recenti",
      "events.lede": "Gli eventi riservati ai Cavalieri spaziano dalle <em>cerimonie d'investitura in abito da sera</em> a <em>hamburger e Barolo in giardino</em> — e tutto ciò che sta nel mezzo.",
      "evpage.title": "Dove si raduna la Delegazione",
      "evpage.lede": "Gli eventi riservati ai Cavalieri spaziano dalle <em>cerimonie d'investitura in abito da sera</em> a <em>hamburger e Barolo in giardino</em> — e tutto ciò che sta nel mezzo.",

      // Months
      "month.jan": "Gen",
      "month.feb": "Feb",
      "month.mar": "Mar",
      "month.apr": "Apr",
      "month.may": "Mag",
      "month.jun": "Giu",
      "month.jul": "Lug",
      "month.aug": "Ago",
      "month.sep": "Set",
      "month.oct": "Ott",
      "month.nov": "Nov",
      "month.dec": "Dic",

      // Events page - section headers
      "evpage.upcoming.title": "Prossimi Eventi",
      "evpage.upcoming.sub": "I prossimi appuntamenti della Delegazione.",
      "evpage.upcoming.empty": "Il prossimo evento è in fase di pianificazione. I Cavalieri saranno avvisati dal Maestro; aspiranti e amici della Delegazione possono inviare una richiesta.",
      "evpage.upcoming.contact": "Per annunci e richieste, contattare <a href=\"mailto:chicagomaster@cavalierdeltartufo.it\">il Maestro</a>.",
      "evpage.past.title": "Eventi Passati",
      "evpage.past.sub": "Un archivio delle recenti riunioni della Delegazione di Chicago.",
      "evpage.read": "Leggi la cronaca →",

      // Notte del Solstizio event
      "evpage.sea.date": "Domenica, 12 luglio 2026",
      "evpage.sea.subtitle": "Una celebrazione estiva a bordo di Siberian Dream",
      "evpage.sea.venue": "A bordo dello yacht del Cavaliere Quintin Marx · Lago Michigan",
      "evpage.sea.body": "I Cavalieri di Alba-Chicago hanno navigato sul Lago Michigan a bordo di Siberian Dream, lo yacht di 74 piedi di proprietà e al comando del Cavaliere Quintin Marx — Prosecco, Champagne millesimato, tartufi e un generoso pranzo sotto un cielo estivo sereno.",
      "evpage.solstizio.date": "Domenica, 21 giugno 2026",
      "evpage.solstizio.subtitle": "Notte del Solstizio d'Estate",
      "evpage.solstizio.venue": "Con i vini di Chiara Boschis · E. Pira & Figli",
      "evpage.solstizio.body": "I Cavalieri di Alba-Chicago si sono riuniti a casa del Maestro Georgia Marsh per una calorosa e festosa celebrazione del solstizio d'estate, onorata dalla presenza di Chiara Boschis — una delle grandi produttrici di Barolo — e da una progressione dei suoi vini dal Dolcetto al Barolo Mosconi.",
      "home.solstizio.body": "Una calorosa e festosa celebrazione del solstizio d'estate a casa del Maestro Georgia Marsh, onorata dalla presenza di Chiara Boschis — una delle grandi produttrici di Barolo — e da una progressione dei suoi vini nel corso della serata.",

      // Historical Chapters and planned Eighth Chapter
      "evpage.chapter1.title": "Capitolo Inaugurale",
      "evpage.chapter1.date": "9 maggio 2023",
      "evpage.chapter1.p1": "Il Capitolo di Chicago ha tenuto il suo incontro inaugurale il 9 maggio 2023 presso l’Exmoor Country Club, dando formalmente inizio alle attività del Capitolo a Chicago.",
      "evpage.chapter1.p2": "Tra i partecipanti figurava <strong>Thomas Botzios, Console Generale del Consolato d’Italia a Chicago</strong>, che ha ricevuto l’investitura di <strong>Cavaliere Onorario</strong>. Anche <strong>Robert Allegrini, Presidente della National Italian American Foundation</strong>, ha ricevuto l’investitura di Cavaliere.",
      "evpage.chapter1.p3": "L’occasione ha stabilito fin dall’inizio un legame tra il Capitolo di Chicago e i rappresentanti dell’Italia e della comunità italoamericana negli Stati Uniti.",
      "evpage.chapter2.title": "Secondo Capitolo",
      "evpage.chapter2.date": "12 settembre 2023",
      "evpage.chapter2.p1": "Il Capitolo di Chicago si è riunito per il suo secondo incontro il 12 settembre 2023 presso Formento’s Ristorante.",
      "evpage.chapter2.p2": "Al Capitolo hanno partecipato <strong>Thomas Botzios, Console Generale del Consolato d’Italia a Chicago</strong>, e <strong>Robert Allegrini, Presidente della National Italian American Foundation</strong>, proseguendo entrambi la loro partecipazione alle attività della Delegazione di Chicago, allora in fase di sviluppo.",
      "evpage.chapter3.title": "Terzo Capitolo",
      "evpage.chapter3.date": "14 novembre 2023",
      "evpage.chapter3.p1": "Il terzo incontro del Capitolo di Chicago si è tenuto il 14 novembre 2023 presso lo University Club of Chicago, nell’ambito del programma ufficiale della <strong>Settimana della Cucina Italiana nel Mondo</strong>.",
      "evpage.chapter3.p2": "La serata ha incluso una <strong>masterclass sul tartufo bianco</strong>, collegando uno dei prodotti più celebri di Alba alla più ampia celebrazione internazionale della cultura gastronomica italiana.",
      "evpage.chapter3.p3": "<strong>Luca DiVita, Direttore dell’Istituto Italiano di Cultura</strong>, ha ricevuto l’investitura durante il Capitolo. Erano presenti il <strong>Console Generale Thomas Botzios</strong> e, in qualità di ospite, <strong>Marco Verna, Italian Trade Commissioner</strong>. Anche <strong>Robert Allegrini</strong> ha partecipato come Cavaliere.",
      "evpage.chapter3.p4": "L’evento ha ulteriormente rafforzato i rapporti del Capitolo con le istituzioni diplomatiche, culturali e commerciali italiane a Chicago.",
      "evpage.chapter4.title": "Quarto Capitolo",
      "evpage.chapter4.date": "6 maggio 2024",
      "evpage.chapter4.p1": "Il Capitolo di Chicago si è riunito per il suo quarto Capitolo il 6 maggio 2024 presso Gioia Ristorante.",
      "evpage.chapter4.p2": "Tra gli ospiti istituzionali della serata figurava <strong>Marco Verna, Italian Trade Commissioner</strong>, a testimonianza della continuità dei rapporti tra il Capitolo e la rappresentanza commerciale italiana a Chicago.",
      "evpage.extraordinary2024.title": "Capitolo Straordinario",
      "evpage.extraordinary2024.date": "20 ottobre 2024",
      "evpage.extraordinary2024.p1": "Un Capitolo Straordinario si è tenuto il 20 ottobre 2024 presso lo University Club of Chicago, a sostegno della <strong>candidatura italiana all’UNESCO per il riconoscimento e la tutela della Cucina Italiana</strong>.",
      "evpage.extraordinary2024.p2": "L’occasione ha riunito un gruppo eccezionale di rappresentanti del governo italiano e delle istituzioni diplomatiche, commerciali e culturali.",
      "evpage.extraordinary2024.p3": "Il <strong>Ministro italiano dell’Agricoltura Francesco Lolabrigida</strong>, il <strong>Presidente dell’ICI Matteo Zappos</strong> e il <strong>Presidente di Veronafiere Federico Bricolo</strong> hanno ricevuto l’investitura di <strong>Cavalieri Onorari</strong>.",
      "evpage.extraordinary2024.p4": "Erano inoltre presenti <strong>Mariangela Zappia, Ambasciatrice d’Italia negli Stati Uniti</strong>; <strong>Mario Bartoli, Console Generale del Consolato d’Italia a Chicago</strong>; <strong>Marco Verna, Italian Trade Commissioner</strong>; e il Cavaliere <strong>Robert Allegrini</strong>, insieme a numerose altre personalità italiane.",
      "evpage.extraordinary2024.p5": "Il Capitolo Straordinario ha rappresentato un momento significativo nei rapporti del Capitolo di Chicago con le istituzioni italiane e nel suo sostegno al riconoscimento internazionale del patrimonio gastronomico italiano.",
      "evpage.chapter5.title": "Quinto Capitolo",
      "evpage.chapter5.date": "24 marzo 2025",
      "evpage.chapter5.p1": "Il Capitolo di Chicago ha tenuto il suo quinto Capitolo il 24 marzo 2025 presso la University of Chicago.",
      "evpage.chapter5.p2": "Durante l’incontro, <strong>Mario Bartoli, Console Generale del Consolato d’Italia a Chicago</strong>, ha ricevuto l’investitura di <strong>Cavaliere Onorario</strong>.",
      "evpage.chapter5.p3": "Erano inoltre presenti <strong>Marco Verna, Italian Trade Commissioner</strong>, e il Cavaliere <strong>Robert Allegrini</strong>, proseguendo la partecipazione di importanti rappresentanti delle istituzioni italiane e italoamericane alle attività del Capitolo.",
      "evpage.chapter6.title": "Sesto Capitolo",
      "evpage.chapter6.date": "27 ottobre 2025",
      "evpage.chapter6.p1": "Il sesto Capitolo si è tenuto il 27 ottobre 2025 presso Il Milanese a Chicago.",
      "evpage.chapter6.p2": "Il Capitolo ha accolto <strong>Mario Bartoli, Console Generale del Consolato d’Italia a Chicago</strong>, e <strong>Marco Verna, Italian Trade Commissioner</strong>, entrambi presenti all’incontro.",
      "evpage.chapter6.p3": "La loro partecipazione ha dato continuità ai rapporti del Capitolo con i rappresentanti diplomatici e commerciali italiani a Chicago.",
      "evpage.chapter7.title": "Settimo Capitolo",
      "evpage.chapter7.date": "7 maggio 2026",
      "evpage.chapter7.p1": "Il Capitolo di Chicago si è riunito per il suo settimo Capitolo il 7 maggio 2026 presso lo University Club of Chicago.",
      "evpage.chapter7.p2": "Tra i presenti figuravano <strong>Paola Di Favori, Italian Trade Commissioner a Chicago</strong>, e <strong>Robert Allegrini, Presidente e Amministratore Delegato della National Italian American Foundation</strong>.",
      "evpage.chapter7.p3": "La loro partecipazione ha proseguito una tradizione, nata fin dai primi incontri del Capitolo, di accoglienza dei rappresentanti di istituzioni strettamente legate all’Italia e alla comunità italoamericana.",
      "evpage.chapter8.title": "Ottavo Capitolo — Cena al Tartufo Bianco",
      "evpage.chapter8.date": "Novembre/dicembre 2026",
      "evpage.chapter8.venue": "In fase di pianificazione",
      "evpage.chapter8.p1": "Sono in corso i preparativi per l’ottavo Capitolo e la Cena al Tartufo Bianco del Capitolo di Chicago, previsti per novembre o dicembre 2026.",
      "evpage.chapter8.p2": "Il Capitolo sta lavorando con il <strong>Console Generale</strong> a un’iniziativa collegata alla <strong>Settimana della Cucina Italiana nel Mondo</strong>, con il tema provvisorio <strong>«Diplomazia e Cucina Italiana»</strong>.",
      "evpage.chapter8.p3": "Ulteriori dettagli sul programma, sugli ospiti, sulla sede, sui vini e sulla cena saranno aggiunti con il progredire dei preparativi.",

      // Event CTAs
      "cta.reserve": "Prenota",
      "cta.rsvp": "Conferma",
      "cta.inquire": "Informazioni",
      "cta.viewAll": "Vedi Tutti gli Eventi →",

      // Testimonials
      "test.eyebrow": "Voci della Delegazione",
      "test.title": "Cosa significa essere Cavaliere",
      "test.q1": "Essere Cavaliere significa appartenere a una tradizione più antica e più grande di sé — e, al tempo stesso, scoprire nei nostri incontri di Chicago qualcosa di interamente nuovo: amicizie nate da una comune reverenza per la tavola italiana.",
      "test.q2": "L'Ordine chiede una sola cosa ai suoi membri: passione sincera. Tutto ciò che ne segue — i vini, i pasti, la compagnia — è ricompensa di quella passione.",
      "test.attr": "Un Cavaliere di Chicago",
      "test.q1.attr": "Professionista del Settore · Investito nel 2024",
      "test.q2.attr": "Appassionato · Investito nel 2025",

      // Journal
      "journal.eyebrow": "Dispacci",
      "journal.title": "Dal Diario di Chicago",
      "journal.cat.wine": "Mondo del Vino",
      "journal.cat.food": "Cultura del Buon Cibo",
      "journal.cat.recap": "Cronaca dell'Evento",
      "journal.a1.title": "Perché il 2019 potrebbe essere un'annata storica per il Barolo",
      "journal.a1.body": "Appunti da una degustazione verticale riservata ai Cavalieri, tenutasi a River North la scorsa primavera, con riflessioni del Maestro e di un enologo ospite.",
      "journal.a1.date": "Ottobre 2025",
      "journal.a2.title": "Sua Maestà arriva a Chicago: introduzione al tartufo bianco d'Alba",
      "journal.a2.body": "Cos'è, cosa non è, e come si degusta come si deve — scritto per i nostri nuovi Cavalieri e per gli ospiti curiosi.",
      "journal.a2.date": "Settembre 2025",
      "journal.a3.title": "L'Investitura del 2024: undici nuovi Cavalieri per Chicago",
      "journal.a3.body": "Un reportage fotografico dalla nostra cerimonia più recente — gli abiti, i medaglioni, il momento dell'investitura. Con le parole del Maestro Georgia Marsh.",
      "journal.a3.date": "Dicembre 2024",

      // Gallery
      "gal.eyebrow": "Rivivi gli Eventi",
      "gal.title": "La Delegazione in immagini",
      "gal.lede": "Gli eventi di Chicago — cerimonie ufficiali, grandi cene, momenti conviviali. Tutti celebrano e sostengono i valori dell'Ordine.",
      "gal.1.label": "Investitura · Chicago · 2024",
      "gal.1.title": "I nuovi Cavalieri della Delegazione di Chicago, con il Maestro Georgia Marsh",
      "gal.2.label": "Alba · 2024",
      "gal.2.title": "Sua Maestà, il Tartufo Bianco d'Alba",
      "gal.3.label": "Il Rito dell'Investitura",
      "gal.3.title": "Un nuovo Cavaliere riceve il medaglione",
      "gal.4.label": "Degustazione · River North · 2025",
      "gal.4.title": "Una verticale di Sordo Barolo Riserva",
      "gal.5.label": "Grinzane Cavour · 2025",
      "gal.5.title": "I Maestri internazionali dell'Ordine riuniti al Castello",
      "gal.6.label": "Sede Centrale · Piemonte",
      "gal.6.title": "Il Consiglio Reggitore al Castello di Grinzane Cavour",
      "gal.7.label": "Le Langhe · Patrimonio dell'Umanità UNESCO",
      "gal.7.title": "Sede dell'Ordine, dal 1967",

      // Become a Knight
      "knight.eyebrow": "Il Titolo di Cavaliere",
      "knight.title": "Una passione sincera per la cucina e i vini del Piemonte.",
      "knight.lede": "Dal 1967, l'Ordine ha investito Cavalieri provenienti da tutto il mondo che condividono un genuino interesse — e una vera passione — per la cucina, i vini e il paesaggio delle Langhe. Chiunque condivida questa passione può presentare domanda.",
      "knight.s1.num": "Passo Uno",
      "knight.s1.title": "Presenta la Domanda",
      "knight.s1.body": "Compila il modulo ufficiale di domanda e il curriculum vitae. Invia entrambi per email alla segreteria dell'Ordine all'indirizzo <a href=\"mailto:segreteria@cavalierideltartufo.it\" style=\"color:var(--ordine-gold-light); border-bottom:1px solid var(--ordine-gold-light); text-decoration:none\">segreteria@cavalierideltartufo.it</a>, indicando Chicago come Delegazione di tua scelta.",
      "knight.s1.cta": "Scarica il Modulo →",
      "knight.s2.num": "Passo Due",
      "knight.s2.title": "Quota d'Ammissione e Annuale",
      "knight.s2.body1": "All'ammissione sono dovuti una quota d'ingresso (stabilita dal Consiglio della Delegazione di Chicago) e la quota associativa del primo anno. Entrambe possono essere versate con carta di credito, PayPal o bonifico tramite l'Ordine.",
      "knight.s2.body2": "Inclusi: il Collare con Medaglione personalizzato, il Certificato di Proclamazione, le fotografie dell'Investitura e la tessera annuale di socio — con sconto del 10% sugli acquisti al Castello di Grinzane.",
      "knight.s3.num": "Passo Tre",
      "knight.s3.title": "Investitura in Abito",
      "knight.s3.body": "I nuovi Cavalieri vengono ufficialmente investiti in una cerimonia a Chicago, ricevendo il Collare dell'Ordine e il nastro dei Cavalieri. Da quella sera in avanti, hanno il diritto di partecipare a qualsiasi evento dell'Ordine nel mondo — e di presentare nuovi Cavalieri.",
      "knight.cta1": "Parla Prima con il Maestro",
      "knight.cta2": "Leggi la Pagina Completa dell'Ordine →",

      // Leadership
      "leader.eyebrow": "Guida",
      "leader.title": "La Guida della Delegazione di Chicago",
      "leader.vp.role": "Vice · Delegazione di Chicago",
      "leader.vp1.since": "Cavaliere dal 2025",
      "leader.vp2.since": "Cavaliere dal 2023",
      "leader.portrait": "Ritratto del Maestro",
      "leader.role": "Maestro · Delegazione di Chicago",
      "leader.since": "Cavaliere dal 2019 · Maestro dal 2023",
      "leader.quote": "\"Istituire una delegazione dell'Ordine a Chicago significa portare un pezzo di Piemonte — la sua pazienza, la sua generosità, la sua reverenza per la tavola — in una grande città americana.\"",
      "leader.bio": "Georgia Marsh guida la Delegazione di Chicago con una visione chiara: che le tradizioni dell'Ordine, affinate nelle Langhe dal 1967, possano trovare a Chicago una casa autentica e duratura. Convoca i nostri eventi, cura il calendario e presenta i nuovi Cavalieri all'Ordine.",

      // Roster
      "roster.eyebrow": "Albo dei Cavalieri · Chicago",
      "roster.title": "I Cavalieri della Delegazione di Chicago",
      "roster.lede": "Un sodalizio in crescita di appassionati e professionisti del settore, presentati all'Ordine in una cerimonia ufficiale.",
      "roster.stat.knights": "Cavalieri",
      "roster.stat.honorary": "Onorari",
      "roster.stat.est": "Istituita",

      // Contact
      "contact.eyebrow": "Iniziamo a Conoscerci",
      "contact.title": "Contatta la Delegazione di Chicago",
      "contact.h3": "Cominciamo da una conversazione.",
      "contact.body": "Che siate Cavalieri di un'altra delegazione, aspiranti interessati a iscriversi o semplici amici curiosi della tavola italiana — saremo lieti di sentirvi.",
      "contact.general.label": "Servizi Generali, Delegazione di Chicago",
      "contact.general.body": "<a href=\"mailto:contact@knightsofalbachicago.org\">contact@knightsofalbachicago.org</a>",
      "contact.maestro.label": "Il Maestro di Chicago",
      "contact.maestro.body": "Georgia Marsh · Maestro<br><a href=\"mailto:chicagomaster@cavalierdeltartufo.it\">chicagomaster@cavalierdeltartufo.it</a>",
      "contact.follow.label": "Segui la Delegazione",
      "contact.follow.body": "<a href=\"https://www.instagram.com/knightsofalba_chicago/\" target=\"_blank\">@knightsofalba_chicago</a> su Instagram",
      "contact.hq.label": "L'Ordine — Sede Centrale",
      "contact.hq.body": "Castello di Grinzane Cavour · Via Castello 5 · 12060 Grinzane Cavour (CN) · Italia<br><a href=\"https://www.cavalierideltartufo.it/\" target=\"_blank\">cavalierideltartufo.it</a>",
      "contact.thanks": "Grazie. Il vostro programma di posta si aprirà con il messaggio indirizzato all'Ordine.",
      "contact.form.title": "Manifesta il tuo interesse",
      "contact.form.sub": "Qualche dato per cominciare. Trattiamo il vostro messaggio in via riservata.",
      "contact.form.name": "Nome",
      "contact.form.namePh": "Nome e cognome",
      "contact.form.email": "Email",
      "contact.form.role": "Scrivo in qualità di",
      "contact.form.opt1": "Persona interessata a diventare Cavaliere",
      "contact.form.opt2": "Cavaliere di un'altra delegazione",
      "contact.form.opt3": "Partner del settore vino e ospitalità",
      "contact.form.opt4": "Ospite interessato a partecipare a un evento",
      "contact.form.opt5": "Altro",
      "contact.form.msg": "Qualche parola",
      "contact.form.msgPh": "Racconta brevemente il tuo interesse per l'Ordine.",
      "contact.form.submit": "Invia all'Ordine",

      // Footer
      "footer.brand": "La Delegazione di Chicago dell'Ordine dei Cavalieri del Tartufo e dei Vini d'Alba — sodalizio enogastronomico fondato in Piemonte nel 1967, portato a Chicago nel 2023.",
      "footer.order": "L'Ordine",
      "footer.history": "Storia",
      "footer.articles": "Statuto",
      "footer.council": "Consiglio Reggitore",
      "footer.delegations": "Delegazioni nel Mondo",
      "footer.chicago": "Chicago",
      "footer.connect": "Contatti",
      "footer.email": "Scrivi al Maestro",
      "footer.ig": "Instagram",
      "footer.form": "Modulo di Contatto",
      "footer.copy": "© Ordine dei Cavalieri del Tartufo e dei Vini d'Alba · Delegazione di Chicago",
      "footer.motto": "Tradizione · Cultura · Eccellenza",
    }
  };

  // ============ I18N ENGINE ============
  // Stash original English content on first load (so toggling back is lossless)
  const ORIGINAL_EN = {};
  function captureOriginals() {
    document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-placeholder]').forEach(el => {
      const id = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
      const phId = el.getAttribute('data-i18n-placeholder');
      if (id && !(id in ORIGINAL_EN)) {
        ORIGINAL_EN[id] = el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent;
      }
      if (phId && !(phId in ORIGINAL_EN)) {
        ORIGINAL_EN[phId] = el.getAttribute('placeholder') || '';
      }
    });
  }

  function applyLang(lang) {
    const dict = I18N[lang] || {};
    document.documentElement.lang = lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translated = dict[key];
      if (translated !== undefined) {
        el.textContent = translated;
      } else if (ORIGINAL_EN[key] !== undefined) {
        el.textContent = ORIGINAL_EN[key];
      }
    });

    // HTML content (for translations containing markup)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translated = dict[key];
      if (translated !== undefined) {
        el.innerHTML = translated;
      } else if (ORIGINAL_EN[key] !== undefined) {
        el.innerHTML = ORIGINAL_EN[key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translated = dict[key];
      if (translated !== undefined) {
        el.setAttribute('placeholder', translated);
      } else if (ORIGINAL_EN[key] !== undefined) {
        el.setAttribute('placeholder', ORIGINAL_EN[key]);
      }
    });

    // Switcher button state
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  // Helper used by the contact form alert
  window.__t = function(key, fallback) {
    const lang = (document.documentElement.lang === 'it') ? 'it' : 'en';
    return (I18N[lang] && I18N[lang][key]) || fallback;
  };

  // Resolve initial language: localStorage → browser preference → English
  function initialLang() {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'it') return saved;
    } catch (e) { /* private mode etc. */ }
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.startsWith('it')) return 'it';
    return 'en';
  }

  // ============ MPA NAV ACTIVE STATE ============
  // Set the active nav link based on URL path. Each page sets data-section
  // on its <body> via the body class, but we also fall back to path matching.
  function setActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (!href) return;
      // Normalize: treat /events/ and /events/index.html the same
      const linkPath = new URL(href, window.location.href).pathname;
      // Match home only at root
      if (linkPath === '/' || linkPath.endsWith('/index.html')) {
        const linkDir = linkPath.replace(/index\.html$/, '');
        if (path === linkDir || (linkDir === '/' && path === '/')) {
          link.classList.add('active');
        }
      } else if (path.startsWith(linkPath)) {
        link.classList.add('active');
      }
    });
  }

  // Wire up language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      applyLang(lang);
      try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
    });
  });

  // Bootstrap
  captureOriginals();
  applyLang(initialLang());
  setActiveNav();
})();
