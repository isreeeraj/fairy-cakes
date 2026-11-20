import React from 'react';
import { ASSETS, MENU_ROWS } from '../data/fairyCakesData';

interface FullMenuSectionProps {
  onSelectFlavor?: (flavorId: string) => void;
}

export function FullMenuSection({ onSelectFlavor }: FullMenuSectionProps) {
  return (
    <section id="menu" className="section both-padd" aria-labelledby="menu-heading">
      <div className="container">
        <div className="menu-section-content">
          <div className="section-heading default">
            <img
              src={ASSETS.heartOutlineAccent}
              alt=""
              aria-hidden="true"
              className="illustration section-heading-illu"
            />
            <h2 id="menu-heading" className="h2 heading-h2 align-center">
              Our sweet &amp; savory menu
            </h2>
          </div>

          <div className="menu-info">
            <div className="menu-categories">
              {MENU_ROWS.map((row, rowIdx) => (
                <div key={rowIdx} className="menu-row">
                  {row.map((category) => (
                    <div key={category.title} className="menu-category">
                      <div className="category-header">
                        <h3 className="h3 h3-small">{category.title}</h3>
                        <div className="text-and-volume-wrapper">
                          <p className="body-m">{category.subtitle}</p>
                          <div className="volumes-wrapper">
                            <div className="body-m volume-text opacity">
                              {category.sizeSmallLabel}
                            </div>
                            <div className="body-m volume-text opacity">
                              {category.sizeLargeLabel}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="menu-items">
                        {category.items.map((item) => (
                          <div key={item.name} className="menu-item">
                            {item.flavorId && onSelectFlavor ? (
                              <button
                                type="button"
                                className="body-l menu-flavor-link"
                                onClick={() => onSelectFlavor(item.flavorId!)}
                                title={`Customize ${item.name} in Cake Lab`}
                              >
                                {item.name}
                              </button>
                            ) : (
                              <p className="body-l">{item.name}</p>
                            )}
                            <div className="volumes-wrapper">
                              <div className="body-m volume-text">{item.priceSmall}</div>
                              <div className="body-m volume-text">{item.priceLarge}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
