import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import PortraitOrb from '../components/PortraitOrb';
import { ContactButton } from '../components/Buttons';
import { PROFILE } from '../data';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20}>
        <ul className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40} onMount>
          {/* "maharoof" is longer than "jack": ~8.3em wide, so 11vw leaves a margin on every screen (incl. the scrollbar) */}
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[10.5vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[11vw] md:-mt-3">
            Hi, i&apos;m {PROFILE.firstName}
          </h1>
        </FadeIn>
      </div>

      {/* Portrait: positioning lives on a plain wrapper so FadeIn/Magnet transforms don't override the translate utilities */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            {PROFILE.photo ? (
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                width={912}
                height={986}
                className="block h-auto w-full select-none"
                draggable={false}
                // Soft fade on the cropped bottom edge so it melts into the background
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 78%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, #000 78%, transparent 100%)',
                }}
              />
            ) : (
              <PortraitOrb />
            )}
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {PROFILE.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
