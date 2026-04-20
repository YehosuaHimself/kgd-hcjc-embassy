/* =========================================================
   KGD-HCJC EMBASSY · SINGLE-FILE APP
   Hash router · i18n (16 languages) · Chancery simulation
   Language switcher · Back-to-top · Breadcrumb
   ========================================================= */
(function () {
  'use strict';

  // Enable JS-enhanced mode (hides non-active sections)
  document.documentElement.dataset.js = 'yes';

  // ============ ROUTING ============
  const ROUTES = {
    'home':{title:'KGD-HCJC · Embassy',crumb:[{l:'Home',h:'#home'}],ref:'— V 1.0.0 · 2026-04-19',parent:null},
    'about':{title:'About · KGD-HCJC',crumb:[{l:'Home',h:'#home'},{l:'About',cur:true}],ref:'— SIX DEFINING PAGES',parent:'about'},
    'about-mandate':{title:'Mandate · About',crumb:[{l:'Home',h:'#home'},{l:'About',h:'#about'},{l:'Mandate',cur:true}],ref:'— 01 of 06',parent:'about'},
    'about-doctrine':{title:'Doctrine · About',crumb:[{l:'Home',h:'#home'},{l:'About',h:'#about'},{l:'Doctrine',cur:true}],ref:'— 02 of 06',parent:'about'},
    'about-history':{title:'History · About',crumb:[{l:'Home',h:'#home'},{l:'About',h:'#about'},{l:'History',cur:true}],ref:'— 03 of 06',parent:'about'},
    'about-leadership':{title:'Leadership · About',crumb:[{l:'Home',h:'#home'},{l:'About',h:'#about'},{l:'Leadership',cur:true}],ref:'— 04 of 06',parent:'about'},
    'about-standing':{title:'Standing & Accreditation',crumb:[{l:'Home',h:'#home'},{l:'About',h:'#about'},{l:'Standing',cur:true}],ref:'— DEFINING DOCUMENT',parent:'about'},
    'about-vocations':{title:'Vocations & Membership',crumb:[{l:'Home',h:'#home'},{l:'About',h:'#about'},{l:'Vocations',cur:true}],ref:'— 06 of 06',parent:'about'},
    'services':{title:'Services · KGD-HCJC',crumb:[{l:'Home',h:'#home'},{l:'Services',cur:true}],ref:'— FIVE SERVICE LINES',parent:'services'},
    'services-pilgrim':{title:'Pilgrim Tours · Services',crumb:[{l:'Home',h:'#home'},{l:'Services',h:'#services'},{l:'Pilgrim Tours',cur:true}],ref:'— SERVICE I · Issues testimonium',parent:'services'},
    'services-exchange':{title:'Exchange · Services',crumb:[{l:'Home',h:'#home'},{l:'Services',h:'#services'},{l:'Exchange',cur:true}],ref:'— SERVICE II',parent:'services'},
    'services-education':{title:'Educational Services',crumb:[{l:'Home',h:'#home'},{l:'Services',h:'#services'},{l:'Educational',cur:true}],ref:'— SERVICE III',parent:'services'},
    'services-travel':{title:'Travel · Services',crumb:[{l:'Home',h:'#home'},{l:'Services',h:'#services'},{l:'Travel',cur:true}],ref:'— SERVICE IV',parent:'services'},
    'services-consultation':{title:'Consultation · Services',crumb:[{l:'Home',h:'#home'},{l:'Services',h:'#services'},{l:'Consultation',cur:true}],ref:'— SERVICE V · Confidential by default',parent:'services'},
    'seats':{title:'Seats & Missions · KGD-HCJC',crumb:[{l:'Home',h:'#home'},{l:'Seats',cur:true}],ref:'— DIRECTORY',parent:'seats'},
    'seat-vienna':{title:'The Mission at Vienna',crumb:[{l:'Home',h:'#home'},{l:'Seats',h:'#seats'},{l:'Vienna',cur:true}],ref:'— MISSION OF RECORD',parent:'seats'},
    'seat-new-york':{title:'The Mission at New York',crumb:[{l:'Home',h:'#home'},{l:'Seats',h:'#seats'},{l:'New York',cur:true}],ref:'— SEAT AT THE NATIONS',parent:'seats'},
    'press':{title:'Press & Communiqués',crumb:[{l:'Home',h:'#home'},{l:'Press',cur:true}],ref:'— ARCHIVE',parent:'press'},
    'press-communique':{title:'On the Accreditation of a Mission at Brussels',crumb:[{l:'Home',h:'#home'},{l:'Press',h:'#press'},{l:'2026-04-19',cur:true}],ref:'— PERMANENT URL',parent:'press'},
    'press-accreditation':{title:'Press Accreditation',crumb:[{l:'Home',h:'#home'},{l:'Press',h:'#press'},{l:'Accreditation',cur:true}],ref:'— FOR JOURNALISTS',parent:'press'},
    'engage':{title:'Engage · KGD-HCJC',crumb:[{l:'Home',h:'#home'},{l:'Engage',cur:true}],ref:'— EIGHT DOORS',parent:'engage'},
    'calendar':{title:'Calendar · KGD-HCJC',crumb:[{l:'Home',h:'#home'},{l:'Calendar',cur:true}],ref:'— LITURGICAL & INSTITUTIONAL',parent:null},
    'advisories':{title:'Advisories & Crisis Line',crumb:[{l:'Home',h:'#home'},{l:'Advisories',cur:true}],ref:'— 24/7 CONSULAR LINE',parent:null},
    'contact':{title:'Contact · KGD-HCJC',crumb:[{l:'Home',h:'#home'},{l:'Contact',cur:true}],ref:'— EMBASSY-GRADE CHANNELS',parent:'contact'},
    'legal-treaty':{title:'Treaty Standing · Legal',crumb:[{l:'Home',h:'#home'},{l:'Legal'},{l:'Treaty Standing',cur:true}],ref:'— LEGAL DOCUMENT',parent:null},
    'legal-accessibility':{title:'Accessibility · Legal',crumb:[{l:'Home',h:'#home'},{l:'Legal'},{l:'Accessibility',cur:true}],ref:'— WCAG 2.2 AA',parent:null},
    'legal-privacy':{title:'Privacy · Legal',crumb:[{l:'Home',h:'#home'},{l:'Legal'},{l:'Privacy',cur:true}],ref:'— GDPR-COMPLIANT',parent:null},
    'legal-imprint':{title:'Imprint · Legal',crumb:[{l:'Home',h:'#home'},{l:'Legal'},{l:'Imprint',cur:true}],ref:'— MEDIA LAW §24 §25',parent:null},
    'chancery':{title:'Chancery · Restricted',crumb:[{l:'Home',h:'#home'},{l:'Chancery',cur:true}],ref:'— RESTRICTED',parent:null},
    'design':{title:'Design System',crumb:[{l:'Home',h:'#home'},{l:'Design System',cur:true}],ref:'— V 1.0.0',parent:null},
    '404':{title:'Document not found',crumb:[{l:'Home',h:'#home'},{l:'404',cur:true}],ref:'— NOT FOUND',parent:null}
  };

  function route() {
    var hash = (location.hash || '#home').slice(1);
    var r = ROUTES[hash];
    if (!r) { hash = '404'; r = ROUTES['404']; }
    // toggle sections
    var found = false;
    document.querySelectorAll('[data-page]').forEach(function (el) {
      var on = el.dataset.page === hash;
      el.classList.toggle('active', on);
      if (on) found = true;
    });
    if (!found) {
      var fallback = document.querySelector('[data-page="404"]');
      if (fallback) fallback.classList.add('active');
    }
    // update document title
    document.title = r.title + ' · Kingdom of God — Holy Church of Jesus Christ';
    // update breadcrumb
    var crumb = document.getElementById('crumb');
    var crumbRef = document.getElementById('crumbRef');
    if (crumb) {
      crumb.innerHTML = r.crumb.map(function (c, i) {
        var sep = i > 0 ? '<span class="sep">/</span>' : '';
        if (c.cur) return sep + '<span class="cur">' + c.l + '</span>';
        if (c.h) return sep + '<a href="' + c.h + '">' + c.l + '</a>';
        return sep + '<span>' + c.l + '</span>';
      }).join('');
    }
    if (crumbRef) crumbRef.innerHTML = '<span class="ref">' + r.ref + '</span>';
    // active state in top nav
    document.querySelectorAll('nav.primary a').forEach(function (a) {
      var rt = a.getAttribute('data-route');
      a.classList.toggle('on', r.parent === rt);
    });
    // scroll to top
    window.scrollTo({top: 0, behavior: 'instant'});
  }
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);
  if (document.readyState !== 'loading') route();

  // ============ I18N ============
  var I18N = {
    en:{"brand.embassy":"Embassy","nav.about":"About","nav.services":"Services","nav.seats":"Seats","nav.press":"Press","nav.engage":"Engage","nav.contact":"Contact","nav.chancery":"Chancery","hero.eye":"— Kingdom of God · Holy Church of Jesus Christ · Embassy","hero.mandate":"An Embassy Where <em>Church</em><br>and <em>State</em> Meet.","hero.sub":"The Kingdom of God — Holy Church of Jesus Christ maintains diplomatic representation under the framework of the Vienna Convention. Our two seats at Vienna and New York welcome pilgrims, students, diplomats, and partner institutions alike.","hero.seats":"Two Seats","banner.title":"Our doors are open.","banner.meta":"— Eight thresholds · Vienna & New York","persons.eye":"— For persons who come to us","persons.title":"Personal capacity","inst.eye":"— For institutions who come to us","inst.title":"Official capacity","door.pilgrim":"Pilgrim","door.student":"Student","door.exchange":"Exchange Participant","door.press":"Press & Media","door.fm":"Foreign Ministry","door.dm":"Diplomatic Mission","door.sc":"Sister Church","door.pi":"Partner Institution","enter":"Enter","footer.revised":"Last revised","footer.commitment":"— We refuse stock photography, third-party trackers, and dark patterns. This site works without JavaScript."},
    de:{"brand.embassy":"Botschaft","nav.about":"Über uns","nav.services":"Dienste","nav.seats":"Sitze","nav.press":"Presse","nav.engage":"Kontakt","nav.contact":"Kontakt","nav.chancery":"Kanzlei","hero.eye":"— Königreich Gottes · Heilige Kirche Jesu Christi · Botschaft","hero.mandate":"Eine Botschaft, wo <em>Kirche</em><br>und <em>Staat</em> sich begegnen.","hero.sub":"Das Königreich Gottes — Heilige Kirche Jesu Christi unterhält diplomatische Vertretung im Rahmen des Wiener Übereinkommens. Unsere beiden Sitze in Wien und New York empfangen Pilger, Studierende, Diplomaten und Partnerinstitutionen.","hero.seats":"Zwei Sitze","banner.title":"Unsere Türen sind offen.","persons.title":"Als Einzelperson","inst.title":"In amtlicher Eigenschaft","door.pilgrim":"Pilger","door.student":"Student","door.exchange":"Austausch-Teilnehmer","door.press":"Presse & Medien","door.fm":"Außenministerium","door.dm":"Diplomatische Mission","door.sc":"Schwesterkirche","door.pi":"Partnerinstitution","enter":"Eintreten","footer.revised":"Zuletzt überarbeitet"},
    fr:{"brand.embassy":"Ambassade","nav.about":"À propos","nav.services":"Services","nav.seats":"Sièges","nav.press":"Presse","nav.engage":"Engager","nav.contact":"Contact","nav.chancery":"Chancellerie","hero.mandate":"Une Ambassade où <em>l'Église</em><br>et <em>l'État</em> se rencontrent.","hero.seats":"Deux Sièges","banner.title":"Nos portes sont ouvertes.","persons.title":"À titre personnel","inst.title":"À titre officiel","door.pilgrim":"Pèlerin","door.student":"Étudiant","door.exchange":"Participant d'Échange","door.press":"Presse & Médias","door.fm":"Ministère des Affaires Étrangères","door.dm":"Mission Diplomatique","door.sc":"Église Sœur","door.pi":"Institution Partenaire","enter":"Entrer"},
    es:{"brand.embassy":"Embajada","nav.about":"Sobre","nav.services":"Servicios","nav.seats":"Sedes","nav.press":"Prensa","nav.engage":"Contacto","nav.contact":"Contacto","nav.chancery":"Cancillería","hero.mandate":"Una Embajada donde <em>la Iglesia</em><br>y <em>el Estado</em> se encuentran.","hero.seats":"Dos Sedes","banner.title":"Nuestras puertas están abiertas.","persons.title":"A título personal","inst.title":"En calidad oficial","door.pilgrim":"Peregrino","door.student":"Estudiante","door.exchange":"Participante de Intercambio","door.press":"Prensa y Medios","door.fm":"Ministerio de Asuntos Exteriores","door.dm":"Misión Diplomática","door.sc":"Iglesia Hermana","door.pi":"Institución Asociada","enter":"Entrar"},
    it:{"brand.embassy":"Ambasciata","nav.about":"Chi siamo","nav.services":"Servizi","nav.seats":"Sedi","nav.press":"Stampa","nav.engage":"Contatto","nav.contact":"Contatti","nav.chancery":"Cancelleria","hero.mandate":"Un'Ambasciata dove <em>Chiesa</em><br>e <em>Stato</em> si incontrano.","hero.seats":"Due Sedi","banner.title":"Le nostre porte sono aperte.","persons.title":"A titolo personale","inst.title":"In qualità ufficiale","door.pilgrim":"Pellegrino","door.student":"Studente","door.exchange":"Partecipante di Scambio","door.press":"Stampa e Media","door.fm":"Ministero degli Esteri","door.dm":"Missione Diplomatica","door.sc":"Chiesa Sorella","door.pi":"Istituzione Partner","enter":"Entra"},
    pt:{"brand.embassy":"Embaixada","nav.about":"Sobre","nav.services":"Serviços","nav.seats":"Sedes","nav.press":"Imprensa","nav.engage":"Contactar","nav.contact":"Contacto","nav.chancery":"Chancelaria","hero.mandate":"Uma Embaixada onde <em>a Igreja</em><br>e <em>o Estado</em> se encontram.","hero.seats":"Duas Sedes","banner.title":"As nossas portas estão abertas.","persons.title":"A título pessoal","inst.title":"Em caráter oficial","door.pilgrim":"Peregrino","door.student":"Estudante","door.exchange":"Participante de Intercâmbio","door.press":"Imprensa e Media","door.fm":"Ministério dos Negócios Estrangeiros","door.dm":"Missão Diplomática","door.sc":"Igreja Irmã","door.pi":"Instituição Parceira","enter":"Entrar"},
    nl:{"nav.about":"Over","nav.services":"Diensten","nav.seats":"Zetels","nav.press":"Pers","nav.engage":"Contact","nav.contact":"Contact","nav.chancery":"Kanselarij","hero.mandate":"Een Ambassade waar <em>Kerk</em><br>en <em>Staat</em> elkaar ontmoeten.","hero.seats":"Twee Zetels","banner.title":"Onze deuren staan open.","persons.title":"Persoonlijk","inst.title":"Officieel","door.pilgrim":"Pelgrim","door.student":"Student","door.exchange":"Uitwisselings-Deelnemer","door.press":"Pers & Media","door.fm":"Ministerie van Buitenlandse Zaken","door.dm":"Diplomatieke Missie","door.sc":"Zusterkerk","door.pi":"Partnerinstelling","enter":"Binnenkomen"},
    pl:{"nav.about":"O nas","nav.services":"Usługi","nav.seats":"Siedziby","nav.press":"Prasa","nav.engage":"Kontakt","nav.contact":"Kontakt","nav.chancery":"Kancelaria","hero.mandate":"Ambasada, gdzie <em>Kościół</em><br>i <em>Państwo</em> się spotykają.","hero.seats":"Dwie Siedziby","banner.title":"Nasze drzwi są otwarte.","persons.title":"W charakterze osobistym","inst.title":"W charakterze oficjalnym","door.pilgrim":"Pielgrzym","door.student":"Student","door.exchange":"Uczestnik Wymiany","door.press":"Prasa & Media","door.fm":"Ministerstwo Spraw Zagranicznych","door.dm":"Misja Dyplomatyczna","door.sc":"Kościół Siostrzany","door.pi":"Instytucja Partnerska","enter":"Wejdź"},
    la:{"brand.embassy":"Legatio","nav.about":"De Nobis","nav.services":"Munera","nav.seats":"Sedes","nav.press":"Acta","nav.engage":"Aditus","nav.contact":"Conventus","nav.chancery":"Cancellaria","hero.eye":"— Regnum Dei · Sancta Ecclesia Iesu Christi · Legatio","hero.mandate":"Legatio ubi <em>Ecclesia</em><br>et <em>Civitas</em> conveniunt.","hero.seats":"Duae Sedes","banner.title":"Portae nostrae apertae sunt.","persons.title":"Propria Persona","inst.title":"Officio Publico","door.pilgrim":"Peregrinus","door.student":"Studens","door.exchange":"Particeps Commutationis","door.press":"Acta & Nuntii","door.fm":"Ministerium a Rebus Externis","door.dm":"Legatio","door.sc":"Ecclesia Soror","door.pi":"Institutum Consociatum","enter":"Intra"},
    el:{"nav.about":"Σχετικά","nav.services":"Υπηρεσίες","nav.seats":"Έδρες","nav.press":"Τύπος","nav.engage":"Επικοινωνία","nav.contact":"Επαφή","nav.chancery":"Γραμματεία","hero.mandate":"Μια Πρεσβεία όπου <em>Εκκλησία</em><br>και <em>Πολιτεία</em> συναντώνται.","hero.seats":"Δύο Έδρες","banner.title":"Οι πόρτες μας είναι ανοιχτές.","persons.title":"Σε προσωπική ιδιότητα","inst.title":"Σε επίσημη ιδιότητα","door.pilgrim":"Προσκυνητής","door.student":"Φοιτητής","door.exchange":"Συμμετέχων Ανταλλαγής","door.press":"Τύπος & Μέσα","door.fm":"Υπουργείο Εξωτερικών","door.dm":"Διπλωματική Αποστολή","door.sc":"Αδελφή Εκκλησία","door.pi":"Συνεργαζόμενο Ίδρυμα","enter":"Είσοδος"},
    ru:{"nav.about":"О нас","nav.services":"Услуги","nav.seats":"Резиденции","nav.press":"Пресса","nav.engage":"Связь","nav.contact":"Контакты","nav.chancery":"Канцелярия","hero.mandate":"Посольство, где <em>Церковь</em><br>и <em>Государство</em> встречаются.","hero.seats":"Две резиденции","banner.title":"Наши двери открыты.","persons.title":"В личном качестве","inst.title":"В официальном качестве","door.pilgrim":"Паломник","door.student":"Студент","door.exchange":"Участник Обмена","door.press":"Пресса и СМИ","door.fm":"Министерство Иностранных Дел","door.dm":"Дипломатическая Миссия","door.sc":"Сестринская Церковь","door.pi":"Институт-Партнёр","enter":"Войти"},
    uk:{"nav.about":"Про нас","nav.services":"Послуги","nav.seats":"Осідки","nav.press":"Преса","nav.engage":"Контакт","nav.contact":"Контакти","nav.chancery":"Канцелярія","hero.mandate":"Посольство, де <em>Церква</em><br>і <em>Держава</em> зустрічаються.","hero.seats":"Два осідки","banner.title":"Наші двері відчинені.","persons.title":"В особистій якості","inst.title":"В офіційній якості","door.pilgrim":"Паломник","door.student":"Студент","door.exchange":"Учасник Обміну","door.press":"Преса та ЗМІ","door.fm":"Міністерство Закордонних Справ","door.dm":"Дипломатична Місія","door.sc":"Сестринська Церква","door.pi":"Інституція-Партнер","enter":"Увійти"},
    ar:{"nav.about":"حول","nav.services":"الخدمات","nav.seats":"المقار","nav.press":"الصحافة","nav.engage":"تواصل","nav.contact":"اتصال","nav.chancery":"المكتب","hero.mandate":"سفارة حيث تلتقي <em>الكنيسة</em><br>و<em>الدولة</em>.","hero.seats":"مقَرّان","banner.title":"أبوابنا مفتوحة.","persons.title":"بصفة شخصية","inst.title":"بصفة رسمية","door.pilgrim":"حاج","door.student":"طالب","door.exchange":"مشارك في التبادل","door.press":"الصحافة والإعلام","door.fm":"وزارة الخارجية","door.dm":"البعثة الدبلوماسية","door.sc":"الكنيسة الشقيقة","door.pi":"المؤسسة الشريكة","enter":"ادخل"},
    zh:{"nav.about":"关于","nav.services":"服务","nav.seats":"两座","nav.press":"新闻","nav.engage":"联系","nav.contact":"联络","nav.chancery":"秘书处","hero.mandate":"教会与国家<br>相遇的<em>使馆</em>。","hero.seats":"双座","banner.title":"我们的门是敞开的。","persons.title":"以个人身份","inst.title":"以官方身份","door.pilgrim":"朝圣者","door.student":"学生","door.exchange":"交流参与者","door.press":"新闻与媒体","door.fm":"外交部","door.dm":"外交使团","door.sc":"姊妹教会","door.pi":"合作机构","enter":"进入"},
    ja:{"nav.about":"概要","nav.services":"業務","nav.seats":"二座","nav.press":"報道","nav.engage":"連絡","nav.contact":"連絡先","nav.chancery":"秘書局","hero.mandate":"<em>教会</em>と<em>国家</em><br>が出会う大使館。","hero.seats":"二座","banner.title":"私たちの扉は開かれています。","persons.title":"個人として","inst.title":"公式として","door.pilgrim":"巡礼者","door.student":"学生","door.exchange":"交換参加者","door.press":"報道・メディア","door.fm":"外務省","door.dm":"外交使節団","door.sc":"姉妹教会","door.pi":"パートナー機関","enter":"入る"},
    ko:{"nav.about":"소개","nav.services":"업무","nav.seats":"두 자리","nav.press":"언론","nav.engage":"연락","nav.contact":"연락처","nav.chancery":"사무국","hero.mandate":"<em>교회</em>와 <em>국가</em>가<br>만나는 대사관.","hero.seats":"두 자리","banner.title":"우리의 문은 열려 있습니다.","persons.title":"개인 자격","inst.title":"공식 자격","door.pilgrim":"순례자","door.student":"학생","door.exchange":"교류 참가자","door.press":"언론 및 미디어","door.fm":"외교부","door.dm":"외교 사절단","door.sc":"자매 교회","door.pi":"파트너 기관","enter":"들어가기"}
  };
  var RTL = ['ar'];

  function applyLang(code) {
    var pack = I18N[code] || I18N.en;
    var fallback = I18N.en;
    document.documentElement.lang = code;
    document.documentElement.dir = RTL.indexOf(code) >= 0 ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var v = pack[k] !== undefined ? pack[k] : fallback[k];
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      var v = pack[k] !== undefined ? pack[k] : fallback[k];
      if (v) el.innerHTML = v;
    });
    var lab = document.getElementById('langLabel');
    if (lab) lab.textContent = code.toUpperCase();
    document.querySelectorAll('.lang-panel button[data-lang]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === code);
    });
  }

  // Wire language panel
  (function () {
    var btn = document.getElementById('langBtn');
    var panel = document.getElementById('langPanel');
    if (!btn || !panel) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = panel.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function (e) {
      if (panel.classList.contains('open') && !panel.contains(e.target) && !btn.contains(e.target)) {
        panel.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    panel.querySelectorAll('button[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        applyLang(b.getAttribute('data-lang'));
        panel.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        panel.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  })();

  // ============ CHANCERY ============
  (function () {
    var sess = document.getElementById('chSession');
    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function tick() {
      if (!sess) return;
      var d = new Date();
      var cet = new Date(d.getTime() + (60 * 60 * 1000) + d.getTimezoneOffset() * 60000);
      sess.textContent = d.toISOString().slice(0, 10) + ' · ' + pad(cet.getHours()) + ':' + pad(cet.getMinutes()) + ' CET · Vienna';
    }
    tick(); setInterval(tick, 30 * 1000);

    var seg = document.querySelector('.ch-seg');
    if (seg) {
      var btns = seg.querySelectorAll('button');
      btns.forEach(function (b) {
        b.addEventListener('click', function () {
          btns.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
          b.setAttribute('aria-pressed', 'true');
        });
      });
    }

    var form = document.getElementById('chForm');
    var sub = document.getElementById('chSubmit');
    var denial = document.getElementById('chDenial');
    if (form && sub && denial) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        denial.classList.remove('on');
        var label = sub.querySelector('.t'), arr = sub.querySelector('.arr'), kbd = sub.querySelector('.kbd'), prog = sub.querySelector('.ch-progress');
        sub.setAttribute('disabled', 'true');
        if (label) label.style.display = 'none';
        if (arr) arr.style.display = 'none';
        if (kbd) kbd.style.display = 'none';
        if (prog) prog.classList.add('on');
        setTimeout(function () {
          if (prog) prog.classList.remove('on');
          if (label) label.style.display = '';
          if (arr) arr.style.display = '';
          if (kbd) kbd.style.display = '';
          sub.removeAttribute('disabled');
          denial.classList.add('on');
        }, 950);
      });
    }
  })();

  // ============ BACK TO TOP ============
  (function () {
    var btn = document.getElementById('b2t');
    if (!btn) return;
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
  })();
})();
