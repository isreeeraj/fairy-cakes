import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ASSETS,
  TESTIMONIALS,
  getNextSlideIndex,
  getPrevSlideIndex,
} from '../data/fairyCakesData';
import { SplitWords } from './SplitWords';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const hasChangedRef = useRef(false);

  const activeTestimonial = TESTIMONIALS[activeIndex] ?? TESTIMONIALS[0];

  const handlePrev = () => {
    hasChangedRef.current = true;
    setActiveIndex((curr) => getPrevSlideIndex(curr, TESTIMONIALS.length));
  };

  const handleNext = () => {
    hasChangedRef.current = true;
    setActiveIndex((curr) => getNextSlideIndex(curr, TESTIMONIALS.length));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      hasChangedRef.current = true;
      setActiveIndex((curr) => getNextSlideIndex(curr, TESTIMONIALS.length));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (!hasChangedRef.current || !slideRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const slide = slideRef.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        slide.querySelectorAll('.illustration.slider-illu'),
        { opacity: 0, y: 24, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'elastic.out(0.8, 0.5)' },
        0
      )
        .fromTo(
          slide.querySelectorAll('.display-m.slider-text .split-word'),
          { opacity: 0, y: 32, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.03,
            ease: 'elastic.out(0.8, 0.5)',
          },
          0.08
        )
        .fromTo(
          slide.querySelectorAll('.rating-and-name'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          0.35
        );
    }, slide);

    return () => ctx.revert();
  }, [activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      id="reviews"
      className="section testimonials-section"
      data-mello-section="testimonials"
      aria-label="Customer reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container fill">
        <div
          className="testimonials-content"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-roledescription="carousel"
        >
          <div className="testimonials-slider">
            <div aria-live="polite" style={{ width: '100%' }} ref={slideRef}>
              <div key={activeTestimonial.id} className="testimonials-info">
                <img
                  src={ASSETS.quoteMarksAccent}
                  alt=""
                  aria-hidden="true"
                  className="illustration slider-illu"
                />
                <p className="display-m slider-text">
                  <SplitWords text={activeTestimonial.quote} />
                </p>
                <div className="rating-and-name">
                  <div className="rating">
                    <img
                      src={ASSETS.starSolidAccent}
                      alt=""
                      aria-hidden="true"
                      className="illustration rating-illu"
                    />
                    <div className="text-w">
                      <div className="handwritten-l">
                        {activeTestimonial.rating}
                      </div>
                    </div>
                  </div>
                  <div className="divider-line" aria-hidden="true" />
                  <div className="body-l">{activeTestimonial.author}</div>
                </div>
              </div>
            </div>

            <div className="slider-controls">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className="slider-button"
              >
                <img
                  src={ASSETS.chevronLeftDark}
                  alt=""
                  aria-hidden="true"
                  className="icon slider-icon default"
                />
                <img
                  src={ASSETS.chevronLeftCream}
                  alt=""
                  aria-hidden="true"
                  className="icon slider-icon abs"
                />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="slider-button"
              >
                <img
                  src={ASSETS.chevronRightDark}
                  alt=""
                  aria-hidden="true"
                  className="icon slider-icon default"
                />
                <img
                  src={ASSETS.chevronRightCream}
                  alt=""
                  aria-hidden="true"
                  className="icon slider-icon abs"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
