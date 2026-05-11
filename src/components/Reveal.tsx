'use client';

import { CSSProperties, ReactNode, useEffect, useRef } from 'react';

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'p' | 'span';
  style?: CSSProperties;
}

export default function Reveal({
  children,
  delayMs = 0,
  className = '',
  as = 'div',
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      el.classList.add('is-visible');
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delayMs);
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs]);

  const Tag = as as unknown as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
