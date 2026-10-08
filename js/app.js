/* ===================================================================
   BASILIC — APPLICATION LOGIC WITH AOS INTEGRATION
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  let currentCategory = 'all';

  // Initialize AOS (Animate On Scroll)
  if (window.AOS) {
    AOS.init({
      duration: 850,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      once: true,
      offset: 60
    });
  }

  // DOM elements
  const pillarsGrid = document.getElementById('pillarsGrid');
  const menuGrid = document.getElementById('menuFolioGrid');
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

  function showToast(msg) {
    if (!toastBar) return;
    toastBar.textContent = msg;
    toastBar.classList.add('active');
    setTimeout(() => toastBar.classList.remove('active'), 3200);
  }

  function formatPrice(num) {
    return num.toLocaleString('en-US').replace(/,/g, ' ') + ' UZS';
  }

  // Render Core Pillars with AOS Staggered Delays
  function renderPillars() {
    if (!pillarsGrid) return;
    pillarsGrid.innerHTML = '';
    RESTAURANT_DATA.pillars.forEach((p, idx) => {
      const col = document.createElement('div');
      col.className = 'pillar-card';
      col.setAttribute('data-aos', 'fade-up');
      col.setAttribute('data-aos-delay', (idx + 1) * 100);
      col.innerHTML = `
        <div class="pillar-num">${p.num}</div>
        <h3>${p.title[currentLang] || p.title.en}</h3>
        <p>${p.desc[currentLang] || p.desc.en}</p>
      `;
      pillarsGrid.appendChild(col);
    });
    if (window.AOS) setTimeout(() => AOS.refresh(), 50);
  }

  // Render Menu Folio with AOS Delays
  function renderMenu() {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    const filtered = RESTAURANT_DATA.menuItems.filter(item => {
      return currentCategory === 'all' || item.category === currentCategory;
    });

    filtered.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'menu-folio-card';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', ((idx % 4) + 1) * 80);

      const badges = item.dietary.map(d => `<span class="tag-badge">[${d}]</span>`).join(' ');

      card.innerHTML = `
        <div class="folio-header">
          <div>
            <h3 class="folio-title">${item.title[currentLang] || item.title.en}</h3>
            <div class="folio-subtitle">${item.subtitle}</div>
          </div>
          <span class="price-tag">${formatPrice(item.price)}</span>
        </div>
        <p class="folio-desc">${item.desc[currentLang] || item.desc.en}</p>
        <div class="folio-footer">
          <div class="highlight-tags">${badges}</div>
          <a href="#reservations" class="text-link" style="font-size: 0.65rem;">Reserve Table →</a>
        </div>
      `;
      menuGrid.appendChild(card);
    });
    if (window.AOS) setTimeout(() => AOS.refresh(), 50);
  }

  // Set Language
  function setLanguage(lang) {
    currentLang = lang;
    const t = RESTAURANT_DATA.translations[lang];
    if (!t) return;

    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    renderPillars();
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

  // Language switch
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
      showToast(btn.dataset.lang.toUpperCase() + ' selected');
    });
  });

  // Guest pills selection
  guestPills.forEach(pill => {
    pill.addEventListener('click', () => {
      guestPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const hidden = document.getElementById('inputGuests');
      if (hidden) hidden.value = pill.dataset.val;
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
      const name = document.getElementById('resGuestName').value;
      const phone = document.getElementById('resGuestPhone').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('inputTime')?.value || '19:30';
      const guests = document.getElementById('inputGuests')?.value || '2 Guests';

      if (!name || !phone) {
        showToast("Please provide your name and phone number.");
        return;
      }

      const modalDesc = document.getElementById('modalConfirmationDetails');
      if (modalDesc) {
        modalDesc.innerHTML = `
          Dear <strong>${name}</strong>,<br>
          Your table for <strong>${guests}</strong> on <strong>${date || 'upcoming date'}</strong> at <strong>${time}</strong> has been received by our head concierge.
        `;
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
  setLanguage('en');
});
