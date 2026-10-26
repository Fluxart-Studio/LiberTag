/* ===========================================================
   LiberTag — site vitrine · interactions + i18n
   =========================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------- i18n dictionary */
  const I18N = {
    fr: {
      // Le texte français vit désormais dans les pages HTML (source unique, éditée dans Pinegrow).
      // Il est photographié au chargement par snapshotFrench(). Seule la FAQ, générée par script, reste ici.
      faq: [
        ['LiberTag déplace-t-il mes photos & vidéos ?', "Non. LiberTag lit vos photos & vidéos là où elles sont déjà — pellicule, albums, dossiers. Vos images ne sont copiées ou déplacées qu'à votre seule initiative dans l'application."],
        ['Mes photos sont-elles envoyées sur un serveur ?', "LiberTag ne gère aucun serveur externe. Tout reste dans votre téléphone.<br />Vous serez ultérieurement informé(e) si nous mettons en place un système de sauvegarde sur le cloud."],
        ['Qu\u2019est-ce qu\u2019un « tag parent » ?', "C'est un tag qui en regroupe d'autres, que vous êtes libres de créer ou pas.<br />« France » et « Italie » seraient des tags-enfants du tag-parent « Europe », par exemple.<br />C'est ce qu'on appelle des « tags hiérarchiques », utilisés dans des logiciels comme Lightroom.<br />Cela permet une recherche plus large quand on remonte dans la hiérarchie.<br />Mais la plupart des logiciels ne gèrent pas cette hiérarchie. Ainsi vous exporterez « France », « Italie » et « Europe » comme 3 tags indépendants sur les photos concernées.<br />Quand vous attribuez un tag-enfant, LiberTag attribue aussi automatiquement à l'image les tags-parents que vous aurez créés à cet effet."],
        ['L\u2019étiquetage automatique est-il fiable ?', "L'IA propose des suggestions sous chaque photo ; libre à vous de les valider ou pas.<br />La qualité des résultats s'accroît avec le nombre de photos taggées et répertoriées par l'IA. Et vous avez accès à ce répertoire de l'IA pour écarter les images non pertinentes à son apprentissage."],
        ['Comment est né LiberTag ? Est-ce un projet institutionnel ?', "Pas du tout. LiberTag est né d'un besoin réel de son fondateur, qui stockait presque 10 000 photos de famille depuis une vingtaine d'années sans pouvoir les classer ou les retrouver correctement.<br /><br />Jusqu'ici, aucun logiciel ni application ne permettait une indexation précise et rapide de milliers d'images sans que cela prenne des semaines, avec épuisement mental à la clé.<br />D'où l'idée d'utiliser le « tapping » rapide du mobile pour accélérer considérablement le catalogage.<br />Aucune application ne rivalise aujourd'hui avec LiberTag en termes d'indexation massive de photos."],
        ['Sur quelles plateformes est-il disponible ?', 'LiberTag est disponible sur Android, via Google Play. Une version iOS est à l\u2019étude.'],
      ],
    },
    en: {
      nav_system: 'The System', nav_example: 'Examples', nav_import: 'Import-Export', nav_features: 'Features', nav_tags: 'Tags', nav_pricing: 'Pricing', nav_faq: 'FAQ', nav_cta: 'Download',
      hero_eyebrow: 'Advanced photo & video tagging',
      hero_title: 'Your memories,<br />to <em>cherish</em>.',
      hero_lead: "You let thousands of photos & videos pile up in a heap. <br class='br-lg' />Turn them into a living library and find any photo in the blink of an eye.<br />The app that finally frees your memories from oblivion.",
      compat_label: 'Works with',
      badge_small: 'Get it on', hero_secondary: 'See the app',
      hero_note: "4.8 — \u201CI can finally find my kids' photos\u201D",
      phone_micro: '5,064 images · 3 sources', phone_micro2: '12 albums · 5,064 images', phone_title: 'Active Sources',
      phone_lib: 'Photo Library', phone_gal: 'Galleries',
      tab_pers: 'People', tab_lieu: 'Place', tab_even: 'Event', tab_theme: 'Theme', tab_divers: 'Other',
      seg_all: 'All', seg_albums: 'Albums', seg_fav: 'Starred',
      demo_eyebrow: 'The app in pictures', demo_title: 'Built for family memory',
      demo_lead: 'A warm, dark gallery, clear labels, one gesture to find anything. Here is LiberTag, screen by screen.',
      demo1_t: 'All your sources, together', demo1_p: 'Camera roll, albums, screenshots: LiberTag gathers your images without moving them.',
      demo2_t: 'Tag in one gesture', demo2_p: 'AI suggests, you confirm. The right tag lands on the photo in a single tap.',
      demo3_t: 'Five families of tags', demo3_p: 'People, places, events, themes… every tag naturally finds its category.',
      editag_ai: 'AI suggestions', editag_posed: 'Applied tags', newtag_title: 'New tag', newtag_cat: 'Category',
      feat_eyebrow: 'The joy of looking back', feat_title: 'Revisiting your photos has never been so useful — or so much fun.', feat_lead: 'Make a game of tagging your memories,<br />then create exceptional albums in no time.',
      f1_t: 'Assisted tagging', f1_p: 'Tag suggestions appear under each photo. A glance, a tap, and it\u2019s filed away.',
      f2_t: 'Parent tags', f2_p: '\u201CGranny\u201D under \u201CHalimi Family\u201D. A gentle hierarchy that follows the logic of your memories.',
      f3_t: 'Multiple sources', f3_p: 'Camera roll, albums, scans, screenshots — together in one gallery, nothing moved.',
      f4_t: 'Instant search', f4_p: 'Cross a name, a place and a year. The right photo surfaces in an instant.',
      f5_t: 'Favorites & albums', f5_p: 'Star the best ones, group them into living albums that update on their own.',
      f6_t: 'Your photos stay yours', f6_p: 'Everything happens on your phone. No photo leaves it without you.',
      tagsys_eyebrow: 'The tag system', tagsys_title: 'Five colors for a lifetime',
      tagsys_lead: 'Every Tag belongs to a recognizable family you spot at a glance — and can live under a parent tag in the <em>Tag Library</em>.<br />The only limit is your imagination.',
      cat1_t: 'Person', cat1_p: 'People, families, circles of friends',
      cat2_t: 'Place', cat2_p: 'Spots, cities, countries',
      cat3_t: 'Event', cat3_p: 'Dates, parties, trips',
      cat4_t: 'Theme', cat4_p: 'Styles, subjects, moods',
      cat5_t: 'Other', cat5_p: 'Everything else',
      tree_head: 'Sample from the Tag Library',
      tree_place: 'PLACE',
      tg_australia: 'Australia', tg_wedding: 'Wedding', tg_babies: 'Babies', tg_cars: 'Cars', tg_animals: 'Animals',
      tg_childhood: 'Childhood', tg_photobooth: 'Photo Booth', tg_dad: 'Dad', tg_mudbath: 'Mud Bath',
      tg_holiday84: 'Holiday 1984', tg_italy: 'Italy', tg_pisa: 'Tower of Pisa', tg_ancestors: 'Ancestors',
      tg_beach: 'Beach', tg_wallplants: 'Wall Plants', tg_insects: 'Insects', tg_bees: 'Bees',
      tg_flowers: 'Flowers', tg_dandelion: 'Dandelion', tg_celebrities: 'Celebrities', tg_mom: 'Mom',
      tg_youth: 'Youth', tg_bw: 'Black & White',
      aria_stars3: '3 stars out of 5', aria_stars4: '4 stars out of 5', aria_stars5: '5 stars out of 5',
      aria_demo_tagging: 'Tagging demonstration',
      aria_fan: 'Seven viewer levels fanned out, from full-screen swipe to a six-column grid',
      feat_attr1: 'Assign your Tags', feat_attr2: 'one photo after another…', feat_attr3: '…or else in', feat_attr4: 'bulk selection!',
      svc_eyebrow: 'Features', svc_title: 'Services <em>included</em>',
      svc_lead: 'Why not mix business with pleasure<br />and tag in a rich, comfortable interface.',
      svc2_t: 'Sophisticated albums', svc2_p: 'Mix your labels to build sophisticated albums in a snap!',
      svc3_t: 'AI\u00a0recognition', svc3_p: 'Facial recognition and metadata reading to connect the dots: the built-in AI gives you ever more relevant suggestions over time.',
      svc4_t: 'Photo & video retouching', svc4_p: 'A range of essential tools for photo retouching and video editing.',
      svc5_t: 'Multiple tagging<br>modes', svc5_p: 'To go even faster, the app offers clever tagging interfaces suited to every kind of photo collection.',
      svc6_t: 'Private vault', svc6_p: 'A private vault, with an unlock code, to store your most confidential photos — subfolders included. A nice bonus: it has its own tag tree as well.',
      svc7_t: 'Date search', svc7_p: 'A calendar to find your photos by year and month, based on their real capture date — the one the camera wrote into the file.',
      svc_pill: '01 · The pillar', svc1_t: '<em>7-level</em> viewer', svc1_lead: 'A wide range of views tailored to your needs for fast tagging…',
      xmp_eyebrow: 'Import-Export', xmp_title: 'A focus for collectors and meticulous photographers.',
      xmp_lead: 'Make the most of LiberTag\u2019s highly compatible labels. <br />Import your photos and tag them at top speed. <br />Then export them to your favorite editing software: you\u2019ve just saved precious time mass-labeling your shots.',
      xmp_cap: 'The export screen — resolution and tag encoding, in two gestures.',
      xmp_exp_eye: 'What gets exported', xmp_exp_h: 'Three standard XMP fields',
      xmp_f1_p: 'A flat list of tag names — read by every app: Lightroom, Photos, Finder, Windows Explorer, digiKam…',
      xmp_f2_p: 'The full hierarchical path, from parent to child: <span class="kpath">Parent|Child</span>.',
      xmp_f3_p: 'The 1-to-5-star rating — the universal standard for appreciation (0 = absent from the file).',
      xmp_modes_eye: 'Output modes', xmp_m1_t: 'Sidecar',
      xmp_m1_p: 'An <span class="em">.xmp</span> file placed next to the image, identical to what Lightroom generates. Compatible with every format — JPG, PNG, HEIC, WEBP, TIFF, RAW.',
      xmp_m2_t: 'Embedded in the photo',
      xmp_m2_p: 'The XMP is written into the file itself. A <span class="em">JPEG</span> is patched losslessly; other formats are re-encoded as JPEG at quality 92.',
      xmp_m3_t: 'Bulk file renaming', xmp_bonus: 'Bonus',
      xmp_m3_p: 'Rename all your exports in one go from a template — sequence, date, dimensions… Your shots arrive already cleanly named.',
      price_eyebrow: 'Launch offer', price_title: 'A lifetime license for true peace of mind',
      price_lead: 'No subscription, never any ads, and an absurdly low price for the first wave of curious early birds.',
      plan1_t: 'Freemium', plan1_tag: 'Tag for free', plan1_price: '$0', plan1_per: '',
      plan1_f1: 'All features WITHOUT ads', plan1_f2: 'Unlimited in time', plan1_f3: 'Limit of 10 tags', plan1_f4: 'Limit of 5 files per export', plan1_cta: 'Download',
      plan2_flag: 'Launch offer', plan2_t: 'Premium', plan2_tag: 'Unlimited tag collections', plan2_price: '$5.49', plan2_per: 'forever',
      plan2_f1: 'All features', plan2_f2: 'Lifetime license', plan2_f3: 'Free updates', plan2_f4: 'Zero ads', plan2_cta: 'Download',
      faq_eyebrow: 'Frequently asked', faq_title: 'Everything you need to know',
      cta_title: 'Thousands of photos.<br /><em>Zero chaos.</em>',
      cta_lead: 'Download LiberTag<br>and showcase your photos in the albums they deserve.',
      foot_tagline: 'The app that frees<br>your photos from oblivion',
      foot_product: 'Product', foot_plan: 'Sitemap', foot_company: 'About', foot_dl: 'Download',
      foot_privacy: 'Privacy', foot_terms: 'Terms', foot_contact: 'Contact',
      foot_copy: '© 2026 FluXart Studio — Crafted with care for Android.', foot_made: 'Crafted with care for Android.',
      pbm_eyebrow: 'The needle in the haystack',
      pbm_title: 'The limits of <em>classic albums</em>',
      pbm_lead: 'Hunting down specific photos in a well-stuffed album can quickly turn into an annoying, time-consuming treasure hunt.',
      pbm_album_title: 'My great album', pbm_photos: 'photos',
      pbm_question: 'How do you find <b>this</b> photo, precisely?',
      pbm_label: 'The LiberTag answer', pbm_text: 'Give it <em>tags</em>.',
      pbm_tag1: 'Sunset', pbm_tag2: 'Brittany', pbm_tag4: 'Summer 2025',
      priv_doc_title: 'LiberTag — Privacy Policy',
      priv_eyebrow: 'Your data, your peace of mind',
      priv_title: 'Privacy Policy',
      priv_updated: 'Last updated — August 22, 2026',
      priv_h1: '1. The data we process',
      priv_p1a: 'In its current version, LiberTag runs entirely locally on your device. The application processes your photos, their metadata (dates, tags you create), as well as an optional PIN code that you may set to protect access to the application.',
      priv_p1b: 'The application also uses facial recognition and image analysis technologies (via the MediaPipe library) to help you organise your photos. This processing takes place entirely on your device: no image, no detected face and no data derived from these analyses is sent to our servers or to third parties.',
      priv_p1c: 'Your photos, your tags and your metadata are never sent to our servers or to third parties.',
      priv_p1d: 'In order to deliver our information messages to you (for example, the announcement of a price change), the application queries the Firebase Remote Config service, provided by Google, when it starts. During this exchange, Google receives a technical installation identifier (randomly generated, unrelated to your identity), the version of the application, and the language and country of the device. This exchange never involves your photos, your tags or your metadata, and we do not associate any personal data with it. Google\'s processing of this information is governed by Google\'s privacy policy.',
      priv_p1e: 'Purchases made within the application are handled by Google Play, under its own terms and its own privacy policy: we receive no payment details.',
      priv_h2: '2. Why we process it',
      priv_p2: 'This data is processed solely to enable the application to function: to organise and find your photos through the tag system, to secure access to the application through the PIN code, and to display our information messages. The PIN is never stored in plain text: it is protected by a secure hash function (PBKDF2-HMAC-SHA256), which means that even we cannot know or recover it.',
      priv_h3: '3. Your photos stay with you',
      priv_p3a: 'By default, all your photos and all your tags remain stored exclusively on your device. We do not copy them, do not view them and do not transmit them.',
      priv_p3b: 'We plan to offer an optional cloud storage and synchronisation service in the future. This service will be strictly subject to your voluntary subscription: as long as you do not subscribe to it, no photo and no tag leaves your device. Should you choose to subscribe to it, a supplementary privacy policy, specific to that service, will be presented to you before any activation, setting out precisely which data would then be transmitted, where it would be hosted and how it would be protected.',
      priv_h4: '4. Retention and security',
      priv_p4: 'As your data is stored locally, its retention depends on your device and on your own actions (uninstalling the application, manual deletion). We implement the security best practices available on Android to protect access to this data within the application, in particular through the secure hashing of the PIN code mentioned above.',
      priv_h5: '5. Your rights',
      priv_p5: 'Since your data remains on your device, you retain full control over it at all times: you can view, modify or delete it directly from the application, or by uninstalling the application. No request to us is necessary in order to exercise these rights, since we hold no copy of your data. The technical installation identifier mentioned above is likewise deleted together with the application.',
      priv_h6: '6. Contact us',
      priv_p6: 'For any question relating to your data, write to us at <a href="mailto:admin@fluxart.fr">admin@fluxart.fr</a>.',
      terms_doc_title: 'LiberTag — Terms of Use',
      terms_eyebrow: 'The framework of your use',
      terms_title: 'Terms of Use',
      terms_updated: 'Last updated — August 22, 2026',
      terms_h1: '1. Acceptance of the terms',
      terms_p1: 'By installing and using LiberTag, you accept these terms of use in full. If you do not accept these terms, we invite you not to use the app.',
      terms_h2: '2. License of use',
      terms_p2: 'FluXart Studio grants you a personal, non-exclusive and non-transferable license to use LiberTag, as part of its normal use on an Android device you own. This license does not transfer to you any ownership right over the app itself.',
      terms_h3: '3. Use of the app',
      terms_p3: 'LiberTag runs entirely locally on your device: it lets you tag, sort, find and export your photos. You agree to use the app in accordance with its purpose and with applicable law, in particular not to use it to process content you do not hold the rights to, or whose processing would be illegal.',
      terms_h4: '4. Purchases and lifetime license',
      terms_p4a: 'LiberTag offers a free version (Freemium) and a Premium version.',
      terms_p4b: 'The free version is limited to 10 tags in the Tag Library, and to exporting at most 5 files at a time per batch.',
      terms_p4c: 'The Premium version is obtained through a one-time purchase, with no subscription: it lifts these limitations permanently and for life on the device concerned. It involves no renewal or recurring charge. Purchases are handled by the distribution platform (Google Play) and subject to its own terms and refund policies.',
      terms_h5: '5. Intellectual property',
      terms_p5: 'The LiberTag app, its code, its design, its name and its logo are the property of FluXart Studio and are protected by intellectual property law. Your photos, your tags and all the content you create or import into the app remain entirely your property: LiberTag claims no right over your data.',
      terms_h6: '6. Liability',
      terms_p6: 'LiberTag is provided “as is”, with no guarantee of uninterrupted or error-free operation. FluXart Studio does its utmost to ensure the app’s reliability, but cannot be held liable for data loss or indirect damages resulting from its use. Since your photos remain stored on your device (see our <a href="Confidentialite.html">privacy policy</a>), you remain solely responsible for backing them up.',
      terms_h7: '7. Contact us',
      terms_p7: 'For any question about these terms, write to us at <a href="mailto:admin@fluxart.fr">admin@fluxart.fr</a>.',
      faq: [
        ['Does LiberTag move my photos & videos?', 'No. LiberTag reads your photos & videos right where they already are — camera roll, albums, folders. Your images are only ever copied or moved when you choose to, inside the app.'],
        ['Are my photos sent to a server?', 'LiberTag runs no external server. Everything stays on your phone.<br />You\u2019ll be notified later on if we ever add a cloud backup system.'],
        ['What is a \u201Cparent tag\u201D?', 'It\u2019s a tag that groups others together, which you\u2019re free to create or not.<br />\u201CFrance\u201D and \u201CItaly\u201D would be child tags of the parent tag \u201CEurope\u201D, for example.<br />These are what we call \u201Chierarchical tags\u201D, used in software like Lightroom.<br />They allow a broader search as you move up the hierarchy.<br />But most software doesn\u2019t handle this hierarchy, so you\u2019ll export \u201CFrance\u201D, \u201CItaly\u201D and \u201CEurope\u201D as 3 independent tags on the photos concerned.<br />When you assign a child tag, LiberTag also automatically applies to the image the parent tags you created for that purpose.'],
        ['Is automatic tagging reliable?', 'The AI offers suggestions under each photo; it\u2019s up to you to confirm them or not.<br />Result quality improves as more photos are tagged and indexed by the AI. And you have access to that AI index to remove images irrelevant to its learning.'],
        ['How did LiberTag come about? Is it a corporate project?', 'Not at all. LiberTag was born from a real need of its founder, who had been storing nearly 10,000 family photos for some twenty years without being able to sort or find them properly.<br /><br />Until now, no software or app allowed precise, fast indexing of thousands of images without it taking weeks — and mental exhaustion along the way.<br />Hence the idea of using the phone\u2019s quick \u201Ctapping\u201D to dramatically speed up cataloging.<br />No app today rivals LiberTag when it comes to mass photo indexing.'],
        ['Which platforms is it available on?', 'LiberTag is available on Android, via Google Play. An iOS version is being considered.'],
      ],
    },
  };

  /* ---------------------------------------------------- warm photo tones */
  const TONES = [
    ['#7c6750', '#2c2118'], ['#8f7556', '#352720'], ['#5b4f3e', '#241c14'],
    ['#a07e54', '#43301f'], ['#6d5e49', '#2a211a'], ['#9a7a52', '#3c2a1c'],
    ['#544a3a', '#221b14'], ['#b08a5a', '#523a23'], ['#7a6a52', '#312619'],
    ['#8a6e4a', '#392818'], ['#655643', '#272015'], ['#a98f63', '#4b3722'],
  ];
  function grad(i) { const t = TONES[i % TONES.length]; return `linear-gradient(150deg, ${t[0]}, ${t[1]})`; }

  function fillGrid(el, count, opts) {
    opts = opts || {};
    el.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const d = document.createElement('div');
      d.className = 'tile' + (i % 7 === 2 ? ' star' : '') + (i === (opts.framed ?? -1) ? ' framed' : '');
      d.style.background = grad(i + (opts.seed || 0));
      el.appendChild(d);
    }
  }

  /* ---------------------------------------------------- editag chips + cats */
  const CATCOL = { personne: '#CB8497', lieu: '#83ABA1', even: '#C68C5E', theme: '#AE92B8', divers: '#9E9E8F' };
  function chip(label, col, applied) {
    const s = document.createElement('span');
    s.style.cssText = `display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;font-size:12.5px;font-weight:600;` +
      (applied
        ? `background:${col};color:#1c1409;`
        : `background:${col}22;color:${col};border:1px dashed ${col}66;`);
    if (applied) { s.innerHTML = `<svg width="12" height="12" style="display:block"><use href="#ic-check"/></svg>`; }
    s.appendChild(document.createTextNode(label));
    return s;
  }

  function buildPhoneContent(L) {
    document.querySelectorAll('[data-grid]').forEach((el) => {
      const k = el.getAttribute('data-grid');
      fillGrid(el, 12, { seed: k === 'gallery2' ? 4 : 0, framed: k === 'gallery2' ? 7 : -1 });
    });
    const ai = document.querySelector('[data-chips="ai"]');
    if (ai) { ai.innerHTML = ''; [['William', CATCOL.personne], ['Tel Aviv', CATCOL.lieu], ['Été 2024', CATCOL.even]].forEach(([t, c]) => ai.appendChild(chip(t, c, false))); }
    const posed = document.querySelector('[data-chips="posed"]');
    if (posed) { posed.innerHTML = ''; [['Famille Halimi', CATCOL.personne], ['Argentique', CATCOL.theme]].forEach(([t, c]) => posed.appendChild(chip(t, c, true))); }
    const cats = document.querySelector('[data-cats="mini"]');
    if (cats) {
      cats.innerHTML = '';
      const rows = [['ic-person', 'cat1_t', CATCOL.personne, true], ['ic-pin', 'cat2_t', CATCOL.lieu, false], ['ic-cal', 'cat3_t', CATCOL.even, false]];
      rows.forEach(([ic, key, col, on]) => {
        const r = document.createElement('div');
        r.style.cssText = `display:flex;align-items:center;gap:12px;padding:11px 13px;border-radius:13px;` +
          (on ? `background:${col}1f;border:2px solid ${col};` : `background:#1C1512;border:1px solid rgba(239,227,210,.09);`);
        r.innerHTML = `<span style="width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;${on ? `background:${col};color:#1c1409` : `background:${col}26;color:${col}`}"><svg width="20" height="20"><use href="#${ic}"/></svg></span>` +
          `<span style="flex:1;font-weight:600;font-size:15px;color:#EFE3D2">${L[key]}</span>` +
          (on ? `<span style="color:${col}"><svg width="18" height="18"><use href="#ic-check"/></svg></span>` : '');
        cats.appendChild(r);
      });
    }
  }

  /* ---------------------------------------------------- FAQ */
  function nbspGuillemets(s) {
    // keep « and » glued to their adjacent word so they never wrap alone
    return s.replace(/«\s*/g, '«\u00a0').replace(/\s*»/g, '\u00a0»');
  }

  function buildFaq(L) {
    const list = document.getElementById('faqList');
    if (!list) return;
    list.innerHTML = '';
    L.faq.forEach(([q, a]) => {
      q = nbspGuillemets(q); a = nbspGuillemets(a);
      const item = document.createElement('div');
      item.className = 'faq-item';
      item.innerHTML =
        `<button class="faq-q"><span>${q}</span><span class="pm"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="6" x2="12" y2="18"/><line x1="6" y1="12" x2="18" y2="12"/></svg></span></button>` +
        `<div class="faq-a"><div class="faq-a-inner">${a}</div></div>`;
      const btn = item.querySelector('.faq-q');
      const ans = item.querySelector('.faq-a');
      btn.addEventListener('click', () => {
        const open = item.classList.contains('open');
        list.querySelectorAll('.faq-item.open').forEach((o) => { o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
        if (!open) { item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
      });
      list.appendChild(item);
    });
  }

  /* ---------------------------------------------------- french snapshot */
  // Le HTML est la source unique du français : au chargement (avant toute
  // bascule de langue), on photographie le texte FR tel qu'écrit dans la page.
  // Cliquer EN remplace par le dictionnaire anglais ; cliquer FR restaure ceci.
  function snapshotFrench() {
    const F = I18N.fr;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (F[k] == null) F[k] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html');
      if (F[k] == null) F[k] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const k = el.getAttribute('data-i18n-aria');
      if (F[k] == null) F[k] = el.getAttribute('aria-label');
    });
  }

  /* ---------------------------------------------------- apply language */
  let currentLang = localStorage.getItem('lt_lang') || 'fr';
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lt_lang', lang);
    const L = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (L[k] != null) el.textContent = L[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html');
      if (L[k] != null) el.innerHTML = L[k];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const k = el.getAttribute('data-i18n-aria');
      if (L[k] != null) el.setAttribute('aria-label', L[k]);
    });
    document.querySelectorAll('.lang-toggle button').forEach((b) => b.classList.toggle('on', b.getAttribute('data-lang') === lang));
    buildPhoneContent(L);
    buildFaq(L);
  }

  /* ---------------------------------------------------- nav + interactions */
  function initNav() {
    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');
    if (burger && menu) {
      burger.addEventListener('click', () => menu.classList.toggle('open'));
      menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.classList.remove('open')));
    }

    document.querySelectorAll('.lang-toggle button').forEach((b) =>
      b.addEventListener('click', () => applyLang(b.getAttribute('data-lang'))));
  }

  /* ---------------------------------------------------- reveal on scroll */
  function initReveal() {
    const els = Array.from(document.querySelectorAll('.reveal'));
    document.documentElement.classList.add('js-reveal');
    const reveal = (e) => e.classList.add('in');
    // reveal anything already within (or above) the viewport
    const checkVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((e) => { if (!e.classList.contains('in') && e.getBoundingClientRect().top < vh * 0.92) reveal(e); });
    };
    if (!('IntersectionObserver' in window)) { els.forEach(reveal); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach((e) => io.observe(e));
    // safety nets: rect check now + on scroll, and a hard fallback so nothing ever stays hidden
    checkVisible();
    window.addEventListener('scroll', checkVisible, { passive: true });
    requestAnimationFrame(checkVisible);
    setTimeout(() => els.forEach(reveal), 1500);
  }

  /* ---------------------------------------------------- tag-attribution scene (manège) */
  function initTagScene() {
    const stage = document.querySelector('.ts-stage');
    if (!stage) return;
    const shots = Array.from(stage.querySelectorAll('.ts-shot'));
    const dots = Array.from(stage.querySelectorAll('.ts-dots i'));
    const n = shots.length;
    if (!n) return;
    let active = 0;
    const sp = () => Math.min(280, Math.max(150, window.innerWidth * 0.2));
    function layout() {
      const step = sp();
      shots.forEach((s, k) => {
        let rel = ((k - active) % n + n) % n;
        if (rel > n / 2) rel -= n;
        const ax = Math.abs(rel);
        const vis = ax <= 2;
        const x = rel * step;
        const sc = Math.max(.55, 1 - ax * 0.16);
        const ry = Math.max(-32, Math.min(32, -rel * 22));
        s.style.transform = `translate(-50%, -50%) translateX(${x}px) rotateY(${ry}deg) scale(${sc})`;
        const print = s.querySelector('.ts-print');
        if (print) print.style.filter = ax === 0 ? 'none' : `blur(${Math.min(9, ax * 3.4)}px)`;
        s.style.opacity = vis ? (ax === 0 ? 1 : ax === 1 ? .82 : .42) : 0;
        s.style.zIndex = 20 - ax;
        s.classList.toggle('on', ax === 0);
        s.classList.toggle('tagged', vis && rel <= 0);
      });
      dots.forEach((d, k) => d.classList.toggle('on', k === active));
    }
    layout();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer;
    const next = () => { active = (active + 1) % n; layout(); };
    const start = () => { timer = setInterval(next, 3000); };
    start();
    window.addEventListener('resize', layout);
    document.addEventListener('visibilitychange', () => {
      clearInterval(timer);
      if (!document.hidden) start();
    });
  }

  /* ---------------------------------------------------- mise en page figée
     Réglages issus de l'ancien panneau de conception (Tweaks), gravés en dur.
     Positionne les blocs des sections « Plaisir des retrouvailles » et
     « Import-Export », le panneau coloré et la ligne pointillée dorée. */
  const FIXED = {
    featBg: { top: 1002, height: 988, tilt: 122, color: '#1c1c1c' },
    servicesBg: '#15100F',
    line: { sx: 841, sy: 1222, ex: 43, ey: 567, curve: 56, dot: 3, gap: 6 },
    movables: [
      { sel: '.attr-t1', ctx: '.attr-flow', z: '6', x: -88, y: 491 },
      { sel: '.cwf-phone', ctx: '.cwf-demo', z: '4', x: 317, y: 0, freeze: true },
      { sel: '.cwf-tag', ctx: '.cwf-phone', z: '8', x: 464, y: -1 },
      { sel: '.attr-t2', ctx: '.cwf-phone', z: '7', x: 474, y: 491 },
      { sel: '.xmp-mv-title', ctx: '.xmp-showcase', z: '8', x: 6, y: 546 },
      { sel: '.xmp-mv-sidecar', ctx: '.xmp-showcase', z: '7', w: '320px', x: 367, y: 593 },
      { sel: '.xmp-mv-embed', ctx: '.xmp-showcase', z: '7', w: '320px', x: 6, y: 593 },
      { sel: '.xmp-mv-bonus', ctx: '.xmp-showcase', z: '7', w: '320px', x: 730, y: 567 },
    ],
  };

  function darkenHex(hex, f) {
    const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
    if (!m) return hex || '#1A130E';
    const n = parseInt(m[1], 16);
    const r = Math.round(((n >> 16) & 255) * (1 - f));
    const g = Math.round(((n >> 8) & 255) * (1 - f));
    const b = Math.round((n & 255) * (1 - f));
    return `rgb(${r},${g},${b})`;
  }

  function drawGoldLine() {
    const flow = document.querySelector('.attr-flow');
    const svg = document.querySelector('.attr-line');
    const path = document.querySelector('.attr-line-path');
    if (!flow || !svg || !path) return;
    const c = FIXED.line;
    path.style.strokeWidth = c.dot + 'px';
    path.style.strokeDasharray = '0 ' + c.gap;
    svg.setAttribute('viewBox', `0 0 ${flow.clientWidth} ${flow.clientHeight}`);
    const dx = c.ex - c.sx, dy = c.ey - c.sy;
    const len = Math.hypot(dx, dy) || 1;
    const nx = dy / len, ny = -dx / len;
    const bow = len * (c.curve / 100);
    const cx = (c.sx + c.ex) / 2 + nx * bow;
    const cy = (c.sy + c.ey) / 2 + ny * bow;
    path.setAttribute('d', `M ${c.sx} ${c.sy} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${c.ex} ${c.ey}`);
  }

  // Agrandit chaque conteneur pour couvrir le bloc placé le plus bas
  // (les blocs positionnés en absolu sortent du flux normal).
  function containMovables() {
    const groups = new Map();
    FIXED.movables.forEach((m) => {
      const ctx = document.querySelector(m.ctx);
      const el = document.querySelector(m.sel);
      if (!ctx || !el) return;
      if (!groups.has(ctx)) groups.set(ctx, []);
      groups.get(ctx).push(el);
    });
    groups.forEach((els, ctx) => {
      const cr = ctx.getBoundingClientRect();
      let maxBottom = 0;
      els.forEach((el) => { maxBottom = Math.max(maxBottom, el.getBoundingClientRect().bottom - cr.top); });
      ctx.style.minHeight = Math.ceil(maxBottom + 24) + 'px';
    });
  }

  // Les positions figées sont calibrées pour le grand écran. En dessous de
  // ce seuil elles déborderaient : on relâche tout et le CSS reprend la main
  // (empilement naturel, cf. @media dans site.css).
  const FIXED_LAYOUT_MIN_WIDTH = 999;
  const fixedLayoutApplies = () => window.innerWidth >= FIXED_LAYOUT_MIN_WIDTH;

  function releaseMovables() {
    FIXED.movables.forEach((m) => {
      const el = document.querySelector(m.sel);
      const ctx = document.querySelector(m.ctx);
      if (el) {
        el.style.position = '';
        el.style.margin = '';
        el.style.width = '';
        el.style.left = '';
        el.style.top = '';
        el.style.zIndex = '';
      }
      if (ctx) ctx.style.minHeight = '';
    });
    const svg = document.querySelector('.attr-line');
    if (svg) svg.style.display = 'none';
  }

  function applyFixedLayout() {
    const bg = document.querySelector('.feat-bg');
    if (bg) {
      const c = FIXED.featBg;
      // Le panneau coloré est positionné au pixel près pour le grand écran :
      // sous le seuil, il se retrouverait n'importe où → on l'éteint.
      if (!fixedLayoutApplies()) {
        bg.style.display = 'none';
      } else {
        bg.style.display = 'block';
        bg.style.setProperty('--feat-top', c.top + 'px');
        bg.style.setProperty('--feat-height', c.height + 'px');
        bg.style.setProperty('--feat-fill', `linear-gradient(180deg, ${c.color}, ${darkenHex(c.color, 0.32)})`);
        bg.style.setProperty('--feat-clip', `polygon(0 ${Math.max(0, c.tilt)}px, 100% ${Math.max(0, -c.tilt)}px, 100% 100%, 0 100%)`);
      }
    }
    const svc = document.getElementById('services');
    if (svc) svc.style.background = FIXED.servicesBg;

    if (!fixedLayoutApplies()) { releaseMovables(); return; }

    const svg = document.querySelector('.attr-line');
    if (svg) svg.style.display = '';
    FIXED.movables.forEach((m) => {
      const el = document.querySelector(m.sel);
      const ctx = document.querySelector(m.ctx);
      if (!el || !ctx) return;
      if (m.freeze) ctx.style.minHeight = el.offsetHeight + 'px';
      el.style.position = 'absolute';
      el.style.margin = '0';
      if (m.w) el.style.width = m.w;
      el.style.left = m.x + 'px';
      el.style.top = m.y + 'px';
      el.style.zIndex = m.z;
    });
    containMovables();
    drawGoldLine();
  }

  /* ---------------------------------------------------- fonctionnalités */
  // Sur ordinateur, le survol déplie la rubrique. Au doigt il n'y a pas de
  // survol, et :focus-visible ne se déclenche PAS à un tap (les navigateurs
  // le réservent au clavier) : sans ce câblage, les six rubriques seraient
  // muettes sur mobile. La classe .is-open rejoue exactement le rendu du
  // survol — le CSS n'a rien de nouveau à décrire.
  function initFeatureRows() {
    const rows = document.querySelectorAll('.fxr-index li');
    if (!rows.length) return;

    rows.forEach((li) => {
      const toggle = () => {
        const open = li.classList.contains('is-open');
        // Une seule rubrique ouverte à la fois, comme la FAQ : six panneaux
        // dépliés rendraient la liste illisible sur un écran de téléphone.
        rows.forEach((o) => o.classList.remove('is-open'));
        if (!open) li.classList.add('is-open');
        // Refermer doit aussi lâcher le focus : sinon la rangée reste
        // « active » aux yeux du navigateur après le tap qui la ferme.
        else li.blur();
      };

      li.addEventListener('click', toggle);

      // Le tabindex="0" du balisage promet déjà l'accès clavier : Entrée et
      // Espace doivent donc faire ce que fait le tap.
      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();   // sinon Espace fait défiler la page
          toggle();
        }
      });
    });
  }

  /* ---------------------------------------------------- boot */
  function boot() {
    initNav();
    snapshotFrench();
    applyLang(currentLang);
    initReveal();
    initTagScene();
    initFeatureRows();
    applyFixedLayout();
    window.addEventListener('resize', applyFixedLayout);
    window.addEventListener('load', applyFixedLayout);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  // expose for tweaks
  window.LTSite = { applyLang, fillGrid };
})();
