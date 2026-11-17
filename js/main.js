/**
 * NEXUS LM — Web Development Services
 * Master Vanilla JavaScript Controller
 * Zero Framework Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Shadow
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Navigation Drawer Controller
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (mobileToggle && mobileDrawer && !mobileToggle.dataset.navBound) {
    mobileToggle.dataset.navBound = 'true';

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    };

    const toggleDrawer = (e) => {
      if (e) e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    mobileToggle.addEventListener('click', toggleDrawer);

    // Close mobile drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open')) {
        if (!mobileToggle.contains(e.target) && !mobileDrawer.contains(e.target)) {
          closeDrawer();
        }
      }
    });

    // Close drawer when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
        mobileToggle.focus();
      }
    });

    // Auto-close drawer when any link inside is clicked
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // 3. Interactive Get a Quote Modal
  const quoteModal = document.getElementById('quoteModal');
  const quoteBtns = document.querySelectorAll('.js-open-quote');
  const quoteCloseBtn = document.getElementById('closeQuoteModal');
  const quoteForm = document.getElementById('quoteForm');
  const quoteSuccess = document.getElementById('quoteSuccess');
  const planButtons = document.querySelectorAll('.plan-selector-btn');
  let selectedPlan = 'booking'; // default

  const plansData = {
    essential: { name: 'Basic Website', price: '₹20,000' },
    booking: { name: 'Online Booking Website', price: '₹34,500' },
    enterprise: { name: 'Complete Online System', price: '₹89,999' }
  };

  function openQuoteModal(planId = 'booking') {
    if (!quoteModal) return;
    selectedPlan = planId;
    updatePlanUI(planId);
    quoteModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuoteModal() {
    if (!quoteModal) return;
    quoteModal.classList.remove('open');
    document.body.style.overflow = '';
    if (quoteSuccess) quoteSuccess.style.display = 'none';
    if (quoteForm) quoteForm.style.display = 'block';
  }

  function updatePlanUI(planId) {
    planButtons.forEach(btn => {
      if (btn.dataset.plan === planId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  quoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const plan = btn.dataset.plan || 'booking';
      openQuoteModal(plan);
    });
  });

  planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedPlan = btn.dataset.plan;
      updatePlanUI(selectedPlan);
    });
  });

  if (quoteCloseBtn) {
    quoteCloseBtn.addEventListener('click', closeQuoteModal);
  }

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) closeQuoteModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteModal && quoteModal.classList.contains('open')) {
      closeQuoteModal();
    }
  });

  // Quote Form Submission (WhatsApp Pre-formatted Handoff)
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quoteName')?.value.trim();
      const phone = document.getElementById('quotePhone')?.value.trim();
      const business = document.getElementById('quoteBusiness')?.value.trim() || 'N/A';
      const email = document.getElementById('quoteEmail')?.value.trim() || 'N/A';
      const notes = document.getElementById('quoteNotes')?.value.trim() || 'Ready to discuss requirements.';
      const planInfo = plansData[selectedPlan] || plansData.booking;

      if (!name || !phone) {
        alert('Please provide your name and phone/WhatsApp number.');
        return;
      }

      const msg = `*NEW PROJECT ESTIMATE REQUEST — NEXUS LM*\n----------------------------------------\n*Name:* ${name}\n*Business Name:* ${business}\n*Contact:* ${phone}\n*Email:* ${email}\n*Selected Package:* ${planInfo.name} (${planInfo.price})\n*Project Notes:* ${notes}\n----------------------------------------\nSent via NEXUS LM Website`;

      const waUrl = `https://wa.me/916355049071?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');

      if (quoteForm && quoteSuccess) {
        quoteForm.style.display = 'none';
        quoteSuccess.style.display = 'block';
      }
    });
  }

  // 4. Interactive Browser Mockup Tabs (Homepage)
  const mockupTabs = document.querySelectorAll('.mockup-tab-btn');
  const mockupPreviews = {
    textile: {
      tag: 'B2B MANUFACTURING',
      title: 'Aura Weaves & Jacquards',
      desc: 'Surat heritage textile mill with live fabric swatch catalogue and export inquiry system.',
      route: 'work/textile-demo/index.html',
      metric: '40+ Jacquard Designs',
      target: 'Mobile + Desktop Ready',
      img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
    },
    restaurant: {
      tag: 'HOSPITALITY & DINING',
      title: 'Saffron & Sage Dining',
      desc: 'Artisanal culinary experience with online table reservations and seasonal course menus.',
      route: 'work/restaurant-demo/index.html',
      metric: 'Online Table Booking',
      target: 'Hearth Woodfire Menu',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    healthcare: {
      tag: 'HEALTHCARE & CLINIC',
      title: 'PulseCare Multi-Speciality',
      desc: 'Compassionate clinical portal with verified doctor profiles and appointment scheduling.',
      route: 'work/healthcare-demo/index.html',
      metric: 'Doctor Slot Selector',
      target: 'Zero-Wait Queueing',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
    }
  };

  mockupTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      mockupTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.demo;
      const data = mockupPreviews[key];
      if (!data) return;

      const tagEl = document.getElementById('mockupTag');
      const titleEl = document.getElementById('mockupTitle');
      const descEl = document.getElementById('mockupDesc');
      const metricEl = document.getElementById('mockupMetric');
      const targetEl = document.getElementById('mockupTarget');
      const imgEl = document.getElementById('mockupImg');
      const linkEl = document.getElementById('mockupLink');

      if (tagEl) tagEl.textContent = data.tag;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (metricEl) metricEl.textContent = data.metric;
      if (targetEl) targetEl.textContent = data.target;
      if (imgEl) {
        imgEl.src = data.img;
        imgEl.alt = data.title;
      }
      if (linkEl) linkEl.href = data.route;
    });
  });

  // 5. Contact Page Form Handler
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim();
      const business = document.getElementById('contactBusiness')?.value.trim() || 'N/A';
      const email = document.getElementById('contactEmail')?.value.trim() || 'N/A';
      const service = document.getElementById('contactService')?.value;
      const budget = document.getElementById('contactBudget')?.value;
      const desc = document.getElementById('contactDesc')?.value.trim() || 'Ready to discuss requirements.';

      if (!name || !phone) {
        alert('Please enter your name and phone/WhatsApp number.');
        return;
      }

      const msg = `*NEW CLIENT INQUIRY — NEXUS LM WEBSITE*\n----------------------------------------\n*Name:* ${name}\n*Business Name:* ${business}\n*Contact:* ${phone}\n*Email:* ${email}\n*Service Required:* ${service}\n*Estimated Budget:* ${budget}\n*Project Details:* ${desc}\n----------------------------------------\nSent via nexuslm.in Contact Form`;

      const waUrl = `https://wa.me/916355049071?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');

      if (contactSuccess) {
        contactForm.style.display = 'none';
        contactSuccess.style.display = 'block';
      }
    });
  }

  // 6. Work Page Portfolio Filter Logic
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectCards = document.querySelectorAll('.project-card-item');

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
          const cats = (card.dataset.category || '').split(' ');
          if (filter === 'all' || cats.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
