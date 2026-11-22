import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ASSETS, CAFE_SPOTS, formatSpotCounter } from '../data/fairyCakesData';
import { ResilientImage } from './ResilientImage';
import { SplitWords } from './SplitWords';

export function PlaceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const detailsRef = useRef<HTMLDivElement>(null);
  const hasInteractedRef = useRef(false);
  const activeSpot = CAFE_SPOTS[activeIndex] ?? CAFE_SPOTS[0];
  const counterLabel = formatSpotCounter(activeIndex, CAFE_SPOTS.length);

  useEffect(() => {
    if (!hasInteractedRef.current || !detailsRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const panel = detailsRef.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        panel.querySelectorAll('.illustration.spot-illu'),
        { opacity: 0, y: 12, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'elastic.out(0.8, 0.5)' },
        0
      )
        .fromTo(
          panel.querySelectorAll('.h3.block-title.small .split-word'),
          { opacity: 0, y: 24, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: 'elastic.out(0.8, 0.5)',
          },
          0.08
        )
        .fromTo(
          panel.querySelectorAll('.body-m.block-description.small'),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          0.16
        )
        .fromTo(
          panel.querySelectorAll('.hashtags .handwritten-s'),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: 'power2.out' },
          0.22
        );
    }, panel);

    return () => ctx.revert();
  }, [activeIndex]);

  const handleSelectSpot = (idx: number) => {
    hasInteractedRef.current = true;
    setActiveIndex(idx);
  };

  return (
    <section
      id="place"
      className="section top-padd"
      data-mello-section="place"
      aria-labelledby="place-heading"
    >
      <div className="container">
        <div className="atmosphere-content">
          <div className="section-heading">
            <div className="heading-title">
              <div className="label">
                <div className="circle" aria-hidden="true" />
                <div className="handwritten-l">Hangout café &amp; studio</div>
              </div>
              <h2 id="place-heading" className="h2 heading-h2">
                <SplitWords text="Pull up a chair at Jawahar Junction" />
              </h2>
            </div>
            <div className="text-wrapper">
              <p className="body-l secton-description">
                Drop in for cake pickups, loaded fries, thick shakes, and late-night desserts till 11 PM.
              </p>
            </div>
          </div>

          <div className="spot">
            <div className="spot-image">
              <ResilientImage
                src={ASSETS.cafeInterior}
                alt="Cozy Fairy Cakes Parippally café interior with wooden seating, dessert display counter, and warm lighting."
                className="image background-image"
              />

              {CAFE_SPOTS.map((spot, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={spot.id}
                    className={`hotspot-wrapper ${spot.hotspotClass}`}
                  >
                    <button
                      type="button"
                      aria-pressed={isActive}
                      aria-label={`Select spot ${spot.number}: ${spot.title}`}
                      onClick={() => handleSelectSpot(idx)}
                      className={`hotspot ${isActive ? 'is-active' : ''}`}
                    >
                      <span className="hotspot-content">
                        <span className="emphasis-m">{spot.number}</span>
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="spot-sidebar">
              <div
                id={`spot-panel-${activeSpot.id}`}
                role="tabpanel"
                aria-labelledby={`spot-tab-${activeSpot.id}`}
                className="spot-details"
                ref={detailsRef}
              >
                <div className="handwritten-s opacity">{counterLabel}</div>

                <div key={activeSpot.id} className="illustration-text">
                  <img
                    src={activeSpot.illustration}
                    alt=""
                    aria-hidden="true"
                    className="illustration spot-illu"
                  />
                  <div className="text-hashtags">
                    <div className="block-text-wrapper">
                      <h3 className="h3 block-title small">
                        <SplitWords text={activeSpot.title} />
                      </h3>
                      <p className="body-m block-description small">
                        {activeSpot.description}
                      </p>
                    </div>
                    <div className="hashtags">
                      {activeSpot.hashtags.map((tag) => (
                        <div key={tag} className="handwritten-s">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="spot-tabs" role="tablist" aria-label="Cafe seating spots">
                {CAFE_SPOTS.map((spot, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={spot.id}
                      id={`spot-tab-${spot.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`spot-panel-${spot.id}`}
                      onClick={() => handleSelectSpot(idx)}
                      className={`spot-tab ${isActive ? 'is-active' : ''}`}
                    >
                      <span className="handwritten-s x">{spot.number}</span>
                      <span className="display-s">{spot.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
