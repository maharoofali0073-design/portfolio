import { useEffect, useRef } from 'react';
import { TILES, type Tile } from '../data';

// Rich gradients in the same family as the Contact button
const BACKGROUNDS = [
  'linear-gradient(135deg, #18011F 0%, #4A0A55 55%, #B600A8 130%)',
  'linear-gradient(135deg, #0E0B1A 0%, #2A1452 60%, #7621B0 140%)',
  'linear-gradient(135deg, #1A0B05 0%, #4D1D06 60%, #BE4C00 140%)',
  'linear-gradient(135deg, #111418 0%, #232A31 60%, #646973 150%)',
];

// Tripled so the rows stay filled while they slide
const ROW_1 = [...TILES.slice(0, 11), ...TILES.slice(0, 11), ...TILES.slice(0, 11)];
const ROW_2 = [...TILES.slice(11), ...TILES.slice(11), ...TILES.slice(11)];

function TileCard({ tile, index }: { tile: Tile; index: number }) {
  return (
    <div
      className="relative flex h-[270px] w-[420px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-7"
      style={{ background: BACKGROUNDS[index % BACKGROUNDS.length] }}
    >
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70">
        <span>{tile.meta}</span>
        {tile.live ? (
          <span className="flex items-center gap-2 rounded-full border border-[#3EE08F]/40 bg-[#3EE08F]/10 px-3 py-1 text-[#3EE08F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3EE08F]" />
            Live
          </span>
        ) : (
          <span className="rounded-full border border-white/20 px-3 py-1">{tile.badge ?? 'n8n'}</span>
        )}
      </div>
      <p className="hero-heading text-[2rem] font-bold uppercase leading-[1.05]">{tile.title}</p>
      <p className="text-sm font-light tracking-wide text-[#D7E2EA]/70">{tile.tools}</p>
    </div>
  );
}

function Row({ tiles, rowRef }: { tiles: Tile[]; rowRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={rowRef} className="flex w-max gap-3" style={{ willChange: 'transform' }}>
      {tiles.map((tile, i) => (
        <TileCard key={`${tile.title}-${i}`} tile={tile} index={i} />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      // Written straight to the DOM (no React state) so scrolling never re-renders the tiles
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Workflows and services I have built"
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 is right-aligned so moving right never exposes an empty edge */}
        <div className="flex justify-end">
          <Row tiles={ROW_1} rowRef={row1Ref} />
        </div>
        <Row tiles={ROW_2} rowRef={row2Ref} />
      </div>
    </section>
  );
}
