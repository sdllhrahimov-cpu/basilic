/* ===================================================================
   BASILIC — APPLICATION LOGIC WITH COMPLETE RESPONSIVE MOBILE DRAWER,
   FULL MULTILINGUAL SUPPORT & ULTRA-CLEAN CARDS
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'uz';
  let currentCategory = 'all';

  // Initialize AOS (Animate On Scroll)
  if (window.AOS) {
    AOS.init({
      duration: 750,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      once: true,
      offset: 40,
      disable: window.innerWidth < 768 ? 'mobile' : false // smooth performance on mobile
    });
  }

  // DOM elements
  const pillarsGrid = document.getElementById('pillarsGrid');
  const menuGrid = document.getElementById('menuFolioGrid');
  const highlightsGrid = document.getElementById('highlightsGrid');
  const menuTabs = document.querySelectorAll('.menu-tab-btn');
  const langBtns = document.querySelectorAll('.lang-btn');
  const header = document.querySelector('.site-header');
  const resForm = document.getElementById('conciergeResForm');
  const modalOverlay = document.getElementById('resModalOverlay');
  const modalClose = document.getElementById('modalCloseBtn');
  const modalDone = document.getElementById('modalDoneBtn');
  const toastBar = document.getElementById('toastBar');
  const guestPills = document.querySelectorAll('.guest-pill');
  const timeBtns = document.querySelectorAll('.time-btn');

  // Mobile Drawer elements
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileClose = document.getElementById('mobileDrawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileReserveBtn = document.getElementById('mobileReserveBtn');

  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    if (mobileToggle) mobileToggle.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    if (mobileToggle) mobileToggle.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  if (mobileReserveBtn) {
    mobileReserveBtn.addEventListener('click', closeMobileMenu);
  }

  function showToast(msg) {
    if (!toastBar) return;
    toastBar.textContent = msg;
    toastBar.classList.add('active');
    setTimeout(() => toastBar.classList.remove('active'), 2800);
  }

  function formatPrice(num) {
    return num.toLocaleString('en-US').replace(/,/g, ' ') + ' UZS';
  }

  // Render Core Pillars
  function renderPillars() {
    if (!pillarsGrid) return;
    pillarsGrid.innerHTML = '';
    RESTAURANT_DATA.pillars.forEach((p, idx) => {
      const col = document.createElement('div');
      col.className = 'pillar-card';
      col.setAttribute('data-aos', 'fade-up');
      col.setAttribute('data-aos-delay', (idx + 1) * 80);
      col.innerHTML = `
        <div class="pillar-num">${p.num}</div>
        <h3>${p.title[currentLang] || p.title.en}</h3>
        <p>${p.desc[currentLang] || p.desc.en}</p>
      `;
      pillarsGrid.appendChild(col);
    });
  }

  // Render Curated Highlights (Home section)
  function renderHighlights() {
    if (!highlightsGrid) return;
    highlightsGrid.innerHTML = '';
    const highlightIds = ['burrata-puglia', 'sea-bass-chilean', 'prime-ribeye-300g', 'signature-pavlova'];
    const curated = RESTAURANT_DATA.menuItems.filter(item => highlightIds.includes(item.id));
    const t = RESTAURANT_DATA.translations[currentLang] || RESTAURANT_DATA.translations.en;

    curated.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'highlight-item';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', (idx + 1) * 90);

      const badges = item.dietary.map(d => {
        let label = d;
        if (d === 'V') label = t.tagV || 'Vegetarian';
        if (d === 'GF') label = t.tagGF || 'Gluten-Free';
        if (d === 'Chef') label = t.tagChef || "Chef's Choice";
        return `<span class="tag-badge">[${label}]</span>`;
      }).join(' ');

      card.innerHTML = `
        <div class="highlight-thumb-wrap">
          <img src="${item.image}" alt="${item.title[currentLang] || item.title.en}" class="highlight-thumb" loading="lazy">
        </div>
        <div class="highlight-info">
          <div class="highlight-meta">
            <h3 class="highlight-title">${item.title[currentLang] || item.title.en}</h3>
            <span class="price-tag">${formatPrice(item.price)}</span>
          </div>
          <div class="folio-meta-strip">
            <span>🔥 ${item.calories} kcal</span>
            <span>·</span>
            <span>⚖️ ${item.portion}</span>
            <span>·</span>
            <span>📍 ${item.origin}</span>
          </div>
          <p class="highlight-desc">${item.desc[currentLang] || item.desc.en}</p>
          <div class="highlight-tags">${badges}</div>
        </div>
      `;
      highlightsGrid.appendChild(card);
    });
  }

  // Render Menu Folio with Calories & Minimalist Design
  function renderMenu() {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    const filtered = RESTAURANT_DATA.menuItems.filter(item => {
      return currentCategory === 'all' || item.category === currentCategory;
    });

    const t = RESTAURANT_DATA.translations[currentLang] || RESTAURANT_DATA.translations.en;

    filtered.forEach((item, idx) => {
      const card = document.createElement('article');
      card.className = 'menu-folio-card';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', ((idx % 4) + 1) * 60);

      const badges = item.dietary.map(d => {
        let label = d;
        if (d === 'V') label = t.tagV || 'Vegetarian';
        if (d === 'GF') label = t.tagGF || 'Gluten-Free';
        if (d === 'Chef') label = t.tagChef || "Chef's Choice";
        return `<span class="tag-badge">${label}</span>`;
      }).join(' ');

      const subtitleText = typeof item.subtitle === 'object' 
        ? (item.subtitle[currentLang] || item.subtitle.en)
        : item.subtitle;

      card.innerHTML = `
        <div class="folio-image-frame">
          <img src="${item.image}" alt="${item.title[currentLang] || item.title.en}" class="folio-dish-img" loading="lazy">
          <div class="folio-image-badge">${item.category.toUpperCase()}</div>
        </div>
        <div class="folio-content">
          <div class="folio-header">
            <div>
              <h3 class="folio-title">${item.title[currentLang] || item.title.en}</h3>
              <div class="folio-subtitle">${subtitleText}</div>
            </div>
            <span class="price-tag">${formatPrice(item.price)}</span>
          </div>

          <!-- Minimalist Nutrition & Gastronomy Specs Bar -->
          <div class="folio-specs-bar">
            <span class="spec-item"><span class="spec-label">${t.caloriesLabel}:</span> <strong class="spec-val">${item.calories} kcal</strong></span>
            <span class="spec-divider">/</span>
            <span class="spec-item"><span class="spec-label">${t.portionLabel}:</span> <strong class="spec-val">${item.portion}</strong></span>
            <span class="spec-divider">/</span>
            <span class="spec-item"><span class="spec-label">${t.prepLabel}:</span> <strong class="spec-val">${item.prepTime}</strong></span>
          </div>

          <p class="folio-desc">${item.desc[currentLang] || item.desc.en}</p>
          
          <div class="folio-footer">
            <div class="highlight-tags">${badges}</div>
            <a href="#reservations" class="text-link folio-reserve-btn">${t.reserveCardBtn || 'Reserve Table →'}</a>
          </div>
        </div>
      `;
      menuGrid.appendChild(card);
    });

    if (window.AOS) setTimeout(() => AOS.refresh(), 50);
  }

  // Set Language with Full UI Translation
  function setLanguage(lang) {
    currentLang = lang;
    const t = RESTAURANT_DATA.translations[lang];
    if (!t) return;

    // Switch active state on language buttons
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

    // Update document title & HTML lang attribute
    document.documentElement.lang = lang;
    if (t.siteTitle) document.title = t.siteTitle;

    // Text content translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    // Input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });

    // Select options
    document.querySelectorAll('[data-i18n-option]').forEach(el => {
      const key = el.getAttribute('data-i18n-option');
      if (t[key]) el.textContent = t[key];
    });

    // Guest pill labels
    const guestMap = {
      '1': t.guest1,
      '2': t.guest2,
      '3': t.guest3,
      '4': t.guest4,
      '5': t.guest5,
      '6': t.guest6,
      '8': t.guest8
    };
    guestPills.forEach(pill => {
      const val = pill.getAttribute('data-val');
      if (val && guestMap[val]) {
        pill.textContent = guestMap[val];
      }
    });

    // Re-render dynamic sections
    renderPillars();
    renderHighlights();
    renderMenu();
  }

  // Menu Category Filter
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderMenu();
    });
  });

  // Language switch buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = btn.dataset.lang;
      setLanguage(newLang);
      const toastMsg = newLang === 'uz' ? "O'zbek tili tanlandi" : (newLang === 'ru' ? "Русский язык выбран" : "English selected");
      showToast(toastMsg);
    });
  });

  // Guest pills selection
  guestPills.forEach(pill => {
    pill.addEventListener('click', () => {
      guestPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const hidden = document.getElementById('inputGuests');
      if (hidden) hidden.value = pill.textContent.trim();
    });
  });

  // Time slot buttons
  timeBtns.forEach(tb => {
    tb.addEventListener('click', () => {
      timeBtns.forEach(b => b.classList.remove('active'));
      tb.classList.add('active');
      const hidden = document.getElementById('inputTime');
      if (hidden) hidden.value = tb.dataset.time;
    });
  });

  // Reservation form submit
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const t = RESTAURANT_DATA.translations[currentLang] || RESTAURANT_DATA.translations.en;
      const name = document.getElementById('resGuestName').value;
      const phone = document.getElementById('resGuestPhone').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('inputTime')?.value || '19:30';
      const guests = document.getElementById('inputGuests')?.value || (t.guest2 || '2 Mehmon');
      const zone = document.getElementById('resZone')?.value || 'Main Dining Room';

      if (!name || !phone) {
        showToast(currentLang === 'uz' ? "Iltimos, ism va telefon raqamingizni kiriting." : (currentLang === 'ru' ? "Пожалуйста, укажите имя и телефон." : "Please provide your name and phone number."));
        return;
      }

      const modalDesc = document.getElementById('modalConfirmationDetails');
      if (modalDesc) {
        if (currentLang === 'uz') {
          modalDesc.innerHTML = `
            Hurmatli <strong>${name}</strong>,<br>
            Sizning <strong>${guests}</strong> uchun <strong>${date || 'yaqin sana'}</strong> soat <strong>${time}</strong> ga (<strong>${zone}</strong>) stol band qilish so'rovingiz qabul qilindi. Bosh konsyerjimiz tez orada siz bilan bog'lanadi.
          `;
        } else if (currentLang === 'ru') {
          modalDesc.innerHTML = `
            Уважаемый(ая) <strong>${name}</strong>,<br>
            Ваш запрос на бронь для <strong>${guests}</strong> на <strong>${date || 'ближайшую дату'}</strong> в <strong>${time}</strong> (<strong>${zone}</strong>) успешно получен. Служба консьерж-сервиса свяжется с вами для подтверждения.
          `;
        } else {
          modalDesc.innerHTML = `
            Dear <strong>${name}</strong>,<br>
            Your table reservation for <strong>${guests}</strong> on <strong>${date || 'upcoming date'}</strong> at <strong>${time}</strong> (<strong>${zone}</strong>) has been received by our head concierge. We look forward to welcoming you.
          `;
        }
      }

      if (modalOverlay) modalOverlay.classList.add('active');
      resForm.reset();
    });
  }

  // Modal close handlers
  if (modalClose) modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
  if (modalDone) modalDone.addEventListener('click', () => modalOverlay.classList.remove('active'));

  // Header scroll detection
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Initial render
  setLanguage('uz');
});
