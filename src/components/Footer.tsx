import React from 'react';
import { ASSETS, SITE_INFO } from '../data/fairyCakesData';

interface FooterProps {
  onScrollToSection: (hash: string) => void;
  onScrollTop: () => void;
}

export function Footer({ onScrollToSection, onScrollTop }: FooterProps) {
  const handleTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onScrollTop();
  };

  const handleAnchorClick = (hash: string) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    onScrollToSection(hash);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-info-text">
              <a
                href="#top"
                aria-current="page"
                onClick={handleTopClick}
                className="logo"
              >
                <span className="logo-font">{SITE_INFO.brand}</span>
              </a>
              <div className="handwritten-l">{SITE_INFO.hoursShort}</div>
              <img
                src={ASSETS.burstAccent}
                alt=""
                aria-hidden="true"
                className="illustration footer-logo-illu"
              />
            </div>

            <div className="text-and-links">
              <p className="body-m">{SITE_INFO.copyright}</p>
            </div>
          </div>

          <div className="footer-menu">
            <div className="footer-menu small">
              <div className="menu-block">
                <div className="handwritten-s opacity">Explore</div>
                <div className="footer-links">
                  <a
                    href="#menu"
                    onClick={handleAnchorClick('#menu')}
                    className="footer-link"
                  >
                    <span className="display-s">Menu</span>
                  </a>
                  <a
                    href="#custom-cake"
                    onClick={handleAnchorClick('#custom-cake')}
                    className="footer-link"
                  >
                    <span className="display-s">Cake Lab</span>
                  </a>
                  <a
                    href="#place"
                    onClick={handleAnchorClick('#place')}
                    className="footer-link"
                  >
                    <span className="display-s">Place</span>
                  </a>
                  <a
                    href="#visit"
                    onClick={handleAnchorClick('#visit')}
                    className="footer-link"
                  >
                    <span className="display-s">Visit</span>
                  </a>
                </div>
              </div>

              <div className="menu-block">
                <div className="handwritten-s opacity">Connect</div>
                <div className="footer-links">
                  <a
                    href={SITE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span className="display-s">Instagram</span>
                  </a>
                  <a
                    href={SITE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span className="display-s">WhatsApp</span>
                  </a>
                  <a
                    href={SITE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span className="display-s">Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="menu-block">
              <div className="handwritten-s opacity">Visit &amp; Order</div>
              <div className="footer-links">
                <a
                  href={SITE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span className="f-link-icon-wrapper">
                    <img
                      src={ASSETS.uiMapPin}
                      alt=""
                      aria-hidden="true"
                      className="icon f-link-icon"
                    />
                  </span>
                  <span className="display-s">
                    Jawahar Junction, Mukkada Rd,
                    <br />
                    Parippally, Kollam 691574
                  </span>
                </a>
                <a
                  href={SITE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span className="f-link-icon-wrapper">
                    <img
                      src={ASSETS.uiChatIcon}
                      alt=""
                      aria-hidden="true"
                      className="icon f-link-icon"
                    />
                  </span>
                  <span className="display-s">{SITE_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
