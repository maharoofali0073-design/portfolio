import type { ReactNode } from 'react';
type ButtonProps = {
  href?: string;
  children?: ReactNode;
  newTab?: boolean;
};

// Default target is the on-page contact section, so the button works even without a mail app installed
export function ContactButton({ href = '#contact', children = 'Contact Me' }: ButtonProps) {
  return (
    <a
      href={href}
      className="inline-block whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {children}
    </a>
  );
}

/** Ghost/outline pill. Rendered as a link when href is given, otherwise as a static label. */
export function GhostButton({ href, children = 'Live Project', newTab }: ButtonProps) {
  const className =
    'inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 sm:px-10 sm:py-3.5 sm:text-base';
  if (!href) return <span className={className}>{children}</span>;
  return (
    <a
      href={href}
      className={`${className} hover:bg-[#D7E2EA]/10`}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
