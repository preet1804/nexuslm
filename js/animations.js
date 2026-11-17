/**
 * NEXUS LM — Subtle Micro-Interactions & Animation Utility
 * Zero external libraries
 */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll helper for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Card hover elevation enhancement
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';
    });
  });
});
