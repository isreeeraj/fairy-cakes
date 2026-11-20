import React from 'react';
import { ASSETS, TICKER_ITEMS } from '../data/fairyCakesData';

export function Ticker() {
  const renderLine = (keyPrefix: string, isDuplicate: boolean) => (
    <div
      className={`ticker-line ${isDuplicate ? 'second' : 'first'}`}
      aria-hidden={isDuplicate ? true : undefined}
    >
      {TICKER_ITEMS.map((item, idx) => (
        <React.Fragment key={`${keyPrefix}-${idx}`}>
          <div className="display-s">{item}</div>
          <img
            src={ASSETS.heartDark}
            alt=""
            aria-hidden="true"
            className="illustration ticker-illu"
          />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="ticker" role="region" aria-label="Fairy Cakes highlights">
      <div className="ticker-content">
        {renderLine('first', false)}
        {renderLine('second', true)}
      </div>
    </div>
  );
}
