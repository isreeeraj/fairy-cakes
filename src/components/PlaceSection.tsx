import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ASSETS, CAFE_SPOTS, formatSpotCounter } from '../data/fairyCakesData';
import { ResilientImage } from './ResilientImage';

export function PlaceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSpot = CAFE_SPOTS[activeIndex] ?? CAFE_SPOTS[0];
  const counterLabel = formatSpotCounter(activeIndex, CAFE_SPOTS.length);

  return (
    <section id="place" className="section top-padd" aria-labelledby="place-heading">
      <div className="container">
        <div className="atmosphere-content">
          <div className="section-heading">
            <div className="heading-title">
              <div className="label">
                <div className="circle" aria-hidden="true" />
                <div className="handwritten-l">Hangout café &amp; studio</div>
              </div>
              <h2 id="place-heading" className="h2 heading-h2">
                Pull up a chair at Jawahar Junction
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
                      onClick={() => setActiveIndex(idx)}
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
              >
                <div className="handwritten-s opacity">{counterLabel}</div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpot.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="illustration-text"
                  >
                    <img
                      src={activeSpot.illustration}
                      alt=""
                      aria-hidden="true"
                      className="illustration spot-illu"
                    />
                    <div className="text-hashtags">
                      <div className="block-text-wrapper">
                        <h3 className="h3 block-title small">{activeSpot.title}</h3>
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
                  </motion.div>
                </AnimatePresence>
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
                      onClick={() => setActiveIndex(idx)}
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
