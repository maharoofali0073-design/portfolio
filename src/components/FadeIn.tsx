import { useMemo, type ReactNode, type CSSProperties } from 'react';
import { motion } from 'framer-motion';

type FadeInProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  /** Animate on mount instead of when scrolled into view (for above-the-fold content inside overflow-hidden wrappers, which an in-view observer can never see) */
  onMount?: boolean;
};

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  onMount = false,
}: FadeInProps) {
  // motion.create() turns any element type into a motion component; memoised so it isn't recreated each render
  const MotionTag = useMemo(() => motion.create(as), [as]);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      {...(onMount
        ? { animate: { opacity: 1, x: 0, y: 0 } }
        : { whileInView: { opacity: 1, x: 0, y: 0 }, viewport: { once: true, margin: '50px', amount: 0 } })}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
