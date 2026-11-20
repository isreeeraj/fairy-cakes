import React from 'react';
import { ASSETS, SITE_INFO } from '../data/fairyCakesData';

interface HeaderProps {
  onScrollToSection: (hash: string) => void;
  onScrollTop: () => void;
}

export function Header({ onScrollToSection, onScrollTop }: HeaderProps) {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onScrollTop();
  };

  const handleAnchorClick = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onScrollToSection(hash);
  };

  const renderInfoRow = (keyPrefix: string, isSecond = false) => (
    <div
      className={`info-bar-content ${isSecond ? 'second' : 'first'}`}
      aria-hidden={isSecond ? true : undefined}
    >
      <div className="body-m x">{SITE_INFO.addressShort}</div>
      <img
        src={ASSETS.heartDark}
        alt=""
        aria-hidden="true"
        className="icon info-bar-icon"
      />
      <div className="body-m x">{SITE_INFO.hoursShort}</div>
      <img
        src={ASSETS.heartDark}
        alt=""
        aria-hidden="true"
        className="icon info-bar-icon"
      />
      <div className="body-m x">{SITE_INFO.tagline}</div>
      <img
        key={`${keyPrefix}-end`}
        src={ASSETS.heartDark}
        alt=""
        aria-hidden="true"
        className="icon info-bar-icon hidden"
      />
    </div>
  );

  return (
    <nav className="header" aria-label="Primary">
      <div className="info-bar">
        <div className="info-bar-content-wrapper">
          {renderInfoRow('first', false)}
          {renderInfoRow('second', true)}
        </div>
      </div>

      <div className="menu">
        <div className="container">
          <div className="menu-content">
            <a
              href="#top"
              aria-current="page"
              onClick={handleHomeClick}
              className="logo"
            >
              <span className="logo-font">{SITE_INFO.brand}</span>
            </a>

            <div className="menu-links">
              <a
                href="#menu"
                onClick={handleAnchorClick('#menu')}
                className="menu-link"
              >
                <span className="emphasis-l">Menu</span>
                <span className="link-background" aria-hidden="true" />
              </a>
              <a
                href="#custom-cake"
                onClick={handleAnchorClick('#custom-cake')}
                className="menu-link"
              >
                <span className="emphasis-l">Cake Lab</span>
                <span className="link-background" aria-hidden="true" />
              </a>
              <a
                href="#place"
                onClick={handleAnchorClick('#place')}
                className="menu-link"
              >
                <span className="emphasis-l">Place</span>
                <span className="link-background" aria-hidden="true" />
              </a>
              <a
                href="#visit"
                onClick={handleAnchorClick('#visit')}
                className="menu-link"
              >
                <span className="emphasis-l">Visit</span>
                <span className="link-background" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
