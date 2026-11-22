import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ELASTIC_SNAPPY = 'elastic.out(0.8, 0.5)';
const ELASTIC_SOFT = 'elastic.out(0.1, 1)';

/**
 * Orchestrates all Mello Coffee (https://mello-coffee.webflow.io/) GSAP +
 * ScrollTrigger entrance, stop-motion loop, and scroll-reveal animations
 * across every section of the page.
 */
export function useMelloAnimations(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // ============================================================
        // 1. HEADER LOAD ENTRANCE (Mello #11: t-dee9dfe2)
        // ============================================================
        const headerTl = gsap.timeline();
        headerTl
          .fromTo(
            '.header .info-bar',
            { yPercent: -100 },
            { yPercent: 0, duration: 0.3, ease: 'power2.out' },
            0.1
          )
          .fromTo(
            '.header .logo',
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' },
            0.2
          )
          .fromTo(
            '.header .menu-link',
            { opacity: 0, y: -24, scale: 0 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.3,
              stagger: 0.03,
              ease: 'power2.out',
            },
            0.3
          );

        // ============================================================
        // 2. HERO LOAD ENTRANCE (Mello #25: t-c5148581)
        // ============================================================
        const heroTl = gsap.timeline();
        heroTl
          .fromTo(
            '.hero .h1.hero-h1 .split-word',
            { opacity: 0, y: 40, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.05,
              ease: ELASTIC_SNAPPY,
              clearProps: 'transform',
            },
            0.4
          )
          .fromTo(
            '.hero .buttons-wrapper > *',
            { opacity: 0, y: 32, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: ELASTIC_SNAPPY,
            },
            0.7
          )
          .fromTo(
            '.hero .hero-cake-blend',
            { opacity: 0, yPercent: 70, scale: 0.9 },
            {
              opacity: 1,
              yPercent: 0,
              scale: 1,
              duration: 1.2,
              ease: ELASTIC_SOFT,
            },
            0.9
          )
          .fromTo(
            '.hero .hero-float-wrap',
            { opacity: 0, y: 24, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: ELASTIC_SOFT,
            },
            0.9
          )
          .fromTo(
            '.hero .quality-badge',
            { opacity: 0, y: 64, rotation: 30 },
            {
              opacity: 1,
              y: 0,
              rotation: 10,
              duration: 0.3,
              ease: 'power2.out',
            },
            1.4
          )
          .fromTo(
            '.hero .illustration.hero-arrow',
            { opacity: 0, x: 20, y: 20, scale: 0.2, rotation: 30 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 10,
              duration: 0.3,
              ease: 'power2.out',
            },
            1.6
          )
          .fromTo(
            '.hero .product',
            { opacity: 0, y: 32, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            },
            1.8
          );

        // ============================================================
        // 3. STOP-MOTION CARTOON WIGGLE LOOPS (Mello #26-#30)
        // Snappy 0.01s frame flips every 0.42s like hand-drawn cel art
        // ============================================================
        const createStopMotionWiggle = (
          selector: string,
          angleA: number,
          angleB: number
        ) => {
          const targets = gsap.utils.toArray<HTMLElement>(selector);
          if (!targets.length) return;
          gsap.set(targets, { rotation: angleA });
          const tl = gsap.timeline({ repeat: -1 });
          tl.to(targets, { rotation: angleB, duration: 0.01, ease: 'none' }, 0.4)
            .to(targets, { rotation: angleA, duration: 0.01, ease: 'none' }, 0.82);
        };

        // #26: ±10deg wiggle group
        createStopMotionWiggle(
          [
            '.illustration.hero-1-illu',
            '.illustration.hero-2-illu',
            '.illustration.quality-badge-illu',
            '.illustration.section-heading-illu',
            '.illustration.visit-section-1',
            '.illustration.receipt-1-illu',
            '.illustration.receipt-3-illu',
            '.illustration.receipt-4-illu',
          ].join(', '),
          10,
          -10
        );
        // #27: mood-illu (-10deg <-> -30deg)
        createStopMotionWiggle('.illustration.mood-illu', -10, -30);
        // #28: wheel-illu (130deg <-> 110deg)
        createStopMotionWiggle('.illustration.wheel-illu', 130, 110);
        // #29: receipt-2-illu (0deg <-> 20deg)
        createStopMotionWiggle('.illustration.receipt-2-illu', 0, 20);
        // #30: footer-logo-illu (20deg <-> 40deg)
        createStopMotionWiggle('.illustration.footer-logo-illu', 20, 40);

        // ============================================================
        // 4. VERTICAL MOOD LABEL ATTENTION SHAKE (Mello #35 / #41)
        // ============================================================
        const verticalLabel = root.querySelector('.body-m.align-center.vertical');
        if (verticalLabel) {
          const base =
            window.innerWidth > 991 ? 180 : window.innerWidth > 767 ? -45 : 0;
          const shakeTl = gsap.timeline({ repeat: -1 });
          shakeTl
            .to(verticalLabel, { rotation: base + 10, duration: 0.1, ease: 'none' }, 3.0)
            .to(verticalLabel, { rotation: base - 10, duration: 0.1, ease: 'none' }, 3.1)
            .to(verticalLabel, { rotation: base + 10, duration: 0.1, ease: 'none' }, 3.2)
            .to(verticalLabel, { rotation: base - 10, duration: 0.1, ease: 'none' }, 3.3)
            .to(verticalLabel, { rotation: base, duration: 0.1, ease: 'none' }, 3.4);
        }

        // ============================================================
        // 5. FEATURED MENU SECTION SCROLL REVEAL (Mello #31: t-63fd14a5)
        // ============================================================
        const featuredSec = root.querySelector('[data-mello-section="featured"]');
        if (featuredSec) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: featuredSec,
              start: 'top 92%',
              once: true,
            },
          });
          tl.fromTo(
            featuredSec.querySelectorAll('.label'),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            0.1
          )
            .fromTo(
              featuredSec.querySelectorAll('.h2.heading-h2 .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.06,
                ease: ELASTIC_SNAPPY,
              },
              0.3
            )
            .fromTo(
              featuredSec.querySelectorAll('.body-l.secton-description'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.5
            )
            .fromTo(
              featuredSec.querySelectorAll('.image-featured-menu-block-wrapper'),
              { opacity: 0, y: 48, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: ELASTIC_SNAPPY,
              },
              0.6
            )
            .fromTo(
              featuredSec.querySelectorAll('.illustration-featured-menu-block'),
              { opacity: 0, y: 48, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: ELASTIC_SNAPPY,
              },
              0.8
            );
        }

        // ============================================================
        // 6. FULL MENU SECTION SCROLL REVEAL (Mello #33: t-1575f056)
        // ============================================================
        const menuSec = root.querySelector('[data-mello-section="full-menu"]');
        if (menuSec) {
          const headingTl = gsap.timeline({
            scrollTrigger: {
              trigger: menuSec,
              start: 'top 92%',
              once: true,
            },
          });
          headingTl
            .fromTo(
              menuSec.querySelectorAll('.illustration.section-heading-illu'),
              { opacity: 0, y: 24, scale: 0.4 },
              { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' },
              0.05
            )
            .fromTo(
              menuSec.querySelectorAll('.h2.heading-h2 .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.06,
                ease: ELASTIC_SNAPPY,
              },
              0.15
            );

          const rows = menuSec.querySelectorAll('.menu-row');
          rows.forEach((row) => {
            const rowTl = gsap.timeline({
              scrollTrigger: {
                trigger: row,
                start: 'top 92%',
                once: true,
              },
            });
            const categories = row.querySelectorAll('.menu-category');
            categories.forEach((cat) => {
              rowTl
                .fromTo(
                  cat.querySelectorAll('h3 .split-word'),
                  { opacity: 0, y: 12, scale: 0.8 },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.06,
                    ease: ELASTIC_SNAPPY,
                  },
                  0.05
                )
                .fromTo(
                  cat.querySelectorAll('.text-and-volume-wrapper'),
                  { opacity: 0, y: 12 },
                  { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' },
                  0.15
                )
                .fromTo(
                  cat.querySelectorAll('.menu-item'),
                  { opacity: 0, y: 12 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    stagger: 0.04,
                    ease: 'power2.out',
                  },
                  0.22
                );
            });
          });
        }

        // ============================================================
        // 7. CAKE LAB SECTION SCROLL REVEAL (Mello section choreography)
        // ============================================================
        const cakeLabSec = root.querySelector('[data-mello-section="cake-lab"]');
        if (cakeLabSec) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: cakeLabSec,
              start: 'top 92%',
              once: true,
            },
          });
          tl.fromTo(
            cakeLabSec.querySelectorAll('.label'),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            0.1
          )
            .fromTo(
              cakeLabSec.querySelectorAll('.h2.heading-h2 .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.06,
                ease: ELASTIC_SNAPPY,
              },
              0.3
            )
            .fromTo(
              cakeLabSec.querySelectorAll('.body-l.secton-description'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.5
            )
            .fromTo(
              cakeLabSec.querySelectorAll('.cakelab-step'),
              { opacity: 0, y: 32, scale: 0.96 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.55,
                stagger: 0.08,
                ease: ELASTIC_SNAPPY,
              },
              0.6
            )
            .fromTo(
              cakeLabSec.querySelectorAll('.cakelab-summary-card'),
              { opacity: 0, x: 40, scale: 0.9, rotation: -6 },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                rotation: 0,
                duration: 0.9,
                ease: ELASTIC_SNAPPY,
              },
              0.65
            );
        }

        // ============================================================
        // 8. MOOD MATCHER SECTION SCROLL REVEAL (Mello #34: t-fe5fca7a)
        // ============================================================
        const moodSec = root.querySelector('[data-mello-section="mood"]');
        if (moodSec) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: moodSec,
              start: 'top 92%',
              once: true,
            },
          });
          tl.fromTo(
            moodSec.querySelectorAll('.label'),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            0.05
          )
            .fromTo(
              moodSec.querySelectorAll('.h2.heading-h2 .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: ELASTIC_SNAPPY,
              },
              0.15
            )
            .fromTo(
              moodSec.querySelectorAll('.illustration.mood-illu'),
              { opacity: 0, y: 24, scale: 0.8 },
              { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' },
              0.25
            )
            .fromTo(
              moodSec.querySelectorAll('.wheel'),
              { opacity: 0, scale: 0.8, rotation: -15 },
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: ELASTIC_SNAPPY,
              },
              0.35
            )
            .fromTo(
              moodSec.querySelectorAll('.body-m.align-center.vertical'),
              { opacity: 0, x: 32 },
              { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' },
              0.48
            )
            .fromTo(
              moodSec.querySelectorAll('.illustration.wheel-illu'),
              { opacity: 0, x: -24, y: -24, scale: 0.8 },
              { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' },
              0.52
            )
            .fromTo(
              moodSec.querySelectorAll('.prod-block-wrapper'),
              { opacity: 0, y: 32, scale: 0.8, rotation: -10 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: ELASTIC_SNAPPY,
              },
              0.55
            )
            .fromTo(
              moodSec.querySelectorAll('.illustration.wheel-illu-arrow'),
              { opacity: 0, x: -60, y: -24, scale: 0.2 },
              { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' },
              0.65
            );
        }

        // ============================================================
        // 9. BAKERY SCHEDULE SECTION SCROLL REVEAL (Mello #36: t-8b7f14a5)
        // ============================================================
        const scheduleSec = root.querySelector('[data-mello-section="schedule"]');
        if (scheduleSec) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: scheduleSec,
              start: 'top 92%',
              once: true,
            },
          });
          tl.fromTo(
            scheduleSec.querySelectorAll('.label'),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            0.05
          )
            .fromTo(
              scheduleSec.querySelectorAll('.h2.heading-h2 .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: ELASTIC_SNAPPY,
              },
              0.15
            )
            .fromTo(
              scheduleSec.querySelectorAll('.body-l.secton-description'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.28
            )
            .fromTo(
              scheduleSec.querySelectorAll('.time-wrapper'),
              { opacity: 0, y: 32, scale: 0.9 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: ELASTIC_SNAPPY },
              0.38
            )
            .fromTo(
              scheduleSec.querySelectorAll('.name'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.5
            )
            .fromTo(
              scheduleSec.querySelectorAll('.btn-wrapper'),
              { opacity: 0, y: 32, scale: 0.8 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: ELASTIC_SNAPPY },
              0.52
            )
            .fromTo(
              scheduleSec.querySelectorAll('.time'),
              { opacity: 0, y: 32 },
              { opacity: 1, y: 0, duration: 0.6, ease: ELASTIC_SNAPPY },
              0.55
            )
            .fromTo(
              scheduleSec.querySelectorAll('.illustration.time-arrow-illu'),
              { opacity: 0, x: -24, y: -24, scale: 0.2, rotation: 60 },
              {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotation: 15,
                duration: 0.3,
                ease: 'power2.out',
              },
              0.58
            )
            .fromTo(
              scheduleSec.querySelectorAll('.illustration.time-illu'),
              { opacity: 0, y: 12, scale: 0.8 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: ELASTIC_SNAPPY },
              0.62
            )
            .fromTo(
              scheduleSec.querySelectorAll('.h3.block-title.small .split-word'),
              { opacity: 0, y: 24, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: ELASTIC_SNAPPY,
              },
              0.68
            )
            .fromTo(
              scheduleSec.querySelectorAll('.body-m.block-description.small'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.76
            );
        }

        // ============================================================
        // 10. PHILOSOPHY / RECEIPT SCROLL REVEAL (Mello #37: t-1ed2d068)
        // ============================================================
        const philSec = root.querySelector('[data-mello-section="philosophy"]');
        if (philSec) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: philSec,
              start: 'top 92%',
              once: true,
            },
          });
          tl.fromTo(
            philSec.querySelectorAll('.label'),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            0.1
          )
            .fromTo(
              philSec.querySelectorAll('.h2.heading-h2 .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.06,
                ease: ELASTIC_SNAPPY,
              },
              0.3
            )
            .fromTo(
              philSec.querySelectorAll('.receipt'),
              { opacity: 0, x: 48, scale: 0.8, rotation: -15 },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                rotation: 0,
                duration: 1.0,
                ease: ELASTIC_SNAPPY,
              },
              0.6
            )
            .fromTo(
              philSec.querySelectorAll('.body-l.block-description'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.7
            )
            .fromTo(
              philSec.querySelectorAll('.buttons-wrapper > *'),
              { opacity: 0, y: 32 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: ELASTIC_SNAPPY,
              },
              0.9
            )
            .fromTo(
              philSec.querySelectorAll(
                '.illustration.receipt-1-illu, .illustration.receipt-2-illu, .illustration.receipt-3-illu'
              ),
              { opacity: 0, y: 12, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.3,
                stagger: 0.1,
                ease: 'power2.out',
              },
              0.9
            );
        }

        // ============================================================
        // 11. PLACE / SPOTS SECTION SCROLL REVEAL (Mello #38: t-46e3d0c7)
        // ============================================================
        const placeSec = root.querySelector('[data-mello-section="place"]');
        if (placeSec) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: placeSec,
              start: 'top 92%',
              once: true,
            },
          });
          tl.fromTo(
            placeSec.querySelectorAll('.label'),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            0.05
          )
            .fromTo(
              placeSec.querySelectorAll('.h2.heading-h2 .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: ELASTIC_SNAPPY,
              },
              0.15
            )
            .fromTo(
              placeSec.querySelectorAll('.body-l.secton-description'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.25
            )
            .fromTo(
              placeSec.querySelectorAll('.spot'),
              { opacity: 0, y: 32, scale: 0.9 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: ELASTIC_SNAPPY },
              0.35
            )
            .fromTo(
              placeSec.querySelectorAll('.spot-details .handwritten-s.opacity'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.46
            )
            .fromTo(
              placeSec.querySelectorAll('.illustration.spot-illu'),
              { opacity: 0, y: 12, scale: 0.8 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: ELASTIC_SNAPPY },
              0.5
            )
            .fromTo(
              placeSec.querySelectorAll('.hotspot-wrapper'),
              { opacity: 0, y: 24, scale: 0.2 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.2,
                stagger: 0.08,
                ease: 'power2.out',
              },
              0.5
            )
            .fromTo(
              placeSec.querySelectorAll('.h3.block-title.small .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: ELASTIC_SNAPPY,
              },
              0.56
            )
            .fromTo(
              placeSec.querySelectorAll('.body-m.block-description.small'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.64
            )
            .fromTo(
              placeSec.querySelectorAll('.hashtags .handwritten-s'),
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.08,
                ease: 'power2.out',
              },
              0.7
            )
            .fromTo(
              placeSec.querySelectorAll('.spot-tab'),
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.08,
                ease: 'power2.out',
              },
              0.72
            );
        }

        // ============================================================
        // 12. TESTIMONIALS SECTION SCROLL REVEAL (Mello #39: t-2cc16f1c)
        // ============================================================
        const reviewsSec = root.querySelector('[data-mello-section="testimonials"]');
        if (reviewsSec) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: reviewsSec,
              start: 'top 92%',
              once: true,
            },
          });
          tl.fromTo(
            reviewsSec.querySelectorAll('.illustration.slider-illu'),
            { opacity: 0, y: 24, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: ELASTIC_SNAPPY },
            0.1
          )
            .fromTo(
              reviewsSec.querySelectorAll('.display-m.slider-text .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.025,
                ease: ELASTIC_SNAPPY,
              },
              0.22
            )
            .fromTo(
              reviewsSec.querySelectorAll('.rating-and-name'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
              0.55
            )
            .fromTo(
              reviewsSec.querySelectorAll('.slider-button'),
              { opacity: 0, y: 24, scale: 0.2 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.2,
                stagger: 0.08,
                ease: 'power2.out',
              },
              0.68
            );
        }

        // ============================================================
        // 13. VISIT SECTION SCROLL REVEAL (Mello #40/#42/#43: t-cd1d17b2)
        // ============================================================
        const visitSec = root.querySelector('[data-mello-section="visit"]');
        if (visitSec) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: visitSec,
              start: 'top 92%',
              once: true,
            },
          });
          tl.fromTo(
            visitSec.querySelectorAll('.label'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            0.05
          )
            .fromTo(
              visitSec.querySelectorAll('.h2.heading-h2 .split-word'),
              { opacity: 0, y: 32, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: ELASTIC_SNAPPY,
              },
              0.15
            )
            .fromTo(
              visitSec.querySelectorAll('.illustration.visit-section-1'),
              { opacity: 0, y: 24, scale: 0.2 },
              { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' },
              0.38
            )
            .fromTo(
              visitSec.querySelectorAll('.illustration.visit-section-2'),
              { opacity: 0, x: -12, y: -12, scale: 0.2 },
              { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' },
              0.44
            )
            .fromTo(
              visitSec.querySelectorAll(
                '.photo-block-wrapper, .p-block-wrapper, .location-block, .email-block, .hours-block'
              ),
              { opacity: 0, y: 48, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: ELASTIC_SNAPPY,
              },
              0.5
            );
        }
      }, root);

      // Refresh ScrollTrigger once custom webfonts finish loading
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [rootRef]);
}
