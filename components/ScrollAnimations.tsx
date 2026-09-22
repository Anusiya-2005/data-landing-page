'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollAnimations: globally wires Intersection Observer on every page.
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
  '.leader-card',
  '.office-item',
  '.premium-card',
  '.cards article',
  '.svc',
  '.contact-form-card',
  '.contact-info-col',
  '.offices-heading',
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

    // Smooth scroll handler for data-scroll buttons and internal anchor links
    const handleScrollClick = (e: MouseEvent) => {
      const el = (e.target instanceof Element ? e.target : (e.target as Node | null)?.parentElement) as Element | null;
      const target = el?.closest?.('[data-scroll], a[href^="#"]') as HTMLElement | null;
      if (!target) return;

      const scrollAttr = target.getAttribute('data-scroll');
      const hrefAttr = target.getAttribute('href');
      const targetId = scrollAttr || (hrefAttr && hrefAttr.startsWith('#') ? hrefAttr.slice(1) : null);
      if (!targetId || targetId === '') return;

      const dest =
        document.querySelector<HTMLElement>(`[data-anchor="${targetId}"]`) ||
        document.getElementById(targetId);

      if (dest) {
        e.preventDefault();
        const header = document.querySelector('header, .header') as HTMLElement | null;
        const headerOffset = header ? header.offsetHeight + 20 : 90;
        const elementPosition = dest.getBoundingClientRect().top;
        const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - headerOffset);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Trigger in-view animation immediately if not already active
        dest.classList.add('in-view');

        // Add subtle highlight to the revealed section / card
        dest.classList.remove('section-highlight');
        void dest.offsetWidth;
        dest.classList.add('section-highlight');
        setTimeout(() => dest.classList.remove('section-highlight'), 1800);
      }
    };

    document.addEventListener('click', handleScrollClick);

    // Small delay so DOM is settled after route change
    let obs: IntersectionObserver | undefined;
    const timer = setTimeout(() => {
      obs = run();
    }, 80);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleScrollClick);
      if (obs) obs.disconnect();
    };
  }, [pathname]);

  return null;
}
