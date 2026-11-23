import React from 'react';
import { SITE_INFO } from '../data/fairyCakesData';

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

  return (
    <nav className="header" aria-label="Primary">
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
