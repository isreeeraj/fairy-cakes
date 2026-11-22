import React from 'react';
import { ASSETS, RECEIPT_ITEMS, SITE_INFO } from '../data/fairyCakesData';
import { ActionButton } from './ActionButton';
import { SplitWords } from './SplitWords';

interface PhilosophySectionProps {
  onScrollToSection: (hash: string) => void;
}

const SCALLOP_COUNT = 16;

export function PhilosophySection({ onScrollToSection }: PhilosophySectionProps) {
  const handleReviewsClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onScrollToSection('#reviews');
  };

  const handleReceiptLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="section both-padd black"
      data-mello-section="philosophy"
      aria-labelledby="philosophy-heading"
    >
      <div className="container">
        <div className="philosophy-content">
          <div className="philosophy-info">
            <div className="title-and-text-wrapper">
              <div className="label-and-title">
                <div className="label variant-white">
                  <div className="circle" aria-hidden="true" />
                  <div className="handwritten-l">Why Parippally loves us</div>
                </div>
                <h2 id="philosophy-heading" className="h2 heading-h2">
                  <span>
                    <SplitWords text="Celebrations that feel" />{' '}
                  </span>
                  <span className="h2 accent">
                    <SplitWords text="handmade." />
                  </span>
                </h2>
              </div>
              <p className="body-l block-description">
                Baking in Parippally since 2016 with 99.9% theme design accuracy, fresh cream sponges, and a hangout café open till 11 PM.
              </p>
            </div>

            <div className="buttons-wrapper">
              <ActionButton
                variant="black-primary"
                href="#reviews"
                onClick={handleReviewsClick}
              >
                Read reviews
              </ActionButton>
              <ActionButton
                variant="white-secondary"
                href={SITE_INFO.mapsUrl}
                target="_blank"
              >
                Get directions
              </ActionButton>
            </div>
          </div>

          <div className="receipt-wrapper">
            <div className="receipt" aria-label="Fairy Cakes studio receipt">
              <div className="receipt-circles top" aria-hidden="true">
                {Array.from({ length: SCALLOP_COUNT }).map((_, i) => (
                  <div key={`top-${i}`} className="receipt-circle" />
                ))}
              </div>
              <div className="receipt-circles bottom" aria-hidden="true">
                {Array.from({ length: SCALLOP_COUNT }).map((_, i) => (
                  <div key={`bottom-${i}`} className="receipt-circle" />
                ))}
              </div>

              <div className="receipt-info">
                <div className="receipt-header">
                  <div className="logo-text">
                    <a
                      href="#top"
                      onClick={handleReceiptLogoClick}
                      className="logo"
                    >
                      <span className="logo-font">{SITE_INFO.brand}</span>
                    </a>
                    <div className="handwritten-s">Parippally Cake Studio</div>
                  </div>
                  <img
                    src={ASSETS.sparkBolt}
                    alt=""
                    aria-hidden="true"
                    className="illustration receipt-illu"
                  />
                </div>

                <div className="divider-border" aria-hidden="true" />

                <div className="receipt-items">
                  {RECEIPT_ITEMS.map((item) => (
                    <div key={item.label} className="receipt-item">
                      <p className="body-m">{item.label}</p>
                      <div className="emphasis-m x">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="divider-border" aria-hidden="true" />

                <div className="receipt-total">
                  <p className="body-m">Total</p>
                  <div className="display-s x">Handmade happiness</div>
                </div>

                <div className="divider-border" aria-hidden="true" />
              </div>

              <div className="barcode-text">
                <img
                  src={ASSETS.ticketBarcode}
                  alt=""
                  aria-hidden="true"
                  className="image barcode"
                />
                <div className="barcode-text-wrapper">
                  <img
                    src={ASSETS.heartDark}
                    alt=""
                    aria-hidden="true"
                    className="illustration barcode-illu"
                  />
                  <div className="padd-text-wrapper">
                    <div className="handwritten-s">Baked with love!</div>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={ASSETS.heartAccent}
              alt=""
              aria-hidden="true"
              className="illustration receipt-1-illu"
            />
            <img
              src={ASSETS.heartAccent}
              alt=""
              aria-hidden="true"
              className="illustration receipt-2-illu"
            />
            <img
              src={ASSETS.heartAccent}
              alt=""
              aria-hidden="true"
              className="illustration receipt-3-illu"
            />
            <img
              src={ASSETS.swirlAccent}
              alt=""
              aria-hidden="true"
              className="illustration receipt-4-illu"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
