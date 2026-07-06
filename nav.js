/* ============================================================
   nav.js — The People's Parliament
   SHARED HEADER, NAV, FOOTER + STYLES

   TO UPDATE ANYTHING SITE-WIDE, EDIT THIS FILE ONLY:
   - Main menu: NAV_LINKS
   - "More" dropdown: MORE_LINKS
   - Contact email: CONTACT_EMAIL
   - Breaking news banner: ALERT
   - Footer columns: FOOTER_LINKS
   ============================================================ */

const CONTACT_EMAIL = 'admin@yourdomain.com';

const NAV_LINKS = [
  { href:'index.html',      label:'Home'         },
  { href:'propose.html',    label:'Propose'      },
  { href:'polls.html',      label:'Vote'         },
  { href:'scoreboard.html', label:'Scoreboard'   },
];

const MORE_LINKS = [
  { href:'about.html',      label:'About' },
  { href:'budget.html',     label:'The Budget, Explained' },
];

const ALERT = {
  badge:   '🔴 Breaking',
  text:    '<strong>Melbourne right now:</strong> \'Ditch the Witch\' billboard trucks target Victorian Premier Jacinta Allan — sexist protest or free speech? You decide.',
  linkText:'Vote Now',
  linkHref:'polls.html',
  show:    true,
};

const FOOTER_LINKS = {
  parliament: [
    { href:'polls.html',      label:'Vote'                  },
    { href:'propose.html',    label:'Propose a Topic'       },
    { href:'scoreboard.html', label:'Results & Scoreboard'  },
    { href:'budget.html',     label:'The Budget, Explained' },
  ],
  data: [
    { href:'scoreboard.html', label:'Real vs Ours'         },
    { href:'budget.html',     label:'State of the Nation'  },
    { href:'budget.html',     label:'Budget Data'          },
  ],
  about: [
    { href:'about.html',             label:'The Experiment'  },
    { href:'about.html#methodology', label:'Methodology'     },
    { href:'about.html#faq',         label:'FAQ'             },
    { href:`mailto:${CONTACT_EMAIL}`,label:'Contact'         },
  ],
};

/* ── END EDIT ZONE ── */

