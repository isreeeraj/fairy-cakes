import React from 'react';
import { ASSETS } from '../data/fairyCakesData';
import { ActionButton } from './ActionButton';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onScrollToSection: (hash: string) => void;
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  const handleCakeLabClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onScrollToSection('#custom-cake');
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onScrollToSection('#menu');
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="h1 hero-h1">
              <span className="split-word" style={{ display: 'inline-block' }}>Handmade</span>{' '}
              <span className="split-word" style={{ display: 'inline-block' }}>happiness</span>
              <br />
              <span className="split-word" style={{ display: 'inline-block' }}>in</span>{' '}
              <span className="hero-bite-trigger" tabIndex={0}>
                <span className="split-word" style={{ display: 'inline-block' }}>every</span>{' '}
                <span className="hero-bite-word split-word" style={{ display: 'inline-block' }}>
                  bite
                  <svg
                    className="hero-bite-cutout"
                    viewBox="0 0 72 68"
                    fill="none"
                    aria-hidden="true"
                  >
                    <g className="hero-bite-shape">
                      <path d="M26 0H72V52H48L26 0Z" fill="var(--white)" />
                      <circle cx="30" cy="14" r="14" fill="var(--white)" />
                      <circle cx="38" cy="32" r="15" fill="var(--white)" />
                      <circle cx="52" cy="46" r="13" fill="var(--white)" />
                    </g>
                    <circle
                      className="hero-bite-crumb crumb-1"
                      cx="44"
                      cy="12"
                      r="3.8"
                      fill="var(--black)"
                    />
                    <circle
                      className="hero-bite-crumb crumb-2"
                      cx="58"
                      cy="24"
                      r="3.2"
                      fill="var(--accent)"
                    />
                    <circle
                      className="hero-bite-crumb crumb-3"
                      cx="48"
                      cy="36"
                      r="2.8"
                      fill="var(--black)"
                    />
                    <circle
                      className="hero-bite-crumb crumb-4"
                      cx="62"
                      cy="44"
                      r="2.6"
                      fill="var(--accent)"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <div className="buttons-wrapper">
              <ActionButton
                variant="black-primary"
                href="#custom-cake"
                onClick={handleCakeLabClick}
              >
                Open Cake Lab
              </ActionButton>
              <ActionButton
                variant="black-secondary"
                href="#menu"
                onClick={handleMenuClick}
              >
                Explore the menu
              </ActionButton>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-cake-blend">
              <ResilientImage
                src={ASSETS.heroSpanishDelight}
                alt="Handcrafted Spanish Delight celebration cake with caramel praline crunch, chocolate drip, and roasted hazelnuts on a ceramic stand."
                loading="eager"
                fallbackColor="#d5dcc6"
                className="image hero-image"
              />
            </div>

            <div className="product">
              <div className="product-text-wrapper">
                <div className="display-s">Spanish Delight</div>
                <div className="details">
                  <div className="body-m">Praline</div>
                  <div className="divider" aria-hidden="true" />
                  <div className="body-m">Fresh cream</div>
                </div>
              </div>
              <div className="details">
                <div className="emphasis-m">₹1,100</div>
                <div className="volume">
                  <div className="body-s">1 kg</div>
                </div>
              </div>
            </div>

            <img
              src={ASSETS.heroArrow}
              alt=""
              aria-hidden="true"
              className="illustration hero-arrow"
            />

            <div className="quality-badge">
              <img
                src={ASSETS.qualityRosette}
                alt=""
                aria-hidden="true"
                className="illustration quality-badge-illu"
              />
              <div className="handwritten-l">
                99.9% theme
                <br />
                design accuracy
              </div>
            </div>
          </div>

          <span className="hero-float-wrap hero-float-left">
            <img
              src={ASSETS.heroCakeAccent}
              alt="Hand-drawn celebration cake doodle"
              className="illustration hero-1-illu"
            />
          </span>
          <span className="hero-float-wrap hero-float-right">
            <img
              src={ASSETS.heroShakeAccent}
              alt="Hand-drawn milkshake doodle"
              className="illustration hero-2-illu"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
