import React from 'react';

interface SplitWordsProps {
  text: string;
  className?: string;
}

/**
 * Splits a heading or quote into word spans matching Mello Coffee's
 * GSAP SplitText word-stagger elastic entrance while keeping natural
 * line wrapping and full screen-reader accessibility.
 */
export function SplitWords({ text, className = '' }: SplitWordsProps) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <span
            className={`split-word ${className}`.trim()}
            style={{ display: 'inline-block' }}
          >
            {word}
          </span>
          {index < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </>
  );
}
