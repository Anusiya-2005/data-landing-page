'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollAnimations — globally wires Intersection Observer on every page.
 * Elements with [data-animate] (or matching auto-selectors below) get
 * the `.in-view` class when they scroll into the viewport, triggering
 * CSS keyframe animations defined in globals.css.
 *
 * Auto-selectors (no markup changes needed on existing pages):
 *   .section-head, .sol, .industry-card, .sol-grid, .industry-grid,
 *   .hero-content, .cta-box-card, .cta-section, .section, .card, footer
 */

const AUTO_SELECTORS = [
  '.section-head',
  '.sol',
  '.industry-card',
  '.hero-pill',
  '.hero-content h1',
  '.hero-content p',
  '.hero-actions',
  '.cta-box-card',
  '.cta-section .section-head',
  '.use-case-card',
  '.step',
  '.feature-item',
  '.stat-item',
  '.team-card',
  '.timeline-item',
  '.why-item',
  '.detail-hero-body',
  '.page .section',
  '.footer',
  '[data-animate]',
];

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-run on every route change
    const run = () => {
      const elements = document.querySelectorAll<HTMLElement>(AUTO_SELECTORS.join(','));

      // Assign stagger delay to grid siblings
      elements.forEach((el) => {
        if (!el.dataset.animateRegistered) {
          el.dataset.animateRegistered = '1';

          // Stagger children of grids
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter(
              (c) => c === el || AUTO_SELECTORS.some((s) => (c as HTMLElement).matches?.(s))
            );
            const idx = siblings.indexOf(el);
            if (idx > 0) {
              el.style.transitionDelay = `${idx * 80}ms`;
              el.style.animationDelay = `${idx * 80}ms`;
            }
          }
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('in-view');
              observer.unobserve(entry.target); // animate once
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -48px 0px',
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('in-view')) {
          observer.observe(el);
        }
      });

      return observer;
    };

    // Small delay so DOM is settled after route change
    const timer = setTimeout(() => {
      const obs = run();
      return () => obs.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
