import React from 'react';

export type ActionButtonVariant =
  | 'black-primary'
  | 'white-primary'
  | 'black-secondary'
  | 'white-secondary';

interface ActionButtonProps {
  variant?: ActionButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const VARIANT_CLASS: Record<ActionButtonVariant, string> = {
  'black-primary': '',
  'white-primary': 'variant-white-primary',
  'black-secondary': 'variant-black-secondary',
  'white-secondary': 'variant-white-secondary',
};

export function ActionButton({
  variant = 'black-primary',
  href,
  target,
  rel,
  onClick,
  children,
  className = '',
  type = 'button',
}: ActionButtonProps) {
  const variantClass = VARIANT_CLASS[variant];
  const combinedClass = `button ${variantClass} ${className}`.trim();

  const inner = (
    <>
      <span className="button-border" aria-hidden="true" />
      <span className="button-background" aria-hidden="true" />
      <span className="emphasis-l top-index">{children}</span>
    </>
  );

  if (href) {
    const computedRel = target === '_blank' ? rel ?? 'noopener noreferrer' : rel;
    return (
      <a
        href={href}
        target={target}
        rel={computedRel}
        onClick={onClick}
        className={combinedClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {inner}
    </button>
  );
}