const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Barlow:wght@300;400;500;600&family=Barlow+Condensed:wght@600;700&display=swap');
:root{
  --navy:#08142a;--navy2:#0e1f3d;--navy3:#16305a;
  --gold:#c8a84b;--gold2:#e2c97e;--gold3:#f0dfa0;
  --cream:#f4efe4;--cream2:#ede6d6;
  --text:#12203a;--muted:#5c6b82;--border:#c8b98a;--border2:#e2d8bc;
  --green:#155c35;--green2:#1e8050;--red:#7a1818;--red2:#a02020;
  --amber2:#c47f00;
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Barlow',sans-serif;background:var(--cream);color:var(--text);overflow-x:hidden}
.section-label{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--border2);display:flex;align-items:center;gap:10px}
.section-label::before{content:'';display:inline-block;width:18px;height:2px;background:var(--gold)}
.asg-header{background:var(--navy2);position:relative;overflow:hidden;border-bottom:3px solid var(--gold)}
.asg-header-bg{position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 120%,rgba(200,168,75,0.08),transparent 70%),repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px);pointer-events:none}
.asg-header-inner{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;gap:22px;padding:18px 32px;max-width:1100px;margin:0 auto}
.asg-logo{height:80px;width:auto;flex-shrink:0;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.5))}
.asg-header-text{text-align:center}
.asg-site-name{font-family:'Cormorant Garamond',serif;font-size:36px;font-weight:700;color:#fff;letter-spacing:0.5px;line-height:1.05}
.asg-site-name em{color:var(--gold2);font-style:normal}
.asg-byline{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3.5px;text-transform:uppercase;color:var(--gold);margin-top:7px}
.asg-tagline{font-size:12px;color:rgba(255,255,255,0.45);margin-top:5px;font-style:italic}
.asg-nav{background:var(--navy);display:flex;justify-content:center;flex-wrap:wrap;border-bottom:1px solid rgba(200,168,75,0.4);position:relative;z-index:20}
.asg-nav a{color:rgba(255,255,255,0.7);text-decoration:none;padding:12px 18px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;transition:all 0.2s;border-right:1px solid rgba(255,255,255,0.06);position:relative}
.asg-nav a::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--gold);transform:scaleX(0);transition:transform 0.2s}
.asg-nav a:hover{color:#fff;background:rgba(255,255,255,0.04)}
.asg-nav a:hover::after,.asg-nav a.active::after{transform:scaleX(1)}
.asg-nav a.active{color:#fff}
.asg-nav-more{position:relative}
.asg-nav-more>button{background:none;border:none;color:rgba(255,255,255,0.7);cursor:pointer;padding:12px 18px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;border-right:1px solid rgba(255,255,255,0.06);transition:all 0.2s}
.asg-nav-more>button:hover{color:#fff;background:rgba(255,255,255,0.04)}
.asg-nav-more.open>button{color:#fff;background:rgba(255,255,255,0.06)}
.asg-nav-more-menu{display:none;position:absolute;top:100%;left:0;background:var(--navy2);border:1px solid rgba(200,168,75,0.4);min-width:200px;box-shadow:0 8px 20px rgba(0,0,0,0.35)}
.asg-nav-more.open .asg-nav-more-menu{display:block}
.asg-nav-more-menu a{display:block;padding:11px 16px;border-right:none;border-bottom:1px solid rgba(255,255,255,0.06)}
.asg-nav-more-menu a:last-child{border-bottom:none}
.asg-alert{background:linear-gradient(90deg,var(--navy3),var(--navy2),var(--navy3));border-bottom:1px solid rgba(200,168,75,0.25);padding:10px 20px;display:flex;align-items:center;justify-content:center;gap:12px}
.asg-alert-badge{background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:3px 10px;font-weight:700;flex-shrink:0}
.asg-alert-text{font-size:12px;color:rgba(255,255,255,0.85)}
.asg-alert-text strong{color:var(--gold2)}
.asg-alert-cta{background:transparent;border:1px solid var(--gold);color:var(--gold2);font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;padding:4px 12px;text-decoration:none;white-space:nowrap;transition:all 0.2s}
.asg-alert-cta:hover{background:var(--gold);color:var(--navy)}
.asg-footer-strip{background:var(--navy2);border-top:1px solid rgba(200,168,75,0.2);padding:10px 32px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
.asg-footer-strip-links{display:flex;gap:18px}
.asg-footer-strip-links a{font-size:11px;color:rgba(255,255,255,0.4);text-decoration:none;transition:color 0.2s}
.asg-footer-strip-links a:hover{color:var(--gold2)}
.asg-footer-main{background:var(--navy);padding:28px 32px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:32px;border-top:1px solid rgba(255,255,255,0.06)}
.asg-footer-logo-wrap{display:flex;align-items:center;gap:14px;margin-bottom:10px}
.asg-footer-logo-img{height:48px;width:auto;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.5))}
.asg-footer-logo{font-family:'Cormorant Garamond',serif;font-size:18px;color:#fff}
.asg-footer-desc{font-size:12px;color:rgba(255,255,255,0.4);line-height:1.6;max-width:260px}
.asg-footer-col h4{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
.asg-footer-col a{display:block;font-size:12px;color:rgba(255,255,255,0.45);text-decoration:none;margin-bottom:6px;transition:color 0.2s}
.asg-footer-col a:hover{color:var(--gold2)}
.asg-footer-bottom{background:var(--navy);border-top:1px solid rgba(255,255,255,0.06);padding:12px 32px;text-align:center;font-size:11px;color:rgba(255,255,255,0.25);letter-spacing:0.3px}
@media(max-width:900px){
  .asg-header-inner{flex-direction:column;gap:10px}
  .asg-logo{height:60px}
  .asg-footer-main{grid-template-columns:1fr 1fr}
}
@media(max-width:600px){
  .asg-site-name{font-size:26px}
  .asg-footer-main{grid-template-columns:1fr}
  .asg-footer-strip{flex-direction:column;text-align:center}
}
`;

function buildHeader(activeHref) {
  const navLinks = NAV_LINKS.map(l => {
    const isActive = activeHref && (l.href === activeHref || window.location.pathname.endsWith(l.href));
    return `<a href="${l.href}"${isActive ? ' class="active"' : ''}>${l.label}</a>`;
  }).join('');

  const moreActive = MORE_LINKS.some(l => activeHref && (l.href === activeHref || window.location.pathname.endsWith(l.href)));
  const moreLinks = MORE_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  const moreHTML = `
    <div class="asg-nav-more" id="asg-nav-more">
      <button type="button"${moreActive ? ' class="active"' : ''}>More ▾</button>
      <div class="asg-nav-more-menu">${moreLinks}</div>
    </div>`;

  const alertHTML = ALERT.show ? `
    <div class="asg-alert">
      <span class="asg-alert-badge">${ALERT.badge}</span>
      <span class="asg-alert-text">${ALERT.text}</span>
      <a class="asg-alert-cta" href="${ALERT.linkHref}">${ALERT.linkText}</a>
    </div>` : '';

  return `
    <header class="asg-header">
      <div class="asg-header-bg"></div>
      <div class="asg-header-inner">
        <img class="asg-logo" src="kangacourt.png" alt="The People's Parliament crest">
        <div class="asg-header-text">
          <div class="asg-site-name">The People's <em>Parliament</em></div>
          <div class="asg-byline">Government of the People &nbsp;·&nbsp; By the People &nbsp;·&nbsp; For the People</div>
          <div class="asg-tagline">The parliament Canberra doesn't want you to have.</div>
        </div>
        <img class="asg-logo" src="kangacourt.png" alt="The People's Parliament crest">
      </div>
    </header>
    <nav class="asg-nav">${navLinks}${moreHTML}</nav>
    ${alertHTML}`;
}

function buildFooter() {
  const makeLinks = links => links.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  return `
    <div class="asg-footer-strip">
      <span style="font-size:11px;color:rgba(255,255,255,0.35)">
        🇦🇺 🇦🇺 The People's Parliament — A public civic experiment — Not affiliated with the Australian Government
      </span>
      <div class="asg-footer-strip-links">
        <a href="about.html">About</a>
        <a href="propose.html">Propose</a>
        <a href="polls.html">Vote</a>
        <a href="mailto:${CONTACT_EMAIL}">Contact</a>
      </div>
    </div>
    <div class="asg-footer-main">
      <div>
        <div class="asg-footer-logo-wrap">
          <img class="asg-footer-logo-img" src="kangacourt.png" alt="logo">
          <div class="asg-footer-logo">The People's Parliament</div>
        </div>
        <div class="asg-footer-desc">The parliament Canberra doesn't want you to have. Australians vote on real policy issues — we track who governs better. Because some things are decided at 4am behind closed doors. This is your voice.</div>
      </div>
      <div class="asg-footer-col"><h4>Parliament</h4>${makeLinks(FOOTER_LINKS.parliament)}</div>
      <div class="asg-footer-col"><h4>Data</h4>${makeLinks(FOOTER_LINKS.data)}</div>
      <div class="asg-footer-col"><h4>About</h4>${makeLinks(FOOTER_LINKS.about)}</div>
    </div>
    <div class="asg-footer-bottom">
      The People's Parliament &nbsp;·&nbsp; Not affiliated with the Australian Government
      &nbsp;·&nbsp; All decisions are symbolic and experimental
      &nbsp;·&nbsp; Voting restricted to Australian IP addresses
    </div>`;
}

(function init() {
  const style = document.createElement('style');
  style.textContent = SHARED_CSS;
  document.head.insertBefore(style, document.head.firstChild);

  function getActivePage() {
    const s = document.querySelector('script[data-page]');
    return s ? s.getAttribute('data-page') : window.location.pathname.split('/').pop();
  }

  function mount() {
    const headerEl = document.getElementById('asg-header');
    if (headerEl) headerEl.innerHTML = buildHeader(getActivePage());
    const footerEl = document.getElementById('asg-footer');
    if (footerEl) footerEl.innerHTML = buildFooter();

    const moreWrap = document.getElementById('asg-nav-more');
    if (moreWrap) {
      const btn = moreWrap.querySelector('button');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        moreWrap.classList.toggle('open');
      });
      document.addEventListener('click', () => moreWrap.classList.remove('open'));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
