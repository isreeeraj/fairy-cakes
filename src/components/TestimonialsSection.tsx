import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ASSETS,
  TESTIMONIALS,
  getNextSlideIndex,
  getPrevSlideIndex,
} from '../data/fairyCakesData';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = TESTIMONIALS[activeIndex] ?? TESTIMONIALS[0];

  const handlePrev = () => {
    setActiveIndex((curr) => getPrevSlideIndex(curr, TESTIMONIALS.length));
  };

  const handleNext = () => {
    setActiveIndex((curr) => getNextSlideIndex(curr, TESTIMONIALS.length));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((curr) => getNextSlideIndex(curr, TESTIMONIALS.length));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

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
            <div aria-live="polite" style={{ width: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="testimonials-info"
                >
                  <img
                    src={ASSETS.quoteMarksAccent}
                    alt=""
                    aria-hidden="true"
                    className="illustration slider-illu"
                  />
                  <p className="display-m slider-text">
                    {activeTestimonial.quote}
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
                </motion.div>
              </AnimatePresence>
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
