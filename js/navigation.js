/**
 * NEXUS LM — Dedicated Navigation Controller
 * Pure Vanilla JavaScript (Safely co-exists with main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Scroll Detection
  const header = document.querySelector('.site-header');
  if (header && !header.dataset.scrollBound) {
    header.dataset.scrollBound = 'true';
    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile Navigation Drawer Toggle
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

    // Close when clicking outside
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

    // Close drawer when a navigation link is clicked
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }
});
