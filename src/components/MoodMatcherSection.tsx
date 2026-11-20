import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ASSETS,
  CRAVING_OPTIONS,
  getWheelArrowAngle,
  type CravingOption,
} from '../data/fairyCakesData';
import { ResilientImage } from './ResilientImage';

export function MoodMatcherSection() {
  const [selectedCravingId, setSelectedCravingId] =
    useState<CravingOption['id']>('celebration');

  const activeMood =
    CRAVING_OPTIONS.find((opt) => opt.id === selectedCravingId) ??
    CRAVING_OPTIONS[0];
  const arrowAngle = getWheelArrowAngle(activeMood.id);

  const topRow = CRAVING_OPTIONS.slice(0, 2);
  const bottomRow = CRAVING_OPTIONS.slice(2, 4);

  const renderQuadrant = (opt: CravingOption) => {
    const isActive = opt.id === activeMood.id;
    return (
      <button
        key={opt.id}
        type="button"
        aria-pressed={isActive}
        aria-label={`${opt.moodLabel}: ${opt.prompt}`}
        onClick={() => setSelectedCravingId(opt.id)}
        className={`wheel-block ${opt.quadrant} ${isActive ? 'is-active' : ''}`}
      >
        <div className="wheel-text">
          <div className="handwritten-s">{opt.moodLabel}</div>
          <div className="display-s">{opt.prompt}</div>
        </div>
      </button>
    );
  };

  return (
    <section
      className="section both-padd black"
      aria-labelledby="mood-matcher-heading"
    >
      <div className="container">
        <div className="mood-content">
          <div className="section-heading default">
            <div className="heading-text-wrapper">
              <div className="label variant-white">
                <div className="circle" aria-hidden="true" />
                <div className="handwritten-l">Craving matcher</div>
              </div>
              <h2 id="mood-matcher-heading" className="h2 heading-h2">
                What are you in the mood for?
              </h2>
            </div>
            <img
              src={ASSETS.cravingLoop}
              alt=""
              aria-hidden="true"
              className="illustration mood-illu"
            />
          </div>

          <div className="wheel-product">
            <div className="text-and-wheel">
              <div className="body-m align-center vertical">
                Pick a craving. We&apos;ll bake the rest.
              </div>

              <div className="wheel" role="group" aria-label="Craving selector wheel">
                <div className="wheel-blocks">{topRow.map(renderQuadrant)}</div>
                <div className="wheel-blocks">{bottomRow.map(renderQuadrant)}</div>

                <div className="wheel-center" aria-hidden="true">
                  <img
                    src={ASSETS.wheelPointerDark}
                    alt=""
                    className="illustration wheel-arrow"
                    style={{
                      transform: `translateY(-50%) rotate(${arrowAngle}deg)`,
                    }}
                  />
                  <div className="wheel-circle">
                    <img
                      src={ASSETS.heartDark}
                      alt=""
                      className="illustration wheel-center-illu"
                    />
                  </div>
                </div>
              </div>

              <img
                src={ASSETS.burstAccent}
                alt=""
                aria-hidden="true"
                className="illustration wheel-illu"
              />
              <img
                src={ASSETS.wheelPointerCream}
                alt=""
                aria-hidden="true"
                className="illustration wheel-illu-arrow"
              />
              <img
                src={ASSETS.wheelArcCream}
                alt=""
                aria-hidden="true"
                className="illustration wheel-illu-arrow-2"
              />
            </div>

            <div className="product-block-wrapper" aria-live="polite">
              <div className="prod-block-wrapper">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeMood.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="product-block"
                  >
                    <div className="image-wrapper">
                      <ResilientImage
                        src={activeMood.product.image}
                        alt={activeMood.product.alt}
                        className="image background-image"
                      />
                    </div>
                    <div className="info-wrapper">
                      <div className="block-items-wrapper">
                        <div className="name-and-details">
                          <div className="details">
                            <div className="body-m">{activeMood.product.tags[0]}</div>
                            <div className="divider" aria-hidden="true" />
                            <div className="body-m">{activeMood.product.tags[1]}</div>
                          </div>
                          <h3 className="h3 h3-small">{activeMood.product.name}</h3>
                        </div>
                        <p className="body-m">{activeMood.product.description}</p>
                      </div>
                      <div className="details">
                        <div className="emphasis-l">{activeMood.product.price}</div>
                        <div className="volume">
                          <div className="body-s">{activeMood.product.volume}</div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
