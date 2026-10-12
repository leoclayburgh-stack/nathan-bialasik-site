(function () {
  'use strict';

  /* ---------- Translations ---------- */
  var T = {
    en: {
      skip: 'Skip to content',
      navHome: 'Home', navTraining: 'Performance training', navMedia: 'Media', navContact: 'Contact',
      cta: 'Book an appointment',
      heroA: 'Osteopathy, sports traumatology and', heroB: 'high-performance training.',
      heroSub: 'Nathan Bialasik, osteopath D.O. — Uccle & Waterloo.',
      portraitCaption: 'Nathan Bialasik, osteopath D.O.',
      approachLabel: 'The approach', approachTitle: 'Understand the movement before treating the pain.',
      approachBody: 'Osteopathy grounded in sports science: a precise assessment, manual treatment, then a return to movement built with you. From desk-bound patients to elite athletes.',
      edu1: 'Advanced Master in Osteopathy — sports traumatology, paediatrics, semiological approach',
      edu2: 'Master in Sports Science — Sports Osteopathy',
      edu3: 'CP2HP certification — strength & conditioning for high-level performance',
      price1Label: 'Consultation', price1Title: 'Osteopathy', price1Body: 'Acute or chronic pain, post-injury follow-up, paediatrics.',
      price2Label: 'Session', price2Title: 'Osteo rehab · Sport performance', price2Body: 'Science-based training. Individualised rehabilitation and physical preparation.',
      price3Label: 'Home visit', price3Title: 'Consultation at home', price3Body: 'Osteopathy at your home, Uccle and surroundings.',
      price4Label: 'Emergency', price4Title: 'Urgent consultation', price4Body: 'Same-day slot, outside regular hours.',
      bookLabel: 'Booking', bookTitle: 'Book online, pick your slot in a minute.',
      bookBody: 'Appointments are managed through Helan Pro. Choose the location, the consultation type and a time that suits you.',
      trainingLabel: 'Performance training', trainingTitle: 'From treatment to performance.',
      trainingBody: 'Programmes built on assessment, coached in the gym in Uccle and soon in Waterloo.',
      trainingPt1: 'Return-to-sport after injury', trainingPt2: 'Strength & conditioning for competition', trainingPt3: 'Movement quality and injury prevention',
      trainingCta: 'Book a session',
      place1Label: 'Where I practise', place2Label: 'Coming soon', place2Addr: 'Waterloo — opening soon', place2Link: 'Be notified',
      reviewsLabel: 'Patient reviews', reviewsLink: 'See all on Google',
      rev1: '“Back locked up before a marathon, Nathan had me back on my feet in two sessions.”',
      rev2: '“Clear explanations, precise work. Finally an osteopath who speaks training.”',
      rev3: '“Serious follow-up after my ligament tear. Back on the pitch without fear.”',
      footerTitle: 'Ready to move better?', footerPlaces: 'Locations',
      metaTitle: 'Nathan Bialasik — Osteopath D.O. · Uccle & Waterloo',
      metaDesc: 'Nathan Bialasik, osteopath D.O. in Uccle and Waterloo. Osteopathy, sports traumatology and high-performance training. Book online.'
    },
    fr: {
      skip: 'Aller au contenu',
      navHome: 'Accueil', navTraining: 'Préparation physique', navMedia: 'Média', navContact: 'Contact',
      cta: 'Prendre rendez-vous',
      heroA: 'Ostéopathie, traumatologie du sport et préparation physique', heroB: 'haute performance.',
      heroSub: 'Nathan Bialasik, ostéopathe D.O. — Uccle & Waterloo.',
      portraitCaption: 'Nathan Bialasik, ostéopathe D.O.',
      approachLabel: "L'approche", approachTitle: 'Comprendre le mouvement avant de traiter la douleur.',
      approachBody: "Une ostéopathie fondée sur les sciences du sport : évaluation précise, traitement manuel, puis un retour au mouvement construit avec vous. Du patient sédentaire à l'athlète de haut niveau.",
      edu1: 'Master de spécialisation en ostéopathie — traumatologie du sport, pédiatrie, approche sémiologique',
      edu2: 'Master en sciences du sport — Ostéopathie du sport',
      edu3: 'Certification CP2HP — préparation physique et performance de haut niveau',
      price1Label: 'Consultation', price1Title: 'Ostéopathie', price1Body: 'Douleurs aiguës ou chroniques, suivi post-traumatique, pédiatrie.',
      price2Label: 'Séance', price2Title: 'Osteo rehab · Sport performance', price2Body: 'Science-based training. Réathlétisation et préparation physique individualisée.',
      price3Label: 'À domicile', price3Title: 'Consultation à domicile', price3Body: 'Ostéopathie chez vous, Uccle et environs.',
      price4Label: 'Urgence', price4Title: 'Consultation urgente', price4Body: 'Créneau le jour même, hors horaires habituels.',
      bookLabel: 'Prise de rendez-vous', bookTitle: 'Réservez en ligne, choisissez votre créneau en une minute.',
      bookBody: "Les rendez-vous sont gérés via Helan Pro. Choisissez le lieu, le type de consultation et l'horaire qui vous convient.",
      trainingLabel: 'Préparation physique', trainingTitle: 'Du soin à la performance.',
      trainingBody: "Programmes construits sur l'évaluation, suivis en salle à Uccle et bientôt à Waterloo.",
      trainingPt1: 'Retour au sport après blessure', trainingPt2: 'Préparation physique pour la compétition', trainingPt3: 'Qualité du mouvement et prévention',
      trainingCta: 'Réserver une séance',
      place1Label: 'Où je consulte', place2Label: 'Prochainement', place2Addr: 'Waterloo — ouverture à venir', place2Link: 'Être prévenu',
      reviewsLabel: 'Avis patients', reviewsLink: 'Voir tous les avis Google',
      rev1: "« Bloqué du dos avant un marathon, Nathan m'a remis sur pied en deux séances. »",
      rev2: '« Explications claires, travail précis. Enfin un ostéo qui parle entraînement. »',
      rev3: '« Suivi sérieux après ma rupture des ligaments. Retour au terrain sans appréhension. »',
      footerTitle: 'Prêt à bouger mieux ?', footerPlaces: 'Adresses',
      metaTitle: 'Nathan Bialasik — Ostéopathe D.O. · Uccle & Waterloo',
      metaDesc: 'Nathan Bialasik, ostéopathe D.O. à Uccle et Waterloo. Ostéopathie, traumatologie du sport et préparation physique haute performance. Prise de rendez-vous en ligne.'
    }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var langButtons = document.querySelectorAll('.lang button');

  function setLang(lang) {
    if (!T[lang]) lang = 'en';
    var t = T[lang];
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (t[key] != null) nodes[i].textContent = t[key];
    }
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t.metaDesc);
    for (var j = 0; j < langButtons.length; j++) {
      langButtons[j].setAttribute('aria-pressed', langButtons[j].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    try { localStorage.setItem('nb-lang', lang); } catch (e) {}
  }

  for (var k = 0; k < langButtons.length; k++) {
    langButtons[k].addEventListener('click', function () { setLang(this.getAttribute('data-lang')); });
  }

  // Initial language: saved choice, else browser language, else English.
  var initial = null;
  try { initial = localStorage.getItem('nb-lang'); } catch (e) {}
  if (!initial) {
    var nav = (navigator.language || '').toLowerCase();
    initial = nav.indexOf('fr') === 0 ? 'fr' : 'en';
  }
  if (initial !== 'en') setLang(initial); else setLang('en');

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('nav');

  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  var links = menu.querySelectorAll('a');
  for (var m = 0; m < links.length; m++) links[m].addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 860) closeMenu(); });
})();
